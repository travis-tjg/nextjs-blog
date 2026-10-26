import { blogPosts, type BlogPost } from "@/data/blogPosts";

export const SITE_URL = "https://bingbangboom.org";
export const SITE_NAME = "BingBangBoom";

export type PostEntry = BlogPost & { slug: string; url: string; published: Date };

export function postUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}/`;
}

// Every post, newest first; ties broken by title so the order is stable between builds.
export function allPosts(): PostEntry[] {
  return Object.entries(blogPosts)
    .map(([slug, post]) => ({ ...post, slug, url: postUrl(slug), published: new Date(post.date) }))
    .sort((a, b) => b.published.getTime() - a.published.getTime() || a.title.localeCompare(b.title));
}

export function plainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&rsquo;|&lsquo;/g, "'")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function excerpt(html: string, max = 155): string {
  const text = plainText(html);
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:]$/, "") + "...";
}

export function newestPostDate(): Date {
  return allPosts()[0]?.published ?? new Date("2025-09-17");
}

export function xmlEscape(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Fixed pages. Lastmod comes from real content dates only; fixed pages without one omit it.
export const STATIC_PAGES: { path: string; lastmod?: () => Date }[] = [
  { path: "/", lastmod: newestPostDate },
  { path: "/posts/", lastmod: newestPostDate },
  { path: "/author/" },
  { path: "/category/" },
  { path: "/privacy-policy/" },
];

export function urlset(entries: { loc: string; lastmod?: Date }[]): string {
  const rows = entries
    .map((e) => `  <url>\n    <loc>${xmlEscape(e.loc)}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod.toISOString()}</lastmod>` : ""}\n  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>\n`;
}

export function xmlResponse(body: string, type = "application/xml"): Response {
  return new Response(body, { headers: { "Content-Type": `${type}; charset=utf-8` } });
}
