import type { Review } from '@/types';

/**
 * Verbatim excerpts from Wild Yogi's public Google reviews (5.0 stars from 105
 * reviews). Long reviews are cut at a sentence boundary and marked `trimmed`.
 * No wording has been altered.
 */
export const REVIEWS: Review[] = [
  {
    "name": "Rohit Amborkar",
    "when": "7 months ago",
    "stars": 5,
    "trimmed": true,
    "text": "My first-ever trekking experience 11930ft couldn’t have been more perfect, and choosing the Wild Yogi Adventures for the Sandakphu–Phalut Trek was truly the best decision I made."
  },
  {
    "name": "Duke",
    "when": "10 months ago",
    "stars": 5,
    "trimmed": true,
    "text": "This entire \"it is a trek, not a trip\" is lucid. Friend started this company after doing lots of treks throughout India himself, so when I asked about a trek, he asked me to come with him to Sandakphu."
  },
  {
    "name": "Prajukta Chatterjee",
    "when": "2 months ago",
    "stars": 5,
    "trimmed": true,
    "text": "As a first-time solo traveler in the North Bengal hills, I felt safe, supported, and well-guided throughout."
  },
  {
    "name": "Susmita Sarkar",
    "when": "2 months ago",
    "stars": 5,
    "trimmed": true,
    "text": "Being my first trek, I didn’t really know what to expect when I started. But the trek leader of Wild yogi Abhrajit was fully professional and responsible, also very warm, informative, caring and pleasant."
  },
  {
    "name": "Debargha Pal",
    "when": "4 months ago",
    "stars": 5,
    "trimmed": false,
    "text": "I was unfortunate not to complete the trek due to altitude sickness but the trek leader and guide descended me to safety. Overall highly recommend."
  },
  {
    "name": "Koustav Chandra",
    "when": "6 months ago",
    "stars": 5,
    "trimmed": false,
    "text": "The homestays we stayed at were the best of the locations. The foods were tasty, homely and healthy. Go for it and bring back a little bit of mountain with you."
  },
  {
    "name": "Prarthana Roy",
    "when": "2 months ago",
    "stars": 5,
    "trimmed": true,
    "text": "I completed my first trekking trip valley of flowers with wild yogi adventures. As a solo female I must say it’s very good and comfortable journey with them."
  },
  {
    "name": "ALEMARA KHATUN",
    "when": "5 months ago",
    "stars": 5,
    "trimmed": true,
    "text": "Route selection was brilliantly planned by Mr. Abhrajit which made the trek smooth and enjoyable even in tough sections."
  },
  {
    "name": "Faruk Sk",
    "when": "5 months ago",
    "stars": 5,
    "trimmed": true,
    "text": "Earlier, we had completed the Valley of Flowers trek through a trek agency, so this time we initially planned to organize everything on our own. However, after doing our research we went with Wild Yogi."
  },
  {
    "name": "Ritwik Das",
    "when": "5 months ago",
    "stars": 5,
    "trimmed": false,
    "text": "The trek leader was superb and supportive. He told us stories, motivated us to complete the trek and guess what — we did it!"
  },
  {
    "name": "Abhinaba Das",
    "when": "11 months ago",
    "stars": 5,
    "trimmed": true,
    "text": "The trek was well-organized with great food, comfortable spaces, and overall good facilities. Avrajit, our Trek Leader is super friendly."
  },
  {
    "name": "Wasim Raja",
    "when": "9 months ago",
    "stars": 5,
    "trimmed": false,
    "text": "As my first trek, it feels like a huge milestone for me. Our trek leader, Avro da, was really good — very knowledgeable and well aware of the trail. I also loved the experience with our local Nepali trek guide."
  },
  {
    "name": "Harshada Patil",
    "when": "4 months ago",
    "stars": 5,
    "trimmed": true,
    "text": "I did the Sandakphu-Phalut trek with Wild Yogi Adventures from 9 to 15 May, and it was an amazing experience."
  },
  {
    "name": "SRIJAN NEOGI",
    "when": "a year ago",
    "stars": 5,
    "trimmed": true,
    "text": "Great trekking organisation to go with! Competitive pricing, great mountaineers turned trek leaders and great experience backing them up!"
  },
  {
    "name": "Sandhyarani Kodag",
    "when": "4 months ago",
    "stars": 5,
    "trimmed": true,
    "text": "Well management, perfect stays, awesome food, very kind and helpful trained team members as guide. Overall it’s a best team to join on mountain trails."
  },
  {
    "name": "Anindita Saha",
    "when": "3 months ago",
    "stars": 5,
    "trimmed": true,
    "text": "My first trek ever and it was incredible. As a beginner I was nervous but Tika daa and Avrajit made it smooth."
  },
  {
    "name": "Soptorshi Bhattacharjee",
    "when": "a month ago",
    "stars": 5,
    "trimmed": false,
    "text": "The trip was engaging and fun! The trek leader shared various insights along the way. They also catered for the elderly."
  },
  {
    "name": "Piyasha Baidya",
    "when": "4 weeks ago",
    "stars": 5,
    "trimmed": true,
    "text": "The team was friendly, supportive, and very well-organized. Everything was managed smoothly from start to finish."
  },
  {
    "name": "Kingshuk Manna",
    "when": "5 months ago",
    "stars": 5,
    "trimmed": true,
    "text": "I recently had the most incredible experience trekking with Wild Yogi Adventures, and I genuinely cannot recommend them enough!"
  },
  {
    "name": "Abhisek Roy",
    "when": "8 months ago",
    "stars": 5,
    "trimmed": false,
    "text": "It’s my 4th trek, but it’s the best experience with this company. The trek leaders are skilled, polite, friendly — and the food, arrangement and overall everything is beyond my expectation."
  }
];

/**
 * Reviews that name a given route. Only Sandakphu and Valley of Flowers are
 * named by reviewers in this set; callers should fall back to general reviews
 * and say so rather than implying the review was about that route.
 */
export function reviewsForTrek(match: string[], limit = 3) {
  const words = match.map((w) => w.toLowerCase());
  const specific = REVIEWS.filter((r) =>
    words.some((w) => r.text.toLowerCase().includes(w)),
  );
  return {
    reviews: (specific.length ? specific : REVIEWS).slice(0, limit),
    isSpecific: specific.length > 0,
  };
}
