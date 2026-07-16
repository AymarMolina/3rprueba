/**
 * Blogs imán de LEADS (2026-07) para 3rcore.com.
 * Reutilizan el contenido SEO de las money pages /agencia-*-lima (que ahora
 * hacen 301 a /servicios/*) convertido en guías de intención de compra
 * ("cuánto cuesta agencia SEO / Google Ads / redes en Lima"). Fondo de embudo:
 * capturan compradores listos y los llevan a la página de servicio del pilar.
 * CTA medible auto-inyectado por <BlogCTA> según el slug (ver SLUG_MAP).
 */
import type { SeedPost } from "./posts"

const AUTHOR = "Equipo 3R Core"
const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?w=1200&h=630&fit=crop&q=80`

export const LEADS_POSTS_2026_07: SeedPost[] = [
  {
    slug: "cuanto-cuesta-agencia-seo-lima-2026",
    title: "Cuánto cuesta una agencia SEO en Lima 2026: precios reales y cómo elegir",
    focus_keyword: "cuanto cuesta una agencia seo en lima",
    meta_title: "Cuánto cuesta una agencia SEO en Lima 2026 — Precios reales | 3R Core",
    meta_description: "Precios reales 2026 de una agencia SEO en Lima: tiers desde S/1,800/mes, qué incluye cada uno, cuánto tarda en dar resultados y cómo elegir sin que te vendan humo.",
    excerpt: "Cuánto cobra una agencia SEO en Lima en 2026: tiers desde S/1,800/mes, qué debe incluir el precio, en cuánto tiempo se ven resultados y las 7 preguntas que debes hacer antes de firmar.",
    og_title: "Cuánto cuesta una agencia SEO en Lima 2026",
    og_description: "Precios reales por tier, qué incluye cada uno y cómo elegir sin que te vendan humo.",
    featured_image: IMG("1560472354-b33ff0c44a43"),
    featured_image_alt: "Cuánto cuesta una agencia SEO en Lima 2026 precios por tier",
    author_name: AUTHOR,
    content: `<p class="lead"><strong>Resumen ejecutivo:</strong> en 2026 una <strong>agencia SEO en Lima</strong> cobra entre <strong>S/1,800 y S/5,000+ al mes</strong> según la competencia de tu sector y el alcance del trabajo. El tier local para pymes arranca en <strong>S/1,800/mes</strong>, el competitivo en <strong>S/3,000/mes</strong> y el enterprise desde <strong>S/5,000/mes</strong> (precios netos, súmale 18% de IGV). El SEO no es un gasto único: es una inversión mensual que rinde a partir del mes 3–6. Esta guía te da los precios reales, qué debe incluir cada tier y cómo distinguir una agencia seria de una que solo escribe blogs.</p>

<h2>Tabla de precios 2026: agencia SEO en Lima</h2>
<table>
<thead><tr><th>Tier</th><th>Inversión mensual (PEN, neto)</th><th>Para quién</th><th>Qué incluye</th></tr></thead>
<tbody>
<tr><td><strong>Local Pyme</strong></td><td>desde S/1,800/mes</td><td>Negocios locales, poca competencia</td><td>On-page, contenido, SEO local por distrito, reporte mensual</td></tr>
<tr><td><strong>Competitivo</strong></td><td>desde S/3,000/mes</td><td>Sectores disputados en Lima</td><td>Lo anterior + link building manual + cluster de contenidos</td></tr>
<tr><td><strong>Enterprise</strong></td><td>desde S/5,000/mes</td><td>Marcas nacionales / e-commerce grande</td><td>Estrategia 360°, digital PR, SEO técnico avanzado, dashboards</td></tr>
</tbody>
</table>
<p>Desconfía de precios "SEO desde S/300/mes": a ese ticket nadie hace auditoría técnica, link building manual ni producción de contenido real. Suele ser un checklist automático que no mueve rankings. El SEO serio requiere horas de estrategia, redacción y outreach.</p>

