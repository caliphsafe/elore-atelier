# ELÖRE Atelier 43 Build — Shop Image Ratio + Shopify Collections

This build only updates the shop-related files needed to refine the Shopify shopping experience.

## What changed

- Product images now display at the Shopify image ratio: 2477 × 1651.
- Shop cards, related product cards, product detail gallery, cart drawer, cart page, and wishlist product cards now accommodate the wider landscape product image proportion.
- Shopify collections are now pulled from each Shopify product and displayed as the filter options on the Shop page.
- Products can appear under every Shopify collection they belong to, while their primary collection still displays as the card/category label.
- The shopping grid has been refined so product cards have more room for the wider image shape.

## Files included

- app/shop/[handle]/page.tsx
- components/shop/shop-grid.tsx
- components/shop/product-card.tsx
- components/shop/related-product-card.tsx
- components/shop/product-gallery.tsx
- components/cart/cart-drawer.tsx
- components/cart/cart-page-content.tsx
- components/wishlist/wishlist-page-content.tsx
- lib/shopify/storefront.ts
- lib/shopify/types.ts

## Upload

Upload the contents of this folder to the `restore-july-1` branch in GitHub.

Suggested commit message:

43 Build refine Shopify shop image ratio and collections
