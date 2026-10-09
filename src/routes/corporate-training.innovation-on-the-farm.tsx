import { createFileRoute } from "@tanstack/react-router";

import { buildProgramMeta, ProgramPage } from "@/components/corporate/ProgramPage";

export const Route = createFileRoute("/corporate-training/innovation-on-the-farm")({
  head: () => buildProgramMeta("Innovation on the Farm", "Innovation on the Farm — a corporate training program for creative problem solving with real constraints, real animals and a working Ontario farm."),
  component: () => <ProgramPage heroTitle={<>Innovation on <span className="text-secondary-accent">the Farm</span></>} />,
});
