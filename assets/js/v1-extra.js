/* ==========================================================================
   index_v1 — additional content
   Loads AFTER assets/js/data.js, which stays UNMODIFIED and remains the single
   source of truth for the verified facts (altitudes, reviews, phones, treks).
   Nothing here overwrites those; it only adds the material the drill-in
   detail view needs. index.html never loads this file.
   ========================================================================== */

WY.v1 = {};

/* --- Hero copy -------------------------------------------------------------
   Taken from the client's own mockup, which is the direction they asked for.
   Their printed banner tagline ("Wander the wild, Awaken the yogi within")
   is kept in the brand lockup and the footer so both are present.
   -------------------------------------------------------------------------- */
WY.v1.copy = {
  eyebrow:  'Trek · Travel · Transform',
  titleA:   'Walk into the wild.',
  titleB:   'Return to yourself.',
  sub:      'Treks, yatras, road trips, camping and raw outdoor adventures, run out of Kolkata by people who have walked these trails themselves.',
  ctaA:     'Explore adventures',
  ctaB:     'Talk to a trip expert',
  scroll:   'Scroll to explore',
  catsKick: 'Choose your escape',
  catsHead: 'Five ways to get out there.',
  trekKick: 'The journeys',
  trekHead: 'Adventure starts with a destination.',
  trekSub:  'Every altitude below is the figure Wild Yogi prints on its own summit banners. Open any journey to see the route, the photos and what people said about it.'
};

/* --- The five categories the client positions around ------------------------
   Only Treks has real, verified depth. The other four are presented honestly
   as enquiry cards rather than invented itineraries. See README_V1.md.
   -------------------------------------------------------------------------- */
WY.v1.categories = [
  { n: '01', id: 'treks', name: 'Treks', live: true,
    blurb: 'Himalayan trails, high passes and summit adventures.',
    img: 'assets/img/gallery/g02.webp',
    meta: '8 routes · 7,545 to 16,200 ft' },
  { n: '02', id: 'yatra', name: 'Yatra', live: false,
    blurb: 'Journey inward through India’s sacred mountains.',
    img: 'assets/img/gallery/g07.webp',
    meta: 'Kedarnath and more' },
  { n: '03', id: 'road-trips', name: 'Road Trips', live: false,
    blurb: 'Long drives through high country, at your own pace.',
    img: 'assets/img/gallery/g44.webp',
    meta: 'Ask for routes' },
  { n: '04', id: 'camping', name: 'Camping', live: false,
    blurb: 'Nights under the stars, well above the treeline.',
    img: 'assets/img/gallery/g08.webp',
    meta: 'Ask for dates' },
  { n: '05', id: 'activities', name: 'Adventure Activities', live: false,
    blurb: 'Snow craft, rope work and the skills that get you higher.',
    img: 'assets/img/gallery/g29.webp',
    meta: 'Ask what’s running' }
];

/* --- Which treks lead the page --------------------------------------------- */
WY.v1.featured = ['sandakphu', 'valley-of-flowers', 'tunganath', 'rupin-pass', 'bali-pass'];

/* --- Per-trek detail --------------------------------------------------------
   `stages` describe the route geographically. They are deliberately NOT
   labelled Day 1 / Day 2, because Wild Yogi has not published a day split for
   most of these and inventing one would put wrong information in front of a
   customer.

   `photos` are indices into WY.gallery. They are weighted to each trek's
   region but are presented on the page as "from Wild Yogi's albums", not as
   verified photographs of that specific route.
   -------------------------------------------------------------------------- */
