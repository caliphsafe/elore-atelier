import crypto from "crypto";

const ID = process.env.GOOGLE_CALENDAR_ID || "bookingelore@gmail.com";
export const BOOKING_TZ = process.env.BOOKING_TIME_ZONE || "America/New_York";

async function token() {
  const body = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID || "",
    client_secret: process.env.GOOGLE_CLIENT_SECRET || "",
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN || "",
    grant_type: "refresh_token",
  });
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Calendar authorization failed");
  return (await response.json()).access_token as string;
}

async function api(path: string, init: RequestInit = {}) {
  const response = await fetch("https://www.googleapis.com/calendar/v3" + path, {
    ...init,
    headers: {
      Authorization: `Bearer ${await token()}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
    cache: "no-store",
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("Google Calendar API error:", response.status, detail);
    throw new Error("Calendar request failed");
  }
  return response.status === 204 ? null : response.json();
}

export async function busyPeriods(timeMin: string, timeMax: string) {
  const result = await api("/freeBusy", {
    method: "POST",
    body: JSON.stringify({
      timeMin,
      timeMax,
      timeZone: BOOKING_TZ,
      items: [{ id: ID }],
    }),
  });
  return (result.calendars?.[ID]?.busy || []) as Array<{ start: string; end: string }>;
}

export async function available(start: string, end: string) {
  return (await busyPeriods(start, end)).length === 0;
}

type EventInput = {
  summary: string;
  description?: string;
  start: string;
  end: string;
  status?: "tentative" | "confirmed";
  transparency?: "opaque" | "transparent";
  visibility?: "default" | "private" | "public";
  location?: string;
};

export async function createEvent(input: EventInput) {
  return api(`/calendars/${encodeURIComponent(ID)}/events`, {
    method: "POST",
    body: JSON.stringify({
      summary: input.summary,
      description: input.description,
      location: input.location,
      start: { dateTime: input.start, timeZone: BOOKING_TZ },
      end: { dateTime: input.end, timeZone: BOOKING_TZ },
      status: input.status || "tentative",
      transparency: input.transparency || "opaque",
      visibility: input.visibility || "default",
    }),
  });
}

export async function confirmAppointment(
  id: string,
  email: string,
  summary: string,
  description?: string,
  location?: string
) {
  const event = await api(`/calendars/${encodeURIComponent(ID)}/events/${encodeURIComponent(id)}`);
  event.summary = summary;
  event.status = "confirmed";
  event.attendees = [{ email }];
  if (description) event.description = description;
  if (location) event.location = location;
  return api(
    `/calendars/${encodeURIComponent(ID)}/events/${encodeURIComponent(id)}?sendUpdates=all`,
    { method: "PUT", body: JSON.stringify(event) }
  );
}

export async function confirmPrivateEvent(id: string) {
  const event = await api(`/calendars/${encodeURIComponent(ID)}/events/${encodeURIComponent(id)}`);
  event.status = "confirmed";
  event.visibility = "private";
  event.transparency = "opaque";
  event.attendees = [];
  return api(`/calendars/${encodeURIComponent(ID)}/events/${encodeURIComponent(id)}`, {
    method: "PUT",
    body: JSON.stringify(event),
  });
}

export async function removeEvent(id?: string) {
  if (!id) return;
  await api(`/calendars/${encodeURIComponent(ID)}/events/${encodeURIComponent(id)}?sendUpdates=all`, {
    method: "DELETE",
  });
}

export function sign(data: object) {
  const payload = Buffer.from(JSON.stringify({ ...data, exp: Date.now() + 604800000 })).toString("base64url");
  const signature = crypto
    .createHmac("sha256", process.env.BOOKING_ACTION_SECRET || "")
    .update(payload)
    .digest("base64url");
  return `${payload}.${signature}`;
}

export function verify(tokenValue: string) {
  const [payload, signature] = tokenValue.split(".");
  if (!payload || !signature) throw new Error("Invalid token");

  const expected = crypto
    .createHmac("sha256", process.env.BOOKING_ACTION_SECRET || "")
    .update(payload)
    .digest("base64url");

  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) throw new Error("Invalid token");

  const data = JSON.parse(Buffer.from(payload, "base64url").toString());
  if (Date.now() > data.exp) throw new Error("Expired token");
  return data;
}
