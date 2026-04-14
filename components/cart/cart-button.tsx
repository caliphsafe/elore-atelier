"use client";

import { useCart } from "@/components/cart/cart-provider";

type CartButtonProps = {
  onClick: () => void;
};

export function CartButton({ onClick }: CartButtonProps) {
  const { totalItems } = useCart();

  return (
    <>
      {/* DESKTOP */}
      <button
        type="button"
        onClick={onClick}
        className="hidden md:inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-brand-ink px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
      >
        <span>Cart</span>

        <span className="inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-brand-ink px-1.5 py-0.5 text-[10px] tracking-normal text-white">
          {totalItems}
        </span>
      </button>

      {/* MOBILE */}
      <button
        type="button"
        onClick={onClick}
        className="inline-flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-brand-ink text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha relative"
        aria-label="Open cart"
      >
        <span className="text-base leading-none">👜</span>

        <span className="absolute -right-1 -top-1 inline-flex min-w-[18px] h-[18px] items-center justify-center rounded-full bg-brand-ink px-1 text-[10px] text-white">
          {totalItems}
        </span>
      </button>
    </>
  );
}