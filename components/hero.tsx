import Link from "next/link";
import { ImageSlot } from "@/components/common/image-slot";

export function Hero() {
  return (
    <section className="section-pad pt-10 md:pt-14">
      <div className="editorial-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="eyebrow">Boston Millinery Studio</p>

          <h1 className="serif-display mt-5 text-5xl leading-[0.95] tracking-hero text-brand-ink sm:text-6xl md:text-7xl lg:text-[6.2rem]">
            Handcrafted hats made to move tradition forward.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 muted-copy md:text-lg">
            Elöre Atelier is a Boston-based handcrafted hat brand founded by designer Salomé Kopasz. Each piece is shaped by hand through modern millinery, natural materials, and a story-led design process.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-mocha"
            >
              Shop the Collection
            </Link>

            <Link
              href="/experiences"
              className="rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
            >
              Explore Experiences
            </Link>
          </div>

          <div className="mt-12 grid max-w-2xl gap-4 border-t thin-border pt-6 sm:grid-cols-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                Handmade
              </p>
              <p className="mt-2 text-sm leading-6 text-brand-ink/75">
                Every hat is shaped from beginning to end through patient handwork.
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                Signature Blocks
              </p>
              <p className="mt-2 text-sm leading-6 text-brand-ink/75">
                Custom forms create silhouettes that are uniquely Elöre.
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                Experiences
              </p>
              <p className="mt-2 text-sm leading-6 text-brand-ink/75">
                Guided workshops invite people into the making process.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <ImageSlot
            src="/images/home-hero.jpg"
            label="Elöre Atelier handcrafted hat"
            className="aspect-[4/5] rounded-luxe border thin-border shadow-soft"
          />

          <div className="grid gap-5 sm:grid-cols-[1fr_1.2fr]">
            <div className="soft-panel rounded-luxe border thin-border p-5 shadow-soft">
              <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                The Studio
              </p>
              <p className="serif-display mt-4 text-2xl leading-tight text-brand-ink">
                A creative studio and shop in Downtown Boston where every hat begins.
              </p>
            </div>

            <div className="olive-panel rounded-luxe p-5 text-brand-white shadow-soft">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
                The Meaning
              </p>
              <p className="serif-display mt-4 text-3xl leading-tight">
                Elöre means to move forward: carrying tradition into what comes next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
