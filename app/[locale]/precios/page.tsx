import Link from "next/link"

interface Props { params: Promise<{ locale: string }> }

const COPY = {
  es: {
    hero: 'Precios de Marketing Digital en Lima, Perú',
    sub: 'Branding desde S/500, Social Media y SEO desde S/1,500/mes y Google Ads desde S/1,800/mes de gestión. Precios netos en Soles peruanos. Las facturas peruanas suman 18% de IGV.',
    contactCta: 'Conversemos sobre tu proyecto',
    contactPath: '/#contacto',
    note: 'Los precios son referenciales según paquetes base. Para alcance, redes adicionales o industrias específicas (por ejemplo: e-commerce, salud, B2B, restaurantes o retail) elaboramos cotización personalizada.',
    tiers: [
      { name: 'Branding inicial', price: 'S/ 500 (~$135 USD)', period: '/ proyecto', desc: 'Diseño de identidad visual con entrega en 7 días.', feats: ['Logotipo','Manual de marca básico','Paleta cromática','Tipografía corporativa','Aplicaciones esenciales'], href: '/servicios/branding', cta: 'Ver branding' },
      { name: 'Social Media básico', price: 'S/ 1,500 (~$400 USD)', period: '/ mes', desc: 'Manejo profesional de una red social con estrategia, diseño y community management.', feats: ['8–12 piezas / mes','Reels o TikToks editados','Estrategia de contenido','Community management','Reporte mensual'], href: '/servicios/socialmedia', cta: 'Ver redes sociales' },
      { name: 'Posicionamiento SEO', price: 'S/ 1,500 (~$400 USD)', period: '/ mes', desc: 'SEO orgánico en Google con keyword research, optimización on-page, contenidos y reporte mensual.', feats: ['Auditoría inicial','Keyword research','Optimización on-page','Contenidos SEO','Reporte mensual'], href: '/posicionamiento-seo', cta: 'Ver SEO', highlight: true },
      { name: 'Google Ads gestión', price: 'S/ 1,800 (~$480 USD)', period: '/ mes', desc: 'Fee de gestión de campañas en Google Ads (Search, Performance Max, YouTube, Display, Shopping y Remarketing).', feats: ['Configuración de campañas','Optimización continua','Estructura por intención','Tracking de conversiones','Reporte mensual'], href: '/servicios/google-ads', cta: 'Ver Google Ads', extra: 'No incluye la pauta, que se paga directamente a Google.' },
    ],
    customTitle: '¿Diseño web, e-commerce o un mix de servicios?',
    customDesc: 'Para desarrollo web, tiendas online (Shopify / WooCommerce), proyectos integrales o combinaciones de servicios, elaboramos una cotización a medida según el alcance.',
    contact: '¿Tu proyecto necesita un mix distinto?',
    contactDesc: 'Cuéntanos tu objetivo y armamos una cotización personalizada.',
  },
  en: {
    hero: 'Digital Marketing Pricing in Lima, Peru',
    sub: 'Branding from S/500 (~$135 USD), Social Media and SEO from S/1,500/month (~$400 USD) and Google Ads management from S/1,800/month (~$480 USD). Net prices in Peruvian Soles. Peruvian invoices add 18% VAT.',
    contactCta: 'Let’s talk about your project',
    contactPath: '/#contacto',
    note: 'Prices shown are reference packages. For additional reach, extra networks or specific industries (e.g. e-commerce, healthcare, B2B, restaurants or retail) we build a custom proposal.',
    tiers: [
      { name: 'Starter branding', price: 'S/ 500 (~$135 USD)', period: '/ project', desc: 'Visual identity design with 7-day delivery.', feats: ['Logo','Basic brand manual','Color palette','Corporate typography','Essential applications'], href: '/servicios/branding', cta: 'See branding' },
      { name: 'Basic social media', price: 'S/ 1,500 (~$400 USD)', period: '/ month', desc: 'Professional management of one social network with strategy, design and community management.', feats: ['8–12 pieces / month','Edited Reels or TikToks','Content strategy','Community management','Monthly report'], href: '/servicios/socialmedia', cta: 'See social media' },
      { name: 'SEO positioning', price: 'S/ 1,500 (~$400 USD)', period: '/ month', desc: 'Organic SEO on Google with keyword research, on-page optimization, content and monthly report.', feats: ['Initial audit','Keyword research','On-page optimization','SEO content','Monthly report'], href: '/posicionamiento-seo', cta: 'See SEO', highlight: true },
      { name: 'Google Ads management', price: 'S/ 1,800 (~$480 USD)', period: '/ month', desc: 'Management fee for Google Ads campaigns (Search, Performance Max, YouTube, Display, Shopping and Remarketing).', feats: ['Campaign setup','Continuous optimization','Intent-based structure','Conversion tracking','Monthly report'], href: '/servicios/google-ads', cta: 'See Google Ads', extra: 'Does not include ad spend, which is paid directly to Google.' },
    ],
    customTitle: 'Web design, e-commerce or a custom service mix?',
    customDesc: 'For web development, online stores (Shopify / WooCommerce), full projects or service combinations, we build a custom proposal based on scope.',
    contact: 'Need a different mix for your project?',
    contactDesc: 'Tell us your goal and we build a personalized proposal.',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.tiers.map((tier: any, i: number) => (
            <div key={i} className={`pricing-card border rounded-2xl p-6 flex flex-col ${tier.highlight ? 'border-white bg-white/5' : 'border-white/10'}`}>
              <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
              <p className="text-2xl font-bold mb-1">{tier.price}</p>
              <p className="text-base text-white/60 mb-2">{tier.period}</p>
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.customTitle}</h2>
        <p className="text-white/70 max-w-2xl mb-6">{t.customDesc}</p>
        <Link href={`/${locale}${t.contactPath}`} className="inline-block border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition">{t.contactCta}</Link>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-20 max-w-6xl mx-auto border-t border-white/10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact}</h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8">{t.contactDesc}</p>
        <Link href={`/${locale}${t.contactPath}`} className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition">{t.contactCta}</Link>
      </section>
    </main>
  )
}
