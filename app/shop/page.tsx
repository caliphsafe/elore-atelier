import { mockProducts } from "@/lib/shopify/mock-data";
import { ShopGrid } from "@/components/shop/shop-grid";

export default function ShopPage() {
  return (
    <>
      <section className="section-pad pt-12 md:pt-14">
        <div className="editorial-container flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow">Shop</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              Signature forms, refined silhouettes, and handcrafted pieces.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              Explore Elöre pieces shaped through natural materials, intentional
              design, and the art of modern millinery.
            </p>
          </div>

          <div className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha fade-up">
            {mockProducts.length} Featured Products
          </div>
        </div>
      </section>

      <ShopGrid products={mockProducts} />
    </>
  );
}
