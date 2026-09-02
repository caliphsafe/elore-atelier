import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[72svh] overflow-hidden bg-brand-ink text-brand-bone md:min-h-[76svh]">
      <Image
        src="/images/home/hero/hero.jpg"
        alt="ELÖRE ATELIER hat"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[30%_22%] md:object-[center_21%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-black/30" aria-hidden="true" />

      <div className="editorial-container relative z-10 flex min-h-[72svh] flex-col justify-end px-5 pb-8 pt-20 md:min-h-[76svh] md:px-8 md:pb-10 lg:px-12 lg:pb-12">
        <div className="flex items-end justify-between gap-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/shop" className="btn-light min-h-[52px] px-6 md:min-h-[56px] md:px-7">Shop the Collection</Link>
            <Link href="/custom" className="btn-outline-light min-h-[52px] px-6 md:min-h-[56px] md:px-7">Create Your Hat</Link>
          </div>

          <p className="hidden max-w-[26rem] pb-1 text-right font-serif text-2xl leading-tight text-white md:block lg:text-3xl">
            Where heritage is practiced, stories are shared, and craftsmanship evolves.
          </p>
        </div>
      </div>
    </section>
  );
}
