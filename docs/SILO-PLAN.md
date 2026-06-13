# Kenya's Transfer Hub (transfer) — silo plan

Niche: money and asset transfers in Kenya + calculators. "Kenya's Transfer Hub" —
M-Pesa fees, bank transfers, remittance, logbook/vehicle transfer, property stamp
duty, import duty, KPLC tokens, pension. Informational + tool/calculator site.
Kenya English, KES, M-Pesa. NOT a lead-gen/matching site: monetisation is the
calculators + traffic (AdSense) and affiliate links to remittance providers where
relevant. YMYL-financial -> every fee/rate/threshold must be current and sourced.

Content lives in `lib/` (blog-data.ts, blog-transfer-4a/b/c.ts, all-blog-posts.ts,
bank-bridge-data.ts, paybill-data.ts). Tool pages are the pillars. No `/guides`
route yet.

## 0. Architecture prerequisite (Claude Code, before the writer runs)

1. Build a `/guides/[slug]/` hub route + `lib/guides.ts` (or data/guides.ts) with the
   10 hubs; each hub links to its tool/calculator pillar + its spokes. Hub pages
   render a child-spoke grid by `hub`. Add Guides to nav + sitemap.
2. Blog: add `hub: string` + `draft: boolean` to the blog post type (in lib/blog-data
   or the aggregator); draft gate (draft:true 404s, excluded from /blog, hub grids,
   sitemap).
3. Schema: Article + BreadcrumbList + FAQPage on hubs + spokes, author `@id` to an
   editorial entity, datePublished + dateModified. Author byline = "KTH" (Kenya
   Transfer Hub) editorial entity, no invented person.
4. Kenya-English + KES sweep.

## 1. The ten pillar hubs (/guides), aligned to the existing tool pages

| ID | Hub | Tool/pillar page |
|---|---|---|
| H1 | M-Pesa charges and transfers | /mpesa-calculator/ |
| H2 | M-Pesa to bank and bank transfers | /mpesa-to-bank/, /bank-transfer/ (PesaLink, RTGS, EFT) |
| H3 | Sending money to Kenya (remittance) | /send-money-to-kenya/, /remittance/ |
| H4 | Paybill, Till and business payments | /paybill-directory/ |
| H5 | M-Pesa how-tos, USSD and troubleshooting | /ussd-codes/, /mpesa-status/, /mobile-portability/ |
| H6 | KPLC tokens and utility payments | /kplc-transfer/ |
| H7 | Vehicle and logbook transfer | /vehicle-transfer/ (NTSA TIMS) |
| H8 | Property and land transfer | /property-transfer/ (stamp duty, Ardhisasa) |
| H9 | Pension transfer | /pension-transfer/ (NSSF, schemes) |
| H10 | Import duty and customs | /import-duty/ (KRA) |

## 2. Reserved head terms (owned by the tool pages, not spokes)

| Reserved | Owned by |
|---|---|
| M-Pesa charges / calculator | /mpesa-calculator/ |
| send money to Kenya / [country] | /send-money-to-kenya/ + [country] pages |
| paybill directory, USSD codes | the respective tool pages |
Spokes take narrower how-to/question angles; never restate the tool-page head term.

## 3. Spoke fan-out (~10/hub, Kenya-framed, current figures)

