# Verified facts: Kenya payroll / income tax (source of truth for remediation)

Compiled 2026-06-23 from KRA primary notices + PwC/KPMG/EY/Grant Thornton/RBA/NCPWD.
This file is the ONLY sanctioned source of figures when remediating
`lib/blog-data.ts`. Rule: if a figure is not in this file and you cannot cite an
official page, DO NOT state it — write "check the current figure on the KRA iTax
portal / the official source" instead. Never invent statistics, collection
totals, percentages, named quotes, case numbers, or testimonials.

See also the loanapp5 sibling reference: `../loanapp5/_verified-facts-kenya-loans.md`.

---

## 1. PAYE monthly bands (Finance Act 2023, effective 1 Jul 2023, STILL CURRENT 2026)

| Monthly taxable (KES) | Annual (KES) | Marginal rate |
|---|---|---|
| 0 – 24,000 | 0 – 288,000 | 10% |
| 24,001 – 32,333 | 288,001 – 388,000 | 25% |
| 32,334 – 500,000 | 388,001 – 6,000,000 | 30% |
| 500,001 – 800,000 | 6,000,001 – 9,600,000 | 32.5% |
| above 800,000 | above 9,600,000 | 35% |

- **TOP RATE IS 35%.** There is NO 37.5% band. Purge every "37.5%".
- Five bands. Any table that stops at 30%, skips 32.5%, or applies 35% below
  KES 800,000/month is WRONG.
- Finance Act 2025 did NOT change the bands, rates, or relief caps.

## 2. Personal relief
KES 2,400/month = KES 28,800/year. (Income Tax Act s.30.) Unchanged.
Any post stating personal relief as 72,000/yr or 2,880 is WRONG.

## 3. SHIF (replaced NHIF on 1 Oct 2024)
- 2.75% of gross monthly salary. Minimum KES 300/month. **NO upper cap.**
- Social Health Insurance Act 2023, via the Social Health Authority (SHA).
- SHIF is now a DEDUCTION from taxable income (Tax Laws (Amendment) Act 2024,
  from 27 Dec 2024), NOT a 15% insurance-relief item.
- Any graduated NHIF table (KES 150 … 1,700) is OBSOLETE. Replace with SHIF 2.75%.
- "SHIF capped at KES 5,000" is FALSE (no cap).

## 4. NSSF (NSSF Act No. 45 of 2013, phased; 6% each side)

| Item | Feb 2025 – Jan 2026 | **Feb 2026 onward** |
|---|---|---|
| Lower Earnings Limit | KES 8,000 | KES 9,000 |
| Upper Earnings Limit | KES 72,000 | KES 108,000 |
| Tier I max / side | KES 480 | KES 540 |
| Tier II max / side | KES 3,840 | KES 5,940 |
| Max / side / month | KES 4,320 | KES 6,480 |
| Combined (ee+er) | KES 8,640 | KES 12,960 |

- Tier II = 6% × (UEL − LEL).
- STALE figures to purge: 420 / 1,740 / 2,160 total, 7,000 / 36,000 limits
  (those were Year 2, Feb 2024–Jan 2025); also the original 200 / 1,080 and the
  flat "KES 400" Tier I. Use the table above and DATE it.
- No contributions above the UEL (NSSF is capped, not uncapped).

## 5. Affordable Housing Levy (AHL)
- 1.5% employee + 1.5% employer (3% total) of gross.
- Legal basis: **Affordable Housing Act 2024** (assented 19 Mar 2024). The Finance
  Act 2023 version was struck down as unconstitutional on 28 Nov 2023 — do NOT cite
  it as the basis.
- AHL is now a DEDUCTION from taxable income (TLAA 2024), NOT a 15% relief and NOT
  "KES 108 relief". Rate is NOT 2% or 2.5%.

