import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import Navigation from "@/components/Navigation";


export const metadata: Metadata = { title: "Categories", alternates: { canonical: "/category/" } };

export default function CategoryPage() {
  // Get all unique categories and their post counts
  const categoryStats = Object.entries(blogPosts).reduce((acc, [slug, post]) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push({ slug, title: post.title, date: post.date, content: post.content, author: post.author });
    return acc;
  }, {} as Record<string, Array<{ slug: string; title: string; date: string; content: string; author: string }>>);

  // Sort posts within each category by date (newest first)
  Object.keys(categoryStats).forEach(category => {
    categoryStats[category].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Posts by Category</h1>
          <p className="text-lg text-gray-600">Browse posts organized by category</p>
        </div>
        
        <div className="space-y-8">
          {Object.entries(categoryStats).map(([category, posts]) => (
            <div key={category} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <span className="inline-block bg-pink-500 text-white text-sm font-bold px-4 py-2 rounded mr-4">
                  {category}
                </span>
                <span className="text-gray-600">
                  {posts.length} post{posts.length !== 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="grid gap-6">
                {posts.map((post) => (
                  <article key={post.slug} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 text-xl font-semibold block mb-2"
                    >
                      {post.title}
                    </Link>
                    <div className="text-sm text-gray-600 mb-2">
                      <span>By {post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <p className="text-gray-700 text-sm">
                      {post.content.substring(0, 150)}...
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}