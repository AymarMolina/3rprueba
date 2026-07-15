import Link from "next/link"

interface Props { params: Promise<{ locale: string }> }

const COPY = {
  es: {
    eyebrow: '3R Core · Tiendas Virtuales · Lima · Perú',
    h1: 'Agencia de Tiendas Virtuales en Lima, Perú',
    sub: 'Creamos tu tienda online en Shopify, WooCommerce o Tiendanube: pagos locales (Culqi, Niubiz, Izipay, Yape), catálogo cargado, SEO técnico y lista para vender. Desde S/1,500 de implementación, sin plantillas genéricas.',
    cta: 'Cotiza tu tienda online',
    contactPath: '/#contacto',
    why: 'Tienda + SEO + Google Ads bajo un mismo techo',
    whyDesc: 'A diferencia de quienes solo entregan una plantilla vacía, en 3R Core montamos tu e-commerce completo y lo conectamos con posicionamiento SEO y campañas de Google Ads y Google Shopping, para que tu tienda no solo exista: reciba tráfico que compra y venda desde el día uno.',
    pillars: 'Todo lo que dejamos listo en tu tienda',
    pillarsList: [
      { title: 'Plataforma a tu medida', desc: 'Elegimos entre Shopify (velocidad), WooCommerce (control total) o Tiendanube (pagos locales, accesible) según tu catálogo, integraciones y presupuesto — sin sesgo.' },
      { title: 'Pagos peruanos integrados', desc: 'Culqi, Niubiz, Izipay, Yape, PagoEfectivo y Mercado Pago configurados y probados para que cobres sin fricción en Perú.' },
      { title: 'SEO técnico de base', desc: 'URLs limpias, schema de producto, velocidad (Core Web Vitals), sitemap y metadatos para que Google entienda y muestre tu tienda.' },
      { title: 'Catálogo, envíos y medición', desc: 'Carga de productos con variantes y categorías, zonas y tarifas de envío, correos automáticos de pedido y Google Analytics 4 + píxeles listos.' },
    ],
    methodology: 'Cómo trabajamos contigo',
    methodologyList: [
      { step: 'Paso 1', title: 'Diagnóstico y plataforma', desc: 'Entendemos tu negocio, catálogo y objetivos, y recomendamos la plataforma correcta (Shopify, WooCommerce o Tiendanube).' },
      { step: 'Paso 2', title: 'Diseño mobile-first', desc: 'Diseñamos una tienda clara, rápida y pensada para el celular (donde compra la mayoría en Perú) y alineada a tu marca.' },
      { step: 'Paso 3', title: 'Desarrollo e integraciones', desc: 'Montamos la tienda, cargamos el catálogo e integramos pagos locales, envíos, WhatsApp y medición.' },
      { step: 'Paso 4', title: 'Pruebas y lanzamiento', desc: 'Probamos cada flujo de compra en móvil y escritorio, verificamos pagos reales y publicamos tu tienda.' },
      { step: 'Paso 5', title: 'Capacitación y crecimiento', desc: 'Te capacitamos para administrarla y, si quieres, sumamos SEO y Google Ads para escalar las ventas con tráfico que compra.' },
    ],
    coverage: 'Plataformas y pasarelas de pago que integramos',
    coverageList: ['Shopify', 'WooCommerce', 'Tiendanube', 'Culqi', 'Niubiz', 'Izipay', 'Yape', 'PagoEfectivo', 'Mercado Pago', 'Google Analytics 4'],
    pricing: 'Inversión para crear tu tienda virtual',
    pricingDesc: 'Tienda básica (Shopify/Tiendanube) desde S/1,500 · Tienda profesional (WooCommerce) desde S/2,500 · Tienda avanzada desde S/6,500 · E-commerce a medida desde S/12,000. Aparte va la mensualidad de la plataforma y las comisiones de pago. Precios netos; la factura electrónica suma 18% de IGV.',
    contact: 'Cotización gratuita para tu tienda',
    contactCta: 'Cuéntanos qué vendes y a quién. Te recomendamos la plataforma correcta, te damos un presupuesto claro y, si quieres, un plan para traer tráfico que compra con SEO y Google Ads.',
  },
  en: {
    eyebrow: '3R Core · Online Stores · Lima · Peru',
    h1: 'Online Store / E-commerce Agency in Lima, Peru',
    sub: 'We build your online store on Shopify, WooCommerce or Tiendanube: local payments, loaded catalog, technical SEO and ready to sell. From $420 implementation, no generic templates.',
    cta: 'Get a store quote',
    contactPath: '/#contacto',
    why: 'Store + SEO + Google Ads under one roof',
    whyDesc: 'Unlike those who hand over an empty template, 3R Core builds your full e-commerce and connects it with SEO and Google Ads / Google Shopping, so your store doesn\'t just exist — it receives buying traffic and sells from day one.',
    pillars: 'Everything we set up in your store',
    pillarsList: [
      { title: 'The right platform', desc: 'We choose Shopify (speed), WooCommerce (full control) or Tiendanube (local payments, accessible) based on your catalog, integrations and budget.' },
      { title: 'Local payments integrated', desc: 'Culqi, Niubiz, Izipay, Yape, PagoEfectivo and Mercado Pago configured and tested for frictionless checkout in Peru.' },
      { title: 'Baseline technical SEO', desc: 'Clean URLs, product schema, speed (Core Web Vitals), sitemap and metadata so Google understands and shows your store.' },
      { title: 'Catalog, shipping and tracking', desc: 'Product upload with variants and categories, shipping zones and rates, automated order emails and Google Analytics 4 + pixels ready.' },
    ],
    methodology: 'How we work with you',
    methodologyList: [
      { step: 'Step 1', title: 'Diagnosis and platform', desc: 'We understand your business, catalog and goals, and recommend the right platform.' },
      { step: 'Step 2', title: 'Mobile-first design', desc: 'We design a clear, fast, mobile-first store aligned to your brand.' },
      { step: 'Step 3', title: 'Development and integrations', desc: 'We build the store, load the catalog and integrate payments, shipping, WhatsApp and tracking.' },
      { step: 'Step 4', title: 'Testing and launch', desc: 'We test every checkout flow on mobile and desktop, verify real payments and go live.' },
      { step: 'Step 5', title: 'Training and growth', desc: 'We train you and, if you want, add SEO and Google Ads to scale sales with buying traffic.' },
    ],
    coverage: 'Platforms and payment gateways we integrate',
    coverageList: ['Shopify', 'WooCommerce', 'Tiendanube', 'Culqi', 'Niubiz', 'Izipay', 'Yape', 'PagoEfectivo', 'Mercado Pago', 'Google Analytics 4'],
    pricing: 'Investment to build your online store',
    pricingDesc: 'Basic store (Shopify/Tiendanube) from $420 · Professional store (WooCommerce) from $700 · Advanced store from $1,800 · Custom e-commerce from $3,300. Platform monthly fees and payment commissions are separate.',
    contact: 'Free quote for your store',
    contactCta: 'Tell us what you sell and to whom. We recommend the right platform, give you a clear budget and, if you want, a plan to bring buying traffic with SEO and Google Ads.',
  },
}

