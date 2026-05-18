import Link from "next/link"

interface Props { params: Promise<{ locale: string }> }

const COPY = {
  es: {
    hero: 'Precios de Marketing Digital en Lima, Perú',
    sub: 'Transparencia total. Sin permanencia obligatoria. Reportes mensuales claros. Precios desde S/500 para branding y desde S/1,500/mes para servicios recurrentes.',
    contactCta: 'Conversemos sobre tu proyecto',
    contactPath: '/#contacto',
    note: 'Precios netos en Soles peruanos (S/). Las facturas suman 18% IGV. Clientes en Estados Unidos pueden pagar en USD.',
    tiers: [
      { name: 'Branding inicial', price: 'S/ 500', period: '/ proyecto', desc: 'Logotipo, paleta cromática y aplicaciones esenciales. Entrega en 7 días.', feats: ['Manual de marca básico','Versiones logo (color, monocromo)','Paleta + tipografía','Aplicaciones esenciales'], href: '/servicios/branding', cta: 'Ver branding' },
      { name: 'Social Media básico', price: 'S/ 1,500', period: '/ mes', desc: 'Estrategia, diseño, Reels, copy y reportes mensuales para 1 red social.', feats: ['8–12 piezas / mes','Reels o TikToks editados','Community management','Reporte mensual'], href: '/servicios/socialmedia', cta: 'Ver redes sociales' },
      { name: 'Posicionamiento SEO', price: 'S/ 1,500', period: '/ mes', desc: 'SEO orgánico en Google: auditoría, on-page, contenidos y reportes mensuales.', feats: ['Keyword research','Optimización on-page','Contenidos SEO','Reporte mensual con KPIs'], href: '/posicionamiento-seo', cta: 'Ver SEO', highlight: true },
      { name: 'Google Ads gestión', price: 'S/ 1,800', period: '/ mes', desc: 'Fee de gestión de campañas Search, Performance Max, YouTube, Display y Shopping.', feats: ['Configuración y optimización','Estructura por intención','Tracking de conversiones','Reporte mensual'], href: '/servicios/google-ads', cta: 'Ver Google Ads', extra: '+ pauta mínima S/ 1,500' },
      { name: 'Landing page', price: 'desde S/ 2,500', period: '/ proyecto', desc: 'Landing page a medida con SEO on-page, Core Web Vitals y formulario.', feats: ['Diseño UI a medida','SEO técnico y on-page','Formulario + tracking','Hosting recomendado'], href: '/servicios/web-development', cta: 'Ver desarrollo web' },
      { name: 'E-commerce Shopify/WooCommerce', price: 'desde S/ 4,500', period: '/ proyecto', desc: 'Tienda online con catálogo, pasarela y SEO técnico optimizado.', feats: ['Shopify o WooCommerce','Catálogo y pasarela','SEO de fichas','Capacitación incluida'], href: '/servicios/web-development', cta: 'Ver tiendas' },
    ],
    bundles: 'Paquetes combinados con descuento',
    bundleList: [
      { t: 'Pack Start', d: 'Branding + Social Media (1 red) — descuento 10%', from: 'S/ 1,800/mes (primer mes incluye branding)' },
      { t: 'Pack Growth', d: 'Social Media (2 redes) + SEO básico — descuento 15%', from: 'S/ 2,700/mes' },
      { t: 'Pack Performance', d: 'Google Ads + SEO + Landing — descuento 15%', from: 'S/ 4,200/mes' },
      { t: 'Pack Full Digital', d: 'Branding + Web + Social + SEO + Google Ads — descuento 20%', from: 'consultar' },
    ],
    contact: '¿Tu proyecto necesita un mix distinto?',
    contactDesc: 'Armamos un plan a medida según tu objetivo, tu industria y tu presupuesto. Cuéntanos y te mandamos cotización dentro de las 24 horas.',
  },
  en: {
    hero: 'Digital Marketing Pricing in Lima, Peru',
    sub: 'Full transparency. No mandatory lock-in. Clear monthly reports. From S/500 (~$135 USD) for branding and from S/1,500/month (~$400 USD) for recurring services.',
    contactCta: 'Let’s talk about your project',
    contactPath: '/#contacto',
    note: 'Net prices in Peruvian Soles (S/). Peruvian invoices add 18% VAT. Clients in the United States can pay in USD.',
    tiers: [
      { name: 'Starter branding', price: 'S/ 500 (~$135)', period: '/ project', desc: 'Logo, color palette and essential applications. 7-day delivery.', feats: ['Basic brand manual','Logo versions (color, monochrome)','Palette + typography','Essential applications'], href: '/servicios/branding', cta: 'See branding' },
      { name: 'Basic social media', price: 'S/ 1,500 (~$400)', period: '/ month', desc: 'Strategy, design, Reels, copy and monthly reports for one network.', feats: ['8–12 pieces / month','Edited Reels or TikToks','Community management','Monthly report'], href: '/servicios/socialmedia', cta: 'See social media' },
      { name: 'SEO positioning', price: 'S/ 1,500 (~$400)', period: '/ month', desc: 'Organic SEO on Google: audit, on-page, content and monthly reports.', feats: ['Keyword research','On-page optimization','SEO content','Monthly KPI report'], href: '/posicionamiento-seo', cta: 'See SEO', highlight: true },
      { name: 'Google Ads management', price: 'S/ 1,800 (~$480)', period: '/ month', desc: 'Management fee for Search, Performance Max, YouTube, Display and Shopping campaigns.', feats: ['Setup and optimization','Intent-based structure','Conversion tracking','Monthly report'], href: '/servicios/google-ads', cta: 'See Google Ads', extra: '+ min. ad spend S/ 1,500' },
      { name: 'Custom landing page', price: 'from S/ 2,500 (~$670)', period: '/ project', desc: 'Custom landing page with on-page SEO, Core Web Vitals and form.', feats: ['Custom UI design','Technical & on-page SEO','Form + tracking','Recommended hosting'], href: '/servicios/web-development', cta: 'See web development' },
      { name: 'Shopify / WooCommerce store', price: 'from S/ 4,500 (~$1,200)', period: '/ project', desc: 'Online store with catalog, payment gateway and technical SEO.', feats: ['Shopify or WooCommerce','Catalog and gateway','Product page SEO','Training included'], href: '/servicios/web-development', cta: 'See stores' },
    ],
    bundles: 'Combined packages with discount',
    bundleList: [
      { t: 'Start Pack', d: 'Branding + Social Media (1 network) — 10% discount', from: 'S/ 1,800/mo (first month includes branding)' },
      { t: 'Growth Pack', d: 'Social Media (2 networks) + basic SEO — 15% discount', from: 'S/ 2,700/mo' },
      { t: 'Performance Pack', d: 'Google Ads + SEO + Landing — 15% discount', from: 'S/ 4,200/mo' },
      { t: 'Full Digital Pack', d: 'Branding + Web + Social + SEO + Google Ads — 20% discount', from: 'on request' },
    ],
    contact: 'Need a different mix for your project?',
    contactDesc: 'We build custom plans based on your goal, industry and budget. Tell us and we send you a proposal within 24 hours.',
  }
}

