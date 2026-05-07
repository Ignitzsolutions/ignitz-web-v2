import { CollectionHero, ContentGrid, internsToCards } from "@/components/DynamicContent";
import { pageMetadata } from "@/lib/seo";
import { getInterns } from "@/sanity/lib/content";

export const metadata = pageMetadata(
  "Interns | Ignitz",
  "Explore Ignitz intern cohorts, tracks, mentors, and project links.",
  "/interns",
);

export default async function InternsPage() {
  const interns = await getInterns();

  return (
    <>
      <CollectionHero
        eyebrow="Interns"
        title="Intern cohorts connected to real AI product work."
        lead="Showcase intern tracks, cohort projects, mentors, and hackathon outputs as part of the Ignitz talent pipeline."
      />
      <ContentGrid emptyLabel="No interns are published yet." items={internsToCards(interns)} />
    </>
  );
}
