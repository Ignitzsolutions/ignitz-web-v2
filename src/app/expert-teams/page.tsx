import { PageRenderer } from "@/components/PageRenderer";
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
      <PageRenderer page={pages.expertTeams} />
    </>
  );
}
