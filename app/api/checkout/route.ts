import { NextResponse } from "next/server";
import { createCheckout } from "@/lib/shopify/storefront";

type CheckoutRequestItem = {
  variantId?: unknown;
  quantity?: unknown;
};

type CheckoutRequestBody = {
  items?: unknown;
};

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

    return NextResponse.json({ checkoutUrl: checkout.checkoutUrl });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to create Shopify checkout.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
