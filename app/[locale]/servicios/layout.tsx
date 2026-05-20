import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema, BASE_URL } from "@/lib/metadata"
import { buildServiceItemList, buildSpeakableSchema } from "@/lib/seoSchemas"

export const revalidate = 3600

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/servicios',
    titleEs: 'Servicios de Marketing Digital en Lima, Perú — Branding, SEO, Google Ads, Redes y Web | 3R Core',
    titleEn: 'Digital Marketing Services in Lima, Peru — Branding, SEO, Google Ads, Social Media & Web | 3R Core',
    descriptionEs: 'Catálogo completo de servicios de marketing digital de 3R Core en Lima, Perú: branding, manejo de redes sociales, Google Ads, posicionamiento SEO y desarrollo web. Estrategias personalizadas con reportes mensuales y resultados medibles.',
    descriptionEn: 'Full catalog of 3R Core digital marketing services in Lima, Peru: branding, social media management, Google Ads, SEO positioning and web development. Personalized strategies with monthly reports and measurable results.',
  })
}

export default async function ServiciosLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const isEn = locale === 'en'

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: isEn ? 'Home' : 'Inicio', path: '' },
      { name: isEn ? 'Services' : 'Servicios', path: '/servicios' },
    ],
    locale
  )

  const itemList = buildServiceItemList({
    locale,
    items: [
      {
        name: isEn ? 'Branding & Visual Identity' : 'Branding e Identidad de Marca',
        path: '/servicios/branding',
        description: isEn
          ? 'Logo, brand manual, color palette, corporate typography and brand applications. From $500 USD for US clients, delivery in 7 days.'
          : 'Logotipo, manual de marca, paleta cromática, tipografía corporativa y aplicaciones. Desde S/500 con entrega en 7 días.',
      },
      {
        name: isEn ? 'Social Media Management' : 'Manejo de Redes Sociales',
        path: '/servicios/socialmedia',
        description: isEn
          ? 'Content strategy, post design, Reels & TikTok editing, copywriting and community management for Instagram, Facebook, TikTok and LinkedIn. From $800/month for US clients.'
          : 'Estrategia, diseño, Reels y TikToks, copywriting y community management para Instagram, Facebook, TikTok y LinkedIn. Desde S/1,500/mes.',
      },
      {
        name: isEn ? 'Google Ads & SEM' : 'Google Ads y Campañas SEM',
        path: '/servicios/google-ads',
        description: isEn
          ? 'Search, Performance Max, YouTube, Display, Shopping and Remarketing campaigns. Management fee starting at $800/month for US clients.'
          : 'Campañas de Search, Performance Max, YouTube, Display, Shopping y Remarketing. Fee de gestión desde S/1,800/mes.',
      },
      {
        name: isEn ? 'SEO Positioning' : 'Posicionamiento SEO',
        path: '/posicionamiento-seo',
        description: isEn
          ? 'Organic SEO: keyword research, on-page optimization, content strategy, technical SEO, link building and monthly reports. From $500/month for US clients.'
          : 'SEO orgánico: keyword research, on-page, contenidos, SEO técnico, link building y reportes mensuales. Desde S/1,800/mes.',
      },
      {
        name: isEn ? 'Web Design & Development' : 'Diseño y Desarrollo Web',
        path: '/servicios/web-development',
        description: isEn
          ? 'Landing pages, corporate sites, e-commerce (Shopify/WooCommerce), e-learning and service sites with on-page SEO and Core Web Vitals optimization.'
          : 'Landing pages, sitios corporativos, e-commerce (Shopify/WooCommerce), e-learning y sitios de servicios con SEO on-page y Core Web Vitals optimizados.',
      },
    ],
  })

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE_URL}/${locale}/servicios#collectionpage`,
    "url": `${BASE_URL}/${locale}/servicios`,
    "name": isEn ? 'Digital Marketing Services in Lima, Peru' : 'Servicios de Marketing Digital en Lima, Perú',
    "inLanguage": isEn ? 'en' : 'es',
    "isPartOf": { "@id": `${BASE_URL}/#website` },
    "about": { "@id": `${BASE_URL}/#organization` },
    "hasPart": { "@id": `${BASE_URL}/${locale}/servicios#itemlist` },
    "speakable": buildSpeakableSchema(['h1', 'h2', '.services-intro']),
  }

  const hiddenH1 = isEn
    ? 'Digital marketing services in Lima, Peru: branding, social media, Google Ads, SEO and web development'
    : 'Servicios de marketing digital en Lima, Perú: branding, redes sociales, Google Ads, SEO y desarrollo web'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([collectionPageSchema, itemList, breadcrumbSchema]) }}
      />
      <h1 className="sr-only">{hiddenH1}</h1>
      {children}
    </>
  )
}
