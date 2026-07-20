import { mockProducts } from "@/lib/shopify/mock-data";
import { ShopGrid } from "@/components/shop/shop-grid";

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
              The collection is presented through a custom storefront experience. Shopify products will populate here once connected.
            </p>
          </div>

          <div className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha fade-up">
            {mockProducts.length} Featured Mock Products
          </div>
        </div>
      </section>

      <ShopGrid products={mockProducts} />
    </>
  );
}
