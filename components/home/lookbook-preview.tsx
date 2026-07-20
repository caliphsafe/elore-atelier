import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/home/lookbook/lookbook-1.jpg",
  "/images/home/lookbook/lookbook-2.jpg",
  "/images/home/lookbook/lookbook-3.jpg",
];

export function LookbookPreview() {
  return (
    <section className="px-5 py-14 md:px-8 md:py-20 lg:px-12">
      <div className="editorial-container">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">Lookbook</p>

          <h2 className="serif-display mt-4 text-4xl leading-tight text-brand-ink md:text-6xl">
            Favorite hats, styled through form, texture, and presence.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
            The ELÖRE lookbook gathers selected pieces from the collection through
            portraits, details, and styled moments that bring each silhouette into view.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative min-h-[620px] overflow-hidden rounded-luxe border thin-border shadow-soft">
            <Image
              src={images[0]}
              alt="ELÖRE editorial lookbook"
              fill
              sizes="(max-width:1024px) 100vw, 65vw"
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                Selected Edit
              </p>

              <h3 className="serif-display mt-3 max-w-lg text-4xl leading-tight text-white md:text-5xl">
                A closer look at favorite hats from the collection.
              </h3>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative min-h-[300px] overflow-hidden rounded-luxe border thin-border shadow-soft">
              <Image
                src={images[1]}
                alt="ELÖRE portrait"
                fill
                sizes="(max-width:1024px) 100vw, 35vw"
                className="object-cover transition duration-700 hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-black/15" />
            </div>

            <div className="relative min-h-[300px] overflow-hidden rounded-luxe border thin-border shadow-soft">
              <Image
                src={images[2]}
                alt="ELÖRE detail"
                fill
                sizes="(max-width:1024px) 100vw, 35vw"
                className="object-cover transition duration-700 hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                  Lookbook
                </p>

                <Link
                  href="/lookbook"
                  className="mt-3 inline-flex text-[11px] uppercase tracking-[0.26em] text-white transition hover:text-white/80"
                >
                  View the Lookbook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
