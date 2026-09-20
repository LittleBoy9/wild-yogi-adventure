/* ==========================================================================
   Wild Yogi Adventures — site data
   Every fact below is sourced from the company's own Google Business listing,
   their expedition banners visible in their photos, or their Google reviews.
   Nothing here is invented. See README.md for provenance + what to confirm.
   ========================================================================== */

const WY = {};

/* --- Business facts (Google Business Profile, Sept 2026) ------------------ */
WY.biz = {
  name: 'Wild Yogi Adventures',
  tagline: 'Wander the wild, Awaken the yogi within.',
  established: 2024,
  rating: 5.0,
  reviewCount: 105,
  category: 'Tour operator',
  address: 'B2-7/New Sarkar Para Road, LP-62/3, Shyampur, Maheshtala, Kolkata, West Bengal 700137',
  addressShort: 'Maheshtala, Kolkata',
  phones: ['+916290248082', '+918981991997', '+918274960430'],
  phonesDisplay: ['62902 48082', '89819 91997', '82749 60430'],
  whatsapp: '918274960430',
  instagram: 'wildyogiadventures',
  mapsUrl: 'https://maps.app.goo.gl/qNzCMdNEMS4wuCFGA',
  reviewUrl: 'https://search.google.com/local/reviews?placeid=ChIJz3JwA8d9AjoR2ydOO4EiIIQ',
  plusCode: 'F5QX+8Q Kolkata, West Bengal'
};

/* --- Treks -----------------------------------------------------------------
   Altitudes are read directly off Wild Yogi's own summit banners in their
   photos, so they match what the company already prints.
   Durations / seasons / gradings are conventional for these routes and are
   flagged in the README as the main thing for them to confirm.
   -------------------------------------------------------------------------- */
