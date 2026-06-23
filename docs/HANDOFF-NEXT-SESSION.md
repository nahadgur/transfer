# Handoff: transfer (Kenya's Transfer Hub) — next session

Written 2026-06-23 for a fresh session. This supersedes `docs/HANDOFF-QUEUE.md`, which
is automation-era (transfer-writer / transfer-publisher agents) and now historical:
scheduled writing/publishing was removed fleet-wide on 2026-06-23, so all content is
manual-on-request now. The old git-lock / corrupt-index crisis logged there is RESOLVED
(commits land fine; `606d742` pushed cleanly this session).

## The site
- **Brand:** Kenya's Transfer Hub. **Domain:** transfer.co.ke. Kenyan site, Kenya English.
- **Stack:** Next.js 14 App Router, static, `trailingSlash: true`. Content lives in
  `lib/` TS modules, NOT a `data/` folder.
- **YMYL-financial.** Every figure (fees, duty rates, limits, tax rules) must be
  verified against an official source before publishing. Treat unverified numbers the
  way we treated loanapp5's autoblog content: do not ship a figure you cannot source.
- **Structure:** tool/pillar pages under `app/` (mpesa-calculator, bank-transfer,
  vehicle-transfer, property-transfer, pension-transfer, import-duty, kplc-transfer,
  remittance, paybill-directory, ussd-codes, mpesa-status, mobile-portability,
  send-money-to-kenya, mpesa-to-bank) + a `/guides` hub layer + `/blog` spokes.

## The 10 hubs (`lib/guides.ts`)
H1 mpesa-charges · H2 bank-transfers · H3 remittance · H4 paybill-till ·
H5 mpesa-how-tos · H6 kplc-tokens · H7 vehicle-logbook · H8 property-land ·
H9 pension-transfer · H10 import-duty.

## Content state (`lib/blog-transfer-4a/4b/4c.ts`, aggregated in `all-blog-posts.ts`)
19 spokes total. **13 live, 6 draft.** Drafts are committed but gated `draft: true`
(they 404 until flipped). All 6 drafts are in `lib/blog-transfer-4c.ts`:

| id | slug | hub | sourcing (per SILO-PLAN) |
|----|------|-----|--------------------------|
| 113 | documents-needed-logbook-transfer-kenya | H7 vehicle-logbook | NTSA |
| 114 | how-to-do-a-land-search-in-kenya | H8 property-land | Ardhisasa / Lands |
| 115 | what-happens-to-your-pension-when-you-leave-a-job-kenya | H9 pension | RBA, NSSF, Finance Act 2025 |
| 116 | import-duty-on-phones-and-electronics-kenya | H10 import-duty | KRA / National Treasury |
| 117 | how-much-fuliza-costs-in-kenya | H1 mpesa-charges | Safaricom Fuliza page |
| 118 | how-pesalink-works-and-its-limits-kenya | H2 bank-transfers | IPSL/PesaLink, Business Daily |

Live spokes most recently touched: id 112 `how-to-get-full-mpesa-statement`,
id 119 `mpesa-daily-and-transaction-limits` (published this session, `606d742`).

## What the next session should do (manual, on request)
1. **Verify-then-publish the 6 drafts, one hub at a time.** For each draft:
   gap-check it against live siblings + the reserved head term (see below), re-verify
   its figures against the official source, then flip `draft: false` and set
   `publishedAt` + `lastReviewedAt` to the publish date. Do NOT bulk-flip without the
   per-draft verify, given the YMYL exposure.
   - **id 117 (Fuliza) is pre-verified:** its daily-fee bands (KSh 0 / 3 / 6 / 21.60 /
     24 / 30 with excise, free 3-day window <=KSh 1,000, 1% access fee, limit
     KSh 70,000) MATCH the independently-verified Safaricom figures in
     `loanapp5/_verified-facts-kenya-loans.md`. Safe to publish after a quick gap-check.
   - **ids 115/116/118 carry rate/law-sensitive numbers** (pension tax exemptions from
     1 Jul 2025; the ~55.5% phone-import duty stack + the Finance Bill 2026
     "25%-at-activation" item flagged as a *proposal, not law*; PesaLink min KSh 10 /
     max KSh 999,999). Re-confirm these against KRA/RBA/IPSL before flipping.
   - **ids 113/114 are procedural** (NTSA logbook docs, Ardhisasa land search) — lower
     figure risk, but confirm the process steps still match the current portals.
2. **Housekeeping commit.** The working tree has uncommitted docs only:
   `M docs/SILO-PLAN.md` (8 tracker/publisher-log lines describing the 6 drafts) and
   untracked `docs/HANDOFF-QUEUE.md` (automation-era). Either commit SILO-PLAN's tracker
   lines as-is and delete the stale HANDOFF-QUEUE, or fold both into SILO-PLAN. The
   actual draft content is already committed — only these docs are loose.

## Conventions (match existing live spokes)
- **Linking:** each spoke up-links inline to its `/guides/<hub>/` hub AND its tool
  pillar (e.g. Fuliza -> /mpesa-calculator/); add an inline `/blog/` link to a live
  sibling when one exists; 1-2 external authority links max, one per domain, nofollow.
- **Reserved head terms:** do not target the hub's own head term with a spoke (e.g. the
  "M-Pesa charges" / "m-pesa to bank" head terms belong to the pillar/hub). Spokes take
  distinct long-tail intents (Fuliza cost, PesaLink limits, etc.).
- **Prose:** Kenya English, complete sentences, no em dashes, attribute every figure to
  its source with a "verify on the official page" note for rate-sensitive numbers.
- **Verify before done:** `npx tsc --noEmit` clean, then the fleet link gate
  (`node ../scripts/check-links.mjs .` from the transfer dir) shows 0 broken. Commit and
  push to `main`; report the hash.

## Quick orientation commands
- Draft list: grep `draft: true` in `lib/blog-transfer-4c.ts`.
- Hub definitions: `lib/guides.ts`. Plan + tracker: `docs/SILO-PLAN.md`.
- Reconcile what's live: `lib/all-blog-posts.ts` is where the 4a/4b/4c modules merge and
  the draft gate is applied.
