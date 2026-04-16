import Link from "next/link";

export default function HomePage() {
  return (
    <main className="landing-page">
      <div className="landing-page__media">
        <video
          className="landing-page__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/home-poster.jpg"
        >
          <source src="/videos/production-reel.mp4" type="video/mp4" />
        </video>
        <div className="landing-page__overlay" />
      </div>

      <div className="landing-page__frame">
        <div className="landing-page__top">
          <div className="landing-page__brand">
            <p className="landing-page__brand-mark">MIDAS B.K.S.F</p>
          </div>

          <div className="landing-page__contact">
            <a href="mailto:info@midasbks.com">info@midasbks.com</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              @midasbks
            </a>
          </div>
        </div>

        <div className="landing-page__middle">
          <div className="landing-page__headline-wrap">
            <p className="landing-page__eyebrow">Production Reel 2025</p>
            <h1 className="landing-page__headline">
              Visual Storytelling For Brands And Artists
            </h1>
          </div>
        </div>

        <div className="landing-page__bottom">
          <div className="landing-page__about">
            <p className="landing-page__small-mark">Midas B.K.S</p>
            <p className="landing-page__about-text">
              Midas B.K.S is a Boston-based production company and creative
              collective specializing in visual storytelling, photography, and
              videography.
            </p>
          </div>

          <nav className="landing-page__nav" aria-label="Main navigation">
            <Link href="/talent" className="landing-page__nav-link">
              Talent
            </Link>
            <Link href="/work" className="landing-page__nav-link">
              Work
            </Link>
            <Link
              href="/social-activations"
              className="landing-page__nav-link"
            >
              Activations
            </Link>
            <Link
              href="/midas-tv-bks-radio"
              className="landing-page__nav-link"
            >
              Midas TV / BKS Radio
            </Link>
            <Link href="/merch" className="landing-page__nav-link">
              Merch
            </Link>
            <Link href="/contact" className="landing-page__nav-link">
              Contact
            </Link>
          </nav>

          <div className="landing-page__locations">
            <p>Boston, MA</p>
            <p>Available Worldwide</p>
          </div>
        </div>
      </div>
    </main>
  );
}
