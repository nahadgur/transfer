import Link from 'next/link'
import { Metadata } from 'next'
import { BookOpen, ArrowUpRight } from 'lucide-react'
import { GUIDES } from '@/lib/guides'
import { spokesForHub } from '@/lib/all-blog-posts'
import {
  SITE_URL,
  organizationSchema,
  websiteSchema,
  editorialEntitySchema,
  breadcrumbSchema,
  jsonLd,
} from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Guides — M-Pesa, Bank, Remittance and Transfer Hubs in Kenya',
  description:
    'The ten Kenya transfer hubs: M-Pesa charges, bank transfers, remittance, Paybill and Till, USSD how-tos, KPLC tokens, logbook, land, pension and import duty. Sourced and dated.',
  alternates: { canonical: '/guides' },
}

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(
        organizationSchema(),
        websiteSchema(),
        editorialEntitySchema(),
        breadcrumbSchema([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Guides', url: `${SITE_URL}/guides` },
        ]),
      )} />

      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ccff00]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-[#ccff00]" />
            <span className="text-[#ccff00] font-medium">Transfer Hub Guides</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Kenya transfer guides</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Ten hubs covering how money and assets move in Kenya, each tied to a calculator and
            sourced to the authority that sets the figure. Fees change, so we date everything and
            steer you to the official source.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GUIDES.map((g) => {
            const count = spokesForHub(g.slug).length
            return (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group bg-white/[0.02] border border-white/10 hover:border-[#ccff00]/50 p-6 transition-all flex flex-col"
              >
                <span className="text-[10px] font-space font-bold uppercase tracking-widest text-[#ccff00] mb-3">{g.heroBadge}</span>
                <h2 className="text-xl font-space font-bold text-white group-hover:text-[#ccff00] transition-colors mb-2">{g.title}</h2>
                <p className="text-sm text-zinc-400 leading-relaxed flex-1">{g.metaDescription}</p>
                <div className="flex items-center justify-between mt-5">
                  <span className="text-xs text-zinc-600">{count > 0 ? `${count} guide${count > 1 ? 's' : ''}` : 'Guides coming'}</span>
                  <span className="flex items-center gap-2 text-[#ccff00] text-xs font-space font-bold uppercase tracking-widest">
                    Open hub <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
