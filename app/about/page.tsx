import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Craftsmanship",
    text: "Every piece is presented with an emphasis on form, finish, and the quiet power of detail."
  },
  {
    title: "Individuality",
    text: "ELÖRE is shaped for people drawn to pieces that feel personal, distinctive, and lasting."
  },
  {
    title: "Timeless Presence",
    text: "The brand balances modern perspective with silhouettes and textures that endure beyond trend."
  },
  {
    title: "Intentional Design",
    text: "From visual direction to product presentation, every element is meant to feel considered."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <p className="eyebrow">About ELÖRE</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              A luxury hat brand shaped by craft, presence, and personal expression.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              ELÖRE Atelier is envisioned as a refined fashion destination where
              handcrafted hats are presented through an editorial lens—elevating
              each piece beyond product and into identity, atmosphere, and story.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6 text-base leading-8 text-brand-ink/75 md:text-lg">
            <p>
              ELÖRE is rooted in the belief that a hat can do more than complete
              a look. It can carry character, frame presence, and communicate a
              sense of individuality before a word is spoken.
            </p>
            <p>
              The brand is designed to live at the intersection of timeless form
              and modern expression. Through a restrained visual language,
              elevated presentation, and a focus on shape and texture, ELÖRE
              creates a world that feels both intimate and aspirational.
            </p>
            <p>
              Rather than functioning as a conventional storefront alone, the
              site is meant to reflect the atmosphere of an atelier—where craft,
              visual storytelling, and personal sƒtyle meet with intention.
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-luxe border thin-border shadow-soft">
  <Image src="/images/about/about-story.jpg"  alt="ELÖRE Atelier brand story"  fill   className="object-cover"  />
</div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Brand Pillars</p>
            <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
              Built around a clear point of view.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[1.75rem] border thin-border bg-white p-6 shadow-soft"
              >
                <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-brand-ink/72">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container overflow-hidden rounded-luxe border thin-border bg-[#f7f1ea] shadow-soft">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem]">
  <Image src="/images/about/about-perspective.jpg"   alt="ELÖRE Atelier visual perspective"   fill    className="object-cover"  />
</div>

            <div className="flex flex-col justify-center">
              <p className="eyebrow">The ELÖRE Perspective</p>
              <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-5xl">
                Fashion, atmosphere, and form presented with restraint.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72 md:text-lg">
                The visual world of ELÖRE is meant to feel polished without
                excess—luxurious, grounded, and emotionally resonant. Every page,
                image, and product moment should reinforce that sense of depth.
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-brand-ink/72 md:text-lg">
                It is this combination of intentional design and refined
                presentation that gives the brand its signature tone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="eyebrow">Next Steps</p>
                <h2 className="serif-display mt-4 max-w-2xl text-4xl leading-tight text-brand-ink md:text-5xl">
                  Explore the collection or begin a bespoke commission.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  Whether entering through the ready-to-shop collection or a
                  custom order, the experience should feel elevated, clear, and
                  personal from the very first interaction.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex w-fit rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-mocha"
                >
                  Shop the Collection
                </Link>
                <Link
                  href="/custom"
                  className="inline-flex w-fit rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  Begin a Custom Hat
                </Link>
                <Link
                  href="/studio"
                  className="inline-flex w-fit text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink"
                >
                  Enter the Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
