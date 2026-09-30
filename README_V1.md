# index_v1.html — the drill-in version

A **second, independent landing page** built from the client's mockups. It does not
touch the live page in any way.

| | Live page | This page |
|---|---|---|
| File | `index.html` | `index_v1.html` |
| CSS | `assets/css/style.css` | `assets/css/v1.css` |
| JS | `assets/js/data.js`, `main.js` | `assets/js/data.js`, `v1-extra.js`, `v1.js` |
| Default theme | Dark | **Light** |
| Scope | Treks only | 5 categories, treks in depth |
| Trek detail | Hover reveal on the card | **Full drill-in view** |

`index.html`, `style.css` and `main.js` are **byte-for-byte unchanged**. `data.js` is
shared and also unchanged — this page only reads it, so the verified altitudes and
reviews can never drift between the two pages. Both pages can sit in the same repo and
be deployed together.

---

## Before you deploy — 1 thing

In `index_v1.html`, find-and-replace:

```
https://YOURNAME.github.io/wild-yogi-adventure
```

with the real address, no trailing slash. Same reason as the live page: `og:image` must
be absolute or WhatsApp shows the link with no preview image.

Then it is reachable at `…/index_v1.html`, alongside the live page at `/`.

---

## What the client actually asked for

From your brief: *"user will come, interactive, user can see top 4-5 treks, user can go
inside, user can see the details properly."*

That is what this page is built around.

1. **Land** on a hero using their own copy — *Walk into the wild. Return to yourself.*
2. **Choose an escape** — the 5 categories they position around.
3. **See the top 5 journeys** — Sandakphu, Valley of Flowers, Tunganath, Rupin, Bali.
   "Show all journeys" reveals the other 3.
4. **Go inside** — clicking any card opens a full detail view.
5. **See it properly** — hero, stat bar, the full story, what stands out, the route
   stage by stage with altitudes, a photo gallery with lightbox, reviews for that
   specific route, and a sticky "Request dates & cost" bar that never scrolls away.

### The drill-in

It is an overlay, not a separate page, so it opens instantly with no reload. But it is
**properly addressable**:

- The URL becomes `index_v1.html#trek/sandakphu` — copy it, send it, it opens there.
- The phone's **back button closes the detail view** instead of leaving the site.
- `Esc` closes it. Focus returns to the card you came from.
- Footer links deep-link straight into a journey.

---

## Design

Light-first, following their mockup: cream ground, rounded cards, dark footer. The
colours are the same brand set sampled from their logo — the light-mode terracotta is
darkened to `#A84717` (their hue, ~20°) so it clears contrast on light.

**It opens light for everyone, deliberately.** It does not follow the device's dark-mode
setting, because if the client happens to have dark mode on they would open the page and
think we ignored the direction they gave. Dark is one tap away in the nav and is
remembered once chosen (under its own key, so it does not affect the live page).

Contrast was measured against actual rendered backgrounds:
**light worst case 5.07:1, dark worst case 5.80:1** — both clear WCAG AA.

The hero, the cards and the detail hero sit on photographs, so they keep light-on-dark
text in both themes.

---

## ⚠️ What to tell the client

**1. The 5 categories are their vision, not verified offerings.**
Only **Treks** has real content. Yatra, Road Trips, Camping and Adventure Activities are
presented as honest "Enquire" cards that open a WhatsApp message — no invented
itineraries, prices or dates. Ask them what they actually run before filling these in.

**2. The photos are all theirs.** Their own mockup used stock imagery — Cappadocia
balloons, a Utah desert road, Ama Dablam in Nepal. None of it is theirs, and none of it
is where they operate. Every image here is from their own Google listing. Worth pointing
out, because it is the single biggest difference between the two.

**3. The Road Trips category photo is a stand-in.** There is no road-trip photograph in
their 245. It currently uses a valley shot. Ask them for a real one.

**4. Route stages are stages, not days.** Wild Yogi have not published a day-by-day split
for most routes, so the detail view says "stage by stage" and the caption tells the
reader to ask for the exact itinerary. Nothing is invented.

**5. Per-trek photos are regional, not verified.** The gallery in each detail view is
weighted to that trek's region but captioned "from Wild Yogi's own albums" rather than
claiming each shot is from that exact route.

**6. Reviews per trek.** Only Sandakphu and Valley of Flowers are named by reviewers, so
those two show route-specific reviews. The rest fall back to general reviews with a
caption saying so.

**7. Hero copy.** The headline is from the client's own mockup. Their printed banner
tagline — *"Wander the wild, Awaken the yogi within"* — is kept in the footer so both
are present. Ask which they want to lead with.

---

## Editing

| Want to change | Edit |
|---|---|
| Hero copy, section headings | `WY.v1.copy` in `v1-extra.js` |
| The 5 categories | `WY.v1.categories` |
| Which 5 treks lead | `WY.v1.featured` |
| Detail text, stages, photos | `WY.v1.detail` |
| Altitudes, durations, reviews, phones | `data.js` — **shared with the live page** |

Editing `data.js` changes **both** pages. That is intentional: the facts stay in one
place. Anything that should differ between the two lives in `v1-extra.js`.
