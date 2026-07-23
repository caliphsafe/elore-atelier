import { NextResponse } from "next/server";
import { createCheckout } from "@/lib/shopify/storefront";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const items = Array.isArray(body.items) ? body.items : [];

    const checkout = await createCheckout(
      items.map((item) => ({
        variantId: item.variantId,
        quantity: Number(item.quantity) || 1
      }))
    );

    return NextResponse.json({ checkoutUrl: checkout.checkoutUrl });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to create Shopify checkout.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
