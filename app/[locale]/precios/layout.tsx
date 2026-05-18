import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema, BASE_URL } from "@/lib/metadata"
import { buildOfferCatalogSchema, buildSpeakableSchema } from "@/lib/seoSchemas"

export const revalidate = 3600

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/precios',
    titleEs: 'Precios — Servicios de Marketing Digital en Lima, Perú | 3R Core',
    titleEn: 'Pricing — Digital Marketing Services in Lima, Peru | 3R Core',
    descriptionEs: 'Precios referenciales de marketing digital en Lima, Perú: branding desde S/500, social media y SEO desde S/1,500/mes y gestión de Google Ads desde S/1,800/mes. Precios netos, las facturas peruanas suman 18% de IGV.',
    descriptionEn: 'Reference digital marketing pricing in Lima, Peru: branding from S/500 (~$135 USD), social media and SEO from S/1,500/month (~$400 USD) and Google Ads management from S/1,800/month (~$480 USD). Net prices, Peruvian invoices add 18% VAT.',
  })
}

export default async function PreciosLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const isEn = locale === 'en'

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: isEn ? 'Home' : 'Inicio', path: '' },
      { name: isEn ? 'Pricing' : 'Precios', path: '/precios' },
    ],
    locale
  )

  const offerCatalog = buildOfferCatalogSchema(locale, [
    { name: isEn ? 'Branding starter package' : 'Paquete branding inicial', priceEs: 500, priceEn: 135, serviceType: 'Branding', path: '/servicios/branding', descriptionEs: 'Logotipo, paleta cromática y aplicaciones esenciales con entrega en 7 días.', descriptionEn: 'Logo, color palette and essential applications with 7-day delivery.' },
    { name: isEn ? 'Social media management — basic' : 'Manejo de redes sociales — básico', priceEs: 1500, priceEn: 400, serviceType: 'Social Media Management', path: '/servicios/socialmedia', descriptionEs: 'Estrategia, diseño de posts, Reels, copy y reportes mensuales para 1 red social.', descriptionEn: 'Strategy, post design, Reels, copy and monthly reports for one network.' },
    { name: isEn ? 'SEO positioning — basic' : 'Posicionamiento SEO — básico', priceEs: 1500, priceEn: 400, serviceType: 'SEO', path: '/posicionamiento-seo', descriptionEs: 'Auditoría, keyword research, optimización on-page, contenidos y reporte mensual.', descriptionEn: 'Audit, keyword research, on-page optimization, content and monthly report.' },
    { name: isEn ? 'Google Ads management — basic' : 'Gestión Google Ads — básico', priceEs: 1800, priceEn: 480, serviceType: 'Google Ads / SEM', path: '/servicios/google-ads', descriptionEs: 'Fee de gestión de campañas Search, Performance Max, YouTube, Display y Shopping (no incluye pauta).', descriptionEn: 'Management fee for Search, Performance Max, YouTube, Display and Shopping campaigns (ad spend not included).' },
  ])

  const pricingPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/${locale}/precios#webpage`,
    "url": `${BASE_URL}/${locale}/precios`,
    "name": isEn ? 'Pricing — 3R Core' : 'Precios — 3R Core',
    "inLanguage": isEn ? 'en' : 'es',
    "isPartOf": { "@id": `${BASE_URL}/#website` },
    "about": { "@id": `${BASE_URL}/#organization` },
    "speakable": buildSpeakableSchema(['h1', 'h2', '.pricing-card']),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([pricingPageSchema, offerCatalog, breadcrumbSchema]) }}
      />
      {children}
    </>
  )
}
