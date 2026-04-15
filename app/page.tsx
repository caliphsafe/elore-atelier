import Link from "next/link";

const mediaLinks = [
  {
    title: "Instagram",
    meta: "Daily studio moments, campaign visuals, and updates.",
    href: "https://instagram.com",
    icon: "IG"
  },
  {
    title: "Midas TV",
    meta: "Motion-driven storytelling, visual worlds, and releases.",
    href: "https://youtube.com",
    icon: "TV"
  },
  {
    title: "BKS Radio",
    meta: "Curated sound, creative energy, and platform extension.",
    href: "https://youtube.com",
    icon: "RAD"
  }
];

const previews = [
  {
    eyebrow: "Talent",
    title: "A Creative Collective With Distinct Voices",
    text: "Meet the artists, directors, photographers, and visual minds shaping the Midas B.K.S identity.",
    href: "/talent"
  },
  {
    eyebrow: "Work",
    title: "Built Across Art, Fashion, Production, and Portraiture",
    text: "A layered showcase of featured projects, visual storytelling, editorial work, and creative output.",
    href: "/work"
  },
  {
    eyebrow: "Platform",
    title: "From Events and Workshops to Media Extensions",
    text: "Explore the broader ecosystem through social activations, Midas TV, BKS Radio, and direct contact.",
    href: "/social-activations"
  }
];

export default function HomePage() {
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
        <section className="hero">
          <div className="hero__media">
            <img
              className="hero__poster"
              src="/images/home-poster.jpg"
              alt="Midas B.K.S production reel poster"
            />
            <video
              className="hero__video"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/home-poster.jpg"
            >
              <source src="/videos/production-reel.mp4" type="video/mp4" />
            </video>
            <div className="hero__overlay" />
          </div>

          <div className="hero__content">
            <div className="hero__top">
              <div className="hero__badge">
                <p className="hero__label">Production Company</p>
                <p className="hero__meta">
                  Midas B.K.S is a production company for brands and artists who
                  value authentic expression.
                </p>
              </div>

              <div className="hero__contact">
                <p className="hero__label">Contact</p>
                <p className="hero__meta">
                  info@midasbks.com
                  <br />
                  @midasbks
                </p>
              </div>

              <div className="hero__locations">
                <p className="hero__label">Based In</p>
                <p className="hero__meta">
                  Boston, MA
                  <br />
                  Available Worldwide
                </p>
              </div>
            </div>

            <div className="hero__bottom">
              <div className="hero__eyebrow">2025 Production Reel</div>
              <h1 className="hero__title">
                Authentic Expression Through Cinematic Storytelling
              </h1>
              <p className="hero__subtitle">
                Midas B.K.S builds visual worlds for artists, brands, and
                creative culture through photography, videography, production,
                and multidimensional storytelling.
              </p>

              <div className="hero__actions">
                <Link href="/work" className="button-primary">
                  View Work
                </Link>
                <Link href="/contact" className="button-secondary">
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="home-grid">
          <div className="glass-card statement-card">
            <div>
              <p className="statement-card__eyebrow">Our Mission</p>
            </div>

            <h2 className="statement-card__title">
              To Inspire Fresh Perspectives Through Limitless Art Forms.
            </h2>

            <p className="statement-card__text">
              We exist to establish a powerful creative movement rooted in
              originality, energy, and expression. The goal is not simply to
              create visuals, but to shift perspective through bold artistic
              execution.
            </p>
          </div>

          <div className="glass-card media-links">
            <div className="media-links__header">
              <p className="media-links__eyebrow">Platforms</p>
              <p className="media-links__copy">
                Explore the Midas B.K.S ecosystem across social, video, and
                audio-driven channels.
              </p>
            </div>

            <div className="media-links__grid">
              {mediaLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="media-link"
                >
                  <div className="media-link__icon">{item.icon}</div>
                  <div className="media-link__text">
                    <p className="media-link__title">{item.title}</p>
                    <p className="media-link__meta">{item.meta}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section-preview">
          {previews.map((item) => (
            <div key={item.title} className="glass-card preview-card">
              <div>
                <p className="preview-card__eyebrow">{item.eyebrow}</p>
                <h3 className="preview-card__title">{item.title}</h3>
              </div>

              <div>
                <p className="preview-card__text">{item.text}</p>
              </div>

              <Link href={item.href} className="preview-card__link">
                Explore
              </Link>
            </div>
          ))}
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>Midas B.K.S</span>
          <span>Production Company for Brands and Artists</span>
          <span>Boston, MA</span>
        </div>
      </footer>
    </div>
  );
}