import Link from "next/link";

export default function MerchPage() {
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
          <p className="page-hero__eyebrow">Merch</p>
          <h1 className="page-hero__title">A Direct Link Into The Midas B.K.S Store</h1>
          <p className="page-hero__text">
            This page is intentionally minimal. Its role is to create a branded
            transition between the main site and the external Shopify storefront
            without requiring an API integration.
          </p>
        </section>

        <section className="glass-card merch-panel">
          <div className="merch-panel__inner">
            <p className="page-section__eyebrow">Shopify Store</p>
            <h2 className="page-section__title">Browse The Latest Drops, Apparel, and Branded Releases</h2>
            <p className="page-section__text">
              When the final Shopify link is ready, this button will route users
              directly into the store experience.
            </p>

            <div className="hero__actions">
              <a
                href="https://shopify.com"
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Visit Store
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>Midas B.K.S</span>
          <span>Merch</span>
          <span>Boston, MA</span>
        </div>
      </footer>
    </div>
  );
}