/**
 * Business facts.
 *
 * Every value here is sourced from Wild Yogi's own public Google Business
 * listing, the expedition banners visible in their photographs, or their
 * public reviews. Nothing is invented. See poc/README.md for the full
 * provenance table.
 */
export const SITE = {
  name: 'Wild Yogi Adventures',
  /** Printed on their own expedition banners. */
  tagline: 'Wander the wild, Awaken the yogi within.',
  /** The line the client chose for the approved design. */
  heroTagline: 'Walk into the wild. Return to yourself.',
  established: 2024,
  rating: 5.0,
  reviewCount: 105,
  category: 'Tour operator',
  address: {
    street: 'B2-7/New Sarkar Para Road, LP-62/3, Shyampur',
    locality: 'Maheshtala, Kolkata',
    region: 'West Bengal',
    postalCode: '700137',
    country: 'IN',
    full: 'B2-7/New Sarkar Para Road, LP-62/3, Shyampur, Maheshtala, Kolkata, West Bengal 700137',
  },
  phones: [
    { e164: '+916290248082', display: '62902 48082' },
    { e164: '+918981991997', display: '89819 91997' },
    { e164: '+918274960430', display: '82749 60430' },
  ],
  whatsapp: '918274960430',
  instagram: 'wildyogiadventures',
  mapsUrl: 'https://maps.app.goo.gl/qNzCMdNEMS4wuCFGA',
  reviewsUrl:
    'https://search.google.com/local/reviews?placeid=ChIJz3JwA8d9AjoR2ydOO4EiIIQ',
  coords: { lat: 22.488331, lng: 88.199396 },
} as const;

/**
 * Canonical origin. Set NEXT_PUBLIC_SITE_URL in the environment for
 * production; the fallback is only so local builds produce valid absolute
 * URLs for metadata and the sitemap.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'http://localhost:3001';

/** Builds a wa.me link with a prefilled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_HELLO =
  'Hi Wild Yogi Adventures! I found you online and I would like to know about your upcoming trips.';
