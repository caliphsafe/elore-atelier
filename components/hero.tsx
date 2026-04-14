import Link from "next/link";

export function Hero() {
  return (
    <section className="section-pad pt-10 md:pt-14">
      <div className="editorial-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="eyebrow">Luxury Hat Atelier</p>

          <h1 className="serif-display mt-5 text-5xl leading-[0.95] tracking-hero text-brand-ink sm:text-6xl md:text-7xl lg:text-[6.2rem]">
            Crafted for presence, shaped with intention.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 muted-copy md:text-lg">
            ELÖRE Atelier is a modern luxury storefront for handcrafted hats,
            blending editorial storytelling, refined product presentation, and
            a bespoke custom-order experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-mocha"
            >
              Shop the Collection
            </Link>

            <Link
              href="/custom"
              className="rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
            >
              Begin a Custom Hat
            </Link>
          </div>

          <div className="mt-12 grid max-w-2xl gap-4 border-t thin-border pt-6 sm:grid-cols-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                Crafted
              </p>
              <p className="mt-2 text-sm leading-6 text-brand-ink/75">
                Luxury hat forms made to feel singular and deeply personal.
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                Editorial
              </p>
              <p className="mt-2 text-sm leading-6 text-brand-ink/75">
                A brand experience inspired by fashion lookbooks and atelier culture.
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                Bespoke
              </p>
              <p className="mt-2 text-sm leading-6 text-brand-ink/75">
                A guided custom process ready to support one-of-one commissions.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="image-panel aspect-[4/5] rounded-luxe border thin-border shadow-soft" />

          <div className="grid gap-5 sm:grid-cols-[1fr_1.2fr]">
            <div className="soft-panel rounded-luxe border thin-border p-5 shadow-soft">
              <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                Studio Ethos
              </p>
              <p className="serif-display mt-4 text-2xl leading-tight text-brand-ink">
                The language of craft, texture, silhouette, and individuality.
              </p>
            </div>

            <div className="olive-panel rounded-luxe p-5 text-brand-white shadow-soft">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
                Custom Orders
              </p>
              <p className="serif-display mt-4 text-3xl leading-tight">
                From consultation to final shape, every detail carries intention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
