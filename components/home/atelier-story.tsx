import Image from "next/image";
import Link from "next/link";

export function AtelierStory() {
  return (
    <section className="bg-[#F2EBDD] px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24">
      <div className="editorial-container">
        <div className="mb-10 flex items-center justify-between border-b thin-border pb-4">
          <span className="elore-kicker">02 / The Maker</span><span className="elore-kicker text-[#6F292B]">Hand / Story / Form</span>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.18fr_.82fr] lg:items-end">
          <div className="elore-crop relative min-h-[62vh]">
            <Image src="/images/home/atelier/atelier-story.jpg" alt="Salomé and the ELÖRE atelier" fill sizes="(max-width:1024px) 100vw, 60vw" className="object-cover" />
          </div>
          <div className="lg:pb-4">
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[.26em] text-[#596044]">Founded by Salome Kopasz</p>
            <h2 className="serif-display text-5xl leading-[.92] tracking-[-.045em] md:text-7xl">The hand behind the form.</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#241C19]/70 md:text-lg">
              Born in Cameroon and raised in Paris, Salomé&apos;s creative perspective was shaped by culture, fashion, artistry, and the relationship between identity and self-expression. ELÖRE brings that point of view into objects made slowly, intentionally, and by hand.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="elore-btn-dark">Meet Salomé</Link>
              <Link href="/studio" className="elore-btn-light">Enter the Atelier</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
