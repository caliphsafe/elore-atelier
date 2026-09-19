import { NextResponse } from "next/server";
import { availabilityForDate, availableDates, BookingKind } from "@/lib/elore-booking";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function kindOf(value: string | null): BookingKind | null {
  return value === "custom" || value === "experience" ? value : null;
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const kind = kindOf(url.searchParams.get("type"));
    if (!kind) return NextResponse.json({ error: "Invalid booking type." }, { status: 400 });

    const date = url.searchParams.get("date");
    if (date) {
      return NextResponse.json(
        { slots: await availabilityForDate(kind, date) },
        { headers: { "Cache-Control": "no-store" } }
      );
    }

    return NextResponse.json(
      { dates: await availableDates(kind) },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Availability error:", error);
    return NextResponse.json({ error: "Unable to load availability." }, { status: 500 });
  }
}
