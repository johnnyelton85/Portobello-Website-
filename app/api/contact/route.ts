import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

const isSafeText = (value: unknown, max: number) =>
  typeof value === "string" && value.trim().length > 0 && value.length <= max;

async function forwardToFergus(payload: {
  name: string;
  phone: string;
  email: string;
  message: string;
}): Promise<void> {
  const token = process.env.FERGUS_API_TOKEN;
  if (!token) {
    console.warn("FERGUS_API_TOKEN not set — enquiry logged locally only.");
    return;
  }

  const body = {
    name: payload.name,
    email: payload.email || "noreply@portobelloplumbing.co.nz",
    phoneNumber: payload.phone,
    description: payload.message,
    source: "Website",
    address1: "Not provided",
    addressCity: "Auckland",
    addressCountry: "NZ",
  };

  const response = await fetch("https://api.fergus.com/enquiries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "(no body)");
    throw new Error(`Fergus API ${response.status}: ${text}`);
  }
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Quietly accept bot submissions caught by the hidden honeypot.
  if (typeof payload.company === "string" && payload.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (
    !isSafeText(payload.name, 100) ||
    !isSafeText(payload.phone, 40) ||
    !isSafeText(payload.message, 2_000) ||
    (payload.email !== undefined &&
      payload.email !== "" &&
      (typeof payload.email !== "string" ||
        payload.email.length > 200 ||
        !payload.email.includes("@")))
  ) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 422 },
    );
  }

  const name = payload.name as string;
  const phone = payload.phone as string;
  const email = (payload.email as string | undefined) ?? "";
  const message = payload.message as string;

  // Always log server-side so nothing is silently lost.
  console.info("Contact request received", {
    name,
    phone,
    email: email || "Not supplied",
    message,
  });

  try {
    await forwardToFergus({ name, phone, email, message });
    console.info("Enquiry forwarded to Fergus.");
  } catch (err) {
    // Don't expose Fergus errors to the customer — the form still succeeds.
    console.error("Failed to forward enquiry to Fergus:", err);
  }

  return NextResponse.json({ ok: true });
}
