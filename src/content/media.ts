import type { GalleryImage, InstagramPost } from '@/types';
import sizes from './image-sizes.json';

/** 48 photographs from Wild Yogi's own Google listing. No stock. */
export const GALLERY: GalleryImage[] = [
  {
    "sm": "/img/gallery/g01.webp",
    "lg": "/img/gallery/g01-lg.webp"
  },
  {
    "sm": "/img/gallery/g02.webp",
    "lg": "/img/gallery/g02-lg.webp"
  },
  {
    "sm": "/img/gallery/g03.webp",
    "lg": "/img/gallery/g03-lg.webp"
  },
  {
    "sm": "/img/gallery/g04.webp",
    "lg": "/img/gallery/g04-lg.webp"
  },
  {
    "sm": "/img/gallery/g05.webp",
    "lg": "/img/gallery/g05-lg.webp"
  },
  {
    "sm": "/img/gallery/g06.webp",
    "lg": "/img/gallery/g06-lg.webp"
  },
  {
    "sm": "/img/gallery/g07.webp",
    "lg": "/img/gallery/g07-lg.webp"
  },
  {
    "sm": "/img/gallery/g08.webp",
    "lg": "/img/gallery/g08-lg.webp"
  },
  {
    "sm": "/img/gallery/g09.webp",
    "lg": "/img/gallery/g09-lg.webp"
  },
  {
    "sm": "/img/gallery/g10.webp",
    "lg": "/img/gallery/g10-lg.webp"
  },
  {
    "sm": "/img/gallery/g11.webp",
    "lg": "/img/gallery/g11-lg.webp"
  },
  {
    "sm": "/img/gallery/g12.webp",
    "lg": "/img/gallery/g12-lg.webp"
  },
  {
    "sm": "/img/gallery/g13.webp",
    "lg": "/img/gallery/g13-lg.webp"
  },
  {
    "sm": "/img/gallery/g14.webp",
    "lg": "/img/gallery/g14-lg.webp"
  },
  {
    "sm": "/img/gallery/g15.webp",
    "lg": "/img/gallery/g15-lg.webp"
  },
  {
    "sm": "/img/gallery/g16.webp",
    "lg": "/img/gallery/g16-lg.webp"
  },
  {
    "sm": "/img/gallery/g17.webp",
    "lg": "/img/gallery/g17-lg.webp"
  },
  {
    "sm": "/img/gallery/g18.webp",
    "lg": "/img/gallery/g18-lg.webp"
  },
  {
    "sm": "/img/gallery/g19.webp",
    "lg": "/img/gallery/g19-lg.webp"
  },
  {
    "sm": "/img/gallery/g20.webp",
    "lg": "/img/gallery/g20-lg.webp"
  },
  {
    "sm": "/img/gallery/g21.webp",
    "lg": "/img/gallery/g21-lg.webp"
  },
  {
    "sm": "/img/gallery/g22.webp",
    "lg": "/img/gallery/g22-lg.webp"
  },
  {
    "sm": "/img/gallery/g23.webp",
    "lg": "/img/gallery/g23-lg.webp"
  },
  {
    "sm": "/img/gallery/g24.webp",
    "lg": "/img/gallery/g24-lg.webp"
  },
  {
    "sm": "/img/gallery/g25.webp",
    "lg": "/img/gallery/g25-lg.webp"
  },
  {
    "sm": "/img/gallery/g26.webp",
    "lg": "/img/gallery/g26-lg.webp"
  },
  {
    "sm": "/img/gallery/g27.webp",
    "lg": "/img/gallery/g27-lg.webp"
  },
  {
    "sm": "/img/gallery/g28.webp",
    "lg": "/img/gallery/g28-lg.webp"
  },
  {
    "sm": "/img/gallery/g29.webp",
    "lg": "/img/gallery/g29-lg.webp"
  },
  {
    "sm": "/img/gallery/g30.webp",
    "lg": "/img/gallery/g30-lg.webp"
  },
  {
    "sm": "/img/gallery/g31.webp",
    "lg": "/img/gallery/g31-lg.webp"
  },
  {
    "sm": "/img/gallery/g32.webp",
    "lg": "/img/gallery/g32-lg.webp"
  },
  {
    "sm": "/img/gallery/g33.webp",
    "lg": "/img/gallery/g33-lg.webp"
  },
  {
    "sm": "/img/gallery/g34.webp",
    "lg": "/img/gallery/g34-lg.webp"
  },
  {
    "sm": "/img/gallery/g35.webp",
    "lg": "/img/gallery/g35-lg.webp"
  },
  {
    "sm": "/img/gallery/g36.webp",
    "lg": "/img/gallery/g36-lg.webp"
  },
  {
    "sm": "/img/gallery/g37.webp",
    "lg": "/img/gallery/g37-lg.webp"
  },
  {
    "sm": "/img/gallery/g38.webp",
    "lg": "/img/gallery/g38-lg.webp"
  },
  {
    "sm": "/img/gallery/g39.webp",
    "lg": "/img/gallery/g39-lg.webp"
  },
  {
    "sm": "/img/gallery/g40.webp",
    "lg": "/img/gallery/g40-lg.webp"
  },
  {
    "sm": "/img/gallery/g41.webp",
    "lg": "/img/gallery/g41-lg.webp"
  },
  {
    "sm": "/img/gallery/g42.webp",
    "lg": "/img/gallery/g42-lg.webp"
  },
  {
    "sm": "/img/gallery/g43.webp",
    "lg": "/img/gallery/g43-lg.webp"
  },
  {
    "sm": "/img/gallery/g44.webp",
    "lg": "/img/gallery/g44-lg.webp"
  },
  {
    "sm": "/img/gallery/g45.webp",
    "lg": "/img/gallery/g45-lg.webp"
  },
  {
    "sm": "/img/gallery/g46.webp",
    "lg": "/img/gallery/g46-lg.webp"
  },
  {
    "sm": "/img/gallery/g47.webp",
    "lg": "/img/gallery/g47-lg.webp"
  },
  {
    "sm": "/img/gallery/g48.webp",
    "lg": "/img/gallery/g48-lg.webp"
  }
];

