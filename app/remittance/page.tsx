'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Globe, ArrowLeft, Trophy, Clock, Star, TrendingUp, AlertCircle } from 'lucide-react'

// ── Exchange rates (update weekly) ────────────────────────────────────────
// Last updated: April 2026
const RATES: Record<string, number> = {
  USD: 129.50,
  GBP: 166.30,
  EUR: 143.10,
  CAD: 95.20,
  AED: 35.25,
}

const RATE_UPDATED = 'April 2026'

// ── Provider data ─────────────────────────────────────────────────────────
type Provider = {
  name: string
  initial: string
  bgColor: string
  transferFee: number        // fixed fee in sending currency
  percentFee: number         // percentage of amount (0–5)
  fxMargin: number           // % below mid-market rate (0–5)
  speed: string
  delivery: string[]
  rating: number
  promoNote?: string
}

const PROVIDERS: Provider[] = [
  {
    name: 'Sendwave',
    initial: 'S',
    bgColor: 'bg-blue-600',
    transferFee: 0,
    percentFee: 0,
    fxMargin: 0.9,
    speed: 'Instant',
    delivery: ['M-Pesa', 'Bank'],
    rating: 4.9,
    promoNote: 'Zero fees — earns only on exchange rate',
  },
  {
    name: 'Wise',
    initial: 'W',
    bgColor: 'bg-teal-600',
    transferFee: 0,
    percentFee: 0.57,
    fxMargin: 0,
    speed: '1–24 hrs',
    delivery: ['Bank', 'M-Pesa'],
    rating: 4.8,
    promoNote: 'Mid-market rate — no FX markup',
  },
  {
    name: 'Remitly',
    initial: 'R',
    bgColor: 'bg-indigo-600',
    transferFee: 0,
    percentFee: 0,
    fxMargin: 1.5,
    speed: 'Minutes',
    delivery: ['M-Pesa', 'Bank'],
    rating: 4.6,
    promoNote: 'First transfer often discounted',
  },
  {
    name: 'WorldRemit',
    initial: 'W',
    bgColor: 'bg-purple-600',
    transferFee: 2.99,
    percentFee: 0,
    fxMargin: 1.8,
    speed: 'Minutes',
    delivery: ['M-Pesa', 'Bank', 'Cash'],
    rating: 4.4,
  },
  {
    name: 'M-Pesa Global',
    initial: 'M',
    bgColor: 'bg-green-600',
    transferFee: 0,
    percentFee: 0,
    fxMargin: 3.5,
    speed: 'Instant',
    delivery: ['M-Pesa'],
    rating: 4.1,
  },
  {
    name: 'Western Union',
    initial: 'W',
    bgColor: 'bg-yellow-600',
    transferFee: 5.00,
    percentFee: 2.0,
    fxMargin: 4.0,
    speed: 'Minutes',
    delivery: ['Cash', 'M-Pesa', 'Bank'],
    rating: 3.5,
  },
]

const CORRIDORS = [
  { code: 'USD', label: 'US Dollar', flag: 'US', from: 'USA' },
  { code: 'GBP', label: 'British Pound', flag: 'GB', from: 'UK' },
  { code: 'EUR', label: 'Euro', flag: 'EU', from: 'Europe' },
  { code: 'CAD', label: 'Canadian Dollar', flag: 'CA', from: 'Canada' },
  { code: 'AED', label: 'UAE Dirham', flag: 'AE', from: 'UAE' },
]

const DEFAULT_AMOUNTS: Record<string, number> = {
  USD: 200, GBP: 200, EUR: 200, CAD: 200, AED: 500,
}

function calcResult(provider: Provider, amount: number, midRate: number) {
  const pctFee   = (amount * provider.percentFee) / 100
  const totalFee = provider.transferFee + pctFee
  const sending  = amount - totalFee
  const rate     = midRate * (1 - provider.fxMargin / 100)
  const received = Math.max(0, sending * rate)
  const totalCost = totalFee + (amount * provider.fxMargin / 100)
  const costPct   = (totalCost / amount) * 100
  return { received, totalFee, rate, totalCost, costPct }
}

