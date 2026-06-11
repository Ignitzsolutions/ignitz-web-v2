import { PlatformRoutePage } from "@/components/PlatformRoutePage";
import { pages } from "@/content/pages";
import { JsonLd, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  pages.aiReadiness.title,
  pages.aiReadiness.description,
  "/training/ai-leadership-and-readiness",
);

export default function AIReadinessPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "AI Readiness and Leadership Programs",
          pages.aiReadiness.description,
          "/training/ai-leadership-and-readiness",
        )}
      />
      <PlatformRoutePage
        page={pages.aiReadiness}
        variant="ai-readiness"
        panel={{
          label: "Leadership route",
          title: "From AI curiosity to governed operating decisions.",
          body:
            "Leadership teams can make priorities, risk, adoption, and product routes visible before AI work scales.",
          metric: "Readiness sprint",
          meta: "Use cases / guardrails / backlog",
        }}
        signals={[
          { label: "Focus", value: "Prioritize", note: "Move from scattered AI ideas to ranked, owned use cases." },
          { label: "Guardrails", value: "Govern", note: "Clarify risk, data, and decision boundaries before scale." },
          { label: "Adoption", value: "Operate", note: "Turn leadership alignment into team routines and pilots." },
        ]}
      />
    </>
  );
}
