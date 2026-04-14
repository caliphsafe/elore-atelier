import Link from "next/link";

const collections = [
  {
    title: "Signature Forms",
    subtitle: "Refined silhouettes shaped for timeless presence.",
    href: "/shop",
  },
  {
    title: "Studio Editions",
    subtitle: "Limited pieces rooted in craft, detail, and character.",
    href: "/lookbook",
  },
  {
    title: "Custom Commissions",
    subtitle: "One-of-one hats built through an intentional bespoke process.",
    href: "/custom",
  },
];

export function FeaturedCollections() {
  return (
    <section className="section-pad pt-0">
      <div className="editorial-container">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Featured Collections</p>
            <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
              A storefront shaped like an atelier.
            </h2>
          </div>

          <Link
            href="/shop"
            className="hidden text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink md:inline-block"
          >
            View All Products
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
                <p className="eyebrow mb-3">Collection {index + 1}</p>
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
