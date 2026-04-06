import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, ArrowRight, TrendingUp, Star } from 'lucide-react'
import { corridors } from '@/lib/remittance-corridors'

export const metadata: Metadata = {
  title: 'Best Ways to Send Money to Kenya 2026 | UK, USA, UAE, Germany',
  description:
    'Compare the cheapest and fastest ways to send money to Kenya from the UK, USA, UAE, Germany and Canada. Fees, exchange rates and M-Pesa delivery guides.',
  keywords: [
    'send money to Kenya',
    'remittance to Kenya 2026',
    'cheapest way to send money to Kenya',
    'UK to Kenya transfer',
    'USA to Kenya M-Pesa',
    'Dubai to Kenya money transfer',
  ],
  alternates: { canonical: 'https://transfer.co.ke/send-money-to-kenya' },
  openGraph: {
    title: 'Best Ways to Send Money to Kenya 2026 | Compare All Corridors',
    description:
      'UK, USA, UAE, Germany and Canada to Kenya — compare Wise, Sendwave, Remitly, WorldRemit fees and rates for M-Pesa and bank delivery.',
  },
}

export default function RemittanceHub() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-5">
            <Globe className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Global-to-Kenya Remittance Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Best Ways to Send Money to Kenya
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-sm leading-relaxed">
            Compare fees, exchange rates and delivery speeds for every major remittance corridor
            into Kenya. Updated weekly — covering M-Pesa, bank and cash delivery.
          </p>
        </div>

        {/* Key facts */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Corridors Covered', value: `${corridors.length}`, icon: Globe },
            { label: 'Providers Compared', value: '6+', icon: Star },
            { label: 'Updated', value: 'Weekly', icon: TrendingUp },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <Icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">{value}</div>
              <div className="text-stone-500 text-xs mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Corridor cards */}
        <h2 className="text-white font-bold text-lg mb-4">Select Your Country</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {corridors.map((corridor) => {
            const topProvider = corridor.providers[0]
            return (
              <Link
                key={corridor.slug}
                href={`/send-money-to-kenya/${corridor.slug}`}
                className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-5 hover:border-purple-500/40 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{corridor.flag}</span>
                    <div>
                      <h3 className="text-white font-bold group-hover:text-purple-400 transition-colors">
                        {corridor.country}
                      </h3>
                      <p className="text-stone-500 text-xs">{corridor.currencySymbol} {corridor.currencyCode}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-600 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500">Top pick</span>
                    <span className="text-purple-400 font-semibold">{topProvider.name}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500">Lowest fee</span>
                    <span className="text-emerald-400 font-semibold">{topProvider.fee}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500">Providers compared</span>
                    <span className="text-stone-300">{corridor.providers.length}</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-stone-600 text-xs">{corridor.diasporaSize}</p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Universal tips */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-bold mb-4">Universal Tips for Sending to Kenya</h2>
          <ul className="space-y-3 text-sm text-stone-400">
            {[
              'Always compare the total KES received — not just the headline fee. A zero-fee provider with a bad rate can cost more.',
              'M-Pesa delivery is fastest and most reliable — your recipient doesn\'t need a bank account.',
              'Bank account delivery is better for large amounts (above the KES 300,000 M-Pesa limit).',
              'Sendwave and Wise are the two most trusted providers across all corridors.',
              'Avoid sending over weekends if using bank accounts — processing delays are common.',
              'Set up a recurring transfer for regular remittances — most providers offer this for free.',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-purple-400 flex-shrink-0">→</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}
