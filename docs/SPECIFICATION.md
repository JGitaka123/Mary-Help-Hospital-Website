# Mary Help of the Sick Mission Hospital — Website Specification

**Version:** 1.0 · **Date:** 8 September 2026 · **Owner:** Hospital Management (Chief Medical Officer sponsor) · **Status:** Approved for build

---

## 1. Purpose and goals

Mary Help of the Sick Mission Hospital (MHSMH) is a Catholic, faith-based, KEPH Level 4 mission hospital in Thika, Kiambu County, Kenya. It is owned by the Archdiocese of Nairobi and managed by the Salesian Missionaries of Mary Immaculate (SMMI) Sisters. It has served the community for over six decades and is known across Thika for maternal and newborn care, affordable care and a compassionate, holistic approach.

The existing domain `maryhelphospital.org` currently serves a bare directory listing with no website. This project delivers a complete, production-grade public website.

### Primary goals

1. **Help patients get care quickly** — emergency numbers, location, opening hours, what to bring, how to book, which insurance is accepted.
2. **Present the full service portfolio credibly** — from outpatient and maternity to renal, theatre and laparoscopy, diagnostics, rehabilitation and specialist clinics.
3. **Communicate identity and trust** — Catholic mission, 60+ years of history, SMMI Sisters, values (SMILES), governance and clinical leadership.
4. **Support growth priorities** — research and innovation, education (nursing college proposal), partnerships, careers and giving.
5. **Be maintainable by non-developers** — all content in typed data files under `src/content`, one place for contact details, simple deployment on Vercel.

### Success measures (first 6 months)

- Site live on Vercel with custom domain and HTTPS.
- Lighthouse ≥ 95 performance, ≥ 95 accessibility, 100 SEO on Home and Services (mobile).
- Contact / appointment requests delivered to the hospital inbox within 1 minute.
- Google Business and search results point to the new site; "Mary Help Hospital Thika" ranks #1.

---

## 2. Audiences and top tasks

