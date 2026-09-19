"use client";

import { useEffect, useState } from "react";

type Kind = "custom" | "experience";
type Choice = { value: string; label: string };

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

  useEffect(() => {
    onStart("");
    setSlots([]);
    if (!date) return;
    let active = true;
    setLoadingSlots(true);
    setError("");
    fetch(`/api/bookings/availability?type=${type}&date=${encodeURIComponent(date)}`, { cache: "no-store" })
      .then(async (r) => {
        const j = await r.json();
        if (!r.ok) throw new Error(j.error || "Unable to load times.");
        if (active) setSlots(j.slots || []);
      })
      .catch((e) => active && setError(e.message))
      .finally(() => active && setLoadingSlots(false));
    return () => { active = false; };
  }, [date, type, onStart]);

  return (
    <div className="experience-booking__row">
      <label>
        <span className="experience-booking__label">Available Date</span>
        <select
          required
          value={date}
          onChange={(e) => onDate(e.target.value)}
          className="w-full border-b border-brand-olive/35 bg-transparent px-0 py-3 text-sm text-brand-olive outline-none"
          disabled={loadingDates}
        >
          <option value="">{loadingDates ? "Loading available dates..." : "Choose a date"}</option>
          {dates.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
      </label>

      <label>
        <span className="experience-booking__label">Available Time</span>
        <select
          required
          value={start}
          onChange={(e) => onStart(e.target.value)}
          className="w-full border-b border-brand-olive/35 bg-transparent px-0 py-3 text-sm text-brand-olive outline-none"
          disabled={!date || loadingSlots}
        >
          <option value="">
            {!date ? "Choose a date first" : loadingSlots ? "Loading available times..." : slots.length ? "Choose a time" : "No times available"}
          </option>
          {slots.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
      </label>

      {error ? <p className="experience-booking__sent">{error}</p> : null}
    </div>
  );
}
