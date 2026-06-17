import type { Metadata } from "next";
import LandingClient from "./LandingClient";

const BASE_URL = "https://3rcore.com";

export const metadata: Metadata = {
  title:
    "Google Ads en Lima | 3R Core — Más clientes, menos presupuesto quemado",
  description:
    "Agencia de performance y Google Ads en Lima. Convertimos tu inversión en clientes reales con campañas medibles, ROAS claro y reportes honestos. Pide tu diagnóstico gratis.",
  alternates: {
    canonical: `${BASE_URL}/google-ads-lima`,
  },
  openGraph: {
    title: "Google Ads en Lima | 3R Core",
    description:
      "Más clientes, menos presupuesto quemado. Campañas de Google Ads y performance con ROI medible en Lima, Perú.",
    url: `${BASE_URL}/google-ads-lima`,
    siteName: "3R Core",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og/default.jpg`,
        width: 1200,
        height: 630,
        alt: "3R Core — Google Ads en Lima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads en Lima | 3R Core",
    description:
      "Más clientes, menos presupuesto quemado. Campañas de Google Ads con ROI medible en Lima.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Gestión de campañas Google Ads",
  provider: {
    "@type": "Organization",
    name: "3R Core",
    url: BASE_URL,
    areaServed: "Lima, Perú",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Las Caobas 170, Of. 400, Urb. El Remanso",
      addressLocality: "La Molina",
      addressRegion: "Lima",
      addressCountry: "PE",
    },
    telephone: "+51987216703",
  },
  areaServed: { "@type": "City", name: "Lima" },
  url: `${BASE_URL}/google-ads-lima`,
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingClient />
    </>
  );
}