## 6. Reliefs / deductions (current caps)
- Pension / retirement contribution deductible: **KES 30,000/month (360,000/yr)**.
  Raised from 20,000/240,000 by TLAA 2024 (27 Dec 2024). Purge 20,000/240,000.
- Mortgage interest relief (owner-occupied, specified institution): **KES 30,000/month
  (360,000/yr)**. Raised from 25,000/300,000 by TLAA 2024. Purge 25,000/300,000.
- Insurance relief: 15% of premiums, cap KES 5,000/month (60,000/yr). Life/health/
  education policies. (No separate "education-policy relief of 10,000".)
- Post-retirement medical fund contributions: deductible up to KES 15,000/month (new).

## 7. Benefits in kind / exemptions
- Non-cash benefits tax-free aggregate: KES 5,000/month (60,000/yr) — raised from 3,000.
- Employer meals: KES 5,000/month (60,000/yr) tax-free — raised from 4,000.
- Disability (PWD) exemption: first **KES 150,000/month (1,800,000/yr)** of income
  EXEMPT, with a valid NCPWD/KRA exemption certificate (5-yr validity). Posts saying
  72,000/yr or 288,000/mo or "150,000/year" are WRONG.
- Company car / housing benefit valuation rules unchanged (use KRA prescribed rules;
  do not invent a "4/5/6% scheme" or a flat "KES 36,000 housing rate").

## 8. Other taxes (for the freelancer/business posts)
- Turnover Tax (TOT): **1.5%** of gross sales (reduced from 3% eff. 1 Jul 2023;
  NOT 1%, and NOT 3% any more). Threshold: turnover above KES 1,000,000 and up to
  KES 25,000,000/yr. Filed/paid monthly by the 20th. Late filing KES 1,000/month;
  late payment 5% + 1%/month interest. Can elect out to the annual regime in writing.
  (Verified 2026-07-02 vs KRA TOT page.)
- Significant Economic Presence (SEP) tax replaced Digital Service Tax (DST):
  introduced by TLAA 2024, effective 1 Jan 2025, ~3% effective on gross turnover
  (deemed taxable profit basis). Do NOT attribute to "Finance Act 2023 / Jan 2024".
- Capital Gains Tax: 15%. Crypto: taxed via the Digital Asset Tax regime — do NOT
  state crypto gains are "CGT at 15%" without checking the current DAT rate/basis.

## 9. Filing / remittance deadlines
- PAYE: remit and file by the **9th** of the following month (NOT the 20th).
- NSSF: by the 9th of the following month. (Some posts say 14th/15th — verify; use 9th.)
- Late PAYE: 25% of tax due or KES 10,000 penalty (whichever higher) + 1%/month
  interest. (Do NOT state the old "5% + 1%/month" without checking.)
- Individual income tax return: due 30 June. Employer P9A to employees by 31 January.

## 10. Recurring fabrications to DELETE on sight (do not "fix" — remove)
- "KRA collected KES 1.2 trillion / 2.1 trillion in PAYE", "45% of income tax",
  "KES 28 trillion M-Pesa", "45% of GDP", market-share percentages, "top 1% pay 25%".
- Named-source statistics with a year and a precise figure ("FSD 2023", "ODPC 2,847
  complaints", "KNBS avg 85k", "World Bank 120k") — the autoblog tell. Remove unless
  in this file or citable.
- Invented reliefs: "post-secondary education relief", "dependent-spouse relief
  KES 26,580", "Affordable Housing Relief up to 50,000", "education-policy relief".
- Invented mechanisms: "13-month averaging method", "calibration multiplier 0.885",
  "emergency tax 3-year averaging".
- Named-company accusations (e.g. SportPesa figures) and fabricated testimonials —
  hard-rule violations, remove entirely.
- ",z,z,z,z" template corruption and stray editor notes ("Wait, adjust:...").
- Wrong-country content (HMRC/National Insurance/£; USD/Detroit Water/FCC/DMV).

## 11. Sourcing line to use (Kenya English, no em dashes)
When a figure is rate-sensitive, attribute and steer, e.g.:
"As of 2026 the PAYE bands run from 10% to 35% (Kenya Revenue Authority, Finance
Act 2023). Rates can change, so confirm the current bands on the KRA iTax portal."
Author byline: KTH (Kenya Transfer Hub) editorial entity. No invented person.

