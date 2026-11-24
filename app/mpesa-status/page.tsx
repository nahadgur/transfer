import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, HelpCircle } from 'lucide-react'

const title = 'M-PESA not working? Check a transaction and get support'
const description = 'Find out how to check whether an M-PESA payment went through and where to get official support.'
const supportUrl = 'https://www.entertainment.safaricom.co.ke/contact-us'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/mpesa-status' },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: 'Transfer.co.ke',
    title,
    description,
    url: '/mpesa-status',
  },
}

export default function MpesaStatusPage() {
  return (
    <div className="min-h-screen bg-[#050505] px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ccff00]/20 bg-[#ccff00]/10 px-4 py-2">
            <HelpCircle aria-hidden="true" className="h-4 w-4 text-[#ccff00]" />
            <span className="font-space text-xs font-bold uppercase tracking-widest text-[#ccff00]">M-PESA help</span>
          </div>
          <h1 className="text-3xl font-black text-white md:text-4xl">{title}</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-300">
            Transfer.co.ke does not monitor M-PESA in real time.
          </p>
        </header>

        <section aria-labelledby="payment-check" className="border border-[#ccff00]/30 bg-[#ccff00]/5 p-5 sm:p-8">
          <h2 id="payment-check" className="mb-3 text-xl font-bold text-white">Check your first payment before sending again</h2>
          <p className="text-sm leading-relaxed text-zinc-200">
            If you’re unsure whether a payment went through, check your M-PESA confirmation SMS and recent transaction history.
            Missing or delayed entries don’t prove the payment failed.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-200">
            If you’re still unsure, don’t send again until you’ve confirmed its status through Safaricom’s official support.
            Keep your transaction reference handy for official support. A general service notice can’t confirm whether your particular payment went through.
          </p>
          <a
            href={supportUrl}
            className="mt-5 inline-flex items-center gap-2 bg-[#ccff00] px-4 py-3 text-sm font-bold text-black hover:bg-[#dbff49] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ccff00]"
          >
            Safaricom’s official support <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
          </a>
        </section>

        <section aria-labelledby="international-transfer" className="mt-5 border border-white/[0.15] bg-white/5 p-5 sm:p-8">
          <h2 id="international-transfer" className="mb-2 text-lg font-bold text-white">Waiting for an international transfer?</h2>
          <p className="text-sm leading-relaxed text-zinc-200">
            Start by checking the sending provider’s receipt and tracking or support. If the first transfer is unresolved, don’t send another one.
          </p>
        </section>

        <Link href="/guides/mpesa-how-tos" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#ccff00] underline underline-offset-4">
          Read the M-PESA troubleshooting guide <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
        </Link>
      </div>
    </div>
  )
}
