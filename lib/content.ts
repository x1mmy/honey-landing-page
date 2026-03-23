export const BUSINESS = {
  name: "Hive & Harvest",
  tagline: "Nature\u2019s Liquid Gold, Direct From the Farm",
  phone: "0432 806 679",
  phoneHref: "sms:0432806679",
  location: "Merrylands, NSW",
  farmLocation: "Tamworth, NSW",
  bsb: "732-361",
  accountNumber: "880 801",
  paymentReference: "Your name + HONEY",
} as const;

export const HONEY_INFO = {
  name: "Sandy Hills Honey",
  farm: "965-acre farm, 45km south-east of Tamworth in North West NSW",
  type: "Pure Eucalyptus Honey",
  source: "Collected from the nectar of all bush trees",
  highlights: [
    "Cold extracted",
    "Hand poured",
    "Unadulterated",
    "100% Australian",
  ],
  promises: [
    { icon: "\u274C", text: "No additives" },
    { icon: "\u274C", text: "No preservatives" },
    { icon: "\u274C", text: "No heat treatment" },
    { icon: "\u274C", text: "No chemicals used" },
    { icon: "\u274C", text: "No sugar fed to bees" },
  ],
  legacy: "The whole process is done by hand, the same way the farmer\u2019s family has done for over 60 years.",
  certification: "100% Australian natural raw product. Product of Australia.",
} as const;

export const PRODUCTS = [
  {
    id: "single",
    label: "1 Tub",
    price: 30,
    description:
      "One generous tub of Sandy Hills pure eucalyptus honey \u2014 cold extracted, hand poured, and bursting with rich, golden flavour. Perfect for drizzling, cooking, or eating straight off the spoon.",
    featured: false,
    saving: null,
    badge: null,
    priceNote: "Per tub",
  },
  {
    id: "double",
    label: "2 Tubs",
    price: 50,
    priceEach: 25,
    saving: 10,
    description:
      "Double the goodness. Keep one on the counter and gift the other \u2014 or stock up, because once you open the first tub, it won\u2019t last long. Save $10 when you grab two.",
    featured: true,
    badge: "Best Value",
    priceNote: "Save $10 \u2014 only $25 each",
  },
] as const;

export const ORDER_STEPS = [
  {
    step: 1,
    title: "Pick your honey",
    desc: "Choose 1 tub ($30) or 2 tubs ($50) \u2014 both are irresistible",
  },
  {
    step: 2,
    title: "Text us",
    desc: "Send a quick SMS to 0432 806 679 with your name & order",
  },
  {
    step: 3,
    title: "Pay your way",
    desc: "Cash at pickup or bank transfer \u2014 whatever suits you",
  },
  {
    step: 4,
    title: "Collect in Merrylands",
    desc: "We\u2019ll arrange a time. Fresh honey, warm smiles",
  },
] as const;

export const TRUST_ITEMS = [
  { icon: "\u{1F33F}", label: "100% Organic & Raw" },
  { icon: "\u{1F41D}", label: "Pure Eucalyptus" },
  { icon: "\u2728", label: "Zero Chemicals" },
  { icon: "\u{1F3E1}", label: "965-Acre Tamworth Farm" },
  { icon: "\u{270B}", label: "Handmade for 60+ Years" },
] as const;

export const ABOUT_PILLS = [
  "\u{1F1E6}\u{1F1FA} Product of Australia",
  "\u{1F33F} Cold Extracted",
  "\u{270B} Hand Poured",
  "\u{1F36F} Raw & Unfiltered",
  "\u274C No Chemicals",
] as const;

export const HERO_COPY = {
  badge: "Sandy Hills Honey \u2022 Pure Eucalyptus",
  titleLine1: "Taste the",
  titleEmphasis: "Difference",
  titleLine2: "Real Honey Makes.",
  subtitle:
    "Cold extracted and hand poured from a 965-acre family farm near Tamworth. No additives, no preservatives, no heat treatment \u2014 just pure, raw eucalyptus honey the way nature intended. Handmade the same way for over 60 years.",
} as const;

export const ABOUT_COPY = {
  label: "The Honey",
  title: "From a 965-acre farm to your table \u2014 nothing in between.",
  paragraphs: [
    "Sandy Hills Honey is collected from the nectar of all bush trees on a 965-acre farm, 45km south-east of Tamworth in North West NSW. This isn\u2019t mass-produced honey \u2014 it\u2019s cold extracted, hand poured, and completely unadulterated.",
    "No additives. No preservatives. Not heat treated. No sugar fed to the bees. No chemicals used \u2014 ever. This is pure, natural, raw honey where the whole process is done by hand, the same way the farmer\u2019s family has been doing it for over 60 years.",
    "We bring this same incredible honey straight to you in Merrylands. Once you taste the difference, you\u2019ll never go back to supermarket honey.",
  ],
} as const;

export const PAYMENT_COPY = {
  label: "How to Pay",
  title: "No fuss. No apps. Just simple payment.",
  cash: {
    title: "Cash on Pickup",
    preferred: true,
    body: "Bring the exact amount when you collect \u2014 $30 for one tub, $50 for two. Text us first to lock in your pickup time.",
  },
  bank: {
    title: "Bank Transfer",
    body: "Transfer before pickup and text us a screenshot to 0432 806 679. We\u2019ll confirm the moment it lands.",
  },
} as const;

export const CONTACT_COPY = {
  label: "Don\u2019t Miss Out",
  title: "Your tub is waiting.",
  body: "Each batch comes direct from the farm and stock is limited. Text us now to reserve yours before it\u2019s gone \u2014 we\u2019ll sort out a pickup time that works for you.",
  note: "Just SMS your name + how many tubs. That\u2019s it.",
} as const;

export const IMAGES = {
  label: "/images/label.jpg",
  honeycomb: "/images/honeycomb.jpg",
  hills: "/images/hills.jpg",
  tubs: "/images/tubs.jpg",
  farm: "/images/farm.jpg",
} as const;
