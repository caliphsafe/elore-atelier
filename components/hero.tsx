import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-brand-maroon text-brand-bone">
      <div className="absolute inset-0 lg:left-[27%]">
        <Image src="/images/home/hero/hero.jpg" alt="ELÖRE Atelier hat" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="absolute inset-y-0 left-0 w-[68%] bg-brand-maroon [clip-path:polygon(0_0,72%_0,100%_100%,0_100%)] sm:w-[62%] lg:w-[52%]" />
      <div className="absolute right-[7%] top-[14%] hidden aspect-square w-[9rem] rounded-full bg-brand-sand/90 md:block lg:w-[12rem]" />

      <div className="editorial-container relative z-10 flex min-h-[92svh] flex-col justify-end px-5 pb-10 pt-24 md:px-8 md:pb-12 lg:px-12 lg:pb-14">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_.45fr]">
          <div>
            <h1 className="serif-display max-w-[8ch] text-[clamp(5rem,12vw,12rem)] leading-[.7] tracking-[-.07em] text-brand-bone">
              Crafted for presence,<br /><em className="font-normal text-brand-sand">shaped with intention</em>
            </h1>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-light">Shop the Collection</Link>
              <Link href="/custom" className="btn-outline-light">Create Your Hat</Link>
            </div>
          </div>
          <div className="hidden border-l border-brand-bone/30 pl-6 lg:block">
            <p className="serif-display text-3xl leading-tight text-brand-bone">Elöre Atelier is a Boston-based atelier dedicated to preserving the craft of hat-making. Through thoughtful design, natural materials, and storytelling, each piece reflects a commitment to craftsmanship.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
