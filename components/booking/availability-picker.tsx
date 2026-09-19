"use client";

import { useEffect, useMemo, useState } from "react";

type Kind = "custom" | "experience";
type Choice = { value: string; label: string };

function todayLocal() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

export function AvailabilityPicker({
  type,
  date,
  start,
  onDate,
  onStart,
}: {
  type: Kind;
  date: string;
  start: string;
  onDate: (value: string) => void;
  onStart: (value: string) => void;
}) {
  const [dates, setDates] = useState<Choice[]>([]);
  const [slots, setSlots] = useState<Choice[]>([]);
  const [loadingDates, setLoadingDates] = useState(true);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoadingDates(true);
    fetch(`/api/bookings/availability?type=${type}`, { cache: "no-store" })
      .then(async (r) => {
        const j = await r.json();
        if (!r.ok) throw new Error(j.error || "Unable to load availability.");
        if (active) setDates(j.dates || []);
      })
      .catch((e) => active && setError(e.message))
      .finally(() => active && setLoadingDates(false));
    return () => { active = false; };
  }, [type]);

  const availableDates = useMemo(() => new Set(dates.map((d) => d.value)), [dates]);
  const maxDate = dates.length ? dates[dates.length - 1].value : undefined;

  useEffect(() => {
    onStart("");
    setSlots([]);
    if (!date) return;

    // Native browser calendars cannot visually disable arbitrary individual dates.
    // We preserve the compact native picker, then immediately validate the selected
    // date against live ELÖRE availability before exposing any time choices.
    if (!availableDates.has(date)) {
      setError("That date is unavailable. Please choose another date.");
      return;
    }

    let active = true;
    setLoadingSlots(true);
    setError("");
    fetch(`/api/bookings/availability?type=${type}&date=${encodeURIComponent(date)}`, { cache: "no-store" })
      .then(async (r) => {
        const j = await r.json();
        if (!r.ok) throw new Error(j.error || "Unable to load times.");
        if (active) {
          setSlots(j.slots || []);
          if (!(j.slots || []).length) setError("That date is unavailable. Please choose another date.");
        }
      })
      .catch((e) => active && setError(e.message))
      .finally(() => active && setLoadingSlots(false));

    return () => { active = false; };
  }, [date, type, availableDates, onStart]);

  return (
    <div className="experience-booking__row">
      <label>
        <span className="experience-booking__label">Date</span>
        <input
          required
          type="date"
          value={date}
          min={todayLocal()}
          max={maxDate}
          onChange={(e) => {
            setError("");
            onDate(e.target.value);
          }}
          disabled={loadingDates}
          className="w-full border-b border-brand-olive/35 bg-transparent px-0 py-3 text-sm text-brand-olive outline-none"
        />
      </label>

      <label>
        <span className="experience-booking__label">Time</span>
        <select
          required
          value={start}
          onChange={(e) => onStart(e.target.value)}
          disabled={!date || !availableDates.has(date) || loadingSlots}
          className="w-full border-b border-brand-olive/35 bg-transparent px-0 py-3 text-sm text-brand-olive outline-none"
        >
          <option value="">
            {!date
              ? "Choose a date first"
              : !availableDates.has(date)
                ? "Date unavailable"
                : loadingSlots
                  ? "Loading available times..."
                  : slots.length
                    ? "Choose a time"
                    : "No times available"}
          </option>
          {slots.map((item) => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))}
        </select>
      </label>

      {error ? <p className="experience-booking__sent">{error}</p> : null}
    </div>
  );
}
