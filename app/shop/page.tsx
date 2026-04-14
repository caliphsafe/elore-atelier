import Link from "next/link";
import { mockProducts } from "@/lib/shopify/mock-data";

export default function ShopPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow">Shop</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              Signature forms, refined silhouettes, and future icons.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              The collection is presented through a premium storefront experience.
              Shopify products will populate here once connected.
            </p>
          </div>

          <div className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha fade-up">
            {mockProducts.length} Featured Mock Products
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container grid grid-cols-3 gap-3 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {mockProducts.map((product, i) => (
            <article
              key={product.id}
              className="group lift-card overflow-hidden rounded-[1.1rem] border thin-border bg-white shadow-soft sm:rounded-luxe"
            >
              <div
                className={`aspect-[4/5] w-full transition duration-500 group-hover:scale-[1.03] ${
                  i % 3 === 0
                    ? "image-panel"
                    : i % 3 === 1
                    ? "bg-[linear-gradient(135deg,#f1e6d8_0%,#d3ba9d_100%)]"
                    : "bg-[linear-gradient(135deg,#4c5d0b_0%,#283300_100%)]"
                }`}
              />

              <div className="p-3 sm:p-5">
                <p className="text-[9px] uppercase tracking-[0.22em] text-brand-mocha sm:text-[11px] sm:tracking-[0.28em]">
                  {product.category}
                </p>

                <h3 className="serif-display mt-2 text-lg leading-tight text-brand-ink sm:mt-3 sm:text-2xl md:text-3xl">
                  {product.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-[12px] leading-5 text-brand-ink/72 sm:mt-3 sm:text-sm sm:leading-7">
                  {product.description}
                </p>

                <div className="mt-3 flex items-center justify-between gap-2 sm:mt-5">
                  <span className="text-[12px] text-brand-ink sm:text-sm">
                    {product.price}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="rounded-full bg-brand-ink px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-brand-mocha sm:px-4 sm:text-[11px] sm:tracking-[0.24em]"
                    >
                      Add
                    </button>

                    <Link
                      href={`/shop/${product.handle}`}
                      className="text-[10px] uppercase tracking-[0.2em] text-brand-mocha transition hover:text-brand-ink sm:text-[11px] sm:tracking-[0.26em]"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
