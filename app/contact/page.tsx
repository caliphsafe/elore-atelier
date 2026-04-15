import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="site-brand" aria-label="Go to homepage">
            <div className="site-brand__mark" />
            <div className="site-brand__text">
              <p className="site-brand__eyebrow">Boston Creative Collective</p>
              <p className="site-brand__name">Midas B.K.S</p>
            </div>
          </Link>

          <nav className="site-nav" aria-label="Main navigation">
            <Link href="/" className="site-nav__link">
              Home
            </Link>
            <Link href="/talent" className="site-nav__link">
              Talent
            </Link>
            <Link href="/work" className="site-nav__link">
              Work
            </Link>
            <Link href="/social-activations" className="site-nav__link">
              Activations
            </Link>
            <Link href="/midas-tv-bks-radio" className="site-nav__link">
              Media
            </Link>
            <Link href="/merch" className="site-nav__link">
              Merch
            </Link>
            <Link href="/contact" className="site-nav__link">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="page-wrap">
        <section className="page-hero">
          <p className="page-hero__eyebrow">Contact</p>
          <h1 className="page-hero__title">Start A Conversation</h1>
          <p className="page-hero__text">
            This page is designed to make inquiries feel direct, premium, and
            approachable. It combines a simple contact form with visible brand
            contact details and room for future inquiry routing.
          </p>
        </section>

        <section className="contact-grid">
          <div className="glass-card contact-card">
            <p className="page-section__eyebrow">Inquiry Form</p>
            <h2 className="page-section__title">Tell Us About Your Project</h2>
            <p className="page-section__text">
              For now this is a styled frontend form. We can connect it to
              Formspree, Resend, or another email handler after the full build
              is in place.
            </p>

            <form className="contact-form">
              <div className="contact-form__grid">
                <label className="field">
                  <span className="field__label">Name</span>
                  <input type="text" name="name" placeholder="Your name" />
                </label>

                <label className="field">
                  <span className="field__label">Email</span>
                  <input type="email" name="email" placeholder="Your email" />
                </label>
              </div>

              <label className="field">
                <span className="field__label">Subject</span>
                <input
                  type="text"
                  name="subject"
                  placeholder="What are you reaching out about?"
                />
              </label>

              <label className="field">
                <span className="field__label">Project Type</span>
                <select name="projectType" defaultValue="">
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option value="music-video">Music Video</option>
                  <option value="photography">Photography</option>
                  <option value="creative-direction">Creative Direction</option>
                  <option value="brand-campaign">Brand Campaign</option>
                  <option value="event-coverage">Event Coverage</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label className="field">
                <span className="field__label">Message</span>
                <textarea
                  name="message"
                  rows={7}
                  placeholder="Share your vision, timeline, and anything important."
                />
              </label>

              <button type="submit" className="button-primary">
                Send Inquiry
              </button>
            </form>
          </div>

          <div className="contact-side">
            <div className="glass-card contact-info-card">
              <p className="page-section__eyebrow">Direct Contact</p>
              <h2 className="page-section__title">Reach Midas B.K.S</h2>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="contact-info-item__label">Email</span>
                  <span className="contact-info-item__value">info@midasbks.com</span>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-item__label">Instagram</span>
                  <span className="contact-info-item__value">@midasbks</span>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-item__label">Location</span>
                  <span className="contact-info-item__value">Boston, Massachusetts</span>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-item__label">Availability</span>
                  <span className="contact-info-item__value">
                    Select projects, campaigns, and collaborations
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-card contact-note-card">
              <p className="page-section__eyebrow">What To Include</p>
              <h2 className="page-section__title">Helpful Details For Inquiries</h2>
              <ul className="simple-list">
                <li>Project type and overall creative goal</li>
                <li>Desired timeline or launch window</li>
                <li>Location and production needs</li>
                <li>Budget range or scope expectations</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>Midas B.K.S</span>
          <span>Contact</span>
          <span>Boston, MA</span>
        </div>
      </footer>
    </div>
  );
}}
