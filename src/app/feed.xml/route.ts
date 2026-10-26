import { SITE_NAME, SITE_URL, allPosts, excerpt, xmlEscape, xmlResponse } from "@/lib/site";

export const dynamic = "force-static";

// Summary-only RSS (latest 20). No full text, so scrapers get a sentence and links back.
export function GET() {
  const items = allPosts()
    .slice(0, 20)
    .map((p) => {
      const summary = `<p>${xmlEscape(excerpt(p.content, 200))}</p><p>The post <a href="${p.url}">${xmlEscape(p.title)}</a> appeared first on <a href="${SITE_URL}/">${SITE_NAME}</a>.</p>`;
      return `    <item>\n      <title>${xmlEscape(p.title)}</title>\n      <link>${p.url}</link>\n      <guid isPermaLink="true">${p.url}</guid>\n      <pubDate>${p.published.toUTCString()}</pubDate>\n      <dc:creator>${xmlEscape(p.author)}</dc:creator>\n      <category>${xmlEscape(p.category)}</category>\n      <description><![CDATA[${summary}]]></description>\n    </item>`;
    })
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>${SITE_NAME}</title>\n    <link>${SITE_URL}/</link>\n    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>\n    <description>Enjoy looking around</description>\n    <language>en-US</language>\n${items}\n  </channel>\n</rss>\n`;
  return xmlResponse(body, "application/rss+xml");
}