<h2>Qué debe incluir el precio de una agencia SEO seria</h2>
<p>A diferencia de agencias que solo escriben blogs, un servicio de <a href="/es/posicionamiento-seo">posicionamiento SEO</a> completo ejecuta cuatro pilares bajo el mismo techo:</p>
<ol>
<li><strong>SEO técnico:</strong> auditoría con Screaming Frog y Ahrefs — Core Web Vitals, schema markup, canonicals, hreflang, sitemap, robots.txt e indexación.</li>
<li><strong>On-page y contenido:</strong> keyword research, mapeo de intención de búsqueda y producción de contenidos optimizados para Google y para las AI Overviews / SGE.</li>
<li><strong>SEO local Lima:</strong> Google Business Profile, citaciones peruanas, reseñas, consistencia NAP y landings por distrito. Clave si vendes en zonas como Miraflores, San Isidro, La Molina, Surco o San Borja.</li>
<li><strong>Link building y digital PR:</strong> outreach manual a medios peruanos y blogs de nicho, con anchors diversificados y enlaces naturales (dofollow y nofollow).</li>
</ol>
<p>Si la propuesta no menciona estos cuatro frentes, estás pagando por medio servicio.</p>

<h2>¿En cuánto tiempo se ven resultados?</h2>
<p>El SEO es progresivo. Un roadmap realista mes a mes se ve así:</p>
<ul>
<li><strong>Mes 1 — Auditoría y plan:</strong> auditoría técnica completa, keyword research, mapa de intents y roadmap trimestral con KPIs.</li>
<li><strong>Mes 2 — Quickwins on-page:</strong> optimización de títulos, metas, headings, enlazado interno, schema y fixes técnicos críticos. Aquí suelen aparecer las primeras mejoras de CTR.</li>
<li><strong>Mes 3–4 — Contenido y autoridad:</strong> producción editorial mensual + primeros backlinks dofollow manuales. Empiezan a subir keywords de cola media.</li>
<li><strong>Mes 5–6 — Escalamiento:</strong> cluster de contenidos, link building constante y revisión trimestral. Resultados compuestos.</li>
</ul>
<p>Por eso se recomienda un mínimo de 3 meses antes de evaluar, y lo ideal es pensar en horizontte de 6–12 meses. Compara el enfoque con el de pauta en <a href="/es/blogs/seo-vs-google-ads-peru-cual-conviene">SEO vs Google Ads: cuál conviene</a>.</p>

<h2>7 preguntas antes de contratar una agencia SEO en Lima</h2>
<ol>
<li>¿Me entregan una auditoría inicial con quickwins y gaps frente a mi competencia?</li>
<li>¿El reporte mensual muestra rankings, tráfico orgánico y conversiones, o solo "tareas hechas"?</li>
<li>¿El link building es manual o son directorios spam?</li>
<li>¿Quién es dueño de los contenidos y accesos si dejo la agencia?</li>
<li>¿Trabajan SEO local (Google Business Profile) además del orgánico?</li>
<li>¿Hay contrato forzoso o puedo salir con preaviso?</li>
<li>¿Me muestran casos o mejoras medibles, no solo promesas?</li>
</ol>

<h2>Preguntas frecuentes</h2>
<p><strong>¿El SEO reemplaza a Google Ads?</strong> No: se complementan. Ads te da tráfico hoy; SEO construye un activo que reduce tu costo de adquisición con el tiempo.</p>
<p><strong>¿Necesito rehacer mi web?</strong> No siempre. La auditoría te dirá si basta con optimizar o si conviene un rediseño. Si vendes online, revisa además nuestra <a href="/es/tiendas-virtuales-lima">tienda virtual</a> optimizada para SEO.</p>
<p><strong>¿Firmo por un año?</strong> No debería ser obligatorio. Un buen servicio se sostiene por resultados, no por cláusulas.</p>