/**
 * Their ten most recent real posts, captured 2026-09-20. Thumbnails are
 * self-hosted because Instagram's CDN URLs are signed and expire within days.
 * Each tile deep-links to the actual post.
 */
export const INSTAGRAM: InstagramPost[] = [
  {
    "image": "/img/insta/ig01.webp",
    "href": "https://www.instagram.com/wildyogiadventures/p/DTddU80jZrh/",
    "date": "January 13, 2026",
    "reel": false
  },
  {
    "image": "/img/insta/ig02.webp",
    "href": "https://www.instagram.com/wildyogiadventures/p/DUFedotCT7R/",
    "date": "January 28, 2026",
    "reel": false
  },
  {
    "image": "/img/insta/ig03.webp",
    "href": "https://www.instagram.com/wildyogiadventures/p/Ddb1OSDCbL7/",
    "date": "September 18, 2026",
    "reel": false
  },
  {
    "image": "/img/insta/ig04.webp",
    "href": "https://www.instagram.com/wildyogiadventures/p/DdZT5MGCVJZ/",
    "date": "September 17, 2026",
    "reel": false
  },
  {
    "image": "/img/insta/ig05.webp",
    "href": "https://www.instagram.com/wildyogiadventures/reel/DdJhOA4Dk2N/",
    "date": "September 11, 2026",
    "reel": true
  },
  {
    "image": "/img/insta/ig06.webp",
    "href": "https://www.instagram.com/wildyogiadventures/p/Dc98K-DiZXr/",
    "date": "September 06, 2026",
    "reel": false
  },
  {
    "image": "/img/insta/ig07.webp",
    "href": "https://www.instagram.com/wildyogiadventures/p/DcupmJbibN4/",
    "date": "August 31, 2026",
    "reel": false
  },
  {
    "image": "/img/insta/ig08.webp",
    "href": "https://www.instagram.com/wildyogiadventures/p/DcH8CTWifzO/",
    "date": "August 16, 2026",
    "reel": false
  },
  {
    "image": "/img/insta/ig09.webp",
    "href": "https://www.instagram.com/wildyogiadventures/p/DcEjP6HEyCz/",
    "date": "August 15, 2026",
    "reel": false
  },
  {
    "image": "/img/insta/ig10.webp",
    "href": "https://www.instagram.com/wildyogiadventures/p/Db6KedmE_Vs/",
    "date": "August 11, 2026",
    "reel": false
  }
];

type Size = { w: number; h: number };
const SIZES = sizes as Record<string, Size>;

/** Intrinsic dimensions, needed by next/image for files served from /public. */
export function imageSize(src: string): Size {
  return SIZES[src] ?? { w: 1600, h: 1200 };
}
