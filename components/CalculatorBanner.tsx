import Link from 'next/link'
import {
  Smartphone, Building2, Globe, Car, Home, Ship, Zap, PiggyBank, Phone, Calculator, ArrowRight,
} from 'lucide-react'

const calculators: Record<string, { title: string; description: string; href: string; icon: React.ElementType }> = {
  'mpesa-calculator':   { title: 'M-Pesa Fee Calculator',         description: 'Calculate your M-Pesa send money, withdraw, and Paybill fees instantly', href: '/mpesa-calculator',   icon: Smartphone },
  'bank-transfer':      { title: 'Bank Transfer Calculator',       description: 'Compare Pesalink, RTGS, and EFT fees across all Kenyan banks',            href: '/bank-transfer',      icon: Building2 },
  'remittance':         { title: 'Remittance Calculator',          description: 'Compare Wise, WorldRemit, Remitly & M-Pesa Global rates',                 href: '/remittance',         icon: Globe },
  'vehicle-transfer':   { title: 'Vehicle Transfer Calculator',    description: 'Calculate NTSA fees, stamp duty, and total logbook transfer costs',        href: '/vehicle-transfer',   icon: Car },
  'property-transfer':  { title: 'Property Transfer Calculator',   description: 'Calculate stamp duty, legal fees, and conveyancing costs',                 href: '/property-transfer',  icon: Home },
  'import-duty':        { title: 'Import Duty Calculator',         description: 'Calculate taxes and duties for importing vehicles to Kenya',               href: '/import-duty',        icon: Ship },
  'kplc-transfer':      { title: 'KPLC Meter Transfer',            description: 'Process and costs to transfer electricity meter ownership',                href: '/kplc-transfer',      icon: Zap },
  'pension-transfer':   { title: 'Pension Transfer Calculator',    description: 'Calculate NSSF contributions and pension transfer costs',                  href: '/pension-transfer',   icon: PiggyBank },
  'mobile-portability': { title: 'Mobile Portability Guide',       description: 'Keep your number when switching networks',                                  href: '/mobile-portability', icon: Phone },
}

interface CalculatorBannerProps {
  calculatorKey: string
}

export default function CalculatorBanner({ calculatorKey }: CalculatorBannerProps) {
  const calc = calculators[calculatorKey] || calculators['mpesa-calculator']
  const Icon = calc.icon

  return (
    <Link href={calc.href} className="block my-8 group">
      <div className="border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ccff00]/40 p-6 md:p-8 relative overflow-hidden transition-all">
        {/* Hover glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#ccff00]/5 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className="relative z-10 flex items-center gap-6">
          <div className="hidden sm:flex w-14 h-14 bg-[#ccff00]/10 border border-[#ccff00]/20 items-center justify-center shrink-0">
            <Icon className="w-7 h-7 text-[#ccff00]" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Calculator className="w-3.5 h-3.5 text-zinc-500" />
              <span className="text-zinc-500 text-xs font-space font-bold uppercase tracking-widest">Try Our Calculator</span>
            </div>
            <h3 className="text-xl md:text-2xl font-space font-bold text-white mb-1 group-hover:text-[#ccff00] transition-colors">
              {calc.title}
            </h3>
            <p className="text-zinc-400 text-sm md:text-base">{calc.description}</p>
          </div>
          <div className="hidden md:flex shrink-0 items-center gap-2 text-[#ccff00] font-space font-bold text-sm">
            Calculate Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}