export default async function PreciosPage({ params }: Props) {
  const { locale } = await params
  const t = (COPY as any)[locale === 'en' ? 'en' : 'es']
  const isEn = locale === 'en'

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 md:px-10 lg:px-20 pt-32 pb-12 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">3R Core · {isEn ? 'Pricing' : 'Precios'}</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{t.hero}</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-4">{t.sub}</p>
        <p className="text-sm text-white/50 max-w-3xl">{t.note}</p>
      </section>

      <section className="px-6 md:px-10 lg:px-20 pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.tiers.map((tier: any, i: number) => (
            <div key={i} className={`pricing-card border rounded-2xl p-6 flex flex-col ${tier.highlight ? 'border-white bg-white/5' : 'border-white/10'}`}>
              <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
              <p className="text-3xl font-bold mb-1">{tier.price} <span className="text-base font-normal text-white/60">{tier.period}</span></p>
              {tier.extra && <p className="text-xs text-white/60 mb-3">{tier.extra}</p>}
              <p className="text-white/70 mb-4 text-sm">{tier.desc}</p>
              <ul className="text-sm text-white/80 mb-6 space-y-1 flex-1">
                {tier.feats.map((f: string, j: number) => (
                  <li key={j}>· {f}</li>
                ))}
              </ul>
              <Link href={`/${locale}${tier.href}`} className="text-center bg-white text-black px-5 py-3 rounded-full font-semibold hover:bg-white/90 transition mt-auto">{tier.cta}</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.bundles}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {t.bundleList.map((b: any, i: number) => (
            <div key={i} className="border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">{b.t}</h3>
              <p className="text-white/70 mb-3">{b.d}</p>
              <p className="text-sm text-white/60">{b.from}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-20 max-w-6xl mx-auto border-t border-white/10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact}</h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8">{t.contactDesc}</p>
        <Link href={`/${locale}${t.contactPath}`} className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition">{t.contactCta}</Link>
      </section>
    </main>
  )
}
