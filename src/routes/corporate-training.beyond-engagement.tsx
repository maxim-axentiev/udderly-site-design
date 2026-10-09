import { createFileRoute } from "@tanstack/react-router";

import { buildProgramMeta, ProgramPage } from "@/components/corporate/ProgramPage";

export const Route = createFileRoute("/corporate-training/beyond-engagement")({
  head: () => buildProgramMeta("Beyond Engagement", "Beyond Engagement — a corporate training program on a working Ontario farm that moves teams past survey scores to culture habits that last."),
  component: () => <ProgramPage heroTitle={<>Beyond <span className="text-secondary-accent">Engagement</span></>} />,
});
