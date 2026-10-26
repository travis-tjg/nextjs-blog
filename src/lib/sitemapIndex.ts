import { SITE_URL, STATIC_PAGES, allPosts, newestPostDate, xmlResponse } from "@/lib/site";

// Index of the two child sitemaps. Served at /sitemap.xml (already registered in Bing) and /sitemap_index.xml.
export function sitemapIndex(): Response {
  const pageMod = STATIC_PAGES.map((p) => p.lastmod?.()).filter(Boolean) as Date[];
  const postMod = allPosts()[0]?.published ?? newestPostDate();
  const rows = [
    { loc: `${SITE_URL}/post-sitemap.xml`, lastmod: postMod },
    { loc: `${SITE_URL}/page-sitemap.xml`, lastmod: pageMod.sort((a, b) => b.getTime() - a.getTime())[0] },
  ]
    .map((s) => `  <sitemap>\n    <loc>${s.loc}</loc>${s.lastmod ? `\n    <lastmod>${s.lastmod.toISOString()}</lastmod>` : ""}\n  </sitemap>`)
    .join("\n");
  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</sitemapindex>\n`);
}
