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
- 2026-06-13: H8 property-land `how-to-do-a-land-search-in-kenya` (draft). Counts now: H1 3, H2 1, H3 4, H4 3, H5 1 (draft), H6 1, H7 1 (draft), H8 1 (draft), H9-H10 0. Next round-robin pick: H9 pension-transfer. NOTE: tsc + link gate clean (0 broken). H7 (397f1d8) is already committed and pushed; only this run's two files (lib/blog-transfer-4c.ts + this tracker edit) are uncommitted in the working tree. Commit blocked by the same stale .git/index.lock (Jun 12 16:04, rm "Operation not permitted" from the sandbox, no live git process); git status reads fine but any index write fails. Needs Claude Code to clear the lock then commit + push.
- 2026-06-15: H9 pension-transfer `what-happens-to-your-pension-when-you-leave-a-job-kenya` (draft, id 115). Counts now: H1 3, H2 1, H3 4, H4 3, H5 1 (draft), H6 1, H7 1 (draft), H8 1 (draft), H9 1 (draft), H10 0. Next round-robin pick: H10 import-duty. Sourced to RBA (early-access rules, under review), NSSF (preserved savings, age-50 withdrawal, 100% emigration benefit) and the Finance Act 2025 (pension-withdrawal tax exemptions deleted from 1 July 2025; now only on retirement age, ill health, or 20 years membership). tsc clean (exit 0 after rename round-trip) + link gate 0 broken.
- 2026-06-15: H10 import-duty `import-duty-on-phones-and-electronics-kenya` (draft, id 116). Counts now: H1 3, H2 1, H3 4, H4 3, H5 1 (draft), H6 1, H7 1 (draft), H8 1 (draft), H9 1 (draft), H10 1 (draft). All ten hubs now seeded; round-robin cycle restarts at H1 M-Pesa charges (or lowest-count hub) next run.
- 2026-06-15: H1 mpesa-charges `how-much-fuliza-costs-in-kenya` (draft, id 117). Round-robin restart at H1. Distinct intent (Fuliza overdraft cost), not the reserved "M-Pesa charges/calculator" head term; existing H1 live spokes are the complete-fee-guide, vs-airtel and reverse-transaction, none of which is Fuliza-specific. Counts now: H1 4 (3 live + 1 draft), H2 1, H3 4, H4 3, H5 1 (live), H6 1, H7 1 (draft), H8 1 (draft), H9 1 (draft), H10 1 (draft). Next round-robin pick: H2 bank-transfers (lowest-count, 1). Sourced to Safaricom official Fuliza page (last updated 23 Jun 2025): one-off 1% access fee; daily maintenance fee bands incl 20% excise (0-100 KSh 0; 101-500 KSh 3; 501-1,000 KSh 6; 1,001-1,500 KSh 21.60; 1,501-2,500 KSh 24; 2,501-70,000 KSh 30); free daily fee for first 3 days on amounts KSh 1,000 and below; limit up to KSh 70,000. Up-link /guides/mpesa-charges/ + pillar /mpesa-calculator/; one external (safaricom.co.ke, nofollow); rate-sensitive "verify with Safaricom" note included; relatedSlugs = 2 live H1 siblings. tsc clean (exit 0 after rename round-trip) + link gate 0 broken (10 slugs). COMMIT STILL BLOCKED: .git/index.lock (0-byte, Jun 15 01:31) + corrupt .git/index ("bad signature 0x00000000 / index file corrupt"); sandbox rm returns "Operation not permitted" on both, `git reset` fails on the corrupt index. Working-tree edits only (lib/blog-transfer-4c.ts + this tracker edit). Needs Claude Code on the host to remove .git/index.lock + the corrupt .git/index, run `git reset` to rebuild the index from HEAD (non-destructive to the working tree), then commit + push the accumulated H5 flip + H7-H10 + this H1 draft. Sourced to KRA/National Treasury: phone import stack 16% VAT + 10% excise + 25% import duty + 2.5% IDF + 2% RDL (~55.5% aggregate, Treasury figure); RDL raised to 2% from 1.5% end-2024; many laptops 0% import duty but still VAT+IDF+RDL; finished electronics 25%/35% EAC CET; Finance Bill 2026 25%-at-activation excise flagged as a proposal under debate (not law). Up-link /guides/import-duty/ + pillar /import-duty/; one external (kra.go.ke); rate-sensitive "verify with KRA" note included. tsc clean (exit 0 after rename round-trip) + link gate 0 broken. COMMIT BLOCKED: .git/index.lock (0-byte, Jun 15 01:31) AND .git/index now corrupt ("bad signature / index file corrupt"); sandbox rm returns "Operation not permitted" on both. Two files uncommitted in working tree (lib/blog-transfer-4c.ts + this tracker edit). Needs Claude Code to remove .git/index.lock + the corrupt .git/index, run `git reset` to rebuild the index from HEAD (non-destructive to working tree), then commit + push. The earlier H7/H8/H9 drafts may also still be uncommitted behind the same lock.
- 2026-06-16: H2 bank-transfers `how-pesalink-works-and-its-limits-kenya` (draft, id 118). Round-robin reached H2 (was lowest-count at 1). Distinct intent (PesaLink rail: how it works, limits, cost), not the reserved "m-pesa to bank" head term; the one existing H2 spoke is rtgs-vs-mpesa-large-amounts (live), a different intent. Counts now: H1 4 (3 live + 1 draft), H2 2 (1 live + 1 draft), H3 4, H4 3, H5 1 (live), H6 1, H7 1 (draft), H8 1 (draft), H9 1 (draft), H10 1 (draft). Next round-robin pick: H6 kplc-tokens (lowest-count tie among H5/H6/H7/H8/H9/H10 at 1; H6 chosen as it has no draft parked yet). Sourced to IPSL/PesaLink (operator owned by Kenya Bankers Association): min KSh 10, max KSh 999,999 per transaction; instant 24/7 account-to-account; 100+ institutions; daily limits set per bank; and Business Daily for the 2025 discounted tariffs (KCB free below KSh 1,000, flat KSh 20 above). Up-link /guides/bank-transfers/ + pillar /bank-transfer/; one inline sibling link to live rtgs-vs-mpesa-large-amounts (/blog/); two externals (pesalink.co.ke, businessdailyafrica.com, one per domain, nofollow); rate-sensitive "limits and fees set by your bank, verify" note included. relatedSlugs = the one live H2 sibling. tsc clean (exit 0 after rename round-trip) + link gate 0 broken (10 slugs). COMMIT STATE: see HANDOFF-QUEUE 2026-06-16 entry.

