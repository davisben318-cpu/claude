# ClearWave — Exterior Cleaning Website (Portfolio Demo)

A production-quality marketing homepage for **ClearWave**, a **fictional**
local exterior-cleaning company in Buffalo, NY. Built as a portfolio/demo
project — see the disclaimers in the footer and quote form for details.

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
    layout/                # Header, Footer, Logo, mobile sticky CTA
    sections/               # One component per homepage section
    ui/                    # Reusable primitives (Button, Container, icons…)
    illustrations/          # Custom SVG "house" illustration (no stock photos)
  hooks/useInView.ts       # Scroll-reveal animation hook
```

## Customizing this for a different business

Most business-specific content lives in **`src/config/site.ts`** — business
name, region, nav links, services, value-prop principles, process steps,
demo testimonials, and the quote form's service dropdown options. Update
that file first.

Color tokens (navy / cream / accent) and fonts are defined in
**`src/index.css`** under `@theme`. Swap the hex values there to re-skin
the whole site without touching components.

The hero, "Our Work" and service-area imagery are custom SVG illustrations
(`src/components/illustrations/HouseScene.tsx`) rather than stock photos,
since this is a demo business with no real project photography — swap in
real photos there when using this as a template for an actual business.

## Notes on this being a demo

- The quote form does not send or store any data — it only shows a
  client-side success state (see `src/components/sections/QuoteForm.tsx`).
- Testimonials are explicitly labeled as fictional examples.
- No real address, phone number, certifications, or customer history are
  claimed anywhere on the site.
