import Image from "next/image";
import Link from "next/link";

const looks = [
  {
    title: "Look One",
    subtitle: "Structured silhouette with soft tonal contrast.",
    image: "/images/lookbook/look-1.jpg",
    alt: "ELÖRE Atelier look one"
  },
  {
    title: "Look Two",
    subtitle: "A quieter form built around texture and restraint.",
    image: "/images/lookbook/look-2.jpg",
    alt: "ELÖRE Atelier look two"
  },
  {
    title: "Look Three",
    subtitle: "A deeper mood shaped through shadow and line.",
    image: "/images/lookbook/look-3.jpg",
    alt: "ELÖRE Atelier look three"
  },
  {
    title: "Look Four",
    subtitle: "Refined proportions with a modern editorial tone.",
    image: "/images/lookbook/look-4.jpg",
    alt: "ELÖRE Atelier look four"
  },
  {
    title: "Look Five",
    subtitle: "Minimal styling that lets silhouette lead.",
    image: "/images/lookbook/look-5.jpg",
    alt: "ELÖRE Atelier look five"
  }
];

export default function LookbookPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-14">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <h1 className="serif-display text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              Favorite pieces, silhouettes, and details from Elöre Atelier.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              The lookbook brings the collection into focus through styled
              portraits, details, movement, texture, and the quiet character of
              each piece.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad pt-6">
        <div className="editorial-container grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[640px]">
            <Image
              src="/images/lookbook/hero.jpg"
              alt="ELÖRE Atelier lookbook hero"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-between rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8">
            <div>
              <h2 className="serif-display text-3xl leading-tight text-brand-ink md:text-4xl">
                Hats shaped through feeling, memory, texture, landscape, and story.
              </h2>
              <p className="mt-5 text-sm leading-7 text-brand-ink/72 md:text-base md:leading-8">
                From there, Salome translates emotion into form — balancing
                sculptural silhouettes with timeless elegance to create pieces
                that feel both contemporary and enduring.
              </p>
            </div>

            <div className="mt-8 border-t thin-border pt-6">
              <div className="grid gap-3 text-sm leading-7 text-brand-ink/72">
                <p>Handcrafted hats shaped from beginning to end</p>
                <p>Signature forms unique to the brand</p>
                <p>Natural materials selected for beauty and character</p>
                <p>Details completed with patience and care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="mb-8 max-w-2xl">
            <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-5xl">
              A curated view of the collection.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {looks.map((look, index) => (
              <article
                key={look.title}
                className={`overflow-hidden rounded-luxe border thin-border shadow-soft ${
                  index === 2 ? "olive-panel text-white" : "bg-white"
                }`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={look.image}
                    alt={look.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 hover:scale-[1.03]"
                  />
                  {index === 2 ? <div className="absolute inset-0 bg-black/20" /> : null}
                </div>
                <div className="p-6">
                  <h3
                    className={`serif-display text-3xl leading-tight ${
                      index === 2 ? "text-white" : "text-brand-ink"
                    }`}
                  >
                    {look.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-7 ${
                      index === 2 ? "text-white/80" : "text-brand-ink/72"
                    }`}
                  >
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
            <h2 className="serif-display text-3xl leading-tight text-white md:text-4xl">
              Every hat begins with a feeling.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/80 md:text-base md:leading-8">
              A memory. A texture. A landscape. A story waiting to be told.
              The goal is to create something that becomes part of the person
              who wears it.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[460px]">
              <Image
                src="/images/lookbook/styling-1.jpg"
                alt="ELÖRE Atelier styled hat detail"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[460px]">
              <Image
                src="/images/lookbook/styling-2.jpg"
                alt="ELÖRE Atelier styled look"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="overflow-hidden rounded-luxe border thin-border bg-white shadow-soft">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
              <div>
                <h2 className="serif-display max-w-2xl text-4xl leading-tight text-brand-ink md:text-5xl">
                  Move from the lookbook into the collection or a custom design.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-brand-ink/72">
                  Explore finished pieces, discover the studio process, or begin
                  a design conversation shaped around your own story.
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
