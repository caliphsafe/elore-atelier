# Shopify Connection Steps

This build connects the existing shop structure to Shopify without changing the visual layout.

## Required Vercel Environment Variables

Add these in Vercel → Project → Settings → Environment Variables:

SHOPIFY_STORE_DOMAIN=your-store-name.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-api-access-token

Use the myshopify.com store domain, not the public custom domain.

## Shopify Setup Required

1. Install or open the Shopify Headless sales channel.
2. Create/copy a Storefront API access token.
3. Publish the products to the Headless sales channel.
4. Make sure each product has:
   - Title
   - Description
   - Price
   - At least one active variant
   - Product images
   - Product type or tag for category filtering
5. Add the two environment variables above in Vercel.
6. Redeploy the site.

## How Checkout Works

The site keeps the same custom shop, cart, and product page design.
When the customer clicks checkout, the website creates a Shopify cart and sends the customer to Shopify's secure checkout URL.
