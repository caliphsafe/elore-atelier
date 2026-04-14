import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <p className="eyebrow">Contact</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              Begin a conversation with the atelier.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              For custom commissions, wholesale inquiries, collaborations, press,
              or general questions, we welcome thoughtful inquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8">
            <p className="eyebrow">Inquiry Details</p>

            <div className="mt-6 grid gap-6 text-sm leading-7 text-brand-ink/72 md:text-base">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                  Email
                </p>
                <p className="mt-2">hello@eloreatelier.com</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                  Custom Orders
                </p>
                <p className="mt-2">Please include timeline, sizing, references, and desired direction.</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                  Response Time
                </p>
                <p className="mt-2">Typically within 1–3 business days.</p>
              </div>
            </div>
          </div>

          <div className="rounded-luxe border thin-border bg-[#f7f1ea] p-6 shadow-soft md:p-8">
            <p className="eyebrow">Suggested Contact Form</p>

            <div className="mt-6 grid gap-4">
              <input placeholder="Full Name" className="rounded-xl border thin-border bg-white px-4 py-3 outline-none" />
              <input placeholder="Email Address" className="rounded-xl border thin-border bg-white px-4 py-3 outline-none" />
              <input placeholder="Subject" className="rounded-xl border thin-border bg-white px-4 py-3 outline-none" />
              <textarea
                placeholder="Tell us more..."
                rows={6}
                className="rounded-xl border thin-border bg-white px-4 py-3 outline-none"
              />

              <button className="mt-2 rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
