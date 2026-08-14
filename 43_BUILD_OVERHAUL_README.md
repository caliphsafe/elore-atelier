# ELÖRE Atelier — 43 Build / African Modernist Overhaul

## What this package is
This is the presentation-layer overhaul for the existing `caliphsafe/elore-atelier` project, audited against the connected GitHub repository on its current default branch (`restore-july-1`).

It intentionally preserves the existing Shopify Storefront integration, cart provider/drawer, checkout API, wishlist, booking form logic, routes, product data, and existing `/public` media library. The package replaces only the files that need to change to establish the new site-wide visual system.

## Audit
The existing site had a strong luxury foundation but repeated the same soft-card language: white translucent panels, 2rem rounded corners, subtle shadows, centered/contained compositions, and restrained neutral colors. The result was premium but visually interchangeable with other contemporary luxury templates.

The existing commerce architecture is worth preserving. The redesign therefore changes art direction rather than rebuilding the data or checkout layers.

## New direction
**African Modernism × Contemporary High Fashion**

- Warm Bone `#F2EBDD`
- Soft Ivory `#FAF8F2`
- Espresso `#241C19`
- ELÖRE Oxblood `#6F292B`
- Atelier Olive `#596044`
- Sahel Sand `#D5B875`
- Clay `#A4664E`

The system replaces generic luxury cards with flat editorial planes, thin rules, asymmetry, large typography, chapter color, vertical metadata, oversized imagery, and deliberate contrast.

## Files replaced
- `app/globals.css`
- `tailwind.config.ts`
- `components/site-header.tsx`
- `components/hero.tsx`
- `app/page.tsx`
- `components/home/atelier-story.tsx`
- `app/studio/page.tsx`
- `app/experiences/page.tsx`

## Preserved from the existing build
Do not delete or replace:
- `lib/shopify/**`
- `app/api/checkout/**`
- `components/cart/**`
- `components/wishlist/**`
- `components/experiences/workshop-booking-form.tsx`
- `components/experiences/experience-video-frame.tsx`
- existing shop/product routes
- existing about/custom/lookbook/contact content
- existing `/public` image/video assets
- `.env` / Shopify credentials

The new global tokens automatically pull the remaining pages into the new visual family while leaving their working logic intact.

## Installation
Copy these files into the same paths in the existing repository and replace the older versions. Do not add `package-lock.json`.

## Creative intent
The redesign should feel like a fashion house, not a theme: quieter neutrals interrupted by oxblood, olive, and sand chapters; hats treated as sculptural objects; the maker made more present; and the atelier presented as a tactile process rather than a collection of cards.
