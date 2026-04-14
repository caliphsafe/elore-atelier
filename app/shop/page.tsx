import Link from "next/link";
import { mockProducts } from "@/lib/shopify/mock-data";

export default function ShopPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Shop</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              Signature forms, refined silhouettes, and future icons.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              The collection is presented through a premium storefront experience.
              Shopify products will populate here once connected.
            </p>
          </div>

          <div className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
            48 Product Catalog Ready
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-luxe border thin-border bg-white shadow-soft"
            >
              <div className="image-panel aspect-[4/5] w-full transition duration-500 group-hover:scale-[1.02]" />

              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                  ELÖRE Collection
                </p>

                <h3 className="serif-display mt-3 text-3xl leading-tight text-brand-ink">
                  Signature Hat {i + 1}
                </h3>

                <p className="mt-3 text-sm leading-7 text-brand-ink/72">
                  Sculpted form with refined detail and timeless character.
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-brand-ink">$850</span>

                  <Link
                    href="#"
                    className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink"
                  >
                    View
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
