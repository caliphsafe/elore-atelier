import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="px-5 pb-12 pt-7 md:px-8 md:pb-16 md:pt-10 lg:px-12">
      <div className="editorial-container">
        <div className="grid gap-6 lg:min-h-[72vh] lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <div className="order-2 flex flex-col justify-between rounded-luxe border thin-border bg-white/72 p-6 shadow-soft backdrop-blur md:p-8 lg:order-1 lg:p-9">
            <div>
              <p className="eyebrow">Modern Millinery</p>

              <h1 className="serif-display mt-5 max-w-3xl text-5xl leading-[0.92] tracking-hero text-brand-ink sm:text-6xl md:text-7xl lg:text-[5.4rem]">
                Crafted for presence, shaped with intention.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 muted-copy md:text-lg">
                Elöre Atelier is a Boston-based handcrafted hat brand redefining
                the art of modern millinery through tradition, storytelling, and
                intentional design.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

            <div className="mt-8 grid gap-4 border-t thin-border pt-6 sm:grid-cols-3 lg:mt-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                  Handcrafted
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-ink/75">
                  Each piece is shaped by hand from beginning to end.
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                  Story
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-ink/75">
                  Every hat begins with a feeling, memory, landscape, or texture.
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                  Studio
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-ink/75">
                  Traditional craft moves forward through modern form.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 relative min-h-[460px] overflow-hidden rounded-luxe border thin-border shadow-soft sm:min-h-[590px] lg:order-2 lg:min-h-full">
            <Image
              src="/images/home/hero/hero.jpg"
              alt="ELÖRE Atelier hero"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
              <div className="max-w-md rounded-[1.5rem] border border-white/20 bg-white/12 p-5 text-white shadow-soft backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/75">
                  Atelier Ethos
                </p>
                <p className="serif-display mt-3 text-2xl leading-tight md:text-3xl">
                  Tradition is carried forward through shape, material, and story.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-[1fr_1.25fr]">
          <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft">
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
              Studio Ethos
            </p>
            <p className="serif-display mt-4 text-3xl leading-tight text-brand-ink">
              Material, proportion, and patience guide the work.
            </p>
          </div>

          <div className="olive-panel rounded-luxe p-6 text-brand-white shadow-soft">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
              Experiences
            </p>
            <p className="serif-display mt-4 text-3xl leading-tight md:text-4xl">
              Guided workshops invite guests into the process of making by hand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