<h2>Cierre</h2>
<p>El precio correcto de una agencia SEO en Lima es el que te devuelve más de lo que inviertes. Antes de cotizar, pide una <strong>auditoría gratuita</strong>: mándanos tu URL y tus palabras clave objetivo y en 48 h te enviamos quickwins, gaps frente a competencia y una propuesta a tu medida. Conoce el <a href="/es/posicionamiento-seo">servicio de posicionamiento SEO</a> o lee primero <a href="/es/blogs/posicionar-negocio-google-maps-lima">cómo posicionar tu negocio en Google Maps en Lima</a>.</p>`,
  },
  {
    slug: "cuanto-cuesta-google-ads-lima-agencia-2026",
    title: "Cuánto cuesta Google Ads en Lima 2026: fee de agencia, inversión mínima y ROI",
    focus_keyword: "cuanto cuesta google ads en lima",
    meta_title: "Cuánto cuesta Google Ads en Lima 2026 — Fee, inversión y ROI | 3R Core",
    meta_description: "Cuánto cuesta Google Ads en Lima 2026: fee de agencia desde S/1,800/mes, inversión mínima de pauta, cómo se calcula el ROI y qué debe incluir una gestión seria.",
    excerpt: "Cuánto cuesta hacer Google Ads en Lima en 2026: fee de gestión desde S/1,800/mes + presupuesto de pauta, cómo separar ambos, qué ROAS esperar y cómo evitar quemar tu inversión.",
    og_title: "Cuánto cuesta Google Ads en Lima 2026",
    og_description: "Fee de agencia, inversión mínima de pauta, cómo se calcula el ROI y qué incluye una gestión seria.",
    featured_image: IMG("1611926653458-09294b3142bf"),
    featured_image_alt: "Cuánto cuesta Google Ads en Lima 2026 fee de agencia e inversion",
    author_name: AUTHOR,
    content: `<p class="lead"><strong>Resumen ejecutivo:</strong> hacer <strong>Google Ads en Lima</strong> tiene dos costos que debes separar: el <strong>fee de gestión de la agencia</strong> (desde <strong>S/1,800/mes</strong>) y el <strong>presupuesto de pauta</strong> que pagas directamente a Google (mínimo recomendado <strong>S/1,500/mes</strong> para tener data suficiente). Es decir, un arranque serio ronda los <strong>S/3,300/mes</strong> entre gestión y pauta. Lo que hace rentable —o no— esa inversión no es el monto, sino la medición: sin tracking bien configurado, cualquier optimización es ruido. Aquí van los números reales y cómo calcular tu ROI.</p>

<h2>Los dos costos de Google Ads (no los mezcles)</h2>
<table>
<thead><tr><th>Concepto</th><th>Monto 2026</th><th>A quién le pagas</th></tr></thead>
<tbody>
<tr><td><strong>Fee de gestión de agencia</strong></td><td>desde S/1,800/mes</td><td>A la agencia (estrategia, optimización, reportes)</td></tr>
<tr><td><strong>Presupuesto de pauta</strong></td><td>desde S/1,500/mes (recomendado)</td><td>Directo a Google, con tu tarjeta o factura</td></tr>
<tr><td><strong>Arranque total sugerido</strong></td><td>desde ~S/3,300/mes</td><td>—</td></tr>
</tbody>
</table>
<p>Huye de quien cobra "todo incluido S/500" sin transparentar cuánto va a pauta: casi siempre significa que casi nada llega a Google. La cuenta debe ser <strong>tuya</strong>, con acceso de administrador desde el día uno.</p>

<h2>Por qué el tracking define si ganas o quemas plata</h2>
<p>Antes de lanzar pauta, una <a href="/es/servicios/google-ads">gestión de Google Ads seria</a> valida tu medición: GA4, Google Tag Manager, conversiones offline, enhanced conversions, eventos clave y deduplicación. Una cuenta sin tracking sólido es dinero quemado, porque optimizas a ciegas. Si quieres entender esta parte, lee <a href="/es/blogs/pixel-meta-api-conversiones-peru-configurar">cómo configurar el seguimiento de conversiones</a> y <a href="/es/blogs/que-es-roas-como-calcularlo-negocio-peru">qué es el ROAS y cómo calcularlo</a>.</p>

<h2>Formatos que se gestionan (y cuándo usarlos)</h2>
<ul>
<li><strong>Search:</strong> campañas por intención de búsqueda con grupos temáticos, ad copy dinámico y palabras clave negativas curadas. Ideal para captar demanda existente.</li>
<li><strong>Performance Max:</strong> multicanal automatizado con feeds y audience signals. Potente con buena data de conversiones.</li>
<li><strong>YouTube y Video:</strong> in-stream, bumpers, in-feed y Shorts, con creativos 9:16, 1:1 y 16:9.</li>
<li><strong>Display y Remarketing:</strong> audiencias por etapa del funnel, frequency cap y exclusiones cruzadas.</li>
<li><strong>Google Shopping:</strong> Merchant Center, optimización de feed y resolución de disapprovals. Imprescindible para <a href="/es/tiendas-virtuales-lima">tiendas virtuales</a>.</li>
<li><strong>Local Search Ads:</strong> anuncios en Google Maps para negocios físicos en Lima con call tracking.</li>
</ul>

