import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Legacy autoblog /blog posts removed in the 2026-06-23 YMYL remediation with
// no suitable redirect target: off-niche for a money-transfer site (home
// internet, phone resale, data-privacy, business permits) or wrong-country
// content (UK/US) mistakenly published under a Kenyan slug. These return 410
// Gone so search engines de-index them cleanly. Near-duplicate posts that DID
// have a silo target are 308-redirected in next.config.js instead.
const GONE_BLOG_SLUGS = new Set([
  'zuku-vs-safaricom-home-and-the-real-cost-of-moving-your-internet-connection',
  'how-to-sell-your-phone-safely-in-kenya-without-ownership-disputes',
  'your-data-privacy-rights-when-moving-to-a-new-service-provider-in-kenya',
  'how-to-transfer-a-business-permit-when-moving-locations-in-kenya',
  'decoding-your-payslip-and-why-your-net-salary-changed-again',
  'decoding-your-2026-payslip-and-why-your-net-salary-changed-again',
  'how-to-dispute-a-wrong-water-bill-reading-and-push-for-a-refund',
  'how-to-verify-a-vehicle-transfer-before-paying-for-a-used-car',
])

export function middleware(req: NextRequest) {
  const m = req.nextUrl.pathname.match(/^\/blog\/([^/]+)\/?$/)
  if (m && GONE_BLOG_SLUGS.has(m[1])) {
    return new NextResponse('410 Gone. This page has been removed.', {
      status: 410,
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/blog/:slug*',
}
