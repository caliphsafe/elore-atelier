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
          <div className="contact-hero__image" style={{ clipPath: "none", borderRadius: 0 }}>
            <Image src="/images/contact/studio.jpg" alt="ELÖRE Atelier studio in Downtown Boston" fill priority sizes="(max-width: 900px) 100vw, 48vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="contact-content relative overflow-hidden">
        <Image src="/images/bg/elorebg6.png" alt="" fill sizes="(max-width: 1024px) 80vw, 38vw" className="pointer-events-none absolute inset-y-0 left-0 z-0 object-contain object-left opacity-30 mix-blend-multiply" aria-hidden="true" />
        <div className="editorial-container contact-content__inner relative z-10">
          <aside className="contact-details">
            <div className="contact-detail"><h2 className="serif-display">Address</h2><p>One Avenue De Lafayette, Boston MA 02111</p></div>
            <div className="contact-detail contact-detail--offset"><h2 className="serif-display">Phone</h2><a href="tel:+17819858868">(781) 985-8868</a></div>
            <div className="contact-detail"><h2 className="serif-display">Email</h2><a href="mailto:contact@elore.design">contact@elore.design</a></div>
          </aside>
          <div className="contact-form-panel">
            <div className="contact-form-panel__accent" aria-hidden="true" />
            <div className="contact-form-panel__form">
              <input placeholder="Full Name" className="contact-field" />
              <input placeholder="Email Address" className="contact-field" />
              <input placeholder="Subject" className="contact-field" />
              <textarea placeholder="Tell us more..." rows={6} className="contact-field contact-field--textarea" />
              <button className="contact-submit">Send Inquiry</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
