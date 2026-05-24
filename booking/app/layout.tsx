import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varaa aika — 3A Service Oy | Book Appointment",
  description: "Varaa autohuoltoaika verkossa. Book your car service appointment online. 3A Service Oy, Espoo.",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "3A Service Oy",
  url: "https://3aservice.fi",
  telephone: "+358449773677",
  email: "info@3aservice.fi",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kivimiehentie 4",
    addressLocality: "Espoo",
    postalCode: "02150",
    addressCountry: "FI",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 60.2055,
    longitude: 24.6559,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "100",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: [
    "Espoo", "Tapiola", "Leppävaara", "Matinkylä", "Olari",
    "Niittykumpu", "Henttaa", "Kilo", "Helsinki", "Vantaa",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Öljynvaihto" }, price: "79", priceCurrency: "EUR" },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ilmastointihuolto" }, price: "39", priceCurrency: "EUR" },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vianhaku" }, price: "69", priceCurrency: "EUR" },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Katsastushuolto" }, price: "99", priceCurrency: "EUR" },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renkaiden kausivaihto" }, price: "35", priceCurrency: "EUR" },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jarruhuolto" }, price: "149", priceCurrency: "EUR" },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jakohihnan vaihto" }, price: "499", priceCurrency: "EUR" },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Määräaikaishuolto" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alusta & alustatyöt" } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
