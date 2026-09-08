# CLAUDE.md — Mary Help of the Sick Mission Hospital website

Public website for Mary Help of the Sick Mission Hospital, Thika, Kenya. Built with Next.js 16 (App Router), React 19, TypeScript (strict) and Tailwind CSS v4. Deployed on Vercel. Full requirements live in `docs/SPECIFICATION.md`; open content questions live in `docs/CONTENT-VERIFICATION.md`.

## Commands

```bash
npm run dev          # local dev server on http://localhost:3000
npm run build        # production build (must pass before merging)
npm run lint         # ESLint (next/core-web-vitals + typescript)
npm run typecheck    # tsc --noEmit
npm run check        # lint + typecheck + build
```

## Where things live

- `src/content/*.ts` — ALL editable copy and data (contact details, services, clinics, news, FAQs, leadership, timeline). Edit here, not in components.
- `src/content/site.ts` — single source of truth for phone numbers, email, address, hours, social links, site URL. Never hard-code contact details elsewhere.
- `src/app/**` — routes. Service and news pages are generated from content modules via `generateStaticParams`.
- `src/components/layout` (Header, Footer, EmergencyBar), `src/components/ui` (primitives), `src/components/sections` (page sections), `src/components/forms` (ContactForm).
- `src/lib` — helpers (`schema.ts` for JSON-LD, `seo.ts`, `utils.ts`).
- `public/images` — optimised JPGs (≤ 1800 px wide, ≤ 320 kB). Real hospital photos are preferred over stock.

## Conventions

- Server Components by default. Add `"use client"` only for interactivity (mobile nav, accordion, form).
- Tailwind utilities with design tokens from `globals.css` (`navy`, `blue`, `blue-bright`, `terracotta` = brand red, `gold`, `green`, `ink`, `muted`, `surface`). No inline hex colours in components.
- Brand look: Madonna and Child circle logo (`public/images/logo-mark*.png`), Poppins headings, Source Sans body, square-cornered cards, red heading rules (`.heading-rule`), photo-led sections. Avoid decorative gradients, blur blobs and pill-shaped cards.
- Every page exports `metadata` (title ≤ 60 chars, description ≤ 155 chars). Use `buildMetadata()` from `src/lib/seo.ts`.
- Every image uses `next/image` with meaningful `alt`. Decorative images use `alt=""`.
- Accessibility: semantic landmarks, one `h1` per page, visible focus styles, 44 px touch targets, `prefers-reduced-motion` respected.
- Keep British/Kenyan English spelling (paediatrics, programme, centre, anaesthesia).
- Phone numbers display as `+254 724 936 177` and link as `tel:+254724936177`.

## Content rules (important)

- Say "over six decades" of service; do not state a single founding year.
- Do not claim an operational ICU or a comprehensive cancer centre. These are aspirations; HDU is fine.
- Do not publish internal statistics, patient counts, clinical outcome figures or staff personal numbers.
- Proposals (College of Nursing and Clinical Medicine, Clinical Research Centre) are "projects in development".
- Insurance: "SHA accredited; major private insurers accepted — confirm at reception". No insurer logos.
- Research claims must use status verbs (reported, awarded, published, proposed).

## Deployment

- `main` → Vercel production. Pull requests → preview deployments.
- Env vars: `NEXT_PUBLIC_SITE_URL`, optional `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
- The contact form works without Resend (returns a fallback message with phone/email).

## Before committing

Run `npm run check`. Do not commit `.env*`, `.next/`, or `node_modules/`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
