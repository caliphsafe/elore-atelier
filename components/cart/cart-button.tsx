"use client";

type CartButtonProps = {
  onClick: () => void;
};

export function CartButton({ onClick }: CartButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-brand-ink px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-brand-ink transition hover:border-brand-mocha hover:text-brand-mocha"
      aria-label="Open cart"
    >
      Cart
    </button>
  );
}
