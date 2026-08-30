import Image from "next/image";
import { ShopGrid } from "@/components/shop/shop-grid";
import { ShopHeroCarousel } from "@/components/shop/shop-hero-carousel";
import { getProducts } from "@/lib/shopify/storefront";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main className="shop-page">
      <section className="shop-opening">
        <div className="editorial-container shop-opening__inner">
          <div className="shop-opening__content relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="serif-display">All Handcrafted Hats</h1>
              <p>Explore Elöre pieces shaped through natural materials, intentional design, and the art of modern millinery.</p>
            </div>
          </div>
          <div className="shop-opening__image" style={{ clipPath: "none", borderRadius: 0 }}><ShopHeroCarousel /></div>
        </div>
      </section>
      <ShopGrid products={products} />
    </main>
  );
}
