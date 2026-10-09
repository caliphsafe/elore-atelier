import { NextResponse } from "next/server";
import { createCheckout } from "@/lib/shopify/storefront";

type CheckoutRequestItem = {
  variantId?: unknown;
  quantity?: unknown;
};

type CheckoutRequestBody = {
  items?: unknown;
};

/**
 * Shopify's cart.checkoutUrl is minted using the Online Store primary domain.
 * When that hostname now points at Vercel, Shopify cart paths land in Next.js
 * and produce a 404. Use an explicitly configured Shopify-hosted checkout
 * hostname instead; retain Shopify's complete signed path and query string.
 */
function checkoutDestination(shopifyUrl: string) {
  const raw = process.env.SHOPIFY_CHECKOUT_DOMAIN?.trim();
  if (!raw) return shopifyUrl;
  if (!/^https:\/\//i.test(shopifyUrl)) {
    throw new Error("Shopify returned an invalid checkout URL.");
  }
  if (raw.includes("/") || raw.includes(":") || raw.includes("?") || raw.includes("#") || /\s/.test(raw)) {
    throw new Error("SHOPIFY_CHECKOUT_DOMAIN must contain only a hostname.");
  }
  const target = new URL(shopifyUrl);
  if (target.protocol !== "https:" || !target.pathname.startsWith("/cart/c/")) {
    throw new Error("Shopify returned an unexpected checkout URL.");
  }
  target.hostname = raw.toLowerCase();
  return target.toString();
}

function isCheckoutRequestItem(item: unknown): item is CheckoutRequestItem {
  return typeof item === "object" && item !== null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CheckoutRequestBody;
    const rawItems = Array.isArray(body.items) ? body.items : [];

    const checkoutItems = rawItems
      .filter(isCheckoutRequestItem)
      .map((item: CheckoutRequestItem) => ({
        variantId: typeof item.variantId === "string" ? item.variantId : undefined,
        quantity: Number(item.quantity) || 1
      }));

    const checkout = await createCheckout(checkoutItems);

    return NextResponse.json({ checkoutUrl: checkoutDestination(checkout.checkoutUrl) });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to create Shopify checkout.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
