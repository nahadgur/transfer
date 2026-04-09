import Link from 'next/link'
import {
  Smartphone, Building2, Globe, Car, Home, Ship, Zap, PiggyBank, Phone,
  ArrowRight, Calculator, TrendingUp, Shield, BookOpen, Hash, Wifi, ArrowLeftRight,
} from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'
import PaybillSearch from '@/components/PaybillSearch'

const tools = [
  { title: 'M-Pesa Fee Calculator',         description: 'Calculate send money, withdraw, and Paybill fees instantly',                                      href: '/mpesa-calculator',        icon: Smartphone,     category: 'Money Transfer',  accent: true },
  { title: 'Bank Transfer Comparison',       description: 'Compare Pesalink, RTGS, and EFT fees across all banks',                                           href: '/bank-transfer',           icon: Building2,      category: 'Money Transfer' },
  { title: 'International Remittance',       description: 'Compare Wise, WorldRemit, Remitly & M-Pesa Global rates',                                         href: '/remittance',              icon: Globe,          category: 'Money Transfer' },
  { title: 'Send Money to Kenya',            description: 'Best rates from UK, USA, UAE, Germany and Canada — compare Wise, Sendwave, Remitly',              href: '/send-money-to-kenya',     icon: Globe,          category: 'Money Transfer' },
  { title: 'M-Pesa ↔ Bank Transfer',        description: 'Step-by-step guides for Equity, KCB, Co-op, NCBA, Absa and more — both directions',             href: '/mpesa-to-bank',           icon: ArrowLeftRight, category: 'Money Transfer' },
  { title: 'Paybill Directory',              description: 'Search 70+ paybill numbers — banks, utilities, government, schools',                              href: '/paybill-directory',       icon: Hash,           category: 'Money Transfer' },
  { title: 'Is M-Pesa Down?',               description: 'Real-time M-Pesa status tracker and maintenance schedule',                                        href: '/mpesa-status',            icon: Wifi,           category: 'Status' },
  { title: 'USSD Codes Kenya',              description: 'Every bank, M-Pesa and government USSD shortcode in one place',                                   href: '/ussd-codes',              icon: Phone,          category: 'Resources' },
  { title: 'Vehicle Logbook Transfer',       description: 'NTSA fees, stamp duty, and total cost to transfer ownership',                                     href: '/vehicle-transfer',        icon: Car,            category: 'Asset Transfer' },
  { title: 'Property Transfer Calculator',   description: 'Stamp duty, legal fees, land search, and conveyancing costs',                                     href: '/property-transfer',       icon: Home,           category: 'Asset Transfer' },
  { title: 'Import Duty Calculator',         description: 'Calculate taxes and duties for importing vehicles to Kenya',                                      href: '/import-duty',             icon: Ship,           category: 'Asset Transfer' },
  { title: 'KPLC Meter Transfer',            description: 'Process and costs to transfer electricity meter ownership',                                       href: '/kplc-transfer',           icon: Zap,            category: 'Utilities' },
  { title: 'Pension Transfer Calculator',    description: 'Calculate costs to transfer NSSF to private pension schemes',                                    href: '/pension-transfer',        icon: PiggyBank,      category: 'Financial' },
  { title: 'Mobile Number Portability',      description: 'Keep your number when switching networks - process guide',                                        href: '/mobile-portability',      icon: Phone,          category: 'Utilities' },
]

const stats = [
  { label: 'Calculators',    value: '9+',   icon: Calculator },
  { label: 'Monthly Users',  value: '50K+', icon: TrendingUp },
  { label: 'Accurate Data',  value: '100%', icon: Shield },
]

