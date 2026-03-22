import type { Metadata } from "next";
import "./globals.css";

// Update this when you have a domain
const SITE_URL = "https://hiveandharvesthoney.com.au";

export const metadata: Metadata = {
  title: "Hive & Harvest | Pure Raw Australian Honey | Merrylands NSW",
  description:
    "Taste the difference real honey makes. Small-batch, raw, unfiltered Australian honey with zero preservatives. 1 tub $30, 2 tubs $50. Pickup in Merrylands, Western Sydney.",
  keywords: [
    "raw honey",
    "Australian honey",
    "pure honey",
    "organic honey",
    "Merrylands honey",
    "Western Sydney honey",
    "unfiltered honey",
    "preservative free honey",
    "local honey NSW",
    "raw unfiltered honey Sydney",
    "buy honey near me",
    "natural honey Australia",
    "small batch honey",
    "Hive and Harvest",
  ],
  authors: [{ name: "Hive & Harvest" }],
  creator: "Hive & Harvest",
  publisher: "Hive & Harvest",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hive & Harvest | Pure Raw Australian Honey",
    description:
      "Small-batch, raw, unfiltered honey from Australian farms. No preservatives, no additives. Pickup in Merrylands, NSW. From $30 per tub.",
    url: SITE_URL,
    siteName: "Hive & Harvest",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hive & Harvest | Pure Raw Australian Honey",
    description:
      "Small-batch, raw, unfiltered honey from Aussie farms. Zero preservatives. Pickup in Merrylands NSW.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "food",
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Hive & Harvest",
      description:
        "Small-batch, raw, unfiltered Australian honey. Locally sourced from Aussie farms with zero preservatives or additives.",
      url: SITE_URL,
      telephone: "+61493324958",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Merrylands",
        addressRegion: "NSW",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -33.8333,
        longitude: 150.9833,
      },
      priceRange: "$30-$50",
      currenciesAccepted: "AUD",
      paymentAccepted: "Cash, Bank Transfer",
      areaServed: {
        "@type": "City",
        name: "Western Sydney",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Honey Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Raw Australian Honey - 1 Tub",
              description:
                "Thick, golden, raw Australian honey. Preservative-free and unfiltered.",
              category: "Honey",
            },
            price: "30.00",
            priceCurrency: "AUD",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Raw Australian Honey - 2 Tubs",
              description:
                "Two tubs of raw Australian honey. Save $10 when you buy two.",
              category: "Honey",
            },
            price: "50.00",
            priceCurrency: "AUD",
            availability: "https://schema.org/InStock",
          },
        ],
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Hive & Harvest",
      url: SITE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+61493324958",
        contactType: "sales",
        areaServed: "AU",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Hive & Harvest",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
