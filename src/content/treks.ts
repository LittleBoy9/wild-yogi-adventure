import type { Trek } from '@/types';

/**
 * The routes Wild Yogi run.
 *
 * Altitudes are read directly off the company's own summit banners, so they
 * match what they already print. Valley of Flowers and Yeti Stone Hike also
 * carry their published duration and grading, taken from their Instagram.
 *
 * Durations, seasons and gradings for the other routes are conventional for
 * these trails and are NOT confirmed by the company — see poc/README_V1.md
 * for the list of things to check with them before launch.
 *
 * `stages` are deliberately stages rather than numbered days: no day-by-day
 * split has been published for most routes, and inventing one would put wrong
 * information in front of a customer.
 */
export const TREKS: Trek[] = [
  {
    "slug": "sandakphu",
    "name": "Sandakphu — Phalut",
    "region": "West Bengal · Singalila National Park",
    "altitude": 11930,
    "altitudeLabel": "11,930 ft",
    "days": "6–7 days",
    "grade": "Beginner",
    "season": "Oct–Dec · Mar–May",
    "image": "/img/treks/sandakphu.webp",
    "flagship": true,
    "hook": "Four of the five highest peaks on earth from one ridge.",
    "blurb": "The walk along the Singalila ridge that puts Everest, Kanchenjunga, Lhotse and Makalu in a single frame. Most of our trekkers do this as their first-ever trek — and finish it.",
    "long": "The Singalila ridge is the only place in India where you can stand in one spot and see four of the five highest mountains on earth at once — Everest, Kanchenjunga, Lhotse and Makalu, strung across the skyline at dawn. The walk gets you there through village homestays rather than tents, which is why it works so well as a first trek: you sleep warm, you eat home-cooked food, and the altitude comes on slowly enough to handle. In spring the lower forest is solid rhododendron.",
    "bestTime": "Clear skies in October and November. Rhododendron bloom in April and May.",
    "fitness": "You should be able to walk 5–6 hours a day on uneven ground. No technical skill needed.",
    "highlights": [
      "Sleeping Buddha at sunrise",
      "Singalila National Park",
      "Village homestays",
      "Rhododendron forest in spring"
    ],
    "stages": [
      {
        "name": "Srikhola",
        "ft": 6900,
        "note": "The trailhead. A river, a bridge and the last proper shop you will see."
      },
      {
        "name": "Rammam",
        "ft": 8300,
        "note": "The first real climb, all of it through forest."
      },
      {
        "name": "Samanden",
        "ft": 7350,
        "note": "A hidden village that no road reaches. Most trekkers have never heard of it."
      },
      {
        "name": "Sabargram",
        "ft": 11600,
        "note": "Out of the trees and onto the ridge. The air starts to feel thin here."
      },
      {
        "name": "Phalut",
        "ft": 11811,
        "note": "Kanchenjunga close enough that it stops looking like a view."
      },
      {
        "name": "Aal",
        "ft": 11570,
        "note": "The long traverse along the ridgeline."
      },
      {
        "name": "Sandakphu",
        "ft": 11930,
        "note": "The highest point in West Bengal, and the reason everyone comes."
      },
      {
        "name": "Gurdum",
        "ft": 7550,
        "note": "Drop back down into the trees and warm air."
      }
    ],
    "photos": [
      2,
      4,
      16,
      32,
      40,
      21,
      13,
      17,
      25,
      29,
      5,
      3,
      1,
      12,
      20,
      36
    ],
    "reviewMatch": [
      "Sandakphu",
      "Phalut",
      "Singalila",
      "11930"
    ]
  },
  {
    "slug": "tunganath",
    "name": "Tunganath — Chandrasila",
    "region": "Uttarakhand · with Deoria Tal",
    "altitude": 12110,
    "altitudeLabel": "12,110 ft",
    "days": "5–6 days",
    "grade": "Beginner",
    "season": "Apr–Jun · Sep–Nov",
    "image": "/img/treks/tungnath.webp",
    "hook": "The highest Shiva temple in the world, then the summit above it.",
    "blurb": "A short, generous Himalayan trek. Camp beside Deoria Tal, climb past Tunganath temple and stand on Chandrasila with the Chaukhamba massif filling the horizon.",
    "long": "Short, generous and almost absurdly scenic. You camp beside Deoria Tal with the Chaukhamba massif reflected in it, walk up past Tunganath — the highest Shiva temple in the world — and carry on to the summit of Chandrasila, where the horizon opens out across most of the Garhwal Himalaya. It asks less of you than the other routes and gives back nearly as much, which makes it the other trek we send first-timers on.",
    "bestTime": "April to June for clear meadows, September to November for the sharpest views.",
    "fitness": "Beginner friendly. Short walking days.",
    "highlights": [
      "Deoria Tal reflections",
      "Tunganath temple",
      "360° Chaukhamba view",
      "Great first Himalayan trek"
    ],
    "stages": [
      {
        "name": "Sari",
        "note": "The road head village."
      },
      {
        "name": "Deoria Tal",
        "note": "The lake, with Chaukhamba in the reflection at dawn."
      },
      {
        "name": "Chopta",
        "note": "Meadow country, often called the mini Switzerland of Garhwal."
      },
      {
        "name": "Tunganath",
        "note": "The highest Shiva temple in the world."
      },
      {
        "name": "Chandrasila",
        "ft": 12110,
        "note": "The summit. A 360 degree view of the Garhwal range."
      }
    ],
    "photos": [
      9,
      24,
      28,
      36
    ],
    "reviewMatch": [
      "Tungnath",
      "Tunganath",
      "Chandrashila",
      "Chandrasila"
    ]
  },
  {
    "slug": "valley-of-flowers",
    "name": "Valley of Flowers",
    "region": "Uttarakhand · with Hemkund Sahib",
    "altitude": 14200,
    "altitudeLabel": "14,200 ft",
    "days": "6 days / 5 nights",
    "grade": "Moderate",
    "season": "Jul–Sep",
    "image": "/img/treks/valley-of-flowers.webp",
    "hook": "A UNESCO valley that only exists for ten weeks a year.",
    "blurb": "Hundreds of alpine species open at once across a hanging valley above the Pushpawati, then the climb to Hemkund Sahib at 14,200 ft for the contrast of flowers and glacial lake. Starts and ends at Rishikesh.",
    "long": "A hanging valley above the Pushpawati that is under snow for most of the year and then, for about ten weeks in the monsoon, turns into several hundred species of alpine flower at once. It is a UNESCO World Heritage site and it is genuinely as strange as it sounds. Wild Yogi pair it with the climb to Hemkund Sahib at 14,200 ft, a glacial lake and gurudwara, so you get the flowers and the high cold in the same trip.",
    "bestTime": "July to early September. Outside that window the valley is not in bloom.",
    "fitness": "Moderate. The Hemkund day is a steep, sustained climb.",
    "highlights": [
      "Valley of Flowers National Park",
      "Hemkund Sahib Gurudwara",
      "Scenic trails and waterfalls",
      "Starts and ends at Rishikesh"
    ],
    "stages": [
      {
        "name": "Rishikesh",
        "note": "Where the trip starts and ends."
      },
      {
        "name": "Govindghat",
        "note": "Road head. The walking begins here."
      },
      {
        "name": "Ghangaria",
        "note": "The base village for both the valley and Hemkund."
      },
      {
        "name": "Valley of Flowers",
        "note": "The valley itself, in full monsoon bloom."
      },
      {
        "name": "Hemkund Sahib",
        "ft": 14200,
        "note": "Glacial lake and gurudwara. The highest point of the trip."
      }
    ],
    "photos": [
      6,
      14,
      30,
      34,
      38,
      10
    ],
    "reviewMatch": [
      "valley of flowers"
    ]
  },
  {
    "slug": "rupin-pass",
    "name": "Rupin Pass",
    "region": "Uttarakhand → Himachal",
    "altitude": 15350,
    "altitudeLabel": "15,350 ft",
    "days": "7–8 days",
    "grade": "Moderate–Challenging",
    "season": "May–Jun · Sep–Oct",
    "image": "/img/treks/rupin-pass.webp",
    "hook": "A crossing, not a there-and-back.",
    "blurb": "The trail changes character every single day — hanging villages, snow bridges, the tiered Rupin waterfall, then a gully of snow onto the pass and down the far side into Himachal.",
    "long": "A crossing rather than a there-and-back, and the trail changes character almost every day you are on it. Hanging villages built into the hillside, snow bridges over the river, the Rupin waterfall which you climb alongside rather than just look at, and then a gully of snow onto the pass itself before you drop down the far side into Himachal. It is the most varied route Wild Yogi run.",
    "bestTime": "May to June for snow on the pass, September to October for clear weather.",
    "fitness": "Moderate to challenging. Long days and a steep, exposed pass day.",
    "highlights": [
      "Cross-over trek",
      "Rupin waterfall ascent",
      "Snow gully to the pass",
      "Changes terrain daily"
    ],
    "stages": [
      {
        "name": "Dhaula",
        "note": "Trailhead in Uttarakhand."
      },
      {
        "name": "Sewa",
        "note": "The first of the old hillside villages."
      },
      {
        "name": "Jiskun",
        "note": "Deep in the Rupin gorge."
      },
      {
        "name": "Jhaka",
        "note": "The hanging village, built onto the cliff."
      },
      {
        "name": "Dhanderas Thach",
        "note": "Meadow below the tiered Rupin waterfall."
      },
      {
        "name": "Rupin Pass",
        "ft": 15350,
        "note": "The snow gully and the crossing itself."
      },
      {
        "name": "Sangla",
        "note": "Down the far side, into Himachal."
      }
    ],
    "photos": [
      44,
      48,
      36,
      33
    ],
    "reviewMatch": [
      "Rupin"
    ]
  },
  {
    "slug": "bali-pass",
    "name": "Bali Pass",
    "region": "Uttarakhand · Govind NP",
    "altitude": 16200,
    "altitudeLabel": "16,200 ft",
    "days": "8–9 days",
    "grade": "Challenging",
    "season": "May–Jun · Sep–Oct",
    "image": "/img/treks/bali-pass.webp",
    "hook": "Our hardest route. Rope, harness and a real summit day.",
    "blurb": "From the meadows of Har Ki Dun to a genuine high pass with Swargarohini overhead and a long technical descent to Yamunotri. For trekkers who have already done the others.",
    "long": "The hardest thing Wild Yogi run, and they are straightforward about that. You start in the meadows of Har Ki Dun, work up past Ruinsara Tal with Swargarohini standing over you the whole way, and then take on a genuine high pass — rope, harness, an alpine start and a long technical descent on the other side that finishes at Yamunotri. This is for people who have already done two or three of the other routes.",
    "bestTime": "May to June, or September to October.",
    "fitness": "Challenging. Previous high-altitude trekking experience expected.",
    "highlights": [
      "Technical summit day",
      "Swargarohini up close",
      "Ruinsara Tal",
      "Finishes at Yamunotri"
    ],
    "stages": [
      {
        "name": "Sankri",
        "note": "The road head for the whole Govind National Park area."
      },
      {
        "name": "Seema",
        "note": "Into the Har Ki Dun valley."
      },
      {
        "name": "Ruinsara Tal",
        "note": "The lake, with Swargarohini directly overhead."
      },
      {
        "name": "Odari",
        "note": "High camp below the pass."
      },
      {
        "name": "Bali Pass",
        "ft": 16200,
        "note": "Summit day. Rope and harness, and an early start."
      },
      {
        "name": "Yamunotri",
        "note": "The long descent out, finishing at the temple."
      }
    ],
    "photos": [
      33,
      37,
      36,
      20
    ],
    "reviewMatch": [
      "Bali Pass"
    ]
  },
  {
    "slug": "har-ki-dun",
    "name": "Har Ki Dun",
    "region": "Uttarakhand · with Marinda Tal",
    "altitude": 13025,
    "altitudeLabel": "13,025 ft",
    "days": "7–8 days",
    "grade": "Moderate",
    "season": "Mar–Jun · Sep–Dec",
    "image": "/img/treks/har-ki-dun.webp",
    "hook": "The valley of gods, and one of the oldest trails in the Himalaya.",
    "blurb": "A wide glacial valley walled by Swargarohini, reached through villages that have kept their own architecture and their own gods for centuries. Paired with the quiet lake at Marinda Tal.",
    "long": "Called the valley of gods, and one of the oldest trodden trails in the Himalaya. A wide glacial valley walled in by Swargarohini, reached through villages that have kept their own wooden architecture and their own local deities for centuries. Wild Yogi pair it with the quiet lake at Marinda Tal. It runs almost all year, which makes it unusual among these routes.",
    "bestTime": "Runs nearly year round. March to June and September to December are best.",
    "fitness": "Moderate. Steady walking, no technical sections.",
    "highlights": [
      "Swargarohini head-on",
      "Ancient Himalayan villages",
      "Marinda Tal",
      "Runs almost all year"
    ],
    "stages": [
      {
        "name": "Sankri",
        "note": "Road head, and the last town."
      },
      {
        "name": "Taluka",
        "note": "Where the walking starts properly."
      },
      {
        "name": "Osla",
        "note": "An old village with its own temple and architecture."
      },
      {
        "name": "Har Ki Dun",
        "ft": 13025,
        "note": "The valley head, under Swargarohini."
      },
      {
        "name": "Marinda Tal",
        "note": "The lake above the valley."
      }
    ],
    "photos": [
      48,
      43,
      36,
      20
    ],
    "reviewMatch": [
      "Har Ki Dun"
    ]
  },
  {
    "slug": "hampta-pass",
    "name": "Hampta Pass",
    "region": "Himachal · with Chandra Tal",
    "altitude": 14100,
    "altitudeLabel": "14,100 ft",
    "days": "5–6 days",
    "grade": "Moderate",
    "season": "Jun–Sep",
    "image": "/img/treks/hampta-pass.webp",
    "hook": "Green Kullu on one side, the bare moonscape of Lahaul on the other.",
    "blurb": "One of the most dramatic crossings in the country: you walk out of pine forest and flower meadows, over the pass, and down into a brown desert valley. Finished at the blue of Chandra Tal.",
    "long": "One of the most abrupt landscape changes you can walk through in a single day. The Kullu side is pine forest, flower meadows and a river; you cross the pass, and the other side is the bare brown moonscape of Lahaul with almost nothing growing on it. Wild Yogi finish the trip at Chandra Tal, the crescent lake, which is about as blue as water gets.",
    "bestTime": "June to September, once the pass is open.",
    "fitness": "Moderate. One long pass day with a steep descent.",
    "highlights": [
      "Kullu to Lahaul crossing",
      "Chandra Tal lake",
      "Landscape flips in a single day",
      "Camping under the stars"
    ],
    "stages": [
      {
        "name": "Manali",
        "note": "Where the trip starts."
      },
      {
        "name": "Jobra",
        "note": "Road head above Manali."
      },
      {
        "name": "Chika",
        "note": "Meadow camp beside the river."
      },
      {
        "name": "Balu Ka Ghera",
        "note": "High camp below the pass."
      },
      {
        "name": "Hampta Pass",
        "ft": 14100,
        "note": "The crossing. Green behind you, desert in front."
      },
      {
        "name": "Chatru",
        "note": "Down into the Lahaul valley."
      },
      {
        "name": "Chandra Tal",
        "note": "The crescent lake, and the end of the trip."
      }
    ],
    "photos": [
      46,
      36,
      20,
      24
    ],
    "reviewMatch": [
      "Hampta"
    ]
  },
  {
    "slug": "yeti-stone",
    "name": "Yeti Stone Hike",
    "region": "Darjeeling hills · NJP to NJP",
    "altitude": 7545,
    "altitudeLabel": "7,545 ft",
    "days": "4 days / 3 nights",
    "grade": "Easy",
    "season": "All year",
    "image": "/img/treks/samanden.webp",
    "hook": "Step into the legend. Find the footprints of the Yeti.",
    "blurb": "Short, green and low. Dense forest, prayer-flag bridges and the mysterious Yeti Stone itself — the trip we send people on when they want to find out whether trekking is for them.",
    "long": "Short, green, low and genuinely easy — the trip Wild Yogi send people on when they want to find out whether trekking is for them before committing to a week at altitude. Dense moss forest, prayer-flag bridges over the river, and the Yeti Stone itself. You are picked up and dropped back at NJP, so it works as a long weekend out of Kolkata.",
    "bestTime": "Runs all year.",
    "fitness": "Easy. Suitable for families and complete beginners.",
    "highlights": [
      "The mysterious Yeti Stone",
      "Dense forest and scenic trails",
      "No altitude worries",
      "Picked up and dropped at NJP"
    ],
    "stages": [
      {
        "name": "NJP",
        "note": "Picked up at the railhead."
      },
      {
        "name": "Forest trail",
        "note": "Moss forest, river and prayer-flag bridges."
      },
      {
        "name": "Yeti Stone",
        "ft": 7545,
        "note": "The stone itself, and the legend attached to it."
      },
      {
        "name": "NJP",
        "note": "Dropped back at the railhead."
      }
    ],
    "photos": [
      7,
      15,
      19,
      27,
      31,
      39,
      23,
      35
    ],
    "reviewMatch": [
      "Yeti",
      "Samanden"
    ]
  }
];

/** The routes that lead the home page. */
export const FEATURED_SLUGS = ["sandakphu","valley-of-flowers","tunganath","rupin-pass","bali-pass"] as const;

export const FEATURED: Trek[] = FEATURED_SLUGS
  .map((slug) => TREKS.find((t) => t.slug === slug))
  .filter((t): t is Trek => Boolean(t));

export function getTrek(slug: string): Trek | undefined {
  return TREKS.find((t) => t.slug === slug);
}

export const TREK_SLUGS = TREKS.map((t) => t.slug);
