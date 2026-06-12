/** @type {import('next').NextConfig} */
const nextConfig = {
  // 308 permanent redirects for slugs cleaned of gratuitous recency-years and
  // listicle counts (2026-06-12). Old indexed URLs keep their equity.
  async redirects() {
    const moved = [
      ['mpesa-charges-2026-complete-fee-guide', 'mpesa-charges-complete-fee-guide'],
      ['how-to-reverse-mpesa-transaction-2026', 'how-to-reverse-mpesa-transaction'],
      ['7-legal-ways-kenyan-employees-can-reduce-their-paye', 'legal-ways-kenyan-employees-can-reduce-their-paye'],
      ['the-complete-guide-to-nssf-contributions-in-kenya-for-2026', 'the-complete-guide-to-nssf-contributions-in-kenya'],
      ['key-kra-tax-deadlines-every-kenyan-should-know-in-2026', 'key-kra-tax-deadlines-every-kenyan-should-know'],
      ['decoding-your-2026-payslip-and-why-your-net-salary-changed-again', 'decoding-your-payslip-and-why-your-net-salary-changed-again'],
      ['ntsa-tims-in-2026-and-how-to-transfer-car-ownership-on-ecitizen', 'ntsa-tims-how-to-transfer-car-ownership-on-ecitizen'],
    ]
    return moved.map(([from, to]) => ({
      source: `/blog/${from}`,
      destination: `/blog/${to}`,
      permanent: true,
    }))
  },
}

module.exports = nextConfig
