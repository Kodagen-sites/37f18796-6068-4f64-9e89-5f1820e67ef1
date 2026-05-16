import { NextResponse } from "next/server";

/**
 * /api/contact — receives contact-form submissions.
 *
 * Landing-mode build: validates input and acknowledges. With Supabase or an
 * email provider wired later, the same route persists/forwards the message.
 */
export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = (await req.json()) as Record<string, string>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Please tell us your name." }, { status: 400 });
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }
  if (message.length < 5) {
    return NextResponse.json({ ok: false, error: "Please add a short message." }, { status: 400 });
  }

  // Persistence / email forwarding plugs in here (Supabase, Resend, etc.).
  console.info("[contact] enquiry received from", email);

  return NextResponse.json({ ok: true });
}
