import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeftRight, Smartphone, Building2 } from 'lucide-react'
import { bankBridges } from '@/lib/bank-bridge-data'

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
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-5">
            <ArrowLeftRight className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Both directions covered</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            M-Pesa ↔ Bank Transfer Guide
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-sm leading-relaxed">
            Step-by-step instructions to move money between M-Pesa and every major Kenyan bank.
            Covers both directions — paybill numbers, USSD codes, fees and limits.
          </p>
        </div>

        {/* Direction cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="font-bold text-white">M-Pesa → Bank</h2>
            </div>
            <p className="text-stone-400 text-sm">
              Send from your M-Pesa wallet directly into any Kenyan bank account using Paybill.
              Usually free, instant, and works on any phone.
            </p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="font-bold text-white">Bank → M-Pesa</h2>
            </div>
            <p className="text-stone-400 text-sm">
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
              className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-5 hover:border-emerald-500/40 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${bank.color} rounded-xl flex items-center justify-center text-lg`}>
                    {bank.logo}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm group-hover:text-emerald-400 transition-colors">
                      {bank.name}
                    </h3>
                    <p className="text-stone-500 text-xs">Paybill: {bank.paybill} · USSD: {bank.ussdCode}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
              </div>
              <div className="mt-3 flex items-center gap-3 text-xs text-stone-500">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
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
        <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10">
            <h2 className="text-white font-bold text-sm">Quick Paybill Reference</h2>
            <p className="text-stone-500 text-xs mt-0.5">All M-Pesa → Bank paybill numbers at a glance</p>
          </div>
          <div className="divide-y divide-white/5">
            {bankBridges.map((bank) => (
              <div key={bank.slug} className="flex items-center justify-between px-5 py-3">
                <span className="text-stone-300 text-sm">{bank.name}</span>
                <code className="text-emerald-400 font-mono font-bold text-sm bg-emerald-500/10 px-3 py-1 rounded-lg">
                  {bank.paybill}
                </code>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