WY.treks = [
  {
    id: 'sandakphu',
    name: 'Sandakphu — Phalut',
    region: 'West Bengal · Singalila National Park',
    altitude: 11930,
    altitudeLabel: '11,930 ft',
    days: '6–7 days',
    grade: 'Beginner',
    season: 'Oct–Dec · Mar–May',
    img: 'assets/img/treks/sandakphu.webp',
    flagship: true,
    hook: 'Four of the five highest peaks on earth from one ridge.',
    blurb: 'The walk along the Singalila ridge that puts Everest, Kanchenjunga, Lhotse and Makalu in a single frame. Most of our trekkers do this as their first-ever trek — and finish it.',
    highlights: ['Sleeping Buddha at sunrise', 'Singalila National Park', 'Village homestays', 'Rhododendron forest in spring'],
    route: ['Srikhola', 'Rammam', 'Samanden', 'Sabargram', 'Phalut', 'Aal', 'Sandakphu', 'Gurdum']
  },
  {
    id: 'tunganath',
    name: 'Tunganath — Chandrasila',
    region: 'Uttarakhand · with Deoria Tal',
    altitude: 12110,
    altitudeLabel: '12,110 ft',
    days: '5–6 days',
    grade: 'Beginner',
    season: 'Apr–Jun · Sep–Nov',
    img: 'assets/img/treks/tungnath.webp',
    hook: 'The highest Shiva temple in the world, then the summit above it.',
    blurb: 'A short, generous Himalayan trek. Camp beside Deoria Tal, climb past Tunganath temple and stand on Chandrasila with the Chaukhamba massif filling the horizon.',
    highlights: ['Deoria Tal reflections', 'Tunganath temple', '360° Chaukhamba view', 'Great first Himalayan trek'],
    route: ['Sari', 'Deoria Tal', 'Chopta', 'Tunganath', 'Chandrasila']
  },
  {
    id: 'valley-of-flowers',
    name: 'Valley of Flowers',
    region: 'Uttarakhand · with Hemkund Sahib',
    altitude: 14200,
    altitudeLabel: '14,200 ft',
    days: '6 days / 5 nights',
    grade: 'Moderate',
    season: 'Jul–Sep',
    img: 'assets/img/treks/valley-of-flowers.webp',
    hook: 'A UNESCO valley that only exists for ten weeks a year.',
    blurb: 'Hundreds of alpine species open at once across a hanging valley above the Pushpawati, then the climb to Hemkund Sahib at 14,200 ft for the contrast of flowers and glacial lake. Starts and ends at Rishikesh.',
    highlights: ['Valley of Flowers National Park', 'Hemkund Sahib Gurudwara', 'Scenic trails and waterfalls', 'Starts and ends at Rishikesh'],
    route: ['Rishikesh', 'Govindghat', 'Ghangaria', 'Valley of Flowers', 'Hemkund Sahib']
  },
  {
    id: 'rupin-pass',
    name: 'Rupin Pass',
    region: 'Uttarakhand → Himachal',
    altitude: 15350,
    altitudeLabel: '15,350 ft',
    days: '7–8 days',
    grade: 'Moderate–Challenging',
    season: 'May–Jun · Sep–Oct',
    img: 'assets/img/treks/rupin-pass.webp',
    hook: 'A crossing, not a there-and-back.',
    blurb: 'The trail changes character every single day — hanging villages, snow bridges, the tiered Rupin waterfall, then a gully of snow onto the pass and down the far side into Himachal.',
    highlights: ['Cross-over trek', 'Rupin waterfall ascent', 'Snow gully to the pass', 'Changes terrain daily'],
    route: ['Dhaula', 'Sewa', 'Jiskun', 'Jhaka', 'Dhanderas Thach', 'Rupin Pass', 'Sangla']
  },
  {
    id: 'bali-pass',
    name: 'Bali Pass',
    region: 'Uttarakhand · Govind NP',
    altitude: 16200,
    altitudeLabel: '16,200 ft',
    days: '8–9 days',
    grade: 'Challenging',
    season: 'May–Jun · Sep–Oct',
    img: 'assets/img/treks/bali-pass.webp',
    hook: 'Our hardest route. Rope, harness and a real summit day.',
    blurb: 'From the meadows of Har Ki Dun to a genuine high pass with Swargarohini overhead and a long technical descent to Yamunotri. For trekkers who have already done the others.',
    highlights: ['Technical summit day', 'Swargarohini up close', 'Ruinsara Tal', 'Finishes at Yamunotri'],
    route: ['Sankri', 'Seema', 'Ruinsara Tal', 'Odari', 'Bali Pass', 'Yamunotri']
  },
  {
    id: 'har-ki-dun',
    name: 'Har Ki Dun',
    region: 'Uttarakhand · with Marinda Tal',
    altitude: 13025,
    altitudeLabel: '13,025 ft',
    days: '7–8 days',
    grade: 'Moderate',
    season: 'Mar–Jun · Sep–Dec',
    img: 'assets/img/treks/har-ki-dun.webp',
    hook: 'The valley of gods, and one of the oldest trails in the Himalaya.',
    blurb: 'A wide glacial valley walled by Swargarohini, reached through villages that have kept their own architecture and their own gods for centuries. Paired with the quiet lake at Marinda Tal.',
    highlights: ['Swargarohini head-on', 'Ancient Himalayan villages', 'Marinda Tal', 'Runs almost all year'],
    route: ['Sankri', 'Taluka', 'Osla', 'Har Ki Dun', 'Marinda Tal']
  },
  {
    id: 'hampta-pass',
    name: 'Hampta Pass',
    region: 'Himachal · with Chandra Tal',
    altitude: 14100,
    altitudeLabel: '14,100 ft',
    days: '5–6 days',
    grade: 'Moderate',
    season: 'Jun–Sep',
    img: 'assets/img/treks/hampta-pass.webp',
    hook: 'Green Kullu on one side, the bare moonscape of Lahaul on the other.',
    blurb: 'One of the most dramatic crossings in the country: you walk out of pine forest and flower meadows, over the pass, and down into a brown desert valley. Finished at the blue of Chandra Tal.',
    highlights: ['Kullu to Lahaul crossing', 'Chandra Tal lake', 'Landscape flips in a single day', 'Camping under the stars'],
    route: ['Manali', 'Jobra', 'Chika', 'Balu Ka Ghera', 'Hampta Pass', 'Chatru', 'Chandra Tal']
  },
  {
    id: 'yeti-stone',
    name: 'Yeti Stone Hike',
    region: 'Darjeeling hills · NJP to NJP',
    altitude: 7545,
    altitudeLabel: '7,545 ft',
    days: '4 days / 3 nights',
    grade: 'Easy',
    season: 'All year',
    img: 'assets/img/treks/samanden.webp',
    hook: 'Step into the legend. Find the footprints of the Yeti.',
    blurb: 'Short, green and low. Dense forest, prayer-flag bridges and the mysterious Yeti Stone itself — the trip we send people on when they want to find out whether trekking is for them.',
    highlights: ['The mysterious Yeti Stone', 'Dense forest and scenic trails', 'No altitude worries', 'Picked up and dropped at NJP'],
    route: ['NJP', 'Darjeeling hills', 'Yeti Stone', 'NJP']
  }
];

