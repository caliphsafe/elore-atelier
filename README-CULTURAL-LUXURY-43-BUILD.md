# ELÖRE Atelier — Cultural Luxury 43 Build

This is the full code-side rebuild of the current ELÖRE Atelier headless Shopify site.

## Direction
- African modernism × contemporary high fashion
- warm bone / ivory foundation
- muted oxblood / maroon, mature olive, and sand accents
- sharp editorial geometry rather than generic rounded luxury cards
- cinematic existing-image hero treatments
- stronger founder / atelier / craft presence
- six-stage Custom journey
- full-screen oxblood menu on mobile/tablet
- fashion-catalogue Shop and exhibition-style product detail treatment
- approved Experiences and Atelier hierarchy preserved

## Business systems preserved
- Shopify Storefront API
- product + collection fetching
- variants
- add to cart
- quantity controls
- cart drawer + cart page
- checkout route
- wishlist
- Custom route
- Experiences booking form
- Contact route
- responsive navigation

## Asset preservation
This code intentionally references the existing approved ELÖRE media paths. Historical 43 Build archives did not contain the live photography itself. When deploying this build, retain the existing live repository folders:

- `public/images/**`
- `public/videos/**`

Do not delete or replace those folders when merging this build.

## Deploy
Merge this package over the current ELÖRE repository while keeping the live image/video assets and the existing Vercel environment variables.

No `package-lock.json` is included or required by this build.