export default function RemittancePage() {
  const [currency, setCurrency] = useState('USD')
  const [amount, setAmount]     = useState(200)
  const [rawInput, setRawInput] = useState('200')

  const midRate  = RATES[currency] ?? 129.5
  const corridor = CORRIDORS.find(c => c.code === currency)!

  const ranked = useMemo(() => {
    return PROVIDERS
      .map(p => ({ ...p, result: calcResult(p, amount, midRate) }))
      .sort((a, b) => b.result.received - a.result.received)
  }, [amount, midRate])

  const winner  = ranked[0]
  const second  = ranked[1]
  const savingVsWinner = second
    ? winner.result.received - second.result.received
    : 0

  const fmtKES = (n: number) =>
    'KES ' + Math.round(n).toLocaleString('en-KE')
  const fmtCurr = (n: number) =>
    currency + ' ' + n.toFixed(2)
  const fmtPct = (n: number) => n.toFixed(2) + '%'

  function handleCurrencyChange(code: string) {
    setCurrency(code)
    const def = DEFAULT_AMOUNTS[code]
    setAmount(def)
    setRawInput(String(def))
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">

        <Link href="/" className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to all tools
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Remittance Comparison Engine</h1>
          <p className="text-stone-400 text-sm">
            See exactly how much KES your recipient gets — ranked by who delivers the most
          </p>
          <p className="text-xs text-stone-600 mt-1 flex items-center justify-center gap-1">
            <TrendingUp className="w-3 h-3" />
            Rates updated {RATE_UPDATED} · Mid-market: 1 {currency} = {midRate.toFixed(2)} KES
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Currency selector */}
            <div>
              <label className="block text-sm text-stone-400 mb-3 font-medium">Sending from</label>
              <div className="flex flex-wrap gap-2">
                {CORRIDORS.map(c => (
                  <button
                    key={c.code}
                    onClick={() => handleCurrencyChange(c.code)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                      currency === c.code
                        ? 'bg-purple-500/20 border-purple-500 text-purple-300'
                        : 'bg-white/5 border-white/10 text-stone-400 hover:border-white/20'
                    }`}
                  >
                    {c.from}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm text-stone-400 mb-3 font-medium">
                Amount ({currency})
              </label>
              <div className="flex items-center gap-2">
                <span className="text-stone-500 font-bold text-sm shrink-0">{currency}</span>
                <input
                  type="number"
                  min={10}
                  value={rawInput}
                  onChange={e => {
                    setRawInput(e.target.value)
                    const n = Number(e.target.value)
                    if (!isNaN(n) && n >= 1) setAmount(n)
                  }}
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white text-xl font-bold focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div className="flex gap-2 mt-3">
                {[50, 100, 200, 500].map(q => (
                  <button
                    key={q}
                    onClick={() => { setAmount(q); setRawInput(String(q)) }}
                    className={`flex-1 py-1.5 rounded-lg text-xs transition-colors ${
                      amount === q ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50' : 'bg-white/5 text-stone-400 hover:bg-white/10'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Winner banner */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-900/20 border border-emerald-500/30 rounded-2xl p-5 mb-6 flex items-start gap-4">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shrink-0">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-0.5">Winner this week</p>
            <p className="text-white font-bold text-lg leading-tight">
              {winner.name} delivers the most KES — {fmtKES(winner.result.received)}
            </p>
            {second && savingVsWinner > 0 && (
              <p className="text-stone-400 text-sm mt-1">
                {savingVsWinner.toLocaleString('en-KE', { maximumFractionDigits: 0 })} KES more than {second.name} on {currency} {amount}
              </p>
            )}
            {winner.promoNote && (
              <p className="text-emerald-400/70 text-xs mt-1.5">{winner.promoNote}</p>
            )}
          </div>
        </div>

        {/* Ranked provider list */}
        <div className="space-y-3 mb-8">
          {ranked.map((p, i) => {
            const isWinner = i === 0
            return (
              <div
                key={p.name}
                className={`rounded-2xl border p-5 transition-all ${
                  isWinner
                    ? 'border-emerald-500/40 bg-gradient-to-r from-white/10 to-white/5'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Rank + logo */}
                  <div className="shrink-0 flex flex-col items-center gap-1">
                    <span className={`text-xs font-bold ${isWinner ? 'text-emerald-400' : 'text-stone-600'}`}>
                      #{i + 1}
                    </span>
                    <div className={`w-10 h-10 ${p.bgColor} rounded-xl flex items-center justify-center text-white font-black text-base`}>
                      {p.initial}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-white font-bold">{p.name}</h3>
                          {isWinner && (
                            <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">Best value</span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 mt-0.5">
                          {[1,2,3,4,5].map(s => (
                            <Star key={s} className={`w-3 h-3 ${s <= Math.round(p.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-stone-600'}`} />
                          ))}
                          <span className="text-xs text-stone-500 ml-1">{p.rating}</span>
                        </div>
                      </div>

                      {/* KES received — the headline number */}
                      <div className="text-right shrink-0">
                        <span className="text-xs text-stone-500">Recipient gets</span>
                        <div className={`text-xl font-black ${isWinner ? 'text-emerald-400' : 'text-white'}`}>
                          {fmtKES(p.result.received)}
                        </div>
                      </div>
                    </div>

                    {/* Detail grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-stone-500 mb-0.5">Transfer fee</div>
                        <div className="text-stone-300 font-semibold">
                          {p.result.totalFee === 0 ? 'Free' : fmtCurr(p.result.totalFee)}
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-stone-500 mb-0.5">FX margin</div>
                        <div className={`font-semibold ${p.fxMargin === 0 ? 'text-emerald-400' : 'text-stone-300'}`}>
                          {p.fxMargin === 0 ? 'None' : fmtPct(p.fxMargin)}
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-stone-500 mb-0.5 flex items-center gap-1"><Clock className="w-2.5 h-2.5" />Speed</div>
                        <div className="text-stone-300 font-semibold">{p.speed}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <div className="text-stone-500 mb-0.5">True cost</div>
                        <div className="text-stone-300 font-semibold">
                          {fmtPct(p.result.costPct)}
                        </div>
                      </div>
                    </div>

                    {/* Delivery + promo */}
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      {p.delivery.map(d => (
                        <span key={d} className="text-xs bg-white/5 border border-white/10 text-stone-400 px-2 py-0.5 rounded-full">{d}</span>
                      ))}
                      {p.promoNote && (
                        <span className="text-xs text-emerald-400/70 italic">{p.promoNote}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex gap-3">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-stone-400 leading-relaxed">
            <span className="text-amber-400 font-semibold">Indicative rates only. </span>
            Actual amounts vary with live exchange rates and provider-specific conditions. Always check the provider&apos;s app for the exact amount before sending.
            Rates and fees last updated <strong className="text-stone-300">{RATE_UPDATED}</strong>.
          </p>
        </div>

      </div>
    </div>
  )
}
