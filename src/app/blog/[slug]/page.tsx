import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  // Get all blog post slugs in chronological order (newest first)
  const allSlugs = Object.keys(blogPosts).sort((a, b) => {
    const dateA = new Date(blogPosts[a].date);
    const dateB = new Date(blogPosts[b].date);
    return dateB.getTime() - dateA.getTime();
  });

  const currentIndex = allSlugs.indexOf(slug);
  const previousPost = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextPost = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Article Header */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-4">
              <span className="inline-block bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded">
                {post.category}
              </span>
            </div>
            <h1 className="text-5xl font-black text-gray-900 mb-6">{post.title}</h1>
            <p className="text-lg text-gray-600 mb-4">A 301 is a permanent redirect of one URL to another.</p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span>By {post.author}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </section>

        {/* Article Content - Blue Background */}
        <section className="bg-blue-400 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="text-lg leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="bg-blue-400 text-white py-8 border-t border-blue-300">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex justify-between items-center">
              {previousPost ? (
                <Link href={`/blog/${previousPost}`} className="flex items-center space-x-2 hover:underline">
                  <span>←</span>
                  <span>{blogPosts[previousPost].title}</span>
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextPost ? (
                <Link href={`/blog/${nextPost}`} className="flex items-center space-x-2 hover:underline">
                  <span>{blogPosts[nextPost].title}</span>
                  <span>→</span>
                </Link>
              ) : (
                <div></div>
              )}
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
              <Link href="/blog/the-northern-star" className="block text-pink-600 hover:text-pink-700 text-lg">
                The Northern Star
              </Link>
              <Link href="/blog/what-is-css" className="block text-pink-600 hover:text-pink-700 text-lg">
                What Is CSS?
              </Link>
              <Link href="/blog/301-redirects" className="block text-pink-600 hover:text-pink-700 text-lg">
                301 Redirects
              </Link>
              <Link href="/blog/the-joy-of-learning-something-new" className="block text-pink-600 hover:text-pink-700 text-lg">
                The Joy of Learning Something New
              </Link>
              <Link href="/blog/test" className="block text-pink-600 hover:text-pink-700 text-lg">
                Test
              </Link>
              <Link href="/blog/unlocking-the-secrets-of-becoming-a-ghostwriter" className="block text-pink-600 hover:text-pink-700 text-lg">
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

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const baseUrl = 'https://bingbangboom.org';
  const canonicalUrl = `${baseUrl}/blog/${slug}/`;

  return {
    title: post.title,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
      url: canonicalUrl,
      siteName: 'BingBangBoom',
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
    },
  };
}