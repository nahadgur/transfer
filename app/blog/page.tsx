import Link from 'next/link'
import { Metadata } from 'next'
import { allBlogPosts as blogPosts } from '@/lib/all-blog-posts'
import { ArrowRight, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — M-Pesa, Transfers, Kenya Tax & Finance Guides',
  description: 'Expert guides on Kenyan tax, PAYE calculations, NSSF contributions, housing levy, salary breakdowns, and financial planning. Stay informed with our comprehensive resources.',
  openGraph: {
    title: 'Blog — M-Pesa, Transfers, Kenya Tax & Finance Guides',
    description: 'Expert guides on Kenyan tax, PAYE calculations, NSSF contributions, and financial planning.',
  }
}

const categories = Array.from(new Set(blogPosts.map(post => post.category)))

const categoryColors: Record<string, string> = {
  'Tax': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Salary': 'bg-[#ccff00]/10 text-[#ccff00] border-green-500/30',
  'NSSF': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Pension': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  'Housing Levy': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Health Insurance': 'bg-red-500/20 text-red-400 border-red-500/30',
  'Employers': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'Tax Relief': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'HELB': 'bg-teal-500/20 text-teal-400 border-teal-500/30',
  'KRA': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  'Transfer': 'bg-[#ccff00]/20 text-[#ccff00] border-[#ccff00]/30',
}

export default function BlogPage() {
  const featuredPosts = blogPosts.slice(0, 3)
  const otherPosts = blogPosts.slice(3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ccff00]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ccff00]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-[#ccff00]" />
            <span className="text-[#ccff00] font-medium">Transfer.co.ke Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Kenya Tax & Finance Guides
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Expert guides on PAYE, NSSF, housing levy, salary breakdowns, and everything Kenyan employees and employers need to know.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <span
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${categoryColors[category] || 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30'}`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-space font-bold text-white mb-6">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group relative bg-white/[0.02] border border-white/10 overflow-hidden hover:border-[#ccff00]/50 transition-all ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                {/* Featured Image */}
                {post.featuredImage ? (
                  <div className={`w-full overflow-hidden ${index === 0 ? 'h-52' : 'h-40'} bg-zinc-800`}>
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className={`w-full flex items-center justify-center ${index === 0 ? 'h-52' : 'h-40'} bg-white/[0.03]`}>
                    <span className="text-4xl">💰</span>
                  </div>
                )}

                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-4 ${categoryColors[post.category] || 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30'}`}>
                    {post.category}
                  </span>
                  <h3 className={`font-bold text-white mb-3 group-hover:text-[#ccff00] transition-colors ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                    {post.title}
                  </h3>
                  <p className={`text-zinc-400 mb-4 ${index === 0 ? 'text-base line-clamp-3' : 'text-sm line-clamp-2'}`}>
                    {post.metaDescription}
                  </p>
                  <div className="flex items-center gap-2 text-[#ccff00] text-xs font-space font-bold uppercase tracking-widest">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-space font-bold text-white mb-6">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white/[0.02] border border-white/10 overflow-hidden hover:border-[#ccff00]/50 transition-all"
              >
                {/* Thumbnail */}
                {post.featuredImage ? (
                  <div className="w-full h-40 overflow-hidden bg-zinc-800">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-full h-40 flex items-center justify-center bg-white/[0.03]">
                    <span className="text-3xl">💰</span>
                  </div>
                )}

                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-3 ${categoryColors[post.category] || 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30'}`}>
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ccff00] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                    {post.metaDescription}
                  </p>
                  <div className="flex items-center gap-2 text-[#ccff00] text-xs font-space font-bold uppercase tracking-widest">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
