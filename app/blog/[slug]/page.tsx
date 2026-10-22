import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { allBlogPosts as blogPosts, livePosts } from '@/lib/all-blog-posts'
import { GUIDES_BY_SLUG } from '@/lib/guides'
import { SpokeHero } from '@/components/SpokeHero'
import CalculatorBanner from '@/components/CalculatorBanner'
import RelatedArticles from '@/components/RelatedArticles'
import {
  SITE_URL,
  EDITORIAL,
  organizationSchema,
  websiteSchema,
  editorialEntitySchema,
  breadcrumbSchema,
  faqPageSchema,
  articleSchemaFor,
  jsonLd,
} from '@/lib/schema'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'

interface Props {
  params: { slug: string }
}

// Draft spokes are not pre-rendered; live posts only.
export async function generateStaticParams() {
  return livePosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post || post.draft) {
    return {
      title: 'Article Not Found',
      robots: { index: false, follow: false },
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://www.transfer.co.ke/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url: `https://www.transfer.co.ke/blog/${post.slug}`,
    },
  }
}

// Category colors for badge
const categoryColors: Record<string, string> = {
  'Tax': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Salary': 'bg-green-500/20 text-green-400 border-green-500/30',
  'NSSF': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Pension': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  'Housing Levy': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Health Insurance': 'bg-red-500/20 text-red-400 border-red-500/30',
  'Employers': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'Tax Relief': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'HELB': 'bg-teal-500/20 text-teal-400 border-teal-500/30',
  'KRA': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
}

// Function to insert internal links into content
function processContent(content: string, currentSlug: string): string {
  let processedContent = content
  
  // Style images for better display
  processedContent = processedContent.replace(
    /<img([^>]*)>/gi, 
    '<img$1 class="rounded-lg my-6 mx-auto max-w-full h-auto shadow-md" loading="lazy">'
  )
  
  // Keep editorially authored links only. Automatic HTML regex linking previously
  // inserted links into draft/redirected URLs and could modify attributes.

  return processedContent
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  // Draft gate: drafts 404 until the publisher flips them live.
  if (!post || post.draft) {
    notFound()
  }

  const processedContent = processContent(post.content, post.slug)
  const hub = post.hub ? GUIDES_BY_SLUG[post.hub] : undefined
  const reviewed = post.lastReviewedAt || post.publishedAt || '2026-06-23'
  const url = `${SITE_URL}/blog/${post.slug}`
  const plain = post.content.replace(/<[^>]+>/g, ' ')
  const readMins = Math.max(3, Math.round(plain.split(/\s+/).filter(Boolean).length / 200))

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(
        organizationSchema(),
        websiteSchema(),
        editorialEntitySchema(),
        breadcrumbSchema([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Blog', url: `${SITE_URL}/blog` },
          ...(hub ? [{ name: hub.shortTitle, url: `${SITE_URL}/guides/${hub.slug}` }] : []),
          { name: post.title, url },
        ]),
        articleSchemaFor({
          url,
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.publishedAt || reviewed,
          dateModified: reviewed,
        }),
        ...(post.faqs && post.faqs.length ? [faqPageSchema(post.faqs)] : []),
      )} />

      {/* Header */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#ccff00]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Category badge + hub up-link */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[post.category] || 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30'}`}>
              <Tag className="w-3 h-3 inline mr-1" />
              {post.category}
            </span>
            {hub && (
              <Link href={`/guides/${hub.slug}`} className="text-xs font-medium text-[#ccff00] hover:underline">
                {hub.shortTitle} hub
              </Link>
            )}
          </div>

          {/* Visually-hidden h1 for a11y/SEO; the SVG carries the visible title */}
          <h1 className="sr-only">{post.title}</h1>
          <SpokeHero
            title={post.title}
            hubName={hub ? hub.shortTitle : null}
            hubSlug={post.hub || post.slug}
            readMins={readMins}
          />

          {/* Meta info */}
          <p className="text-lg text-zinc-400 mt-6 mb-6">
            {post.metaDescription}
          </p>

          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>By {EDITORIAL.byline}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Reviewed {reviewed}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readMins} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Banner - Top */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <CalculatorBanner calculatorKey={post.calculator} />
        </div>
      </section>

      {/* Article Content */}
      <article className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        </div>
      </article>

      {/* Calculator Banner - Bottom */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <CalculatorBanner calculatorKey={post.calculator} />
        </div>
      </section>

      {/* Related Articles */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <RelatedArticles 
            currentSlug={post.slug} 
            relatedSlugs={post.relatedSlugs} 
          />
        </div>
      </section>
    </div>
  )
}