Publisher log (drafts flipped live):
- 2026-06-15 (transfer-publisher): flipped the OLDEST draft live — H5 mpesa-how-tos `how-to-get-full-mpesa-statement` (id 112): draft:false, publishedAt + lastReviewedAt = 2026-06-15. Flip-time links confirmed present (inline up-link /guides/mpesa-how-tos/ + tool-pillar /ussd-codes/); no live H5 sibling exists yet, so hub-only (no /blog/ sibling links, no reciprocal wiring needed). QC: Kenya English intact, no reserved head terms, Safaricom figures attributed + "verify" note present, no em dashes, schema fields (faqs + dates) intact. Gates: tsc --noEmit exit 0 (after rename round-trip); link gate 0 broken across 10 slugs. Live count by hub: H5 1 live; drafts remaining H7/H8/H9/H10 (4). COMMIT/PUSH STILL BLOCKED: .git/index.lock (0-byte) + corrupt .git/index both return rm "Operation not permitted" from the sandbox — confirmed again this run. The draft:false flip is a working-tree edit ONLY and is NOT deployed/live until Claude Code repairs git (remove lock + corrupt index, `git reset` to rebuild from HEAD) and pushes the accumulated H5 flip + H5–H10 drafts. Next publisher pick after that: next-oldest draft H7 `documents-needed-logbook-transfer-kenya`.
