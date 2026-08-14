import Image from "next/image";
import Link from "next/link";

export function AtelierStory() {
  return (
    <section className="bg-brand-bone px-5 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="editorial-container grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-stretch">
        <div className="relative min-h-[460px] overflow-hidden md:min-h-[590px]">
          <Image src="/images/home/atelier/atelier-story.jpg" alt="ELÖRE Atelier studio story" fill sizes="(max-width:1024px) 100vw,58vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h2 className="serif-display max-w-2xl text-4xl leading-tight text-white md:text-6xl">Where tradition moves forward.</h2>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-brand-ivory p-6 md:p-8 lg:p-10">
          <div>
            <h3 className="serif-display text-4xl leading-tight text-brand-olive md:text-5xl">Founded by Salome Kopasz, Elöre is rooted in craft, story and slow fashion.</h3>
            <p className="mt-6 text-base leading-8 text-brand-olive/75 md:text-lg">Born in Cameroon and raised in Paris, Salomé&apos;s creative perspective was shaped by a life immersed in culture, fashion, and artistry. As a former model, she experienced the fashion world from within, developing an appreciation for the relationship between clothing, identity, and self-expression…</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="btn-olive">Read About ELÖRE</Link>
            <Link href="/studio" className="btn-outline-olive">Enter the Atelier</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
