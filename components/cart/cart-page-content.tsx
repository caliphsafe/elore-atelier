"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/cart-provider";

export function CartPageContent() {
  const {
    items,
    totalItems,
    estimatedTotal,
    addItem,
    decrementItem,
    removeItem,
    checkout,
    isCheckingOut,
    cartError,
  } = useCart();

  return (
    <>
      <section className="section-pad pt-10 md:pt-12">
        <div className="editorial-container flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h1 className="serif-display text-5xl leading-[0.95] tracking-hero text-brand-ink md:text-7xl">
              Your current selection.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-ink/72 md:text-lg">
              Review your pieces, adjust quantities, or continue exploring the collection.
            </p>
          </div>

          <div className="text-[11px] uppercase tracking-[0.28em] text-brand-mocha">
            {totalItems} {totalItems === 1 ? "Item" : "Items"}
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            {items.length === 0 ? (
              <div className="rounded-luxe border thin-border bg-[#f7f1ea] p-8 shadow-soft">
                <h2 className="serif-display text-3xl text-brand-ink">
                  Your cart is waiting for its first piece.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-brand-ink/72">
                  Browse the collection to add products, then return here to review
                  your selection.
                </p>

                <Link
                  href="/shop"
                  className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.handle}
                  className="grid gap-4 rounded-luxe border thin-border bg-white p-4 shadow-soft sm:grid-cols-[180px_1fr] sm:p-6"
                >
                  <div className="relative aspect-[2477/1651] overflow-hidden rounded-[1.25rem] bg-[#f7f1ea]">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.productTitle}
                        fill
                        sizes="(max-width: 640px) 100vw, 180px"
                        className="object-cover"
                      />
                    ) : null}
                  </div>

                  <div className="min-w-0">
                    <h2 className="serif-display text-3xl leading-tight text-brand-ink">
                      {item.productTitle}
                    </h2>

                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-ink/72">
                      <span>{item.price}</span>
                      <span>Quantity: {item.quantity}</span>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => decrementItem(item.handle)}
                        className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-brand-ink text-sm text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                      >
                        −
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          addItem({
                            id: item.id,
                            handle: item.handle,
                            variantId: item.variantId,
                            title: item.productTitle,
                            description: "",
                            price: item.price,
                            image: item.image || "",
                            availableForSale: true,
                          })
                        }
                        className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-brand-ink text-sm text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                      >
                        +
                      </button>

                      <button
                        type="button"
                        onClick={() => removeItem(item.handle)}
                        className="ml-2 inline-flex min-h-[40px] items-center justify-center rounded-full border border-brand-ink px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="rounded-luxe border thin-border bg-white p-6 shadow-soft sm:p-8">
              <h2 className="serif-display text-4xl leading-tight text-brand-ink">
                Estimated total
              </h2>

              <div className="mt-6 flex items-center justify-between border-t thin-border pt-6 text-base text-brand-ink/72">
                <span>
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </span>
                <span className="text-brand-ink">{estimatedTotal}</span>
              </div>

              {cartError ? (
                <p className="mt-5 rounded-[1rem] border thin-border bg-[#f7f1ea] p-3 text-xs leading-6 text-brand-ink/72">
                  {cartError}
                </p>
              ) : null}

              <div className="mt-6 grid gap-3">
                <button
                  type="button"
                  onClick={checkout}
                  disabled={!items.length || isCheckingOut}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha disabled:cursor-not-allowed disabled:bg-brand-ink/35"
                >
                  {isCheckingOut ? "Opening Checkout" : "Proceed to Checkout"}
                </button>

                <Link
                  href="/shop"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
