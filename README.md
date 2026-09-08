# Mary Help of the Sick Mission Hospital — Website

Official website for [Mary Help of the Sick Mission Hospital](https://maryhelphospital.org), a Catholic mission hospital in Thika, Kenya. Built with Next.js 16, React 19, TypeScript and Tailwind CSS v4, and deployed on Vercel.

- **Specification:** [`docs/SPECIFICATION.md`](docs/SPECIFICATION.md)
- **Content to confirm before launch:** [`docs/CONTENT-VERIFICATION.md`](docs/CONTENT-VERIFICATION.md)
- **Working conventions for AI assistants:** [`CLAUDE.md`](CLAUDE.md)

## Getting started

```bash
npm install
cp .env.example .env.local   # optional: set RESEND_API_KEY to enable email delivery for the contact form
npm run dev                  # http://localhost:3000
```

Before committing:

```bash
npm run check                # lint + typecheck + production build
```

## Editing content

All copy and data live in `src/content/`:

| File | What it controls |
|---|---|
| `site.ts` | Phone numbers, email, address, hours, insurance summary, social links, navigation and footer links |
| `services.ts` | Every service page (name, summary, overview, what we offer, access, hours, image) |
| `clinics.ts` | Specialist clinic directory and weekly schedule |
| `news.ts` | News articles and events (add an object; the page and sitemap update automatically) |
| `faqs.ts` | Frequently asked questions (also rendered on maternity and insurance pages) |
| `leadership.ts` | Governance bodies and leadership |
| `timeline.ts` | History milestones and SMILES values |

Photos live in `public/images/`. Keep them under 1800 px wide and around 300 kB.

## Deployment (Vercel)

1. In Vercel, **Add New → Project → Import** `JGitaka123/Mary-Help-Hospital-Website`. The framework preset is detected automatically.
2. Add environment variables (Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_URL` = `https://maryhelphospital.org`
   - Optional: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` to deliver contact-form messages by email.
3. Deploy. Every push to `main` deploys to production; pull requests get preview URLs.
4. Add the domain `maryhelphospital.org` (and `www`) under Settings → Domains and update DNS as instructed by Vercel.

Alternatively, from a terminal with the Vercel CLI:

```bash
npx vercel login
npx vercel link
npx vercel --prod
```

## Contact form email

The form posts to `/api/contact`. When `RESEND_API_KEY` is set the message is emailed to `CONTACT_TO_EMAIL` (default `info@maryhelphospital.org`) using [Resend](https://resend.com). Without the key the form still works and tells the visitor to call or email instead. Verify the sending domain in Resend and set `CONTACT_FROM_EMAIL` to an address on it.

## Licence

© Mary Help of the Sick Mission Hospital. All rights reserved. Photographs are the property of the hospital.
