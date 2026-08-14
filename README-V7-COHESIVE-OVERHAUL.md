# ELÖRE Atelier — V7 Cohesive Editorial 43 Build

This build is a full visual-system refinement based on the current approved ELÖRE site.

## What changed
- Kept the current About page intact as the visual benchmark.
- Rebuilt Experiences with dedicated page CSS, content-led editorial flow, a true wide hero, overlapping maroon statement, staggered included list, full-width materials transition, standalone vertical film, and a redesigned booking conclusion.
- Restored Home Featured Collections as an overlapping composition using only angular/rectangular crops — no circular or elliptical image masks.
- Rebuilt Custom into a shorter information-first page: hero, compact six-stage process, concise measurement guide, and inquiry close.
- Simplified Shop into a sales-first product experience with ELÖRE color framing, clean filters, disciplined product cards, and richer but restrained product-image grounds.
- Added desktop/tablet/mobile art-direction rules for the updated sections.
- Strengthened readable foreground/background pairings and removed pill geometry from shared button/card interfaces.

## Preservation
- Existing approved copy is preserved on Experiences and Custom.
- Existing Shopify product/cart/checkout/wishlist architecture remains intact.
- Existing image/video paths remain intact; retain the live `public/images/**` and `public/videos/**` assets in the repository.
- Lookbook remains removed.
- No package-lock.json is included.

## Validation
A source-level TypeScript syntax pass completed without parser/syntax errors. Full Next.js compilation could not run locally because dependency installation timed out; Vercel remains the final production compile check.
