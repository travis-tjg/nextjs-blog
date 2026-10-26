import Link from "next/link";
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import homepageOrder from "@/data/homepageOrder.json";
import { allPosts } from "@/lib/site";

// Every post is linked from the homepage. Discovery posts follow homepageOrder.json (interleaved so
// none sits consistently higher), then everything else newest first.
function homepagePosts() {
  const posts = allPosts();
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const ordered = homepageOrder.order.map((s) => bySlug.get(s)).filter((p) => p !== undefined);
  const listed = new Set(ordered.map((p) => p.slug));
  return [...ordered, ...posts.filter((p) => !listed.has(p.slug))];
}

export default function Home() {
  const posts = homepagePosts();
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      <main className="bg-white">
        <section className="text-center py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-6xl font-bold text-black mb-8">Welcome</h1>
          </div>
        </section>

        <section className="bg-blue-400 py-8">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-lg text-white mb-4">
              Thanks for dropping in! Read our most recent posts by clicking here: <Link href="/posts/" className="text-white hover:text-gray-200 underline">index</Link>
            </p>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-black mb-6">All Posts</h2>
            <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}/`} className="text-red-600 hover:text-red-700 leading-snug">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SocialLinks />
          </div>
          <div className="text-center pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-700">
              <span>© {new Date().getFullYear()} <Link href="/" className="hover:text-black">BingBangBoom</Link></span>
              <Link href="/privacy-policy/" className="hover:text-black">Privacy Policy</Link>
              <span>Powered by WordPress</span>
              <a href="#" className="hover:text-black">To the top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
