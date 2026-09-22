# Tree Plucker WNY — Redesign Concept (Portfolio Demo)

An **unofficial, unaffiliated** redesign concept for Tree Plucker, a real
tree-removal business in West Seneca, NY — built as a portfolio piece, not
their actual website. It is not endorsed by or connected to the business.
See the disclaimer bar, footer, and `DISCLAIMER` in `src/config/site.ts`.

No real customer reviews, certifications, licenses, phone number, years in
business, or other unverified business facts are published here — see
"Business accuracy" below.

Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

## Project structure

```
src/
  config/site.ts          # Centralized business info, services, nav, copy
  components/
    layout/                # Header, DisclaimerBar, Footer, Logo, mobile sticky CTA
    sections/               # One component per homepage section
    ui/                    # Reusable primitives (Button, PhotoPlaceholder, icons…)
  hooks/useInView.ts       # Scroll-reveal animation hook
```

## Customizing this for a different business

Most business-specific content lives in **`src/config/site.ts`** — business
name, region, nav links, services, equipment/process/FAQ copy, gallery
labels, and the estimate form's project-type options. Update that file
first, and update `DISCLAIMER` if reusing this for a different concept.

Color tokens (charcoal / forest green / off-white / earth tones / rust
accent) and fonts are defined in **`src/index.css`** under `@theme`. Swap
the values there to re-skin the whole site without touching components.

## Photography placeholders

This concept has no rights to real Tree Plucker photography (nothing was
scraped from their site or social media), so every image area uses
**`src/components/ui/PhotoPlaceholder.tsx`** — a textured, duotone,
grain-and-linework panel clearly labeled as a placeholder — instead of an
illustrated scene or stock photo. Swap these for approved photography
first if this ever becomes a real client site.

## Business accuracy

Per the redesign brief, facts that couldn't be independently verified
(phone number, exact service list, years in business, equipment owned,
etc.) are represented as placeholders or hedged, generic copy rather than
invented. FAQ answers and service copy explicitly note where information
should be confirmed with the business directly.

## Notes on this being a demo

- The estimate form does not send or store any data — it only shows a
  client-side success state (see
  `src/components/sections/EstimateForm.tsx`).
- No LocalBusiness structured data (address/phone/reviews) is published,
  since this site isn't authorized to represent the business that way.
