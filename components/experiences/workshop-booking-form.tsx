"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

const workshopOptions = [
  {
    value: "private",
    label: "Private Workshop",
    detail: "Single guest",
    guests: "1"
  },
  {
    value: "couples",
    label: "Couples Workshop",
    detail: "Two people",
    guests: "2"
  },
  {
    value: "group",
    label: "Group Workshop",
    detail: "5–10 people",
    guests: "5"
  }
];

const timeWindows = ["Morning", "Afternoon", "Evening", "Flexible"];

const inputClass =
  "w-full rounded-[1.1rem] border thin-border bg-white px-4 py-3 text-sm text-brand-ink outline-none transition placeholder:text-brand-ink/35 focus:border-brand-mocha";

const labelClass =
  "text-[10px] uppercase tracking-[0.28em] text-brand-mocha";

type BookingFormState = {
  workshop: string;
  guests: string;
  preferredDate: string;
  preferredTime: string;
  name: string;
  email: string;
  phone: string;
  occasion: string;
  notes: string;
};

const initialState: BookingFormState = {
  workshop: "private",
  guests: "1",
  preferredDate: "",
  preferredTime: "Afternoon",
  name: "",
  email: "",
  phone: "",
  occasion: "",
  notes: ""
};

export function WorkshopBookingForm() {
  const [form, setForm] = useState<BookingFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selected = params.get("workshop");
    const match = workshopOptions.find((option) => option.value === selected);

    if (match) {
      setForm((current) => ({
        ...current,
        workshop: match.value,
        guests: match.guests
      }));
    }
  }, []);

  const selectedWorkshop = useMemo(
    () =>
      workshopOptions.find((option) => option.value === form.workshop) ??
      workshopOptions[0],
    [form.workshop]
  );

  function updateField(field: keyof BookingFormState, value: string) {
    setSubmitted(false);

    if (field === "workshop") {
      const match = workshopOptions.find((option) => option.value === value);
      setForm((current) => ({
        ...current,
        workshop: value,
        guests: match?.guests ?? current.guests
      }));
      return;
    }

    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    const subject = `Workshop Booking Request — ${selectedWorkshop.label}`;
    const body = [
      "New workshop booking request:",
      "",
      `Workshop: ${selectedWorkshop.label}`,
      `Guest count: ${form.guests}`,
      `Preferred date: ${form.preferredDate}`,
      `Preferred time: ${form.preferredTime}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Occasion: ${form.occasion || "Not provided"}`,
      "",
      "Notes:",
      form.notes || "Not provided"
    ].join("
");

    window.location.href = `mailto:contact@elore.design?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="workshop-booking" className="px-5 pb-16 pt-6 md:px-8 md:pb-20 lg:px-12">
      <div className="editorial-container">
        <div className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div className="flex flex-col justify-between rounded-[1.5rem] bg-[#f7f1ea] p-6 md:p-8">
              <div>
                <h2 className="serif-display max-w-2xl text-4xl leading-tight text-brand-ink md:text-5xl">
                  Request a workshop date.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  Choose a workshop format, share your preferred date, and the
                  atelier will confirm availability before finalizing the booking.
                </p>
              </div>

              <div className="mt-8 grid gap-4 text-sm leading-7 text-brand-ink/72">
                <div className="rounded-[1.25rem] border thin-border bg-white p-5">
                  <p className="serif-display text-3xl leading-tight text-brand-ink">
                    {selectedWorkshop.label}
                  </p>
                  <p className="mt-2">{selectedWorkshop.detail}</p>
                </div>

                <div className="rounded-[1.25rem] border thin-border bg-white p-5">
                  <p>
                    Your request is sent directly to the atelier. Availability,
                    final pricing, and next steps are confirmed by follow-up.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className={labelClass}>Workshop Type</span>
                  <select
                    required
                    value={form.workshop}
                    onChange={(event) => updateField("workshop", event.target.value)}
                    className={inputClass}
                  >
                    {workshopOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className={labelClass}>Number of Guests</span>
                  <input
                    required
                    type="number"
                    min={form.workshop === "group" ? 5 : 1}
                    max={form.workshop === "group" ? 10 : form.workshop === "couples" ? 2 : 1}
                    value={form.guests}
                    onChange={(event) => updateField("guests", event.target.value)}
                    className={inputClass}
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className={labelClass}>Preferred Date</span>
                  <input
                    required
                    type="date"
                    value={form.preferredDate}
                    onChange={(event) => updateField("preferredDate", event.target.value)}
                    className={inputClass}
                  />
                </label>

                <label className="grid gap-2">
                  <span className={labelClass}>Preferred Time</span>
                  <select
                    required
                    value={form.preferredTime}
                    onChange={(event) => updateField("preferredTime", event.target.value)}
                    className={inputClass}
                  >
                    {timeWindows.map((timeWindow) => (
                      <option key={timeWindow} value={timeWindow}>
                        {timeWindow}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className={labelClass}>Full Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </label>

                <label className="grid gap-2">
                  <span className={labelClass}>Email Address</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className={labelClass}>Phone Number</span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    placeholder="(000) 000-0000"
                    className={inputClass}
                  />
                </label>

                <label className="grid gap-2">
                  <span className={labelClass}>Occasion</span>
                  <input
                    value={form.occasion}
                    onChange={(event) => updateField("occasion", event.target.value)}
                    placeholder="Birthday, date, team outing..."
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className={labelClass}>Workshop Notes</span>
                <textarea
                  value={form.notes}
                  onChange={(event) => updateField("notes", event.target.value)}
                  placeholder="Share anything helpful about the date, group, materials, or custom direction."
                  rows={5}
                  className={inputClass}
                />
              </label>

              <div className="grid gap-3 rounded-[1.25rem] border thin-border bg-[#f7f1ea] p-5 text-sm leading-7 text-brand-ink/72 md:grid-cols-[1fr_auto] md:items-center">
                <p>
                  Booking requests are reviewed by the atelier before confirmation.
                </p>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
                >
                  Request Booking
                </button>
              </div>

              {submitted ? (
                <div className="rounded-[1.25rem] border thin-border bg-white p-5 text-sm leading-7 text-brand-ink/72">
                  <p>
                    Your email app should open with the workshop request ready to
                    send to contact@elore.design.
                  </p>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
