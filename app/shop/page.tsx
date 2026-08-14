import { ShopGrid } from "@/components/shop/shop-grid";
import { getProducts } from "@/lib/shopify/storefront";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <>
      <section className="bg-brand-bone px-5 pb-8 pt-10 text-brand-olive md:px-8 md:pb-10 md:pt-14 lg:px-12">
        <div className="editorial-container flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h1 className="serif-display text-5xl leading-[.95] tracking-[-.05em] text-brand-olive md:text-7xl">All Handcrafted Hats</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-brand-olive/75 md:text-lg">Explore Elöre pieces shaped through natural materials, intentional design, and the art of modern millinery.</p>
          </div>
          <div className="serif-display text-3xl text-brand-maroon md:text-4xl">{products.length}</div>
        </div>
      </section>
      <ShopGrid products={products} />
    </>
  );
}
