import Link from "next/link";

const playlist = [
  {
    title: "Snippet 01",
    text: "Placeholder module for music playlist previews, audio snippets, or linked media."
  },
  {
    title: "Snippet 02",
    text: "Use this area to feature selected songs, episodes, or clips tied to Midas TV and BKS Radio."
  },
  {
    title: "Snippet 03",
    text: "This can later become a custom embedded media grid with thumbnails and playback triggers."
  }
];

export default function MediaPage() {
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
          <p className="page-hero__eyebrow">Midas TV x BKS Radio</p>
          <h1 className="page-hero__title">A Media Extension Built Around Motion and Sound</h1>
          <p className="page-hero__text">
            This page acts as a branded media hub connecting visual content,
            video distribution, and playlist-driven listening experiences under
            one unified presentation.
          </p>
        </section>

        <section className="glass-card page-section media-feature">
          <div className="media-feature__logo">
            <div className="media-feature__logo-inner">3D LOGO</div>
          </div>

          <div className="media-feature__content">
            <p className="page-section__eyebrow">Featured Channel</p>
            <h2 className="page-section__title">Midas TV and BKS Radio, Framed as One Ecosystem</h2>
            <p className="page-section__text">
              The top section is reserved for a hero 3D logo or animated mark,
              paired with a direct link out to YouTube and room for featured
              channel positioning copy.
            </p>

            <div className="hero__actions">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Open YouTube
              </a>
              <a
                href="#playlist"
                className="button-secondary"
              >
                View Snippets
              </a>
            </div>
          </div>
        </section>

        <section id="playlist" className="glass-card page-section">
          <p className="page-section__eyebrow">Music Playlist With Snippets</p>
          <h2 className="page-section__title">A Curated Listening Layer</h2>
          <p className="page-section__text">
            This section is structured to hold playable snippets, playlist cards,
            embedded audio, or linked episodes depending on how the final media
            experience is shaped.
          </p>

          <div className="snippet-grid">
            {playlist.map((item) => (
              <article key={item.title} className="snippet-card">
                <div className="snippet-card__bar" />
                <div className="snippet-card__body">
                  <p className="snippet-card__eyebrow">Snippet</p>
                  <h3 className="snippet-card__title">{item.title}</h3>
                  <p className="snippet-card__text">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>Midas B.K.S</span>
          <span>Midas TV x BKS Radio</span>
          <span>Boston, MA</span>
        </div>
      </footer>
    </div>
  );
}