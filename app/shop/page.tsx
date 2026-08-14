import { ShopGrid } from "@/components/shop/shop-grid";
import { getProducts } from "@/lib/shopify/storefront";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main className="shop-page">
      <section className="shop-opening">
        <div className="editorial-container shop-opening__inner">
          <div>
            <h1 className="serif-display">All Handcrafted Hats</h1>
            <p>Explore Elöre pieces shaped through natural materials, intentional design, and the art of modern millinery.</p>
          </div>
          <div className="shop-opening__count serif-display" aria-label={`${products.length} products`}>{products.length}</div>
        </div>
      </section>
      <ShopGrid products={products} />
    </main>
  );
}
