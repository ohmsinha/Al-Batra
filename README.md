# Al Batra Management Consultancy — Website

Production-ready marketing website for Al Batra Management Consultancy, built with Astro. Mirrors the visual direction set in the Claude Design handoff at `../al-batra-design-system/`.

## Stack

- **[Astro 5](https://astro.build/)** — static-first, content-collections, MDX, sitemap.
- **No CSS framework.** Tokens-first hand-written CSS in `src/styles/`, mirroring the design system.
- **No JS framework on the page.** Astro renders to HTML; small in-page scripts (mobile nav) live in the components that need them.

## Get started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → ./dist
npm run preview  # serve dist locally
```

Node 18+ is recommended.

## Project layout

```
src/
  components/           Reusable section components (Hero, TrustStrip, …)
    seo/                <SEO> wrapper that emits all meta + JSON-LD
  content/
    services/           Service detail pages (Markdown)
    industries/         Industry detail pages (Markdown)
    blog/               Insights articles (Markdown / MDX-ready)
    faq/                Individual FAQ entries (JSON, data collection)
    config.ts           Collection schemas (Zod)
  data/
    company.ts          Single source of truth for company facts
    navigation.ts       Header / footer link config
    standards.ts        27-standard roster + family groupings
  layouts/
    BaseLayout.astro    Page chrome (head, header, footer, RTL)
  pages/
    index.astro         Homepage
    services/           Hub + [slug].astro detail
    industries/         Hub + [slug].astro detail
    insights/           Index + [slug].astro article
    about.astro
    contact.astro
    faq.astro
    privacy.astro
    terms.astro
    404.astro
    rss.xml.ts          Auto-generated RSS feed of /insights/
    ar/index.astro      Arabic landing-page shell (English-first launch)
  styles/
    tokens.css          Design tokens (mirrored from design system)
    global.css          Resets, layout primitives, typographic primitives
    components.css      Component CSS classes
  utils/
    seo.ts              JSON-LD builders, hreflang, canonical helpers
public/
  assets/               Logos (copied from design handoff)
  og/default.svg        OG image placeholder — replace before launch
  favicon.svg
  robots.txt
```

## What lives where

### Single source of truth for company facts

`src/data/company.ts` holds the name, address, phones, email, geo, opening hours, and trust claims. Update once; everything else (header, footer, contact page, JSON-LD) follows.

Items currently flagged with `unverified: true`:

- `geo.latitude` / `geo.longitude` — placeholder coordinates near Rolla Square. Confirm exact lat/long before launch (used in `ProfessionalService` JSON-LD).
- `socials.linkedin` — guessed URL pattern. Confirm with client.
- `trustClaims.organisationsServed` / `standardsCovered` — directionally accurate from brand brief. Confirm with client.

### Service & industry content

Each service or industry is a Markdown file under `src/content/`. The frontmatter `needsVerification` field lists facts in the body that should be confirmed with the client before launch. Add or remove entries by creating/deleting files — the routes generate automatically.

### Featured standards on the homepage

The homepage shows the **first 9** standards from `src/data/standards.ts` that have a `slug`. Re-order or remove `slug` to take a standard out of the homepage grid; the full roster on `/services` always shows everything.

### FAQ entries

Each question is one JSON file under `src/content/faq/`. The `order` and `category` fields control sorting and grouping on `/faq`. The homepage shows the first five by order.

## SEO

Every page renders through `<SEO>` (`src/components/seo/SEO.astro`) which emits:

- `<title>` and `<meta name="description">`
- `<link rel="canonical">`
- Open Graph (`og:title`, `og:description`, `og:image`, `og:locale`)
- Twitter Card metadata
- `<link rel="alternate" hreflang>` for `en`, `ar`, and `x-default`
- One or more `application/ld+json` blocks (Organization on every page, plus page-specific schemas: `Service`, `Article`, `FAQPage`, `BreadcrumbList`, `Blog`, `WebSite`)
- Robots directive (defaults to indexable, with `noindex` opt-in)

Helpers live in `src/utils/seo.ts`. Add new JSON-LD builders there; do not inline schema in pages.

### Sitemap & robots

- `astro-sitemap` generates `sitemap-index.xml` at build with the i18n config (en/ar).
- `public/robots.txt` references the sitemap and disallows `/api/`.

### RSS

`/rss.xml` is generated from the `blog` collection at build time.

## Bilingual (English + Arabic)

The architecture is bilingual-ready:

- `<html lang dir>` is set per-locale via `BaseLayout`.
- The header offers EN / عربي toggles that compute the mirror path.
- Hreflang alternates are emitted on every page.
- `IBM Plex Sans Arabic` is loaded for RTL surfaces.
- A starter `/ar/` route exists.

The English-first launch uses `/ar/` as a landing page that points enquirers to email and phone. To go fully bilingual, add an `src/content/ar-services/`, `src/content/ar-industries/`, etc. collection (or use a CMS), and create the parallel page tree under `src/pages/ar/`. Reuse the same components — they accept a `locale` prop.

## Form submission

The contact and lead-CTA forms post to `/api/contact`. **This endpoint does not exist in the static build.** Wire one of the following before launch:

- A serverless function (Cloudflare Pages Functions, Vercel, Netlify) at `/api/contact`
- A third-party form service (Formspree, Getform, Basin) — change the `action` attribute in `LeadCTA.astro` and `pages/contact.astro`
- An email service with hosted form endpoint

The forms are validated on the front end via native HTML constraints. Spam protection (hCaptcha / Turnstile) should be added at the same time the backend is wired up.

## Replacing placeholders

| Placeholder | Where | What to do |
| --- | --- | --- |
| Hero photo (navy gradient slot) | `src/components/Hero.astro` (`.ab-hero-photo`) | Swap the inner DOM for a real `<img>` once the Sharjah HQ photograph is delivered. |
| About page image | `src/pages/about.astro` (`<ImageSlot ...>`) | Replace `<ImageSlot>` with `<img>` once the office photograph is delivered. |
| Default OG image | `public/og/default.svg` | Replace with a 1200×630 PNG; update `DEFAULT_OG` in `src/utils/seo.ts` if you rename. |
| Logo (raster) | `public/assets/logo.png`, `logo-footer.png` | Replace with SVG masters when client delivers them. Update `Logo.astro` to reference `.svg`. |
| Trust badges (Sharjah Municipality, IAF, ANAB, ISO standard wordmarks) | Currently absent | Once client supplies files, add to `public/assets/trust/` and render in a grayscale row above the footer. Component to add: `<TrustBadges />`. |
| Testimonials | `src/components/ClientProof.astro` | Quotes are illustrative and on-brand but unattributed. Replace with real client statements once the firm clears them for publication. |

`needsVerification` arrays in service and industry markdown frontmatter list factual claims that need confirmation before launch.

## What's intentionally not in this build

- **No analytics.** Add GA4 / Plausible / Fathom by including the snippet in `BaseLayout.astro`. The brief did not specify a provider.
- **No CMS.** Content lives in the repo. If the client wants self-service editing later, the content collections drop straight into Sanity, Decap, Keystatic, or Astro Studio with minimal refactor.
- **No image optimisation pipeline.** When real photography arrives, switch the placeholder `<ImageSlot>` usages and any future `<img>` tags to Astro's built-in `<Image />` component. Place originals in `src/assets/`.
- **No animation library.** The brief is conservative — current transitions are limited to button hover, card lift, and FAQ chevron rotation. If a richer motion vocabulary is wanted, add Motion or GSAP and limit it to hero / section reveals.

## Visual fidelity notes

The design handoff specified:

- Navy `#0E2A47`, red `#B91C26`, sand `#F6F1E8`, ink `#101820`, steel `#5A6573`, gold `#C9A96E`.
- Inter Tight (display) + Inter (body) + IBM Plex Sans Arabic + JetBrains Mono.
- 4 px base spacing, tight corner radii (2 / 4 / 8 / 12), warm navy-tinted shadows, 1 px hairlines.
- No SaaS gradients, no pill buttons, no emoji.

These are all mirrored in `src/styles/tokens.css` and `src/styles/components.css`. If the client supplies licensed corporate typefaces, replace the `@import` line at the top of `tokens.css`.

## License & ownership

Code in this repository is the working asset of {Al Batra Management Consultancy / agency}. Brand assets (logos, colors, photography) remain the property of Al Batra Management Consultancy.
