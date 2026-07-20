import Link from "next/link";
import { ImageSlot } from "@/components/common/image-slot";

const collections = [
  {
    title: "Summer Collection",
    subtitle: "Handcrafted hats shaped through natural materials, proportion, and care.",
    href: "/shop",
    image: "/images/home-collection-1.jpg",
  },
  {
    title: "Signature Collection",
    subtitle: "Silhouettes shaped on custom forms designed specifically for Elöre.",
    href: "/shop",
    image: "/images/home-collection-2.jpg",
  },
  {
    title: "Custom Design",
    subtitle: "One-of-one pieces shaped through material, story, and personal expression.",
    href: "/experiences",
    image: "/images/home-collection-3.jpg",
  },
];

export function FeaturedCollections() {
  return (
    <section className="section-pad pt-0">
      <div className="editorial-container">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Collections</p>
            <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
              Tradition, creativity, and craft moving forward together.
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
          {collections.map((collection) => (
            <article
              key={collection.title}
              className="group overflow-hidden rounded-luxe border thin-border bg-white shadow-soft"
            >
              <ImageSlot
                src={collection.image}
                label={collection.title}
                className="aspect-[4/5] transition duration-500 group-hover:scale-[1.02]"
              />

              <div className="p-6">
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
