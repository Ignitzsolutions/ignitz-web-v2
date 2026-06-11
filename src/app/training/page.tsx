import { PlatformRoutePage } from "@/components/PlatformRoutePage";
import { pages } from "@/content/pages";
import { JsonLd, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata = pageMetadata(pages.training.title, pages.training.description, "/training");

export default function TrainingPage() {
  return (
    <>
      <JsonLd data={serviceSchema("Corporate Training", pages.training.description, "/training")} />
      <PlatformRoutePage
        page={pages.training}
        variant="training"
        panel={{
          label: "Capability system",
          title: "Training that connects learning to delivery behavior.",
          body:
            "Programs are framed around practice, artifacts, decisions, and follow-through so capability does not disappear after the workshop.",
          metric: "6 week sprint",
          meta: "Leadership / teams / builders",
        }}
        signals={[
          { label: "Audience", value: "Enterprise teams", note: "Shared AI language, adoption priorities, and execution habits." },
          { label: "Method", value: "Practice-led", note: "Workshops connect to real workflows and product choices." },
          { label: "Output", value: "Roadmap + habits", note: "Teams leave with decisions, backlog, and operating routines." },
        ]}
      />
    </>
  );
}
