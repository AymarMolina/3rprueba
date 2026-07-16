import type { MetadataRoute } from 'next'
import { createServerClient } from '@/lib/supabase/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://3rcore.com'

  const staticPages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    // 3 pilares del negocio: SEO, SEM (Google Ads) y Web/Tiendas Virtuales.
    { path: '/posicionamiento-seo', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/servicios/google-ads', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/tiendas-virtuales-lima', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/servicios/web-development', priority: 0.92, changeFrequency: 'weekly' as const },
    { path: '/servicios/socialmedia', priority: 0.92, changeFrequency: 'weekly' as const },
    { path: '/servicios/branding', priority: 0.92, changeFrequency: 'weekly' as const },
    { path: '/precios', priority: 0.9, changeFrequency: 'weekly' as const },
    // Reversión (2026-07-15): las páginas de servicio /servicios/* y
    // /posicionamiento-seo vuelven a ser las páginas objetivo (las usa comercial
    // para vender). Las money pages /agencia-*-lima ahora 301 hacia ellas (ver
    // next.config.ts), por eso ya NO se listan aquí.
    { path: '/servicios', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/nosotros', priority: 0.8, changeFrequency: 'monthly' as const },
    // Subpáginas de servicios de nicho (NO consolidadas por 301): son landings
    // propias sin equivalente en las money pages /agencia-*-lima, por eso SÍ se
    // listan aquí. (SEO CREA 2026-07-08)
    { path: '/servicios/meta-ads', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/servicios/tiktok-ads', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/servicios/performance-marketing', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/servicios/email-marketing', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/servicios/marketing-clinicas', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/servicios/marketing-inmobiliarias', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/servicios/marketing-ecommerce', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blogs', priority: 0.7, changeFrequency: 'daily' as const },
    { path: '/preguntas', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/politicas', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terminos', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/reclamaciones', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}/es${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    alternates: {
      languages: {
        es: `${baseUrl}/es${page.path}`,
        en: `${baseUrl}/en${page.path}`,
        'x-default': `${baseUrl}/es${page.path}`,
      },
    },
  }))

  let blogEntries: MetadataRoute.Sitemap = []
  let hasEnglishPosts = false
  try {
    const supabase = createServerClient()
    const { data: posts } = await supabase
      .from('blog_posts')
      .select('slug, updated_at, locale')
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    if (posts) {
      hasEnglishPosts = posts.some((p) => p.locale === 'en')
      blogEntries = posts.map((post) => ({
        url: `${baseUrl}/${post.locale}/blogs/${post.slug}`,
        lastModified: new Date(post.updated_at),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
        alternates: {
          languages: {
            es: `${baseUrl}/es/blogs/${post.slug}`,
            ...(hasEnglishPosts && { en: `${baseUrl}/en/blogs/${post.slug}` }),
            'x-default': `${baseUrl}/es/blogs/${post.slug}`,
          },
        },
      }))
    }
  } catch {
    // Silently fail
  }

  return [...staticEntries, ...blogEntries]
}
