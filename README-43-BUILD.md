# ELÖRE Atelier — Shopify Checkout Type Fix 43 Build

This update fixes the Vercel TypeScript build error in:

```text
app/api/checkout/route.ts
```

It adds proper typing for checkout request items so the Shopify checkout API route can compile under strict TypeScript settings.

Upload only the included `app` folder to the `restore-july-1` branch and commit.
