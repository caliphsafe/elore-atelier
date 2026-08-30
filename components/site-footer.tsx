import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-0 bg-elore-maroon text-[#F6F0E5]">
      <div className="editorial-container px-5 py-14 md:px-8 md:py-20 lg:px-12">
        <p className="serif-display text-[clamp(4rem,12vw,10rem)] leading-[0.72] tracking-[-0.05em]">
          ELÖRE ATELIER
        </p>

        <div className="mt-12 grid gap-10 border-t border-white/25 pt-8 md:grid-cols-[1.1fr_.9fr_.9fr_1fr]">
          <div>
            <p className="max-w-md serif-display text-3xl leading-tight">
              Hats made with character, by hand and with intention.
            </p>
          </div>

          <nav className="site-footer-links text-xs uppercase tracking-[0.2em]" aria-label="Footer navigation">
            <Link href="/shop">Shop</Link>
            <Link href="/custom">Custom</Link>
            <Link href="/studio">Atelier</Link>
            <Link href="/experiences">Experiences</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <nav className="site-footer-links text-xs uppercase tracking-[0.2em]" aria-label="Footer resources">
            <a href="https://www.instagram.com/elore.atelier/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <Link href="/size-guide">Size Guide</Link>
            <span className="site-footer-pending">Refund Policy — Coming Soon</span>
            <span className="site-footer-pending">Privacy Policy — Coming Soon</span>
            <span className="site-footer-pending">Terms of Service — Coming Soon</span>
          </nav>

          <div className="text-sm leading-7 text-white/75">
            <p>One Avenue De Lafayette, Boston MA 02111</p>
            <p>(781) 985-8868</p>
            <p>contact@elore.design</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
