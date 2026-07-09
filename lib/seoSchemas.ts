import { BASE_URL } from "./metadata"

export interface FAQItem {
  question: string
  answer: string
}

export function buildFAQPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((q) => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer,
      },
    })),
  }
}

interface ServiceSchemaParams {
  locale: string
  path: string
  nameEs: string
  nameEn: string
  descriptionEs: string
  descriptionEn: string
  serviceType: string
  priceRange?: string
  offerPriceEs?: number
  offerPriceEn?: number
  areaServed?: string[]
  audienceTypes?: string[]
}

export function buildServiceSchema(p: ServiceSchemaParams) {
  const isEn = p.locale === "en"
  const url = `${BASE_URL}/${p.locale}${p.path}`
  const offers: any = {}
  if (p.offerPriceEs && !isEn) {
    offers.offers = {
      "@type": "Offer",
      "price": p.offerPriceEs,
      "priceCurrency": "PEN",
      "availability": "https://schema.org/InStock",
      "url": url,
    }
  }
  if (p.offerPriceEn && isEn) {
    offers.offers = {
      "@type": "Offer",
      "price": p.offerPriceEn,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": url,
    }
  }
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": isEn ? p.nameEn : p.nameEs,
    "description": isEn ? p.descriptionEn : p.descriptionEs,
    "provider": { "@id": `${BASE_URL}/#organization` },
    "serviceType": p.serviceType,
    "areaServed": (p.areaServed ?? ["PE", "US"]).map((c) => ({ "@type": "Country", "name": c })),
    "audience": (p.audienceTypes ?? ["Small business", "Medium business", "Enterprise"]).map((a) => ({
      "@type": "Audience",
      "audienceType": a,
    })),
    "url": url,
    ...(p.priceRange && { "priceRange": p.priceRange }),
    ...offers,
  }
}

interface SpeakableWebPageParams {
  locale: string
  path: string
  nameEs: string
  nameEn: string
  cssSelector?: string[]
}

// WebPage node carrying a SpeakableSpecification so voice assistants / GEO
// engines know which passages (H1 + intro) are best to read aloud.
export function buildSpeakableWebPage(p: SpeakableWebPageParams) {
  const isEn = p.locale === "en"
  const url = `${BASE_URL}/${p.locale}${p.path}`
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": isEn ? p.nameEn : p.nameEs,
    "inLanguage": isEn ? "en" : "es",
    "isPartOf": { "@id": `${BASE_URL}/#website` },
    "about": { "@id": `${BASE_URL}/#organization` },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": p.cssSelector ?? ["h1", "h2"],
    },
  }
}

interface ItemListServiceParams {
  locale: string
  items: { name: string; path: string; description: string }[]
}

export function buildServiceItemList(p: ItemListServiceParams) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": p.items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `${BASE_URL}/${p.locale}${item.path}`,
      "name": item.name,
      "description": item.description,
    })),
  }
}

export interface FounderInput {
  name: string
  role: string
  image: string
  sameAs?: string[]
}

export function buildPersonSchemas(locale: string, founders: FounderInput[]) {
  return founders.map((f) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/${locale}/nosotros#${f.name.toLowerCase().replace(/\s+/g, '-')}`,
    "name": f.name,
    "jobTitle": f.role,
    "image": `${BASE_URL}${f.image}`,
    "worksFor": { "@id": `${BASE_URL}/#organization` },
    ...(f.sameAs && f.sameAs.length ? { "sameAs": f.sameAs } : {}),
  }))
}

export function buildSpeakableSchema(cssSelectors: string[] = ['h1', 'h2', '.faq-answer']) {
  return {
    "@type": "SpeakableSpecification",
    "cssSelector": cssSelectors,
  }
}

export interface BlogListItem {
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  image?: string
  author?: string
}

export function buildBlogSchema(locale: string, posts: BlogListItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE_URL}/${locale}/blogs#blog`,
    "url": `${BASE_URL}/${locale}/blogs`,
    "name": locale === 'en' ? '3R Core Blog' : 'Blog 3R Core',
    "description": locale === 'en'
      ? 'Articles on digital marketing, SEO, branding, social media, Google Ads and web development.'
      : 'Artículos sobre marketing digital, SEO, branding, redes sociales, Google Ads y desarrollo web.',
    "inLanguage": locale === 'en' ? 'en' : 'es',
    "publisher": { "@id": `${BASE_URL}/#organization` },
    "blogPost": posts.slice(0, 10).map((p) => ({
      "@type": "BlogPosting",
      "headline": p.title,
      "url": `${BASE_URL}/${locale}/blogs/${p.slug}`,
      "datePublished": p.publishedAt,
      "description": p.excerpt,
      ...(p.image ? { "image": p.image } : {}),
      ...(p.author ? { "author": { "@type": "Person", "name": p.author } } : {}),
    })),
  }
}

export interface PricingTier {
  name: string
  priceEs: number
  priceEn: number
  serviceType: string
  path: string
  descriptionEs: string
  descriptionEn: string
}

export function buildOfferCatalogSchema(locale: string, tiers: PricingTier[]) {
  const isEn = locale === 'en'
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${BASE_URL}/${locale}/precios#catalog`,
    "name": isEn ? '3R Core Pricing — Digital Marketing Services' : 'Precios 3R Core — Servicios de Marketing Digital',
    "url": `${BASE_URL}/${locale}/precios`,
    "itemListElement": tiers.map((t) => ({
      "@type": "Offer",
      "name": t.name,
      "price": isEn ? t.priceEn : t.priceEs,
      "priceCurrency": isEn ? 'USD' : 'PEN',
      "availability": "https://schema.org/InStock",
      "url": `${BASE_URL}/${locale}${t.path}`,
      "itemOffered": {
        "@type": "Service",
        "name": t.name,
        "serviceType": t.serviceType,
        "description": isEn ? t.descriptionEn : t.descriptionEs,
        "provider": { "@id": `${BASE_URL}/#organization` },
        "url": `${BASE_URL}/${locale}${t.path}`,
      },
    })),
  }
}

