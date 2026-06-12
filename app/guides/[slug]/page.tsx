import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckCircle, Calculator } from 'lucide-react'
import { GUIDES, GUIDES_BY_SLUG } from '@/lib/guides'
import { spokesForHub } from '@/lib/all-blog-posts'
import { SpokeHero } from '@/components/SpokeHero'
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

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = GUIDES_BY_SLUG[params.slug]
  if (!guide) return { title: 'Guide Not Found' }
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      type: 'article',
      url: `${SITE_URL}/guides/${guide.slug}`,
    },
  }
}

export default function GuideHubPage({ params }: Props) {
  const guide = GUIDES_BY_SLUG[params.slug]
  if (!guide) notFound()

  const url = `${SITE_URL}/guides/${guide.slug}`
  const spokes = spokesForHub(guide.slug)
  const adjacent = guide.adjacentHubSlugs
    .map((s) => GUIDES_BY_SLUG[s])
    .filter(Boolean)

  const words =
    guide.keyPoints.join(' ').split(/\s+/).length +
    guide.sections.reduce((sum, s) => sum + s.paragraphs.join(' ').split(/\s+/).length, 0)
  const readMins = Math.max(3, Math.round(words / 200))

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(
        organizationSchema(),
        websiteSchema(),
        editorialEntitySchema(),
        breadcrumbSchema([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Guides', url: `${SITE_URL}/guides` },
          { name: guide.shortTitle, url },
        ]),
        articleSchemaFor({
          url,
          headline: guide.title,
          description: guide.metaDescription,
          datePublished: guide.publishedAt,
          dateModified: guide.lastReviewedAt,
        }),
        faqPageSchema(guide.faqs),
      )} />

      <article className="px-4">
        <div className="max-w-4xl mx-auto pt-10 pb-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-zinc-300">{guide.shortTitle}</span>
          </nav>

          <h1 className="sr-only">{guide.title}</h1>
          <SpokeHero title={guide.title} hubName="Guide hub" hubSlug={guide.slug} readMins={readMins} />

          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-space font-bold uppercase tracking-widest text-[#ccff00]">{guide.heroBadge}</span>
            <span className="text-xs text-zinc-600">By {EDITORIAL.byline} · Reviewed {guide.lastReviewedAt}</span>
          </div>

          <p className="mt-5 text-lg text-zinc-300 leading-relaxed">{guide.heroDirectAnswer}</p>

          {/* Tool pillars */}
          <div className="mt-7 grid sm:grid-cols-2 gap-3">
            {guide.toolPillars.map((t) => (
              <Link key={t.href} href={t.href} className="group flex items-center gap-3 border border-[#ccff00]/20 bg-[#ccff00]/[0.04] hover:bg-[#ccff00]/[0.08] p-4 transition-all">
                <Calculator className="w-5 h-5 text-[#ccff00] shrink-0" />
                <span className="flex-1 font-space font-bold text-white text-sm group-hover:text-[#ccff00] transition-colors">{t.label}</span>
                <ArrowRight className="w-4 h-4 text-[#ccff00] group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Key points */}
      <section className="px-4 py-6">
        <div className="max-w-4xl mx-auto border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <h2 className="text-sm font-space font-bold uppercase tracking-widest text-[#ccff00] mb-5">The short answer</h2>
          <ul className="space-y-4">
            {guide.keyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#ccff00] shrink-0 mt-0.5" />
                <span className="text-zinc-300 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sections */}
      <article className="px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {guide.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-2xl md:text-3xl font-space font-bold text-white mb-5">{section.heading}</h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                {section.paragraphs.map((p, j) => (<p key={j}>{p}</p>))}
              </div>
            </section>
          ))}
        </div>
      </article>

      {/* Spoke grid */}
      {spokes.length > 0 && (
        <section className="px-4 py-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-space font-bold text-white mb-2">In-depth on {guide.shortTitle.toLowerCase()}</h2>
            <p className="text-zinc-500 text-sm mb-6">Guides in this series.</p>
            <div className="grid md:grid-cols-2 gap-5">
              {spokes.map((spoke) => (
                <Link key={spoke.slug} href={`/blog/${spoke.slug}`} className="group bg-white/[0.02] border border-white/10 hover:border-[#ccff00]/50 p-6 transition-all">
                  <h3 className="font-bold text-white group-hover:text-[#ccff00] transition-colors mb-2">{spoke.title}</h3>
                  <p className="text-sm text-zinc-400 line-clamp-2">{spoke.metaDescription}</p>
                  <div className="flex items-center gap-2 text-[#ccff00] text-xs font-space font-bold uppercase tracking-widest mt-4">
                    Read guide <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-space font-bold text-white mb-6">{guide.shortTitle} questions answered</h2>
          <div className="space-y-4">
            {guide.faqs.map((faq, i) => (
              <details key={i} className="group border border-white/10 bg-white/[0.02] p-5">
                <summary className="font-space font-bold text-white cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-[#ccff00] group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="text-zinc-300 leading-relaxed mt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Adjacent hubs */}
      {adjacent.length > 0 && (
        <section className="px-4 py-10 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-space font-bold text-white mb-6">Continue across the guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {adjacent.map((h) => (
                <Link key={h.slug} href={`/guides/${h.slug}`} className="group bg-[#ccff00]/[0.03] border border-[#ccff00]/15 hover:border-[#ccff00]/40 p-5 transition-all">
                  <h3 className="font-bold text-white group-hover:text-[#ccff00] transition-colors">{h.title}</h3>
                  <div className="flex items-center gap-2 text-[#ccff00] text-xs font-space font-bold uppercase tracking-widest mt-3">
                    Open guide <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
