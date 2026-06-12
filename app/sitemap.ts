import { MetadataRoute } from 'next'
import { livePosts } from '@/lib/all-blog-posts'
import { GUIDES } from '@/lib/guides'
import { SITE_URL } from '@/lib/schema'

// Generated sitemap. Draft spokes are excluded until the publisher flips them
// live. Tool, country and bank routes are listed explicitly to preserve the
// coverage the previous static sitemap had.

const TOOL_ROUTES = [
  '/',
  '/mpesa-calculator',
  '/bank-transfer',
  '/remittance',
  '/send-money-to-kenya',
  '/mpesa-to-bank',
  '/paybill-directory',
  '/ussd-codes',
  '/mpesa-status',
  '/vehicle-transfer',
  '/property-transfer',
  '/import-duty',
  '/kplc-transfer',
  '/pension-transfer',
  '/mobile-portability',
]

const COUNTRY_ROUTES = ['uk', 'usa', 'uae', 'germany', 'canada'].map(
  (c) => `/send-money-to-kenya/${c}`,
)

const BANK_ROUTES = ['equity', 'kcb', 'coop', 'ncba', 'absa', 'dtb', 'family-bank', 'stanbic'].map(
  (b) => `/mpesa-to-bank/${b}`,
)

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const fixed = [...TOOL_ROUTES, ...COUNTRY_ROUTES, ...BANK_ROUTES, '/blog', '/guides'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1.0 : 0.8,
  }))

  const guideRoutes = GUIDES.map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.lastReviewedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogRoutes = livePosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.lastReviewedAt ? new Date(p.lastReviewedAt) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...fixed, ...guideRoutes, ...blogRoutes]
}
