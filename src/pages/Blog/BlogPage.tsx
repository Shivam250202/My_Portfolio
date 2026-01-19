import { blogPosts } from '@/data/blog-posts'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-12 text-center animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Blog & Articles</h1>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Thoughts, tutorials, and insights on web development</p>
      </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {blogPosts.map((post, idx) => (
          <Card key={post.id} className={`flex flex-col hover-lift will-animate animate-slide-up stagger-${idx + 1}`}>
            <div className="h-40 sm:h-48 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg mb-4 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold">
              {post.title[0]}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm sm:text-base line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <Button variant="outline" className="w-full group">
              Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
