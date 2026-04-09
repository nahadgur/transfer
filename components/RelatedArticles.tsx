import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'
import { ArrowRight, BookOpen } from 'lucide-react'

interface RelatedArticlesProps {
  currentSlug: string
  relatedSlugs: string[]
}

export default function RelatedArticles({ currentSlug, relatedSlugs }: RelatedArticlesProps) {
  const relatedPosts = relatedSlugs
    .map(slug => blogPosts.find(post => post.slug === slug))
    .filter(Boolean)
    .slice(0, 4)

  if (relatedPosts.length === 0) return null

  return (
    <div className="mt-12 pt-8 border-t border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-5 h-5 text-[#ccff00]" />
        <h3 className="text-xl font-bold text-white">Related Articles</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {relatedPosts.map((post) => (
          <Link
            key={post!.slug}
            href={`/blog/${post!.slug}`}
            className="group bg-white/5 hover:bg-white/10  p-4 border border-white/10 hover:border-[#ccff00]/30 transition-all"
          >
            <span className="text-xs text-[#ccff00] font-medium uppercase tracking-wider">
              {post!.category}
            </span>
            <h4 className="text-white font-semibold mt-1 mb-2 group-hover:text-[#ccff00] transition-colors line-clamp-2">
              {post!.title}
            </h4>
            <div className="flex items-center gap-1 text-zinc-400 text-sm">
              Read more
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
