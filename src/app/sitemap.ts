import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/site';
import { TREKS } from '@/content/treks';

/**
 * The reason this project exists: in the prototype all eight routes lived
 * behind a URL fragment, so search engines saw one page rather than eight.
 * Each trek now has a real, indexable URL.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/treks`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...TREKS.map((t) => ({
      url: `${SITE_URL}/treks/${t.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