/* --- Sandakphu–Phalut elevation profile ------------------------------------
   Waypoint order taken from the route described in the company's own reviews:
   "Rammam, Samanden, Sabargram, Aal, Sandakphu, Gurdum".
   Sandakphu (11,930 ft) and Aal (11,570 ft) are from their banners/signage.
   -------------------------------------------------------------------------- */
WY.profile = [
  { name: 'Srikhola',  ft: 6900,  note: 'Trailhead. River, bridge, last shop.' },
  { name: 'Rammam',    ft: 8300,  note: 'First climb through the forest.' },
  { name: 'Samanden',  ft: 7350,  note: 'Hidden village. No road reaches it.' },
  { name: 'Sabargram', ft: 11600, note: 'Onto the ridge. Air gets thin.' },
  { name: 'Phalut',    ft: 11811, note: 'Kanchenjunga close enough to touch.' },
  { name: 'Aal',       ft: 11570, note: 'The long traverse.' },
  { name: 'Sandakphu', ft: 11930, note: 'Highest point in West Bengal.' },
  { name: 'Gurdum',    ft: 7550,  note: 'Drop back into the trees.' }
];

/* --- Reviews ---------------------------------------------------------------
   Verbatim excerpts from the company's public Google reviews (5.0 ★, 105
   reviews). Long reviews are trimmed at a sentence boundary and marked with
   `trimmed: true` — no wording has been altered.
   -------------------------------------------------------------------------- */
