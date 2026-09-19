import { BOOKING_TZ, busyPeriods } from "@/lib/elore-calendar";

export type BookingKind = "custom" | "experience";

export const rules = {
  custom: { duration: 30, buffer: 30, firstMinute: 13 * 60, lastStartMinute: 17 * 60 },
  experience: { duration: 120, buffer: 30, firstMinute: 13 * 60, lastStartMinute: 16 * 60 },
} as const;

const WEEKDAYS = new Set(["Tue", "Wed", "Thu", "Fri", "Sat"]);

function easternParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: BOOKING_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const p = Object.fromEntries(parts.map((x) => [x.type, x.value]));
  return {
    date: `${p.year}-${p.month}-${p.day}`,
    weekday: p.weekday,
    minute: Number(p.hour) * 60 + Number(p.minute),
  };
}

function offsetForLocal(localIso: string) {
  const guess = new Date(localIso + "Z");
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: BOOKING_TZ,
    timeZoneName: "longOffset",
  }).formatToParts(guess);
  const zone = parts.find((p) => p.type === "timeZoneName")?.value || "GMT-04:00";
  const match = zone.match(/GMT([+-])(\d{2}):?(\d{2})?/);
  if (!match) return "-04:00";
  return `${match[1]}${match[2]}:${match[3] || "00"}`;
}

export function easternIso(date: string, minute: number) {
  const hh = String(Math.floor(minute / 60)).padStart(2, "0");
  const mm = String(minute % 60).padStart(2, "0");
  const local = `${date}T${hh}:${mm}:00`;
  return `${local}${offsetForLocal(local)}`;
}

export function validateStart(kind: BookingKind, start: Date) {
  if (Number.isNaN(start.getTime())) return false;
  const p = easternParts(start);
  const rule = rules[kind];
  return (
    WEEKDAYS.has(p.weekday) &&
    p.minute >= rule.firstMinute &&
    p.minute <= rule.lastStartMinute &&
    p.minute % 30 === 0
  );
}

export function customerEnd(kind: BookingKind, start: Date) {
  return new Date(start.getTime() + rules[kind].duration * 60000);
}

export function protectedEnd(kind: BookingKind, start: Date) {
  return new Date(start.getTime() + (rules[kind].duration + rules[kind].buffer) * 60000);
}

export function formatCustomerTime(start: Date, end: Date) {
  const date = new Intl.DateTimeFormat("en-US", {
    timeZone: BOOKING_TZ,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(start);
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: BOOKING_TZ,
    hour: "numeric",
    minute: "2-digit",
  });
  return `${date} · ${time.format(start)}–${time.format(end)}`;
}

export async function availabilityForDate(kind: BookingKind, date: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return [];
  const midday = new Date(easternIso(date, 12 * 60));
  const weekday = easternParts(midday).weekday;
  if (!WEEKDAYS.has(weekday)) return [];

  const todayEastern = easternParts(new Date()).date;
  if (date < todayEastern) return [];

  const rule = rules[kind];
  const queryStart = easternIso(date, rule.firstMinute);
  const queryEnd = easternIso(date, rule.lastStartMinute + rule.duration + rule.buffer);
  const busy = await busyPeriods(queryStart, queryEnd);

  const now = Date.now();
  const slots: Array<{ value: string; label: string }> = [];
  for (let minute = rule.firstMinute; minute <= rule.lastStartMinute; minute += 30) {
    const start = new Date(easternIso(date, minute));
    const end = protectedEnd(kind, start);
    if (start.getTime() <= now) continue;
    const conflicts = busy.some((period) => {
      const busyStart = new Date(period.start).getTime();
      const busyEnd = new Date(period.end).getTime();
      return start.getTime() < busyEnd && end.getTime() > busyStart;
    });
    if (!conflicts) {
      slots.push({
        value: start.toISOString(),
        label: new Intl.DateTimeFormat("en-US", {
          timeZone: BOOKING_TZ,
          hour: "numeric",
          minute: "2-digit",
        }).format(start),
      });
    }
  }
  return slots;
}

export async function availableDates(kind: BookingKind, days = 60) {
  const result: Array<{ value: string; label: string }> = [];
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: BOOKING_TZ,
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const base = new Date();
  for (let i = 0; i < days; i++) {
    const candidate = new Date(base.getTime() + i * 86400000);
    const parts = easternParts(candidate);
    if (!WEEKDAYS.has(parts.weekday)) continue;
    const slots = await availabilityForDate(kind, parts.date);
    if (slots.length) result.push({ value: parts.date, label: formatter.format(new Date(easternIso(parts.date, 12 * 60))) });
  }
  return result;
}
