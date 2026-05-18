import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema, BASE_URL } from "@/lib/metadata"
import { buildOfferCatalogSchema, buildSpeakableSchema, buildFAQPageSchema } from "@/lib/seoSchemas"

export const revalidate = 3600

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/precios',
    titleEs: 'Precios — Servicios de Marketing Digital en Lima, Perú | 3R Core',
    titleEn: 'Pricing — Digital Marketing Services in Lima, Peru | 3R Core',
    descriptionEs: 'Precios transparentes de marketing digital en Lima, Perú. Branding desde S/500, Social Media desde S/1,500/mes, SEO desde S/1,500/mes, Google Ads desde S/1,800/mes y desarrollo web a medida. Sin permanencia obligatoria, reportes mensuales y entregables claros.',
    descriptionEn: 'Transparent digital marketing pricing in Lima, Peru. Branding from S/500 (~$135 USD), Social Media from S/1,500/mo (~$400 USD), SEO from S/1,500/mo, Google Ads from S/1,800/mo (~$480 USD) and custom web development. No mandatory lock-in, monthly reports and clear deliverables.',
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
    { name: isEn ? 'Branding starter package' : 'Paquete branding inicial', priceEs: 500, priceEn: 135, serviceType: 'Branding', path: '/servicios/branding', descriptionEs: 'Logotipo, paleta cromática y aplicaciones esenciales. Entrega en 7 días.', descriptionEn: 'Logo, color palette and essential applications. 7-day delivery.' },
    { name: isEn ? 'Social media management — basic' : 'Manejo de redes sociales — básico', priceEs: 1500, priceEn: 400, serviceType: 'Social Media Management', path: '/servicios/socialmedia', descriptionEs: 'Estrategia, diseño de posts, Reels, copy y reportes mensuales para 1 red.', descriptionEn: 'Strategy, post design, Reels, copy and monthly reports for one network.' },
    { name: isEn ? 'SEO positioning — basic' : 'Posicionamiento SEO — básico', priceEs: 1500, priceEn: 400, serviceType: 'SEO', path: '/posicionamiento-seo', descriptionEs: 'Auditoría, keyword research, optimización on-page, contenidos y reporte mensual.', descriptionEn: 'Audit, keyword research, on-page optimization, content and monthly report.' },
    { name: isEn ? 'Google Ads management — basic' : 'Gestión Google Ads — básico', priceEs: 1800, priceEn: 480, serviceType: 'Google Ads / SEM', path: '/servicios/google-ads', descriptionEs: 'Configuración, optimización y reporte mensual de campañas Search/PMax.', descriptionEn: 'Setup, optimization and monthly reporting of Search/PMax campaigns.' },
    { name: isEn ? 'Custom landing page' : 'Landing page a medida', priceEs: 2500, priceEn: 670, serviceType: 'Web Development', path: '/servicios/web-development', descriptionEs: 'Landing page hecha a medida con SEO on-page y Core Web Vitals optimizados.', descriptionEn: 'Custom landing page with on-page SEO and Core Web Vitals optimized.' },
  ])

  const pricingFAQ = isEn ? [
    { question: 'Do prices include taxes (IGV) in Peru?', answer: 'Prices shown are net. Peruvian invoices add 18% IGV.' },
    { question: 'Is there a mandatory lock-in period?', answer: 'No. Our monthly services work on a recurring basis but can be canceled with 30 days notice.' },
    { question: 'Does the price include the ad budget for Google Ads?', answer: 'No. The S/1,800/month price is the management fee. The advertising budget is paid directly to Google and we recommend a minimum of S/1,500/month for usable data.' },
    { question: 'Can I combine services for a discount?', answer: 'Yes. Combined packages (branding + social + SEO, or full digital strategy) get a 10–20% discount versus contracting each service separately.' },
    { question: 'Do you accept payments in USD?', answer: 'Yes. Clients in the United States can pay in USD via wire transfer, Stripe or Wise.' },
  ] : [
    { question: '¿Los precios incluyen IGV en Perú?', answer: 'Los precios mostrados son netos. Las facturas peruanas suman 18% de IGV.' },
    { question: '¿Hay permanencia mínima obligatoria?', answer: 'No. Nuestros servicios mensuales son recurrentes pero pueden cancelarse con 30 días de aviso.' },
    { question: '¿El precio de Google Ads incluye el presupuesto de pauta?', answer: 'No. El precio de S/1,800/mes es el fee de gestión. El presupuesto de pauta se paga directamente a Google y recomendamos un mínimo de S/1,500/mes para data usable.' },
    { question: '¿Puedo combinar servicios y obtener descuento?', answer: 'Sí. Los paquetes combinados (branding + social + SEO o estrategia digital completa) tienen un descuento de 10–20% vs contratar cada servicio por separado.' },
    { question: '¿Aceptan pagos en dólares?', answer: 'Sí. Los clientes en Estados Unidos pueden pagar en USD vía wire transfer, Stripe o Wise.' },
  ]
  const faqSchema: any = buildFAQPageSchema(pricingFAQ)
  faqSchema.speakable = buildSpeakableSchema(['h1', 'h2', '.faq-question', '.faq-answer'])

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([pricingPageSchema, offerCatalog, faqSchema, breadcrumbSchema]) }}
      />
      {children}
    </>
  )
}