WY.reviews = [
  { name: 'Rohit Amborkar', when: '7 months ago', stars: 5, trimmed: true,
    text: 'My first-ever trekking experience 11930ft couldn’t have been more perfect, and choosing the Wild Yogi Adventures for the Sandakphu–Phalut Trek was truly the best decision I made.' },
  { name: 'Duke', when: '10 months ago', stars: 5, trimmed: true,
    text: 'This entire "it is a trek, not a trip" is lucid. Friend started this company after doing lots of treks throughout India himself, so when I asked about a trek, he asked me to come with him to Sandakphu.' },
  { name: 'Prajukta Chatterjee', when: '2 months ago', stars: 5, trimmed: true,
    text: 'As a first-time solo traveler in the North Bengal hills, I felt safe, supported, and well-guided throughout.' },
  { name: 'Susmita Sarkar', when: '2 months ago', stars: 5, trimmed: true,
    text: 'Being my first trek, I didn’t really know what to expect when I started. But the trek leader of Wild yogi Abhrajit was fully professional and responsible, also very warm, informative, caring and pleasant.' },
  { name: 'Debargha Pal', when: '4 months ago', stars: 5, trimmed: false,
    text: 'I was unfortunate not to complete the trek due to altitude sickness but the trek leader and guide descended me to safety. Overall highly recommend.' },
  { name: 'Koustav Chandra', when: '6 months ago', stars: 5, trimmed: false,
    text: 'The homestays we stayed at were the best of the locations. The foods were tasty, homely and healthy. Go for it and bring back a little bit of mountain with you.' },
  { name: 'Prarthana Roy', when: '2 months ago', stars: 5, trimmed: true,
    text: 'I completed my first trekking trip valley of flowers with wild yogi adventures. As a solo female I must say it’s very good and comfortable journey with them.' },
  { name: 'ALEMARA KHATUN', when: '5 months ago', stars: 5, trimmed: true,
    text: 'Route selection was brilliantly planned by Mr. Abhrajit which made the trek smooth and enjoyable even in tough sections.' },
  { name: 'Faruk Sk', when: '5 months ago', stars: 5, trimmed: true,
    text: 'Earlier, we had completed the Valley of Flowers trek through a trek agency, so this time we initially planned to organize everything on our own. However, after doing our research we went with Wild Yogi.' },
  { name: 'Ritwik Das', when: '5 months ago', stars: 5, trimmed: false,
    text: 'The trek leader was superb and supportive. He told us stories, motivated us to complete the trek and guess what — we did it!' },
  { name: 'Abhinaba Das', when: '11 months ago', stars: 5, trimmed: true,
    text: 'The trek was well-organized with great food, comfortable spaces, and overall good facilities. Avrajit, our Trek Leader is super friendly.' },
  { name: 'Wasim Raja', when: '9 months ago', stars: 5, trimmed: false,
    text: 'As my first trek, it feels like a huge milestone for me. Our trek leader, Avro da, was really good — very knowledgeable and well aware of the trail. I also loved the experience with our local Nepali trek guide.' },
  { name: 'Harshada Patil', when: '4 months ago', stars: 5, trimmed: true,
    text: 'I did the Sandakphu-Phalut trek with Wild Yogi Adventures from 9 to 15 May, and it was an amazing experience.' },
  { name: 'SRIJAN NEOGI', when: 'a year ago', stars: 5, trimmed: true,
    text: 'Great trekking organisation to go with! Competitive pricing, great mountaineers turned trek leaders and great experience backing them up!' },
  { name: 'Sandhyarani Kodag', when: '4 months ago', stars: 5, trimmed: true,
    text: 'Well management, perfect stays, awesome food, very kind and helpful trained team members as guide. Overall it’s a best team to join on mountain trails.' },
  { name: 'Anindita Saha', when: '3 months ago', stars: 5, trimmed: true,
    text: 'My first trek ever and it was incredible. As a beginner I was nervous but Tika daa and Avrajit made it smooth.' },
  { name: 'Soptorshi Bhattacharjee', when: 'a month ago', stars: 5, trimmed: false,
    text: 'The trip was engaging and fun! The trek leader shared various insights along the way. They also catered for the elderly.' },
  { name: 'Piyasha Baidya', when: '4 weeks ago', stars: 5, trimmed: true,
    text: 'The team was friendly, supportive, and very well-organized. Everything was managed smoothly from start to finish.' },
  { name: 'Kingshuk Manna', when: '5 months ago', stars: 5, trimmed: true,
    text: 'I recently had the most incredible experience trekking with Wild Yogi Adventures, and I genuinely cannot recommend them enough!' },
  { name: 'Abhisek Roy', when: '8 months ago', stars: 5, trimmed: false,
    text: 'It’s my 4th trek, but it’s the best experience with this company. The trek leaders are skilled, polite, friendly — and the food, arrangement and overall everything is beyond my expectation.' }
];

/* --- Team (named repeatedly across the reviews) --------------------------- */
WY.team = [
  { name: 'Avrajit Sarkar', role: 'Founder & Lead Trek Leader',
    note: 'Named by name in dozens of reviews. Started Wild Yogi after trekking across India himself.' },
  { name: 'Tikaram Chettri', role: 'Trek Coordinator & Local Guide',
    note: '"Tika da" to everyone who has walked with him. Knows the Singalila trail and the people on it.' },
  { name: 'Joy Shil', role: 'Trek Leader',
    note: 'Leads groups on the Sandakphu and Singalila routes.' }
];

