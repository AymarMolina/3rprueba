"use client";

import { useState } from "react";

const WA_NUMBER = "51987216703";
const WA_DIAG =
  "https://wa.me/51987216703?text=Hola%203R%20Core,%20quiero%20mi%20diagn%C3%B3stico%20gratis%20de%20Google%20Ads";
const WA_INFO =
  "https://wa.me/51987216703?text=Hola%203R%20Core,%20quiero%20informaci%C3%B3n%20sobre%20Google%20Ads";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const CheckSm = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
);
const CheckRow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
);
const CrossRow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
);
const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M.06 24l1.7-6.2A11.9 11.9 0 1112 24a11.9 11.9 0 01-5.9-1.6L.06 24zM6.6 20l.4.2a9.9 9.9 0 005 1.4A9.9 9.9 0 102.1 12a9.9 9.9 0 001.5 5.3l.3.4-1 3.6 3.7-1zM17.5 14.4c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a8.1 8.1 0 01-2.4-1.5 9 9 0 01-1.6-2.1c-.2-.3 0-.4.1-.5l.4-.4.3-.5c.1-.2 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 00-.7.3 2.9 2.9 0 00-.9 2.2 5 5 0 001.1 2.7 11.5 11.5 0 004.4 3.9c2.1.8 2.1.5 2.5.5a2.6 2.6 0 001.7-1.2 2.1 2.1 0 00.1-1.2c0-.1-.2-.2-.4-.3z" /></svg>
);

