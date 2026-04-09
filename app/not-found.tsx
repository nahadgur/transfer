import Link from 'next/link'
import { Home, Calculator } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-zinc-300 mb-4">Page Not Found</h2>
        <p className="text-zinc-400 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ccff00] hover:bg-[#b3e600] text-white  font-medium transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/mpesa-calculator"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/20 font-bold transition-colors"
          >
            <Calculator className="w-5 h-5" />
            M-Pesa Calculator
          </Link>
        </div>
      </div>
    </div>
  )
}
