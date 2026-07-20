import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <p className="eyebrow">Contact</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              Begin a conversation with Elöre Atelier.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              For workshops, custom inquiries, collaborations, press, or general questions, the studio welcomes thoughtful notes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8">
            <p className="eyebrow">Studio Details</p>

            <div className="mt-6 grid gap-6 text-sm leading-7 text-brand-ink/72 md:text-base">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                  Address
                </p>
                <p className="mt-2">One Avenue De Lafayette, Boston MA 02111</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                  Phone
                </p>
                <p className="mt-2">(781) 985-8868</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                  Email
                </p>
                <p className="mt-2">contact@elore.design</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                  Workshops
                </p>
                <p className="mt-2">Please include preferred date, number of guests, and the workshop type you are interested in.</p>
              </div>
            </div>
          </div>

          <div className="rounded-luxe border thin-border bg-[#f7f1ea] p-6 shadow-soft md:p-8">
            <p className="eyebrow">Inquiry Form</p>

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

      <section className="section-pad pt-0">
        <div className="editorial-container rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8">
          <p className="eyebrow">Next Steps</p>
          <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
            Looking for a workshop or a specific piece?
          </h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/experiences"
              className="rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
            >
              View Experiences
            </Link>
            <Link
              href="/shop"
              className="rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
            >
              Browse Shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