<h2>¿Qué ROI esperar?</h2>
<p>El ROI se mide con el <strong>ROAS</strong> (retorno sobre la inversión publicitaria): ingresos generados ÷ inversión en pauta. Un ROAS saludable depende de tu margen, pero como referencia, muchos negocios buscan 3x–5x en Search. En los primeros 30 días la cuenta está <em>aprendiendo</em>, así que el ROI real se evalúa a partir del segundo mes. La gestión mensual funciona así:</p>
<ul>
<li><strong>Semana 1 — Diagnóstico y setup:</strong> auditoría, KPIs, conversiones, audiencias semilla y estructura de campañas.</li>
<li><strong>Semanas 2–3 — Lanzamiento y aprendizaje:</strong> activación, monitoreo diario de search terms y exclusiones.</li>
<li><strong>Semana 4 — Optimización profunda:</strong> análisis por dispositivo, geo, hora y audiencia; reasignación de presupuesto por ROAS/CPA real.</li>
<li><strong>Mensual — Reporte y plan:</strong> dashboard en Looker Studio + call de insights y plan de los próximos 30 días.</li>
</ul>

<h2>Transparencia: la cuenta es tuya</h2>
<p>Una política sana: la cuenta Google Ads es del cliente, con acceso de administrador desde el inicio y billing directo con Google. Si algún día cambias de agencia, te llevas todo — cuenta, audiencias, conversiones e histórico. Si te piden trabajar sobre una cuenta "de la agencia" a la que no tienes acceso, es una bandera roja.</p>

<h2>Preguntas frecuentes</h2>
<p><strong>¿Google Ads o SEO?</strong> Ads trae clientes hoy; el <a href="/es/posicionamiento-seo">SEO</a> baja tu costo de adquisición a mediano plazo. Lo ideal es combinarlos.</p>
<p><strong>¿Cuál es la inversión mínima para que funcione?</strong> Por debajo de ~S/1,500/mes de pauta, Google no junta suficiente data para optimizar bien. Puedes empezar más abajo, pero tardará más en estabilizar.</p>
<p><strong>¿Hay permanencia?</strong> No debería. La gestión se sostiene por resultados.</p>

<h2>Cierre</h2>
<p>El costo de Google Ads en Lima es predecible cuando separas fee y pauta y mides bien. Antes de invertir, pide una <strong>auditoría gratuita de tu cuenta</strong>: en 48 h te decimos qué está fugando presupuesto y qué ROI es realista para tu caso. Conoce la <a href="/es/servicios/google-ads">gestión de Google Ads y SEM</a> o revisa <a href="/es/blogs/google-ads-negocios-lima-guia-captar-clientes">la guía de Google Ads para negocios en Lima</a>.</p>`,
  },
  {
    slug: "cuanto-cuesta-community-manager-redes-lima-2026",
    title: "Cuánto cuesta un community manager en Lima 2026: precios de manejo de redes",
    focus_keyword: "cuanto cuesta un community manager en lima",
    meta_title: "Cuánto cuesta un community manager en Lima 2026 — Precios | 3R Core",
    meta_description: "Cuánto cuesta manejar redes sociales en Lima 2026: precios de community manager freelance vs agencia, qué incluye cada plan y cómo saber si te conviene.",
    excerpt: "Cuánto cobra un community manager o una agencia de redes en Lima en 2026: freelance vs agencia, planes desde S/1,500/mes, qué debe incluir y cómo medir si tus redes venden.",
    og_title: "Cuánto cuesta un community manager en Lima 2026",
    og_description: "Freelance vs agencia, planes desde S/1,500/mes, qué incluye y cómo saber si tus redes venden.",
    featured_image: IMG("1611162617213-7d7a39e9b1d7"),
    featured_image_alt: "Cuánto cuesta un community manager en Lima 2026 manejo de redes",
    author_name: AUTHOR,
    content: `<p class="lead"><strong>Resumen ejecutivo:</strong> en 2026, en Lima, un <strong>community manager freelance</strong> cobra entre <strong>S/600 y S/1,500/mes</strong>, mientras que una <strong>agencia de redes sociales</strong> va de <strong>S/1,500 a S/4,000+/mes</strong> según cantidad de piezas, plataformas y si incluye pauta. La diferencia no es solo el precio: una agencia suma estrategia, diseño, edición de video y medición; un freelance suele cubrir lo operativo. Esta guía te dice qué incluye cada rango y cómo saber si tus redes están vendiendo o solo generando likes.</p>

