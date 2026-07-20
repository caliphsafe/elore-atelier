import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t thin-border bg-[#f7f1ea]">
      <div className="editorial-container grid gap-12 px-5 py-14 md:grid-cols-3 md:px-8 lg:px-12">
        <div>
          <p className="serif-display text-2xl tracking-[0.18em] text-brand-ink">
            ELÖRE
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-brand-ink/70">
            Boston-based handcrafted hats shaped through tradition, material,
            personal expression, and modern millinery.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-mocha">
            Explore
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-brand-ink/75">
            <Link href="/shop">Shop</Link>
            <Link href="/lookbook">Lookbook</Link>
            <Link href="/about">About</Link>
            <Link href="/studio">Studio</Link>
            <Link href="/experiences">Experiences</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-mocha">
            Contact
          </p>
          <div className="mt-4 max-w-sm text-sm leading-7 text-brand-ink/70">
            <p>One Avenue De Lafayette</p>
            <p>Boston, MA 02111</p>
            <p className="mt-3">(781) 985-8868</p>
            <p>contact@elore.design</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
