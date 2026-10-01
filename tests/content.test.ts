import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { CATEGORIES } from '@/content/categories';
import { FAQS } from '@/content/faq';
import { GALLERY, INSTAGRAM, imageSize } from '@/content/media';
import { PILLARS } from '@/content/pillars';
import { REVIEWS, reviewsForTrek } from '@/content/reviews';
import { SITE, whatsappLink } from '@/content/site';
import { TEAM } from '@/content/team';
import { FEATURED, TREKS, getTrek } from '@/content/treks';

const PUBLIC = join(process.cwd(), 'public');
const onDisk = (src: string) => existsSync(join(PUBLIC, src));

/**
 * These are the tests that actually earn their keep. The content is hand
 * edited, so the realistic failure is a typo in an image path or a photo index
 * that silently renders a broken page — not a logic bug.
 */
describe('treks', () => {
  it('has routes', () => {
    expect(TREKS.length).toBeGreaterThan(0);
  });

  it('has unique, URL-safe slugs', () => {
    const slugs = TREKS.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach((s) => expect(s).toMatch(/^[a-z0-9-]+$/));
  });

  it.each(TREKS.map((t) => [t.slug, t] as const))('%s: card image exists on disk', (_s, t) => {
    expect(onDisk(t.image), `missing ${t.image}`).toBe(true);
  });

  it.each(TREKS.map((t) => [t.slug, t] as const))('%s: has required copy', (_s, t) => {
    expect(t.name.length).toBeGreaterThan(2);
    expect(t.hook.length).toBeGreaterThan(10);
    expect(t.long.length).toBeGreaterThan(80);
    expect(t.highlights.length).toBeGreaterThanOrEqual(3);
    expect(t.region).toBeTruthy();
    expect(t.days).toBeTruthy();
    expect(t.season).toBeTruthy();
  });

  it.each(TREKS.map((t) => [t.slug, t] as const))('%s: altitude label matches the figure', (_s, t) => {
    if (t.altitude === null) return;
    const digits = t.altitudeLabel.replace(/[^0-9]/g, '');
    expect(digits, `${t.slug} label "${t.altitudeLabel}" vs ${t.altitude}`).toBe(String(t.altitude));
  });

  it.each(TREKS.map((t) => [t.slug, t] as const))('%s: photo indices are in range', (_s, t) => {
    t.photos.forEach((i) => {
      expect(i, `${t.slug} photo index ${i}`).toBeGreaterThanOrEqual(1);
      expect(i, `${t.slug} photo index ${i}`).toBeLessThanOrEqual(GALLERY.length);
    });
  });

  it.each(TREKS.map((t) => [t.slug, t] as const))('%s: stage altitudes are plausible', (_s, t) => {
    t.stages.forEach((st) => {
      expect(st.name).toBeTruthy();
      expect(st.note.length).toBeGreaterThan(5);
      if (st.ft !== undefined) {
        expect(st.ft).toBeGreaterThan(1000);
        expect(st.ft).toBeLessThan(20000);
      }
    });
  });

  it('never advertises a price — none has been confirmed', () => {
    const blob = JSON.stringify(TREKS);
    expect(blob).not.toMatch(/₹/);
    expect(blob).not.toMatch(/\bINR\b/);
    expect(blob).not.toMatch(/\brs\.?\s*\d/i);
  });

  it('featured routes all resolve', () => {
    expect(FEATURED.length).toBeGreaterThan(0);
    FEATURED.forEach((t) => expect(getTrek(t.slug)).toBeDefined());
  });

  it('getTrek returns undefined for an unknown slug', () => {
    expect(getTrek('not-a-real-trek')).toBeUndefined();
  });
});

describe('media', () => {
  it('every gallery image exists at both sizes', () => {
    GALLERY.forEach((g) => {
      expect(onDisk(g.sm), `missing ${g.sm}`).toBe(true);
      expect(onDisk(g.lg), `missing ${g.lg}`).toBe(true);
    });
  });

  it('knows the dimensions of every gallery image', () => {
    GALLERY.forEach((g) => {
      const { w, h } = imageSize(g.sm);
      expect(w).toBeGreaterThan(0);
      expect(h).toBeGreaterThan(0);
    });
  });

  it('instagram posts link to the real account and exist on disk', () => {
    expect(INSTAGRAM.length).toBeGreaterThan(0);
    INSTAGRAM.forEach((p) => {
      expect(onDisk(p.image), `missing ${p.image}`).toBe(true);
      expect(p.href).toMatch(
        new RegExp(`^https://www\\.instagram\\.com/${SITE.instagram}/(p|reel)/`),
      );
    });
  });

  it('category images exist', () => {
    CATEGORIES.forEach((c) => expect(onDisk(c.image), `missing ${c.image}`).toBe(true));
  });
});

describe('reviews', () => {
  it('are all within the published rating range', () => {
    REVIEWS.forEach((r) => {
      expect(r.stars).toBeGreaterThanOrEqual(1);
      expect(r.stars).toBeLessThanOrEqual(5);
      expect(r.name).toBeTruthy();
      expect(r.text.length).toBeGreaterThan(20);
    });
  });

  it('match the named routes where a reviewer named one', () => {
    const sandakphu = reviewsForTrek(getTrek('sandakphu')!.reviewMatch);
    expect(sandakphu.isSpecific).toBe(true);
    expect(sandakphu.reviews.length).toBeGreaterThan(0);
  });

  it('falls back to general reviews, and says so, when none name the route', () => {
    const bali = reviewsForTrek(getTrek('bali-pass')!.reviewMatch);
    expect(bali.isSpecific).toBe(false);
    expect(bali.reviews.length).toBeGreaterThan(0);
  });
});

describe('site', () => {
  it('builds a WhatsApp link with the message encoded', () => {
    const link = whatsappLink('Hello there & welcome');
    expect(link).toBe(`https://wa.me/${SITE.whatsapp}?text=Hello%20there%20%26%20welcome`);
  });

  it('has phone numbers in E.164', () => {
    SITE.phones.forEach((p) => expect(p.e164).toMatch(/^\+91\d{10}$/));
  });

  it('agrees with the published rating and review count', () => {
    expect(SITE.rating).toBe(5);
    expect(SITE.reviewCount).toBe(105);
  });
});

describe('supporting content', () => {
  it('has six pillars with unique numbers', () => {
    expect(PILLARS).toHaveLength(6);
    expect(new Set(PILLARS.map((p) => p.n)).size).toBe(6);
  });

  it('has a team', () => {
    expect(TEAM.length).toBeGreaterThan(0);
    TEAM.forEach((m) => expect(m.role).toBeTruthy());
  });

  it('exposes exactly one live category', () => {
    expect(CATEGORIES.filter((c) => c.live)).toHaveLength(1);
  });

  it('records a source for every FAQ answer', () => {
    expect(FAQS.length).toBeGreaterThan(0);
    FAQS.forEach((f) => {
      expect(f.q.endsWith('?'), `"${f.q}" should be a question`).toBe(true);
      expect(f.a.length).toBeGreaterThan(60);
      expect(f.source, `"${f.q}" has no source`).toBeTruthy();
    });
  });
});
