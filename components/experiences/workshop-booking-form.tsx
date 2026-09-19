"use client";

import { FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { AvailabilityPicker } from "@/components/booking/availability-picker";

const C = "w-full border-b border-brand-olive/35 bg-transparent px-0 py-3 text-sm text-brand-olive outline-none";
const L = "experience-booking__label";
const WORKSHOPS = ["Private Workshop", "Couples Workshop", "Group Workshop"];

export function WorkshopBookingForm() {
  const router = useRouter();
  const [workshop, setWorkshop] = useState("Private Workshop");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const clearStart = useCallback((value: string) => setStart(value), []);

  const guestRule =
    workshop === "Private Workshop" ? { min: 1, max: 1, label: "1 guest" } :
    workshop === "Couples Workshop" ? { min: 2, max: 2, label: "2 guests" } :
    { min: 5, max: 10, label: "5–10 guests" };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!start) return setMessage("Please choose an available date and time.");
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "experience",
          website: data.get("website"),
          workshop,
          guests: data.get("guests"),
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          start,
          occasion: data.get("occasion"),
          notes: data.get("notes"),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to submit.");
      router.push(result.redirect || "/thank-you?type=booking");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to submit.");
      setStatus("error");
    }
  }

  return (
    <section id="workshop-booking" className="experience-booking">
      <div className="editorial-container experience-booking__inner">
        <aside className="experience-booking__intro">
          <h2 className="serif-display">Request a workshop date.</h2>
          <p>Choose an experience, then select from the dates and times currently available at the atelier.</p>
          <div className="experience-booking__selection">
            <p className="serif-display">{workshop}</p>
            <span>2-hour experience · {guestRule.label}</span>
          </div>
        </aside>

        <form onSubmit={submit} className="experience-booking__form">
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="experience-booking__row">
            <label>
              <span className={L}>Workshop Type</span>
              <select
                value={workshop}
                onChange={(e) => setWorkshop(e.target.value)}
                className={C}
              >
                {WORKSHOPS.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label>
              <span className={L}>Guests</span>
              <input
                key={workshop}
                required
                type="number"
                name="guests"
                min={guestRule.min}
                max={guestRule.max}
                defaultValue={guestRule.min}
                className={C}
              />
            </label>
          </div>

          <AvailabilityPicker type="experience" date={date} start={start} onDate={setDate} onStart={clearStart} />

          <div className="experience-booking__row">
            <label><span className={L}>Full Name</span><input required name="name" className={C} /></label>
            <label><span className={L}>Email</span><input required type="email" name="email" className={C} /></label>
          </div>

          <div className="experience-booking__row">
            <label><span className={L}>Phone</span><input required name="phone" className={C} /></label>
            <label><span className={L}>Occasion</span><input name="occasion" placeholder="Birthday, celebration, gathering..." className={C} /></label>
          </div>

          <label><span className={L}>Workshop Notes</span><textarea name="notes" rows={5} className={C} /></label>

          <div className="experience-booking__submit">
            <p>Tuesday–Saturday · 1 PM–6 PM</p>
            <button disabled={status === "sending" || !start} className="btn-olive">
              {status === "sending" ? "Sending Request..." : "Request Booking"}
            </button>
          </div>
          {status === "error" ? <p className="experience-booking__sent">{message}</p> : null}
        </form>
      </div>
    </section>
  );
}
