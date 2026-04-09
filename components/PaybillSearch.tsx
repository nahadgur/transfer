'use client'

import { useState, useMemo } from 'react'
import { Search, Copy, Check } from 'lucide-react'
import { paybillData, paybillCategories } from '@/lib/paybill-data'
import Link from 'next/link'

type Props = {
  compact?: boolean // homepage compact mode vs full directory mode
}

export default function PaybillSearch({ compact = false }: Props) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [copied, setCopied] = useState<string | null>(null)

  const results = useMemo(() => {
    const q = query.toLowerCase().trim()
    return paybillData.filter((entry) => {
      const matchesCategory = activeCategory === 'All' || entry.category === activeCategory
      const matchesQuery =
        !q ||
        entry.name.toLowerCase().includes(q) ||
        (entry.paybill && entry.paybill.includes(q)) ||
        (entry.till && entry.till.includes(q)) ||
        entry.category.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, activeCategory])

  const displayResults = compact ? results.slice(0, 5) : results

  function copyCode(code: string) {
    navigator.clipboard.writeText(code).catch(() => {})
    setCopied(code)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="w-full">
      {/* Search input */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Search company, paybill number…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20  text-white placeholder-stone-400 focus:outline-none focus:border-[#ccff00]/60 focus:bg-white/15 transition text-sm"
        />
      </div>

      {/* Category pills — hide in compact mode */}
      {!compact && (
        <div className="flex flex-wrap gap-2 mb-6">
          {paybillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#ccff00] text-white'
                  : 'bg-white/10 text-zinc-300 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Results */}
      {displayResults.length === 0 ? (
        <div className="text-center py-8 text-zinc-400 text-sm">
          No results found for &ldquo;{query}&rdquo;
        </div>
      ) : (
        <div className={`space-y-2 ${compact ? '' : ''}`}>
          {displayResults.map((entry) => (
            <div
              key={`${entry.name}-${entry.paybill || entry.till}`}
              className="flex items-center justify-between bg-white/5 border border-white/10  px-4 py-3 hover:border-[#ccff00]/30 transition-colors group"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-white font-medium text-sm truncate">{entry.name}</span>
                  <span className="text-xs text-zinc-500 bg-white/5 px-2 py-0.5 rounded-full flex-shrink-0">
                    {entry.category}
                  </span>
                </div>
                {entry.notes && (
                  <p className="text-xs text-zinc-500 mt-0.5">{entry.notes}</p>
                )}
                {entry.accountFormat && (
                  <p className="text-xs text-zinc-600 mt-0.5">Account: {entry.accountFormat}</p>
                )}
              </div>

              <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                {entry.paybill && (
                  <button
                    onClick={() => copyCode(entry.paybill!)}
                    className="flex items-center gap-1.5 bg-[#ccff00]/20 hover:bg-[#ccff00]/30 border border-[#ccff00]/30 text-[#ccff00] px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors"
                  >
                    {copied === entry.paybill ? (
                      <><Check className="w-3 h-3" /> Copied</>
                    ) : (
                      <><Copy className="w-3 h-3" /> {entry.paybill}</>
                    )}
                  </button>
                )}
                {entry.till && (
                  <button
                    onClick={() => copyCode(entry.till!)}
                    className="flex items-center gap-1.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-400 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors"
                  >
                    {copied === entry.till ? (
                      <><Check className="w-3 h-3" /> Copied</>
                    ) : (
                      <><Copy className="w-3 h-3" /> Till: {entry.till}</>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* See all link in compact mode */}
      {compact && results.length > 5 && (
        <div className="mt-4 text-center">
          <Link
            href="/paybill-directory"
            className="text-[#ccff00] hover:text-[#b3e600] text-sm font-medium transition-colors"
          >
            See all {results.length} results in full directory →
          </Link>
        </div>
      )}

      {!compact && (
        <p className="text-xs text-zinc-600 mt-4 text-center">
          {results.length} of {paybillData.length} entries shown · Tap the number to copy
        </p>
      )}
    </div>
  )
}
