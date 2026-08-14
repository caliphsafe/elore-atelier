import Image from "next/image";
import Link from "next/link";

export function AtelierStory() {
  return (
    <section className="px-5 py-10 md:px-8 md:py-14 lg:px-12">
      <div className="editorial-container">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <div className="relative min-h-[480px] overflow-hidden rounded-luxe border thin-border shadow-soft md:min-h-[600px]">
            <Image
              src="/images/home/atelier/atelier-story.jpg"
              alt="ELÖRE Atelier studio story"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h2 className="serif-display max-w-2xl text-4xl leading-tight text-white md:text-6xl">
                Where tradition moves forward.
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-luxe border thin-border bg-white p-6 shadow-soft md:p-8 lg:p-9">
            <div>
              <h3 className="serif-display text-4xl leading-tight text-brand-ink md:text-5xl">
                Founded by Salome Kopasz, Elöre is rooted in craft, story and slow fashion.
              </h3>

              <p className="mt-6 text-base leading-8 text-brand-ink/72 md:text-lg">
                Born in Cameroon and raised in Paris, Salomé&apos;s creative perspective
                was shaped by a life immersed in culture, fashion, and artistry. As
                a former model, she experienced the fashion world from within,
                developing an appreciation for the relationship between clothing,
                identity, and self-expression…
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <Link
                href="/about"
                className="inline-flex justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-white transition hover:bg-brand-mocha"
              >
                Read About ELÖRE
              </Link>
              <Link
                href="/studio"
                className="inline-flex justify-center rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
              >
                Enter the Studio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
