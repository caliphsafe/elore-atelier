import Link from "next/link";
import { ImageSlot } from "@/components/common/image-slot";

const looks = [
  {
    title: "Portraits",
    subtitle: "Favorite hats worn with presence and individuality.",
    image: "/images/lookbook-1.jpg"
  },
  {
    title: "Full Looks",
    subtitle: "Styled images that show how each hat lives on the body.",
    image: "/images/lookbook-2.jpg"
  },
  {
    title: "Details",
    subtitle: "Trim, felt, straw, texture, and finish in close view.",
    image: "/images/lookbook-3.jpg"
  },
  {
    title: "Movement",
    subtitle: "Hats seen through motion, atmosphere, and everyday expression.",
    image: "/images/lookbook-4.jpg"
  },
  {
    title: "Favorites",
    subtitle: "Selected pieces from the Elöre collection.",
    image: "/images/lookbook-5.jpg"
  },
  {
    title: "Studio Moments",
    subtitle: "The craft, material, and quiet details behind the finished work.",
    image: "/images/lookbook-6.jpg"
  }
];

export default function LookbookPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <p className="eyebrow">Lookbook</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              A visual archive of favorite pieces, people, and details.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              The lookbook presents Elöre through imagery — showing each hat in context, on the body, in motion, and through the details that make every piece distinct.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
          <ImageSlot
            src="/images/lookbook-hero.jpg"
            label="Elöre Atelier lookbook"
            className="aspect-[5/6] rounded-luxe border thin-border shadow-soft"
          />

          <div className="flex flex-col justify-between rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8">
            <div>
              <p className="eyebrow">Selected by Salomé</p>
              <h2 className="serif-display mt-4 text-3xl leading-tight text-brand-ink md:text-4xl">
                Favorite photos from the collection.
              </h2>
              <p className="mt-5 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
                Three to four images per hat create a closer look at the pieces, details, and silhouettes chosen for the Elöre lookbook.
              </p>
            </div>

            <div className="mt-8 border-t thin-border pt-6">
              <Link
                href="/shop"
                className="inline-flex rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Featured Looks</p>
            <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
              A gallery of silhouettes, material, and form.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {looks.map((look) => (
              <article
                key={look.title}
                className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft"
              >
                <ImageSlot
                  src={look.image}
                  label={look.title}
                  className="aspect-[4/5]"
                />
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                    {look.title}
                  </p>
                  <p className="mt-3 serif-display text-3xl leading-tight text-brand-ink">
                    {look.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-luxe olive-panel p-6 shadow-soft md:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
              Elöre Atelier
            </p>
            <h2 className="serif-display mt-4 text-3xl leading-tight text-white md:text-4xl">
              Each Elöre piece is shaped on custom signature blocks unique to the brand.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/80 md:text-base md:leading-8">
              The lookbook brings those silhouettes into view through favorite photos selected from the collection.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <ImageSlot
              src="/images/lookbook-7.jpg"
              label="Elöre Atelier lookbook image"
              className="aspect-[4/5] rounded-luxe border thin-border shadow-soft"
            />
            <ImageSlot
              src="/images/lookbook-8.jpg"
              label="Elöre Atelier lookbook image"
              className="aspect-[4/5] rounded-luxe border thin-border shadow-soft"
            />
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="eyebrow">Continue Exploring</p>
                <h2 className="serif-display mt-4 max-w-2xl text-4xl leading-tight text-brand-ink md:text-5xl">
                  Explore the collection, the studio, and the experiences.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  Elöre creates a space where tradition, creativity, and community move forward together.
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
                  href="/studio"
                  className="inline-flex w-fit rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  Enter the Studio
                </Link>
                <Link
                  href="/experiences"
                  className="inline-flex w-fit text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink"
                >
                  View Experiences
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
