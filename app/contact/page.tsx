import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="contact-page bg-brand-bone text-brand-ink">
      <section className="relative overflow-hidden bg-brand-bone">
        <Image src="/images/bg/elorebg6.png" alt="" fill sizes="42vw" className="pointer-events-none absolute inset-y-0 left-0 z-0 object-contain object-left opacity-15 mix-blend-multiply" aria-hidden="true" />
        <div className="editorial-container relative z-10 px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24">
          <div className="max-w-3xl text-left">
            <h1 className="serif-display text-[clamp(4rem,8vw,8rem)] leading-[.8] tracking-[-.06em]">We’d Love to Hear From You.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-brand-ink/70 md:text-lg md:leading-9">For custom designs, workshops, collaborations, or general questions, contact ELÖRE ATELIER directly.</p>
          </div>

          <div className="mt-14 grid max-w-6xl gap-12 border-t border-black/15 pt-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <aside className="space-y-7 text-left">
              <div><h2 className="serif-display text-3xl">Address</h2><p className="mt-2 text-sm leading-7 text-brand-ink/70">One Avenue De Lafayette, Boston MA 02111</p></div>
              <div><h2 className="serif-display text-3xl">Phone</h2><a className="mt-2 inline-block text-sm text-brand-ink/70" href="tel:+17819858868">(781) 985-8868</a></div>
              <div><h2 className="serif-display text-3xl">Email</h2><a className="mt-2 inline-block text-sm text-brand-ink/70" href="mailto:contact@elore.design">contact@elore.design</a></div>
            </aside>

            <div className="contact-form-panel !bg-transparent !p-0">
              <div className="contact-form-panel__form max-w-3xl text-left">
                <input placeholder="Full Name" className="contact-field" />
                <input placeholder="Email Address" className="contact-field" />
                <input placeholder="Subject" className="contact-field" />
                <textarea placeholder="Tell us more..." rows={6} className="contact-field contact-field--textarea" />
                <button className="contact-submit">Send Inquiry</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
