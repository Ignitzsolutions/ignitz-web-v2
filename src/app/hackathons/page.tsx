import { CollectionHero, ContentGrid } from "@/components/DynamicContent";
import { pageMetadata } from "@/lib/seo";
import { getHackathons } from "@/sanity/lib/content";

export const metadata = pageMetadata(
  "Hackathons | Ignitz",
  "Explore Ignitz AI hackathons, prototype days, project outputs, and innovation programs.",
  "/hackathons",
);

export default async function HackathonsPage() {
  const hackathons = await getHackathons();

  return (
    <>
      <CollectionHero
        eyebrow="Hackathons"
        title="Hackathons that feed the AI product pipeline."
        lead="Use hackathons to create prototypes, identify interns, surface product ideas, and build practical delivery tools."
      />
      <ContentGrid
        emptyLabel="No hackathons are published yet."
        items={hackathons.map((hackathon) => ({
          title: hackathon.title,
          slug: hackathon.slug,
          href: `/hackathons/${hackathon.slug}`,
          eyebrow: hackathon.status,
          excerpt: hackathon.excerpt,
          meta: hackathon.date,
          tags: hackathon.tags,
        }))}
      />
    </>
  );
}
