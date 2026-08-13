import { ShopGrid } from "@/components/shop/shop-grid";
import { getProducts } from "@/lib/shopify/storefront";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <>
      <section className="section-pad pb-4 pt-10 md:pb-6 md:pt-12 lg:pb-8">
        <div className="editorial-container flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow">Shop</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              All Handcrafted Hats
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              Explore Elöre pieces shaped through natural materials, intentional
              design, and the art of modern millinery.
            </p>
          </div>

          <div className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha fade-up">
            {products.length} Featured Products
          </div>
        </div>
      </section>

      <ShopGrid products={products} />
    </>
  );
}
