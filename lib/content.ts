export const BUSINESS = {
  name: "Hive & Harvest",
  tagline: "Raw. Local. Honest Honey.",
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
      "One full tub of pure Aussie honey. Perfect to try or stock up the kitchen.",
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
      "Get two tubs and save $10. Share with family or keep one in reserve.",
    featured: true,
    badge: "Best Value",
    priceNote: "Save $10 \u2014 only $25 each",
  },
] as const;

export const ORDER_STEPS = [
  {
    step: 1,
    title: "Choose your tub(s)",
    desc: "1 tub for $30, or 2 tubs for $50",
  },
  {
    step: 2,
    title: "Send us a text",
    desc: "Text 0493 324 958 to reserve your order",
  },
  {
    step: 3,
    title: "Pay your way",
    desc: "Cash on pickup, or BSB transfer with proof",
  },
  {
    step: 4,
    title: "Pick up in Merrylands",
    desc: "We\u2019ll confirm a time that works for you",
  },
] as const;

export const TRUST_ITEMS = [
  { icon: "\u{1F33F}", label: "100% Organic" },
  { icon: "\u{1F41D}", label: "Aussie-Farmed" },
  { icon: "\u2728", label: "No Preservatives" },
  { icon: "\u{1F3E1}", label: "Local Pickup \u00B7 Merrylands" },
] as const;

export const ABOUT_PILLS = [
  "\u{1F1E6}\u{1F1FA} Locally Sourced",
  "\u{1F33F} 100% Organic",
  "\u2705 No Additives",
  "\u{1F36F} Raw & Unfiltered",
] as const;

export const HERO_COPY = {
  badge: "Pure Australian Honey",
  titleLine1: "Raw. Local.",
  titleEmphasis: "Honest",
  titleLine2: "Honey.",
  subtitle:
    "Sourced from Aussie farms and brought straight to your door. No preservatives, no additives \u2014 just pure, golden honey the way nature intended.",
} as const;

export const ABOUT_COPY = {
  label: "Our Story",
  title: "Made with love, straight from the hive.",
  paragraphs: [
    "It started simply \u2014 we found a honey we genuinely loved. Pure, preservative-free, and nothing like what you\u2019d grab off a supermarket shelf. Once you taste the difference, you can\u2019t go back.",
    "We figured if we loved it this much, the people around us deserved to try it too. So we started sharing it \u2014 and now we want to share it with anyone who values knowing exactly what\u2019s in their food.",
  ],
} as const;

export const PAYMENT_COPY = {
  label: "How to Pay",
  title: "Simple & flexible payment.",
  cash: {
    title: "Cash on Pickup",
    preferred: true,
    body: "Bring the exact amount when you come to collect. Exact change appreciated \u2014 $30 for one tub, $50 for two. Just text us first to arrange a time.",
  },
  bank: {
    title: "Bank Transfer",
    body: "Transfer before pickup and send us a screenshot of your proof of payment via text to 0493 324 958. We\u2019ll confirm once received.",
  },
} as const;

export const CONTACT_COPY = {
  label: "Get in Touch",
  title: "Ready to order?",
  body: "Drop us a text to reserve your tub. We\u2019ll get back to you quickly to sort out a pickup time.",
  note: "Text us your name and how many tubs you\u2019d like.",
} as const;
