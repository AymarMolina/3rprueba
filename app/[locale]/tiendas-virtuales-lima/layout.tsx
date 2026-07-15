import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema, BASE_URL } from "@/lib/metadata"
import { buildFAQPageSchema, buildSpeakableSchema, buildServiceSchema } from "@/lib/seoSchemas"

export const revalidate = 3600

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/tiendas-virtuales-lima',
    titleEs: 'Agencia de Tiendas Virtuales en Lima, Perú — Crea tu Tienda Online | 3R Core',
    titleEn: 'Online Store / E-commerce Agency in Lima, Peru — Build Your Store | 3R Core',
    descriptionEs: 'Agencia de tiendas virtuales en Lima: creamos tu tienda online en Shopify, WooCommerce o Tiendanube con pagos locales (Culqi, Niubiz, Izipay, Yape), SEO técnico y lista para vender. Desde S/1,500.',
    descriptionEn: 'Online store agency in Lima, Peru: we build your e-commerce on Shopify, WooCommerce or Tiendanube with local payments, technical SEO and ready to sell. From $420.',
    ogImage: {
      url: 'https://3rcore.com/og/default.jpg',
      width: 1200,
      height: 630,
      alt: '3R Core - Agencia de Tiendas Virtuales en Lima, Perú',
    },
  })
}

export default async function TiendasVirtualesLimaLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const isEn = locale === 'en'

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: isEn ? 'Home' : 'Inicio', path: '' },
      { name: isEn ? 'Online Store Agency in Lima' : 'Agencia de Tiendas Virtuales en Lima', path: '/tiendas-virtuales-lima' },
    ],
    locale
  )

  const serviceSchema = buildServiceSchema({
    locale,
    path: '/tiendas-virtuales-lima',
    nameEs: 'Agencia de Tiendas Virtuales (E-commerce) en Lima',
    nameEn: 'Online Store / E-commerce Agency in Lima',
    descriptionEs: 'Diseño y desarrollo de tiendas virtuales para empresas en Lima y Perú: Shopify, WooCommerce y Tiendanube, pasarelas de pago locales, SEO técnico, velocidad y conversión, con soporte y capacitación.',
    descriptionEn: 'Design and development of online stores for companies in Lima and Peru: Shopify, WooCommerce and Tiendanube, local payment gateways, technical SEO, speed and conversion, with support and training.',
    serviceType: 'E-commerce development / Online store creation',
    priceRange: 'S/1,500 - S/25,000',
    offerPriceEs: 1500,
    offerPriceEn: 420,
    areaServed: ['PE', 'US'],
  })

  const faq = buildFAQPageSchema([
    {
      question: isEn ? 'How much does it cost to build an online store in Peru?' : '¿Cuánto cuesta crear una tienda virtual en Perú?',
      answer: isEn
        ? 'Professional implementation starts from $420 and includes design, catalog upload, payments and setup. Larger catalogs, integrations or custom development range from $1,100 to $7,000. The platform monthly cost is separate (Shopify from $39/mo, Tiendanube from ~$24/mo) or hosting for WooCommerce.'
        : 'La implementación profesional arranca desde S/1,500 e incluye diseño, carga de catálogo, pagos y configuración. Con más productos, integraciones o desarrollo a medida va de S/4,000 a S/25,000. Aparte está la mensualidad de la plataforma (Shopify desde USD 39/mes, Tiendanube desde S/89/mes) o el hosting si es WooCommerce.',
    },
    {
      question: isEn ? 'Shopify, WooCommerce or Tiendanube — which is best for me?' : '¿Shopify, WooCommerce o Tiendanube: cuál me conviene?',
      answer: isEn
        ? 'It depends. Shopify is the fastest and most stable to start selling. WooCommerce gives full control and custom integrations. Tiendanube is strong on local payments and accessible plans. In the diagnosis we recommend the right one, without bias.'
        : 'Depende de tu caso. Shopify es la más rápida y estable para vender ya. WooCommerce da control total e integraciones a medida. Tiendanube es fuerte en pagos locales y planes accesibles. En el diagnóstico te recomendamos la correcta, sin sesgo.',
    },
    {
      question: isEn ? 'Do you integrate Peruvian payments like Yape, Culqi or Niubiz?' : '¿Integran pagos peruanos como Yape, Culqi o Niubiz?',
      answer: isEn
        ? 'Yes. We configure and test Culqi, Niubiz, Izipay, Yape, PagoEfectivo and Mercado Pago based on your platform, so customers pay the way they are used to in Peru.'
        : 'Sí. Configuramos y probamos Culqi, Niubiz, Izipay, Yape, PagoEfectivo y Mercado Pago según tu plataforma, para que tus clientes paguen como están acostumbrados en Perú.',
    },
    {
      question: isEn ? 'How long until my store is ready?' : '¿En cuánto tiempo tengo mi tienda lista?',
      answer: isEn
        ? 'A standard Shopify or Tiendanube store is usually ready in 2 to 4 weeks. A custom WooCommerce store or one with many integrations can take 5 to 8 weeks, depending on catalog size and content delivery.'
        : 'Una tienda estándar con Shopify o Tiendanube suele estar lista en 2 a 4 semanas. Una tienda WooCommerce a medida o con muchas integraciones puede tomar de 5 a 8 semanas, según la cantidad de productos y la entrega de contenido.',
    },
    {
      question: isEn ? 'Will the store show up on Google?' : '¿La tienda va a aparecer en Google?',
      answer: isEn
        ? 'We build it with baseline technical SEO (URLs, product schema, speed, sitemap). To truly rank for buying searches we recommend adding our SEO service and/or Google Ads and Google Shopping campaigns.'
        : 'La construimos con SEO técnico de base (URLs, schema de producto, velocidad, sitemap). Para posicionar de verdad y competir por búsquedas de compra recomendamos sumar nuestro servicio de posicionamiento SEO y/o campañas de Google Ads y Google Shopping.',
    },
    {
      question: isEn ? 'Do you work with businesses outside Lima?' : '¿Trabajan con negocios fuera de Lima?',
      answer: isEn
        ? 'Yes, we work remotely with companies across Peru. The whole process (design, reviews, training) happens over video calls and shared access.'
        : 'Sí, trabajamos con empresas de todo el Perú de forma remota. Todo el proceso (diseño, revisiones, capacitación) se hace por videollamada y accesos compartidos.',
    },
  ])

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/${locale}/tiendas-virtuales-lima#webpage`,
    "url": `${BASE_URL}/${locale}/tiendas-virtuales-lima`,
    "name": isEn ? 'Online Store Agency in Lima — 3R Core' : 'Agencia de Tiendas Virtuales en Lima — 3R Core',
    "inLanguage": isEn ? 'en' : 'es',
    "isPartOf": { "@id": `${BASE_URL}/#website` },
    "about": { "@id": `${BASE_URL}/#organization` },
    "speakable": buildSpeakableSchema(['h1', 'h2', '.seo-intro']),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([webPage, serviceSchema, faq, breadcrumbSchema]) }}
      />
      {children}
    </>
  )
}
