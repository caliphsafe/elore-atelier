import Link from "next/link";

const events = [
  {
    title: "Midas Event 01",
    text: "Featured event documentation with room for title, date, location, recap copy, and supporting visuals."
  },
  {
    title: "Midas Event 02",
    text: "A second event block for community activations, launches, or artist-centered cultural programming."
  },
  {
    title: "Midas Event 03",
    text: "Use this section to archive past activations in a structured editorial format."
  }
];

const workshops = [
  {
    title: "Workshop 01",
    text: "Educational or creative workshop entry with a short summary of audience, topic, and experience."
  },
  {
    title: "Workshop 02",
    text: "Another workshop module for production, storytelling, artist development, or visual craft."
  },
  {
    title: "Workshop 03",
    text: "This section can scale into a larger archive as Midas B.K.S continues to grow its programming."
  }
];

export default function SocialActivationsPage() {
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
          <p className="page-hero__eyebrow">Social Activations</p>
          <h1 className="page-hero__title">Events, Workshops, and Community Presence</h1>
          <p className="page-hero__text">
            This page is designed to document the Midas B.K.S footprint beyond
            client work alone. It creates space for activations, gatherings,
            workshops, and public-facing creative engagement.
          </p>
        </section>

        <section className="glass-card page-section">
          <p className="page-section__eyebrow">Midas Events</p>
          <h2 className="page-section__title">A Running Archive of Cultural Moments</h2>
          <p className="page-section__text">
            Each event can include featured imagery, date and location details,
            recap text, and optional links to media coverage or related visuals.
          </p>

          <div className="activation-list">
            {events.map((item) => (
              <article key={item.title} className="activation-card">
                <div className="activation-card__media">
                  <img src="/images/home-poster.jpg" alt={item.title} />
                </div>
                <div className="activation-card__body">
                  <p className="activation-card__eyebrow">Event</p>
                  <h3 className="activation-card__title">{item.title}</h3>
                  <p className="activation-card__text">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-card page-section">
          <p className="page-section__eyebrow">Workshops</p>
          <h2 className="page-section__title">Creative Education and Shared Knowledge</h2>
          <p className="page-section__text">
            This section is structured to hold workshops, panels, educational
            sessions, and community-centered learning experiences.
          </p>

          <div className="activation-list">
            {workshops.map((item) => (
              <article key={item.title} className="activation-card">
                <div className="activation-card__media">
                  <img src="/images/home-poster.jpg" alt={item.title} />
                </div>
                <div className="activation-card__body">
                  <p className="activation-card__eyebrow">Workshop</p>
                  <h3 className="activation-card__title">{item.title}</h3>
                  <p className="activation-card__text">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>Midas B.K.S</span>
          <span>Social Activations</span>
          <span>Boston, MA</span>
        </div>
      </footer>
    </div>
  );
}