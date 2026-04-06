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
    <div className="min-h-screen py-8 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-5">
            <Hash className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Updated April 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            M-Pesa Paybill Directory
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-sm leading-relaxed">
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
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-center"
            >
              <div className="text-xl font-bold text-emerald-400">{count}</div>
              <div className="text-xs text-stone-400 mt-0.5">{category}</div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <PaybillSearch compact={false} />
        </div>

        {/* How to pay via paybill */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">How to Pay via M-Pesa Paybill</h2>
          <ol className="space-y-2 text-sm text-stone-400">
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
                <span className="w-5 h-5 bg-emerald-500/20 text-emerald-400 rounded-full text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-stone-600 text-center mt-6">
          Paybill numbers are verified at time of publication but may change. Always confirm with
          the organisation before large transactions.
        </p>
      </div>
    </div>
  )
}
