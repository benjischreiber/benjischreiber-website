import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dr. Benji Schreiber | Private Consultant Rheumatologist, London",
    template: "%s | Dr. Benji Schreiber",
  },
  description:
    "Dr. Benji Schreiber MBBS MA MD FRCP — Private Consultant Rheumatologist in North London. Specialist in inflammatory arthritis, connective tissue diseases, lupus, scleroderma, and general rheumatology.",
  keywords: [
    "rheumatologist London",
    "private rheumatologist",
    "consultant rheumatologist",
    "Dr Benji Schreiber",
    "rheumatology Golders Green",
    "arthritis specialist London",
    "lupus specialist",
    "scleroderma specialist",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Dr. Benji Schreiber",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": ["Physician", "MedicalBusiness"],
  "name": "Dr. Benji Schreiber",
  "description": "Private Consultant Rheumatologist in North London. Specialist in inflammatory arthritis, connective tissue diseases, lupus, scleroderma, pulmonary hypertension and general rheumatology.",
  "url": "https://www.benjischreiber.com",
  "telephone": "+442084586775",
  "email": "info@benjischreiber.com",
  "medicalSpecialty": "Rheumatology",
  "image": "https://www.benjischreiber.com/images/benji.jpg",
  "identifier": {
    "@type": "PropertyValue",
    "name": "GMC",
    "value": "4742768"
  },
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MBBS", "recognizedBy": { "@type": "Organization", "name": "University College London" } },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MD (Research) — Pulmonary Hypertension & Connective Tissue Diseases", "recognizedBy": { "@type": "Organization", "name": "University College London" } },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MA Clinical Education", "recognizedBy": { "@type": "Organization", "name": "University College London" } },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "FRCP", "recognizedBy": { "@type": "Organization", "name": "Royal College of Physicians, London" } }
  ],
  "affiliation": [
    { "@type": "Hospital", "name": "Royal Free Hospital", "address": { "@type": "PostalAddress", "addressLocality": "Hampstead", "addressRegion": "London" } },
    { "@type": "EducationalOrganization", "name": "University College London" }
  ],
  "location": [
    {
      "@type": "MedicalClinic",
      "name": "Wellington Diagnostics and Outpatients Centre",
      "address": { "@type": "PostalAddress", "streetAddress": "Roman House, 296 Golders Green Road", "addressLocality": "London", "postalCode": "NW11 9PY", "addressCountry": "GB" }
    },
    {
      "@type": "MedicalClinic",
      "name": "Hospital of St John and St Elizabeth",
      "address": { "@type": "PostalAddress", "streetAddress": "60 Grove End Road", "addressLocality": "London", "postalCode": "NW8 9NH", "addressCountry": "GB" }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "110",
    "bestRating": "5"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
