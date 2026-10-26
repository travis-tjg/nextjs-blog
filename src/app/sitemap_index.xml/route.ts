import { sitemapIndex } from "@/lib/sitemapIndex";

export const dynamic = "force-static";

export function GET() {
  return sitemapIndex();
}