export default async function TiendasVirtualesLimaPage({ params }: Props) {
  const { locale } = await params
  const t = (COPY as any)[locale === 'en' ? 'en' : 'es']

  return (
    <main className="min-h-screen bg-black text-white">
      <h1 className="sr-only">{t.h1}</h1>
      <section className="px-6 md:px-10 lg:px-20 pt-32 pb-20 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">{t.eyebrow}</p>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{t.h1}</h2>
        <p className="seo-intro text-lg md:text-xl text-white/80 max-w-3xl mb-10">{t.sub}</p>
        <Link href={`/${locale}${t.contactPath}`} className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition">{t.cta}</Link>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.why}</h2>
        <p className="text-white/70 max-w-3xl">{t.whyDesc}</p>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.pillars}</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {t.pillarsList.map((p: any, i: number) => (
            <li key={i} className="border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-white/70">{p.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.methodology}</h2>
        <ol className="space-y-4">
          {t.methodologyList.map((m: any, i: number) => (
            <li key={i} className="border border-white/10 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-1">{m.step}</p>
              <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
              <p className="text-white/70">{m.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.coverage}</h2>
        <ul className="flex flex-wrap gap-2">
          {t.coverageList.map((d: string, i: number) => (
            <li key={i} className="px-4 py-2 border border-white/15 rounded-full text-sm text-white/80">{d}</li>
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.pricing}</h2>
        <p className="text-white/70 max-w-3xl">{t.pricingDesc}</p>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-20 max-w-6xl mx-auto border-t border-white/10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact}</h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8">{t.contactCta}</p>
        <Link href={`/${locale}${t.contactPath}`} className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition">{t.cta}</Link>
      </section>
    </main>
  )
}
