import { confirmAppointment, confirmPrivateEvent, removeEvent, verify } from "@/lib/elore-calendar";
import { mail } from "@/lib/elore-mail";

export const runtime = "nodejs";

function page(title: string, copy: string) {
  return new Response(
    `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title></head><body style="margin:0;background:#f4ede2;color:#38402A;font-family:Arial,sans-serif;display:grid;min-height:100vh;place-items:center"><main style="max-width:620px;padding:48px;text-align:center"><h1 style="font-family:Georgia,serif;font-size:52px;font-weight:400;margin:0 0 18px">${title}</h1><p style="font-size:17px;line-height:1.7">${copy}</p></main></body></html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

export async function GET(request: Request) {
  try {
    const data = verify(new URL(request.url).searchParams.get("token") || "");

    if (data.action === "confirm") {
      await confirmAppointment(
        data.appointmentId,
        data.email,
        data.summary,
        data.customerDescription,
        data.location || undefined
      );
      await confirmPrivateEvent(data.bufferId);
      await mail(
        data.email,
        "Your ELÖRE booking is confirmed",
        `Your ELÖRE ATELIER booking is confirmed for ${data.customerWhen}. A Google Calendar invitation has been sent to you.`
      );
      return page("Booking confirmed.", "The customer has been sent their confirmation and calendar invitation.");
    }

    await removeEvent(data.appointmentId);
    await removeEvent(data.bufferId);
    await mail(
      data.email,
      "ELÖRE booking request update",
      "We were unable to confirm the requested time. Please return to ELÖRE ATELIER to choose another available date and time."
    );
    return page("Booking declined.", "The calendar hold has been released and the customer has been notified.");
  } catch (error) {
    console.error("Booking action error:", error);
    return page("Link unavailable.", "This booking link is invalid, expired, or has already been processed.");
  }
}
