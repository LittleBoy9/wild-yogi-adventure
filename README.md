# Wild Yogi Adventures — landing page

A static, single-page site for **Wild Yogi Adventures**, a trekking company based in
Maheshtala, Kolkata. No framework, no build step, no dependencies — plain HTML, CSS
and vanilla JS, ready to host on GitHub Pages.

**Tagline:** *"Wander the wild, Awaken the yogi within."* — their own, taken from their
printed expedition banners.

---

## Deploy to GitHub Pages

```bash
git init
git add -A
git commit -m "Wild Yogi Adventures landing page"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

Then: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.**

The site goes live at `https://<you>.github.io/<repo>/` in a minute or two.

Every path in the project is **relative**, so it works at any base path — a project
page, a user page, or a custom domain — with no config change. `.nojekyll` is included
so GitHub serves the `assets/` folder untouched.

### Custom domain

Their banners already print **`www.wildyogiadventures.com`** — but that domain does not
currently resolve. If they own it, point it here and the printed banners start working:

1. Create a `CNAME` file containing `www.wildyogiadventures.com`
2. At the registrar, add a `CNAME` record for `www` → `<you>.github.io`
3. Settings → Pages → Custom domain → enter it → tick **Enforce HTTPS**

### Preview locally

```bash
python3 -m http.server 8777
# http://localhost:8777
```

---

## Where every fact on the page came from

Nothing on this page is invented. Sources:

| On the page | Source |
|---|---|
| Name, category, address, plus code | Google Business Profile |
| **5.0 ★ / 105 reviews** | Google Business Profile, Sept 2026 |
| Phone `82749 60430` | Google Business Profile |
| Phones `62902 48082`, `89819 91997` | printed on their own summit banners |
| Tagline, "est 2024" | printed on their own summit banners |
| Sandakphu–Phalut **11,930 ft** | their Sandakphu banner |
| Tunganath–Chandrasila **12,110 ft** | their Tunganath banner |
| Rupin Pass **15,350 ft** | their Rupin Pass banner |
| Bali Pass **16,200 ft** | their Bali Pass banner |
| Yeti Stone Hike **7,545 ft** | their Yeti Stone banner |
| Aal **11,570 ft** | their trail signage |
| Review quotes | verbatim from public Google reviews |
| Team names (Avrajit, Tikaram, Joy) | named repeatedly across the reviews |
| Sandakphu waypoint order | the route as described in their own reviews |
| All 58 trek photos | their own Google Business listing |
| Logo | their Instagram profile picture |
| 10 Instagram posts | their public Instagram profile |
| Har Ki Dun **13,025 ft** | their "Trek Plans 2026" Instagram post |
| Hampta Pass **14,100 ft** | their Hampta Pass summit banner |
| Valley of Flowers **14,200 ft**, 6D/5N, Moderate, Rishikesh | their Valley of Flowers post |
| Yeti Stone Hike **7,545 ft**, 4D/3N, Easy, NJP–NJP | their Yeti Stone Hike post |

"It is a trek, not a trip" is a phrase from one of their actual reviews.

---

## ⚠️ Please confirm before this goes public

These are the only items **not** sourced directly from Wild Yogi, and the first thing
to check with them:

1. **Durations** — conventional for these routes and NOT confirmed, except
   **Valley of Flowers (6 days / 5 nights)** and **Yeti Stone Hike (4 days / 3 nights)**,
   which are taken from their own Instagram posts.
2. **Seasons** (`Oct–Dec · Mar–May`, …) — conventional, not confirmed.
3. **Difficulty gradings** — our reading, except **Valley of Flowers (Moderate)** and
   **Yeti Stone Hike (Easy)**, which are their own stated difficulty.
4. **Route waypoint lists** on each trek card — standard published routes for Rupin,
   Bali, Valley of Flowers and Tunganath. Only Sandakphu's comes from their own reviews.
5. **Valley of Flowers** has no altitude, because no banner photo showed one.
6. **Kedarnath is missing, deliberately.** They actively promote it (their Instagram
   post advertises it "starts from 9999/-"), but there is no usable photograph: none of
   the 245 photos on their Google listing show Kedarnath, and their Instagram graphic has
   promo text top and bottom, leaving a clean band only ~308px tall. Cropping that to the
   card's 3:4 shape would upscale a 231px-wide image to 900px and look obviously soft next
   to the others. **Send one good Kedarnath photo and it is a two-minute addition.**
   For this reason no hard count of routes appears anywhere on the page.