| Audience | Top tasks |
|---|---|
| Patients and families (Thika, Kiambu, Murang'a, Thika Road corridor) | Call emergency, find location, check hours, see services, book appointment, check insurance/SHA, visiting hours |
| Expectant mothers | Maternity services, antenatal clinics, Mother and Child Centre, what to bring for delivery, newborn unit |
| Referring clinicians and visiting consultants | Specialist services, theatre/laparoscopy, renal, diagnostics, how to refer, admitting rights and code of conduct |
| Job seekers and students | Careers, values, college and training plans |
| Partners, donors, researchers, the Archdiocese and Board | Mission, governance, research programme, strategic projects, how to support |

---

## 3. Information architecture (sitemap)

```
/                         Home
/about                    About the hospital (history, mission, vision, values, faith identity)
/about/leadership         Governance & leadership (Archdiocese, SMMI Sisters, Board, management)
/services                 Services index (grouped)
/services/[slug]          Service detail (one page per service, 20+ pages)
/maternity                Maternity & Mother and Child Centre (flagship page)
/specialist-clinics       Specialist clinic directory and schedule
/patients                 Patients & Visitors hub (before you visit, admission, visiting, billing, insurance, rights, FAQs)
/patients/insurance       Insurance, SHA and payment
/patients/faq             Frequently asked questions
/research                 Research & innovation
/education                Education & training (College of Nursing and Clinical Medicine project)
/news                     News & updates index
/news/[slug]              News article
/careers                  Careers & volunteering
/support-us               Give / partner
/contact                  Contact, map, directions, appointment request form
/emergency                Emergency information (always one tap away)
/privacy                  Privacy notice
/sitemap.xml, /robots.txt, /manifest.webmanifest, /opengraph-image
```

Global elements: emergency top bar, header with primary navigation and "Book appointment" call to action, footer with contact, hours, quick links, social, legal.

---

## 4. Page-by-page content specification

### 4.1 Home
1. **Utility bar** — main phone, email, emergency number and social media icons (Facebook, X, Instagram, YouTube, WhatsApp); mobile shows a sticky call button.
2. **Hero carousel** — five full-bleed photographic slides (A&E entrance, Mother and Child Centre opening, ambulance, theatre, campus) each with an eyebrow, headline, text and call to action; auto-advances every 7 s, pauses on hover, has previous/next, dot navigation, a pause button, keyboard support and respects reduced-motion.
3. **Quick actions** — Emergency, Book appointment, Find a service, Maternity, Insurance & SHA, Visiting hours.
4. **Services overview** — 8 featured services with icons and links, plus "View all services".
6. **Why Mary Help** — four pillars: Faith-rooted compassion, Affordable, Experienced specialists, Growing platform (theatres, renal unit, laparoscopy, HDU).
7. **At a glance** — figures that are safe to publish: 60+ years, 24/7 emergency, 2 operating theatres, 20+ specialist consultants, 100+ outpatients daily.
8. **Specialist clinic schedule** — compact weekly view with link to full directory.
9. **Research & education** — teaser cards.
10. **Latest news** — 3 most recent.
11. **Visit us** — map embed, address, directions, hours, contact card.

### 4.2 About
History timeline (1960s founding as Thika Maternity Hospital → SMMI management → 2022 theatres and renal unit → 2023 laparoscopy → 2025 60th anniversary and Mother and Child Centre), mission, vision, SMILES values (Service, Mindfulness, Integrity, Leadership & Professionalism, Excellence, Synergy), Catholic identity and chaplaincy, Marian grotto photo, community.

### 4.3 Leadership & governance
Ownership (Archdiocese of Nairobi), management (SMMI Sisters), Board of Directors, Hospital Management Team, and a hospital leadership row of circular portraits with a blue gradient ring: Sr. Packiam Lourdu (CEO), Dr. Jesse Gitaka (CMO), Esther Thea (Head of Nursing), John Murimi (Finance Manager) and Francis Kioko (HR Manager, initials monogram, no photo). Names and titles only, no bios.

### 4.4 Services
Grouped into: Emergency & Outpatient · Maternity & Child Health · Inpatient & Surgery · Renal & Specialty Care · Diagnostics & Pharmacy · Rehabilitation & Wellbeing. Each service page: hero, overview, what we offer (bullets), who it is for, how to access (walk-in, appointment, referral), hours, related services, CTA.

### 4.5 Maternity (flagship)
Antenatal care, delivery (normal and caesarean, 24/7 obstetric cover), postnatal care, newborn unit / special care nursery, Mother and Child Centre, child welfare clinic and immunisation, gynaecology clinics, family planning, what to bring, insurance, FAQ.

### 4.6 Specialist clinics
Directory: Obstetrics & Gynaecology, General Surgery, Orthopaedics, Paediatrics, Physician (Internal Medicine), ENT, Ophthalmology, Plastic Surgery, Neurosurgery, Renal, Dental, Optical, Mental Health, Nutrition, Physiotherapy, Occupational Therapy, Speech Therapy. Weekly schedule table (data-driven), note to confirm at reception.

### 4.7 Patients & visitors
Before you visit (what to bring, ID, SHA card), admission process, visiting hours, billing and payment methods (cash, M-Pesa, insurance), patient rights and responsibilities, feedback and complaints, FAQs.

### 4.8 Research & innovation
Expanded Research Unit, sickle-cell surveillance and genetic referral experience, 2024 Science for Africa Foundation NCD AI award, antimicrobial stewardship research expertise, proposed Clinical Research Centre with partners (CRTMCD, CRID at Mount Kenya University), collaboration invitation. Status-accurate language (reported, awarded, proposed).

### 4.9 Education & training
Values-based clinical training, mentorship of students on placement, proposed Mary Help College of Nursing and Clinical Medicine (hospital-embedded model, Diploma in Nursing Science aligned with NCK). Clearly marked as a project under development.

### 4.10 News
Static, data-driven articles: 60th anniversary and Mother and Child Centre opening (25 March 2025), Research Unit expansion, Speech therapy unit, service growth. Extendable via `src/content/news.ts`.

### 4.11 Careers
Why work here, open roles (data-driven, may be empty with a standing invitation), visiting consultant admitting rights process, volunteering, how to apply.

### 4.12 Support us
Ways to give: donations, equipment, partnerships, prayer. Priority projects (Mother and Child services, renal, diagnostics, research centre, ICU and cancer centre aspirations). No online payment in v1; contact details for giving.

### 4.13 Contact
Contact cards (emergency, general line, email), address and directions (Kimathi Estate, off Kenyatta Highway, opposite Munene Industries, near St Andrew's ACK Cathedral, 1 km from Thika town), Google Maps embed, hours, appointment/contact form (name, phone, email, department, preferred date, message), WhatsApp link.

### 4.14 Emergency
Large tel buttons, what to do in an emergency, ambulance, directions, Accident & Emergency description, when to go to A&E vs outpatient.

---

## 5. Design system

**Brand direction:** the hospital's existing identity as seen on its posters and signage: the Madonna and Child (Mary Help of the Sick) in a white-ringed circle as the logo mark, a bright royal blue, red for emergency and accents, white space, and a rounded geometric sans (Poppins) for headings. The look is institutional and photographic rather than decorative: square-cornered cards, a two-tier hospital header (utility bar, identity row, navigation row with red active underline), full-bleed photo heroes and short red rules under headings.

| Token | Value | Use |
|---|---|---|
| `--color-navy` | `#0A2A52` | Headings, footer, dark hero overlays |
| `--color-blue` | `#0B6FC2` | Primary buttons, links, utility bar, stats band |
| `--color-blue-bright` | `#0C8FDF` | Accent labels on dark backgrounds (poster blue) |
| `--color-blue-light` / `-mist` | `#E4F1FB` / `#F1F7FC` | Tints, light heroes |
| `--color-terracotta` | `#C8102E` | Emergency, active navigation rule, heading rules |
| `--color-gold` | `#D4A437` | Sparing highlights (values, timeline) |
| `--color-green` | `#1F7A4D` | Success states, schedule ticks |
| `--color-ink` / `--color-muted` | `#1B2430` / `#5A6875` | Body and secondary text |
| `--color-surface` / `-alt` | `#FFFFFF` / `#F5F8FB` | Page and section backgrounds |

**Logo:** `public/images/logo-mark.png` (circle-cropped Madonna and Child) and `logo-mark-white-ring.png`; app icons in `src/app/icon.png` and `apple-icon.png`. The wordmark is set in Poppins: "Mary Help of the Sick" over "MISSION HOSPITAL".

**Typography:** Poppins 500/600/700 for headings, navigation, buttons and labels (matches the hospital's printed material); Source Sans 3 for body text at 17px. Line length ≤ 70ch.

**Components:** Button (primary, secondary, outline, danger/emergency), Card, Section header (eyebrow + title + lead), Icon tile, Stat, Badge/Chip, Accordion (FAQ), Schedule table, Breadcrumb, Form fields with validation messages, Emergency bar, Header (sticky, mobile drawer), Footer, Map embed, Prose container, CTA banner.

**Imagery:** real hospital photos first (A&E entrance, Marian grotto, Mother and Child Centre opening, staff). Stock photography only for service cards where no hospital photo exists, always people-first and diverse. No AI-generated faces.

**Motion:** subtle only (fade/slide on scroll via CSS, 200–300 ms, respects `prefers-reduced-motion`).

**Layout:** 12-column fluid grid, max-width 1200 px, generous whitespace, mobile-first; touch targets ≥ 44 px.

---

## 6. Technical architecture

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 16 (App Router, React 19, TypeScript strict) | Static generation, image optimisation, metadata API, Vercel-native |
| Styling | Tailwind CSS v4 with design tokens in `globals.css` | Fast, consistent, no runtime CSS |
| Icons | lucide-react | Consistent line icons |
| Fonts | `next/font/google` (Fraunces, Inter) | Self-hosted, no layout shift |
| Content | Typed TS modules in `src/content/*` | No CMS needed for v1; simple to edit; type-checked |
| Forms | Route handler `POST /api/contact` → Resend email (when `RESEND_API_KEY` set) with honeypot + rate limiting; graceful fallback shows phone/email | Works with zero infrastructure and upgrades with one env var |
| SEO | Metadata API, per-page titles/descriptions, Open Graph image route, `sitemap.ts`, `robots.ts`, JSON-LD `Hospital` + `MedicalOrganization` + `BreadcrumbList` | Search visibility for local queries |
| Analytics | `@vercel/analytics` optional (env-gated) | Privacy-respecting, no cookies |
| Hosting | Vercel (Git integration, preview deployments per PR) | Global CDN, zero-ops |
| CI | GitHub Actions: lint, type-check, build on every push/PR | Prevent broken deploys |

### Folder structure

```
src/
  app/                    routes (App Router)
    api/contact/route.ts
    (pages)…
    layout.tsx, globals.css, sitemap.ts, robots.ts, manifest.ts, opengraph-image.tsx
  components/
    layout/   Header, Footer, EmergencyBar, MobileNav
    ui/       Button, Card, Section, Stat, Badge, Accordion, Breadcrumbs …
    sections/ Hero, QuickActions, ServicesGrid, MaternityFeature, Stats, ClinicSchedule, NewsList, VisitUs, CtaBanner
    forms/    ContactForm
  content/
    site.ts        contact details, hours, social, address (single source of truth)
    services.ts    service catalogue
    clinics.ts     specialist clinic directory and schedule
    news.ts        news articles
    faqs.ts        FAQs
    leadership.ts  governance and leadership
    timeline.ts    history milestones
  lib/             utils, schema.org builders, validation
public/images/     optimised photos
docs/              this specification, content verification checklist
```

### Environment variables

| Name | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | yes (prod) | Canonical URL, sitemap, OG |
| `RESEND_API_KEY` | no | Enables email delivery for forms |
| `CONTACT_TO_EMAIL` | no | Recipient inbox (default `info@maryhelphospital.org`) |
| `CONTACT_FROM_EMAIL` | no | Verified sender in Resend |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` | no | Override the default map embed |

---

## 7. Non-functional requirements

- **Performance:** LCP < 2.0 s on 4G, CLS < 0.05, total JS < 120 kB gz on Home; all images via `next/image` with explicit sizes; static rendering for all pages.
- **Accessibility:** WCAG 2.2 AA — semantic landmarks, skip link, visible focus, colour contrast ≥ 4.5:1, keyboard-operable nav and accordion, form labels and error messages, alt text on all images, reduced-motion support.
- **SEO:** unique titles ≤ 60 chars, descriptions ≤ 155 chars, canonical URLs, structured data, sitemap, robots, OG/Twitter cards, `lang="en-KE"`.
- **Security:** no secrets in client bundle; form honeypot and per-IP rate limit; strict headers (CSP-lite, X-Frame-Options, Referrer-Policy) via `next.config.ts`.
- **Privacy:** no third-party trackers by default; privacy notice page; forms state how data is used (Kenya Data Protection Act 2019).
- **Resilience:** site is fully static; form degrades to phone/email if email service unavailable.
- **Maintainability:** all copy in content modules; TypeScript strict; ESLint clean; README with editing guide.

---

## 8. Content sources and verification

Content is drawn from hospital documents (profile, brochure, admitting-rights policy, 60th-anniversary speech, Board orientation deck, Q1 2025 report, proposals) and public sources (Archdiocese of Nairobi, Kenya Master Health Facility Registry, listings). Rules applied:

- Founding year **1963** (confirmed by the CMO). Key figures shown on the home page: founded 1963, 35 specialist doctors, 10 specialist clinics, open 24/7.
- Do **not** claim an operational ICU or comprehensive cancer centre; present them as aspirations. HDU is supported.
- Do not publish internal performance statistics, patient counts or clinical outcome figures.
- Do not use insurer logos or claim specific insurer contracts beyond "SHA accredited; major private insurers accepted — confirm at reception".
- Do not publish personal phone numbers of staff; use hospital lines only.
- Mark proposals (College, Clinical Research Centre) as projects in development.

Items to confirm with hospital administration before launch are tracked in `docs/CONTENT-VERIFICATION.md`.

---

## 9. Deployment

1. Repository: `github.com/JGitaka123/Mary-Help-Hospital-Website`, default branch `main`.
2. Vercel: import the GitHub repo (framework auto-detected), set env vars, deploy. Every push to `main` deploys to production; PRs get preview URLs.
3. Domain: add `maryhelphospital.org` and `www` in Vercel, point DNS (A `76.76.21.21`, CNAME `cname.vercel-dns.com`).
4. Post-launch: submit sitemap to Google Search Console, update Google Business Profile website link, update Facebook page link.

---

## 10. Roadmap after v1

- Online appointment booking with calendar and SMS confirmation.
- Patient portal (results, bills) once the hospital information system exposes an API.
- Swahili language version.
- CMS (e.g. Sanity) if non-technical editing volume grows.
- Online giving (M-Pesa STK push / card) for Support Us.
- Doctor profiles directory with photos and consultation days.