const categoryColors: Record<string, string> = {
  'Tax':             'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Salary':          'bg-[#ccff00]/10 text-[#ccff00] border-[#ccff00]/20',
  'NSSF':            'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Pension':         'bg-pink-500/20 text-pink-400 border-pink-500/30',
  'Housing Levy':    'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Health Insurance':'bg-red-500/20 text-red-400 border-red-500/30',
  'Employers':       'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'Tax Relief':      'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'HELB':            'bg-teal-500/20 text-teal-400 border-teal-500/30',
  'KRA':             'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  'Transfer':        'bg-[#ccff00]/10 text-[#ccff00] border-[#ccff00]/20',
}

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 6)

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 relative overflow-hidden">

      {/* ── Background glow blobs ── */}
      <div className="pointer-events-none absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#ccff00]/8 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-blue-500/8 blur-[160px]" />

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ccff00]/10 rounded-full border border-[#ccff00]/20 mb-8 animate-fadeIn">
            <span className="w-2 h-2 bg-[#ccff00] rounded-full" />
            <span className="text-[#ccff00] text-xs font-space font-bold uppercase tracking-widest">Kenya&apos;s #1 Transfer Calculator Hub</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-space font-bold text-white tracking-tighter leading-[0.9] mb-8 animate-fadeIn animate-delay-100">
            CALCULATE ANY<br />
            <span className="text-[#ccff00]">TRANSFER FEE.</span><br />
            <span className="text-zinc-500">IN KENYA.</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fadeIn animate-delay-200">
            M-Pesa fees, bank transfers, remittance rates, vehicle transfers, property stamp duty — all in one place.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-10 md:gap-20 mb-4 animate-fadeIn animate-delay-300">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-[#ccff00]" />
                  <span className="text-2xl md:text-3xl font-space font-bold text-white">{stat.value}</span>
                </div>
                <span className="text-zinc-500 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Paybill search ── */}
      <section className="py-10 px-4 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#ccff00]/10 rounded-full border border-[#ccff00]/20 mb-3">
              <Hash className="w-3.5 h-3.5 text-[#ccff00]" />
              <span className="text-[#ccff00] text-xs font-medium">Quick Paybill Lookup</span>
            </div>
            <h2 className="text-xl font-space font-bold text-white mb-1">Find Any M-Pesa Paybill Number</h2>
            <p className="text-zinc-500 text-sm">Search banks, utilities, government, schools and more</p>
          </div>
          <PaybillSearch compact={true} />
        </div>
      </section>

      {/* ── Tools grid ── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-space font-bold text-white tracking-tight mb-3">
              ALL CALCULATORS.
            </h2>
            <p className="text-zinc-400 text-lg">Choose a tool to get started</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="tool-card group relative border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between overflow-hidden animate-fadeIn"
                style={{ animationDelay: `${index * 0.04}s`, opacity: 0 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#ccff00]/8 blur-[80px] rounded-full transform translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="relative z-10">
                  {/* Category + icon row */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs text-zinc-500 font-space font-medium uppercase tracking-widest">
                      {tool.category}
                    </span>
                    <div className={`w-12 h-12 flex items-center justify-center border border-white/5 ${tool.accent ? 'bg-[#ccff00]/10' : 'bg-white/5'}`}>
                      <tool.icon className={`w-6 h-6 ${tool.accent ? 'text-[#ccff00]' : 'text-zinc-400 group-hover:text-[#ccff00] transition-colors'}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-space font-bold text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                    {tool.description}
                  </p>
                </div>

                {/* CTA row */}
                <div className="relative z-10 flex items-center gap-2 text-[#ccff00] text-sm font-space font-bold">
                  Calculate Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog section ── */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-[#ccff00]" />
                <span className="text-[#ccff00] text-xs font-space font-bold uppercase tracking-widest">Latest from Blog</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-space font-bold text-white tracking-tight">
                TAX & FINANCE GUIDES.
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-2 text-[#ccff00] hover:text-[#b3e600] font-space font-bold text-sm transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ccff00]/30 p-6 transition-all"
              >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-4 ${categoryColors[post.category] || 'bg-white/5 text-zinc-400 border-white/10'}`}>
                  {post.category}
                </span>
                <h3 className="text-lg font-space font-bold text-white mb-2 group-hover:text-[#ccff00] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-5 line-clamp-2 leading-relaxed">
                  {post.metaDescription}
                </p>
                <div className="flex items-center gap-2 text-[#ccff00] text-sm font-space font-bold">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#ccff00] font-bold text-sm transition-colors">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why section ── */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="border border-white/10 bg-white/[0.02] p-10 md:p-16 relative overflow-hidden">
            {/* Accent glow */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#ccff00]/5 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="text-center mb-12 relative z-10">
              <h2 className="text-4xl font-space font-bold text-white tracking-tight mb-3">
                WHY TRANSFER.CO.KE?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                { icon: Calculator, title: 'Instant Calculations',  body: 'Get accurate fee estimates in seconds, not hours of research' },
                { icon: TrendingUp, title: 'Always Updated',        body: 'Rates and fees updated to reflect latest 2026 charges' },
                { icon: Shield,     title: 'Trusted by Thousands',  body: 'Kenyans trust us for accurate transfer cost estimates' },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-12 h-12 bg-[#ccff00]/10 border border-[#ccff00]/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#ccff00]" />
                  </div>
                  <h3 className="font-space font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
