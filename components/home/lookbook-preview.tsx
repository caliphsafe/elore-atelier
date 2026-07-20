import Link from "next/link";
import { ImageSlot } from "@/components/common/image-slot";

export function LookbookPreview() {
  return (
    <section className="section-pad overflow-hidden">
      <div className="editorial-container">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Lookbook</p>
          <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
            Favorite pieces, silhouettes, and details from Elöre Atelier.
          </h2>
        </div>

        <div className="grid w-full min-w-0 gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <ImageSlot
            src="/images/home-lookbook-1.jpg"
            label="Elöre Atelier lookbook"
            className="aspect-[5/6] w-full min-w-0 rounded-luxe border thin-border shadow-soft"
          />

          <div className="grid w-full min-w-0 gap-5">
            <div className="grid w-full min-w-0 gap-5 sm:grid-cols-2">
              <ImageSlot
                src="/images/home-lookbook-2.jpg"
                label="Elöre Atelier lookbook"
                className="aspect-[4/5] w-full min-w-0 rounded-luxe border thin-border shadow-soft"
              />

              <ImageSlot
                src="/images/home-lookbook-3.jpg"
                label="Elöre Atelier lookbook"
                className="aspect-[4/5] w-full min-w-0 rounded-luxe border thin-border shadow-soft"
              />
            </div>

            <div className="w-full min-w-0 rounded-luxe olive-panel p-6 shadow-soft md:p-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
                Lookbook
              </p>

              <p className="serif-display mt-4 max-w-md text-3xl leading-tight text-white md:text-4xl">
                A curated view of the collection, selected through favorite hats and details.
              </p>

              <Link
                href="/lookbook"
                className="mt-6 inline-flex text-[11px] uppercase tracking-[0.26em] text-white/80 transition hover:text-white"
              >
                View Lookbook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
