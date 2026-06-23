# Legacy blog-data.ts remediation tracker

55 autoblog posts in `lib/blog-data.ts`, all live + unmapped (`hub: ""`,
`draft: false`). Source of truth for figures: `../_verified-facts-kenya-tax.md`.
Method: rewrite content to verified figures, purge fabrications, set
`publishedAt` + `lastReviewedAt`, then map to a hub + fix interlinking.

Status key: ⬜ pending · 🔧 in progress · ✅ done (facts verified) · 🔗 linked/hubbed · ⛔ decision needed
GSC = clicks/impressions from the 2026-06-23 Search Console export (blank = negligible).

## Priority 1 — getting impressions AND broken (live YMYL risk)

| id | slug | GSC c/i | worst issues | decision | status |
|----|------|---------|--------------|----------|--------|
| 30 | what-salary-...-comfortably-in-nairobi | 297/76936 | flat "30% PAYE"; fabricated World Bank/KNBS figs; inflation self-contradiction | rewrite | ⬜ |
| 28 | key-kra-tax-deadlines-...should-know | 37/7109* | PAYE table caps at 30%; PAYE deadline 20th vs 9th; fab "FA2025 min tax 1%" | rewrite | ⬜ |
| 14 | how-much-tax-do-you-pay-on-kes-150000 | 18/1602 | invented bands; "subtract 28,800" method; body 24,568 vs FAQ 18,320; fab KES 2.1tn | rewrite | ⬜ |
| 23 | the-true-cost-of-hiring-an-employee | 9/1402 | PAYE caps at 30%; stale NSSF/NHIF; AHL wrong basis; remit 20th vs 9th | rewrite | ⬜ |
| 22 | how-kenyan-couples-can-file-taxes | 7/548 | body "must file separately" vs FAQ "can file jointly"; fab spouse relief 26,580 | rewrite | ⬜ |
| 11 | tax-benefits-for-persons-with-disability | 5/1175 | PWD exemption wrong (72k/yr or 288k/mo; FAQ 150k/yr) — correct is 150k/MONTH | rewrite | ⬜ |
| 26 | taxable-benefits-in-kind-...declare | 0/1010 (#3.5) | non-cash "2,000/mo" (now 5,000); fab housing 36,000 + 4/5/6% car scheme; fab KES 45B | rewrite | ⬜ |
| 16 | paye-rates-for-high-earners | 0/232 | pension "240,000, 15% relief"; cumulative col wrong; fab quotes; FAQ drops 32.5% | rewrite | ⬜ |
| 27 | what-the-kenya-finance-bill-2025-means | 0/212 | PREMISE FALSE (FA2025 didn't change bands); stray "Wait, adjust:..." note; relief 2,880 | rewrite | ⬜ |
| 6 | working-backwards-from-net-to-gross | 0/387 | PAYE table ok but stale NSSF; NHIF "current"; SHIF called "pending"; AHL Act 2023 | rewrite | ⬜ |
| 8 | how-insurance-relief-works | 0/141 | wrong section cite; fab "10,000 education-policy relief"; ",z,z,z" corruption | rewrite | ⬜ |
| 10 | why-...max-out-pension-contributions | 0/118 | thesis on stale 20,000/240,000 cap; "32.5% above 50,000"; NSSF 400; fab returns | rewrite | ⬜ |
| 21 | what-to-do-if-...wrong-paye | 0/100 | fab annualized band thresholds (35% at 8.3M); NSSF -400, NHIF -1,700 | rewrite | ⬜ |
| 7 | legal-ways-...reduce-their-paye | 0/100* | fab annual band table; invented "post-secondary education relief"; mortgage 25k/qtr | rewrite | ⬜ |
| 9 | claiming-mortgage-interest-relief | 0/25 | entire post on stale 25,000/300,000 cap (now 30k/360k); fab "24,000 claimed" | rewrite | ⬜ |

\* slug `...-in-2026` (id28) and `7-legal-ways-...` (id7) are pre-redirect variants in next.config.js.

## Priority 2 — core tax/salary, low/no current impressions

| id | slug | worst issues | decision | status |
|----|------|--------------|----------|--------|
| 1 | how-to-calculate-your-paye-tax-in-kenya | 37.5% band; fab "KES 1.2tn PAYE"; NHIF table; NSSF; pension/mortgage stale | rewrite | ⬜ |
| 2 | the-complete-guide-to-nssf-contributions | NSSF self-contradict (5/6/10%, 400 fixed); uncapped above UEL; fab arrears | rewrite | ⬜ |
| 3 | understanding-shif-...replaced-nhif | FAQ invents 5,000 cap vs body "no ceiling"; "SHIF relief up to 30%" | rewrite | ⬜ |
| 4 | everything-...kenyas-housing-levy | wrong basis (FA2023); fab "AHL+SHIF merged into 2.75%"; refund myth | rewrite | ⬜ |
| 5 | how-kenyan-employees-can-calculate-net-salary | 35% above 500k (omits 32.5%); NHIF; NSSF; AHL "108 relief"; FAQ contradicts | rewrite | ⬜ |
| 12 | what-a-kes-50000-salary-after-tax | NSSF 400+680 invented; FAQ net 44-45k vs body 39,412; reverts to NHIF | rewrite | ⬜ |
| 13 | take-home-pay-on-a-kes-100000 | wholesale wrong band table (no 32.5%); NHIF; "Supreme Court validated levy" | rewrite | ⬜ |
| 15 | the-real-cost-of-earning-kes-200000 | 35% above 50,000; NSSF 2,160 vs 3,560; SHIF 3% vs 2.75%; ",z,z,z" | rewrite | ⬜ |
| 17 | how-kenyan-employers-tax-your-bonus | 37.5% top + fab band table; fab "13-month averaging"; insurance "5,760/yr" | rewrite | ⬜ |
| 18 | freelancing-vs-employment-...less-tax | TOT 1% (should be 3%); AHL 2.5%; NHIF; NSSF 3.6%/400; non-reconciling tables | rewrite | ⬜ |
| 19 | how-helb-loan-repayments-deducted | NSSF 400, NHIF 1,000-1,200 examples; HELB gross-vs-net contradiction | rewrite | ⬜ |
| 20 | what-happens-to-your-paye-when-change-jobs | 37.5% throughout vs own correct table; mortgage 25k; fab "AHL relief 50,000" | rewrite | ⬜ |
| 24 | a-kenyan-employers-guide-to-nssf-and-housing-levy | NSSF all stale; deadline 14th vs 15th; AHL 3% ok | rewrite | ⬜ |
| 25 | filing-paye-returns-on-itax-...penalised | PAYE deadline 20th vs 9th; "10-30%" understates top; NSSF 400; NHIF | rewrite | ⬜ |
| 29 | how-the-new-nssf-rates-affect-workers | every NSSF fig fab/stale ("1,400/side", "200-increment"); body vs FAQ | rewrite | ⬜ |
| 37 | three-legal-ways-to-lower-your-paye-bill | pension 20k; mortgage 25k; NSSF 400/2,160; FAQ "education policies 10,000" | rewrite | ⬜ |
| 51 | freelancer-taxes-in-kenya-...net-to-gross | ≥3 contradictory band schedules; pension 20k; NHIF 2,700; fab penalties | rewrite | ⬜ |
| 52 | sep-tax-in-kenya-...after-dst | wrong attribution (FA2023/Jan2024 vs TLAA2024/Jan2025); fab "Netflix 30M" | rewrite | ⬜ |
| 53 | hiring-your-first-employee-...kra-nssf-shif | SHIF fab as "5.5% split/employer-matched" (is 2.75% ee-only); NSSF stale | rewrite | ⬜ |
| 55 | lipia-pole-pole-...real-interest-on-mobile-loans | wrong APR math; wrong "CBK 4%-cap since 2016" (repealed 2019); fab 2.5M users | rewrite | ⬜ |

## Priority 3 — utility / transfer-adjacent (fix figures or fold into silo)

| id | slug | worst issues | decision | status |
|----|------|--------------|----------|--------|
| 31 | pesalink-vs-rtgs-...kes-500000 | fee tables inconsistent (110 / 68-110 / 0-70) | rewrite | ⬜ |
| 32 | hidden-m-pesa-charges-... | fab "51M users/KES 28tn", "96% FSD 2023", "68% traders lose 20%" | rewrite | ⬜ |
| 33 | m-pesa-to-airtel-money-...interoperability | fab "28tn", "45% GDP"; wrong USSD *234#; wrong interop-via-PesaLink claim | rewrite | ⬜ |
| 34 | the-paybill-trap-... | **fab defamatory SportPesa accusation + fake Business Daily cite; "excitation fee"** | strip-then-rewrite | ⛔ |
| 35 | the-cheapest-way-to-send-money-...uk-or-us | direction inconsistent; **fabricated testimonial "Saved £15 vs WorldRemit"** | strip-then-rewrite | ⛔ |
| 38 | how-to-check-...housing-levy-correctly | AHL math ok; basis "Act 2023" (→2024); stray "EPF housing levy" | rewrite | ⬜ |
| 39 | moving-houses-...transfer-kplc-meter | fab "14→3 days", "85% within 4hrs", "15 regions"; invented Form TM-001A | rewrite | ⬜ |
| 40 | why-kplc-tokens-buy-fewer-units | fab "calibration multiplier 0.885"; base rate conflicts id42; fab sources | rewrite | ⬜ |
| 41 | zuku-vs-safaricom-home-... | saturated fab CAK/Speedtest stats; town count 25 vs 28; relocation fee conflict | rewrite | ⬜ |
| 42 | prepaid-vs-postpaid-kplc-... | stale ERB vs EPRA; service charge contradictions; fab "PFK Levy" | rewrite | ⬜ |
| 44 | ntsa-tims-...transfer-car-ownership | valuation 4% vs 2%; fee 8,050 vs 1,000-5,000; **live till/bank acct numbers**; "blockchain" | rewrite | ⬜ |
| 45 | logbook-transfer-fees-... | fab "fees +7.5% Jul 2024", "Gazette 5432 +12%"; core fees self-contradict; vs id44 | rewrite | ⬜ |
| 47 | stamp-duty-in-kenya-... | rates 4%/2% ok; fab "KES 12.5B from 45,000 txns"; wrong "Act 1949" | rewrite | ⬜ |
| 48 | how-to-sell-your-phone-safely-... | wrong regulators "CTU"/"NCC"(=Nigeria) vs CA; garbled "KDP Act"; fab stats | rewrite | ⬜ |
| 49 | what-happens-to-m-pesa-balance-when-port | shaky premise; fab "CAK 2022 guidelines" quotes; "1.2M ports 0% loss" | rewrite | ⬜ |
| 50 | your-data-privacy-rights-when-moving-... | law ok (DPA 2019); fab "ODPC 2,847 complaints, KES 12.5M fines 2023" | rewrite | ⬜ |
| 54 | how-to-transfer-a-business-permit-... | **fab statutes "Business Permits Act Cap 285", "Urban Areas Act Cap 265"**; cost conflicts | rewrite | ⬜ |

## Priority 4 — wrong country (decision: 410 or full Kenya rewrite)

| id | slug | issue | GSC | decision | status |
|----|------|-------|-----|----------|--------|
| 36 | decoding-your-payslip-...changed-again | entire post UK (HMRC, NI, £12,570, 1257L) | none | ⛔ 410 vs rewrite | ⬜ |
| 43 | how-to-dispute-a-wrong-water-bill-... | entire post US (USD, HCF, FCC, Detroit Water) | none | ⛔ 410 vs rewrite | ⬜ |
| 46 | how-to-verify-a-vehicle-transfer-... | US body (NMVTIS/Carfax/NHTSA) + UK FAQ (DVLA/HPI) | none | ⛔ 410 vs rewrite | ⬜ |

## Phase B — after facts are correct
- Map each remediated post to a hub (`hub:`) per the silo plan; many tax posts have
  no transfer hub — decide whether to add a tax/payroll hub or leave them in /blog.
- Fix interlinking: backfill `hub` on transfer spokes 101-111; add relatedSlugs to
  orphaned spokes; reconcile the M-Pesa 150k/300k vs 250k/500k contradiction
  (101/103/106 vs 119) and the Fuliza table contradiction (101 vs 117).
- Set Article schema dates; Kenya-English sweep; `npx tsc --noEmit`; link gate.
