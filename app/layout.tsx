import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hive & Harvest – Pure Australian Honey",
  description:
    "Locally sourced, organic, preservative-free Australian honey. Available for pickup in Merrylands, NSW. 1 tub $30, 2 tubs $50.",
  openGraph: {
    title: "Hive & Harvest – Pure Australian Honey",
    description:
      "Raw. Local. Honest honey from Aussie farms. Pickup in Merrylands.",
    type: "website",
  },
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
