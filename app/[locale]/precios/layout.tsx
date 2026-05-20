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
    titleEn: 'Pricing — Digital Marketing Services for US Clients | 3R Core',
    descriptionEs: 'Precios referenciales de marketing digital en Lima, Perú: branding desde S/500, social media desde S/1,500/mes, SEO S/1,800/mes, Google Ads desde S/1,800/mes y webs desde S/1,800. Precios netos, las facturas peruanas suman 18% de IGV.',
    descriptionEn: 'Reference digital marketing pricing for US-based clients: branding from $500, SEO $500/month, social media $800/month, Google Ads management $800/month and websites from $850. Net prices in US Dollars.',
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
    { name: isEn ? 'Branding starter package' : 'Paquete branding inicial', priceEs: 500, priceEn: 500, serviceType: 'Branding', path: '/servicios/branding', descriptionEs: 'Identidad visual con logotipo, manual de marca, paleta cromática, tipografía y aplicaciones.', descriptionEn: 'Visual identity with logo, brand manual, color palette, typography and applications.' },
    { name: isEn ? 'Social media management' : 'Manejo de redes sociales', priceEs: 1500, priceEn: 800, serviceType: 'Social Media Management', path: '/servicios/socialmedia', descriptionEs: 'TikTok, Instagram, Facebook y LinkedIn con 8–12 piezas mensuales y reporte mensual.', descriptionEn: 'TikTok, Instagram, Facebook and LinkedIn with 8–12 pieces per month and monthly report.' },
    { name: isEn ? 'SEO positioning' : 'Posicionamiento SEO', priceEs: 1800, priceEn: 500, serviceType: 'SEO', path: '/posicionamiento-seo', descriptionEs: 'Auditoría, planificación, optimización, escalamiento y reportes mensuales sin contratos forzosos.', descriptionEn: 'Audit, planning, optimization, scaling and monthly reports with no mandatory contracts.' },
    { name: isEn ? 'Google Ads management' : 'Gestión Google Ads', priceEs: 1800, priceEn: 800, serviceType: 'Google Ads / SEM', path: '/servicios/google-ads', descriptionEs: 'Fee de gestión de Search, Performance Max, YouTube, Display y Shopping. La pauta se paga directamente a Google con un mínimo de S/1,500/mes.', descriptionEn: 'Management fee for Search, Performance Max, YouTube, Display and Shopping. Ad spend paid directly to Google with a minimum of $400/month.' },
    { name: isEn ? 'Landing page' : 'Landing page profesional', priceEs: 1800, priceEn: 850, serviceType: 'Web Development', path: '/servicios/web-development', descriptionEs: 'Landing page profesional con diseño a medida, SEO técnico básico y formulario de contacto.', descriptionEn: 'Professional landing page with custom design, basic technical SEO and contact form.' },
    { name: isEn ? 'Corporate website' : 'Web corporativa', priceEs: 4500, priceEn: 1200, serviceType: 'Web Development', path: '/servicios/web-development', descriptionEs: 'Web corporativa de 5–8 secciones. Rango S/4,500–9,000 según alcance.', descriptionEn: '5–8 section corporate site. Range $1,200–$2,400 depending on scope.' },
    { name: isEn ? 'E-commerce Shopify / WooCommerce' : 'E-commerce Shopify / WooCommerce', priceEs: 6500, priceEn: 1750, serviceType: 'Web Development', path: '/servicios/web-development', descriptionEs: 'Tienda online con catálogo, pasarela de pago (Culqi, Niubiz, Izipay o Mercado Pago), gestión de inventario y panel admin.', descriptionEn: 'Online store with catalog, payment gateway, inventory management and admin panel.' },
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
