import Image from "next/image";
import Link from "next/link";

export function HomeCta() {
  return (
    <section className="px-5 pb-10 pt-6 md:px-8 md:pb-14 lg:px-12">
      <div className="editorial-container">
        <div className="relative overflow-hidden rounded-luxe border thin-border shadow-soft" style={{ clipPath: "none", borderRadius: 0 }}>
          <div className="relative min-h-[520px] md:min-h-[640px]">
            <Image src="/images/home/closing/closing.jpg" alt="Elöre Atelier" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
            <div className="absolute inset-0 flex items-end"><div className="w-full p-6 md:p-10 lg:p-12"><div className="max-w-3xl"><h2 className="serif-display text-5xl leading-[0.92] text-white md:text-7xl">Every piece begins with a story.</h2><p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">Explore the collection, discover the studio, or step inside a guided workshop. Each path begins with craftsmanship and moves toward something personal.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link href="/shop" className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:bg-[#efe5d8]">Shop Collection</Link><Link href="/experiences" className="inline-flex justify-center rounded-full border border-white/60 px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white/10">Book an Experience</Link></div></div></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