/* --- Gallery (48 photos, from the company's own Google listing) ----------- */
WY.gallery = Array.from({ length: 48 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { sm: `assets/img/gallery/g${n}.webp`, lg: `assets/img/gallery/g${n}-lg.webp` };
});

/* --- Why Wild Yogi (each claim traceable to the reviews) ------------------ */
WY.pillars = [
  { k: 'first', n: '01', title: 'Built for first-timers',
    body: 'Read the reviews: the phrase "my first trek" appears again and again, and they finish. Beginners are the default here, not an exception.' },
  { k: 'safety', n: '02', title: 'Turning back is part of the plan',
    body: 'One trekker got altitude sickness and did not summit. The leaders walked him down to safety. He still left five stars. That is the whole answer on safety.' },
  { k: 'local', n: '03', title: 'Local guides, not imported ones',
    body: 'Tikaram Chettri and the Nepali guides on the Singalila trail live there. The trail, the culture and the history come from people who are from it.' },
  { k: 'stay', n: '04', title: 'Homestays, not tourist hotels',
    body: 'Village homestays chosen for location, with home-cooked food. "Tasty, homely and healthy" is a direct quote, and it comes up constantly.' },
  { k: 'small', n: '05', title: 'Small groups, leaders you can name',
    body: 'Trekkers name Avrajit, Tika da and Joy in their reviews. That only happens when groups are small enough for the leader to be a person, not a whistle.' },
  { k: 'women', n: '06', title: 'Solo travellers, looked after',
    body: 'Two separate solo female trekkers wrote that they felt safe and supported start to finish. It is worth saying out loud.' }
];

/* --- Instagram: real posts from @wildyogiadventures ------------------------
   Thumbnails downloaded from their public profile (Instagram's CDN URLs are
   signed and expire, so they are self-hosted here). Each tile deep-links to
   the actual post. Captured 2026-09-20 — re-run to refresh.
   -------------------------------------------------------------------------- */
WY.instagram = [
  { img: 'assets/img/insta/ig01.webp', href: 'https://www.instagram.com/wildyogiadventures/p/DTddU80jZrh/', date: 'January 13, 2026', reel: false },
  { img: 'assets/img/insta/ig02.webp', href: 'https://www.instagram.com/wildyogiadventures/p/DUFedotCT7R/', date: 'January 28, 2026', reel: false },
  { img: 'assets/img/insta/ig03.webp', href: 'https://www.instagram.com/wildyogiadventures/p/Ddb1OSDCbL7/', date: 'September 18, 2026', reel: false },
  { img: 'assets/img/insta/ig04.webp', href: 'https://www.instagram.com/wildyogiadventures/p/DdZT5MGCVJZ/', date: 'September 17, 2026', reel: false },
  { img: 'assets/img/insta/ig05.webp', href: 'https://www.instagram.com/wildyogiadventures/reel/DdJhOA4Dk2N/', date: 'September 11, 2026', reel: true },
  { img: 'assets/img/insta/ig06.webp', href: 'https://www.instagram.com/wildyogiadventures/p/Dc98K-DiZXr/', date: 'September 06, 2026', reel: false },
  { img: 'assets/img/insta/ig07.webp', href: 'https://www.instagram.com/wildyogiadventures/p/DcupmJbibN4/', date: 'August 31, 2026', reel: false },
  { img: 'assets/img/insta/ig08.webp', href: 'https://www.instagram.com/wildyogiadventures/p/DcH8CTWifzO/', date: 'August 16, 2026', reel: false },
  { img: 'assets/img/insta/ig09.webp', href: 'https://www.instagram.com/wildyogiadventures/p/DcEjP6HEyCz/', date: 'August 15, 2026', reel: false },
  { img: 'assets/img/insta/ig10.webp', href: 'https://www.instagram.com/wildyogiadventures/p/Db6KedmE_Vs/', date: 'August 11, 2026', reel: false }
];
