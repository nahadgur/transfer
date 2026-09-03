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
  
  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
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
  
  // Define keyword to article mappings for natural interlinking
  const linkMappings = [
    { keywords: ['PAYE tax', 'PAYE calculation', 'calculate PAYE'], slug: 'how-to-calculate-your-paye-tax-in-kenya', title: 'How to Calculate PAYE Tax in Kenya' },
    { keywords: ['NSSF contribution', 'NSSF rate', 'NSSF 2026'], slug: 'the-complete-guide-to-nssf-contributions-in-kenya', title: 'Complete Guide to NSSF Contributions' },
    { keywords: ['SHIF', 'NHIF replacement', 'health insurance deduction'], slug: 'understanding-shif-deductions-in-kenya-and-what-replaced-nhif', title: 'Understanding SHIF Deductions' },
    { keywords: ['housing levy', 'affordable housing'], slug: 'everything-you-need-to-know-about-kenyas-housing-levy', title: "Kenya's Housing Levy Guide" },
    { keywords: ['net salary', 'calculate net pay', 'take-home pay'], slug: 'how-kenyan-employees-can-calculate-their-net-salary', title: 'How to Calculate Net Salary' },
    { keywords: ['gross salary', 'gross to net'], slug: 'working-backwards-from-net-to-gross-salary-in-kenya', title: 'Net to Gross Salary Calculator' },
    { keywords: ['reduce PAYE', 'tax savings', 'legal tax reduction'], slug: 'legal-ways-kenyan-employees-can-reduce-their-paye', title: '7 Ways to Reduce PAYE' },
    { keywords: ['insurance relief'], slug: 'how-insurance-relief-works-for-kenyan-taxpayers', title: 'Insurance Relief Guide' },
    { keywords: ['mortgage relief', 'mortgage interest'], slug: 'claiming-mortgage-interest-relief-on-your-kenyan-tax-return', title: 'Mortgage Interest Relief' },
    { keywords: ['pension contribution', 'maximize pension'], slug: 'why-kenyan-employees-should-max-out-their-pension-contributions', title: 'Pension Contributions Guide' },
    { keywords: ['disability tax', 'PWD tax benefit'], slug: 'tax-benefits-for-persons-with-disability-in-kenya', title: 'Tax Benefits for PWDs' },
    { keywords: ['KES 50,000 salary', '50000 salary'], slug: 'what-a-kes-50000-salary-actually-looks-like-after-tax-in-kenya', title: 'KES 50,000 Salary Breakdown' },
    { keywords: ['KES 100,000 salary', '100000 salary'], slug: 'take-home-pay-on-a-kes-100000-salary-in-kenya', title: 'KES 100,000 Salary Breakdown' },
    { keywords: ['KES 150,000 salary', '150000 salary'], slug: 'how-much-tax-do-you-pay-on-kes-150000-in-kenya', title: 'KES 150,000 Tax Guide' },
    { keywords: ['KES 200,000 salary', '200000 salary'], slug: 'the-real-cost-of-earning-kes-200000-in-kenya', title: 'KES 200,000 Salary Analysis' },
    { keywords: ['high earner tax', 'top tax bracket'], slug: 'paye-rates-for-high-earners-in-kenya-explained', title: 'PAYE for High Earners' },
    { keywords: ['bonus tax', '13th month'], slug: 'how-kenyan-employers-tax-your-bonus-and-13th-month-pay', title: 'Bonus Taxation Guide' },
    { keywords: ['freelance tax', 'freelancing vs employment'], slug: 'freelancing-vs-employment-in-kenya-and-which-pays-less-tax', title: 'Freelancing vs Employment Tax' },
    { keywords: ['HELB deduction', 'HELB repayment'], slug: 'how-helb-loan-repayments-are-deducted-from-kenyan-salaries', title: 'HELB Deductions Guide' },
    { keywords: ['change jobs tax', 'job change PAYE'], slug: 'what-happens-to-your-paye-when-you-change-jobs-in-kenya', title: 'PAYE When Changing Jobs' },
    { keywords: ['wrong PAYE', 'incorrect deduction'], slug: 'what-to-do-if-your-kenyan-employer-is-deducting-wrong-paye', title: 'Fixing Wrong PAYE Deductions' },
    { keywords: ['married filing', 'couples tax'], slug: 'how-kenyan-couples-can-file-taxes-together-or-separately', title: 'Tax Filing for Couples' },
    { keywords: ['cost of hiring', 'employer cost'], slug: 'the-true-cost-of-hiring-an-employee-in-kenya', title: 'Cost of Hiring in Kenya' },
    { keywords: ['employer NSSF', 'employer obligations'], slug: 'a-kenyan-employers-guide-to-nssf-and-housing-levy-obligations', title: 'Employer NSSF Guide' },
    { keywords: ['iTax', 'PAYE returns', 'filing returns'], slug: 'filing-paye-returns-on-itax-in-kenya-without-getting-penalised', title: 'iTax Filing Guide' },
    { keywords: ['benefits in kind', 'taxable benefits'], slug: 'taxable-benefits-in-kind-that-kenyan-employers-must-declare', title: 'Taxable Benefits Guide' },
    { keywords: ['Finance Bill 2025', '2025 tax changes'], slug: 'what-the-kenya-finance-bill-2025-means-for-your-salary', title: 'Finance Bill 2025 Impact' },
    { keywords: ['KRA deadline', 'tax deadline'], slug: 'key-kra-tax-deadlines-every-kenyan-should-know', title: 'KRA Tax Deadlines 2026' },
    { keywords: ['new NSSF', 'NSSF changes'], slug: 'how-the-new-nssf-rates-affect-kenyan-workers', title: 'New NSSF Rates Impact' },
    { keywords: ['Nairobi salary', 'living in Nairobi'], slug: 'what-salary-do-you-need-to-live-comfortably-in-nairobi', title: 'Nairobi Cost of Living' },
  ]

  // Add internal links (but not to the current article)
  linkMappings.forEach(mapping => {
    if (mapping.slug === currentSlug) return // Don't link to self
    
    mapping.keywords.forEach(keyword => {
      // Only replace first occurrence of each keyword to avoid over-linking
      const regex = new RegExp(`(?<!<[^>]*)\\b(${keyword})\\b(?![^<]*>)`, 'i')
      if (regex.test(processedContent)) {
        processedContent = processedContent.replace(
          regex,
          `<a href="/blog/${mapping.slug}" class="text-[#ccff00] hover:text-[#b3e600] underline">$1</a>`
        )
      }
    })
  })

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
  const reviewed = post.lastReviewedAt || post.publishedAt || '2026'
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
