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
        aria-label="Open cart"
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
        className="relative inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-brand-ink text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha md:hidden"
        aria-label="Open cart"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="block"
        >
          <path
            d="M7 8.5V7.75C7 5.13 9.13 3 11.75 3h.5C14.87 3 17 5.13 17 7.75v.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M5.5 8.5h13l-.9 10.05A2 2 0 0 1 15.61 20.5H8.39a2 2 0 0 1-1.99-1.95L5.5 8.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>

        <span className="absolute -right-1 -top-1 inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand-ink px-1 text-[10px] text-white">
          {totalItems}
        </span>
      </button>
    </>
  );
}