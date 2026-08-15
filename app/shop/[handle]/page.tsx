import Link from "next/link";
import { getProductByHandle, getRelatedProducts } from "@/lib/shopify/storefront";
import { AddFeedbackButton } from "@/components/shop/add-feedback-button";
import { RelatedProductCard } from "@/components/shop/related-product-card";
import { WishlistButton } from "@/components/wishlist/wishlist-button";
import { ProductGallery } from "@/components/shop/product-gallery";

type ProductPageProps = {
  params: Promise<{
    handle: string;
  }>;
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) {
    return (
      <section className="section-pad">
        <div className="editorial-container">
          <h1 className="serif-display text-4xl text-brand-ink">Product not found.</h1>
        </div>
      </section>
    );
  }

  const relatedProducts = await getRelatedProducts(handle, product.category);

  return (
    <main className="product-detail-page">
      <section className="product-detail">
        <div className="editorial-container product-detail__inner">
          <div className="product-detail__gallery">
            <ProductGallery
              title={product.title}
              handle={product.handle}
              images={product.images}
            />
          </div>

          <aside className="product-detail__purchase">
            <div className="product-detail__heading">
              <h1 className="serif-display">{product.title}</h1>
              <p className="product-detail__price">{product.price}</p>
            </div>

            <p className="product-detail__description">
              {product.description}
            </p>

            <div className="product-detail__actions hidden md:grid">
              <AddFeedbackButton product={product} />
              <WishlistButton handle={product.handle} />
            </div>

            <div className="product-detail__meta">
              <div className="product-detail__meta-row">
                <span>Collection</span>
                <p>{product.category || "Elöre Atelier"}</p>
              </div>

              <div className="product-detail__meta-row">
                <span>Detail</span>
                <p>
                  Shaped through proportion, material character, and refined
                  detail as part of the Elöre collection.
                </p>
              </div>

              <div className="product-detail__meta-row">
                <span>Availability</span>
                <p>
                  {product.availableForSale
                    ? "Available through secure Shopify checkout."
                    : "This piece is currently unavailable through Shopify checkout."}
                </p>
              </div>
            </div>

            <Link href="/custom" className="product-detail__custom-link">
              Looking for something one-of-one? Begin a custom hat
            </Link>
          </aside>
        </div>
      </section>

      <section className="product-related">
        <div className="editorial-container product-related__inner">
          <div className="product-related__heading">
            <h2 className="serif-display">Continue exploring the collection.</h2>
          </div>

          <div className="product-related__grid">
            {relatedProducts.map((related, i) => (
              <RelatedProductCard key={related.id} product={related} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="mobile-product-bar md:hidden">
        <div className="mobile-product-bar__inner">
          <div className="min-w-0">
            <p className="truncate text-[11px] uppercase tracking-[0.22em] text-brand-mocha">
              {product.title}
            </p>
            <p className="mt-1 text-sm text-brand-ink">{product.price}</p>
          </div>

          <AddFeedbackButton product={product} />
        </div>
      </div>
    </main>
  );
}
