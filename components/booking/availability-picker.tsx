"use client";

import { useEffect, useMemo, useState } from "react";

type Kind = "custom" | "experience";
type Choice = { value: string; label: string };

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function monthKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}
function isoDate(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function AvailabilityPicker({
  type, date, start, onDate, onStart,
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
  const [month, setMonth] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });

  useEffect(() => {
    let active = true;
    setLoadingDates(true);
    fetch(`/api/bookings/availability?type=${type}`, { cache: "no-store" })
      .then(async r => {
        const j = await r.json();
        if (!r.ok) throw new Error(j.error || "Unable to load availability.");
        if (active) {
          setDates(j.dates || []);
          if (j.dates?.length) {
            const [y,m] = j.dates[0].value.split("-").map(Number);
            setMonth(new Date(y, m - 1, 1));
          }
        }
      })
      .catch(e => active && setError(e.message))
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
      .then(async r => {
        const j = await r.json();
        if (!r.ok) throw new Error(j.error || "Unable to load times.");
        if (active) setSlots(j.slots || []);
      })
      .catch(e => active && setError(e.message))
      .finally(() => active && setLoadingSlots(false));
    return () => { active = false; };
  }, [date, type, onStart]);

  const available = useMemo(() => new Set(dates.map(d => d.value)), [dates]);
  const availableMonths = useMemo(() => new Set(dates.map(d => d.value.slice(0,7))), [dates]);
  const cells = useMemo(() => {
    const year=month.getFullYear(), m=month.getMonth();
    const first=new Date(year,m,1), last=new Date(year,m+1,0);
    const result:(Date|null)[]=[];
    for(let i=0;i<first.getDay();i++) result.push(null);
    for(let day=1;day<=last.getDate();day++) result.push(new Date(year,m,day));
    while(result.length%7) result.push(null);
    return result;
  }, [month]);

  const moveMonth = (delta:number) => {
    const next=new Date(month.getFullYear(),month.getMonth()+delta,1);
    if (availableMonths.has(monthKey(next))) setMonth(next);
  };

  return (
    <div className="booking-calendar">
      <div className="booking-calendar__heading">
        <div>
          <span className="experience-booking__label">Select a Date</span>
          <p className="serif-display">{month.toLocaleDateString("en-US",{month:"long",year:"numeric"})}</p>
        </div>
        <div className="booking-calendar__nav">
          <button type="button" aria-label="Previous month" onClick={()=>moveMonth(-1)}>←</button>
          <button type="button" aria-label="Next month" onClick={()=>moveMonth(1)}>→</button>
        </div>
      </div>

      <div className="booking-calendar__weekdays" aria-hidden="true">
        {WEEKDAYS.map(day=><span key={day}>{day}</span>)}
      </div>

      <div className="booking-calendar__grid">
        {cells.map((d,i)=>{
          if(!d) return <span className="booking-calendar__blank" key={`b-${i}`} />;
          const value=isoDate(d), open=available.has(value), selected=date===value;
          return (
            <button
              key={value}
              type="button"
              disabled={!open || loadingDates}
              aria-pressed={selected}
              className={`booking-calendar__day${selected?" is-selected":""}${open?" is-available":" is-unavailable"}`}
              onClick={()=>onDate(value)}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>

      <label className="booking-calendar__time">
        <span className="experience-booking__label">Available Time</span>
        <select
          required
          value={start}
          onChange={e=>onStart(e.target.value)}
          disabled={!date || loadingSlots}
          className="w-full border-b border-brand-olive/35 bg-transparent px-0 py-3 text-sm text-brand-olive outline-none"
        >
          <option value="">
            {!date ? "Select an available date first" : loadingSlots ? "Loading available times..." : slots.length ? "Choose a time" : "No times available"}
          </option>
          {slots.map(item=><option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
      </label>
      {error?<p className="experience-booking__sent">{error}</p>:null}

      <style jsx>{`
        .booking-calendar{margin:1.5rem 0 2rem;border-top:1px solid rgba(56,64,42,.22);padding-top:1.5rem}
        .booking-calendar__heading{display:flex;align-items:flex-end;justify-content:space-between;gap:1rem;margin-bottom:1.25rem}
        .booking-calendar__heading p{margin:.35rem 0 0;font-size:2rem;line-height:1;color:#38402A}
        .booking-calendar__nav{display:flex;gap:.5rem}
        .booking-calendar__nav button{width:42px;height:42px;border:1px solid rgba(56,64,42,.3);background:transparent;color:#38402A;cursor:pointer}
        .booking-calendar__weekdays,.booking-calendar__grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:.35rem}
        .booking-calendar__weekdays{margin-bottom:.45rem}
        .booking-calendar__weekdays span{text-align:center;font-size:.62rem;text-transform:uppercase;letter-spacing:.12em;color:rgba(56,64,42,.55)}
        .booking-calendar__day,.booking-calendar__blank{aspect-ratio:1;min-height:42px}
        .booking-calendar__day{border:1px solid rgba(56,64,42,.18);background:rgba(251,248,241,.72)!important;color:#38402A;cursor:pointer;font-size:.85rem}
        .booking-calendar__day.is-available:hover{border-color:#38402A;background:#d8cbb8!important}
        .booking-calendar__day.is-selected{background:#38402A!important;color:#f4ede2!important;border-color:#38402A}
        .booking-calendar__day.is-unavailable{background:rgba(56,64,42,.05)!important;color:rgba(56,64,42,.25)!important;text-decoration:line-through;cursor:not-allowed}
        .booking-calendar__time{display:block;margin-top:1.5rem}
        @media(max-width:600px){.booking-calendar__heading p{font-size:1.7rem}.booking-calendar__weekdays,.booking-calendar__grid{gap:.2rem}.booking-calendar__day,.booking-calendar__blank{min-height:38px}}
      `}</style>
    </div>
  );
}
