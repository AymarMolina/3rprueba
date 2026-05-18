import Link from "next/link"

interface Props { params: Promise<{ locale: string }> }

const COPY = {
  es: {
    hero: 'Precios de Marketing Digital en Lima, Perú',
    sub: 'Branding desde S/500, Social Media y SEO desde S/1,500/mes y Google Ads desde S/1,800/mes de gestión. Precios netos en Soles peruanos. Las facturas peruanas suman 18% de IGV.',
    contactCta: 'Conversemos sobre tu proyecto',
    contactPath: '/#contacto',
    note: 'Sin contratos forzosos, con reportes mensuales y resultados progresivos. Los precios son referenciales según paquetes base; cada propuesta se ajusta tras una reunión inicial.',
    tiers: [
      { name: 'Branding inicial', price: 'desde S/ 500', period: '/ proyecto', desc: 'Diseño de identidad visual con entrega de propuesta tras sesión inicial de descubrimiento.', feats: ['Logotipo','Manual de marca','Paleta cromática','Tipografía corporativa','Aplicaciones esenciales'], href: '/servicios/branding', cta: 'Ver branding' },
      { name: 'Social Media', price: 'desde S/ 1,500', period: '/ mes', desc: 'Manejo de TikTok, Instagram, Facebook y LinkedIn con 8–12 piezas mensuales para emprendimientos.', feats: ['8–12 piezas / mes','TikTok + IG + FB + LinkedIn','Reels / TikToks editados','Community management','Reporte mensual'], href: '/servicios/socialmedia', cta: 'Ver redes sociales' },
      { name: 'Posicionamiento SEO', price: 'S/ 1,500', period: '/ mes', desc: 'Auditoría, planificación, optimización, escalamiento y reportes mensuales. Estrategia continua sin contratos forzosos y con resultados progresivos.', feats: ['Auditoría inicial','Planificación','Optimización on-page','Escalamiento','Reporte mensual'], href: '/posicionamiento-seo', cta: 'Ver SEO', highlight: true },
      { name: 'Google Ads gestión', price: 'desde S/ 1,800', period: '/ mes', desc: 'Fee de gestión de campañas Search, Performance Max, YouTube, Display, Shopping y Remarketing.', feats: ['Configuración de campañas','Optimización continua','Tracking de conversiones','Reporte mensual'], href: '/servicios/google-ads', cta: 'Ver Google Ads', extra: '+ presupuesto mínimo de pauta S/ 1,500/mes pagado directamente a Google.' },
    ],
    webTitle: 'Diseño y desarrollo web',
    webNote: 'Cotización a medida tras reunión inicial. Cada propuesta incluye diseño en Figma, desarrollo responsive, SEO técnico básico, formulario de contacto y conexión a Google Analytics. El primer año incluye dominio, SSL y hosting.',
    webTiers: [
      { name: 'Landing page profesional', price: 'desde S/ 2,500', desc: 'Landing page con diseño a medida, SEO técnico básico y formulario de contacto.' },
      { name: 'Web corporativa', price: 'desde S/ 4,500', desc: 'Sitio corporativo con 5–8 secciones. Rango S/ 4,500–9,000 según alcance.' },
      { name: 'E-commerce Shopify / WooCommerce', price: 'desde S/ 6,500', desc: 'Tienda online con catálogo, pasarela de pago (Culqi, Niubiz, Izipay o Mercado Pago), gestión de inventario y panel admin.' },
    ],
    refTitle: 'Inversión mensual de referencia para Lima',
    refList: [
      { t: 'Emprendimientos', d: 'S/ 2,500 – 4,500 / mes (cubre redes + Ads básico)' },
      { t: 'Pymes', d: 'S/ 5,000 – 12,000 / mes (estrategia integral con redes, Ads, SEO y mejoras web)' },
      { t: 'Empresas medianas', d: 'S/ 12,000 – 30,000 / mes (marketing completo con producción de contenido y CRO)' },
    ],
    refNote: 'Lo importante no es el presupuesto sino que el ROI sea positivo desde el mes 3.',
    contact: '¿Tu proyecto necesita un mix distinto?',
    contactDesc: 'Cuéntanos tu objetivo y armamos una cotización personalizada en la primera reunión.',
  },
  en: {
    hero: 'Digital Marketing Pricing in Lima, Peru',
    sub: 'Branding from S/500 (~$135 USD), Social Media and SEO from S/1,500/month (~$400 USD) and Google Ads management from S/1,800/month (~$480 USD). Net prices in Peruvian Soles. Peruvian invoices add 18% VAT.',
    contactCta: 'Let’s talk about your project',
    contactPath: '/#contacto',
    note: 'No mandatory contracts, monthly reports and progressive results. Prices shown are reference packages; each proposal is tailored after an initial meeting.',
    tiers: [
      { name: 'Starter branding', price: 'from S/ 500 (~$135 USD)', period: '/ project', desc: 'Visual identity design. Detailed proposal after an initial discovery session.', feats: ['Logo','Brand manual','Color palette','Corporate typography','Essential applications'], href: '/servicios/branding', cta: 'See branding' },
      { name: 'Social media', price: 'from S/ 1,500 (~$400 USD)', period: '/ month', desc: 'TikTok, Instagram, Facebook and LinkedIn management with 8–12 pieces per month for entrepreneurs.', feats: ['8–12 pieces / month','TikTok + IG + FB + LinkedIn','Edited Reels / TikToks','Community management','Monthly report'], href: '/servicios/socialmedia', cta: 'See social media' },
      { name: 'SEO positioning', price: 'S/ 1,500 (~$400 USD)', period: '/ month', desc: 'Audit, planning, optimization, scaling and monthly reports. Continuous strategy with no mandatory contracts and progressive results.', feats: ['Initial audit','Planning','On-page optimization','Scaling','Monthly report'], href: '/posicionamiento-seo', cta: 'See SEO', highlight: true },
      { name: 'Google Ads management', price: 'from S/ 1,800 (~$480 USD)', period: '/ month', desc: 'Management fee for Search, Performance Max, YouTube, Display, Shopping and Remarketing campaigns.', feats: ['Campaign setup','Continuous optimization','Conversion tracking','Monthly report'], href: '/servicios/google-ads', cta: 'See Google Ads', extra: '+ minimum ad spend S/ 1,500/month paid directly to Google.' },
    ],
    webTitle: 'Web design & development',
    webNote: 'Custom quote after initial meeting. Each proposal includes Figma design, responsive development, basic technical SEO, contact form and Google Analytics integration. First year includes domain, SSL and hosting.',
    webTiers: [
      { name: 'Professional landing page', price: 'from S/ 2,500', desc: 'Custom landing page design with basic technical SEO and contact form.' },
      { name: 'Corporate website', price: 'from S/ 4,500', desc: '5–8 section corporate site. Range S/ 4,500–9,000 depending on scope.' },
      { name: 'E-commerce Shopify / WooCommerce', price: 'from S/ 6,500', desc: 'Online store with catalog, payment gateway (Culqi, Niubiz, Izipay or Mercado Pago), inventory management and admin panel.' },
    ],
    refTitle: 'Reference monthly investment for Lima',
    refList: [
      { t: 'Entrepreneurs', d: 'S/ 2,500 – 4,500 / month (covers social + basic Ads)' },
      { t: 'SMBs', d: 'S/ 5,000 – 12,000 / month (full strategy with social, Ads, SEO and web improvements)' },
      { t: 'Mid-market', d: 'S/ 12,000 – 30,000 / month (full marketing with content production and CRO)' },
    ],
    refNote: 'What matters is not the budget but that ROI turns positive from month 3.',
    contact: 'Need a different mix for your project?',
    contactDesc: 'Tell us your goal and we build a custom proposal in the first meeting.',
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.webTitle}</h2>
        <p className="text-white/70 max-w-3xl mb-8">{t.webNote}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {t.webTiers.map((wt: any, i: number) => (
            <div key={i} className="border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2">{wt.name}</h3>
              <p className="text-2xl font-bold mb-3">{wt.price}</p>
              <p className="text-sm text-white/70">{wt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.refTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {t.refList.map((r: any, i: number) => (
            <div key={i} className="border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2">{r.t}</h3>
              <p className="text-sm text-white/70">{r.d}</p>
            </div>
          ))}
        </div>
        <p className="text-white/60 italic max-w-3xl">{t.refNote}</p>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-20 max-w-6xl mx-auto border-t border-white/10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact}</h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8">{t.contactDesc}</p>
        <Link href={`/${locale}${t.contactPath}`} className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition">{t.contactCta}</Link>
      </section>
    </main>
  )
}
