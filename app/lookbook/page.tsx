import Link from "next/link";
import { ImageSlot } from "@/components/common/image-slot";

const looks = [
  {
    title: "Look One",
    subtitle: "A signature silhouette shaped with quiet presence.",
    image: "/images/lookbook-1.jpg"
  },
  {
    title: "Look Two",
    subtitle: "Natural materials, sculptural form, and personal expression.",
    image: "/images/lookbook-2.jpg"
  },
  {
    title: "Look Three",
    subtitle: "A finished piece carrying the character of the hands that made it.",
    image: "/images/lookbook-3.jpg"
  },
  {
    title: "Look Four",
    subtitle: "A silhouette shaped on custom Elöre signature blocks.",
    image: "/images/lookbook-4.jpg"
  },
  {
    title: "Look Five",
    subtitle: "Craft, material, and identity brought into form.",
    image: "/images/lookbook-5.jpg"
  },
  {
    title: "Look Six",
    subtitle: "A contemporary expression of traditional millinery.",
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
              Favorite pieces from Elöre Atelier.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              The lookbook brings the collection into view through the silhouettes, details, and handcrafted pieces chosen to represent Elöre.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <ImageSlot
            src="/images/lookbook-hero.jpg"
            label="Elöre Atelier lookbook"
            className="aspect-[5/6] w-full min-w-0 rounded-luxe border thin-border shadow-soft"
          />

          <div className="flex min-w-0 flex-col justify-between rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8">
            <div>
              <p className="eyebrow">Elöre Atelier</p>
              <h2 className="serif-display mt-4 text-3xl leading-tight text-brand-ink md:text-4xl">
                Handcrafted hats shaped through material, memory, and intentional design.
              </h2>
              <p className="mt-5 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
                Each Elöre piece is made by hand using traditional European millinery techniques learned in Florence, Italy, and shaped on signature hat blocks unique to the brand.
              </p>
            </div>

            <div className="mt-8 border-t thin-border pt-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                Made By Hand
              </p>
              <p className="mt-4 text-sm leading-7 text-brand-ink/72">
                No two hats are ever exactly alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Selected Looks</p>
            <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
              Silhouettes, materials, and details chosen from the collection.
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
        <div className="editorial-container grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="rounded-luxe olive-panel p-6 shadow-soft md:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
              Signature Forms
            </p>
            <h2 className="serif-display mt-4 text-3xl leading-tight text-white md:text-4xl">
              Custom blocks create silhouettes that are uniquely Elöre.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/80 md:text-base md:leading-8">
              Each finished piece reflects the studio’s commitment to handmade artistry, natural materials, and sculptural character.
            </p>
          </div>

          <div className="grid min-w-0 gap-5 md:grid-cols-2">
            <ImageSlot
              src="/images/lookbook-7.jpg"
              label="Elöre Atelier lookbook"
              className="aspect-[4/5] w-full min-w-0 rounded-luxe border thin-border shadow-soft"
            />
            <ImageSlot
              src="/images/lookbook-8.jpg"
              label="Elöre Atelier lookbook"
              className="aspect-[4/5] w-full min-w-0 rounded-luxe border thin-border shadow-soft"
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
