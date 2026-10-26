import { allPosts, urlset, xmlResponse } from "@/lib/site";

export const dynamic = "force-static";

// Every blog post, generated from the post data on each build.
export function GET() {
  return xmlResponse(urlset(allPosts().map((p) => ({ loc: p.url, lastmod: p.published }))));
}
