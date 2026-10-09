import { createFileRoute } from "@tanstack/react-router";

import { buildProgramMeta, ProgramPage } from "@/components/corporate/ProgramPage";

export const Route = createFileRoute("/corporate-training/alpaca-emotional-intelligence")({
  head: () => buildProgramMeta("Alpaca Emotional Intelligence", "Alpaca Emotional Intelligence — a farm-based corporate training program building self-awareness, empathy and emotional intelligence with real alpacas."),
  component: () => <ProgramPage heroTitle={<>Alpaca Emotional <span className="text-secondary-accent">Intelligence</span></>} />,
});
