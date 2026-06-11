import { PlatformRoutePage } from "@/components/PlatformRoutePage";
import { pages } from "@/content/pages";
import { JsonLd, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  pages.expertTeams.title,
  pages.expertTeams.description,
  "/expert-teams",
);

export default function ExpertTeamsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema("Expert Teams", pages.expertTeams.description, "/expert-teams")}
      />
      <PlatformRoutePage
        page={pages.expertTeams}
        variant="expert-teams"
        panel={{
          label: "Embedded pod",
          title: "Specialists who join the operating rhythm.",
          body:
            "Expert teams are positioned as delivery capacity with standards, context, and knowledge transfer rather than generic staffing.",
          metric: "Pod model",
          meta: "Consultants / engineers / AI specialists",
        }}
        signals={[
          { label: "Fit", value: "Execution gaps", note: "Use pods where momentum depends on capability and context." },
          { label: "Cadence", value: "Embedded delivery", note: "Specialists work inside the client operating rhythm." },
          { label: "Exit", value: "Transfer knowledge", note: "The model is designed to reduce long-term dependency." },
        ]}
      />
    </>
  );
}
