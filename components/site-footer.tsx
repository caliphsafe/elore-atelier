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
            A Boston-based handcrafted hat brand carrying tradition forward through modern millinery, storytelling, and intentional design.
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
            Atelier Notes
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-brand-ink/70">
            Each piece begins with natural materials, signature blocks, and the belief that making by hand is an experience worth preserving.
          </p>
        </div>
      </div>
    </footer>
  );
}
