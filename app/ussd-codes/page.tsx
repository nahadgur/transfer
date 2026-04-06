import type { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kenya USSD Codes 2026 | M-Pesa, Banks, Government & More',
  description:
    'Complete list of USSD codes in Kenya for M-Pesa, Equity Eazzy, KCB, Co-op, Airtel Money, NHIF, NTSA and more. Works on any phone without internet.',
  keywords: [
    'USSD codes Kenya',
    'M-Pesa USSD code',
    'Equity Bank USSD',
    'KCB USSD',
    'Airtel Money USSD',
    'Kenya bank codes 2026',
    '*334#',
    '*247#',
  ],
  alternates: { canonical: 'https://transfer.co.ke/ussd-codes' },
  openGraph: {
    title: 'Kenya USSD Codes 2026 | All Banks, M-Pesa & Government',
    description:
      'Every USSD shortcode you need in Kenya — mobile money, banking, government services, loans and more. Works without internet.',
  },
}

type UssdEntry = {
  code: string
  name: string
  description: string
  network?: string
}

type UssdCategory = {
  title: string
  description: string
  entries: UssdEntry[]
}

const ussdCategories: UssdCategory[] = [
  {
    title: 'M-Pesa (Safaricom)',
    description: 'All Safaricom M-Pesa and account codes',
    entries: [
      { code: '*334#', name: 'M-Pesa Menu', description: 'Main M-Pesa menu — send money, buy airtime, pay bills' },
      { code: '*334*0#', name: 'M-Pesa Balance', description: 'Check your M-Pesa wallet balance instantly' },
      { code: '*334*1*1#', name: 'Send to M-Pesa', description: 'Send money to another M-Pesa number' },
      { code: '*334*1*2#', name: 'Send to Other Network', description: 'Send money to Airtel or Telkom numbers' },
      { code: '*334*4#', name: 'Lipa na M-Pesa', description: 'Pay Paybill or Till number' },
      { code: '*334*6#', name: 'M-Pesa Loans (Fuliza)', description: 'Overdraft facility — check limit and borrow' },
      { code: '*234*1#', name: 'Check Safaricom Airtime', description: 'Check remaining airtime balance' },
      { code: '*100#', name: 'Safaricom Self-Service', description: 'Data bundles, account info, promotions' },
      { code: '*544#', name: 'Fuliza M-Pesa', description: 'Directly access Fuliza overdraft menu' },
      { code: '*456#', name: 'M-Shwari', description: 'Access M-Shwari savings and loan account' },
      { code: '*234*0#', name: 'Safaricom Data Balance', description: 'Check remaining data bundle balance' },
      { code: '*130*airtime#', name: 'Give Airtime', description: 'Share airtime with another Safaricom number' },
    ],
  },
  {
    title: 'Airtel Money',
    description: 'Airtel Kenya mobile money and account codes',
    entries: [
      { code: '*334#', name: 'Airtel Money Menu', description: 'Main Airtel Money menu', network: 'Airtel' },
      { code: '*334*0#', name: 'Airtel Money Balance', description: 'Check Airtel Money wallet balance', network: 'Airtel' },
      { code: '*135#', name: 'Airtel Self-Service', description: 'Airtime, data, account management', network: 'Airtel' },
      { code: '*131*1#', name: 'Airtel Airtime Balance', description: 'Check remaining Airtel airtime', network: 'Airtel' },
      { code: '*510#', name: 'Airtel Loans', description: 'Airtel Timiza loan and savings', network: 'Airtel' },
    ],
  },
  {
    title: 'Equity Bank (Eazzy)',
    description: 'Equity Bank mobile banking',
    entries: [
      { code: '*247#', name: 'Equity Eazzy Banking', description: 'Full Equity Bank menu — balance, transfers, loans' },
      { code: '*247*0#', name: 'Equity Balance', description: 'Check Equity account balance' },
      { code: '*247*1#', name: 'Equity Mini Statement', description: 'View last 5 transactions' },
      { code: '*247*2#', name: 'Equity Transfer', description: 'Transfer to Equity or other accounts' },
      { code: '*247*4#', name: 'Equity Loans (Eazzy Loan)', description: 'Apply for instant Eazzy loan' },
    ],
  },
  {
    title: 'KCB Bank',
    description: 'KCB mobile banking and M-Pesa integration',
    entries: [
      { code: '*522#', name: 'KCB Mobile Banking', description: 'Full KCB menu — accounts, transfers, loans' },
      { code: '*522*1#', name: 'KCB Balance', description: 'Check KCB account balance' },
      { code: '*522*3#', name: 'KCB M-Pesa', description: 'Access KCB M-Pesa savings and loan account' },
      { code: '*522*0#', name: 'KCB Mini Statement', description: 'View recent KCB transactions' },
    ],
  },
  {
    title: 'Co-operative Bank',
    description: 'Co-op Bank MCo-opCash mobile banking',
    entries: [
      { code: '*667#', name: 'MCo-opCash', description: 'Full Co-op Bank mobile banking menu' },
      { code: '*667*0#', name: 'Co-op Balance', description: 'Check Co-op account balance' },
      { code: '*667*2#', name: 'Co-op Transfer', description: 'Transfer funds within Co-op or to M-Pesa' },
    ],
  },
  {
    title: 'NCBA Bank',
    description: 'NCBA mobile banking and M-Pesa integration',
    entries: [
      { code: '*488#', name: 'NCBA Loop', description: 'NCBA digital banking menu' },
      { code: '*488*0#', name: 'NCBA Balance', description: 'Check NCBA account balance' },
      { code: '*654#', name: 'NCBA M-Pesa', description: 'NCBA M-Pesa savings and loans' },
    ],
  },
  {
    title: 'Absa Bank',
    description: 'Absa Kenya mobile banking',
    entries: [
      { code: '*390#', name: 'Absa Mobi Banking', description: 'Absa Kenya mobile banking menu' },
      { code: '*390*0#', name: 'Absa Balance', description: 'Check Absa account balance' },
    ],
  },
  {
    title: 'Government Services',
    description: 'NTSA, NHIF, NSSF and other government codes',
    entries: [
      { code: '*109#', name: 'NTSA Services', description: 'Vehicle inspection, driving licence, logbook' },
      { code: '*155#', name: 'SHA/NHIF', description: 'Social Health Authority — check status and benefits' },
      { code: '*303#', name: 'NSSF Self-Service', description: 'NSSF balance, contributions and registration' },
      { code: '*572#', name: 'KRA Quick Payments', description: 'Kenya Revenue Authority quick tax codes' },
      { code: '*400#', name: 'eCitizen USSD', description: 'Access basic government services without internet' },
    ],
  },
  {
    title: 'Loans & Credit',
    description: 'Mobile loan USSD codes',
    entries: [
      { code: '*544#', name: 'Fuliza M-Pesa', description: 'Safaricom overdraft — check limit, opt in/out' },
      { code: '*456#', name: 'M-Shwari', description: 'CBA/Safaricom savings and loan' },
      { code: '*247*4#', name: 'Eazzy Loan (Equity)', description: 'Instant loan from Equity Bank' },
      { code: '*522*4#', name: 'KCB M-Pesa Loan', description: 'KCB M-Pesa instant loan' },
      { code: '*510#', name: 'Airtel Timiza', description: 'Airtel savings and loan app via USSD', network: 'Airtel' },
    ],
  },
  {
    title: 'Utilities & Bills',
    description: 'Pay bills without visiting an agent',
    entries: [
      { code: '*888#', name: 'KPLC Token/Bill', description: 'Buy electricity tokens or check postpaid bill directly' },
      { code: '*100#', name: 'Safaricom Bundles', description: 'Buy data, SMS or voice bundles' },
      { code: '*334*4*1#', name: 'Paybill Shortcut', description: 'Go directly to M-Pesa Pay Bill screen' },
    ],
  },
]

