"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/cart-provider";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const {
    items,
    estimatedTotal,
    addItem,
    decrementItem,
    removeItem,
    totalItems,
    checkout,
    isCheckingOut,
    cartError,
  } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/30 transition ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-full max-w-md border-l thin-border bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b thin-border px-6 py-5">
            <div>
              <h2 className="serif-display text-3xl text-brand-ink">
                Your Selection
              </h2>
              <p className="mt-2 text-sm text-brand-ink/60">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-[44px] items-center justify-center text-[11px] uppercase tracking-[0.24em] text-brand-mocha transition hover:text-brand-ink"
            >
              Close
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="rounded-[1.5rem] border thin-border bg-[#f7f1ea] p-6">
                <h3 className="serif-display text-3xl leading-tight text-brand-ink">
                  Cart Empty
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-ink/72">
                  Add pieces from the collection to begin building your selection.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {items.map((item) => (
                  <div
                    key={item.handle}
                    className="grid grid-cols-[112px_1fr] gap-4 rounded-[1.5rem] border thin-border bg-white p-4"
                  >
                    <div className="relative aspect-[2477/1651] overflow-hidden rounded-[1rem] bg-[#f7f1ea]">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.productTitle}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      ) : null}
                    </div>

                    <div className="min-w-0">
                      <h3 className="serif-display text-2xl leading-tight text-brand-ink">
                        {item.productTitle}
                      </h3>

                      <div className="mt-3 flex items-center justify-between text-sm text-brand-ink/72">
                        <span>{item.price}</span>
                        <span>Qty {item.quantity}</span>
                      </div>

                      <div className="mt-4 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => decrementItem(item.handle)}
                          className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-full border border-brand-ink text-sm text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                          aria-label={`Decrease quantity of ${item.productTitle}`}
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
                          className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-full border border-brand-ink text-sm text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
                          aria-label={`Increase quantity of ${item.productTitle}`}
                        >
                          +
                        </button>

                        <button
                          type="button"
                          onClick={() => removeItem(item.handle)}
                          className="ml-2 text-[11px] uppercase tracking-[0.24em] text-brand-mocha transition hover:text-brand-ink"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t thin-border px-6 py-6">
            <div className="mb-5 flex items-center justify-between text-sm text-brand-ink/72">
              <span>Estimated Total</span>
              <span>{estimatedTotal}</span>
            </div>

            {cartError ? (
              <p className="mb-4 rounded-[1rem] border thin-border bg-[#f7f1ea] p-3 text-xs leading-6 text-brand-ink/72">
                {cartError}
              </p>
            ) : null}

            <div className="grid gap-3">
              <button
                type="button"
                onClick={checkout}
                disabled={!items.length || isCheckingOut}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha disabled:cursor-not-allowed disabled:bg-brand-ink/35"
              >
                {isCheckingOut ? "Opening Checkout" : "Checkout"}
              </button>

              <Link
                href="/cart"
                onClick={onClose}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
