import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Signature Forms",
    subtitle: "Refined silhouettes shaped for timeless presence.",
    href: "/shop",
    image: "/images/home/collections/signature.jpg",
    alt: "ELÖRE signature hat collection"
  },
  {
    title: "Studio Editions",
    subtitle: "Limited pieces rooted in craft, detail, and character.",
    href: "/lookbook",
    image: "/images/home/collections/studio-editions.jpg",
    alt: "ELÖRE studio edition hat"
  },
  {
    title: "Custom Commissions",
    subtitle: "One-of-one hats built through an intentional bespoke process.",
    href: "/custom",
    image: "/images/home/collections/custom.jpg",
    alt: "ELÖRE custom hat commission"
  },
];

export function FeaturedCollections() {
  return (
    <section className="px-5 py-14 md:px-8 md:py-20 lg:px-12">
      <div className="editorial-container">
        <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured Collections</p>
            <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-6xl">
              Collection paths for ready-to-wear and bespoke expression.
            </h2>
          </div>

          <Link
            href="/shop"
            className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink"
          >
            View All Products
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {collections.map((collection, index) => (
            <Link
  key={collection.title}
  href={collection.href}
  className="group relative min-h-[460px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[640px]"
>
              <Image
                src={collection.image}
                alt={collection.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/18 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                  Collection {index + 1}
                </p>

                <h3 className="serif-display mt-3 text-4xl leading-tight md:text-5xl">
                  {collection.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-white/78">
                  {collection.subtitle}
                </p>

                <span className="mt-6 inline-flex text-[11px] uppercase tracking-[0.26em] text-white/85 transition group-hover:text-white">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
