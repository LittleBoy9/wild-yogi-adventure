import { describe, expect, it } from 'vitest';
import { SITE } from '@/content/site';
import { TREKS, getTrek } from '@/content/treks';
import { breadcrumbSchema, faqSchema, organisationSchema, trekSchema } from '@/lib/schema';

describe('structured data', () => {
  it('describes the business with its real rating', () => {
    const s = organisationSchema() as unknown as {
      '@type': string[];
      aggregateRating: { ratingValue: number; reviewCount: number };
      makesOffer: unknown[];
    };
    expect(s['@type']).toContain('LocalBusiness');
    expect(s.aggregateRating.ratingValue).toBe(SITE.rating);
    expect(s.aggregateRating.reviewCount).toBe(SITE.reviewCount);
    expect(s.makesOffer).toHaveLength(TREKS.length);
  });

  it.each(TREKS.map((t) => [t.slug, t] as const))('%s: is a TouristTrip', (_s, t) => {
    const s = trekSchema(t) as Record<string, unknown>;
    expect(s['@type']).toBe('TouristTrip');
    expect(s.name).toBe(t.name);
    expect(String(s.url)).toContain(`/treks/${t.slug}`);
  });

  /**
   * The important one. No price is confirmed, so no schema may imply one —
   * a wrong number in a search result is worse than no number.
   */
  it.each(TREKS.map((t) => [t.slug, t] as const))('%s: offers no price', (_s, t) => {
    const s = trekSchema(t) as Record<string, unknown>;
    expect(s.offers).toBeUndefined();
    expect(JSON.stringify(s)).not.toMatch(/"price"|priceCurrency|₹/);
  });

  it('builds breadcrumbs in order with absolute URLs', () => {
    const s = breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Journeys', path: '/treks' },
    ]) as { itemListElement: { position: number; item: string }[] };
    expect(s.itemListElement.map((i) => i.position)).toEqual([1, 2]);
    s.itemListElement.forEach((i) => expect(i.item).toMatch(/^https?:\/\//));
  });

  it('turns a route with stages into an itinerary', () => {
    const s = trekSchema(getTrek('sandakphu')!) as {
      itinerary: { itemListElement: unknown[] };
    };
    expect(s.itinerary.itemListElement.length).toBe(getTrek('sandakphu')!.stages.length);
  });

  it('emits every FAQ as a Question', () => {
    const s = faqSchema() as { mainEntity: { '@type': string }[] };
    expect(s.mainEntity.length).toBeGreaterThan(0);
    s.mainEntity.forEach((q) => expect(q['@type']).toBe('Question'));
  });

  it('serialises to valid JSON', () => {
    expect(() => JSON.parse(JSON.stringify(organisationSchema()))).not.toThrow();
    TREKS.forEach((t) => expect(() => JSON.parse(JSON.stringify(trekSchema(t)))).not.toThrow());
  });
});
