import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/shared/PolicyPage";
import { policies } from "@/data/policies";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [
    { title: "Privacy Policy — Udderly Ridiculous Farm Life" },
    { name: "description", content: "How Udderly Ridiculous Farm collects, uses, shares and protects your personal information." },
    { property: "og:title", content: "Privacy Policy — Udderly Ridiculous Farm Life" },
    { property: "og:description", content: "How Udderly Ridiculous Farm collects, uses, shares and protects your personal information." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: LegalPage,
});
function LegalPage() { return <PolicyPage text={policies["privacy-policy"]} />; }