export default function UssdCodesPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-5">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Works without internet</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Kenya USSD Codes 2026
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-sm leading-relaxed">
            Every shortcode you need for mobile money, banking, government services and loans.
            Dial directly from your phone — no internet or app required.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-6">
          {ussdCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              {/* Category header */}
              <div className="px-5 py-4 border-b border-white/10 bg-white/5">
                <h2 className="text-white font-bold text-base">{cat.title}</h2>
                <p className="text-stone-500 text-xs mt-0.5">{cat.description}</p>
              </div>

              {/* Entries */}
              <div className="divide-y divide-white/5">
                {cat.entries.map((entry) => (
                  <div
                    key={entry.code}
                    className="flex items-start gap-4 px-5 py-3.5 hover:bg-white/5 transition-colors"
                  >
                    <code className="text-emerald-400 font-mono font-bold text-sm bg-emerald-500/10 px-2.5 py-1 rounded-lg flex-shrink-0 mt-0.5">
                      {entry.code}
                    </code>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm font-medium">{entry.name}</span>
                        {entry.network && (
                          <span className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-full">
                            {entry.network}
                          </span>
                        )}
                      </div>
                      <p className="text-stone-500 text-xs mt-0.5">{entry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
          <p className="text-amber-400 text-xs">
            <strong>Note:</strong> USSD codes may change. If a code fails, visit the provider&apos;s
            official website or call their customer care line to confirm the latest code.
          </p>
        </div>
      </div>
    </div>
  )
}
