import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[94svh] overflow-hidden bg-[#211b19] text-white">
      <div className="absolute inset-0 lg:left-[27%]">
        <Image src="/images/home/hero/hero.jpg" alt="ELÖRE Atelier hat" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="absolute inset-y-0 left-0 w-[62%] bg-[#6a2832] [clip-path:polygon(0_0,72%_0,100%_100%,0_100%)] lg:w-[52%]" />
      <div className="elore-sun right-[7%] top-[14%] opacity-90" />
      <div className="editorial-container relative z-10 flex min-h-[94svh] flex-col px-5 pb-10 pt-28 md:px-8 lg:px-12">
        <div className="flex justify-between text-[10px] uppercase tracking-[.34em] text-white/75"><span>ELÖRE / Atelier</span><span className="hidden md:block">Boston</span></div>
        <div className="mt-auto grid items-end gap-8 lg:grid-cols-[1fr_.45fr]">
          <div>
            <p className="mb-5 max-w-xl text-xs uppercase tracking-[.32em] text-white/80">Hand formed. Story led. Made with presence.</p>
            <h1 className="serif-display elore-page-title max-w-[8ch]">Shaped<br/><em className="font-normal">with soul.</em></h1>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/shop" className="elore-btn elore-btn--light">Shop the Collection</Link><Link href="/custom" className="elore-btn elore-btn--ghost-light">Create Your Hat</Link></div>
          </div>
          <div className="hidden border-l border-white/30 pl-6 lg:block"><p className="serif-display text-3xl leading-tight">Craft is carried forward by the hands that reshape it.</p></div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden h-40 w-40 translate-x-10 translate-y-10 rounded-full border border-[#d5b66f] lg:block" />
    </section>
  );
}
