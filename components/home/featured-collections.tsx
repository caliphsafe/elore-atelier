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
  titleClassName?: string;
  copyClassName?: string;
  priority?: boolean;
};

function DesktopCollectionCard({
  collection,
  className = "",
  titleClassName = "",
  copyClassName = "",
  priority = false
}: CollectionCardProps) {
  return (
    <Link
      href={collection.href}
      className={`group absolute block overflow-hidden bg-brand-ink shadow-soft ${className}`}
    >
      <Image
        src={collection.image}
        alt={collection.alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 58vw"
        className="object-cover transition duration-700 group-hover:scale-[1.025]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/22 to-black/0" />

      <div className={`absolute z-40 text-white ${copyClassName}`}>
        <h3
          className={`serif-display leading-[0.86] tracking-[-0.055em] ${titleClassName}`}
        >
          {collection.title}
        </h3>

        <p className="mt-4 max-w-[32rem] text-base leading-7 text-white/88 md:text-lg md:leading-8">
          {collection.subtitle}
        </p>
      </div>
    </Link>
  );
}

function MobileCollectionCard({ collection }: { collection: (typeof collections)[number] }) {
  return (
    <Link
      href={collection.href}
      className="group relative block min-h-[430px] overflow-hidden bg-brand-ink"
    >
      <Image
        src={collection.image}
        alt={collection.alt}
        fill
        sizes="100vw"
        className="object-cover transition duration-700 group-hover:scale-[1.025]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/24 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white">
        <h3 className="serif-display max-w-[9ch] text-5xl leading-[0.88] tracking-[-0.055em]">
          {collection.title}
        </h3>

        <p className="mt-4 text-base leading-7 text-white/88">
          {collection.subtitle}
        </p>
      </div>
    </Link>
  );
}

export function FeaturedCollections() {
  return (
    <section className="home-collections">
      <div className="editorial-container home-collections__inner">
        <div className="home-collections__copy">
          <h2 className="serif-display">Shop Featured Collections and Custom Designs</h2>
          <Link href="/shop" className="home-collections__all">
            View All Products
          </Link>
        </div>

        <div className="relative hidden min-h-[860px] overflow-visible px-2 pb-12 pt-4 md:block">
          <DesktopCollectionCard
            collection={collections[0]}
            priority
            className="left-[1%] top-[1.5rem] z-10 h-[41rem] w-[58%] -rotate-[2deg]"
            titleClassName="max-w-[8ch] text-6xl md:text-7xl lg:text-8xl"
            copyClassName="bottom-12 left-9 right-auto max-w-[34rem] lg:left-11"
          />

          <DesktopCollectionCard
            collection={collections[1]}
            className="right-[3%] top-[4.25rem] z-20 h-[26rem] w-[45%] rotate-[2deg]"
            titleClassName="ml-auto max-w-[8ch] text-right text-5xl md:text-6xl lg:text-7xl"
            copyClassName="bottom-8 right-8 max-w-[29rem] text-right lg:right-10"
          />

          <DesktopCollectionCard
            collection={collections[2]}
            className="bottom-[1.5rem] right-[6%] z-30 h-[24rem] w-[55%] -rotate-[3deg]"
            titleClassName="ml-auto max-w-[11ch] text-right text-5xl md:text-6xl lg:text-7xl"
            copyClassName="bottom-8 right-8 max-w-[38rem] text-right lg:right-10"
          />
        </div>

        <div className="mt-3 grid gap-5 md:hidden">
          {collections.map((collection) => (
            <MobileCollectionCard key={collection.title} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}
