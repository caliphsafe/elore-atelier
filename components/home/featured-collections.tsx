import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Summer Collection",
    subtitle: "Handcrafted pieces shaped for warm days, movement, and ease.",
    href: "/shop",
    image: "/images/home/collections/signature.jpg",
    alt: "ELÖRE summer hat collection"
  },
  {
    title: "Signature Collection",
    subtitle: "Recognizable silhouettes shaped on custom blocks unique to Elöre.",
    href: "/shop",
    image: "/images/home/collections/studio-editions.jpg",
    alt: "ELÖRE signature hat collection"
  },
  {
    title: "Custom Design",
    subtitle: "One-of-one pieces guided by material, proportion, and personal story.",
    href: "/custom",
    image: "/images/home/collections/custom.jpg",
    alt: "ELÖRE custom hat design"
  },
];

export function FeaturedCollections() {
  return (
    <section className="px-5 py-10 md:px-8 md:py-14 lg:px-12">
      <div className="editorial-container">
        <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="serif-display text-4xl leading-tight text-brand-ink md:text-6xl">
              Shop Featured Collections and Custom Designs
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
          {collections.map((collection) => (
            <Link
              key={collection.title}
              href={collection.href}
              className="group relative min-h-[410px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[560px]"
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
                <h3 className="serif-display text-4xl leading-tight md:text-5xl">
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
