import Link from "next/link"

interface Props { params: Promise<{ locale: string }> }

const COPY = {
  es: {
    hero: 'Agencia de Marketing Digital en Lima, Perú',
    sub: 'Branding, manejo de redes sociales, Google Ads, posicionamiento SEO y desarrollo web para empresas en Lima, todo el Perú y Estados Unidos.',
    addr: '📍 Calle Las Caobas 170, Ofic. 400, Urb El Remanso, La Molina, Lima 15024',
    cta: 'Solicita tu cotización gratuita',
    contactPath: '/#contacto',
    why: '¿Por qué elegirnos como tu agencia de marketing digital en Lima?',
    whyItems: [
      { t: 'Equipo familiar con 3 generaciones', d: 'Alejandro, Bruno y Piero Roque combinan experiencia, visión y tecnología para construir estrategias digitales medibles.' },
      { t: 'Estrategia integral, no servicios sueltos', d: 'Branding + SEO + Google Ads + redes + web bajo una sola dirección creativa y un solo plan de crecimiento.' },
      { t: 'Reportes mensuales claros', d: 'Cada mes recibes reporte con KPIs reales: posiciones SEO, leads, ROAS, alcance e ingresos atribuibles.' },
      { t: 'Conocimiento del mercado peruano', d: 'Diseñamos campañas y contenidos pensados para Lima, provincias y para emprendimientos que exportan a Estados Unidos.' },
    ],
    services: 'Servicios que cubrimos en Lima',
    serviceList: [
      { name: 'Branding e Identidad de Marca', desc: 'Logotipo, manual de marca, paleta cromática, tipografía y aplicaciones desde S/500.', href: '/servicios/branding' },
      { name: 'Manejo de Redes Sociales', desc: 'Estrategia, diseño, Reels y TikToks, copywriting y community management desde S/1,500/mes.', href: '/servicios/socialmedia' },
      { name: 'Google Ads y SEM', desc: 'Search, Performance Max, YouTube, Display, Shopping y Remarketing con fee desde S/1,800/mes.', href: '/servicios/google-ads' },
      { name: 'Posicionamiento SEO', desc: 'Keyword research, on-page, contenidos, link building y SEO técnico desde S/1,500/mes.', href: '/posicionamiento-seo' },
      { name: 'Diseño y Desarrollo Web', desc: 'Landing pages, sitios corporativos y e-commerce Shopify/WooCommerce con SEO on-page.', href: '/servicios/web-development' },
    ],
    zonas: 'Zonas de Lima que atendemos',
    zonasList: ['La Molina','Miraflores','San Isidro','Surco','San Borja','Surquillo','Magdalena','Pueblo Libre','Jesús María','Lince','Barranco','Chorrillos','Los Olivos','San Miguel'],
    contactCta: 'Trabaja con una agencia de marketing digital en Lima que combina diseño, tecnología y estrategia. Cuéntanos tu objetivo y armamos un plan personalizado.',
    contact: 'Hablemos de tu marca',
  },
  en: {
    hero: 'Digital Marketing Agency in Lima, Peru',
    sub: 'Branding, social media management, Google Ads, SEO positioning and web development for businesses in Lima, across Peru and in the United States.',
    addr: '📍 Calle Las Caobas 170, Ofic. 400, Urb El Remanso, La Molina, Lima 15024',
    cta: 'Request your free proposal',
    contactPath: '/#contacto',
    why: 'Why choose us as your digital marketing agency in Lima?',
    whyItems: [
      { t: 'Family team across 3 generations', d: 'Alejandro, Bruno and Piero Roque combine experience, vision and technology to build measurable digital strategies.' },
      { t: 'Full strategy, not isolated services', d: 'Branding + SEO + Google Ads + social + web under a single creative direction and growth plan.' },
      { t: 'Clear monthly reports', d: 'Each month you receive a report with real KPIs: SEO positions, leads, ROAS, reach and attributable revenue.' },
      { t: 'Deep Peruvian-market expertise', d: 'Campaigns and content built for Lima, the provinces and Peruvian businesses that export to the United States.' },
    ],
    services: 'Services we cover in Lima',
    serviceList: [
      { name: 'Branding & Visual Identity', desc: 'Logo, brand manual, color palette, typography and applications from S/500 (~$135 USD).', href: '/servicios/branding' },
      { name: 'Social Media Management', desc: 'Strategy, design, Reels and TikToks, copywriting and community management from S/1,500/mo (~$400 USD).', href: '/servicios/socialmedia' },
      { name: 'Google Ads & SEM', desc: 'Search, Performance Max, YouTube, Display, Shopping and Remarketing with fee from S/1,800/mo (~$480 USD).', href: '/servicios/google-ads' },
      { name: 'SEO Positioning', desc: 'Keyword research, on-page, content, link building and technical SEO from S/1,500/mo (~$400 USD).', href: '/posicionamiento-seo' },
      { name: 'Web Design & Development', desc: 'Landing pages, corporate sites and Shopify/WooCommerce e-commerce with on-page SEO.', href: '/servicios/web-development' },
    ],
    zonas: 'Lima neighborhoods we serve',
    zonasList: ['La Molina','Miraflores','San Isidro','Surco','San Borja','Surquillo','Magdalena','Pueblo Libre','Jesús María','Lince','Barranco','Chorrillos','Los Olivos','San Miguel'],
    contactCta: 'Work with a digital marketing agency in Lima that combines design, technology and strategy. Tell us your goal and we build a personalized plan.',
    contact: 'Let’s talk about your brand',
  }
}

export default async function AgenciaLimaPage({ params }: Props) {
  const { locale } = await params
  const t = (COPY as any)[locale === 'en' ? 'en' : 'es']

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 md:px-10 lg:px-20 pt-32 pb-20 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">3R Core · Lima · Perú</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{t.hero}</h1>
        <p className="local-intro text-lg md:text-xl text-white/80 max-w-3xl mb-6">{t.sub}</p>
        <p className="text-sm text-white/60 mb-8">{t.addr}</p>
        <Link href={`/${locale}${t.contactPath}`} className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition">{t.cta}</Link>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.why}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {t.whyItems.map((it: any, i: number) => (
            <div key={i} className="border border-white/10 rounded-2xl p-6 hover:border-white/30 transition">
              <h3 className="text-xl font-semibold mb-3">{it.t}</h3>
              <p className="text-white/70">{it.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.services}</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {t.serviceList.map((s: any, i: number) => (
            <li key={i}>
              <Link href={`/${locale}${s.href}`} className="block border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/5 transition">
                <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
                <p className="text-white/70">{s.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.zonas}</h2>
        <p className="text-white/70 mb-6">{locale === 'en' ? 'We work remotely with clients across all of Lima Metropolitan Area.' : 'Trabajamos de manera remota con clientes en toda Lima Metropolitana.'}</p>
        <ul className="flex flex-wrap gap-2">
          {t.zonasList.map((z: string) => (
            <li key={z} className="px-4 py-2 border border-white/10 rounded-full text-sm text-white/80">{z}</li>
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-20 max-w-6xl mx-auto border-t border-white/10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact}</h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8">{t.contactCta}</p>
        <Link href={`/${locale}${t.contactPath}`} className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition">{t.cta}</Link>
      </section>
    </main>
  )
}