const PROBLEMS = [
  { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>), t: "Pauta que gasta y no vende", d: "El presupuesto se va cada mes pero las ventas no se mueven." },
  { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" /></svg>), t: "No sabes qué te trae clientes", d: "Corres anuncios en varios lados sin saber cuál de verdad funciona." },
  { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11l5-5 5 5" /><path d="M12 6v12" /></svg>), t: "Reportes de “likes”, no de ventas", d: "Te entregan alcance e impresiones, nunca lo que importa: cuánto vendiste." },
  { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" /></svg>), t: "Redes lindas, sin ventas", d: "Contenido que se ve bien pero que casi no genera para que siga el negocio." },
];

const FEATURES = [
  { t: "Cada sol rastreado", d: "Sabemos exactamente de dónde viene cada lead y cada venta." },
  { t: "Decisiones con data, no corazonadas", d: "Optimizamos según lo que convierte, revisando semana a semana." },
  { t: "Especialistas, no un “todólogo”", d: "Equipo de pauta, creativo y analítica enfocado en tu cuenta." },
];

const COMPARE = [
  ["Presupuesto sin dirección", "Estrategia por objetivo"],
  ["¿Funcionó? Ni idea", "ROAS y CPL claros"],
  ["Likes e impresiones", "Leads y ventas"],
  ["Redes por publicar", "Redes que venden"],
  ["Reportes que nadie entiende", "Reportes claros y honestos"],
];

const STEPS = [
  { n: "01", t: "Diagnóstico", d: "Revisamos tu cuenta, tu mercado y tu competencia para encontrar la oportunidad." },
  { n: "02", t: "Estrategia", d: "Definimos objetivos, presupuesto, canales y el mensaje que va a convertir." },
  { n: "03", t: "Lanzamiento", d: "Montamos campañas, creatividades y medición desde el primer día." },
  { n: "04", t: "Optimización", d: "Ajustamos semana a semana en base a la data real para bajar el costo y subir ventas." },
  { n: "05", t: "Escala", d: "Multiplicamos lo que funciona y subimos la inversión sin perder rentabilidad." },
];

const RESULTS = [
  ["4.2x", "ROAS promedio de portafolio"],
  ["-38%", "Reducción de costo por lead"],
  ["+67%", "Aumento en tasa de conversión"],
  ["+120", "Marcas trabajadas"],
];

const TESTIMONIALS = [
  "Por fin entendí en qué se va mi presupuesto y cuánto me regresa. En tres meses bajamos el costo por contacto a la mitad.",
  "No solo publican bonito. Cada campaña tiene un porqué y los reportes me ordenan toda la cabeza, que no es de marketing.",
  "Pasamos de redes sin rumbo a un sistema que nos trae clientes todas las semanas. Son rápidos y transparentes.",
];

const FAQS = [
  { q: "¿Cuánto debo invertir en publicidad para empezar?", a: "Depende de tu rubro y objetivo, pero solemos arrancar con presupuestos de pauta desde S/1,500 al mes. En el diagnóstico te decimos un rango realista según tu meta de ventas." },
  { q: "¿En cuánto tiempo veo resultados?", a: "Las primeras señales (clics, leads, conversiones) llegan en las primeras semanas. La rentabilidad estable suele tomar entre 60 y 90 días de optimización con data." },
  { q: "¿El presupuesto de pauta está incluido en el plan?", a: "No. El fee de gestión y la inversión en pauta son montos separados. Así sabes con claridad cuánto va a Google/Meta y cuánto al trabajo de la agencia." },
  { q: "¿Trabajan con cualquier rubro?", a: "Trabajamos con la mayoría de rubros B2C y B2B. Si vemos que no podemos generar resultados para tu negocio, te lo decimos de frente en el diagnóstico." },
  { q: "¿Hay permanencia o contrato forzado?", a: "Sugerimos un mínimo de 3 meses porque es lo que toma optimizar bien, pero no te amarramos con cláusulas abusivas. Si no funciona, eres libre de salir." },
  { q: "¿Qué incluye el diagnóstico gratis?", a: "Revisamos tu situación actual, detectamos oportunidades concretas y te mostramos cómo convertiríamos tu inversión en clientes. Sin compromiso y sin tecnicismos." },
];

const NAV = [
  ["#servicios", "Servicios"],
  ["#proceso", "Cómo trabajamos"],
  ["#resultados", "Resultados"],
  ["#faq", "Preguntas"],
];

export default function LandingClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleMenu = (open: boolean) => {
    setMenuOpen(open);
    if (typeof document !== "undefined") {
      document.body.classList.toggle("ga-menu-open", open);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") || "");
    const empresa = String(data.get("empresa") || "");
    const celular = String(data.get("celular") || "");
    const correo = String(data.get("correo") || "");
    const necesidad = String(data.get("necesidad") || "");

    setSending(true);
    try {
      await fetch("/api/landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          apellido: empresa || "-",
          email: correo,
          telefono: celular,
          mensaje: `Necesita: ${necesidad}`,
          website: "Landing /google-ads-lima",
        }),
      });
    } catch {
      /* ignore network error — still confirm to the user */
    }

    if (typeof window !== "undefined") {
      // @ts-expect-error dataLayer is injected by GTM
      window.dataLayer = window.dataLayer || [];
      // @ts-expect-error dataLayer push
      window.dataLayer.push({
        event: "generate_lead",
        form_location: "google-ads-lima",
        service: necesidad,
      });
    }
    setSending(false);
    setSent(true);
  };

  return (
    <div className="ga" id="top">
      {/* ============ HEADER ============ */}
      <header className="site-header">
        <div className="container nav">
          <a href="#top" className="brand" aria-label="3R Core"><img src="/icons/LogoLetrasBlanco.webp" alt="3R Core — Agencia de Marketing Digital" className="brand-logo" /></a>
          <nav className="nav-links">
            {NAV.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <div className="nav-cta">
            <a href="#proceso" className="btn btn-ghost">Cómo trabajamos</a>
            <a href="#contacto" className="btn btn-primary">Diagnóstico gratis</a>
            <button type="button" className="hamburger" aria-label="Menú" onClick={() => toggleMenu(!menuOpen)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {NAV.map(([href, label]) => (
            <a key={href} href={href} onClick={() => toggleMenu(false)}>{label}</a>
          ))}
          <a href="#contacto" className="btn btn-primary" onClick={() => toggleMenu(false)}>Diagnóstico gratis</a>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Agencia de Performance &amp; Google Ads · Lima</span>
              <h1>Más clientes,<br /><span className="grad-text">menos presupuesto quemado.</span></h1>
              <p className="hero-sub">Diseñamos y ejecutamos campañas de Google Ads, Meta Ads y redes sociales con una sola obsesión: que cada sol que inviertes regrese convertido en ventas.</p>
              <div className="hero-cta">
                <a href="#contacto" className="btn btn-primary">Quiero más clientes <ArrowIcon /></a>
                <a href="#proceso" className="btn btn-ghost">Ver cómo trabajamos</a>
              </div>
              <div className="hero-stats">
                <div><div className="num grad-text">+120</div><div className="lbl">Marcas escaladas</div></div>
                <div><div className="num grad-text">4.2x</div><div className="lbl">ROAS promedio</div></div>
                <div><div className="num grad-text">-38%</div><div className="lbl">Costo por lead</div></div>
              </div>
            </div>

            <div className="dash" aria-hidden="true">
              <div className="dash-top">
                <div className="dash-conv">
                  <span className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v6h-6" /></svg></span>
                  <div><div className="t1">Conversiones</div><div className="t2">+67%</div></div>
                </div>
                <div className="dash-camp">
                  <div className="t1">Campaña</div>
                  <div className="t2"><span className="gdot" />Google Ads Search</div>
                </div>
              </div>
              <div className="dash-row">
                <div className="dash-kpi"><div className="k">Inversión</div><div className="v">S/ 4,800</div></div>
                <div className="dash-kpi green"><div className="k">Ventas generadas</div><div className="v">S/ 20,160</div></div>
                <div className="dash-kpi real"><div><div className="k">Costo real por venta</div></div><div className="v grad-text">S/ 26</div></div>
              </div>
              <div className="dash-chart">
                {[38, 54, 46, 68, 60, 82, 74, 96].map((h, i) => (
                  <div key={i} className="bar" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="dash-badges">
                <span className="badge"><span className="d" style={{ background: "#1877f2" }}>f</span>Meta Ads</span>
                <span className="badge"><span className="d" style={{ background: "#000" }}>♪</span>TikTok Ads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LOGOS ============ */}
      <section className="logos">
        <div className="container">
          <div className="lbl">Marcas que ya crecen con nosotros</div>
          <div className="logos-row">
            {["HIDROMEC", "PDK", "ARGENTARIA", "PayPal", "EDIFICA", "domus"].map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROBLEMA ============ */}
      <section className="section" id="problema">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">El problema</span>
            <h2>¿Inviertes en publicidad y no ves el retorno?</h2>
            <p>Si te suena alguna de estas, no es que la publicidad no funcione. Falta un sistema detrás.</p>
          </div>
          <div className="cards-4">
            {PROBLEMS.map((p) => (
              <div className="pcard" key={p.t}>
                <span className="ic">{p.icon}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SISTEMA ============ */}
      <section className="section" style={{ background: "var(--bg-850)" }}>
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Nuestra forma de trabajar</span>
              <h2>No corremos anuncios sueltos. Construimos un <span className="grad-text">sistema de adquisición.</span></h2>
              <p className="lead">Conectamos pauta, página y seguimiento en un solo motor que captura, convierte y mide. Tú ves clientes entrando, nosotros nos encargamos de que cada campaña se pague sola.</p>
              {FEATURES.map((f) => (
                <div className="feat" key={f.t}>
                  <span className="chk"><CheckSm /></span>
                  <div><h4>{f.t}</h4><p>{f.d}</p></div>
                </div>
              ))}
            </div>
            <div className="compare">
              <div className="compare-head">
                <div className="a">Antes de 3R Core</div>
                <div className="b">Con 3R Core</div>
              </div>
              {COMPARE.map(([a, b]) => (
                <div className="compare-row" key={a}>
                  <div className="a"><CrossRow />{a}</div>
                  <div className="b"><CheckRow />{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICIOS ============ */}
      <section className="section" id="servicios">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Servicios</span>
            <h2>Todo lo que tu marca necesita para vender online</h2>
            <p>Performance y contenido bajo el mismo techo. Lo que conectamos, lo medimos.</p>
          </div>
          <div className="cards-3">
            <div className="scard">
              <span className="ic"><svg width="26" height="26" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0012 23z" /><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 010-4.2V7.06H2.18a11 11 0 000 9.88l3.66-2.84z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" /></svg></span>
              <h3>Google Ads</h3>
              <p>Aparece justo cuando tu cliente te está buscando y paga solo por resultados.</p>
              <div className="chips"><span className="chip">Search</span><span className="chip">YouTube</span><span className="chip">Performance Max</span><span className="chip">Shopping</span></div>
            </div>
            <div className="scard">
              <span className="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="metaGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0099ff" /><stop offset="1" stopColor="#a033ff" /></linearGradient></defs><path fill="url(#metaGrad)" d="M6.5 6C3.9 6 2 8.4 2 11.5S3.7 17 6.1 17c1.8 0 3-.9 4.6-3.5l1.3-2.2c.2-.3.3-.5.4-.5.2 0 .4.3.8 1l1.6 2.7C16.7 16.2 17.9 17 19.5 17c2.4 0 4-2.2 4-5.4C23.5 8.3 21.7 6 19.2 6c-1.6 0-2.9.9-4.4 3.3-.5.8-.7 1.1-.9 1.1-.2 0-.4-.3-.8-1C11.6 6.9 10.3 6 8.6 6z" /></svg></span>
              <h3>Meta Ads</h3>
              <p>Campañas en Facebook e Instagram que generan demanda y llenan tu pipeline.</p>
              <div className="chips"><span className="chip">Facebook</span><span className="chip">Instagram</span><span className="chip">Catálogo</span><span className="chip">Retargeting</span></div>
            </div>
            <div className="scard">
              <span className="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M16.6 5.8a4.3 4.3 0 01-1-2.8h-3.3v13.4a2.4 2.4 0 11-1.7-2.3V10.7a5.7 5.7 0 105 5.7V9.9a7.5 7.5 0 004.4 1.4V8a4.3 4.3 0 01-2.4-2.2z" /></svg></span>
              <h3>TikTok Ads</h3>
              <p>Llega a nuevas audiencias con creatividades que la frenan el scroll.</p>
              <div className="chips"><span className="chip">UGC</span><span className="chip">Spark Ads</span><span className="chip">Awareness</span></div>
            </div>
            <div className="scard">
              <span className="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ff5c8a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg></span>
              <h3>Social Media &amp; Community</h3>
              <p>Estrategia, contenido y gestión de tus redes pensados para vender, no solo publicar.</p>
              <div className="chips"><span className="chip">Parrilla</span><span className="chip">Diseño</span><span className="chip">Community</span></div>
            </div>
            <div className="scard">
              <span className="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ff5c8a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="M6 8h6M6 11h4" /></svg></span>
              <h3>Landing pages que convierten</h3>
              <p>Páginas rápidas y pensadas para que el clic termine en contacto o en compra.</p>
              <div className="chips"><span className="chip">UX/UI</span><span className="chip">A/B testing</span><span className="chip">Carga veloz</span></div>
            </div>
            <div className="scard">
              <span className="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ff5c8a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 14l3-3 3 3 5-6" /></svg></span>
              <h3>Analítica &amp; Reportes</h3>
              <p>Medición real de principio a fin. Nada de métricas de vanidad: lo que de verdad importa.</p>
              <div className="chips"><span className="chip">GA4</span><span className="chip">Dashboards</span><span className="chip">Reporte mensual</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PASOS ============ */}
      <section className="section" id="proceso" style={{ background: "var(--bg-850)" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Cómo trabajamos</span>
            <h2>De la idea a la venta en 5 pasos</h2>
            <p>Un método claro, sin cajas negras. Sabes qué pasa en cada etapa.</p>
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <div className="n">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RESULTADOS ============ */}
      <section className="section results" id="resultados">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Resultados</span>
            <h2>Números que se ven en la caja</h2>
            <p>Promedios de cuentas que gestionamos. Reemplazables con tus casos reales.</p>
          </div>
          <div className="results-grid">
            {RESULTS.map(([v, l]) => (
              <div className="rstat" key={l}><div className="v">{v}</div><div className="l">{l}</div></div>
            ))}
          </div>
          <p className="disclaimer">* Cifras de ejemplo. 3R Core comparte resultados y casos reales de la agencia antes de publicar.</p>
        </div>
      </section>

      {/* ============ TESTIMONIOS ============ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Lo que dicen</span>
            <h2>Clientes que dejaron de adivinar</h2>
          </div>
          <div className="cards-3">
            {TESTIMONIALS.map((q, i) => (
              <div className="tcard" key={i}>
                <div className="stars">★★★★★</div>
                <p className="quote">{`“${q}”`}</p>
                <div className="t-author">
                  <span className="av">N</span>
                  <div><div className="nm">Nombre Cliente</div><div className="rl">Gerente · Empresa (placeholder)</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section" id="faq" style={{ background: "var(--bg-850)" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2>Lo que todos preguntan antes de empezar</h2>
          </div>
          <div className="faq">
            {FAQS.map((f, i) => (
              <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
                <button type="button" className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}<span className="pm">+</span>
                </button>
                <div className="faq-a" style={{ maxHeight: openFaq === i ? "240px" : "0" }}>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL / FORM ============ */}
      <section className="cta-final" id="contacto">
        <div className="container">
          <div className="cta-box">
            <div className="ct">
              <h2>Pide tu diagnóstico gratis</h2>
              <p>Te mostramos en concreto cómo convertir tu inversión en clientes. Sin compromiso y sin tecnicismos.</p>
              <a href={WA_DIAG} target="_blank" rel="noopener" className="btn btn-wa"><WaIcon /> Escríbenos al WhatsApp</a>
            </div>

            {sent ? (
              <div className="form-ok">
                <div className="ok-ic"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></div>
                <h3>¡Listo! Recibimos tu solicitud</h3>
                <p>Te contactamos el mismo día hábil con tu diagnóstico. Si quieres adelantarlo, escríbenos al WhatsApp.</p>
              </div>
            ) : (
              <form className="lead-form" onSubmit={handleSubmit}>
                <div className="row">
                  <input type="text" name="nombre" placeholder="Nombre y apellido" required />
                  <input type="text" name="empresa" placeholder="Empresa" />
                  <input type="tel" name="celular" placeholder="Celular / WhatsApp" required />
                  <input type="email" name="correo" placeholder="Correo electrónico" required />
                  <select name="necesidad" aria-label="¿Qué necesitas?" required defaultValue="">
                    <option value="" disabled>¿Qué necesitas?</option>
                    <option>Google Ads</option>
                    <option>Meta Ads (Facebook / Instagram)</option>
                    <option>TikTok Ads</option>
                    <option>Social Media &amp; Community</option>
                    <option>Landing page</option>
                    <option>No estoy seguro / quiero asesoría</option>
                  </select>
                  <button type="submit" disabled={sending}>{sending ? "Enviando…" : "Quiero el diagnóstico"}</button>
                </div>
                <p className="form-note">Te respondemos el mismo día hábil. Tus datos están seguros con nosotros.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="site-footer">
        <div className="container">
          <div className="foot-grid">
            <div className="foot-brand">
              <a href="#top" className="brand" aria-label="3R Core"><img src="/icons/LogoLetrasBlanco.webp" alt="3R Core — Agencia de Marketing Digital" className="brand-logo" /></a>
              <p>Agencia de performance, Google Ads y redes sociales en Lima. Tu Éxito, Nuestro Éxito.</p>
            </div>
            <div className="foot-col">
              <h4>Servicios</h4>
              <a href="#servicios">Google Ads</a>
              <a href="#servicios">Meta Ads</a>
              <a href="#servicios">Social Media</a>
              <a href="#servicios">Landing Pages</a>
            </div>
            <div className="foot-col">
              <h4>Agencia</h4>
              <a href="#proceso">Cómo trabajamos</a>
              <a href="#resultados">Resultados</a>
              <a href="#contacto">Planes</a>
              <a href="#faq">Preguntas</a>
            </div>
            <div className="foot-col">
              <h4>Contacto</h4>
              <ul>
                <li>Calle Las Caobas 170, Of. 400</li>
                <li>Urb. El Remanso, La Molina, Lima</li>
                <li><a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener">WhatsApp: +51 987 216 703</a></li>
                <li>Lun a Vie · 9am a 6pm</li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <p>© 2026 3R Core. Todos los derechos reservados.</p>
            <div className="links">
              <a href="/es/politicas">Política de privacidad</a>
              <a href="/es/terminos">Términos y condiciones</a>
              <a href="/es/reclamaciones">Libro de reclamaciones</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ============ WHATSAPP FLOAT ============ */}
      <a href={WA_INFO} target="_blank" rel="noopener" className="wa-float" aria-label="WhatsApp"><WaIcon size={30} /></a>
    </div>
  );
}
