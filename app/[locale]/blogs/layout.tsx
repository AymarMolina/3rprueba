import type { Metadata } from "next"
import { generatePageMetadata, generateBreadcrumbSchema, BASE_URL } from "@/lib/metadata"
import { buildBlogSchema, buildSpeakableSchema } from "@/lib/seoSchemas"
import { createServerClient } from "@/lib/supabase/server"

export const revalidate = 600

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata({
    locale,
    path: '/blogs',
    titleEs: 'Blog de Marketing Digital — SEO, Branding, Google Ads, Redes y Web | 3R Core',
    titleEn: 'Digital Marketing Blog — SEO, Branding, Google Ads, Social Media & Web | 3R Core',
    descriptionEs: 'Artículos, guías y casos reales sobre marketing digital en Perú: posicionamiento SEO en Google, branding corporativo, campañas de Google Ads, manejo de redes sociales y desarrollo web. Actualizado semanalmente por 3R Core.',
    descriptionEn: 'Articles, guides and real cases about digital marketing in Peru: SEO positioning, corporate branding, Google Ads campaigns, social media management and web development. Updated weekly by 3R Core.',
  })
}

export default async function BlogsLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const isEn = locale === 'en'

  const breadcrumbSchema = generateBreadcrumbSchema(
    [{ name: isEn ? 'Home' : 'Inicio', path: '' }, { name: 'Blog', path: '/blogs' }],
    locale
  )

  let blogSchema: any = null
  try {
    const supabase = createServerClient()
    const { data: posts } = await supabase
      .from('blog_posts')
      .select('title, slug, excerpt, published_at, featured_image, author_name')
      .eq('status', 'published')
      .eq('locale', isEn ? 'en' : 'es')
      .order('published_at', { ascending: false })
      .limit(10)
    if (posts && posts.length) {
      blogSchema = buildBlogSchema(locale, posts.map((p: any) => ({
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt || '',
        publishedAt: p.published_at,
        image: p.featured_image,
        author: p.author_name,
      })))
    }
  } catch {}

  if (!blogSchema) {
    blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${BASE_URL}/${locale}/blogs#blog`,
      "url": `${BASE_URL}/${locale}/blogs`,
      "name": isEn ? '3R Core Blog' : 'Blog 3R Core',
      "inLanguage": isEn ? 'en' : 'es',
      "publisher": { "@id": `${BASE_URL}/#organization` },
      "speakable": buildSpeakableSchema(['h1', 'h2']),
    }
  } else {
    blogSchema.speakable = buildSpeakableSchema(['h1', 'h2', '.blog-card-title', '.blog-card-excerpt'])
  }

  // Nota: el H1 lo aporta cada página hija (el índice /blogs y cada post
  // /blogs/[slug] tienen su propio <h1>). Antes este layout compartido metía
  // un <h1 className="sr-only"> que se sumaba al de la página → DOBLE H1 en las
  // ~139 URLs de blog (índice + todos los posts). Se elimina para dejar un solo
  // H1 por URL.
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([blogSchema, breadcrumbSchema]) }}
      />
      {children}
    </>
  )
}
