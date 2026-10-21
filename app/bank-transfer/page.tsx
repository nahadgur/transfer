'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Building2, ArrowLeft } from 'lucide-react'

const currency = (n: number) => 'KES ' + n.toLocaleString('en-KE', { maximumFractionDigits: 0 })
export default function BankTransferPage() {
  const [amount, setAmount] = useState(50000)
  const methods = [
    { name: 'PesaLink', limit: 'Up to KES 999,999 per transaction (your bank may set a lower limit)', speed: 'Normally instant, including weekends', description: 'The sending bank determines the fee. Compare the fee on your own bank app before confirming.', eligible: amount >= 10 && amount <= 999999 },
    { name: 'RTGS', limit: 'Check bank and account limits', speed: 'Subject to bank processing and settlement hours', description: 'Banks set their own RTGS fees. Ask your bank for the total cost and cut-off time.', eligible: amount > 0 },
    { name: 'EFT', limit: 'Check bank and account limits', speed: 'Usually not instant; processing depends on the bank', description: 'Charges and processing schedules depend on the bank and account type.', eligible: amount > 0 },
  ]
  return <main className="min-h-screen bg-[#050505] py-8 px-4 text-white">
    <div className="max-w-5xl mx-auto">
      <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 mb-8"><ArrowLeft className="w-4 h-4" /> Back to all tools</Link>
      <header className="mb-8"><Building2 className="w-10 h-10 text-[#ccff00] mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Compare Bank Transfer Methods in Kenya</h1>
        <p className="text-zinc-300">Choose between PesaLink, RTGS and EFT based on speed, eligibility and your bank’s actual quoted charge.</p>
      </header>
      <div className="border border-amber-400/40 bg-amber-400/10 p-5 mb-8 text-amber-100">
        Fees are set by individual banks. This website does not receive live bank tariff data and cannot reliably rank methods as the cheapest. Confirm the fee and total debit displayed by your bank before sending. PesaLink confirms that its fees vary by bank.
      </div>
      <div className="bg-white/5 border border-white/10 p-6 mb-8">
        <label htmlFor="amount" className="block mb-2 text-zinc-300">Transfer amount (KES)</label>
        <input id="amount" type="number" min="1" value={amount} onChange={e=>setAmount(Math.max(1, Number(e.target.value)||1))}
          className="w-full bg-black border border-white/20 px-4 py-3 text-xl text-white" />
        <p className="text-zinc-400 mt-2">Amount selected: {currency(amount)}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
      {methods.map(m=><section key={m.name} className="bg-white/5 border border-white/10 p-6">
        <h2 className="text-xl font-bold mb-3">{m.name}</h2>
        <p className="text-sm text-zinc-300 mb-3">{m.speed}</p>
        <p className="text-sm text-zinc-300 mb-3">{m.limit}</p>
        <p className="text-sm text-zinc-300 mb-4">{m.description}</p>
        <p className="font-semibold text-[#ccff00]">{m.eligible ? 'Ask your bank for its fee' : 'Outside usual PesaLink amount range'}</p>
      </section>)}
      </div>
      <p className="text-zinc-400 text-sm mt-8">Official reference: <a href="https://pesalink.co.ke/server.php/resource-center/faqs" target="_blank" rel="noopener noreferrer" className="underline">PesaLink FAQs</a>. Your bank’s current pricing and transaction limits take precedence over general descriptions here.</p>
    </div>
  </main>
}
