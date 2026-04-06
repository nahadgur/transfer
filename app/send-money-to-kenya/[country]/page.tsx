import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Star, Clock, Zap, CheckCircle2, AlertCircle, Globe } from 'lucide-react'
import { corridors } from '@/lib/remittance-corridors'

type Props = { params: { country: string } }

export async function generateStaticParams() {
  return corridors.map((c) => ({ country: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const corridor = corridors.find((c) => c.slug === params.country)
  if (!corridor) return {}

  const title = `Send Money from ${corridor.country} to Kenya 2026 | Best Rates & Apps`
  const description = `Compare the cheapest ways to send money from ${corridor.country} to Kenya. ${corridor.providers[0].name} and ${corridor.providers[1]?.name} compared — fees, exchange rates, M-Pesa delivery.`

  return {
    title,
    description,
    keywords: [
      `send money from ${corridor.country} to Kenya`,
      `${corridor.country} to Kenya remittance`,
      `${corridor.country} to M-Pesa transfer`,
      `cheapest ${corridor.country} Kenya transfer 2026`,
      `${corridor.currencyCode} to KES`,
    ],
    alternates: { canonical: `https://transfer.co.ke/send-money-to-kenya/${corridor.slug}` },
    openGraph: { title, description },
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3 h-3 ${s <= Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-stone-600'}`}
        />
      ))}
      <span className="text-xs text-stone-500 ml-1">{rating}</span>
    </div>
  )
}

export default function CountryRemittancePage({ params }: Props) {
  const corridor = corridors.find((c) => c.slug === params.country)
  if (!corridor) notFound()

  const otherCorridors = corridors.filter((c) => c.slug !== corridor.slug).slice(0, 3)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Best Ways to Send Money from ${corridor.country} to Kenya 2026`,
    description: `Compare fees, exchange rates and delivery times for sending ${corridor.currencyCode} to Kenya. M-Pesa and bank account delivery options.`,
    url: `https://transfer.co.ke/send-money-to-kenya/${corridor.slug}`,
    author: { '@type': 'Organization', name: 'Transfer.co.ke' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://transfer.co.ke' },
        { '@type': 'ListItem', position: 2, name: 'Send Money to Kenya', item: 'https://transfer.co.ke/send-money-to-kenya' },
        { '@type': 'ListItem', position: 3, name: corridor.country, item: `https://transfer.co.ke/send-money-to-kenya/${corridor.slug}` },
      ],
    },
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <Link
          href="/send-money-to-kenya"
          className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors mb-6 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> All Corridors
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{corridor.flag}</span>
            <div>
              <div className="text-stone-500 text-xs mb-1 flex items-center gap-1">
                <Globe className="w-3 h-3" />
                {corridor.currencySymbol} {corridor.currencyCode} → KES
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">
                Send Money from {corridor.country} to Kenya
              </h1>
            </div>
          </div>
          <p className="text-stone-400 text-sm leading-relaxed">
            {corridor.diasporaSize} · {corridor.remittanceVolume}.
            Compare {corridor.providers.length} providers by total KES received.
          </p>
        </div>

        {/* Popular cities */}
        <div className="flex flex-wrap gap-2 mb-8">
          {corridor.popularCities.map((city) => (
            <span key={city} className="text-xs bg-white/5 border border-white/10 text-stone-400 px-3 py-1 rounded-full">
              {city}
            </span>
          ))}
        </div>

        {/* Provider comparison table */}
        <h2 className="text-white font-bold text-lg mb-4">
          Provider Comparison — {corridor.currencySymbol}100 to Kenya
        </h2>

        <div className="space-y-3 mb-8">
          {corridor.providers.map((provider, i) => (
            <div
              key={provider.name}
              className={`border rounded-2xl overflow-hidden transition-all ${
                i === 0
                  ? 'border-purple-500/40 bg-gradient-to-br from-purple-500/10 to-purple-900/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {i === 0 && (
                <div className="px-4 py-1.5 bg-purple-500/20 border-b border-purple-500/20">
                  <span className="text-purple-300 text-xs font-semibold">⭐ Best Value This Week</span>
                </div>
              )}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold">{provider.name}</h3>
                    <StarRating rating={provider.rating} />
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-400 font-bold text-sm">{provider.estimatedKES}</div>
                    <div className="text-stone-500 text-xs">received in Kenya</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3 text-xs">
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-stone-500 mb-0.5">Fee</div>
                    <div className="text-stone-300 font-medium">{provider.fee}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-stone-500 mb-0.5">Rate</div>
                    <div className="text-stone-300 font-medium">{provider.exchangeRateNote}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 col-span-2 sm:col-span-1">
                    <div className="text-stone-500 mb-0.5 flex items-center gap-1"><Clock className="w-3 h-3" />Speed</div>
                    <div className="text-stone-300 font-medium">{provider.speed}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-2">
                  {provider.deliveryMethods.map((method) => (
                    <span key={method} className="text-xs bg-white/5 border border-white/10 text-stone-400 px-2 py-0.5 rounded-full">
                      {method}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-stone-500">
                  <span className="text-stone-400 font-medium">Best for: </span>
                  {provider.bestFor}
                </p>

                {provider.promoNote && (
                  <div className="mt-2 flex items-start gap-1.5 text-xs text-amber-400">
                    <Zap className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    {provider.promoNote}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-stone-600 mb-8 text-center">
          Rates and fees are indicative and updated weekly. Always check the provider&apos;s app for the live rate before sending.
        </p>

        {/* How to send */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-white/10">
            <h2 className="text-white font-bold">How to Send Money from {corridor.country} to Kenya</h2>
          </div>
          <div className="p-5">
            <ol className="space-y-3">
              {corridor.howToSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 bg-purple-500/20 text-purple-400 rounded-full text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                    {i + 1}
                  </span>
                  <span className="text-stone-300 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Tax & regulatory notes */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
            <h3 className="text-amber-400 font-semibold text-xs uppercase tracking-wider mb-2">Tax Note</h3>
            <p className="text-stone-400 text-xs leading-relaxed">{corridor.taxNote}</p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
            <h3 className="text-blue-400 font-semibold text-xs uppercase tracking-wider mb-2">Regulatory</h3>
            <p className="text-stone-400 text-xs leading-relaxed">{corridor.regulatoryNote}</p>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
          <h2 className="text-white font-bold text-sm mb-3">
            Pro Tips for {corridor.country} → Kenya Transfers
          </h2>
          <ul className="space-y-2">
            {corridor.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-stone-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQs */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-8">
          <div className="px-5 py-4 border-b border-white/10">
            <h2 className="text-white font-bold text-sm">
              Frequently Asked Questions — {corridor.country} to Kenya
            </h2>
          </div>
          <div className="divide-y divide-white/5">
            {corridor.faqs.map((faq, i) => (
              <div key={i} className="px-5 py-4">
                <h3 className="text-white text-sm font-semibold mb-1.5">{faq.q}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other corridors */}
        <div>
          <h2 className="text-white font-bold text-sm mb-3">Other Remittance Guides</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {otherCorridors.map((c) => (
              <Link
                key={c.slug}
                href={`/send-money-to-kenya/${c.slug}`}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-purple-500/30 transition-colors group"
              >
                <span className="text-xl">{c.flag}</span>
                <span className="text-stone-300 text-sm group-hover:text-white transition-colors flex-1 truncate">
                  {c.country}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-600 group-hover:text-purple-400 transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
