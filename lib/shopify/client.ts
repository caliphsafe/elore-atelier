import { hasShopifyConfig, shopifyConfig } from "./config";

export async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!hasShopifyConfig) {
    throw new Error("Shopify credentials are not configured yet.");
  }

  const response = await fetch(`https://${shopifyConfig.domain}/api/2025-10/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": shopifyConfig.storefrontToken
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Shopify request failed: ${response.status}`);
  }

  return response.json();
}