WY.v1.detail = {
  'sandakphu': {
    long: 'The Singalila ridge is the only place in India where you can stand in one spot and see four of the five highest mountains on earth at once — Everest, Kanchenjunga, Lhotse and Makalu, strung across the skyline at dawn. The walk gets you there through village homestays rather than tents, which is why it works so well as a first trek: you sleep warm, you eat home-cooked food, and the altitude comes on slowly enough to handle. In spring the lower forest is solid rhododendron.',
    best: 'Clear skies in October and November. Rhododendron bloom in April and May.',
    fitness: 'You should be able to walk 5–6 hours a day on uneven ground. No technical skill needed.',
    stages: [
      { name: 'Srikhola', ft: 6900,  note: 'The trailhead. A river, a bridge and the last proper shop you will see.' },
      { name: 'Rammam',   ft: 8300,  note: 'The first real climb, all of it through forest.' },
      { name: 'Samanden', ft: 7350,  note: 'A hidden village that no road reaches. Most trekkers have never heard of it.' },
      { name: 'Sabargram',ft: 11600, note: 'Out of the trees and onto the ridge. The air starts to feel thin here.' },
      { name: 'Phalut',   ft: 11811, note: 'Kanchenjunga close enough that it stops looking like a view.' },
      { name: 'Aal',      ft: 11570, note: 'The long traverse along the ridgeline.' },
      { name: 'Sandakphu',ft: 11930, note: 'The highest point in West Bengal, and the reason everyone comes.' },
      { name: 'Gurdum',   ft: 7550,  note: 'Drop back down into the trees and warm air.' }
    ],
    photos: [2, 4, 16, 32, 40, 21, 13, 17, 25, 29, 5, 3, 1, 12, 20, 36]
  },
  'valley-of-flowers': {
    long: 'A hanging valley above the Pushpawati that is under snow for most of the year and then, for about ten weeks in the monsoon, turns into several hundred species of alpine flower at once. It is a UNESCO World Heritage site and it is genuinely as strange as it sounds. Wild Yogi pair it with the climb to Hemkund Sahib at 14,200 ft, a glacial lake and gurudwara, so you get the flowers and the high cold in the same trip.',
    best: 'July to early September. Outside that window the valley is not in bloom.',
    fitness: 'Moderate. The Hemkund day is a steep, sustained climb.',
    stages: [
      { name: 'Rishikesh',         note: 'Where the trip starts and ends.' },
      { name: 'Govindghat',        note: 'Road head. The walking begins here.' },
      { name: 'Ghangaria',         note: 'The base village for both the valley and Hemkund.' },
      { name: 'Valley of Flowers', note: 'The valley itself, in full monsoon bloom.' },
      { name: 'Hemkund Sahib', ft: 14200, note: 'Glacial lake and gurudwara. The highest point of the trip.' }
    ],
    photos: [6, 14, 30, 34, 38, 10]
  },
  'tunganath': {
    long: 'Short, generous and almost absurdly scenic. You camp beside Deoria Tal with the Chaukhamba massif reflected in it, walk up past Tunganath — the highest Shiva temple in the world — and carry on to the summit of Chandrasila, where the horizon opens out across most of the Garhwal Himalaya. It asks less of you than the other routes and gives back nearly as much, which makes it the other trek we send first-timers on.',
    best: 'April to June for clear meadows, September to November for the sharpest views.',
    fitness: 'Beginner friendly. Short walking days.',
    stages: [
      { name: 'Sari',        note: 'The road head village.' },
      { name: 'Deoria Tal',  note: 'The lake, with Chaukhamba in the reflection at dawn.' },
      { name: 'Chopta',      note: 'Meadow country, often called the mini Switzerland of Garhwal.' },
      { name: 'Tunganath',   note: 'The highest Shiva temple in the world.' },
      { name: 'Chandrasila', ft: 12110, note: 'The summit. A 360 degree view of the Garhwal range.' }
    ],
    photos: [9, 24, 28, 36]
  },
  'rupin-pass': {
    long: 'A crossing rather than a there-and-back, and the trail changes character almost every day you are on it. Hanging villages built into the hillside, snow bridges over the river, the Rupin waterfall which you climb alongside rather than just look at, and then a gully of snow onto the pass itself before you drop down the far side into Himachal. It is the most varied route Wild Yogi run.',
    best: 'May to June for snow on the pass, September to October for clear weather.',
    fitness: 'Moderate to challenging. Long days and a steep, exposed pass day.',
    stages: [
      { name: 'Dhaula',          note: 'Trailhead in Uttarakhand.' },
      { name: 'Sewa',            note: 'The first of the old hillside villages.' },
      { name: 'Jiskun',          note: 'Deep in the Rupin gorge.' },
      { name: 'Jhaka',           note: 'The hanging village, built onto the cliff.' },
      { name: 'Dhanderas Thach', note: 'Meadow below the tiered Rupin waterfall.' },
      { name: 'Rupin Pass', ft: 15350, note: 'The snow gully and the crossing itself.' },
      { name: 'Sangla',          note: 'Down the far side, into Himachal.' }
    ],
    photos: [44, 48, 36, 33]
  },
  'bali-pass': {
    long: 'The hardest thing Wild Yogi run, and they are straightforward about that. You start in the meadows of Har Ki Dun, work up past Ruinsara Tal with Swargarohini standing over you the whole way, and then take on a genuine high pass — rope, harness, an alpine start and a long technical descent on the other side that finishes at Yamunotri. This is for people who have already done two or three of the other routes.',
    best: 'May to June, or September to October.',
    fitness: 'Challenging. Previous high-altitude trekking experience expected.',
    stages: [
      { name: 'Sankri',       note: 'The road head for the whole Govind National Park area.' },
      { name: 'Seema',        note: 'Into the Har Ki Dun valley.' },
      { name: 'Ruinsara Tal', note: 'The lake, with Swargarohini directly overhead.' },
      { name: 'Odari',        note: 'High camp below the pass.' },
      { name: 'Bali Pass', ft: 16200, note: 'Summit day. Rope and harness, and an early start.' },
      { name: 'Yamunotri',    note: 'The long descent out, finishing at the temple.' }
    ],
    photos: [33, 37, 36, 20]
  },
  'har-ki-dun': {
    long: 'Called the valley of gods, and one of the oldest trodden trails in the Himalaya. A wide glacial valley walled in by Swargarohini, reached through villages that have kept their own wooden architecture and their own local deities for centuries. Wild Yogi pair it with the quiet lake at Marinda Tal. It runs almost all year, which makes it unusual among these routes.',
    best: 'Runs nearly year round. March to June and September to December are best.',
    fitness: 'Moderate. Steady walking, no technical sections.',
    stages: [
      { name: 'Sankri',      note: 'Road head, and the last town.' },
      { name: 'Taluka',      note: 'Where the walking starts properly.' },
      { name: 'Osla',        note: 'An old village with its own temple and architecture.' },
      { name: 'Har Ki Dun',  ft: 13025, note: 'The valley head, under Swargarohini.' },
      { name: 'Marinda Tal', note: 'The lake above the valley.' }
    ],
    photos: [48, 43, 36, 20]
  },
  'hampta-pass': {
    long: 'One of the most abrupt landscape changes you can walk through in a single day. The Kullu side is pine forest, flower meadows and a river; you cross the pass, and the other side is the bare brown moonscape of Lahaul with almost nothing growing on it. Wild Yogi finish the trip at Chandra Tal, the crescent lake, which is about as blue as water gets.',
    best: 'June to September, once the pass is open.',
    fitness: 'Moderate. One long pass day with a steep descent.',
    stages: [
      { name: 'Manali',         note: 'Where the trip starts.' },
      { name: 'Jobra',          note: 'Road head above Manali.' },
      { name: 'Chika',          note: 'Meadow camp beside the river.' },
      { name: 'Balu Ka Ghera',  note: 'High camp below the pass.' },
      { name: 'Hampta Pass', ft: 14100, note: 'The crossing. Green behind you, desert in front.' },
      { name: 'Chatru',         note: 'Down into the Lahaul valley.' },
      { name: 'Chandra Tal',    note: 'The crescent lake, and the end of the trip.' }
    ],
    photos: [46, 36, 20, 24]
  },
  'yeti-stone': {
    long: 'Short, green, low and genuinely easy — the trip Wild Yogi send people on when they want to find out whether trekking is for them before committing to a week at altitude. Dense moss forest, prayer-flag bridges over the river, and the Yeti Stone itself. You are picked up and dropped back at NJP, so it works as a long weekend out of Kolkata.',
    best: 'Runs all year.',
    fitness: 'Easy. Suitable for families and complete beginners.',
    stages: [
      { name: 'NJP',             note: 'Picked up at the railhead.' },
      { name: 'Forest trail',    note: 'Moss forest, river and prayer-flag bridges.' },
      { name: 'Yeti Stone', ft: 7545, note: 'The stone itself, and the legend attached to it.' },
      { name: 'NJP',             note: 'Dropped back at the railhead.' }
    ],
    photos: [7, 15, 19, 27, 31, 39, 23, 35]
  }
};

/* --- Which reviews name which trek -----------------------------------------
   Only Sandakphu and Valley of Flowers are named by reviewers in the curated
   set. Everything else falls back to general reviews, labelled as such.
   -------------------------------------------------------------------------- */
WY.v1.reviewMatch = {
  'sandakphu':         ['Sandakphu', 'Phalut', 'Singalila', '11930'],
  'valley-of-flowers': ['valley of flowers'],
  'tunganath':         ['Tungnath', 'Tunganath', 'Chandrashila', 'Chandrasila'],
  'rupin-pass':        ['Rupin'],
  'bali-pass':         ['Bali Pass'],
  'har-ki-dun':        ['Har Ki Dun'],
  'hampta-pass':       ['Hampta'],
  'yeti-stone':        ['Yeti', 'Samanden']
};
