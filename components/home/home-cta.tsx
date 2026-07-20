import Link from "next/link";

export function HomeCta() {
  return (
    <section className="section-pad pt-0">
      <div className="editorial-container">
        <div className="overflow-hidden rounded-luxe olive-panel px-6 py-12 shadow-soft md:px-10 md:py-16">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">
              ELÖRE Atelier
            </p>
            <h2 className="serif-display mt-4 text-4xl leading-tight text-white md:text-6xl">
              Tradition carried forward through shape, story, and handwork.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
              Explore the collection, learn about the studio, or step into a guided experience shaped around craft and personal expression.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:bg-[#f1e6d8]"
              >
                Shop Now
              </Link>
              <Link
                href="/experiences"
                className="rounded-full border border-white/60 px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white/10"
              >
                Explore Experiences
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
