import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export const Route = createFileRoute("/newsletter")({
  head: () => ({ meta: [
    { title: "Newsletter — Udderly Ridiculous Farm Life" },
    { name: "description", content: "Join the Udderly Update for farm news, animal updates, promotions and upcoming experiences." },
    { property: "og:title", content: "Newsletter — Udderly Ridiculous Farm Life" },
    { property: "og:description", content: "Monthly farm news, animal updates and ridiculous moments in your inbox." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: NewsletterPage,
});
function NewsletterPage() { return <><SiteHeader /><main><NewsletterSection /></main><SiteFooter /></>; }