7. **Elevation figures** for Srikhola, Rammam, Samanden, Sabargram, Phalut and
   Gurdum are published trail figures. Only Sandakphu and Aal come from their own signage.

**There is no pricing anywhere on the site**, by design — every trek CTA opens WhatsApp
asking for dates and cost, so nothing can be wrong in front of a customer.

The logo is **their real one**, taken from their Instagram profile picture
(`assets/img/brand/logo.webp`). Instagram only serves it publicly at **150×150**, which
is sharp enough at the sizes used here (42px in the nav, 76px in the footer) but not for
print or a large hero. Worth asking them for the original vector.

---

## Editing

Almost everything is data-driven. To change content you only touch
**`assets/js/data.js`**:

| Want to change | Edit |
|---|---|
| Treks, altitudes, routes, blurbs | `WY.treks` |
| Elevation profile waypoints | `WY.profile` |
| Review quotes | `WY.reviews` |
| Team members | `WY.team` |
| "Why us" points | `WY.pillars` |
| Phone / WhatsApp / Instagram / address | `WY.biz` |

Adding a trek to `WY.treks` automatically adds it to the grid, the filter chips, the
footer list, the ticker and the enquiry form's dropdown. Drop a matching image into
`assets/img/treks/` and point `img` at it.

### Adding photos

Put `gNN.webp` (760px wide) and `gNN-lg.webp` (1450px wide) in `assets/img/gallery/`,
then bump the `48` in the `WY.gallery` line of `data.js`.

---

## Instagram

The strip under **@wildyogiadventures** shows their **10 most recent real posts**,
each tile deep-linking to that exact post (reels get a play badge). Captured
2026-09-20 from their public profile.

The thumbnails are **self-hosted** rather than hotlinked, because Instagram's CDN URLs
are signed and expire within days — linking them directly would leave broken images on
the page inside a week.

It is a snapshot, not a live feed, and that is a platform limit rather than a choice.
Instagram's Basic Display API shut down in **December 2024**, and the Graph API needs a
linked Facebook Business account plus a server to hold the token — neither of which a
static GitHub Pages site can do without logging into an account. The alternatives are
third-party scraper APIs, which cost money, expose a key in client-side code, break
regularly and violate Instagram's terms.

**To refresh the posts**, re-download the current thumbnails into `assets/img/insta/`
and update the `WY.instagram` array in `data.js`. Takes a couple of minutes.

If they ever want a genuinely live feed, the clean route is official post embeds
(`instagram.com/p/<shortcode>/embed` in an iframe) — no login, no key, no token, though
it looks like Instagram's chrome rather than the site's design.

## What's in here

```
index.html                 one page, all sections
assets/css/style.css       all styling
assets/js/data.js          ← all content lives here
assets/js/main.js          all interactions
assets/img/hero/           4 rotating hero images
assets/img/treks/          6 trek card images
assets/img/gallery/        48 photos × 2 sizes
assets/img/insta/          10 real Instagram post thumbnails
assets/img/brand/          their logo (from the Instagram profile picture)
assets/img/og.jpg          social share preview
.nojekyll                  tells GitHub Pages to serve assets/ as-is
```

Roughly 25 MB total, mostly photography. The gallery is lazy-loaded and paginated, so
the initial load is a fraction of that.

## Features

Preloader with a drawing ridge line · scroll progress bar · rotating
parallax hero · animated split headings · scroll reveals · counting stats · filterable
trek cards with 3D tilt · **interactive SVG elevation profile of the Sandakphu ridge** ·
dual review marquees · masonry gallery with a keyboard- and swipe-navigable lightbox ·
live-linked Instagram posts · WhatsApp enquiry composer · embedded map · floating WhatsApp button.

**Dark and light themes.** Dark is the default. The toggle sits in the nav (and in the
mobile menu); the choice is remembered in `localStorage`, and until someone chooses, the
site follows the operating system setting. An inline script in `<head>` sets the theme
before first paint so there is no flash of the wrong one.

The hero, the trek cards and the lightbox sit on top of photographs, so they keep
light-on-dark text in **both** themes — done by redefining the colour tokens locally for
those regions rather than rewriting every rule.

Every text style was measured against its actual rendered background:
**dark theme worst case 5.92:1, light theme worst case 4.56:1** — both clear WCAG AA.

Respects `prefers-reduced-motion`, keyboard accessible, no horizontal scroll at 320px,
zero console errors, and no cookies or trackers of any kind.
