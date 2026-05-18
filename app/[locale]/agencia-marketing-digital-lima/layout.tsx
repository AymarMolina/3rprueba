import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema, BASE_URL } from "@/lib/metadata"
import { buildServiceItemList, buildSpeakableSchema, buildFAQPageSchema } from "@/lib/seoSchemas"

export const revalidate = 3600

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/agencia-marketing-digital-lima',
    titleEs: 'Agencia de Marketing Digital en Lima, Perú — Branding, SEO, Google Ads, Redes y Web | 3R Core',
    titleEn: 'Digital Marketing Agency in Lima, Peru — Branding, SEO, Google Ads, Social Media & Web | 3R Core',
    descriptionEs: '3R Core es una agencia de marketing digital en Lima, Perú con sede en La Molina. Ofrecemos branding, manejo de redes sociales, Google Ads, posicionamiento SEO y desarrollo web para empresas en Perú y Estados Unidos. Reportes mensuales y resultados medibles desde S/500.',
    descriptionEn: '3R Core is a digital marketing agency in Lima, Peru headquartered in La Molina. We offer branding, social media management, Google Ads, SEO positioning and web development for companies in Peru and the United States. Monthly reports and measurable results from S/500 (~$135 USD).',
    ogImage: {
      url: 'https://3rcore.com/og/default.jpg',
      width: 1200,
      height: 630,
      alt: '3R Core - Agencia de Marketing Digital en Lima, Perú',
    },
  })
}

