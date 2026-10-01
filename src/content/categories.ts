import type { Category } from '@/types';

/**
 * The five categories Wild Yogi position around, taken from the client's own
 * brief. Only Treks has verified content behind it; the rest are honest
 * enquiry cards rather than invented itineraries.
 */
export const CATEGORIES: Category[] = [
  {
    "n": "01",
    "slug": "treks",
    "name": "Treks",
    "blurb": "Himalayan trails, high passes and summit adventures.",
    "meta": "8 routes · 7,545 to 16,200 ft",
    "image": "/img/gallery/g02.webp",
    "live": true
  },
  {
    "n": "02",
    "slug": "yatra",
    "name": "Yatra",
    "blurb": "Journey inward through India’s sacred mountains.",
    "meta": "Kedarnath and more",
    "image": "/img/gallery/g07.webp",
    "live": false
  },
  {
    "n": "03",
    "slug": "road-trips",
    "name": "Road Trips",
    "blurb": "Long drives through high country, at your own pace.",
    "meta": "Ask for routes",
    "image": "/img/gallery/g44.webp",
    "live": false
  },
  {
    "n": "04",
    "slug": "camping",
    "name": "Camping",
    "blurb": "Nights under the stars, well above the treeline.",
    "meta": "Ask for dates",
    "image": "/img/gallery/g08.webp",
    "live": false
  },
  {
    "n": "05",
    "slug": "activities",
    "name": "Adventure Activities",
    "blurb": "Snow craft, rope work and the skills that get you higher.",
    "meta": "Ask what’s running",
    "image": "/img/gallery/g29.webp",
    "live": false
  }
];