- **H1 M-Pesa charges:** M-Pesa send-money tariff bands explained; withdrawal charges; M-Pesa vs Airtel Money cost; daily/transaction limits; Fuliza charges; reversing an M-Pesa payment; sending to an unregistered number; M-Pesa charges for businesses; are M-Pesa charges changing (CBK); free M-Pesa transactions.
- **H2 M-Pesa to bank / bank transfer:** M-Pesa to Equity/KCB/Co-op (per-bank how-to); PesaLink explained and limits; RTGS vs EFT vs PesaLink; bank to M-Pesa; transfer timelines; charges by bank; failed bank transfer fixes; CBK bank paybill numbers.
- **H3 remittance:** cheapest way to send money to Kenya; WorldRemit vs Wise vs Remitly to Kenya; send from USA/UK/Diaspora; exchange-rate markup explained; sending to M-Pesa directly; remittance tax/limits; receiving large remittances.
- **H4 paybill/till:** find a paybill number; Buy Goods vs Paybill; reversing a paybill payment; paying KRA/NHIF/SHA/water via paybill; M-Pesa pochi la biashara; till vs paybill charges; common paybill numbers list.
- **H5 how-tos/USSD:** all M-Pesa USSD codes; check M-Pesa balance; M-Pesa statement; SIM/number portability in Kenya; M-Pesa PIN reset; Hakikisha explained; M-Pesa not working fixes; M-Pesa Ratiba/standing orders.
- **H6 KPLC/utilities:** buy KPLC tokens via M-Pesa; check KPLC token balance; KPLC paybill and meter number; prepaid vs postpaid; pay water/DSTV/GOtv/Zuku/SHA via M-Pesa; token not received fix.
- **H7 vehicle/logbook:** transfer a logbook on NTSA TIMS; logbook transfer cost; documents needed; transfer timelines; duplicate logbook; transfer a motorbike; inherited vehicle transfer.
- **H8 property/land:** land transfer process in Kenya; stamp duty rates and calculator; Ardhisasa explained; transfer costs and fees; gifting/inheriting land; sectional title; due diligence/search.
- **H9 pension:** transferring an NSSF/scheme pension; NSSF tiers and contributions; transferring between schemes; accessing pension early; pension on leaving a job.
- **H10 import duty:** car import duty calculator (KRA CRSP); import duty on goods; CIF explained; clearing an imported car; duty on phones/electronics; KRA exemptions.

## 4. Internal-linking rules (silo-tight, within-site)

- Each spoke links UP once to its hub (`/guides/<hub>/`) and to its tool/calculator
  pillar in context (e.g. an M-Pesa charge spoke links the mpesa-calculator). Vary
  anchors.
- Hubs link down to their spokes + the tool page; sideways to 1-2 adjacent hubs
  (H1<->H2, H4<->H1, H6<->H4, H7<->H8).
- External: max 2/page, one per domain, cite the AUTHORITY for the figure on first
  mention (Safaricom M-Pesa tariffs, CBK, KRA, NTSA, NSSF, the provider's official
  page). Every fee/rate must be attributable and dated; add a "rates change, verify"
  note on rate-sensitive spokes.
- No fabricated provider data or partnerships.

## 5. Automation (schedulers, mirror essexdental)

- **`transfer-writer`** (writer): one Kenya-framed transfer spoke per run, draft:true,
  under the right hub, schema + up-link + tool-pillar link. Created DISABLED until
  section 0 exists.
- **`transfer-publisher`** (publisher): flips the oldest parked draft live 2/week;
  enable after a reviewed batch (YMYL-financial accuracy).

## 6. Status tracker

10 hubs (build). Spokes: existing blog posts in lib/blog-* mapped to hubs during the
build; target ~100 (~10/hub). Slug + SVG-hero + slug rules apply (see fleet handoffs).

Writer log (drafts parked, publisher flips):
- 2026-06-13: H5 mpesa-how-tos `how-to-get-full-mpesa-statement` (draft). Mapped spoke counts now: H1 3, H2 1, H3 4, H4 3, H5 1 (draft), H6 1, H7-H10 0. Next round-robin pick: H7 vehicle-logbook.
- 2026-06-13: H7 vehicle-logbook `documents-needed-logbook-transfer-kenya` (draft). Counts now: H1 3, H2 1, H3 4, H4 3, H5 1 (draft), H6 1, H7 1 (draft), H8-H10 0. Next round-robin pick: H8 property-land. NOTE: tsc + link gate clean, but commit blocked by a stale .git/index.lock the sandbox cannot remove; change is staged in the working tree and needs Claude Code to commit + push.
