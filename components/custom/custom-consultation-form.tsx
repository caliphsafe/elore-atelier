"use client";

import { FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { AvailabilityPicker } from "@/components/booking/availability-picker";

const C = "w-full border-b border-brand-olive/35 bg-transparent px-0 py-3 text-sm text-brand-olive outline-none";
const L = "experience-booking__label";

export function CustomConsultationForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const clearStart = useCallback((value: string) => setStart(value), []);

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
          type: "custom",
          website: data.get("website"),
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          mode: data.get("mode"),
          start,
          hatStyle: data.get("style"),
          headSize: data.get("headSize"),
          budget: data.get("budget"),
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
    <section id="custom-consultation" className="experience-booking">
      <div className="editorial-container experience-booking__inner">
        <aside className="experience-booking__intro">
          <h2 className="serif-display">Begin your custom consultation.</h2>
          <p>Select an available date and time to begin your one-on-one custom hat consultation.</p>
          <div className="experience-booking__selection">
            <p className="serif-display">30 Minutes</p>
            <span>In person or over a call</span>
          </div>
        </aside>

        <form onSubmit={submit} className="experience-booking__form">
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="experience-booking__row">
            <label><span className={L}>Full Name</span><input required name="name" className={C} /></label>
            <label><span className={L}>Email</span><input required type="email" name="email" className={C} /></label>
          </div>

          <div className="experience-booking__row">
            <label><span className={L}>Phone</span><input required name="phone" className={C} /></label>
            <label>
              <span className={L}>Consultation Format</span>
              <select name="mode" className={C}>
                <option>In person</option>
                <option>Over a call</option>
              </select>
            </label>
          </div>

          <AvailabilityPicker type="custom" date={date} start={start} onDate={setDate} onStart={clearStart} />

          <div className="experience-booking__row">
            <label><span className={L}>Hat Style / Direction</span><input name="style" className={C} /></label>
            <label><span className={L}>Head Measurement</span><input name="headSize" placeholder="If known" className={C} /></label>
          </div>

          <label><span className={L}>Budget Range</span><input name="budget" className={C} /></label>
          <label><span className={L}>Tell Us More</span><textarea name="notes" rows={5} className={C} /></label>

          <div className="experience-booking__submit">
            <p>Tuesday–Saturday · 1 PM–6 PM</p>
            <button disabled={status === "sending" || !start} className="btn-olive">
              {status === "sending" ? "Sending Request..." : "Request Consultation"}
            </button>
          </div>
          {status === "error" ? <p className="experience-booking__sent">{message}</p> : null}
        </form>
      </div>
    </section>
  );
}
