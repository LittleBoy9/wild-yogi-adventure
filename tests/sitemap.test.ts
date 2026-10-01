import { describe, expect, it } from 'vitest';
import sitemap from '@/app/sitemap';
import robots from '@/app/robots';
import { TREKS } from '@/content/treks';

describe('sitemap', () => {
  const entries = sitemap();
  const urls = entries.map((e) => String(e.url));

  /** Guards the whole reason for the rebuild: a new trek must not be unlisted. */
  it('lists every trek', () => {
    TREKS.forEach((t) => {
      expect(urls.some((u) => u.endsWith(`/treks/${t.slug}`)), `${t.slug} missing`).toBe(true);
    });
  });

  it('lists the home and index pages too', () => {
    expect(entries.length).toBe(TREKS.length + 2);
  });

  it('has no duplicates and only absolute URLs', () => {
    expect(new Set(urls).size).toBe(urls.length);
    urls.forEach((u) => expect(u).toMatch(/^https?:\/\//));
  });
});

describe('robots', () => {
  it('allows crawling and points at the sitemap', () => {
    const r = robots();
    expect(r.rules).toMatchObject({ userAgent: '*', allow: '/' });
    expect(String(r.sitemap)).toMatch(/\/sitemap\.xml$/);
  });
});
