import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    default: 'Tiger Taxi | Nagpur to Tadoba Premium Cab Service',
    template: '%s | Tiger Taxi'
  },
  description: 'Book premium Nagpur to Tadoba cabs with Tiger Taxi. 10+ years of wildlife transit expertise. Transparent pricing, expert drivers, and 24/7 safari support.',
  keywords: ['Tadoba cab booking', 'Nagpur to Tadoba taxi', 'Tiger Taxi Nagpur', 'Tadoba safari taxi', 'Nagpur airport to Tadoba'],
  openGraph: {
    title: 'Tiger Taxi | Premium Tadoba Expeditions',
    description: 'Nagpur’s most trusted wildlife transit partner for over a decade.',
    url: 'https://tigertaxi.in', // Replace with your actual domain
    siteName: 'Tiger Taxi',
    images: [
      {
        url: '/og-image.jpg', // Create a 1200x630 image with your logo and a tiger
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Tiger Taxi",
    "image": "https://tigertaxi.in/logo.png",
    "@id": "https://tigertaxi.in",
    "url": "https://tigertaxi.in",
    "telephone": "+919876543210",
    "priceRange": "₹3500 - ₹12000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Civil Lines, Near Airport Road",
      "addressLocality": "Nagpur",
      "postalCode": "440001",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1458,
      "longitude": 79.0882
    },
    "servesCrawl": ["Tadoba Andhari Tiger Reserve", "Nagpur", "Chandrapur"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Injecting Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}