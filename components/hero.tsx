import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="elore-hero relative overflow-hidden bg-brand-ink text-white">
      <div className="relative min-h-[82svh] md:min-h-[88vh]">
        <Image
          src="/images/home/hero/hero.jpg"
          alt="ELÖRE Atelier hat"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

        <div className="editorial-container relative z-10 flex min-h-[82svh] flex-col justify-end px-5 pb-10 pt-24 md:min-h-[88vh] md:px-8 md:pb-14 lg:px-12">
          <div className="mb-auto flex items-center gap-3 pt-4 text-[10px] uppercase tracking-[0.32em] text-white/75">
            <span>ELÖRE / Atelier</span><span className="h-px w-12 bg-white/50"/><span>Boston</span>
          </div>
          <p className="mb-4 max-w-xl text-xs uppercase tracking-[0.3em] text-white/80">Hand formed. Story led. Made with presence.</p>
          <h1 className="serif-display max-w-5xl text-[clamp(4rem,10vw,9.5rem)] leading-[0.78] tracking-[-0.055em]">
            Shaped<br/>with soul.
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/shop" className="elore-btn elore-btn--light">Shop the Collection</Link>
            <Link href="/custom" className="elore-btn elore-btn--ghost-light">Create Your Hat</Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 text-center text-[10px] uppercase tracking-[0.28em]">
        <div className="bg-elore-maroon px-3 py-4">Form</div>
        <div className="bg-elore-olive px-3 py-4">Culture</div>
        <div className="bg-elore-sand px-3 py-4 text-brand-ink">Character</div>
      </div>
    </section>
  );
}
