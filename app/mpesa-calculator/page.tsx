'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Smartphone, ArrowLeft, Send, Wallet, Building2, Trophy, Info } from 'lucide-react'

const MPESA_SEND_FEES = [
  { min: 1,     max: 100,    registered: 0,   unregistered: 0 },
  { min: 101,   max: 500,    registered: 7,   unregistered: 18 },
  { min: 501,   max: 1000,   registered: 13,  unregistered: 22 },
  { min: 1001,  max: 1500,   registered: 23,  unregistered: 35 },
  { min: 1501,  max: 2500,   registered: 33,  unregistered: 55 },
  { min: 2501,  max: 3500,   registered: 53,  unregistered: 77 },
  { min: 3501,  max: 5000,   registered: 57,  unregistered: 88 },
  { min: 5001,  max: 7500,   registered: 78,  unregistered: 105 },
  { min: 7501,  max: 10000,  registered: 90,  unregistered: 115 },
  { min: 10001, max: 15000,  registered: 100, unregistered: 145 },
  { min: 15001, max: 20000,  registered: 105, unregistered: 163 },
  { min: 20001, max: 35000,  registered: 108, unregistered: 180 },
  { min: 35001, max: 50000,  registered: 108, unregistered: 197 },
  { min: 50001, max: 150000, registered: 108, unregistered: 222 },
]

const MPESA_WITHDRAW_FEES = [
  { min: 1,     max: 100,    fee: 0 },
  { min: 101,   max: 500,    fee: 11 },
  { min: 501,   max: 1000,   fee: 22 },
  { min: 1001,  max: 1500,   fee: 33 },
  { min: 1501,  max: 2500,   fee: 33 },
  { min: 2501,  max: 3500,   fee: 35 },
  { min: 3501,  max: 5000,   fee: 55 },
  { min: 5001,  max: 7500,   fee: 77 },
  { min: 7501,  max: 10000,  fee: 88 },
  { min: 10001, max: 15000,  fee: 99 },
  { min: 15001, max: 20000,  fee: 105 },
  { min: 20001, max: 35000,  fee: 108 },
  { min: 35001, max: 50000,  fee: 111 },
  { min: 50001, max: 150000, fee: 111 },
]

const fmt = (n: number) =>
  new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n)

function getSendFee(amount: number, registered: boolean) {
  const tier = MPESA_SEND_FEES.find(t => amount >= t.min && amount <= t.max)
  if (!tier) return null
  return registered ? tier.registered : tier.unregistered
}

function getWithdrawFee(amount: number) {
  const tier = MPESA_WITHDRAW_FEES.find(t => amount >= t.min && amount <= t.max)
  return tier?.fee ?? null
}

const QUICK = [500, 1000, 2500, 5000, 10000, 35000, 50000, 100000]

