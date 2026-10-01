# Wild Yogi Adventures

Production site for **Wild Yogi Adventures**, a Himalayan trekking company based in
Maheshtala, Kolkata. Next.js 16 (App Router) + TypeScript.

```bash
npm install
npm run dev        # http://localhost:3001
npm run build
npm test           # 90 tests
npm run typecheck
npm run lint
```

---

## Why this exists

The approved prototype put all eight treks behind a URL fragment
(`index_v1.html#trek/sandakphu`), so search engines saw **one page, not eight**. For a
company whose customers find them by searching "Sandakphu trek from Kolkata", that is a
real cost.

Every trek now has a **real, statically prerendered URL**:

```
/                       home
/treks                  all journeys
/treks/[slug]           8 prerendered pages, each with its own title,
                        description and Open Graph image
/sitemap.xml            generated from the content model
/robots.txt
```

**2 indexable URLs → 10.**

It also emits structured data the prototype never had, which matters for a local
business whose customers search for named treks:

- `LocalBusiness` + `TravelAgency` with the 5.0 aggregate rating and 105 review count
- `TouristTrip` per route, with the stage list as an itinerary
- `BreadcrumbList` on every inner page

There is **no `offers` block anywhere**, deliberately: no price has been confirmed, and
inventing one would put a wrong number in a search result.

---

## Pages and sections

The approved prototype (`index_v1.html`) was a shortened pitch. This build restores the
sections it dropped:

| Section | |
|---|---|
| Hero | four frames, per-image focal points |
| Trust | counters, animate once in view |
| Escapes | the five categories |
| Journeys | featured five, rest behind a toggle |
| Why us | six points drawn from the reviews |
| **Team** | the three people trekkers name |
| Reviews | marquee, paused on hover |
| **Gallery** | 48 photographs, paginated, lightbox |
| **Instagram** | ten real posts, each deep-linked |
| **Plan your trek** | WhatsApp composer + map |
| **FAQ** | nine questions, answered only from sourced material |
| CTA band | |

The enquiry form composes a WhatsApp message rather than posting anywhere. There is no
backend and no third party: nothing is stored, it is how the company actually talks to
customers, and the enquiry survives in the visitor's own chat history.

---

## Structure

```
src/
├── app/
│   ├── layout.tsx              fonts, metadata, theme bootstrap
│   ├── page.tsx                home
│   ├── globals.css             design tokens, reset, shared primitives
│   ├── treks/
│   │   ├── page.tsx            all journeys
│   │   └── [slug]/page.tsx     one journey  ← generateStaticParams
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
├── components/                 one .tsx + one .module.css each
│   └── Lightbox.tsx            shared by the gallery and each trek
├── content/                    ← all copy and data lives here
├── lib/                        client hooks + schema builders
└── types/                      shared types

public/img/                     photography
poc/                            the approved prototype, frozen
```

### Content

Everything editable lives in `src/content/` and is fully typed:

| File | Holds |
|---|---|
| `site.ts` | business facts, phones, WhatsApp helper |
| `treks.ts` | the eight routes, with stages and photo sets |
| `reviews.ts` | Google review excerpts + per-trek matching |
| `categories.ts` | the five categories the client positions around |
| `pillars.ts` | the "why us" points |
| `media.ts` | gallery, Instagram posts, image dimensions |
| `copy.ts` | headline copy |
| `team.ts` | the people reviewers name |

Adding a trek to `TREKS` automatically produces its page, its sitemap entry, its card,
and its footer link. No other file needs touching.

---

## Tests

```bash
npm test
```

90 tests, Vitest + Testing Library. They target the realistic failure here, which is
content drift rather than logic bugs:

- **Every image path is checked against the filesystem.** A typo in a trek image or
  gallery entry fails the suite instead of shipping a broken page.
- **Altitude labels must match their numeric field**, so `11,930 ft` cannot drift from
  `11930`.
- **No price may appear** in the trek content or in any schema. No price has been
  confirmed, and a wrong number in a search result is worse than no number.
- **The sitemap must list every trek**, which guards the whole reason for the rebuild.
- Photo indices stay in range; review fallbacks behave; FAQ answers all carry a source
  and the internal source notes never render.

## Error and loading states

`error.tsx`, `global-error.tsx` and `loading.tsx` are in place. Both error boundaries
keep the WhatsApp link and phone number visible — if a page breaks, the visitor can
still reach the company. `global-error` is styled inline because it cannot rely on the
root layout it is catching for.

Note the Next.js 16 error boundary prop is `retry`, not `reset`.

---

## Decisions worth knowing

**CSS Modules, not Tailwind.** The design was already approved as ~400 lines of tuned CSS
with a light/dark token system. Porting it to utility classes would have risked visual
drift for no user-visible gain. Tokens live in `globals.css`; everything else is
colocated `.module.css`. Straightforward to swap later if you prefer Tailwind.

**Light is the default theme, always.** It does not follow the device's `prefers-color-scheme`,
because light is the direction the client approved and it should not depend on whether
their phone is in dark mode. Dark is one tap away and is remembered. `ThemeScript` applies
it before first paint so there is no flash; `useTheme` reads the DOM attribute through
`useSyncExternalStore` rather than mirroring it into React state, so the two cannot drift
during hydration.

**Content over photographs keeps light-on-dark text in both themes.** The hero, the trek
cards and the trek page header sit on photography, so they redefine the colour tokens
locally rather than following the theme.

**Hero focal points.** The hero is full-bleed, so phones crop a tall centre slice. Each
slide carries a `position` so the subject does not land behind the headline. Ultra-wide
panoramas are unsuitable regardless of how good they look on desktop — cropping a
2000×896 image to a phone's shape upscales it ~1.9× and goes soft.

**`params` is a Promise.** Next.js 16 removed synchronous access, so page and metadata
functions `await props.params`.

---

## Before launch

Set the canonical origin, or metadata and the sitemap will point at localhost:

```
NEXT_PUBLIC_SITE_URL=https://wildyogiadventures.com
```

Open items are documented in [`poc/README_V1.md`](poc/README_V1.md) — briefly:

1. **Prices and departure dates** — none on the site. Every CTA opens a WhatsApp enquiry.
2. **Durations, seasons and gradings are unconfirmed** for six of the eight routes.
   Valley of Flowers and Yeti Stone Hike carry the company's own published figures.
3. **Kedarnath is missing** — they run it, but there is no usable photograph.
4. **One stock photograph** (the second hero, Pexels 4751943, free commercial licence).
   Everything else is Wild Yogi's own.
5. **The logo is 150×150**, the largest Instagram serves publicly. Fine on screen, not
   for print. Ask for the vector.

---

## `poc/`

The approved prototype, kept verbatim: `poc/index.html` (the first build) and
`poc/index_v1.html` (the version the client signed off). Self-contained, still opens, and
excluded from linting and the app build. Kept as the reference for what was agreed.
