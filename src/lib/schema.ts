import type { Trek } from '@/types';
import { FAQS } from '@/content/faq';
import { REVIEWS } from '@/content/reviews';
import { SITE, SITE_URL } from '@/content/site';
import { TREKS } from '@/content/treks';

/**
 * Structured data.
 *
 * This matters more than usual here: the company is a local business whose
 * customers find them by searching for named treks. The aggregate rating and
 * the per-trek entries are what let Google show the 5.0 and the route details
 * in results.
 *
 * Only facts that are actually published are emitted. There is no `offers`
 * block anywhere, because no price has been confirmed — inventing one would
 * put a wrong number in a search result.
 */

const LOGO = `${SITE_URL}/img/brand/logo.png`;
const ORG_ID = `${SITE_URL}/#organisation`;

export function organisationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TravelAgency'],
    '@id': ORG_ID,
    name: SITE.name,
    description:
      'Himalayan trekking and adventure travel company running treks, yatras, road trips and camping out of Kolkata.',
    slogan: SITE.tagline,
    url: SITE_URL,
    logo: LOGO,
    image: `${SITE_URL}/img/og.jpg`,
    foundingDate: String(SITE.established),
    telephone: SITE.phones.map((p) => p.e164),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.coords.lat,
      longitude: SITE.coords.lng,
    },
    hasMap: SITE.mapsUrl,
    sameAs: [
      `https://www.instagram.com/${SITE.instagram}/`,
      SITE.mapsUrl,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: REVIEWS.slice(0, 5).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.stars, bestRating: 5 },
      reviewBody: r.text,
    })),
    makesOffer: TREKS.map((t) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'TouristTrip',
        name: t.name,
        url: `${SITE_URL}/treks/${t.slug}`,
      },
    })),
  };
}

export function trekSchema(trek: Trek) {
  const itinerary = trek.stages.map((s, i) => ({
    '@type': 'TouristDestination',
    position: i + 1,
    name: s.name,
    description: s.note,
    ...(s.ft
      ? { additionalProperty: { '@type': 'PropertyValue', name: 'Altitude', value: `${s.ft} ft` } }
      : {}),
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${SITE_URL}/treks/${trek.slug}#trip`,
    name: trek.name,
    description: trek.long,
    url: `${SITE_URL}/treks/${trek.slug}`,
    image: `${SITE_URL}${trek.image}`,
    touristType: trek.grade,
    provider: { '@id': ORG_ID },
    ...(itinerary.length ? { itinerary: { '@type': 'ItemList', itemListElement: itinerary } } : {}),
    ...(trek.altitude
      ? {
          additionalProperty: {
            '@type': 'PropertyValue',
            name: 'Maximum altitude',
            value: `${trek.altitude} ft`,
          },
        }
      : {}),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

/**
 * FAQPage.
 *
 * Worth being clear-eyed about this: since 2023 Google has limited FAQ rich
 * results to well-known government and health sites, so this will almost
 * certainly NOT produce the expandable Q&A in search results. It is here
 * because the questions themselves match real searches and the markup costs
 * nothing — not because it will win a rich snippet.
 */
export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
