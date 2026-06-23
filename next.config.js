/** @type {import('next').NextConfig} */
const nextConfig = {
  // 308 permanent redirects for slugs cleaned of gratuitous recency-years and
  // listicle counts (2026-06-12). Old indexed URLs keep their equity.
  async redirects() {
    // 308 permanent: slug cleanup (gratuitous recency-years / listicle counts),
    // 2026-06-12. Old indexed URLs keep their equity. The decoding-payslip and
    // ntsa-2026 pairs were dropped here because those targets are now 410'd or
    // consolidated below.
    const slugCleanup = [
      ['mpesa-charges-2026-complete-fee-guide', 'mpesa-charges-complete-fee-guide'],
      ['how-to-reverse-mpesa-transaction-2026', 'how-to-reverse-mpesa-transaction'],
      ['7-legal-ways-kenyan-employees-can-reduce-their-paye', 'legal-ways-kenyan-employees-can-reduce-their-paye'],
      ['the-complete-guide-to-nssf-contributions-in-kenya-for-2026', 'the-complete-guide-to-nssf-contributions-in-kenya'],
      ['key-kra-tax-deadlines-every-kenyan-should-know-in-2026', 'key-kra-tax-deadlines-every-kenyan-should-know'],
    ]
    // 308 permanent: legacy autoblog posts consolidated into the silo during the
    // 2026-06-23 YMYL remediation (de-cannibalisation: a near-duplicate is 301'd
    // into the live spoke or tool page that owns its head term). Off-niche and
    // wrong-country removals with no target are 410'd in middleware.ts instead.
    const consolidated = [
      ['hidden-m-pesa-charges-and-whether-small-transactions-are-costing-you-more-than-you-think', '/blog/mpesa-charges-complete-fee-guide'],
      ['m-pesa-to-airtel-money-and-how-interoperability-affects-your-transfer-costs', '/blog/mpesa-vs-airtel-money-which-is-cheaper'],
      ['pesalink-vs-rtgs-and-which-is-better-for-sending-kes-500000-in-kenya', '/blog/rtgs-vs-mpesa-large-amounts'],
      ['logbook-transfer-fees-in-kenya-and-what-you-really-pay', '/vehicle-transfer'],
      ['ntsa-tims-how-to-transfer-car-ownership-on-ecitizen', '/vehicle-transfer'],
      ['ntsa-tims-in-2026-and-how-to-transfer-car-ownership-on-ecitizen', '/vehicle-transfer'],
      ['stamp-duty-in-kenya-and-what-it-really-costs-to-transfer-land', '/property-transfer'],
    ]
    return [
      ...slugCleanup.map(([from, to]) => ({
        source: `/blog/${from}`,
        destination: `/blog/${to}`,
        permanent: true,
      })),
      ...consolidated.map(([from, to]) => ({
        source: `/blog/${from}`,
        destination: to,
        permanent: true,
      })),
    ]
  },
}

module.exports = nextConfig
