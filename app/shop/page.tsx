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
            <Image
              src="/images/bg/elorebg2.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 70vw, 32vw"
              className="pointer-events-none absolute inset-y-0 left-0 z-0 object-contain object-left opacity-50 mix-blend-screen"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h1 className="serif-display">All Handcrafted Hats</h1>
              <p>Explore Elöre pieces shaped through natural materials, intentional design, and the art of modern millinery.</p>
            </div>
          </div>

          <div className="shop-opening__image">
            <ShopHeroCarousel />
          </div>
        </div>
      </section>
      <ShopGrid products={products} />
    </main>
  );
}
