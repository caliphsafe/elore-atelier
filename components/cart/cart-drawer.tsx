"use client";

import { mockCart } from "@/lib/shopify/mock-data";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function CartDrawer({ open, onClose }: CartDrawerProps) {
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
              <p className="eyebrow">Cart</p>
              <h2 className="serif-display mt-2 text-3xl text-brand-ink">
                Your Selection
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-[11px] uppercase tracking-[0.24em] text-brand-mocha transition hover:text-brand-ink"
            >
              Close
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="grid gap-4">
              {mockCart.map((item, index) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[84px_1fr] gap-4 rounded-[1.5rem] border thin-border bg-white p-4"
                >
                  <div
                    className={`aspect-[4/5] rounded-[1rem] ${
                      index % 2 === 0
                        ? "image-panel"
                        : "bg-[linear-gradient(135deg,#f1e6d8_0%,#d3ba9d_100%)]"
                    }`}
                  />

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-brand-mocha">
                      ELÖRE Atelier
                    </p>
                    <h3 className="serif-display mt-2 text-2xl leading-tight text-brand-ink">
                      {item.productTitle}
                    </h3>
                    <div className="mt-3 flex items-center justify-between text-sm text-brand-ink/72">
                      <span>{item.price}</span>
                      <span>Qty {item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t thin-border px-6 py-6">
            <div className="mb-5 flex items-center justify-between text-sm text-brand-ink/72">
              <span>Estimated Total</span>
              <span>$1,660</span>
            </div>

            <div className="grid gap-3">
              <button
                type="button"
                className="rounded-full bg-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-brand-mocha"
              >
                Checkout
              </button>

              <button
                type="button"
                className="rounded-full border border-brand-ink px-6 py-3 text-xs uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
              >
                View Cart
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
