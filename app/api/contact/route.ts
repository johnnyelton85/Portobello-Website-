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

  // TODO: Replace this log with an email/CRM integration before launch.
  console.info("Contact request received", {
    name: payload.name,
    phone: payload.phone,
    email: payload.email || "Not supplied",
    message: payload.message,
  });

  return NextResponse.json({ ok: true });
}
