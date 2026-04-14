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
            {mockProducts.length} Featured Mock Products
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {mockProducts.map((product, i) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-luxe border thin-border bg-white shadow-soft"
            >
              <div
                className={`aspect-[4/5] w-full transition duration-500 group-hover:scale-[1.02] ${
                  i % 3 === 0
                    ? "image-panel"
                    : i % 3 === 1
                    ? "bg-[linear-gradient(135deg,#f1e6d8_0%,#d3ba9d_100%)]"
                    : "bg-[linear-gradient(135deg,#4c5d0b_0%,#283300_100%)]"
                }`}
              />

              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                  {product.category}
                </p>

                <h3 className="serif-display mt-3 text-3xl leading-tight text-brand-ink">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-brand-ink/72">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-brand-ink">{product.price}</span>

                  <Link
                    href={`/shop/${product.handle}`}
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
