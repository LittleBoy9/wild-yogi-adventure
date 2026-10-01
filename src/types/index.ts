export type Grade =
  | 'Easy'
  | 'Beginner'
  | 'Moderate'
  | 'Easy–Moderate'
  | 'Moderate–Challenging'
  | 'Challenging';

/** A waypoint on a route. Deliberately a stage, not a numbered day — Wild Yogi
 *  have not published a day-by-day split for most of these routes. */
export interface Stage {
  name: string;
  /** Altitude in feet, where a figure is published. */
  ft?: number;
  note: string;
}

export interface Trek {
  slug: string;
  name: string;
  region: string;
  /** null where no altitude has been published for the route. */
  altitude: number | null;
  altitudeLabel: string;
  days: string;
  grade: Grade;
  season: string;
  image: string;
  flagship?: boolean;
  hook: string;
  blurb: string;
  long: string;
  bestTime: string;
  fitness: string;
  highlights: string[];
  stages: Stage[];
  /** Indices into GALLERY. Weighted to the trek's region, not verified per shot. */
  photos: number[];
  /** Words that identify a review as being about this route. */
  reviewMatch: string[];
}

export interface Review {
  name: string;
  when: string;
  stars: number;
  /** True where a long review was cut at a sentence boundary. Never reworded. */
  trimmed: boolean;
  text: string;
}

export interface Category {
  n: string;
  slug: string;
  name: string;
  blurb: string;
  meta: string;
  image: string;
  /** Only Treks has real, verified content behind it. */
  live: boolean;
}

export interface Pillar {
  n: string;
  title: string;
  body: string;
}

export interface GalleryImage {
  sm: string;
  lg: string;
}

export interface InstagramPost {
  image: string;
  href: string;
  date: string;
  reel: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  note: string;
}

export interface FaqItem {
  q: string;
  a: string;
  /** Where the answer came from. Not rendered — a guard against future guesswork. */
  source: string;
}
