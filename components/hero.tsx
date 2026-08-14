import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="px-5 pb-10 pt-6 md:px-8 md:pb-14 md:pt-8 lg:px-12">
      <div className="editorial-container">
        <div className="grid gap-5 lg:min-h-[64vh] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="order-2 flex flex-col justify-center rounded-luxe border thin-border bg-white/72 p-6 shadow-soft backdrop-blur md:p-8 lg:order-1 lg:p-10">
            <h1 className="serif-display max-w-3xl text-5xl leading-[0.92] tracking-hero text-brand-ink sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              Crafted for presence, shaped with intention.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 muted-copy md:text-xl md:leading-9">
              Elöre Atelier is a Boston-based atelier dedicated to preserving the
              craft of hat-making. Through thoughtful design, natural materials,
              and storytelling, each piece reflects a commitment to craftsmanship.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/shop"
                className="inline-flex justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-mocha"
              >
                Shop the Collection
              </Link>

              <Link
                href="/experiences"
                className="inline-flex justify-center rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
              >
                Book an Experience
              </Link>
            </div>
          </div>

          <div className="order-1 relative min-h-[430px] overflow-hidden rounded-luxe border thin-border shadow-soft sm:min-h-[540px] lg:order-2 lg:min-h-full">
            <Image
              src="/images/home/hero/hero.jpg"
              alt="ELÖRE Atelier hero"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
