// lib/guides.ts
// The ten pillar hubs for Kenya's Transfer Hub (see docs/SILO-PLAN.md section 1).
// Each hub aligns to its tool/calculator pillar and renders a child-spoke grid
// from the blog posts whose `hub` equals the hub slug. Live spokes are pulled
// at render time from the blog aggregator; `plannedSpokeTitles` is the editorial
// roadmap only.
//
// YMYL-financial: every fee/rate/threshold here is framework-level and dated,
// with the authority named on first mention and a "verify, rates change" steer
// to the official source or the calculator. Exact tariff bands stay on the tool
// pages and spokes, not restated here.

export interface ToolPillar {
  href: string;
  label: string;
}

export interface GuideData {
  slug: string;
  title: string;
  shortTitle: string;
  heroBadge: string;
  /** Reserved head term owned by the tool page; the hub frames around it, never restates it. */
  reservedKeyword: string;
  metaTitle: string;
  metaDescription: string;
  heroDirectAnswer: string;
  keyPoints: string[];
  sections: { heading: string; paragraphs: string[] }[];
  plannedSpokeTitles: string[];
  toolPillars: ToolPillar[];
  adjacentHubSlugs: string[];
  faqs: { question: string; answer: string }[];
  publishedAt: string;
  lastReviewedAt: string;
}

const REVIEWED = '2026-06-12';

