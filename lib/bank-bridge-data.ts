export type BankBridge = {
  slug: string
  name: string
  shortName: string
  paybill: string
  ussdCode: string
  bankToMpesaUssd: string
  logo: string // emoji placeholder
  color: string // tailwind gradient
  appName: string
  customerCare: string
  mpesaToBank: {
    steps: string[]
    accountFormat: string
    minAmount: number
    maxAmount: number
    fee: string
    limit: string
    processingTime: string
    notes: string[]
  }
  bankToMpesa: {
    steps: string[]
    minAmount: number
    maxAmount: number
    fee: string
    processingTime: string
    notes: string[]
  }
  faqs: { q: string; a: string }[]
}

export const bankBridges: BankBridge[] = [
  {
    slug: 'equity',
    name: 'Equity Bank',
    shortName: 'Equity',
    paybill: '247247',
    ussdCode: '*247#',
    bankToMpesaUssd: '*247#',
    logo: '🟥',
    color: 'from-red-600 to-red-700',
    appName: 'Equity Mobile / Eazzy Banking',
    customerCare: '0763 000 000',
    mpesaToBank: {
      steps: [
        'Dial *334# on your Safaricom line',
        'Select "Lipa na M-Pesa"',
        'Select "Pay Bill"',
        'Enter Business Number: 247247',
        'Enter your Equity Bank account number as the Account Number',
        'Enter the amount you want to transfer',
        'Enter your M-Pesa PIN and confirm',
        'You will receive an M-Pesa confirmation SMS',
        'Equity Bank will credit your account within minutes',
      ],
      accountFormat: 'Your full Equity Bank account number (e.g. 0190296543874)',
      minAmount: 10,
      maxAmount: 300000,
      fee: 'Free (no charge for M-Pesa to Equity via Paybill)',
      limit: 'Subject to your M-Pesa daily limit (KES 300,000)',
      processingTime: 'Instant to 5 minutes',
      notes: [
        'Ensure your Equity account is linked to your M-Pesa registered phone number for faster processing',
        'The transfer goes directly to your Equity account — not your Eazzy wallet',
        'Large amounts (above KES 150,000) may trigger additional verification',
      ],
    },
    bankToMpesa: {
      steps: [
        'Dial *247# on your Safaricom line',
        'Select "Send Money"',
        'Select "To M-Pesa"',
        'Enter the recipient\'s Safaricom M-Pesa number',
        'Enter the amount',
        'Enter your Equity PIN and confirm',
        'The recipient receives funds in their M-Pesa wallet instantly',
      ],
      minAmount: 10,
      maxAmount: 150000,
      fee: 'KES 30–108 depending on amount (standard M-Pesa withdrawal rates)',
      processingTime: 'Instant',
      notes: [
        'You can also do this via the Equity Mobile app under "Send Money → M-Pesa"',
        'The recipient does NOT need to be an Equity customer',
        'Funds land directly in the recipient\'s M-Pesa wallet',
      ],
    },
    faqs: [
      { q: 'How long does M-Pesa to Equity take?', a: 'Usually instant — up to 5 minutes during peak hours. If it takes longer, check your M-Pesa message and contact Equity on 0763 000 000.' },
      { q: 'Can I transfer from Equity to M-Pesa without internet?', a: 'Yes — dial *247# and follow the prompts. No internet or smartphone required.' },
      { q: 'Is there a fee for transferring from M-Pesa to Equity?', a: 'No charge when paying via Paybill 247247. Normal M-Pesa rates apply for the send-money step if you\'re using that route instead.' },
      { q: 'What is the maximum I can send from Equity to M-Pesa?', a: 'Up to KES 150,000 per transaction via USSD. Higher amounts may be possible via Equity Mobile app or in-branch.' },
    ],
  },
  {
    slug: 'kcb',
    name: 'KCB Bank',
    shortName: 'KCB',
    paybill: '522522',
    ussdCode: '*522#',
    bankToMpesaUssd: '*522#',
    logo: '🟦',
    color: 'from-blue-700 to-blue-800',
    appName: 'KCB Mobile Banking App',
    customerCare: '0711 087 000',
    mpesaToBank: {
      steps: [
        'Dial *334# on your Safaricom line',
        'Select "Lipa na M-Pesa"',
        'Select "Pay Bill"',
        'Enter Business Number: 522522',
        'Enter your KCB account number as the Account Number',
        'Enter the amount',
        'Enter your M-Pesa PIN and confirm',
      ],
      accountFormat: 'Your KCB account number (e.g. 1102625798)',
      minAmount: 10,
      maxAmount: 300000,
      fee: 'Free via Paybill',
      limit: 'KES 300,000 per day (M-Pesa daily limit)',
      processingTime: 'Instant to 10 minutes',
      notes: [
        'KCB also offers a dedicated *522*3# menu for KCB M-Pesa linked accounts',
        'For KCB M-Pesa savings account, use *522# → KCB M-Pesa instead of Paybill',
        'Transfers above KES 200,000 may require branch confirmation',
      ],
    },
    bankToMpesa: {
      steps: [
        'Dial *522# on your phone',
        'Select "Transfer"',
        'Select "To M-Pesa"',
        'Enter the M-Pesa phone number',
        'Enter the amount to send',
        'Enter your KCB PIN and confirm',
        'Funds arrive in recipient\'s M-Pesa within seconds',
      ],
      minAmount: 10,
      maxAmount: 150000,
      fee: 'KES 30–108 depending on amount',
      processingTime: 'Instant',
      notes: [
        'Also available via KCB Mobile App under "Pay & Transfer"',
        'KCB M-Pesa linked accounts can withdraw directly via *334# → Withdraw → KCB M-Pesa',
      ],
    },
    faqs: [
      { q: 'What is KCB M-Pesa and how is it different?', a: 'KCB M-Pesa is a savings account linked directly to your M-Pesa wallet, accessible via *334# or *522*3#. It earns interest and has its own loan facility, separate from a regular KCB bank account.' },
      { q: 'Can I deposit from M-Pesa to KCB without visiting a branch?', a: 'Yes — use Paybill 522522 with your KCB account number. The money reflects within minutes.' },
      { q: 'What happens if I enter the wrong account number for KCB Paybill?', a: 'The transaction may go to the wrong account or fail. Contact KCB on 0711 087 000 immediately with your M-Pesa transaction code.' },
    ],
  },
  {
    slug: 'coop',
    name: 'Co-operative Bank',
    shortName: 'Co-op',
    paybill: '400200',
    ussdCode: '*667#',
    bankToMpesaUssd: '*667#',
    logo: '🟩',
    color: 'from-green-700 to-green-800',
    appName: 'MCo-opCash',
    customerCare: '0703 027 000',
    mpesaToBank: {
      steps: [
        'Dial *334# on your Safaricom line',
        'Select "Lipa na M-Pesa"',
        'Select "Pay Bill"',
        'Enter Business Number: 400200',
        'Enter your Co-op Bank account number',
        'Enter the amount',
        'Enter your M-Pesa PIN and confirm',
      ],
      accountFormat: 'Your Co-op Bank account number (16 digits, e.g. 0110226981600)',
      minAmount: 10,
      maxAmount: 300000,
      fee: 'Free via Paybill',
      limit: 'KES 300,000 per day',
      processingTime: 'Instant to 5 minutes',
      notes: [
        'Co-op Bank account numbers are typically 16 digits — confirm on your cheque book or app',
        'Funds show in your Co-op account almost instantly during business hours',
        'For MCo-opCash wallet (separate from bank account), use a different code',
      ],
    },
    bankToMpesa: {
      steps: [
        'Dial *667# on your phone',
        'Select "Send Money"',
        'Select "To M-Pesa"',
        'Enter the recipient\'s M-Pesa phone number',
        'Enter the amount',
        'Confirm your Co-op PIN',
        'Recipient gets funds in M-Pesa instantly',
      ],
      minAmount: 10,
      maxAmount: 100000,
      fee: 'KES 30–108 depending on amount',
      processingTime: 'Instant',
      notes: [
        'Also available on the MCo-opCash app under "Transfer → M-Pesa"',
        'The daily limit for Co-op to M-Pesa via USSD is KES 100,000',
      ],
    },
    faqs: [
      { q: 'What is the Co-op Bank Paybill number?', a: '400200 is the standard Co-op Paybill number for depositing into a Co-op Bank account via M-Pesa.' },
      { q: 'Can I transfer from Co-op to M-Pesa on weekends?', a: 'Yes — *667# and the MCo-opCash app work 24/7 including weekends and public holidays.' },
      { q: 'What is MCo-opCash?', a: 'MCo-opCash is Co-op Bank\'s mobile banking service accessible via *667#. It allows you to check balances, transfer money, pay bills, and access mini statements without internet.' },
    ],
  },
  {
    slug: 'ncba',
    name: 'NCBA Bank',
    shortName: 'NCBA',
    paybill: '880100',
    ussdCode: '*488#',
    bankToMpesaUssd: '*488#',
    logo: '🟪',
    color: 'from-purple-700 to-purple-800',
    appName: 'NCBA Loop / NCBA Mobile',
    customerCare: '0711 056 444',
    mpesaToBank: {
      steps: [
        'Dial *334# on your Safaricom line',
        'Select "Lipa na M-Pesa"',
        'Select "Pay Bill"',
        'Enter Business Number: 880100',
        'Enter your NCBA account number',
        'Enter the amount',
        'Enter your M-Pesa PIN and confirm',
      ],
      accountFormat: 'Your NCBA account number',
      minAmount: 10,
      maxAmount: 300000,
      fee: 'Free via Paybill',
      limit: 'KES 300,000 per day',
      processingTime: 'Instant to 10 minutes',
      notes: [
        'NCBA and M-Pesa have a long-standing partnership — M-Shwari is powered by NCBA and Safaricom',
        'For M-Shwari deposits specifically, use *456# not Paybill',
        'NCBA Loop accounts may use a different account number format',
      ],
    },
    bankToMpesa: {
      steps: [
        'Dial *488# on your phone',
        'Select "Transfers"',
        'Select "Send to M-Pesa"',
        'Enter the recipient\'s phone number',
        'Enter the amount',
        'Enter your NCBA PIN to confirm',
      ],
      minAmount: 10,
      maxAmount: 150000,
      fee: 'KES 30–108 depending on amount',
      processingTime: 'Instant',
      notes: [
        'Also available on NCBA Mobile app',
        'M-Shwari account holders can withdraw to M-Pesa via *456# → Withdraw',
      ],
    },
    faqs: [
      { q: 'What is the NCBA Paybill number?', a: '880100 is the NCBA Bank Paybill number for depositing money from M-Pesa into an NCBA bank account.' },
      { q: 'Is NCBA and M-Shwari the same thing?', a: 'No. M-Shwari is a savings and loan product jointly offered by NCBA and Safaricom, accessible via *456# or the M-Pesa app. It is separate from a regular NCBA bank account.' },
      { q: 'How long does M-Pesa to NCBA take?', a: 'Usually within 5 minutes. If delayed, check your M-Pesa confirmation message and call 0711 056 444.' },
    ],
  },
  {
    slug: 'absa',
    name: 'Absa Bank Kenya',
    shortName: 'Absa',
    paybill: '303030',
    ussdCode: '*390#',
    bankToMpesaUssd: '*390#',
    logo: '🟥',
    color: 'from-red-800 to-rose-900',
    appName: 'Absa Kenya Mobile Banking',
    customerCare: '0703 710 000',
    mpesaToBank: {
      steps: [
        'Dial *334# on your Safaricom line',
        'Select "Lipa na M-Pesa"',
        'Select "Pay Bill"',
        'Enter Business Number: 303030',
        'Enter your Absa account number',
        'Enter the amount',
        'Confirm with your M-Pesa PIN',
      ],
      accountFormat: 'Your Absa Kenya account number',
      minAmount: 10,
      maxAmount: 300000,
      fee: 'Free via Paybill',
      limit: 'KES 300,000 per day',
      processingTime: '5–30 minutes (may be slower than other banks)',
      notes: [
        'Absa Kenya was formerly Barclays Bank Kenya — the Paybill number changed in 2021',
        'Ensure you use 303030, not any old Barclays numbers',
        'Processing can be slower on weekends and public holidays',
      ],
    },
    bankToMpesa: {
      steps: [
        'Dial *390# on your phone',
        'Select "Transfer"',
        'Select "To Mobile Money"',
        'Enter the M-Pesa number',
        'Enter the amount',
        'Enter your Absa USSD PIN to confirm',
      ],
      minAmount: 10,
      maxAmount: 100000,
      fee: 'KES 30–108 depending on amount',
      processingTime: 'Instant to 5 minutes',
      notes: [
        'Also available on the Absa Kenya Mobile Banking app',
        'For large transfers above KES 100,000, use the mobile app or visit a branch',
      ],
    },
    faqs: [
      { q: 'Is Absa the same as Barclays Kenya?', a: 'Yes — Barclays Bank Kenya rebranded to Absa Bank Kenya in 2021. The Paybill number changed to 303030.' },
      { q: 'Why is my Absa Paybill transfer taking so long?', a: 'Absa transfers can occasionally take 30–60 minutes outside business hours. If it\'s been over an hour, call 0703 710 000 with your M-Pesa transaction code.' },
    ],
  },
  {
    slug: 'dtb',
    name: 'Diamond Trust Bank',
    shortName: 'DTB',
    paybill: '516600',
    ussdCode: '*385#',
    bankToMpesaUssd: '*385#',
    logo: '🔷',
    color: 'from-sky-700 to-blue-800',
    appName: 'DTB Mobile Banking',
    customerCare: '0800 723 200',
    mpesaToBank: {
      steps: [
        'Dial *334# on your Safaricom line',
        'Select "Lipa na M-Pesa"',
        'Select "Pay Bill"',
        'Enter Business Number: 516600',
        'Enter your DTB account number',
        'Enter the amount',
        'Confirm with your M-Pesa PIN',
      ],
      accountFormat: 'Your DTB account number (usually 13 digits)',
      minAmount: 10,
      maxAmount: 300000,
      fee: 'Free via Paybill',
      limit: 'KES 300,000 per day',
      processingTime: 'Instant to 15 minutes',
      notes: [
        'DTB is particularly popular for business accounts and trade finance',
        'Confirm your exact account number via the DTB app or branch',
      ],
    },
    bankToMpesa: {
      steps: [
        'Dial *385# or use the DTB Mobile Banking app',
        'Select "Transfer"',
        'Select "To M-Pesa"',
        'Enter the recipient\'s phone number',
        'Enter the amount',
        'Enter your DTB PIN to confirm',
      ],
      minAmount: 10,
      maxAmount: 100000,
      fee: 'KES 30–108 depending on amount',
      processingTime: 'Instant to 5 minutes',
      notes: [
        'DTB mobile banking is available 24/7 via USSD and the app',
      ],
    },
    faqs: [
      { q: 'What is DTB\'s Paybill number?', a: '516600 is the Diamond Trust Bank Paybill number for M-Pesa deposits.' },
      { q: 'Is DTB available across Kenya?', a: 'DTB has branches in Nairobi, Mombasa, Kisumu, Nakuru and other major towns, with mobile banking available nationwide.' },
    ],
  },
  {
    slug: 'family-bank',
    name: 'Family Bank',
    shortName: 'Family Bank',
    paybill: '222111',
    ussdCode: '*325#',
    bankToMpesaUssd: '*325#',
    logo: '🟧',
    color: 'from-orange-600 to-amber-700',
    appName: 'Family Bank Mobile',
    customerCare: '0703 095 445',
    mpesaToBank: {
      steps: [
        'Dial *334# on your Safaricom line',
        'Select "Lipa na M-Pesa"',
        'Select "Pay Bill"',
        'Enter Business Number: 222111',
        'Enter your Family Bank account number',
        'Enter the amount',
        'Confirm with your M-Pesa PIN',
      ],
      accountFormat: 'Your Family Bank account number',
      minAmount: 10,
      maxAmount: 300000,
      fee: 'Free via Paybill',
      limit: 'KES 300,000 per day',
      processingTime: 'Instant to 10 minutes',
      notes: [
        'Family Bank is popular with SMEs and has branches in most Kenyan towns',
        'Your account number appears on your Family Bank statement or debit card',
      ],
    },
    bankToMpesa: {
      steps: [
        'Dial *325# on your phone',
        'Select "Transfer Money"',
        'Select "To M-Pesa"',
        'Enter the M-Pesa number',
        'Enter the amount',
        'Enter your Family Bank PIN to confirm',
      ],
      minAmount: 10,
      maxAmount: 100000,
      fee: 'KES 30–108 depending on amount',
      processingTime: 'Instant',
      notes: [
        'Also available via Family Bank Mobile app',
        'Family Bank has strong presence in rural areas and is popular with farmers and SMEs',
      ],
    },
    faqs: [
      { q: 'What is Family Bank\'s Paybill number?', a: '222111 is the Family Bank Paybill number.' },
      { q: 'Does Family Bank work with M-Pesa in rural areas?', a: 'Yes — the USSD service *325# works on any phone nationwide without internet or a smartphone.' },
    ],
  },
  {
    slug: 'stanbic',
    name: 'Stanbic Bank Kenya',
    shortName: 'Stanbic',
    paybill: '600100',
    ussdCode: '*290#',
    bankToMpesaUssd: '*290#',
    logo: '🔵',
    color: 'from-blue-800 to-indigo-900',
    appName: 'Stanbic Bank Kenya App',
    customerCare: '0800 720 150',
    mpesaToBank: {
      steps: [
        'Dial *334# on your Safaricom line',
        'Select "Lipa na M-Pesa"',
        'Select "Pay Bill"',
        'Enter Business Number: 600100',
        'Enter your Stanbic account number',
        'Enter the amount',
        'Confirm with your M-Pesa PIN',
      ],
      accountFormat: 'Your Stanbic Bank account number',
      minAmount: 10,
      maxAmount: 300000,
      fee: 'Free via Paybill',
      limit: 'KES 300,000 per day',
      processingTime: '5–30 minutes',
      notes: [
        'Stanbic is part of the Standard Bank Group (South Africa)',
        'Popular for corporate and trade finance in Kenya',
      ],
    },
    bankToMpesa: {
      steps: [
        'Use the Stanbic Kenya Mobile app or dial *290#',
        'Select "Transfers"',
        'Select "M-Pesa Transfer"',
        'Enter phone number and amount',
        'Confirm with your PIN',
      ],
      minAmount: 10,
      maxAmount: 100000,
      fee: 'KES 30–108 depending on amount',
      processingTime: 'Instant to 10 minutes',
      notes: [
        'Stanbic\'s mobile banking is more app-centric than USSD — download the app for the best experience',
      ],
    },
    faqs: [
      { q: 'What is Stanbic Bank\'s Paybill number?', a: '600100 is the Stanbic Bank Kenya Paybill number.' },
      { q: 'Is Stanbic good for personal banking in Kenya?', a: 'Stanbic serves both personal and corporate clients, though it\'s particularly strong in corporate and trade banking.' },
    ],
  },
]
