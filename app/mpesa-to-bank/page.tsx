import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeftRight, Smartphone, Building2 } from 'lucide-react'
import { bankBridges } from '@/lib/bank-bridge-data'
import BankIcon from '@/components/BankIcon'

export const metadata: Metadata = {
  title: 'M-Pesa to Bank Transfer Guide Kenya 2026 | All Banks',
  description:
    'Step-by-step guides to transfer money between M-Pesa and every major Kenyan bank — Equity, KCB, Co-op, NCBA, Absa, DTB and more. Both directions covered.',
  keywords: [
    'M-Pesa to bank transfer Kenya',
    'bank to M-Pesa Kenya',
    'M-Pesa Equity transfer',
    'M-Pesa KCB',
    'send money M-Pesa to bank account',
    'Kenya bank transfer guide 2026',
  ],
  alternates: { canonical: 'https://transfer.co.ke/mpesa-to-bank' },
  openGraph: {
    title: 'M-Pesa ↔ Bank Transfer Guide Kenya | All Major Banks',
    description:
      'How to move money between M-Pesa and Equity, KCB, Co-op, NCBA, Absa and more. Step-by-step guides, fees, limits and USSD codes.',
  },
}

export default function MpesaToBankHub() {
  return (
    <div className="min-h-screen bg-[#050505] py-8 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ccff00]/10 rounded-full border border-[#ccff00]/20 mb-5">
            <ArrowLeftRight className="w-4 h-4 text-[#ccff00]" />
            <span className="text-[#ccff00] text-xs font-space font-bold uppercase tracking-widest">Both directions covered</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            M-Pesa ↔ Bank Transfer Guide
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
            Step-by-step instructions to move money between M-Pesa and every major Kenyan bank.
            Covers both directions — paybill numbers, USSD codes, fees and limits.
          </p>
        </div>

        {/* Direction cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-[#ccff00]/10 border border-[#ccff00]/20  p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-[#ccff00]/20  flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-[#ccff00]" />
              </div>
              <h2 className="font-bold text-white">M-Pesa → Bank</h2>
            </div>
            <p className="text-zinc-400 text-sm">
              Send from your M-Pesa wallet directly into any Kenyan bank account using Paybill.
              Usually free, instant, and works on any phone.
            </p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20  p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-blue-500/20  flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="font-bold text-white">Bank → M-Pesa</h2>
            </div>
            <p className="text-zinc-400 text-sm">
              Transfer from your bank account to any M-Pesa number via USSD or mobile app.
              Small fees apply — money lands instantly.
            </p>
          </div>
        </div>

        {/* Bank grid */}
        <h2 className="text-white font-bold text-lg mb-4">Select Your Bank</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {bankBridges.map((bank) => (
            <Link
              key={bank.slug}
              href={`/mpesa-to-bank/${bank.slug}`}
              className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10  p-5 hover:border-[#ccff00]/40 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <BankIcon initial={bank.initial} bgColor={bank.bgColor} />
                  <div>
                    <h3 className="text-white font-bold text-sm group-hover:text-[#ccff00] transition-colors">
                      {bank.name}
                    </h3>
                    <p className="text-zinc-500 text-xs">Paybill: {bank.paybill} · USSD: {bank.ussdCode}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-[#ccff00] group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
              </div>
              <div className="mt-3 flex items-center gap-3 text-xs text-zinc-500">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full" />
                  M-Pesa → {bank.shortName}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  {bank.shortName} → M-Pesa
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick reference table */}
        <div className="mt-10 bg-white/5 border border-white/10  overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10">
            <h2 className="text-white font-bold text-sm">Quick Paybill Reference</h2>
            <p className="text-zinc-500 text-xs mt-0.5">All M-Pesa → Bank paybill numbers at a glance</p>
          </div>
          <div className="divide-y divide-white/5">
            {bankBridges.map((bank) => (
              <div key={bank.slug} className="flex items-center justify-between px-5 py-3">
                <span className="text-zinc-300 text-sm">{bank.name}</span>
                <code className="text-[#ccff00] font-mono font-bold text-sm bg-[#ccff00]/10 px-3 py-1 rounded-lg">
                  {bank.paybill}
                </code>
              </div>
            ))}
          </div>
        </div>

      {/* Related tools */}
      <section className="mt-14 mb-2 max-w-4xl mx-auto px-4">
        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Related tools</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/mpesa-calculator" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30  p-4 transition-all group">
            <span className="text-xl shrink-0">🧮</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">M-Pesa Fee Calculator</p>
              <p className="text-zinc-500 text-xs mt-0.5">Calculate fees for any amount</p>
            </div>
          </Link>
          <Link href="/remittance" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30  p-4 transition-all group">
            <span className="text-xl shrink-0">🌍</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">International Transfers</p>
              <p className="text-zinc-500 text-xs mt-0.5">Send money abroad from Kenya</p>
            </div>
          </Link>
          <Link href="/paybill-directory" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30  p-4 transition-all group">
            <span className="text-xl shrink-0">📋</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">Paybill Directory</p>
              <p className="text-zinc-500 text-xs mt-0.5">Pay directly without bank transfer</p>
            </div>
          </Link>
          <Link href="/ussd-codes" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30  p-4 transition-all group">
            <span className="text-xl shrink-0">📱</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">USSD Codes</p>
              <p className="text-zinc-500 text-xs mt-0.5">Shortcodes for bank-linked transfers</p>
            </div>
          </Link>
        </div>
      </section>

      </div>
    </div>
  )
}
