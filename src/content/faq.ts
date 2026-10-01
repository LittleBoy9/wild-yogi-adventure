import type { FaqItem } from '@/types';

/**
 * Questions people actually search for, answered only from things Wild Yogi
 * have published or that their reviewers said.
 *
 * `source` is not displayed — it exists so anyone editing this file can see
 * where an answer came from and does not quietly replace it with a guess.
 * Nothing here invents a price, a date or an itinerary.
 */
export const FAQS: FaqItem[] = [
  {
    q: 'Do I need trekking experience to join?',
    a: 'For most of the routes, no. The phrase "my first trek" appears over and over in the reviews, and those trekkers finished. Sandakphu–Phalut and Tunganath–Chandrasila are both graded for beginners. Bali Pass is the exception — it needs a real summit day with rope and harness, and previous high-altitude experience.',
    source: 'Reviews; grading from the trek list.',
  },
  {
    q: 'What happens if I cannot finish?',
    a: 'You come down safely, and that is treated as a normal outcome rather than a failure. One trekker got altitude sickness on Sandakphu and did not summit; the leader and guide walked him down. He still left a five-star review and recommended them. That is the honest answer on how turning back is handled.',
    source: 'Debargha Pal review.',
  },
  {
    q: 'Where do you stay on the trek?',
    a: 'Village homestays rather than tourist hotels, chosen for where they are rather than what they cost, with home-cooked food. Reviewers describe the food as "tasty, homely and healthy" and the homestays as "the best of the locations". Some high-altitude routes camp where there is nothing to stay in.',
    source: 'Koustav Chandra and others.',
  },
  {
    q: 'Is it safe for solo female trekkers?',
    a: 'Two women who travelled solo wrote about it unprompted. One did the Valley of Flowers and called it "very good and comfortable"; another did Srikhola–Rammam–Samanden as a first-time solo traveller and said she felt "safe, supported, and well-guided" throughout.',
    source: 'Prarthana Roy and Prajukta Chatterjee reviews.',
  },
  {
    q: 'When is the best time for Sandakphu?',
    a: 'October to December for the clearest views of Kanchenjunga, and March to May if you want the rhododendron forest in bloom. Sandakphu is the highest point in West Bengal at 11,930 ft — the figure Wild Yogi print on their own summit banner.',
    source: 'Published season; altitude from their banner.',
  },
  {
    q: 'Which trek should I start with?',
    a: 'Sandakphu–Phalut if you want the Himalaya properly, since it is beginner-graded but still puts you on an 11,930 ft ridge. Tunganath–Chandrasila if you have fewer days. Yeti Stone Hike if you are not sure trekking is for you at all — it is easy, low, and runs from NJP to NJP in four days.',
    source: 'Gradings and durations from the trek list.',
  },
  {
    q: 'What does a trek cost, and how do I book?',
    a: 'Costs and departure dates are not published here, because they change and we would rather you got a current figure than an old one. Message Wild Yogi on WhatsApp with the route and roughly when you want to go, and they will send dates, cost and a kit list. There is no deposit to ask a question.',
    source: 'No price has been confirmed, so none is stated.',
  },
  {
    q: 'Where are you based?',
    a: 'Maheshtala in Kolkata, West Bengal. The company was started in 2024 by someone who had already walked most of these trails himself, and most groups leave from Kolkata or meet at NJP.',
    source: 'Google Business listing; Duke review; banner "est 2024".',
  },
  {
    q: 'How fit do I need to be?',
    a: 'For the beginner routes, enough to walk five to six hours a day on uneven ground, several days running. No technical skill is needed. The higher crossings — Rupin Pass, Bali Pass — ask for more, including long days and a steep pass day. If you are unsure, say so when you message: reviewers mention groups that catered for elderly trekkers.',
    source: 'Per-trek fitness notes; Soptorshi Bhattacharjee review.',
  },
];
