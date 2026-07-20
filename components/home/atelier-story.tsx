import Link from "next/link";

export function AtelierStory() {
  return (
    <section className="section-pad">
      <div className="editorial-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-luxe border thin-border bg-[linear-gradient(135deg,#efe0ce_0%,#d4baa1_55%,#b59472_100%)] shadow-soft">
          <div className="aspect-[4/5] w-full rounded-luxe" />
        </div>

        <div className="max-w-2xl">
          <p className="eyebrow">About the Founder</p>
          <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-6xl">
            Salomé Kopasz carries modern millinery forward from Boston.
          </h2>

          <p className="mt-6 text-base leading-8 text-brand-ink/72 md:text-lg">
            After studying Fashion Design in Boston, Salomé discovered hat-making during a short class in New York. That moment shifted her creative path and led her to formal training at Schola Academy in Florence, Italy.
          </p>

          <p className="mt-5 text-base leading-8 text-brand-ink/72 md:text-lg">
            Elöre, meaning “to move forward,” reflects her commitment to preserving and reimagining a craft that is meant to be carried, shared, and made new.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-mocha"
            >
              Read About Elöre
            </Link>
            <Link
              href="/studio"
              className="rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
            >
              Enter the Studio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