<h2>Tabla de precios 2026: manejo de redes sociales en Lima</h2>
<table>
<thead><tr><th>Opción</th><th>Precio mensual (PEN)</th><th>Qué suele incluir</th></tr></thead>
<tbody>
<tr><td><strong>Community manager freelance</strong></td><td>S/600 – S/1,500</td><td>Programación, respuestas, 6–10 piezas simples</td></tr>
<tr><td><strong>Agencia — plan pyme</strong></td><td>S/1,500 – S/2,500</td><td>Estrategia, 8–12 piezas, Reels/TikToks editados, community management, reporte</td></tr>
<tr><td><strong>Agencia — plan pro</strong></td><td>S/2,500 – S/4,000+</td><td>Lo anterior + más plataformas, más video y pauta gestionada</td></tr>
</tbody>
</table>
<p>Ojo: "manejo de redes" y "pauta en redes" son cosas distintas. El fee de gestión no incluye el presupuesto que pagas a Meta o TikTok por los anuncios. Revisa <a href="/es/blogs/cuanto-cuesta-publicidad-facebook-instagram-peru-2026">cuánto cuesta la publicidad en Facebook e Instagram</a> para presupuestar la pauta aparte.</p>

<h2>Qué debe incluir un buen servicio de redes</h2>
<p>Un servicio de <a href="/es/servicios/socialmedia">manejo de redes sociales</a> que sí construye marca y vende incluye:</p>
<ol>
<li><strong>Estrategia de contenido:</strong> línea editorial, pilares de contenido y objetivos por plataforma (no publicar por publicar).</li>
<li><strong>Diseño y video:</strong> piezas gráficas y Reels/TikToks editados — el video corto es hoy el mayor motor de alcance.</li>
<li><strong>Copywriting y community management:</strong> textos con intención y respuesta a comentarios y mensajes.</li>
<li><strong>Medición:</strong> reporte mensual con alcance, interacción y —lo importante— leads o ventas atribuibles.</li>
</ol>
<p>Si te ofrecen "10 posts al mes" sin estrategia ni medición, estás comprando volumen, no resultados. Para ideas concretas, lee <a href="/es/blogs/ideas-contenido-redes-sociales-negocios-peru">ideas de contenido para redes</a> y arma tu <a href="/es/blogs/plan-contenido-redes-sociales-peru-plantilla">plan de contenido con plantilla</a>.</p>

<h2>¿Freelance o agencia? Cómo decidir</h2>
<ul>
<li><strong>Elige freelance</strong> si tu presupuesto es ajustado, tienes claro el contenido y solo necesitas ejecución operativa en 1–2 redes.</li>
<li><strong>Elige agencia</strong> si quieres estrategia, video de calidad, consistencia garantizada y medición de resultados en varias plataformas.</li>
</ul>

<h2>Cómo saber si tus redes están vendiendo</h2>
<p>El error más común es medir por likes. Lo que importa para el negocio es: ¿cuántos <strong>leads</strong> o <strong>ventas</strong> generan tus redes? Para eso necesitas trackear los clics al WhatsApp, a la web o a tu <a href="/es/tiendas-virtuales-lima">tienda virtual</a>, y compararlos con la inversión. Si nadie te reporta eso, no sabes si tus redes rinden.</p>

<h2>Preguntas frecuentes</h2>
<p><strong>¿Incluye la pauta el precio del manejo?</strong> No. El fee es la gestión; el presupuesto de anuncios se paga aparte a la plataforma.</p>
<p><strong>¿En cuánto tiempo veo resultados?</strong> El alcance orgánico se construye en semanas; la venta consistente llega con estrategia sostenida y, normalmente, algo de pauta.</p>
<p><strong>¿Puedo combinar redes con Google Ads?</strong> Sí, y suele ser lo más rentable: redes construyen marca y demanda, <a href="/es/servicios/google-ads">Google Ads</a> captura la intención de compra.</p>

<h2>Cierre</h2>
<p>El precio correcto de manejar tus redes es el que se traduce en clientes, no en vanity metrics. Si quieres una propuesta a tu medida, <a href="/es/servicios/socialmedia">conoce el servicio de social media</a> y pídenos un plan según tus objetivos y plataformas.</p>`,
  },
]
