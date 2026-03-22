export const BUSINESS = {
  name: "Hive & Harvest",
  tagline: "Nature's Liquid Gold, Straight From the Hive",
  phone: "0493 324 958",
  phoneHref: "tel:0493324958",
  location: "Merrylands, NSW",
  bsb: "732-361",
  accountNumber: "880 801",
  paymentReference: "Your name + HONEY",
} as const;

export const PRODUCTS = [
  {
    id: "single",
    label: "1 Tub",
    icon: "\u{1F36F}",
    price: 30,
    description:
      "Thick, golden, and bursting with flavour. One generous tub of raw Australian honey \u2014 perfect for drizzling over toast, stirring into tea, or eating straight off the spoon.",
    featured: false,
    saving: null,
    badge: null,
    priceNote: "Per tub",
  },
  {
    id: "double",
    label: "2 Tubs",
    icon: "\u{1F36F}\u{1F36F}",
    price: 50,
    priceEach: 25,
    saving: 10,
    description:
      "Double the sweetness. Keep one on the counter and one in reserve \u2014 because once you open the first, it won\u2019t last long. Save $10 when you grab two.",
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
    desc: "Send a quick message to 0493 324 958 with your name & order",
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
  { icon: "\u{1F33F}", label: "100% Organic" },
  { icon: "\u{1F41D}", label: "Aussie-Farmed" },
  { icon: "\u2728", label: "Zero Preservatives" },
  { icon: "\u{1F3E1}", label: "Local Pickup \u00B7 Merrylands" },
] as const;

export const ABOUT_PILLS = [
  "\u{1F1E6}\u{1F1FA} Locally Sourced",
  "\u{1F33F} 100% Organic",
  "\u2705 No Additives",
  "\u{1F36F} Raw & Unfiltered",
] as const;

export const HERO_COPY = {
  badge: "Small-Batch Australian Honey",
  titleLine1: "Taste the",
  titleEmphasis: "Difference",
  titleLine2: "Real Honey Makes.",
  subtitle:
    "Thick, golden, and impossibly smooth \u2014 this isn\u2019t supermarket honey. Harvested from Australian hives, untouched by preservatives, and delivered to your hands the way bees intended.",
} as const;

export const ABOUT_COPY = {
  label: "Our Story",
  title: "From the hive to your table \u2014 nothing in between.",
  paragraphs: [
    "We tasted real honey for the first time and everything changed. The richness, the floral notes, the thick golden texture that coats your spoon \u2014 it was nothing like the watered-down stuff on supermarket shelves.",
    "We couldn\u2019t keep it to ourselves. Now we bring this same small-batch, preservative-free honey to families across Western Sydney. Every tub is raw, unfiltered, and packed with natural goodness \u2014 the kind of honey your grandparents grew up on.",
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
    body: "Transfer before pickup and text us a screenshot to 0493 324 958. We\u2019ll confirm the moment it lands.",
  },
} as const;

export const CONTACT_COPY = {
  label: "Don\u2019t Miss Out",
  title: "Your tub is waiting.",
  body: "Each batch is limited. Text us now to reserve yours before it\u2019s gone \u2014 we\u2019ll sort out a pickup time that works for you.",
  note: "Just text your name + how many tubs. That\u2019s it.",
} as const;
