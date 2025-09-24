import Link from "next/link";
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Main Content */}
      <main className="bg-white">
        {/* Welcome Section */}
        <section className="text-center py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-6xl font-bold text-black mb-8">Welcome</h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-blue-400 py-8">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-lg text-white mb-4">
              Thanks for dropping in! Read our most recent posts by clicking here: <Link href="/posts" className="text-white hover:text-gray-200 underline">index</Link>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Social Icons */}
          <div className="mb-12">
            <SocialLinks />
          </div>

          {/* Read These Section */}
          <div className="bg-white py-8">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-black mb-6">Read These</h2>
              <div className="space-y-3">
                <Link href="/blog/the-northern-star" className="block text-red-600 hover:text-red-700 text-lg">
                  The Northern Star
                </Link>
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
          </div>

          {/* Footer Credits */}
          <div className="text-center pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-700">
              <span>© 2025 <Link href="/" className="hover:text-black">BingBangBoom</Link></span>
              <Link href="/privacy-policy" className="hover:text-black">Privacy Policy</Link>
              <span>Powered by WordPress</span>
              <a href="#" className="hover:text-black">To the top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
