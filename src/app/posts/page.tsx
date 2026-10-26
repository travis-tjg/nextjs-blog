import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";


export const metadata: Metadata = { title: "Index", alternates: { canonical: "/posts/" } };

export default function IndexPage() {
  // Convert blogPosts object to array and sort by date (newest first)
  const blogPostsArray = Object.entries(blogPosts)
    .map(([slug, post]) => ({ slug, title: post.title, date: post.date }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Header Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-6xl font-black text-gray-900 mb-6">Index</h1>
            <p className="text-lg text-gray-600">Here&rsquo;s our most recent stuff . . .</p>
          </div>
        </section>

        {/* Content Section - Blue Background */}
        <section className="bg-blue-400 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg mb-6">Here&rsquo;s our most recent stuff . . .</p>
            <div className="space-y-1">
              {blogPostsArray.map((post) => (
                <div key={post.slug}>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-white hover:text-gray-200 underline block"
                  >
                    {post.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <SocialLinks />
          </div>
        </section>

        {/* Read These Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-black text-gray-900 mb-8">Read These</h2>
            <div className="space-y-4">
              <Link href="/blog/what-is-css" className="block text-red-600 hover:text-red-700 text-lg">
                What Is CSS?
              </Link>
              <Link href="/blog/301-redirects" className="block text-red-600 hover:text-red-700 text-lg">
                301 Redirects
              </Link>
              <Link href="/blog/the-joy-of-learning-something-new" className="block text-red-600 hover:text-red-700 text-lg">
                The Joy of Learning Something New
              </Link>
              <Link href="/blog/test" className="block text-red-600 hover:text-red-700 text-lg">
                Test
              </Link>
              <Link href="/blog/unlocking-the-secrets-of-becoming-a-ghostwriter" className="block text-red-600 hover:text-red-700 text-lg">
                Unlocking the Secrets of Becoming a Ghostwriter: Mastering the Art of the Invisible Pen
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-100 text-center text-sm text-gray-600">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex justify-center space-x-4">
              <span>© 2025 BingBangBoom</span>
              <Link href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
              <span>Powered by WordPress</span>
              <Link href="#" className="hover:text-gray-900">To the top ↑</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}