import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/shared/PolicyPage";
import { policies } from "@/data/policies";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({ meta: [
    { title: "Terms of Service — Udderly Ridiculous Farm Life" },
    { name: "description", content: "Website use, farm visits, reservations and service terms at Udderly Ridiculous Farm." },
    { property: "og:title", content: "Terms of Service — Udderly Ridiculous Farm Life" },
    { property: "og:description", content: "Website use, farm visits, reservations and service terms at Udderly Ridiculous Farm." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: LegalPage,
});
function LegalPage() { return <PolicyPage text={policies["terms-of-service"]} />; }
