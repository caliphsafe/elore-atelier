import Link from "next/link";

const collections = [
  {
    title: "Signature Blocks",
    subtitle: "Silhouettes shaped on custom forms designed specifically for Elöre.",
    href: "/shop",
  },
  {
    title: "Studio Pieces",
    subtitle: "Handcrafted hats guided by material, proportion, and quiet detail.",
    href: "/shop",
  },
  {
    title: "Workshops & Experiences",
    subtitle: "Guided sessions for individuals, couples, and small groups.",
    href: "/experiences",
  },
];

export function FeaturedCollections() {
  return (
    <section className="section-pad pt-0">
      <div className="editorial-container">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Collections & Experiences</p>
            <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
              A brand built through craft, story, and shared making.
            </h2>
          </div>

          <Link
            href="/shop"
            className="hidden text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink md:inline-block"
          >
            View Shop
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((collection, index) => (
            <article
              key={collection.title}
              className="group overflow-hidden rounded-luxe border thin-border bg-white shadow-soft"
            >
              <div
                className={`aspect-[4/5] w-full ${
                  index === 0
                    ? "image-panel"
                    : index === 1
                    ? "bg-[linear-gradient(135deg,#ede2d2_0%,#c9b194_100%)]"
                    : "bg-[linear-gradient(135deg,#3b4b06_0%,#202b02_100%)]"
                }`}
              />

              <div className="p-6">
                <p className="eyebrow mb-3">Elöre {index + 1}</p>
                <h3 className="serif-display text-3xl leading-tight text-brand-ink">
                  {collection.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-ink/70">
                  {collection.subtitle}
                </p>

                <Link
                  href={collection.href}
                  className="mt-6 inline-flex text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition group-hover:text-brand-ink"
                >
                  Explore
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
