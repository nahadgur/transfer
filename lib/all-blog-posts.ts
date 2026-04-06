import { blogPosts as taxBlogPosts } from './blog-data'
import { blogTransfer4A } from './blog-transfer-4a'
import { blogTransfer4B } from './blog-transfer-4b'
import { blogTransfer4C } from './blog-transfer-4c'

// Combined: new transfer posts first (appear as Featured), then existing tax posts
export const allBlogPosts = [
  ...blogTransfer4C,
  ...blogTransfer4B,
  ...blogTransfer4A,
  ...taxBlogPosts,
]
