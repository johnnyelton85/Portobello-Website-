import { NextResponse } from "next/server";

const isSafeText = (value: unknown, max: number) =>
  typeof value === "string" && value.trim().length > 0 && value.length <= max;

const FERGUS_BASE = "https://api.fergus.com";
const MAX_PHOTOS = 5;
const MAX_PHOTO_BYTES = 20 * 1024 * 1024; // Fergus attachment limit

type EnquiryFields = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

async function createFergusEnquiry(
  token: string,
  fields: EnquiryFields,
): Promise<number | null> {
  const body = {
    name: fields.name,
    email: fields.email || "noreply@portobelloplumbing.co.nz",
    phoneNumber: fields.phone,
    description: fields.message,
    source: "Website",
    address1: "Not provided",
    addressCity: "Auckland",
    addressCountry: "NZ",
  };

  const response = await fetch(`${FERGUS_BASE}/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "(no body)");
    throw new Error(`Fergus enquiry ${response.status}: ${text}`);
  }

  const json = (await response.json().catch(() => null)) as
    | { data?: { id?: number } }
    | null;
  return json?.data?.id ?? null;
}

async function attachPhotoToEnquiry(
  token: string,
  enquiryId: number,
  file: File,
): Promise<void> {
  const form = new FormData();
  form.append("file", file, file.name);
  form.append("entityType", "enquiry");
  form.append("entityId", String(enquiryId));

  const response = await fetch(`${FERGUS_BASE}/attachments`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "(no body)");
    throw new Error(`Fergus attachment ${response.status}: ${text}`);
  }
}

export async function POST(request: Request) {
  let form: FormData;

  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const company = form.get("company");
  // Quietly accept bot submissions caught by the hidden honeypot.
  if (typeof company === "string" && company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = form.get("name");
  const phone = form.get("phone");
  const email = form.get("email");
  const message = form.get("message");

  if (
    !isSafeText(name, 100) ||
    !isSafeText(phone, 40) ||
    !isSafeText(message, 2_000) ||
    (email !== null &&
      email !== "" &&
      (typeof email !== "string" ||
        email.length > 200 ||
        !email.includes("@")))
  ) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 422 },
    );
  }

  const fields: EnquiryFields = {
    name: (name as string).trim(),
    phone: (phone as string).trim(),
    email: typeof email === "string" ? email.trim() : "",
    message: (message as string).trim(),
  };

  // Only keep valid image files, capped to the allowed count/size.
  const photos = form
    .getAll("photos")
    .filter(
      (item): item is File =>
        item instanceof File &&
        item.size > 0 &&
        item.size <= MAX_PHOTO_BYTES &&
        item.type.startsWith("image/"),
    )
    .slice(0, MAX_PHOTOS);

  console.info("Contact request received", {
    name: fields.name,
    phone: fields.phone,
    email: fields.email || "Not supplied",
    message: fields.message,
    photos: photos.length,
  });

  const token = process.env.FERGUS_API_TOKEN;
  if (!token) {
    console.warn("FERGUS_API_TOKEN not set — enquiry logged locally only.");
    return NextResponse.json({ ok: true });
  }

  try {
    const enquiryId = await createFergusEnquiry(token, fields);
    console.info("Enquiry forwarded to Fergus.", { enquiryId });

    if (enquiryId && photos.length > 0) {
      const results = await Promise.allSettled(
        photos.map((file) => attachPhotoToEnquiry(token, enquiryId, file)),
      );
      const failed = results.filter((r) => r.status === "rejected");
      if (failed.length > 0) {
        console.error(
          `Failed to attach ${failed.length}/${photos.length} photo(s) to enquiry ${enquiryId}.`,
          failed,
        );
      } else {
        console.info(`Attached ${photos.length} photo(s) to enquiry ${enquiryId}.`);
      }
    }
  } catch (err) {
    // Don't expose Fergus errors to the customer — the form still succeeds.
    console.error("Failed to forward enquiry to Fergus:", err);
  }

  return NextResponse.json({ ok: true });
}
