import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/shared/PolicyPage";
import { policies } from "@/data/policies";

export const Route = createFileRoute("/cookies-policy")({
  head: () => ({ meta: [
    { title: "Cookies Policy — Udderly Ridiculous Farm Life" },
    { name: "description", content: "Learn about cookies, website analytics and tracking preferences at Udderly Ridiculous Farm." },
    { property: "og:title", content: "Cookies Policy — Udderly Ridiculous Farm Life" },
    { property: "og:description", content: "Learn about cookies, website analytics and tracking preferences at Udderly Ridiculous Farm." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: LegalPage,
});
function LegalPage() { return <PolicyPage text={policies["cookies-policy"]} />; }
