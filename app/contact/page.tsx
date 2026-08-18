import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="editorial-container contact-hero__inner">
          <div className="contact-hero__copy">
            <h1 className="serif-display">Begin a conversation with the atelier.</h1>
            <p>
              For custom designs, workshops, collaborations, or general questions,
              contact Elöre Atelier directly.
            </p>
          </div>

          <div className="contact-hero__image">
            <Image
              src="/images/contact/studio.jpg"
              alt="ELÖRE Atelier studio in Downtown Boston"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="contact-content relative overflow-hidden">
        <Image
          src="/images/bg/elorebg6.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 80vw, 38vw"
          className="pointer-events-none absolute inset-y-0 left-0 z-0 object-contain object-left opacity-50 mix-blend-multiply"
          aria-hidden="true"
        />

        <div className="editorial-container contact-content__inner relative z-10">
          <aside className="contact-details">
            <div className="contact-detail">
              <h2 className="serif-display font-semibold">Address</h2>
              <p className="font-semibold text-brand-olive">One Avenue De Lafayette, Boston MA 02111</p>
            </div>

            <div className="contact-detail contact-detail--offset">
              <h2 className="serif-display font-semibold">Phone</h2>
              <a className="font-semibold text-brand-olive" href="tel:+17819858868">(781) 985-8868</a>
            </div>

            <div className="contact-detail">
              <h2 className="serif-display font-semibold">Email</h2>
              <a className="font-semibold text-brand-olive" href="mailto:contact@elore.design">contact@elore.design</a>
            </div>
          </aside>

          <div className="contact-form-panel relative z-10 bg-brand-bone/95 backdrop-blur-[2px]">
            <div className="contact-form-panel__accent" aria-hidden="true" />
            <div className="contact-form-panel__form">
              <input placeholder="Full Name" className="contact-field font-semibold text-brand-olive placeholder:text-brand-olive/70" />
              <input placeholder="Email Address" className="contact-field font-semibold text-brand-olive placeholder:text-brand-olive/70" />
              <input placeholder="Subject" className="contact-field font-semibold text-brand-olive placeholder:text-brand-olive/70" />
              <textarea placeholder="Tell us more..." rows={6} className="contact-field contact-field--textarea font-semibold text-brand-olive placeholder:text-brand-olive/70" />
              <button className="contact-submit">Send Inquiry</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
