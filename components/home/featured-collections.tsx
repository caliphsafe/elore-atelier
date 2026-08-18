import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Summer Collection",
    subtitle: "Handcrafted pieces shaped for warm days, movement, and ease.",
    href: "/shop",
    image: "/images/home/collections/studio-editions.jpg",
    alt: "ELÖRE summer hat collection"
  },
  {
    title: "Signature Collection",
    subtitle: "Recognizable silhouettes shaped on custom blocks unique to Elöre.",
    href: "/shop",
    image: "/images/home/collections/signature.jpg",
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

type CollectionCardProps = {
  collection: (typeof collections)[number];
  className?: string;
  priority?: boolean;
  compact?: boolean;
};

function CollectionCard({
  collection,
  className = "",
  priority = false,
  compact = false
}: CollectionCardProps) {
  return (
    <Link
      href={collection.href}
      className={`group relative flex overflow-hidden bg-brand-ink ${className}`}
    >
      <Image
        src={collection.image}
        alt={collection.alt}
        fill
        priority={priority}
        sizes={
          compact
            ? "(max-width: 1024px) 100vw, 44vw"
            : "(max-width: 1024px) 100vw, 56vw"
        }
        className="object-cover transition duration-700 group-hover:scale-[1.025]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/24 to-black/5" />

      <div className="relative z-10 mt-auto w-full p-6 text-white md:p-8 lg:p-10">
        <h3
          className={`serif-display max-w-[9ch] leading-[0.9] tracking-[-0.055em] ${
            compact
              ? "text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
              : "text-6xl md:text-7xl lg:text-8xl"
          }`}
        >
          {collection.title}
        </h3>

        <p className="mt-4 max-w-xl text-base leading-7 text-white/86 md:text-lg md:leading-8">
          {collection.subtitle}
        </p>
      </div>
    </Link>
  );
}

export function FeaturedCollections() {
  return (
    <section className="bg-brand-sand/60 px-5 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
      <div className="editorial-container">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="serif-display max-w-4xl text-5xl leading-[0.9] tracking-[-0.055em] text-brand-olive md:text-6xl lg:text-7xl">
            Shop Featured Collections and Custom Designs
          </h2>

          <Link
            href="/shop"
            className="inline-flex w-fit min-h-[44px] items-center justify-center border border-brand-olive px-5 py-3 text-xs uppercase tracking-[0.24em] text-brand-olive transition hover:bg-brand-olive hover:text-white"
          >
            View All Products
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <CollectionCard
            collection={collections[0]}
            priority
            className="min-h-[430px] md:min-h-[560px] lg:min-h-[690px]"
          />

          <div className="grid gap-6">
            <CollectionCard
              collection={collections[1]}
              compact
              className="min-h-[360px] md:min-h-[420px] lg:min-h-[332px]"
            />

            <CollectionCard
              collection={collections[2]}
              compact
              className="min-h-[360px] md:min-h-[420px] lg:min-h-[332px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
