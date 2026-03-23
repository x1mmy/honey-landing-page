import type { Metadata } from "next";
import "./globals.css";

// Update this when you have a domain
const SITE_URL = "https://hiveandharvesthoney.com.au";

export const metadata: Metadata = {
  title: "Hive & Harvest | Sandy Hills Raw Eucalyptus Honey | Merrylands NSW",
  description:
    "Sandy Hills Honey — pure raw eucalyptus honey, cold extracted and hand poured from a 965-acre family farm near Tamworth NSW. No additives, no preservatives, no chemicals. Handmade for 60+ years. 1 tub $30, 2 tubs $50. Pickup in Merrylands, Western Sydney.",
  keywords: [
    "Sandy Hills Honey",
    "raw honey",
    "eucalyptus honey",
    "Australian honey",
    "pure honey",
    "organic honey",
    "Merrylands honey",
    "Tamworth honey",
    "Western Sydney honey",
    "cold extracted honey",
    "hand poured honey",
    "raw unfiltered honey",
    "preservative free honey",
    "no chemicals honey",
    "buy honey near me",
    "natural honey Australia",
    "small batch honey",
    "Hive and Harvest",
    "bush honey NSW",
    "unadulterated honey",
  ],
  authors: [{ name: "Hive & Harvest" }],
  creator: "Hive & Harvest",
  publisher: "Hive & Harvest",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hive & Harvest | Sandy Hills Pure Raw Eucalyptus Honey",
    description:
      "Cold extracted, hand poured eucalyptus honey from a 965-acre family farm near Tamworth NSW. No additives, no preservatives, no heat treatment. Handmade for 60+ years. Pickup in Merrylands.",
    url: SITE_URL,
    siteName: "Hive & Harvest",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hive & Harvest | Sandy Hills Raw Eucalyptus Honey",
    description:
      "Pure raw eucalyptus honey from a Tamworth family farm. Cold extracted, hand poured, zero chemicals. Pickup in Merrylands NSW.",
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
        "Sandy Hills Honey — pure raw eucalyptus honey, cold extracted and hand poured from a 965-acre family farm 45km south-east of Tamworth in North West NSW. No additives, no preservatives, no heat treatment, no chemicals, no sugar fed to bees. Handmade by hand the same way the family has done for over 60 years.",
      url: SITE_URL,
      telephone: "+61432806679",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Merrylands",
        addressRegion: "NSW",
        addressCountry: "AU",
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
        name: "Sandy Hills Honey Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Sandy Hills Raw Eucalyptus Honey - 1 Tub",
              description:
                "Pure raw eucalyptus honey, cold extracted and hand poured from a 965-acre family farm near Tamworth NSW. No additives, no preservatives, no heat treatment, no chemicals.",
              category: "Honey",
              brand: {
                "@type": "Brand",
                name: "Sandy Hills Honey",
              },
              countryOfOrigin: {
                "@type": "Country",
                name: "Australia",
              },
            },
            price: "30.00",
            priceCurrency: "AUD",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Sandy Hills Raw Eucalyptus Honey - 2 Tubs",
              description:
                "Two tubs of pure raw eucalyptus honey. Save $10 when you buy two. Cold extracted, hand poured, unadulterated.",
              category: "Honey",
              brand: {
                "@type": "Brand",
                name: "Sandy Hills Honey",
              },
              countryOfOrigin: {
                "@type": "Country",
                name: "Australia",
              },
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
        telephone: "+61432806679",
        contactType: "sales",
        areaServed: "AU",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Hive & Harvest — Sandy Hills Honey",
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
