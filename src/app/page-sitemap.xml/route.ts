import { SITE_URL, STATIC_PAGES, urlset, xmlResponse } from "@/lib/site";

export const dynamic = "force-static";

// Fixed pages (home, index, author, category, privacy).
export function GET() {
  return xmlResponse(urlset(STATIC_PAGES.map((p) => ({ loc: SITE_URL + p.path, lastmod: p.lastmod?.() }))));
}