export const GUIDES: GuideData[] = [
  {
    slug: 'mpesa-charges',
    title: 'M-Pesa Charges and Transfers in Kenya',
    shortTitle: 'M-Pesa charges',
    heroBadge: 'M-Pesa fees',
    reservedKeyword: 'm-pesa charges calculator',
    metaTitle: 'M-Pesa Charges in Kenya 2026: How the Fees Work | Transfer Hub',
    metaDescription:
      'How M-Pesa charges work in Kenya: send money, withdrawal, Fuliza and transaction limits, with the official Safaricom tariff as the source. Use the calculator for the exact current fee.',
    heroDirectAnswer:
      'M-Pesa charges are tiered by amount and by transaction type, and Safaricom publishes the official tariff. Sending to a registered number is cheaper than to an unregistered one, transfers up to KES 100 are free, and the per-transaction fee flattens out on larger sends. Because Safaricom revises the bands from time to time, confirm the exact figure against the current tariff or run the M-Pesa fee calculator before you transact.',
    keyPoints: [
      'M-Pesa transactions fall into four families: send money, withdraw cash, Lipa na M-Pesa Paybill, and Buy Goods (Till). Each has its own tariff.',
      'Sends of KES 1 to 100 are free; above that, the fee rises in bands and is flat at the top end for registered recipients (source: Safaricom M-Pesa tariff, verify current).',
      'Fuliza is an overdraft with a daily access and maintenance fee, not a flat interest rate, so the cost depends on how long the balance is outstanding (source: Safaricom, CBK Digital Credit guidance).',
      'Daily and per-transaction limits are set by Safaricom in line with CBK rules and change periodically; the wallet and per-transaction caps are the ones most people hit.',
      'The cheapest move is often to avoid an unnecessary withdrawal: paying a bill or buying goods directly from the wallet can skip the cash-out fee entirely.',
    ],
    sections: [
      {
        heading: 'How M-Pesa fees are structured',
        paragraphs: [
          'M-Pesa does not charge a single percentage. Each transaction type has a banded tariff where the absolute fee rises with the amount while the percentage cost generally falls. The four families you will meet are send money, withdraw, Paybill, and Buy Goods, and the cheapest path between two points often depends on which family you use rather than how much you move.',
          'The single most useful habit is to read the confirmation prompt before you approve. It shows the fee for that exact transaction, which is the only figure that is guaranteed current. The fee tables you find online, including ours, are a guide; the prompt and the official Safaricom tariff are the authority.',
        ],
      },
      {
        heading: 'Where the cost actually comes from',
        paragraphs: [
          'For most people the largest avoidable M-Pesa cost is the withdrawal fee. Cashing out converts your balance to notes and carries its own tariff on top of anything you paid to receive the money. Paying a Paybill or Till directly from the wallet skips that step. If you regularly withdraw to pay a bill that accepts M-Pesa, you are paying twice.',
          'Fuliza is the other place costs build quietly. It is an overdraft that lets a transaction complete when your balance is short, and it charges a daily access and maintenance fee for as long as the borrowed amount is outstanding. A small Fuliza balance left running for days can cost more than the convenience was worth. The Central Bank of Kenya regulates digital credit pricing, and Safaricom publishes the Fuliza fee schedule; check it before leaning on the facility.',
        ],
      },
      {
        heading: 'Limits, reversals and the things people get wrong',
        paragraphs: [
          'Safaricom sets daily transaction limits and a maximum wallet balance in line with CBK rules, and revises them periodically. If a large transfer fails, a limit is the usual reason before you suspect a fault. A reversal of a wrong send is possible through the Hakikisha prompt at the point of sending, or after the fact by reporting to Safaricom, but it is never guaranteed once the recipient has moved the money.',
          'For the exact current send, withdrawal or Paybill fee on a specific amount, the fastest answer is the calculator. It mirrors the published bands so you can compare two routes before committing, and it is the right tool to settle a "which is cheaper" question rather than guessing from memory.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'M-Pesa send money tariff bands explained',
      'M-Pesa withdrawal charges and how to cut them',
      'M-Pesa vs Airtel Money on cost',
      'M-Pesa daily and transaction limits',
      'Fuliza charges and when it gets expensive',
      'How to reverse an M-Pesa payment',
      'Sending M-Pesa to an unregistered number',
      'M-Pesa charges for businesses',
      'Are M-Pesa charges changing? What CBK has said',
      'Which M-Pesa transactions are free',
    ],
    toolPillars: [{ href: '/mpesa-calculator', label: 'M-Pesa Fee Calculator' }],
    adjacentHubSlugs: ['bank-transfers', 'paybill-till'],
    faqs: [
      {
        question: 'How much does M-Pesa charge to send money?',
        answer:
          'Sends of KES 1 to 100 are free. Above that the fee rises in bands and is lower to a registered M-Pesa user than to an unregistered number. The exact figure for your amount is shown on the confirmation prompt and on the M-Pesa fee calculator; Safaricom revises the bands periodically.',
      },
      {
        question: 'Is it cheaper to pay a bill directly or withdraw cash first?',
        answer:
          'Paying a Paybill or Buy Goods Till directly from your M-Pesa wallet avoids the withdrawal fee entirely, so it is almost always cheaper than cashing out and paying with notes.',
      },
      {
        question: 'Does Fuliza charge interest?',
        answer:
          'Fuliza charges a daily access and maintenance fee for as long as the overdrawn amount is outstanding rather than a single flat interest charge. Cost therefore depends on how long you take to repay. Check the current Safaricom Fuliza schedule before relying on it.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'bank-transfers',
    title: 'M-Pesa to Bank and Bank Transfers in Kenya',
    shortTitle: 'Bank transfers',
    heroBadge: 'Bank and M-Pesa',
    reservedKeyword: 'm-pesa to bank',
    metaTitle: 'M-Pesa to Bank and Bank Transfers Kenya: PesaLink, RTGS, EFT | Transfer Hub',
    metaDescription:
      'Moving money between M-Pesa and Kenyan banks: PesaLink, RTGS and EFT compared on speed, limits and cost. How to pick the right rail and confirm the current fee.',
    heroDirectAnswer:
      'To move money between M-Pesa and a bank you choose a rail by amount and urgency. PesaLink handles instant account-to-account transfers up to its cap, RTGS is for large same-day settlement, and EFT is the slower batch option. M-Pesa to bank uses the bank Paybill or the in-app option. Fees and limits vary by bank and rail and change, so confirm the current figure with your bank or the calculator before sending.',
    keyPoints: [
      'PesaLink moves money instantly between Kenyan bank accounts and is run by Integrated Payment Services Ltd under the banks; it has a per-transaction cap (source: PesaLink/IPSL, verify current).',
      'RTGS settles large transfers in real time on the same day and is the rail for high-value amounts above the PesaLink cap (source: Central Bank of Kenya).',
      'EFT is a batched transfer that typically clears in one to two business days and is the cheapest but slowest option.',
      'M-Pesa to bank is done through the bank Paybill number or the bank channel inside M-Pesa; bank to M-Pesa uses the bank app or USSD.',
      'Per-bank fees and timelines differ, so the right answer to "which is cheaper" depends on the amount and on your bank.',
    ],
    sections: [
      {
        heading: 'Choosing PesaLink, RTGS or EFT',
        paragraphs: [
          'The three bank rails solve different problems. PesaLink is for everyday account-to-account transfers that need to land immediately and sit below its per-transaction ceiling. RTGS exists for large amounts that must settle the same day, which is why it is the rail for property deposits and similar payments. EFT is the batch system: cheaper, slower, and fine when the money does not need to arrive today.',
          'Picking by amount and urgency saves both money and a failed transfer. Trying to push a high-value payment through a rail with a low cap simply bounces, and using RTGS for a small everyday transfer pays for speed you do not need.',
        ],
      },
      {
        heading: 'Moving money between M-Pesa and your bank',
        paragraphs: [
          'M-Pesa to bank is usually done by paying the bank own Paybill number with your account as the reference, or through the bank option inside the M-Pesa menu. Each bank publishes its Paybill and its own charge for receiving from M-Pesa, and the Central Bank of Kenya periodically reviews the broader fee framework, so the figure you paid last year may not be the figure today.',
          'Bank to M-Pesa runs the other way through the bank app or USSD, often branded as a wallet top-up or send to mobile. Timelines are normally instant but can lag at month-end peaks. If a transfer stalls, check the daily limit and the reference details before assuming a fault.',
        ],
      },
      {
        heading: 'Fees, limits and failed transfers',
        paragraphs: [
          'There is no single national fee for these rails because banks set their own charges within the regulated framework. That is why a comparison has to be specific to your bank and amount. The calculator lets you line up PesaLink, RTGS and EFT for the same value so you can see the trade-off between speed and cost rather than guessing.',
          'When a bank transfer fails, the money is normally held and reversed rather than lost, but the timeline depends on the rail and on whether the issue was a wrong account or a system delay. Keep the transaction reference; it is what every support desk will ask for first.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'M-Pesa to Equity, KCB and Co-op step by step',
      'PesaLink explained and its limits',
      'RTGS vs EFT vs PesaLink compared',
      'How to send from your bank to M-Pesa',
      'Bank transfer timelines in Kenya',
      'Bank transfer charges by bank',
      'Fixing a failed bank transfer',
      'CBK bank Paybill numbers',
    ],
    toolPillars: [
      { href: '/mpesa-to-bank', label: 'M-Pesa to Bank Guide' },
      { href: '/bank-transfer', label: 'Bank Transfer Calculator' },
    ],
    adjacentHubSlugs: ['mpesa-charges', 'remittance'],
    faqs: [
      {
        question: 'What is the difference between PesaLink, RTGS and EFT?',
        answer:
          'PesaLink is instant account-to-account up to a per-transaction cap, RTGS settles large amounts in real time the same day, and EFT is a cheaper batch transfer that clears in one to two business days. Choose by amount and urgency.',
      },
      {
        question: 'How do I send money from M-Pesa to my bank account?',
        answer:
          'Pay your bank Paybill number with your account number as the reference, or use the bank option inside the M-Pesa menu. Each bank sets its own receiving charge, so confirm the current fee with your bank.',
      },
      {
        question: 'Why did my bank transfer fail?',
        answer:
          'The usual causes are exceeding a daily limit, a wrong account or reference, or sending above a rail cap (for example a high amount through PesaLink). The money is normally reversed; keep the transaction reference for support.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'remittance',
    title: 'Sending Money to Kenya from Abroad',
    shortTitle: 'Remittance',
    heroBadge: 'Diaspora remittance',
    reservedKeyword: 'send money to kenya',
    metaTitle: 'Sending Money to Kenya: Cheapest Way and Provider Comparison | Transfer Hub',
    metaDescription:
      'How to send money to Kenya from the diaspora: comparing exchange-rate markup and fees across Wise, WorldRemit and Remitly, sending direct to M-Pesa, and tax and limits.',
    heroDirectAnswer:
      'The cheapest way to send money to Kenya is rarely the one with the lowest visible fee. The real cost is the fee plus the exchange-rate markup, and the cheapest provider changes by sending country, amount and payout method. Sending direct to M-Pesa is usually fastest. Always compare the total amount the recipient gets, in KES, rather than the headline fee.',
    keyPoints: [
      'Total cost equals the transfer fee plus the gap between the provider rate and the mid-market rate. A zero-fee transfer can still be expensive through a wide rate markup.',
      'Payout direct to M-Pesa is normally the fastest option and avoids a bank step; payout to a bank account can be cheaper for large amounts.',
      'The cheapest provider depends on the corridor: the best choice from the UK is not always the best from the USA or the UAE.',
      'Diaspora remittances received by individuals are not taxed as income in Kenya, but always confirm the rules in the sending country.',
      'Kenya is one of the largest remittance markets in the region, and inflows are tracked monthly by the Central Bank of Kenya (source: CBK diaspora remittance statistics).',
    ],
    sections: [
      {
        heading: 'Fee plus markup is the only number that matters',
        paragraphs: [
          'Money transfer marketing leads with the fee because it is the easy number to make look small. The cost that actually reaches the recipient is the fee plus the exchange-rate markup, which is the difference between the rate you are given and the mid-market rate you can look up independently. A provider advertising no fee can still be the dearest option once the markup is included.',
          'The honest comparison is to look at the amount in KES the recipient will receive for a fixed amount sent, on the same day, across two or three providers. That single figure folds the fee and the markup together. Comparing headline fees alone is how people overpay without noticing.',
        ],
      },
      {
        heading: 'Payout method and the corridor',
        paragraphs: [
          'Paying out direct to M-Pesa is usually the fastest route and skips a bank-account step, which matters when the money is needed quickly. For larger sums a bank payout can occasionally work out cheaper, so the right method depends on amount and urgency.',
          'The cheapest provider is corridor-specific. Competition and licensing differ between the UK, the USA, the UAE, the EU and Canada, so a provider that wins from one country can lag from another. That is why the comparison should be done for your sending country and amount rather than taken from a generic ranking.',
        ],
      },
      {
        heading: 'Tax, limits and staying safe',
        paragraphs: [
          'For the person receiving money in Kenya, a personal remittance from family abroad is not treated as taxable income. Limits and reporting obligations usually sit on the sending side and with the provider, so check the rules and any caps in the country you are sending from. Large or business-related inflows can attract additional checks.',
          'Use a licensed provider and confirm the recipient name and number before sending. The calculator and corridor pages line up providers on the total received in KES, which is the comparison worth making before every transfer because the rankings move with the rate.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'The cheapest way to send money to Kenya now',
      'WorldRemit vs Wise vs Remitly to Kenya',
      'Sending money to Kenya from the USA',
      'Sending money to Kenya from the UK',
      'Exchange-rate markup explained',
      'Sending direct to M-Pesa from abroad',
      'Remittance tax and limits for Kenya',
      'Receiving a large remittance in Kenya',
    ],
    toolPillars: [
      { href: '/send-money-to-kenya', label: 'Send Money to Kenya' },
      { href: '/remittance', label: 'Remittance Calculator' },
    ],
    adjacentHubSlugs: ['bank-transfers', 'mpesa-charges'],
    faqs: [
      {
        question: 'What is the cheapest way to send money to Kenya?',
        answer:
          'The cheapest option is the one where the recipient gets the most KES once both the fee and the exchange-rate markup are counted. That provider changes by sending country and amount, so compare the total received on the day rather than the headline fee.',
      },
      {
        question: 'Is money sent to Kenya from abroad taxed?',
        answer:
          'A personal remittance received from family abroad is not treated as taxable income in Kenya. Reporting rules and limits usually apply on the sending side, so check the regulations in the country you are sending from.',
      },
      {
        question: 'Is it faster to send to M-Pesa or a bank account?',
        answer:
          'Direct payout to M-Pesa is usually the fastest route and avoids a bank step. A bank payout can sometimes be cheaper for large amounts, so choose by amount and urgency.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'paybill-till',
    title: 'Paybill, Till and Business Payments',
    shortTitle: 'Paybill and Till',
    heroBadge: 'Lipa na M-Pesa',
    reservedKeyword: 'paybill directory',
    metaTitle: 'Paybill, Till and Buy Goods in Kenya: How Business Payments Work | Transfer Hub',
    metaDescription:
      'Paybill vs Buy Goods (Till) in Kenya: when each is used, charges, reversing a payment, paying KRA, SHA and NHIF, and Pochi la Biashara explained.',
    heroDirectAnswer:
      'Lipa na M-Pesa comes in two forms: Paybill, used for bills and account-based payments where you enter an account number, and Buy Goods (Till), used at shops where you only enter the till. Buy Goods is typically free to the customer while the merchant pays, and Paybill charges depend on the biller. Confirm the current tariff on the prompt before you pay.',
    keyPoints: [
      'Paybill needs a business number plus your account or reference; Buy Goods (Till) needs only the till number.',
      'Buy Goods is generally free to the paying customer, with the merchant carrying the cost; Paybill charges vary by biller (source: Safaricom Lipa na M-Pesa tariff, verify current).',
      'Pochi la Biashara is a separate small-business wallet for sole traders that keeps business money apart from personal M-Pesa.',
      'Government and utility billers, including KRA, SHA and water, are paid through their official Paybill numbers; always confirm the number from the institution itself.',
      'A wrong Paybill or Buy Goods payment can sometimes be reversed, but recovery is not guaranteed once the merchant withdraws.',
    ],
    sections: [
      {
        heading: 'Paybill versus Buy Goods',
        paragraphs: [
          'The practical difference is the account number. Paybill is for billers who need to know which account the money is for, such as a utility, a landlord or the tax authority, so you enter the business number and then your account or reference. Buy Goods is for shops and restaurants where the till number alone identifies the merchant and there is nothing else to reference.',
          'Cost usually follows that split. Buy Goods is typically free to the customer because the merchant pays the charge, while Paybill fees depend on the biller arrangement. The confirmation prompt shows the cost for that specific payment, which is the figure to trust because Safaricom revises the Lipa na M-Pesa tariff from time to time.',
        ],
      },
      {
        heading: 'Paying government and utilities safely',
        paragraphs: [
          'KRA, the Social Health Authority, county water companies and similar billers each have an official Paybill. The single most important safety step is to take the Paybill number from the institution own communication, letter or app, not from a forwarded message, because fake Paybill numbers are a common scam. The amount and your reference must match what the biller expects or the payment can post to the wrong account.',
          'For small traders, Pochi la Biashara is worth knowing about. It is a dedicated wallet that separates business takings from personal M-Pesa, which makes record-keeping cleaner and reduces the chance of spending float by mistake. It sits alongside Paybill and Till rather than replacing them.',
        ],
      },
      {
        heading: 'When a payment goes to the wrong place',
        paragraphs: [
          'Mistyped Paybill payments happen, and a reversal is sometimes possible by reporting promptly to Safaricom with the transaction details. As with any M-Pesa reversal, success depends on the money still being recoverable, so speed matters. The transaction message is the record every support process starts from.',
          'To find a verified Paybill quickly and avoid the wrong-number trap, the directory is the right starting point. It is the tool pillar for this hub and the place to confirm a number before you send rather than after.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'How to find a Paybill number',
      'Buy Goods vs Paybill explained',
      'Reversing a Paybill payment',
      'Paying KRA, SHA and water by Paybill',
      'Pochi la Biashara explained',
      'Till vs Paybill charges',
      'Common Paybill numbers in Kenya',
    ],
    toolPillars: [{ href: '/paybill-directory', label: 'Paybill Directory' }],
    adjacentHubSlugs: ['mpesa-charges', 'kplc-tokens'],
    faqs: [
      {
        question: 'What is the difference between Paybill and Buy Goods?',
        answer:
          'Paybill is for billers that need an account number, so you enter the business number then your reference. Buy Goods (Till) is for shops where the till number alone identifies the merchant. Buy Goods is generally free to the customer; Paybill charges vary by biller.',
      },
      {
        question: 'Can I reverse a payment sent to the wrong Paybill?',
        answer:
          'Sometimes. Report it to Safaricom promptly with the transaction details. Recovery depends on the money still being available, so act quickly; it is not guaranteed once the merchant withdraws.',
      },
      {
        question: 'How do I avoid fake Paybill scams?',
        answer:
          'Always take the Paybill number from the institution own letter, bill or official app rather than a forwarded message, and check the confirmation prompt shows the expected business name before approving.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'mpesa-how-tos',
    title: 'M-Pesa How-Tos, USSD and Troubleshooting',
    shortTitle: 'M-Pesa how-tos',
    heroBadge: 'USSD and fixes',
    reservedKeyword: 'm-pesa ussd codes',
    metaTitle: 'M-Pesa USSD Codes and Troubleshooting in Kenya | Transfer Hub',
    metaDescription:
      'M-Pesa USSD codes, checking your balance and statement, PIN reset, Hakikisha, number portability and what to do when M-Pesa is not working.',
    heroDirectAnswer:
      'Most M-Pesa tasks can be done by USSD as well as in the app, which matters when you have no data or a basic phone. The main code opens the menu for balance, statement, PIN and transfers, Hakikisha shows the recipient name before you confirm, and number portability lets you keep your number across networks. When M-Pesa is not working, the cause is usually a network event or a limit rather than your account.',
    keyPoints: [
      'The M-Pesa USSD menu works on any phone with a Safaricom line and needs no data connection.',
      'Hakikisha displays the registered recipient name before you confirm a send, which is your last chance to catch a wrong number.',
      'You can request a mini statement and reset your PIN through official M-Pesa channels without visiting a shop.',
      'Number portability lets you keep your mobile number when changing network, governed by the Communications Authority of Kenya.',
      'When M-Pesa fails, check for a known outage and your own daily limit before assuming an account problem.',
    ],
    sections: [
      {
        heading: 'Doing more by USSD',
        paragraphs: [
          'The app is convenient but the USSD menu is the dependable fallback. It runs on any handset with a Safaricom line, needs no data, and covers the core tasks: checking your balance, pulling a mini statement, sending money, paying a bill and managing your PIN. Knowing the codes is what keeps you moving when your data is out or your phone is borrowed.',
          'Hakikisha is the small feature that prevents the biggest mistakes. Before a send completes it shows the registered name of the recipient, so a transposed digit usually shows up as the wrong name. Reading that line before you confirm is the cheapest insurance against sending to a stranger.',
        ],
      },
      {
        heading: 'PIN, statements and portability',
        paragraphs: [
          'A forgotten PIN does not need a shop visit; M-Pesa provides an official reset flow that verifies your identity and lets you set a new PIN. A mini statement, available by USSD or app, is enough for most reconciliations, and a full statement can be requested when you need a longer record.',
          'Number portability is the right to keep your phone number when you move network, overseen by the Communications Authority of Kenya. It is useful to understand because your M-Pesa identity is tied to that number, so the process and timing are worth knowing before you switch rather than discovering them midway.',
        ],
      },
      {
        heading: 'When M-Pesa is not working',
        paragraphs: [
          'Most "M-Pesa is down" moments are either a temporary network event affecting many users or a personal limit you have hit, not a fault with your account. Checking whether others are affected, and whether you have exceeded a daily limit, resolves the majority of cases before you contact support.',
          'If a transaction is genuinely stuck, the transaction message and the time are what support needs. The status tool is the quick way to tell a system-wide event from a one-off, so you know whether to wait or to report.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'All M-Pesa USSD codes in one place',
      'How to check your M-Pesa balance',
      'How to get an M-Pesa statement',
      'Number portability in Kenya',
      'How to reset your M-Pesa PIN',
      'Hakikisha explained',
      'M-Pesa not working: quick fixes',
      'M-Pesa Ratiba and standing orders',
    ],
    toolPillars: [
      { href: '/ussd-codes', label: 'USSD Codes' },
      { href: '/mpesa-status', label: 'Is M-Pesa Down?' },
      { href: '/mobile-portability', label: 'Mobile Portability' },
    ],
    adjacentHubSlugs: ['mpesa-charges', 'paybill-till'],
    faqs: [
      {
        question: 'How do I check my M-Pesa balance without data?',
        answer:
          'Use the M-Pesa USSD menu on your Safaricom line. It works on any phone without a data connection and lets you check your balance, request a statement and manage your PIN.',
      },
      {
        question: 'What is Hakikisha?',
        answer:
          'Hakikisha is the M-Pesa step that shows the registered name of the recipient before you confirm a send. It is your last chance to catch a wrong number, so always read it before approving.',
      },
      {
        question: 'M-Pesa is not working, what should I check first?',
        answer:
          'Check whether there is a wider outage affecting other users and whether you have hit a daily limit. Those explain most failures. If a transaction is genuinely stuck, report it to Safaricom with the transaction message and time.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'kplc-tokens',
    title: 'KPLC Tokens and Utility Payments',
    shortTitle: 'KPLC tokens',
    heroBadge: 'Electricity and utilities',
    reservedKeyword: 'buy kplc tokens',
    metaTitle: 'KPLC Tokens via M-Pesa and Paying Utilities in Kenya | Transfer Hub',
    metaDescription:
      'How to buy KPLC prepaid tokens with M-Pesa, check your token balance, find your meter number, prepaid vs postpaid, and pay water, DSTV and SHA by M-Pesa.',
    heroDirectAnswer:
      'You buy KPLC prepaid tokens by paying the official KPLC Paybill with your meter number as the account, and the token comes back by SMS to enter on the meter. Most other Kenyan utilities, from water to pay-TV, work the same way through their own Paybill. Always take the Paybill and meter number from your own bill or the KPLC app to avoid fake-number scams.',
    keyPoints: [
      'KPLC prepaid tokens are bought by paying the official KPLC Paybill with your meter number as the account reference.',
      'The token is a numeric code delivered by SMS that you key into the prepaid meter to load units.',
      'Prepaid meters charge as you go; postpaid meters bill in arrears, and the account setup differs between them.',
      'If a token does not arrive, it can usually be retrieved without paying again by checking your transaction and meter details.',
      'Water companies, DSTV, GOtv, Zuku and SHA are each paid through their own official Paybill, confirmed from the provider.',
    ],
    sections: [
      {
        heading: 'Buying and loading KPLC tokens',
        paragraphs: [
          'Prepaid electricity in Kenya runs on tokens. You pay the official KPLC Paybill, enter your meter number as the account, and the system returns a token code by SMS that you punch into the meter to add units. The amount of electricity you get for a given payment depends on the tariff and the levies in force, which are set by the regulator and revised from time to time, so the units per shilling can change between purchases.',
          'The most common mistake is the meter number. Tokens are tied to the specific meter, so a wrong meter number sends units to someone else and is hard to recover. Take the meter number from your own meter or a previous bill, and confirm the KPLC Paybill from KPLC own channels rather than a forwarded message.',
        ],
      },
      {
        heading: 'Prepaid versus postpaid, and a missing token',
        paragraphs: [
          'Prepaid and postpaid are two different billing models. Prepaid charges you upfront through tokens and suits tenants and anyone who wants tight control of spend. Postpaid bills you in arrears for what you used and is common on larger or older connections. The account setup, and what you do when something goes wrong, differ between them.',
          'If you pay and no token arrives, do not buy again immediately. The token can usually be retrieved using your transaction details and meter number through KPLC channels, because the purchase succeeded even if the SMS did not reach you. Paying twice in a panic is the avoidable cost here.',
        ],
      },
      {
        heading: 'Paying the rest of your utilities',
        paragraphs: [
          'The Paybill pattern repeats across utilities. County water companies, DSTV, GOtv, Zuku, Startimes and the Social Health Authority each have an official Paybill where you enter your account or meter number. The mechanics are the same as KPLC, and so is the safety rule: confirm the number from the provider own bill or app.',
          'Because the exact KPLC tariff and the per-unit cost move with regulatory reviews, treat any figure you see online as indicative and rely on the SMS confirmation and your meter reading for the real number. The meter transfer tool covers the related task of moving a meter into your name when you change premises.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'How to buy KPLC tokens via M-Pesa',
      'How to check your KPLC token balance',
      'Finding your KPLC Paybill and meter number',
      'Prepaid vs postpaid electricity in Kenya',
      'Paying water, DSTV, GOtv and Zuku by M-Pesa',
      'KPLC token not received: how to recover it',
    ],
    toolPillars: [{ href: '/kplc-transfer', label: 'KPLC Meter Transfer' }],
    adjacentHubSlugs: ['paybill-till', 'mpesa-how-tos'],
    faqs: [
      {
        question: 'How do I buy KPLC tokens with M-Pesa?',
        answer:
          'Pay the official KPLC Paybill and enter your meter number as the account. A token code is sent to you by SMS to key into your prepaid meter. Confirm the Paybill and meter number from your own bill to avoid scams.',
      },
      {
        question: 'I paid for tokens but none arrived, what do I do?',
        answer:
          'Do not buy again immediately. The token can usually be retrieved using your transaction details and meter number through KPLC, because the payment itself succeeded even if the SMS failed to arrive.',
      },
      {
        question: 'Why do I get fewer units for the same money sometimes?',
        answer:
          'Units per shilling depend on the electricity tariff and levies set by the regulator, which are reviewed periodically. Rely on the SMS confirmation and your meter reading for the actual units rather than an online estimate.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'vehicle-logbook',
    title: 'Vehicle and Logbook Transfer in Kenya',
    shortTitle: 'Logbook transfer',
    heroBadge: 'NTSA TIMS',
    reservedKeyword: 'logbook transfer ntsa',
    metaTitle: 'Vehicle Logbook Transfer in Kenya: NTSA TIMS Process and Cost | Transfer Hub',
    metaDescription:
      'How to transfer a vehicle logbook in Kenya on NTSA TIMS: the steps, documents, transfer cost, timelines, motorbikes and inherited vehicles.',
    heroDirectAnswer:
      'A vehicle logbook transfer in Kenya is done online through the NTSA TIMS portal. Both buyer and seller need a TIMS account, the seller initiates the transfer and the buyer accepts, and a transfer fee plus any duty applies. Cost depends on the vehicle, and figures are set by NTSA and KRA, so confirm the current fee on TIMS before you start.',
    keyPoints: [
      'Logbook transfers run through the NTSA TIMS portal, and both parties need a registered TIMS account linked to their KRA PIN.',
      'The seller initiates the transfer in TIMS and the buyer accepts it; it is not done at a physical desk.',
      'A transfer fee applies and is set by NTSA; an inspection or valuation may also be required (source: NTSA, verify current).',
      'Required documents typically include national ID, KRA PIN and the existing logbook details for both parties.',
      'Special cases such as motorbikes, inherited vehicles and duplicate logbooks follow variations of the same process.',
    ],
    sections: [
      {
        heading: 'How a TIMS transfer works',
        paragraphs: [
          'The National Transport and Safety Authority moved vehicle records onto the TIMS portal, so a logbook transfer is now an online handshake rather than a counter visit. Both the seller and the buyer need a TIMS account tied to their KRA PIN. The seller starts the transfer against the buyer details, and the buyer logs in to accept it. Until the buyer accepts, the transfer is not complete and the vehicle remains in the seller name.',
          'Because both sides act in the portal, getting the buyer KRA PIN and TIMS details right at the start avoids the most common delay. A mismatch between the ID, the PIN and the TIMS account stalls the transfer until it is corrected.',
        ],
      },
      {
        heading: 'Cost, documents and timelines',
        paragraphs: [
          'A transfer fee applies and is set by NTSA, and depending on the vehicle there may be an inspection or a valuation step. The exact fee changes with NTSA reviews, so the figure to rely on is the one TIMS shows for your specific vehicle at the time of transfer, not a number remembered from a previous sale. The calculator gives an estimate so you can budget before you log in.',
          'On documents, expect to need national ID, KRA PIN and the current logbook details for both parties. Having scans ready speeds up the portal steps. Timelines are usually short once both parties have acted and any inspection is cleared, but they stretch if details need correcting.',
        ],
      },
      {
        heading: 'Motorbikes, inheritance and duplicates',
        paragraphs: [
          'The same TIMS framework covers motorbikes, which are a large share of transfers, with the process mirroring that for cars. Transferring an inherited vehicle adds an estate dimension: you generally need proof of the transmission of the estate, such as a grant, before the registration can move into a beneficiary name.',
          'A lost logbook is handled by a duplicate application in TIMS before or alongside a transfer. Each of these is a variation on the core flow rather than a separate system, which is why understanding the standard TIMS transfer first makes the special cases straightforward.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'How to transfer a logbook on NTSA TIMS',
      'Logbook transfer cost in Kenya',
      'Documents needed for a logbook transfer',
      'Logbook transfer timelines',
      'How to get a duplicate logbook',
      'Transferring a motorbike logbook',
      'Transferring an inherited vehicle',
    ],
    toolPillars: [{ href: '/vehicle-transfer', label: 'Vehicle Transfer Calculator' }],
    adjacentHubSlugs: ['property-land', 'import-duty'],
    faqs: [
      {
        question: 'How do I transfer a logbook in Kenya?',
        answer:
          'Both buyer and seller need an NTSA TIMS account linked to their KRA PIN. The seller initiates the transfer against the buyer details and the buyer accepts it in the portal. A transfer fee applies, shown on TIMS for your vehicle.',
      },
      {
        question: 'How much does a logbook transfer cost?',
        answer:
          'A transfer fee set by NTSA applies, and some vehicles need an inspection or valuation. The exact figure changes with NTSA reviews, so confirm the current fee on TIMS; the calculator gives a budgeting estimate.',
      },
      {
        question: 'How do I transfer an inherited vehicle?',
        answer:
          'You generally need proof of transmission of the estate, such as a grant of representation, before the registration can move to a beneficiary. The transfer then follows the standard TIMS process.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'property-land',
    title: 'Property and Land Transfer in Kenya',
    shortTitle: 'Land transfer',
    heroBadge: 'Stamp duty and Ardhisasa',
    reservedKeyword: 'land transfer stamp duty',
    metaTitle: 'Property and Land Transfer in Kenya: Stamp Duty and Ardhisasa | Transfer Hub',
    metaDescription:
      'The land transfer process in Kenya: stamp duty rates, the Ardhisasa portal, due diligence and search, costs and fees, and gifting or inheriting land.',
    heroDirectAnswer:
      'Transferring land in Kenya involves a search and due diligence, valuation, payment of stamp duty to KRA, and registration. Stamp duty on a transfer of immovable property is charged at 4 percent of value for property in a municipality or town and 2 percent in rural areas (source: Stamp Duty Act, KRA). Rates and exemptions can change, so confirm the current position before you transact.',
    keyPoints: [
      'Stamp duty on land transfer is 4 percent of the value in urban areas and 2 percent in rural areas (source: Stamp Duty Act, KRA; verify current).',
      'The process runs through registration and increasingly through the Ardhisasa portal, which digitises land records and transactions.',
      'A land search and independent due diligence come before money changes hands, to confirm ownership and any charges.',
      'Valuation for stamp duty is assessed by a government valuer, and duty is paid to KRA before registration completes.',
      'Transfers between certain close family members and some other cases can attract relief or exemption; confirm eligibility with the authority.',
    ],
    sections: [
      {
        heading: 'Search and due diligence first',
        paragraphs: [
          'The first money you spend on a land transaction should be on confirming what you are buying. An official search establishes the registered owner and whether the title carries a charge, caution or restriction. Independent due diligence goes further, checking that the seller is who they claim and that the parcel matches the title. In a market where land fraud is real, this step protects the entire purchase price.',
          'The Ardhisasa portal has digitised land records and transactions for covered registries, which makes searches and some processes faster and more transparent than the paper system. Where a parcel sits on Ardhisasa, both parties typically need accounts, and the transaction is progressed through the portal.',
        ],
      },
      {
        heading: 'Stamp duty and the cost of transfer',
        paragraphs: [
          'Stamp duty is the headline tax on a transfer. Under the Stamp Duty Act, a transfer of immovable property is charged at 4 percent of the value for property within a municipality, city or town and 2 percent for property in a rural area. A government valuer assesses the value, and the duty is paid to the Kenya Revenue Authority before the transfer can be registered. These rates and the exemptions around them are set in law and can be amended, so confirm the current position rather than assuming.',
          'Stamp duty is not the only cost. Legal fees, the valuation, search fees and registration charges all add up, and the calculator helps you budget the total rather than just the duty. Building the full figure in early avoids a shortfall at completion.',
        ],
      },
      {
        heading: 'Gifts, inheritance and sectional titles',
        paragraphs: [
          'Not every transfer is a sale. Gifting land to family and inheriting land follow their own routes, and some transfers between close family members can attract stamp duty relief, subject to meeting the conditions the law sets. Inherited land usually requires the estate to be administered first, with the appropriate grant, before title moves to a beneficiary.',
          'Sectional titles, which apply to apartments and units under the Sectional Properties Act, add their own registration considerations. The common thread across all of these is that the search, valuation, duty and registration steps still apply in some form, which is why understanding the standard transfer makes the variations manageable.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'The land transfer process in Kenya',
      'Stamp duty rates and how to calculate them',
      'Ardhisasa explained',
      'Land transfer costs and fees',
      'Gifting and inheriting land in Kenya',
      'Sectional titles explained',
      'Land due diligence and search',
    ],
    toolPillars: [{ href: '/property-transfer', label: 'Property Transfer Calculator' }],
    adjacentHubSlugs: ['vehicle-logbook', 'pension-transfer'],
    faqs: [
      {
        question: 'How much is stamp duty on land in Kenya?',
        answer:
          'Under the Stamp Duty Act, a transfer of immovable property is charged at 4 percent of value in a municipality or town and 2 percent in a rural area, assessed by a government valuer and paid to KRA before registration. Confirm the current rate, as it can be amended.',
      },
      {
        question: 'What is Ardhisasa?',
        answer:
          'Ardhisasa is the national land information portal that digitises land records and transactions for covered registries, allowing searches and some transfer steps to be done online. Where a parcel is on Ardhisasa, both parties usually need accounts.',
      },
      {
        question: 'Do I pay stamp duty when inheriting or being gifted land?',
        answer:
          'Some transfers between close family members can attract stamp duty relief subject to conditions, and inherited land requires the estate to be administered first. Confirm eligibility with KRA and the land registry before assuming an exemption.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'pension-transfer',
    title: 'Pension Transfer and NSSF in Kenya',
    shortTitle: 'Pension transfer',
    heroBadge: 'NSSF and schemes',
    reservedKeyword: 'nssf pension transfer',
    metaTitle: 'Pension Transfer and NSSF Contributions in Kenya | Transfer Hub',
    metaDescription:
      'Transferring a pension in Kenya: NSSF tiers and contributions, moving between schemes, what happens to your pension when you leave a job, and early access rules.',
    heroDirectAnswer:
      'In Kenya, pension savings are portable: you can transfer benefits between registered schemes, and NSSF runs on a tiered contribution structure under the NSSF Act No. 45 of 2013. When you leave a job you generally keep your accrued benefits and can transfer or preserve them. Access and transfer rules are set by the Retirement Benefits Authority and NSSF, so confirm the current position before acting.',
    keyPoints: [
      'NSSF contributions follow the tiered structure under the NSSF Act No. 45 of 2013, with contributions split into tiers up to set earnings limits (source: NSSF; verify current rates).',
      'Occupational and individual pension schemes are regulated by the Retirement Benefits Authority (RBA).',
      'You can usually transfer accrued benefits between registered schemes rather than cashing out when you change employer.',
      'On leaving a job, accrued pension benefits remain yours and can be transferred or preserved, subject to scheme and RBA rules.',
      'Early access before retirement age is restricted and limited to defined circumstances; the rules are set by the RBA.',
    ],
    sections: [
      {
        heading: 'How NSSF and scheme pensions fit together',
        paragraphs: [
          'Kenyan retirement saving has two main layers. NSSF is the statutory scheme, and since the NSSF Act No. 45 of 2013 it operates on a tiered contribution model where contributions are calculated in tiers up to set earnings limits, with the implementation phased over several years. On top of NSSF, many employers run an occupational pension scheme, and individuals can hold a personal pension, all regulated by the Retirement Benefits Authority.',
          'Because the NSSF figures have been phased in and the earnings limits are revised, the exact contribution for a given salary is a moving number. Treat any contribution figure as date-sensitive and confirm it against the current NSSF schedule rather than an older table.',
        ],
      },
      {
        heading: 'Transferring and preserving benefits',
        paragraphs: [
          'Pension benefits in Kenya are designed to be portable. When you move employer or scheme, you can generally transfer your accrued benefits into the new scheme or preserve them in the existing one rather than taking cash, which keeps the savings working and within the tax-advantaged pension system. The transfer is processed between the schemes under RBA rules.',
          'Preserving benefits matters because cashing out early erodes the retirement pot and can have tax consequences. The default that protects your future income is usually to transfer or preserve, and to take advice where the amounts are significant.',
        ],
      },
      {
        heading: 'Leaving a job and early access',
        paragraphs: [
          'Leaving employment does not forfeit your accrued pension. The benefits remain yours, and your choices are typically to transfer them to a new scheme, preserve them, or in limited circumstances access a portion, all within the framework the Retirement Benefits Authority sets. The right choice depends on your age, your new employment and the scheme rules.',
          'Early access before retirement age is deliberately restricted to protect retirement income and is allowed only in defined situations. Because these rules are set by the RBA and updated, confirm what applies to your scheme before counting on early access. The calculator helps you see the contribution and savings picture so the decision is grounded in numbers.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'Transferring an NSSF or scheme pension',
      'NSSF tiers and contributions explained',
      'Transferring between pension schemes',
      'Accessing your pension early in Kenya',
      'What happens to your pension when you leave a job',
    ],
    toolPillars: [{ href: '/pension-transfer', label: 'Pension Transfer Calculator' }],
    adjacentHubSlugs: ['property-land', 'bank-transfers'],
    faqs: [
      {
        question: 'Can I transfer my pension between schemes in Kenya?',
        answer:
          'Yes. Accrued benefits in registered schemes are generally portable, so when you change employer or scheme you can transfer or preserve them rather than cashing out, processed between the schemes under Retirement Benefits Authority rules.',
      },
      {
        question: 'How are NSSF contributions calculated?',
        answer:
          'NSSF uses a tiered contribution structure under the NSSF Act No. 45 of 2013, with contributions calculated in tiers up to set earnings limits that have been phased in. The figures are revised, so confirm the current rate against the NSSF schedule for your salary.',
      },
      {
        question: 'What happens to my pension when I leave a job?',
        answer:
          'Your accrued benefits remain yours. You can usually transfer them to a new scheme, preserve them, or in limited cases access a portion, subject to the scheme rules and the Retirement Benefits Authority framework.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'import-duty',
    title: 'Import Duty and Customs in Kenya',
    shortTitle: 'Import duty',
    heroBadge: 'KRA customs',
    reservedKeyword: 'car import duty calculator',
    metaTitle: 'Import Duty in Kenya: Cars, Goods and KRA Customs Explained | Transfer Hub',
    metaDescription:
      'How import duty works in Kenya: car import duty and the KRA CRSP, CIF value, duty on phones and electronics, clearing an imported car and exemptions.',
    heroDirectAnswer:
      'Import duty in Kenya is calculated by KRA on the customs value of the goods, which for vehicles is based on the Current Retail Selling Price (CRSP) and depreciation, not the price you paid. A used car typically attracts import duty, excise duty and VAT, layered on the CIF value. Rates and the CRSP schedule change, so use the calculator and confirm the current KRA position before importing.',
    keyPoints: [
      'KRA assesses vehicle import duty on the Current Retail Selling Price (CRSP) less depreciation, not on your purchase price (source: KRA; verify current CRSP).',
      'A used car import is usually charged import duty, excise duty and VAT, applied in sequence on the customs value.',
      'CIF, meaning Cost, Insurance and Freight, is the landed value customs duty is calculated on.',
      'There is an age limit on used vehicle imports and a left-hand-drive restriction enforced at clearance.',
      'Some goods and importers qualify for exemptions or preferential rates; eligibility is determined by KRA.',
    ],
    sections: [
      {
        heading: 'How KRA values an import',
        paragraphs: [
          'The figure that surprises people is that KRA does not tax what you paid. For vehicles, duty is built on the Current Retail Selling Price, a KRA reference value for each model, adjusted for depreciation by age. For other goods, the starting point is the CIF value, meaning the cost of the goods plus insurance and freight to land them in Kenya. Either way, the customs value is the base, and the taxes stack on top of it.',
          'For a car, that stack is typically import duty, then excise duty, then VAT, each applied in turn so that later taxes are charged on the running total. This layering is why the all-in cost can be a large multiple of the simple duty rate, and why an estimate that ignores it understates the bill.',
        ],
      },
      {
        heading: 'Cars: age limit, steering and clearing',
        paragraphs: [
          'Two rules catch importers out. Kenya enforces an age limit on used vehicle imports, so a vehicle beyond the permitted age is not accepted, and only right-hand-drive vehicles are allowed for registration. Checking both before you buy abroad avoids importing a car you cannot clear.',
          'Clearing an imported car runs through a licensed clearing agent and KRA at the port, with duties paid before release. The CRSP schedule that drives the valuation is updated by KRA, so the duty on the same model can differ between one year and the next. The calculator mirrors the CRSP-based method to give you a realistic figure to budget against.',
        ],
      },
      {
        heading: 'Goods, electronics and exemptions',
        paragraphs: [
          'Import duty is not only a car issue. Phones, electronics and general goods attract duty and VAT on their CIF value, with rates depending on the tariff classification of the item. For small personal imports the totals are lower, but the same principle applies: the tax is on the landed value, not just the sticker price.',
          'Exemptions and preferential rates exist for certain goods, returning residents and specific importers, and they are determined by KRA against defined criteria. They are worth checking because they can change the figure materially, but they should be confirmed with KRA rather than assumed, since eligibility is specific and the rules are revised.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'Car import duty and the KRA CRSP explained',
      'Import duty on goods in Kenya',
      'CIF value explained',
      'Clearing an imported car at the port',
      'Duty on phones and electronics',
      'KRA import duty exemptions',
    ],
    toolPillars: [{ href: '/import-duty', label: 'Import Duty Calculator' }],
    adjacentHubSlugs: ['vehicle-logbook', 'paybill-till'],
    faqs: [
      {
        question: 'How is car import duty calculated in Kenya?',
        answer:
          'KRA bases vehicle duty on the Current Retail Selling Price (CRSP) less depreciation for age, not on what you paid. Import duty, excise duty and VAT are then applied in sequence on the customs value. The CRSP schedule is updated, so confirm the current figure with KRA or the calculator.',
      },
      {
        question: 'What does CIF mean for imports?',
        answer:
          'CIF stands for Cost, Insurance and Freight: the landed value of the goods including shipping and insurance. For non-vehicle goods, KRA calculates duty and VAT on the CIF value.',
      },
      {
        question: 'Is there an age limit on imported cars?',
        answer:
          'Yes. Kenya enforces an age limit on used vehicle imports and allows only right-hand-drive vehicles for registration. Check both before buying abroad, as a vehicle that breaches either cannot be cleared.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
];

export const GUIDES_BY_SLUG: Record<string, GuideData> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);

export function getGuide(slug: string): GuideData | undefined {
  return GUIDES_BY_SLUG[slug];
}
