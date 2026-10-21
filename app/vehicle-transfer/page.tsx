'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Car, ArrowLeft, ExternalLink } from 'lucide-react'
export default function VehicleTransferPage() {
 const [vehicleType, setVehicleType] = useState('Private car')
 const [financed, setFinanced] = useState(false)
 const items = ['Confirm seller identity and match the registered owner to the logbook', 'Check vehicle identifiers, registration and any finance or security interest', 'Seller initiates the change of ownership through the official NTSA service', 'Buyer accepts or completes the required process through the official portal', 'Pay only the charges generated on the official application and retain receipts', 'Confirm ownership is updated and obtain the new registration document']
 return <main className="min-h-screen bg-[#050505] text-white py-8 px-4"><div className="max-w-4xl mx-auto">
 <Link href="/" className="inline-flex gap-2 text-zinc-400 mb-8"><ArrowLeft className="w-4 h-4"/> Back to all tools</Link>
 <Car className="w-10 h-10 text-orange-400 mb-4"/><h1 className="text-3xl font-bold mb-3">Vehicle Ownership Transfer in Kenya</h1>
 <p className="text-zinc-300 mb-6">A practical NTSA logbook transfer checklist. Fees vary by the transaction and applicable official tariff.</p>
 <div role="alert" className="border border-amber-400/50 bg-amber-500/10 p-5 mb-6"><b>Fee calculator withdrawn pending official tariff verification.</b> An earlier version wrongly applied a blanket 4% stamp duty to ordinary vehicle transfers and combined unsupported fixed NTSA charges. That was not a reliable estimate. Obtain the exact amount from the official NTSA transaction before paying.</div>
 <div className="bg-white/5 border border-white/10 p-5 mb-6">
 <label className="block mb-2">Vehicle category</label><select value={vehicleType} onChange={e=>setVehicleType(e.target.value)} className="bg-zinc-900 border border-white/20 p-3 w-full mb-4"><option>Private car</option><option>Motorcycle</option><option>Commercial vehicle</option></select>
 <label className="flex items-center gap-3"><input type="checkbox" checked={financed} onChange={e=>setFinanced(e.target.checked)}/> Vehicle is subject to financing / a charge</label>
 <p className="mt-3 text-zinc-400 text-sm">Selected: {vehicleType}. {financed?'Obtain lender approval and confirm discharge or consent requirements before transfer.':'Confirm there are no undisclosed charges or encumbrances.'}</p>
 </div>
 <h2 className="text-2xl font-bold mb-4">Transfer checklist</h2><ol className="space-y-3">{items.map((item,i)=><li key={item} className="bg-white/5 border border-white/10 p-4"><span className="font-bold text-orange-400 mr-3">{i+1}.</span>{item}</li>)}</ol>
 <p className="text-zinc-400 mt-8">For fees, documents and eligibility, follow the current <a className="underline text-white inline-flex items-center gap-1" href="https://serviceportal.ntsa.go.ke/" target="_blank" rel="noopener noreferrer">NTSA service portal <ExternalLink className="w-3 h-3"/></a>. Do not send money to personal numbers claiming to process your transfer.</p>
 </div></main>
}