export default async function LimaLandingLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const isEn = locale === 'en'

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: isEn ? 'Home' : 'Inicio', path: '' },
      { name: isEn ? 'Digital Marketing Agency in Lima' : 'Agencia de Marketing Digital en Lima', path: '/agencia-marketing-digital-lima' },
    ],
    locale
  )

  const itemList = buildServiceItemList({
    locale,
    items: [
      { name: isEn ? 'Branding & Visual Identity in Lima' : 'Branding e Identidad de Marca en Lima', path: '/servicios/branding', description: isEn ? 'Logo, brand manual and corporate identity for companies in Lima.' : 'Logotipo, manual de marca e identidad corporativa para empresas en Lima.' },
      { name: isEn ? 'Social Media Management in Lima' : 'Manejo de Redes Sociales en Lima', path: '/servicios/socialmedia', description: isEn ? 'Instagram, TikTok, Facebook and LinkedIn content and community management.' : 'Estrategia y community management para Instagram, TikTok, Facebook y LinkedIn.' },
      { name: isEn ? 'Google Ads in Lima' : 'Google Ads en Lima', path: '/servicios/google-ads', description: isEn ? 'Search, Performance Max, YouTube, Display and Shopping campaigns.' : 'Campañas Search, Performance Max, YouTube, Display y Shopping.' },
      { name: isEn ? 'SEO Lima' : 'SEO en Lima', path: '/posicionamiento-seo', description: isEn ? 'Organic SEO and keyword positioning on Google for the Lima market.' : 'Posicionamiento orgánico en Google para el mercado de Lima.' },
      { name: isEn ? 'Web Design Lima' : 'Diseño Web Lima', path: '/servicios/web-development', description: isEn ? 'Landing pages, corporate sites and e-commerce optimized for SEO and Core Web Vitals.' : 'Landing pages, sitios corporativos y e-commerce optimizados para SEO y Core Web Vitals.' },
    ],
  })

  const localFAQ = isEn ? [
    { question: 'Where is 3R Core located in Lima?', answer: 'Our office is at Calle Las Caobas 170, Ofic. 400, Urb El Remanso, La Molina, Lima 15024, Peru. We work remotely with clients across Lima, Peru and the United States.' },
    { question: 'Which digital marketing services do you offer in Lima?', answer: 'Branding, social media management, Google Ads, SEO positioning, web development and e-commerce in Lima and across Peru.' },
    { question: 'How much does a digital marketing agency cost in Lima?', answer: 'Our packages start from S/500 (~$135 USD) for branding projects and from S/1,500/month (~$400 USD) for social media management and SEO. Google Ads management fee starts at S/1,800/month.' },
    { question: 'Do you only work in Lima or also in other Peruvian cities?', answer: 'We are based in La Molina, Lima, but work remotely with companies across all Peru and the United States.' },
    { question: 'How long does it take to see SEO results in Lima?', answer: 'For competitive Lima-based queries, first organic ranking movements appear at month 2–3 and stable top-10 results typically arrive between months 4 and 6.' },
    { question: 'Which industries do you work with in Lima?', answer: 'Restaurants, healthcare clinics, real estate, B2B services, retail, e-commerce, startups and education are our most frequent verticals in Lima.' },
  ] : [
    { question: '¿Dónde está ubicada la agencia 3R Core en Lima?', answer: 'Nuestra oficina está en Calle Las Caobas 170, Ofic. 400, Urb El Remanso, La Molina, Lima 15024, Perú. Trabajamos de manera remota con clientes en todo Lima, Perú y Estados Unidos.' },
    { question: '¿Qué servicios de marketing digital ofrecen en Lima?', answer: 'Branding, manejo de redes sociales, Google Ads, posicionamiento SEO, desarrollo web y e-commerce en Lima y todo el Perú.' },
    { question: '¿Cuánto cuesta una agencia de marketing digital en Lima?', answer: 'Nuestros paquetes inician desde S/500 para proyectos de branding y desde S/1,500/mes para manejo de redes sociales y SEO. El fee de gestión de Google Ads arranca en S/1,800/mes.' },
    { question: '¿Trabajan solo en Lima o también en otras ciudades del Perú?', answer: 'Estamos basados en La Molina, Lima, pero trabajamos de manera remota con empresas de todo el Perú y Estados Unidos.' },
    { question: '¿Cuánto tarda en verse el SEO en Lima?', answer: 'Para búsquedas competitivas en Lima, los primeros movimientos orgánicos aparecen entre el mes 2 y 3, y los resultados top-10 estables suelen llegar entre los meses 4 y 6.' },
    { question: '¿Con qué industrias trabajan en Lima?', answer: 'Restaurantes, clínicas, inmobiliaria, servicios B2B, retail, e-commerce, startups y educación son nuestros sectores más frecuentes en Lima.' },
  ]
  const faqSchema: any = buildFAQPageSchema(localFAQ)
  faqSchema.speakable = buildSpeakableSchema(['h1', 'h2', '.faq-question', '.faq-answer'])

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/${locale}/agencia-marketing-digital-lima#localbusiness`,
    "name": "3R Core - Agencia de Marketing Digital en Lima",
    "url": `${BASE_URL}/${locale}/agencia-marketing-digital-lima`,
    "image": `${BASE_URL}/og/default.jpg`,
    "logo": `${BASE_URL}/icons/LogoFull.webp`,
    "telephone": "+51",
    "priceRange": "S/500 - S/15,000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Las Caobas 170, Ofic. 400, Urb El Remanso",
      "addressLocality": "La Molina",
      "addressRegion": "Lima",
      "postalCode": "15024",
      "addressCountry": "PE"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": "-12.0719", "longitude": "-76.9468" },
    "areaServed": [
      { "@type": "City", "name": "Lima" },
      { "@type": "City", "name": "La Molina" },
      { "@type": "City", "name": "Miraflores" },
      { "@type": "City", "name": "San Isidro" },
      { "@type": "City", "name": "Surco" },
      { "@type": "Country", "name": "PE" },
      { "@type": "Country", "name": "US" },
    ],
    "sameAs": [],
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00",
    }],
    "speakable": buildSpeakableSchema(['h1', 'h2', '.local-intro']),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, itemList, faqSchema, breadcrumbSchema]) }}
      />
      {children}
    </>
  )
}
