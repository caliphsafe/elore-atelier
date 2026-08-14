import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-[#241C19] text-[#FAF8F2]">
      <Image src="/images/home/hero/hero.jpg" alt="ELÖRE Atelier" fill priority sizes="100vw" className="object-cover object-center opacity-[.82]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/5 to-black/10" />
      <div className="absolute inset-x-0 top-0 border-b border-white/25 px-5 py-4 md:px-8 lg:px-12">
        <div className="editorial-container flex justify-between text-[9px] uppercase tracking-[.26em]">
          <span>Contemporary Millinery</span><span className="hidden sm:inline">Boston · Handcrafted</span>
        </div>
      </div>
      <div className="editorial-container relative flex min-h-[calc(100svh-72px)] flex-col justify-end px-5 pb-7 pt-24 md:px-8 md:pb-10 lg:px-12">
        <p className="mb-5 max-w-sm text-xs uppercase tracking-[.26em] text-white/75">Form / Material / Identity</p>
        <h1 className="elore-display max-w-[11ch] text-[clamp(4.6rem,12vw,11rem)]">
          Sculpted<br/><em className="font-normal">by hand.</em>
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/shop" className="border border-white bg-white px-6 py-3 text-[10px] font-semibold uppercase tracking-[.22em] text-[#241C19]">Explore the Collection</Link>
          <Link href="/custom" className="border border-white/70 px-6 py-3 text-[10px] font-semibold uppercase tracking-[.22em]">Commission a Hat</Link>
        </div>
        <div className="mt-10 flex items-end justify-between border-t border-white/30 pt-4 text-[9px] uppercase tracking-[.22em] text-white/70">
          <span>ELÖRE Atelier</span><span>Scroll to enter the world ↓</span>
        </div>
      </div>
    </section>
  );
}
