import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-0 bg-elore-maroon text-[#F6F0E5]">
      <div className="editorial-container px-5 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="relative h-[110px] w-full max-w-[720px] md:h-[150px] lg:h-[180px]">
          <Image
            src="/images/elore_white.png"
            alt="ELÖRE ATELIER"
            fill
            sizes="(max-width: 768px) 90vw, 720px"
            className="object-contain object-left"
          />
        </div>
        <div className="mt-12 grid gap-10 border-t border-white/25 pt-8 md:grid-cols-[1.1fr_.9fr_.9fr_1fr]">
          <div><p className="max-w-md serif-display text-3xl leading-tight">Hats made with character, by hand and with intention.</p></div>
          <nav className="site-footer-links text-xs uppercase tracking-[0.2em]" aria-label="Footer navigation">
            <Link href="/shop">Shop</Link><Link href="/custom">Custom</Link><Link href="/studio">Atelier</Link><Link href="/experiences">Experiences</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
          </nav>
          <nav className="site-footer-links text-xs uppercase tracking-[0.2em]" aria-label="Footer resources">
            <a href="https://www.instagram.com/elore.atelier/" target="_blank" rel="noreferrer">Instagram</a>
            <Link href="/size-guide">Size Guide</Link><Link href="/refund-policy">Refund Policy</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link>
          </nav>
          <div className="text-sm leading-7 text-white/75"><p>One Avenue De Lafayette, Boston MA 02111</p><p>(781) 985-8868</p><p>salome@elore.design</p></div>
        </div>
      </div>
    </footer>
  );
}