## 12. KPLC prepaid tokens (verified 2026-07-02, KPLC + secondary)
- Check last/recent tokens by USSD: dial *977# (Safaricom only), Prepaid Services ->
  Latest Token, pick or type the meter number; returns the last three tokens for that
  meter. Same channel is used to retrieve a delayed/lost token (the purchase already
  succeeded, only the SMS failed) so DO NOT buy again first.
- SMS the meter number to 95551 to resend token details / check balance (approx KES 5/SMS).
- KPLC Stima app and the KPLC self-service portal show recent token-purchase history.
- KPLC national contact centre: 97771 (call or SMS).
- Prepaid meters have a keypad/button that displays remaining units on the meter itself;
  the exact code differs by meter brand/model (Actaris/Itron, Conlog, Hexing, Shenzhen,
  Inhemeter, Clou) and sources DISAGREE on the per-brand codes, so steer readers to the
  code printed on their own meter or manual rather than publishing a per-brand table.
- Meter shows a low-balance alert (beep/alarm) as units run low; a commonly cited
  threshold is around 20 kWh but it varies by meter, so frame as "a low-units warning"
  not a fixed number.
- Units per token depend on the KPLC tariff + levies (fuel, forex, inflation, EPRA
  adjustments) in force at purchase, set/revised by EPRA, so units per shilling vary
  between buys. Rely on the SMS confirmation, not an online estimate.


## Terminal dues / lump-sum taxation on leaving a job (verified 2026-07-02)

Sources: KRA "Taxation of Lump Sum Payments" (kra.go.ke/news-center/blog/841); Finance Act 2025; retirement-benefit guidance (RBA/practitioner). Cross-checked against practitioner summaries.

- **Service gratuity earned on/after 1 Jul 2025: 100% exempt from income tax** (Finance Act 2025). The portion earned BEFORE 1 Jul 2025 stays taxable via the spread-back method. Split a straddling contract by accrual period.
- **Spread-back method (taxable gratuity/severance lump sums):** a lump sum paid in a year different from when earned is treated as income of the years it was earned in, spread back over up to the prior 5 years and taxed at those years' annual rates; anything older than 5 years is bundled into the 5th year.
- **Notice pay (pay in lieu of notice):** taxed immediately, in the period following the termination date, at standard PAYE rates. No special exemption.
- **Leave pay:** taxed in the year to which it relates (added to pay and taxed at normal rates), not treated as a one-off windfall.
- **Severance pay (redundancy):** statutory minimum is not less than 15 days' pay per completed year of service (Employment Act). Not automatically exempt; taxable severance uses the same spread-back treatment.
- **Pension / retirement lump sums:** since Dec 2024, withdrawals are EXEMPT where the member has reached the scheme retirement age, OR completed a minimum membership period of 20 years, OR is leaving on grounds of ill health. Other early withdrawals can be taxed on the taxable portion.
- **Gratuity into a registered pension scheme:** a recipient may elect to channel gratuity into a registered scheme and get pension relief of up to KES 30,000/month (KES 360,000/yr) on the older taxable portion, if not already used on the same income. (Consistent with the pension deduction cap already in this file.)
- **Employer duty:** employer must recover the correct tax on the taxable lump sum before releasing the balance. Verification method: other taxable pay for the year + taxable lump sum -> tax on revised annual total at annual rates -> less personal relief and PAYE already paid = tax due on the lump sum.
- Used by paycalc6 draft spoke `how-terminal-dues-are-taxed-when-you-leave-a-job-in-kenya` (2026-07-02).
