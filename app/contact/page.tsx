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
          <h1 className="page-hero__title">Start A Project</h1>
          <p className="page-hero__text">
            Reach out for production, photography, videography, creative
            direction, brand work, collaborations, or general inquiries.
          </p>
        </section>

        <section className="contact-layout">
          <div className="glass-card page-section">
            <p className="page-section__eyebrow">Contact Info</p>
            <h2 className="page-section__title">Get In Touch</h2>
            <p className="page-section__text">
              Use the information below for direct inquiries while the form
              handles general project requests.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <p className="contact-info-item__label">Email</p>
                <a
                  className="contact-info-item__value"
                  href="mailto:info@midasbks.com"
                >
                  info@midasbks.com
                </a>
              </div>

              <div className="contact-info-item">
                <p className="contact-info-item__label">Instagram</p>
                <a
                  className="contact-info-item__value"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  @midasbks
                </a>
              </div>

              <div className="contact-info-item">
                <p className="contact-info-item__label">Location</p>
                <p className="contact-info-item__value">Boston, MA</p>
              </div>

              <div className="contact-info-item">
                <p className="contact-info-item__label">Availability</p>
                <p className="contact-info-item__value">
                  Available for select projects worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card page-section">
            <p className="page-section__eyebrow">Inquiry Form</p>
            <h2 className="page-section__title">Tell Us About The Project</h2>

            <form className="contact-form">
              <div className="contact-form__grid">
                <label className="contact-form__field">
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Your name" />
                </label>

                <label className="contact-form__field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="contact-form__grid">
                <label className="contact-form__field">
                  <span>Company / Artist Name</span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Brand, artist, or company"
                  />
                </label>

                <label className="contact-form__field">
                  <span>Project Type</span>
                  <input
                    type="text"
                    name="projectType"
                    placeholder="Music video, campaign, photo shoot..."
                  />
                </label>
              </div>

              <label className="contact-form__field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={7}
                  placeholder="Tell us about your project, goals, timing, and any links we should review."
                />
              </label>

              <button type="submit" className="button-primary">
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>Midas B.K.S</span>
          <span>Contact / Inquiries</span>
          <span>Boston, MA</span>
        </div>
      </footer>
    </div>
  );
}
