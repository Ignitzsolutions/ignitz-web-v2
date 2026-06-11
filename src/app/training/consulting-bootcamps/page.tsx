import { PlatformRoutePage } from "@/components/PlatformRoutePage";
import { pages } from "@/content/pages";
import { JsonLd, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  pages.consultingBootcamps.title,
  pages.consultingBootcamps.description,
  "/training/consulting-bootcamps",
);

export default function ConsultingBootcampsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "Consulting Capability Bootcamps",
          pages.consultingBootcamps.description,
          "/training/consulting-bootcamps",
        )}
      />
      <PlatformRoutePage
        page={pages.consultingBootcamps}
        variant="consulting-bootcamps"
        panel={{
          label: "Bootcamp route",
          title: "Consulting behavior made visible through artifacts.",
          body:
            "Structured thinking, stakeholder communication, synthesis, and execution discipline are presented as operating capabilities.",
          metric: "4 modules",
          meta: "Problem / story / synthesis / execution",
        }}
        signals={[
          { label: "Skill", value: "Structure", note: "Clarify problem frames and decision paths." },
          { label: "Skill", value: "Communicate", note: "Make stakeholder narratives sharper and easier to act on." },
          { label: "Skill", value: "Execute", note: "Turn consulting thinking into delivery rhythm." },
        ]}
      />
    </>
  );
}
