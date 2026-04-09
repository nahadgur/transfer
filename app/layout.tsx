import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Link from 'next/link'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
})

export const metadata: Metadata = {
  title: {
    default: "Kenya's Transfer Hub | Calculate Transfer Fees & Costs",
    template: '%s | Transfer Kenya',
  },
  description:
    "Calculate M-Pesa fees, bank transfers, remittance costs, vehicle logbook transfers, property stamp duty, and more. Kenya's #1 transfer calculator hub.",
  keywords: [
    'M-Pesa fees', 'Kenya transfer', 'logbook transfer', 'stamp duty Kenya',
    'remittance Kenya', 'bank transfer fees', 'PAYE Kenya', 'NSSF Kenya', 'Kenya tax calculator',
  ],
  metadataBase: new URL('https://transfer.co.ke'),
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://transfer.co.ke',
    siteName: 'Transfer Kenya',
    title: "Kenya's Transfer Hub | Calculate All Transfer Fees",
    description:
      'Calculate M-Pesa fees, bank transfers, remittance costs, vehicle logbook transfers, property stamp duty, and more.',
  },
}

const navLinks = [
  { href: '/',                    label: 'Calculators' },
  { href: '/send-money-to-kenya', label: 'Send to Kenya',  hideMobile: true },
  { href: '/mpesa-to-bank',       label: 'M-Pesa ↔ Bank',  hideMobile: true },
  { href: '/paybill-directory',   label: 'Paybills' },
  { href: '/ussd-codes',          label: 'USSD Codes',     hideMobile: true },
  { href: '/mpesa-status',        label: 'M-Pesa Status',  hideMobile: true },
  { href: '/blog',                label: 'Blog' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-[#050505]`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T223C1ZSXV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T223C1ZSXV');
          `}
        </Script>
      </head>
      <body
        className="min-h-screen bg-[#050505] text-white font-sans antialiased selection:bg-[#ccff00] selection:text-black"
        suppressHydrationWarning
      >
        {/* ── Navigation ── */}
        <nav className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 shrink-0">
                <div className="w-9 h-9 bg-[#ccff00] flex items-center justify-center transform rotate-3">
                  <span className="text-black font-space font-black text-base -rotate-3">T</span>
                </div>
                <span className="font-space font-bold text-lg text-white tracking-tight hidden sm:block">
                  TRANSFER<span className="text-zinc-500">.CO.KE</span>
                </span>
              </Link>

              {/* Nav links */}
              <div className="flex items-center gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium text-zinc-400 hover:text-white transition-colors${link.hideMobile ? ' hidden sm:block' : ''}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* ── Main content ── */}
        <main>{children}</main>

        {/* ── Footer ── */}
        <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-10 px-4 mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
              {/* Brand */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-[#ccff00] flex items-center justify-center">
                    <span className="text-black font-space font-black text-sm">T</span>
                  </div>
                  <span className="font-space font-bold text-lg text-white tracking-tight">
                    TRANSFER<span className="text-zinc-500">.CO.KE</span>
                  </span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Kenya&apos;s comprehensive transfer calculator hub.
                </p>
              </div>

              {/* Money Transfers */}
              <div>
                <h4 className="font-space font-bold text-white mb-5 tracking-widest uppercase text-xs">
                  Money Transfers
                </h4>
                <ul className="space-y-3 text-sm">
                  {[
                    ['/mpesa-calculator',    'M-Pesa Calculator'],
                    ['/bank-transfer',       'Bank Transfers'],
                    ['/remittance',          'International Remittance'],
                    ['/send-money-to-kenya', 'Send Money to Kenya'],
                    ['/mpesa-to-bank',       'M-Pesa ↔ Bank Guide'],
                    ['/paybill-directory',   'Paybill Directory'],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <Link href={href} className="text-zinc-400 hover:text-[#ccff00] transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Asset Transfers */}
              <div>
                <h4 className="font-space font-bold text-white mb-5 tracking-widest uppercase text-xs">
                  Asset Transfers
                </h4>
                <ul className="space-y-3 text-sm">
                  {[
                    ['/vehicle-transfer',  'Vehicle Logbook'],
                    ['/property-transfer', 'Property Transfer'],
                    ['/import-duty',       'Import Duty'],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <Link href={href} className="text-zinc-400 hover:text-[#ccff00] transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-space font-bold text-white mb-5 tracking-widest uppercase text-xs">
                  Resources
                </h4>
                <ul className="space-y-3 text-sm">
                  {[
                    ['/ussd-codes',       'USSD Codes Kenya'],
                    ['/mpesa-status',     'Is M-Pesa Down?'],
                    ['/blog',             'Blog & Guides'],
                    ['/pension-transfer', 'Pension Transfer'],
                    ['/kplc-transfer',    'KPLC Transfer'],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <Link href={href} className="text-zinc-400 hover:text-[#ccff00] transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-zinc-600 text-sm font-space">
                © {new Date().getFullYear()} TRANSFER.CO.KE · KENYA&apos;S TRANSFER CALCULATOR HUB
              </p>
              <p className="text-zinc-600 text-xs">
                Calculations are estimates. Verify with official sources before transacting.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
