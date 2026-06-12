import { blogPosts as taxBlogPosts } from './blog-data'
import type { BlogPost } from './blog-data'
import { blogTransfer4A } from './blog-transfer-4a'
import { blogTransfer4B } from './blog-transfer-4b'
import { blogTransfer4C } from './blog-transfer-4c'

export type { BlogPost }

// ── Hub mapping (see lib/guides.ts) ───────────────────────────────────────
// The transfer spokes (ids 101-111) map to their pillar hubs. Legacy tax/salary
// posts predate the transfer silo and belong to none of the ten transfer hubs,
// so they stay unmapped (hub ''): present in /blog, absent from every hub grid.
// The writer can also set `hub`/`draft` inline on a post; an inline value wins.
const HUB_MAP: Record<string, string> = {
  'mpesa-charges-2026-complete-fee-guide': 'mpesa-charges',
  'mpesa-vs-airtel-money-which-is-cheaper': 'mpesa-charges',
  'how-to-reverse-mpesa-transaction-2026': 'mpesa-charges',
  'rtgs-vs-mpesa-large-amounts': 'bank-transfers',
  'worldremit-vs-remitly-vs-wise-hidden-costs-kenya': 'remittance',
  'how-to-send-money-from-paypal-to-mpesa': 'remittance',
  'binance-crypto-to-mpesa-kenya': 'remittance',
  'accept-international-payments-kenya': 'remittance',
  'how-to-apply-for-mpesa-till-number-kenya': 'paybill-till',
  'best-payment-gateways-kenyan-ecommerce': 'paybill-till',
  'how-to-pay-kplc-nhif-nssf-via-mpesa': 'kplc-tokens',
}

// Combined: new transfer posts first (appear as Featured), then existing tax posts.
const rawPosts: BlogPost[] = [
  ...blogTransfer4C,
  ...blogTransfer4B,
  ...blogTransfer4A,
  ...taxBlogPosts,
]

// Normalise the draft gate + hub fields so every consumer can rely on them.
// An inline value set on the post wins over the central map / default.
export const allBlogPosts: BlogPost[] = rawPosts.map((p) => ({
  ...p,
  hub: p.hub ?? HUB_MAP[p.slug] ?? '',
  draft: p.draft ?? false,
}))

// Live (non-draft) posts only — the set used by /blog, hub spoke-grids and the
// sitemap. Draft posts are parked until the publisher flips them live.
export const livePosts: BlogPost[] = allBlogPosts.filter((p) => !p.draft)

// Spokes shown under a hub: live posts whose hub matches.
export function spokesForHub(hubSlug: string): BlogPost[] {
  return livePosts.filter((p) => p.hub === hubSlug)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((p) => p.slug === slug)
}
