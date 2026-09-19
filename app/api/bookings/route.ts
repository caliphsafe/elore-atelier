import { NextResponse } from "next/server";
import { available, createEvent, removeEvent, sign } from "@/lib/elore-calendar";
import { customerEnd, formatCustomerTime, protectedEnd, validateStart, BookingKind } from "@/lib/elore-booking";
import { mail } from "@/lib/elore-mail";

export const runtime = "nodejs";

const ATELIER = "One Avenue De Lafayette, Boston MA 02111";

function clean(value: unknown, max = 4000) {
  return String(value ?? "").trim().slice(0, max);
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let appointmentId = "";
  let bufferId = "";

  try {
    const data = await request.json();

    if (clean(data.website, 200)) return NextResponse.json({ ok: true });

    const kind: BookingKind | null =
      data.type === "custom" ? "custom" : data.type === "experience" ? "experience" : null;
    const name = clean(data.name, 150);
    const email = clean(data.email, 320);
    const phone = clean(data.phone, 80);
    const start = new Date(clean(data.start, 100));

    if (!kind || !name || !validEmail(email) || !validateStart(kind, start)) {
      return NextResponse.json({ error: "Please choose an available date and time and complete the required fields." }, { status: 400 });
    }

    const end = customerEnd(kind, start);
    const blockedUntil = protectedEnd(kind, start);

    // Re-check at submission time so two customers cannot claim the same slot.
    if (!(await available(start.toISOString(), blockedUntil.toISOString()))) {
      return NextResponse.json(
        { error: "That time was just booked. Please choose another available time." },
        { status: 409 }
      );
    }

    const isCustom = kind === "custom";
    const workshop = clean(data.workshop, 120);
    const mode = clean(data.mode, 80) || "In person";
    const summary = isCustom ? "Custom Hat Consultation — ELÖRE ATELIER" : `${workshop} — ELÖRE ATELIER`;
    const internalSummary = isCustom ? `Custom Hat Consultation — ${name}` : `${workshop} — ${name}`;
    const customerWhen = formatCustomerTime(start, end);
    const location = isCustom && mode === "In person" ? ATELIER : undefined;

    const customerDescription = isCustom
      ? `ELÖRE ATELIER custom hat consultation.\n\nFormat: ${mode}\n${location ? `Location: ${location}\n` : ""}Date & time: ${customerWhen}`
      : `ELÖRE ATELIER ${workshop}.\n\nDate & time: ${customerWhen}`;

    const internalDescription = [
      `Customer: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      isCustom ? `Format: ${mode}` : `Workshop: ${workshop}`,
      !isCustom ? `Guests: ${clean(data.guests, 20) || "Not provided"}` : "",
      !isCustom ? `Occasion: ${clean(data.occasion, 200) || "Not provided"}` : "",
      isCustom ? `Hat style / direction: ${clean(data.hatStyle, 300) || "Not provided"}` : "",
      isCustom ? `Head measurement: ${clean(data.headSize, 100) || "Not provided"}` : "",
      isCustom ? `Budget range: ${clean(data.budget, 100) || "Not provided"}` : "",
      `Notes: ${clean(data.notes) || "Not provided"}`,
      `Customer appointment: ${customerWhen}`,
    ].filter(Boolean).join("\n");

    const appointment = await createEvent({
      summary: `PENDING — ${internalSummary}`,
      description: internalDescription,
      location,
      start: start.toISOString(),
      end: end.toISOString(),
      status: "tentative",
      transparency: "opaque",
    });
    appointmentId = appointment.id;

    const buffer = await createEvent({
      summary: "ELÖRE — Private",
      description: "Internal atelier scheduling block.",
      start: end.toISOString(),
      end: blockedUntil.toISOString(),
      status: "tentative",
      transparency: "opaque",
      visibility: "private",
    });
    bufferId = buffer.id;

    const base = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
    const tokenBase = {
      appointmentId,
      bufferId,
      email,
      summary,
      customerDescription,
      location: location || "",
      customerWhen,
    };
    const confirmToken = sign({ ...tokenBase, action: "confirm" });
    const declineToken = sign({ ...tokenBase, action: "decline" });

    await mail(
      process.env.FORM_TO_EMAIL || "bookingelore@gmail.com",
      `Approval needed — ${internalSummary}`,
      `${internalDescription}\n\nCONFIRM: ${base}/api/bookings/action?token=${encodeURIComponent(confirmToken)}\n\nDECLINE: ${base}/api/bookings/action?token=${encodeURIComponent(declineToken)}`,
      email
    );

    await mail(
      email,
      "ELÖRE booking request received",
      `Thank you, ${name}. We received your request for ${customerWhen}. ELÖRE ATELIER will contact you to confirm your booking.`
    );

    return NextResponse.json({ ok: true, redirect: "/thank-you?type=booking" });
  } catch (error) {
    console.error("Booking error:", error);
    // Avoid orphaning a partial hold if creation/email fails.
    try { await removeEvent(appointmentId); } catch {}
    try { await removeEvent(bufferId); } catch {}
    return NextResponse.json({ error: "Unable to submit booking. Please try again." }, { status: 500 });
  }
}
