import { CollectionHero, ContentGrid } from "@/components/DynamicContent";
import { pageMetadata } from "@/lib/seo";
import { getIncubatedProjects } from "@/sanity/lib/content";

export const metadata = pageMetadata(
  "Incubator | Ignitz",
  "Explore Ignitz in-house incubated projects, prototypes, and internal product experiments.",
  "/incubator",
);

export default async function IncubatorPage() {
  const projects = await getIncubatedProjects();

  return (
    <>
      <CollectionHero
        eyebrow="Incubator"
        title="In-house projects that become product proof."
        lead="Track internal prototypes, lab projects, hackathon outputs, and incubator candidates as they mature."
      />
      <ContentGrid
        emptyLabel="No incubated projects are published yet."
        items={projects.map((project) => ({
          title: project.title,
          slug: project.slug,
          href: `/incubator/${project.slug}`,
          eyebrow: project.stage,
          excerpt: project.excerpt,
          meta: project.owner,
          tags: project.tags,
        }))}
      />
    </>
  );
}
