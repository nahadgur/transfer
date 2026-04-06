import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  Phone,
  ArrowLeftRight,
} from 'lucide-react'
import { bankBridges } from '@/lib/bank-bridge-data'

type Props = { params: { bank: string } }

export async function generateStaticParams() {
  return bankBridges.map((b) => ({ bank: b.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const bank = bankBridges.find((b) => b.slug === params.bank)
  if (!bank) return {}

  const title = `M-Pesa to ${bank.name} Transfer Guide 2026 | Paybill ${bank.paybill}`
  const description = `How to transfer money from M-Pesa to ${bank.name} and from ${bank.name} to M-Pesa. Step-by-step guide, Paybill ${bank.paybill}, USSD ${bank.ussdCode}, fees and limits.`

  return {
    title,
    description,
    keywords: [
      `M-Pesa to ${bank.name}`,
      `${bank.name} to M-Pesa`,
      `${bank.name} paybill number`,
      `${bank.name} M-Pesa transfer`,
      `send money ${bank.name} Kenya`,
      `${bank.paybill} paybill`,
    ],
    alternates: { canonical: `https://transfer.co.ke/mpesa-to-bank/${bank.slug}` },
    openGraph: {
      title,
      description,
    },
  }
}

export default function BankBridgePage({ params }: Props) {
  const bank = bankBridges.find((b) => b.slug === params.bank)
  if (!bank) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Transfer Money from M-Pesa to ${bank.name}`,
    description: `Step-by-step guide to move money between M-Pesa and ${bank.name} in Kenya.`,
    url: `https://transfer.co.ke/mpesa-to-bank/${bank.slug}`,
    step: bank.mpesaToBank.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: step,
    })),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://transfer.co.ke' },
        { '@type': 'ListItem', position: 2, name: 'M-Pesa to Bank', item: 'https://transfer.co.ke/mpesa-to-bank' },
        { '@type': 'ListItem', position: 3, name: bank.name, item: `https://transfer.co.ke/mpesa-to-bank/${bank.slug}` },
      ],
    },
  }

  const otherBanks = bankBridges.filter((b) => b.slug !== bank.slug).slice(0, 4)

  return (
    <div className="min-h-screen py-8 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <Link
          href="/mpesa-to-bank"
          className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors mb-6 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> All Banks
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${bank.color} rounded-xl flex items-center justify-center text-xl`}>
              {bank.logo}
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                <ArrowLeftRight className="w-3 h-3" />
                M-Pesa ↔ {bank.name}
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">
                M-Pesa to {bank.name} Transfer Guide
              </h1>
            </div>
          </div>
          <p className="text-stone-400 text-sm leading-relaxed">
            Everything you need to move money between M-Pesa and {bank.name} — paybill numbers,
            USSD codes, step-by-step instructions and fee breakdowns.
          </p>
        </div>

        {/* Quick facts strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'Paybill', value: bank.paybill, color: 'text-emerald-400' },
            { label: 'USSD', value: bank.ussdCode, color: 'text-blue-400' },
            { label: 'M-Pesa→Bank Fee', value: bank.mpesaToBank.fee.includes('Free') ? 'Free' : bank.mpesaToBank.fee, color: 'text-green-400' },
            { label: 'Processing', value: bank.mpesaToBank.processingTime, color: 'text-amber-400' },
          ].map((fact) => (
            <div key={fact.label} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <div className={`font-bold text-sm ${fact.color}`}>{fact.value}</div>
              <div className="text-stone-600 text-xs mt-0.5">{fact.label}</div>
            </div>
          ))}
        </div>

        {/* ── SECTION 1: M-Pesa → Bank ── */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-900/10 border border-emerald-500/20 rounded-2xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-emerald-500/20 flex items-center gap-2">
            <div className="w-7 h-7 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <span className="text-emerald-400 text-xs font-bold">1</span>
            </div>
            <h2 className="text-white font-bold">M-Pesa → {bank.name}</h2>
            <span className="ml-auto text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              {bank.mpesaToBank.fee.includes('Free') ? '✓ Free' : bank.mpesaToBank.fee}
            </span>
          </div>

          <div className="p-5">
            {/* Steps */}
            <ol className="space-y-3 mb-5">
              {bank.mpesaToBank.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 bg-emerald-500/20 text-emerald-400 rounded-full text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                    {i + 1}
                  </span>
                  <span className="text-stone-300 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>

            {/* Details grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-4 text-sm">
              <div className="bg-white/5 rounded-xl p-3">
                <div className="text-stone-500 text-xs mb-1">Account Format</div>
                <div className="text-stone-300">{bank.mpesaToBank.accountFormat}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <div className="text-stone-500 text-xs mb-1">Amount Limits</div>
                <div className="text-stone-300">
                  Min: KES {bank.mpesaToBank.minAmount.toLocaleString()} · Max: KES {bank.mpesaToBank.maxAmount.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Notes */}
            {bank.mpesaToBank.notes.map((note, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-stone-500 mb-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                {note}
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 2: Bank → M-Pesa ── */}
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-900/10 border border-blue-500/20 rounded-2xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-blue-500/20 flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <span className="text-blue-400 text-xs font-bold">2</span>
            </div>
            <h2 className="text-white font-bold">{bank.name} → M-Pesa</h2>
            <span className="ml-auto text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">
              {bank.bankToMpesa.fee}
            </span>
          </div>

          <div className="p-5">
            <ol className="space-y-3 mb-5">
              {bank.bankToMpesa.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 bg-blue-500/20 text-blue-400 rounded-full text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                    {i + 1}
                  </span>
                  <span className="text-stone-300 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>

            <div className="grid sm:grid-cols-2 gap-3 mb-4 text-sm">
              <div className="bg-white/5 rounded-xl p-3">
                <div className="text-stone-500 text-xs mb-1">Processing Time</div>
                <div className="flex items-center gap-1.5 text-stone-300">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  {bank.bankToMpesa.processingTime}
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <div className="text-stone-500 text-xs mb-1">Max Per Transaction</div>
                <div className="text-stone-300">KES {bank.bankToMpesa.maxAmount.toLocaleString()}</div>
              </div>
            </div>

            {bank.bankToMpesa.notes.map((note, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-stone-500 mb-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                {note}
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-white/10">
            <h2 className="text-white font-bold text-sm">
              Frequently Asked Questions — M-Pesa & {bank.name}
            </h2>
          </div>
          <div className="divide-y divide-white/5">
            {bank.faqs.map((faq, i) => (
              <div key={i} className="px-5 py-4">
                <h3 className="text-white text-sm font-semibold mb-1.5">{faq.q}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer care */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4 mb-8">
          <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Phone className="w-4 h-4 text-stone-400" />
          </div>
          <div>
            <div className="text-white text-sm font-semibold">{bank.name} Customer Care</div>
            <div className="text-stone-400 text-sm">{bank.customerCare} · Available Mon–Sat</div>
          </div>
        </div>

        {/* Other banks */}
        <div>
          <h2 className="text-white font-bold text-sm mb-3">Other Bank Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {otherBanks.map((b) => (
              <Link
                key={b.slug}
                href={`/mpesa-to-bank/${b.slug}`}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-emerald-500/30 transition-colors group"
              >
                <div className={`w-8 h-8 bg-gradient-to-br ${b.color} rounded-lg flex items-center justify-center text-sm`}>
                  {b.logo}
                </div>
                <span className="text-stone-300 text-sm group-hover:text-white transition-colors flex-1">
                  M-Pesa ↔ {b.name}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-600 group-hover:text-emerald-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
