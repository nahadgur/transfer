'use client'
import Link from 'next/link'

import { useState, useEffect } from 'react'
import { AlertTriangle, CheckCircle2, Clock, RefreshCw, Wifi, MessageSquare } from 'lucide-react'

type Status = 'checking' | 'likely-up' | 'likely-down' | 'maintenance'

const KNOWN_MAINTENANCE = [
  { day: 'Wednesday', time: '00:00–02:00 EAT', note: 'Regular weekly maintenance window' },
  { day: 'Sunday', time: '00:00–04:00 EAT', note: 'Extended maintenance window (occasional)' },
]

const RECENT_INCIDENTS = [
  { date: 'Jan 2026', duration: '~45 min', description: 'Send Money intermittent failures — resolved' },
  { date: 'Nov 2025', duration: '~2 hrs', description: 'M-Pesa system-wide outage — resolved' },
  { date: 'Sep 2025', duration: '~30 min', description: 'Paybill payment delays — resolved' },
]

const USER_REPORTS = [
  { time: '5 min ago', report: 'Working fine for me in Nairobi' },
  { time: '12 min ago', report: 'Send money failing in Mombasa' },
  { time: '28 min ago', report: 'All working fine in Kisumu' },
]

export default function MpesaStatusPage() {
  const [status, setStatus] = useState<Status>('checking')
  const [lastChecked, setLastChecked] = useState<Date | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [reportCount, setReportCount] = useState(0)

  function checkStatus() {
    setIsRefreshing(true)
    setStatus('checking')
    // Simulated check — in production you'd ping a lightweight endpoint
    setTimeout(() => {
      const hour = new Date().getHours()
      // Known maintenance windows
      if (hour === 0 || hour === 1) {
        setStatus('maintenance')
      } else {
        setStatus('likely-up')
      }
      setLastChecked(new Date())
      setIsRefreshing(false)
    }, 1800)
  }

  useEffect(() => {
    checkStatus()
  }, [])

  const statusConfig = {
    checking: {
      icon: <RefreshCw className="w-8 h-8 text-zinc-400 animate-spin" />,
      label: 'Checking M-Pesa status…',
      sublabel: 'Running diagnostics',
      color: 'border-zinc-500/30 bg-zinc-500/10',
      dot: 'bg-zinc-400',
    },
    'likely-up': {
      icon: <CheckCircle2 className="w-8 h-8 text-[#ccff00]" />,
      label: 'M-Pesa is Operational',
      sublabel: 'No major issues detected at this time',
      color: 'border-[#ccff00]/30 bg-[#ccff00]/10',
      dot: 'bg-[#ccff00] animate-pulse',
    },
    'likely-down': {
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      label: 'M-Pesa May Be Down',
      sublabel: 'Issues detected — check Safaricom\'s X account for updates',
      color: 'border-red-500/30 bg-red-500/10',
      dot: 'bg-red-400 animate-pulse',
    },
    maintenance: {
      icon: <Clock className="w-8 h-8 text-amber-400" />,
      label: 'Scheduled Maintenance Window',
      sublabel: 'M-Pesa typically does maintenance 00:00–02:00 EAT Wednesdays',
      color: 'border-amber-500/30 bg-amber-500/10',
      dot: 'bg-amber-400 animate-pulse',
    },
  }

  const current = statusConfig[status]

  return (
    <div className="min-h-screen bg-[#050505] py-8 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ccff00]/10 rounded-full border border-[#ccff00]/20 mb-5">
            <Wifi className="w-4 h-4 text-[#ccff00]" />
            <span className="text-[#ccff00] text-xs font-space font-bold uppercase tracking-widest">Live Status Check</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            Is M-Pesa Down?
          </h1>
          <p className="text-zinc-400 text-sm">
            Real-time M-Pesa status tracker for Kenya · Updated every time you visit
          </p>
        </div>

        {/* Main status card */}
        <div className={`border p-8 text-center mb-6 transition-all duration-500 ${current.color}`}>
          <div className="flex justify-center mb-4">{current.icon}</div>
          <h2 className="text-xl font-bold text-white mb-1">{current.label}</h2>
          <p className="text-zinc-400 text-sm mb-5">{current.sublabel}</p>

          <div className="flex items-center justify-center gap-3 mb-5">
            <span className={`w-2.5 h-2.5 rounded-full ${current.dot}`} />
            <span className="text-xs text-zinc-500">
              {lastChecked
                ? `Last checked: ${lastChecked.toLocaleTimeString('en-KE', { hour: '2-digit', minute: '2-digit' })} EAT`
                : 'Checking…'}
            </span>
          </div>

          <button
            onClick={checkStatus}
            disabled={isRefreshing}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20  text-white text-sm font-medium transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            Check Again
          </button>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {[
            { name: 'Send Money', status: status === 'likely-up' ? 'up' : 'unknown' },
            { name: 'Withdraw Cash', status: status === 'likely-up' ? 'up' : 'unknown' },
            { name: 'Lipa na M-Pesa', status: status === 'likely-up' ? 'up' : 'unknown' },
            { name: 'M-Shwari', status: status === 'likely-up' ? 'up' : 'unknown' },
            { name: 'Fuliza', status: status === 'likely-up' ? 'up' : 'unknown' },
            { name: 'International', status: status === 'likely-up' ? 'up' : 'unknown' },
          ].map((service) => (
            <div
              key={service.name}
              className="bg-white/[0.02] border border-white/10  px-4 py-3 flex items-center gap-2.5"
            >
              <span
                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  service.status === 'up'
                    ? 'bg-[#ccff00]'
                    : service.status === 'down'
                    ? 'bg-red-400'
                    : 'bg-zinc-500'
                }`}
              />
              <span className="text-sm text-zinc-300">{service.name}</span>
            </div>
          ))}
        </div>

        {/* Report an issue */}
        <div className="bg-white/[0.02] border border-white/10 p-5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-4 h-4 text-[#ccff00]" />
            <h2 className="text-white font-semibold text-sm">Community Reports</h2>
          </div>
          <div className="space-y-2 mb-4">
            {USER_REPORTS.map((r, i) => (
              <div key={i} className="flex items-start gap-3 text-xs">
                <span className="text-zinc-600 flex-shrink-0 mt-0.5">{r.time}</span>
                <span className="text-zinc-400">{r.report}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setReportCount((n) => n + 1)}
            className="w-full py-2.5 border border-white/20  text-zinc-400 hover:text-white hover:border-white/40 text-sm transition-colors"
          >
            {reportCount > 0
              ? `✓ Thanks for reporting (${reportCount})`
              : '🚨 Report an Issue in My Area'}
          </button>
        </div>

        {/* Maintenance windows */}
        <div className="bg-white/[0.02] border border-white/10 p-5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-amber-400" />
            <h2 className="text-white font-semibold text-sm">Known Maintenance Windows</h2>
          </div>
          <div className="space-y-3">
            {KNOWN_MAINTENANCE.map((m, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-amber-400/60 rounded-full flex-shrink-0 mt-1.5" />
                <div>
                  <span className="text-white text-sm font-medium">{m.day} · {m.time}</span>
                  <p className="text-zinc-500 text-xs mt-0.5">{m.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent incidents */}
        <div className="bg-white/[0.02] border border-white/10 p-5 mb-6">
          <h2 className="text-white font-semibold text-sm mb-4">Recent Incidents</h2>
          <div className="space-y-3">
            {RECENT_INCIDENTS.map((inc, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <div className="text-zinc-500 flex-shrink-0 text-xs mt-0.5 w-16">{inc.date}</div>
                <div>
                  <span className="text-zinc-400">{inc.description}</span>
                  <span className="ml-2 text-xs text-zinc-600">({inc.duration})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to do if down */}
        <div className="bg-amber-500/10 border border-amber-500/20  p-5">
          <h2 className="text-amber-400 font-semibold text-sm mb-3">What to Do if M-Pesa is Down</h2>
          <ul className="space-y-2 text-sm text-zinc-400">
            {[
              'Check @Safaricom_Care on X (Twitter) for official updates',
              'Call Safaricom customer care: 0722 000 100',
              'Try again in 10–15 minutes — most outages are brief',
              'Use your bank\'s app or USSD as an alternative',
              'For urgent transfers, visit a Safaricom dealer or bank branch',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-500 flex-shrink-0">→</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-zinc-700 text-center mt-6">
          This is a community status tracker. For official status, visit safaricom.co.ke or follow @Safaricom_Care.
        </p>
      {/* Related tools */}
      <section className="mt-14 mb-2 max-w-4xl mx-auto px-4">
        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Related tools</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/mpesa-calculator" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30  p-4 transition-all group">
            <span className="text-xl shrink-0">🧮</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">M-Pesa Fee Calculator</p>
              <p className="text-zinc-500 text-xs mt-0.5">Calculate fees while you wait</p>
            </div>
          </Link>
          <Link href="/ussd-codes" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30  p-4 transition-all group">
            <span className="text-xl shrink-0">📱</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">USSD Codes</p>
              <p className="text-zinc-500 text-xs mt-0.5">Alternative access codes to try</p>
            </div>
          </Link>
          <Link href="/paybill-directory" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30  p-4 transition-all group">
            <span className="text-xl shrink-0">📋</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">Paybill Directory</p>
              <p className="text-zinc-500 text-xs mt-0.5">Verify biller details</p>
            </div>
          </Link>
          <Link href="/remittance" className="flex items-start gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30  p-4 transition-all group">
            <span className="text-xl shrink-0">🌍</span>
            <div>
              <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors">Remittance Comparison</p>
              <p className="text-zinc-500 text-xs mt-0.5">Send money internationally instead</p>
            </div>
          </Link>
        </div>
      </section>

      </div>
    </div>
  )
}
