import Link from 'next/link'
import type { Metadata } from 'next'
import { Hash } from 'lucide-react'
import PaybillSearch from '@/components/PaybillSearch'
import { paybillData, paybillCategories } from '@/lib/paybill-data'

export const metadata: Metadata = {
  title: 'M-Pesa Paybill Directory Kenya 2026 | All Paybill Numbers',
  description:
    'The ultimate M-Pesa Paybill & Till number directory for Kenya. Banks, utilities, government, schools, hospitals, insurance — search and copy in seconds.',
  keywords: [
    'M-Pesa paybill numbers Kenya',
    'KPLC paybill number',
    'KRA paybill',
    'Equity Bank paybill',
    'KCB paybill',
    'NHIF paybill',
    'NSSF paybill',
    'paybill directory Kenya 2026',
  ],
  alternates: { canonical: 'https://transfer.co.ke/paybill-directory' },
  openGraph: {
    title: 'M-Pesa Paybill Directory Kenya 2026 | All Numbers in One Place',
    description:
      'Search paybill numbers for banks, utilities, government agencies, hospitals and more. The most complete M-Pesa paybill directory in Kenya.',
  },
}

const categoryStats = paybillCategories
  .filter((c) => c !== 'All')
  .map((cat) => ({
    category: cat,
    count: paybillData.filter((e) => e.category === cat).length,
  }))

export default function PaybillDirectoryPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'M-Pesa Paybill Directory Kenya 2026',
    description:
      'Complete directory of M-Pesa Paybill and Till numbers for Kenyan banks, utilities, government agencies, hospitals and schools.',
    url: 'https://transfer.co.ke/paybill-directory',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://transfer.co.ke' },
        { '@type': 'ListItem', position: 2, name: 'Paybill Directory', item: 'https://transfer.co.ke/paybill-directory' },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-[#050505] py-8 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ccff00]/10 rounded-full border border-[#ccff00]/20 mb-5">
            <Hash className="w-4 h-4 text-[#ccff00]" />
            <span className="text-[#ccff00] text-xs font-space font-bold uppercase tracking-widest">Updated April 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            M-Pesa Paybill Directory
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
            The most complete paybill and till number directory in Kenya. Search by company name
            or number, then tap to copy. Covers {paybillData.length}+ entries across{' '}
            {categoryStats.length} categories.
          </p>
        </div>

        {/* Category overview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
          {categoryStats.map(({ category, count }) => (
            <div
              key={category}
              className="bg-white/[0.02] border border-white/10 p-3 text-center"
            >
              <div className="text-xl font-bold text-[#ccff00]">{count}</div>
              <div className="text-xs text-zinc-400 mt-0.5">{category}</div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="bg-white/[0.02] border border-white/10 p-6">
          <PaybillSearch compact={false} />
        </div>

        {/* How to pay via paybill */}
        <div className="mt-10 bg-white/[0.02] border border-white/10 p-6">
          <h2 className="text-lg font-bold text-white mb-4">How to Pay via M-Pesa Paybill</h2>
          <ol className="space-y-2 text-sm text-zinc-400">
            {[
              'Dial *334# on your Safaricom line',
              'Select "Lipa na M-Pesa"',
              'Select "Pay Bill"',
              'Enter the Business Number (Paybill) from the table above',
              'Enter your Account Number (varies per company — shown above)',
              'Enter the Amount',
              'Enter your M-Pesa PIN and confirm',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 bg-[#ccff00]/20 text-[#ccff00] rounded-full text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-zinc-600 text-center mt-6">
          Paybill numbers are verified at time of publication but may change. Always confirm with
          the organisation before large transactions.
        </p>
      {/* Related tools */}
      <section className="mt-14 mb-2 max-w-4xl mx-auto px-4">
        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Related tools</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/mpesa-calculator" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30  p-4 transition-all group">
            <span className="text-xl shrink-0">🧮</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">M-Pesa Fee Calculator</p>
              <p className="text-zinc-500 text-xs mt-0.5">Calculate fees before paying</p>
            </div>
          </Link>
          <Link href="/ussd-codes" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30  p-4 transition-all group">
            <span className="text-xl shrink-0">📱</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">USSD Codes</p>
              <p className="text-zinc-500 text-xs mt-0.5">Shortcodes for every M-Pesa action</p>
            </div>
          </Link>
          <Link href="/mpesa-status" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30  p-4 transition-all group">
            <span className="text-xl shrink-0">📡</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">M-Pesa System Status</p>
              <p className="text-zinc-500 text-xs mt-0.5">Check if M-Pesa is currently down</p>
            </div>
          </Link>
          <Link href="/mpesa-to-bank" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30  p-4 transition-all group">
            <span className="text-xl shrink-0">🏦</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">M-Pesa to Bank</p>
              <p className="text-zinc-500 text-xs mt-0.5">Transfer to your bank account</p>
            </div>
          </Link>
        </div>
      </section>

      </div>
    </div>
  )
}
