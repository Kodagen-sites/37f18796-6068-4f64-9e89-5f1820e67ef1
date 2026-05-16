# Lumière Salon & Spa

A scroll-cinematic, full-service salon & spa website — built with Next.js 16 (App Router),
React 19, Tailwind CSS, Framer Motion and GSAP.

## Generation fingerprint

| Axis | Pick |
|------|------|
| Archetype | G — Mixed-Media Hybrid |
| Style | S3 — Soft Pastel Wellness (fresh-sage variant) |
| Voice | V3 — Organic / sensory wellness |
| Header | Transparent Ghost |
| Service card | CV4 — Liquid Glass (light adaptation) |
| Hero overlay | HO1 — Centered |
| Hero technique | T2 — scroll-scrubbed video (96 frames) |
| Booking | B4 — always-on sticky bar |
| Asset mode | live-generate (Gemini Nano Banana + Veo 3.1 Lite) |
| Build mode | Landing page (no admin layer) |

## What's inside

- **Home** — cinematic scroll-scrub hero, value prop, 6-service grid, image
  showcase, type statement, pinned process, animated stats, testimonials,
  canvas-atmosphere CTA, contact teaser.
- **Services** + **Service detail** (`/services/[slug]`) for all six disciplines.
- **About**, **Contact** (split photo + form), **Privacy**, **Terms**.
- **Booking** — B4 sticky bar; every "Book an appointment" CTA opens it.
  Reservations POST to `/api/reservations` and route to `/booking-confirmation`.
- SEO baseline — per-page metadata, JSON-LD (`BeautySalon` + `Service`),
  `robots.ts`, `sitemap.ts`.

## Assets

Generated live: 14 section/service stills + one 8s Veo hero clip, extracted to
96 scroll-scrub frames in `public/frames/`. Prompts kept in `prompts/`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (next build --debug-prerender)
npm run start
```

Regenerate assets (needs `GEMINI_API_KEY`): `npm run gen:all`.

## Contrast audit

| Pairing | Ratio | WCAG | Status |
|---------|-------|------|--------|
| Hero H1 (#f6efe3) / dark video overlay | ~11 | AAA | PASS |
| Body text (rgba ink .82) / cream bg | ~8 | AA | PASS |
| Eyebrow sage-deep (#5f7253) / cream | ~4.6 | AA | PASS |
| On-deep text (#f4ede2) / cocoa (#2c2925) | ~12 | AAA | PASS |

## Notes before launch

Business name, address, phone, stats and testimonials are placeholders —
replace with real details. See `content/refined-copy.json`.
