import Link from "next/link";
import { getMockProductByHandle, getRelatedMockProducts } from "@/lib/shopify/mock-data";
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
  const product = getMockProductByHandle(handle);

  if (!product) {
    return (
      <section className="section-pad">
        <div className="editorial-container">
          <h1 className="serif-display text-4xl text-brand-ink">Product not found.</h1>
        </div>
      </section>
    );
  }

  const relatedProducts = getRelatedMockProducts(handle);

  return (
    <>
      <section className="section-pad product-page-shell pt-12 md:pt-16">
        <div className="editorial-container grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="fade-up">
            <ProductGallery title={product.title} />
          </div>

          <div className="fade-up lg:sticky lg:top-28">
            <p className="eyebrow">{product.category}</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-6xl">
              {product.title}
            </h1>

            <p className="mt-5 text-lg text-brand-ink">{product.price}</p>

            <p className="mt-6 max-w-xl text-base leading-8 text-brand-ink/72 md:text-lg">
              {product.description}
            </p>

            <div className="mt-8 hidden gap-3 md:grid">
              <AddFeedbackButton handle={product.handle} />
              <WishlistButton handle={product.handle} />
            </div>

            <div className="mt-10 border-t thin-border pt-6">
              <div className="grid gap-5 text-sm leading-7 text-brand-ink/72">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                    Craft Notes
                  </p>
                  <p className="mt-2">
                    Presented as part of the Elöre collection with an emphasis on silhouette, proportion, and refined detail.
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                    Availability
                  </p>
                  <p className="mt-2">
                    Live inventory and variant details will appear here once Shopify is connected.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/experiences"
                className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink"
              >
                Interested in a workshop or custom direction? View experiences
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="mb-8 fade-up">
            <p className="eyebrow">Related Pieces</p>
            <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
              Continue exploring the collection.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
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

          <AddFeedbackButton handle={product.handle} />
        </div>
      </div>
    </>
  );
}
