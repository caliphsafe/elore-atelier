import Link from "next/link";
import { getMockProductByHandle, getRelatedMockProducts } from "@/lib/shopify/mock-data";

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
      <section className="section-pad pt-12 md:pt-16">
        <div className="editorial-container grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="grid gap-5">
            <div className="image-panel aspect-[4/5] rounded-luxe border thin-border shadow-soft" />
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-[4/5] rounded-[1.25rem] border thin-border bg-[linear-gradient(135deg,#f1e6d8_0%,#d3ba9d_100%)]" />
              <div className="aspect-[4/5] rounded-[1.25rem] border thin-border bg-[linear-gradient(135deg,#ede0cf_0%,#c7ad8d_100%)]" />
              <div className="aspect-[4/5] rounded-[1.25rem] border thin-border bg-[linear-gradient(135deg,#4f610b_0%,#253000_100%)]" />
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">{product.category}</p>
            <h1 className="serif-display mt-4 text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-6xl">
              {product.title}
            </h1>

            <p className="mt-5 text-lg text-brand-ink">{product.price}</p>

            <p className="mt-6 max-w-xl text-base leading-8 text-brand-ink/72 md:text-lg">
              {product.description}
            </p>

            <div className="mt-8 grid gap-3">
              <button
                type="button"
                className="rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
              >
                Add to Cart
              </button>

              <button
                type="button"
                className="rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
              >
                Save to Wishlist
              </button>
            </div>

            <div className="mt-10 border-t thin-border pt-6">
              <div className="grid gap-5 text-sm leading-7 text-brand-ink/72">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha">
                    Craft Notes
                  </p>
                  <p className="mt-2">
                    Presented as part of the ELÖRE collection with an emphasis on silhouette,
                    proportion, and refined detail.
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
                href="/custom"
                className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink"
              >
                Looking for something one-of-one? Begin a custom hat
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container">
          <div className="mb-8">
            <p className="eyebrow">Related Pieces</p>
            <h2 className="serif-display mt-3 text-4xl leading-tight text-brand-ink md:text-5xl">
              Continue exploring the collection.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((related, i) => (
              <article
                key={related.id}
                className="group overflow-hidden rounded-luxe border thin-border bg-white shadow-soft"
              >
                <div
                  className={`aspect-[4/5] w-full transition duration-500 group-hover:scale-[1.02] ${
                    i % 2 === 0
                      ? "bg-[linear-gradient(135deg,#f1e6d8_0%,#d3ba9d_100%)]"
                      : "bg-[linear-gradient(135deg,#4c5d0b_0%,#283300_100%)]"
                  }`}
                />

                <div className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
                    {related.category}
                  </p>

                  <h3 className="serif-display mt-3 text-3xl leading-tight text-brand-ink">
                    {related.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm text-brand-ink">{related.price}</span>

                    <Link
                      href={`/shop/${related.handle}`}
                      className="text-[11px] uppercase tracking-[0.26em] text-brand-mocha transition hover:text-brand-ink"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