export default function MpesaCalculator() {
  const [amount, setAmount] = useState(5000)
  const [rawInput, setRawInput] = useState('5000')

  const sendFeeReg   = getSendFee(amount, true)
  const sendFeeUnreg = getSendFee(amount, false)
  const withdrawFee  = getWithdrawFee(amount)
  const paybillFee   = 0
  const overLimit    = amount > 150000

  const results = [
    { id: 'send',     label: 'Send to M-Pesa',      sublabel: 'Registered recipient', icon: Send,      fee: sendFeeReg,  color: 'emerald', note: 'Recipient must have M-Pesa' },
    { id: 'withdraw', label: 'Withdraw at Agent',    sublabel: 'Cash out at agent',    icon: Wallet,    fee: withdrawFee, color: 'amber',   note: 'Collect cash from M-Pesa agent' },
    { id: 'paybill',  label: 'Paybill / Bank / Till',sublabel: 'Bill or bank deposit', icon: Building2, fee: paybillFee,  color: 'blue',    note: 'Banks, utilities, government — always free' },
  ]

  const validFees = results.map(r => r.fee).filter((f): f is number => f !== null)
  const minFee    = validFees.length ? Math.min(...validFees) : null

  function handleInput(val: string) {
    setRawInput(val)
    const n = Number(val)
    if (!isNaN(n) && n >= 1) setAmount(n)
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to all tools
        </Link>

        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Smartphone className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">M-Pesa Fee Calculator</h1>
          <p className="text-stone-400 text-sm">Enter an amount — compare all three methods side by side</p>
        </div>

        {/* Amount input */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
          <label className="block text-sm text-stone-400 mb-3 font-medium">Amount (KES)</label>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-stone-500 font-semibold text-lg shrink-0">KES</span>
            <input
              type="number" min={1} max={150000}
              value={rawInput}
              onChange={e => handleInput(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-2xl font-bold focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <input
            type="range" min={100} max={150000} step={100}
            value={Math.min(amount, 150000)}
            onChange={e => { const n = Number(e.target.value); setAmount(n); setRawInput(String(n)) }}
            className="w-full accent-emerald-500 mb-1"
          />
          <div className="flex justify-between text-xs text-stone-600 mb-4">
            <span>KES 100</span><span>KES 150,000</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {QUICK.map(q => (
              <button key={q} onClick={() => { setAmount(q); setRawInput(String(q)) }}
                className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${amount === q ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50' : 'bg-white/5 text-stone-400 hover:bg-white/10'}`}>
                {fmt(q)}
              </button>
            ))}
          </div>
        </div>

        {overLimit && (
          <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-sm text-red-400 flex gap-2">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            M-Pesa maximum is KES 150,000 per transaction. Use RTGS or EFT via your bank for larger amounts.
          </div>
        )}

        {/* Side-by-side cards */}
        {!overLimit && amount >= 1 && (
          <>
            <div className="grid sm:grid-cols-3 gap-4 mb-5">
              {results.map(r => {
                const isCheapest = r.fee !== null && r.fee === minFee
                const isFree     = r.fee === 0
                const isNull     = r.fee === null
                const colorMap   = { emerald: { ring: 'border-emerald-500/50 bg-gradient-to-b from-emerald-500/10 to-emerald-900/10', icon: 'bg-emerald-500/20', text: 'text-emerald-400' }, amber: { ring: 'border-amber-500/50 bg-gradient-to-b from-amber-500/10 to-amber-900/10', icon: 'bg-amber-500/20', text: 'text-amber-400' }, blue: { ring: 'border-blue-500/50 bg-gradient-to-b from-blue-500/10 to-blue-900/10', icon: 'bg-blue-500/20', text: 'text-blue-400' } } as const
                const c = colorMap[r.color as keyof typeof colorMap]
                return (
                  <div key={r.id} className={`relative rounded-2xl border p-5 transition-all ${isCheapest ? c.ring : 'border-white/10 bg-white/5'}`}>
                    {isCheapest && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          <Trophy className="w-3 h-3" /> Cheapest
                        </span>
                      </div>
                    )}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${c.icon}`}>
                      <r.icon className={`w-5 h-5 ${c.text}`} />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-0.5">{r.label}</h3>
                    <p className="text-stone-500 text-xs mb-4">{r.sublabel}</p>
                    {isNull ? (
                      <p className="text-stone-600 text-sm">Out of range</p>
                    ) : (
                      <>
                        <div className="mb-1">
                          <span className="text-xs text-stone-500">Fee</span>
                          <div className={`text-2xl font-black mt-0.5 ${isFree ? 'text-emerald-400' : c.text}`}>
                            {isFree ? 'FREE' : fmt(r.fee!)}
                          </div>
                        </div>
                        <div className="border-t border-white/10 pt-3 mt-3">
                          <span className="text-xs text-stone-500">Total needed</span>
                          <div className="text-sm font-bold text-stone-300 mt-0.5">{fmt(amount + (r.fee ?? 0))}</div>
                        </div>
                      </>
                    )}
                    <p className="text-xs text-stone-600 mt-3 leading-relaxed">{r.note}</p>
                  </div>
                )
              })}
            </div>

            {/* Unregistered note */}
            {sendFeeUnreg !== null && sendFeeReg !== null && sendFeeUnreg > sendFeeReg && (
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-4 flex gap-2 text-sm">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-stone-400">
                  <span className="text-amber-400 font-semibold">Sending to an unregistered number?</span>{' '}
                  Fee is {fmt(sendFeeUnreg)} — {fmt(sendFeeUnreg - sendFeeReg)} more. Ask them to register for M-Pesa first.
                </span>
              </div>
            )}

            {/* Paybill tip */}
            {sendFeeReg !== null && sendFeeReg > 0 && (
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6 flex gap-2 text-sm">
                <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-stone-400">
                  <span className="text-blue-400 font-semibold">Bank deposit tip: </span>
                  If the recipient has a bank account, use Paybill instead of Send Money — it&apos;s free. Save {fmt(sendFeeReg)} on this transaction.
                </span>
              </div>
            )}
          </>
        )}

        {/* Fee tables */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 overflow-x-auto">
            <h2 className="text-sm font-bold text-white mb-4">Send Money — Full Fee Table (KES)</h2>
            <table className="w-full text-xs">
              <thead><tr className="border-b border-white/10">
                <th className="text-left py-2 text-stone-500">Amount Range</th>
                <th className="text-right py-2 text-stone-500">Registered</th>
                <th className="text-right py-2 text-stone-500">Unregistered</th>
              </tr></thead>
              <tbody>
                {MPESA_SEND_FEES.map((t, i) => {
                  const active = amount >= t.min && amount <= t.max
                  return (
                    <tr key={i} className={`border-b border-white/5 ${active ? 'bg-emerald-500/10' : 'hover:bg-white/5'}`}>
                      <td className={`py-2 ${active ? 'text-emerald-300 font-semibold' : 'text-stone-400'}`}>{t.min.toLocaleString()}–{t.max.toLocaleString()}</td>
                      <td className="py-2 text-right text-emerald-400">{t.registered === 0 ? 'Free' : t.registered}</td>
                      <td className="py-2 text-right text-amber-400">{t.unregistered === 0 ? 'Free' : t.unregistered}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 overflow-x-auto">
            <h2 className="text-sm font-bold text-white mb-4">Withdraw at Agent — Full Fee Table (KES)</h2>
            <table className="w-full text-xs">
              <thead><tr className="border-b border-white/10">
                <th className="text-left py-2 text-stone-500">Amount Range</th>
                <th className="text-right py-2 text-stone-500">Fee</th>
              </tr></thead>
              <tbody>
                {MPESA_WITHDRAW_FEES.map((t, i) => {
                  const active = amount >= t.min && amount <= t.max
                  return (
                    <tr key={i} className={`border-b border-white/5 ${active ? 'bg-amber-500/10' : 'hover:bg-white/5'}`}>
                      <td className={`py-2 ${active ? 'text-amber-300 font-semibold' : 'text-stone-400'}`}>{t.min.toLocaleString()}–{t.max.toLocaleString()}</td>
                      <td className="py-2 text-right text-amber-400">{t.fee === 0 ? 'Free' : t.fee}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
