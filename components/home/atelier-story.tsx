import Link from "next/link";

export function AtelierStory() {
  return (
    <section className="home-story-section bg-brand-bone px-5 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="home-story-grid editorial-container grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-stretch">
        <div className="home-story-video">
          <iframe
            title="ELÖRE Atelier film"
            src="https://player.vimeo.com/video/1218122493?h=bb73f54b5a"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="home-story-video__caption">
            <h2 className="serif-display">Where tradition moves forward.</h2>
          </div>
        </div>
        <div className="home-story-copy flex flex-col justify-between bg-brand-ivory p-6 md:p-8 lg:p-10">
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
