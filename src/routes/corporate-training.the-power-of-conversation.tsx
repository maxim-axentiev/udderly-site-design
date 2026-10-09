import { createFileRoute } from "@tanstack/react-router";

import { buildProgramMeta, ProgramPage } from "@/components/corporate/ProgramPage";

export const Route = createFileRoute("/corporate-training/the-power-of-conversation")({
  head: () => buildProgramMeta("The Power of Conversation", "The Power of Conversation — a corporate training program on a working Ontario farm that teaches teams to manage tension, give feedback, and have the conversations that matter."),
  component: () => <ProgramPage heroTitle={<>The Power of <span className="text-secondary-accent">Conversation</span></>} />,
});
