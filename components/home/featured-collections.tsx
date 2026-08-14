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
  }
];

export function FeaturedCollections() {
  return (
    <section className="overflow-hidden bg-[#d5b66f] text-[#344200]">
      <div className="editorial-container px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:pt-20">
            <span className="elore-editorial-number" aria-hidden="true">02</span>
            <h2 className="serif-display -mt-8 text-5xl leading-[.88] text-brand-olive md:text-7xl">
              Shop Featured Collections and Custom Designs
            </h2>
            <Link
              href="/shop"
              className="mt-8 inline-flex border-b border-brand-olive pb-2 text-xs uppercase tracking-[.22em] text-brand-olive transition hover:border-brand-maroon hover:text-brand-maroon"
            >
              View All Products
            </Link>
          </div>

          <div className="relative lg:col-span-8 lg:min-h-[780px]">
            {collections.map((collection, index) => (
              <Link
                key={collection.title}
                href={collection.href}
                className={`group relative block overflow-hidden ${
                  index === 0
                    ? "organic-frame h-[440px] md:h-[600px] md:w-[62%]"
                    : index === 1
                      ? "organic-frame--soft ml-auto mt-[-70px] h-[340px] w-[72%] md:absolute md:right-0 md:top-0 md:mt-0 md:h-[420px] md:w-[48%]"
                      : "elore-slant mt-8 h-[360px] md:absolute md:bottom-0 md:right-[8%] md:h-[380px] md:w-[46%]"
                }`}
              >
                <Image
                  src={collection.image}
                  alt={collection.alt}
                  fill
                  sizes="(max-width:768px) 100vw,50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="serif-display text-4xl leading-none text-white md:text-5xl">
                    {collection.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/90">
                    {collection.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
