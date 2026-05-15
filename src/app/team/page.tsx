import { CollectionHero, ContentGrid, teamToCards } from "@/components/DynamicContent";
import { pageMetadata } from "@/lib/seo";
import { getTeamMembers } from "@/sanity/lib/content";

export const metadata = pageMetadata(
  "Team | Ignitz",
  "Meet Ignitz team members leading AI products, training programs, incubation, and delivery.",
  "/team",
);

export default async function TeamPage() {
  const team = await getTeamMembers();

  return (
    <main>
      <CollectionHero
        eyebrow="Team"
        title="The people building Ignitz products and capability programs."
        lead="Publish team leads, mentors, product owners, and delivery experts from the admin portal."
      />
      <ContentGrid emptyLabel="No team members are published yet." items={teamToCards(team)} />
    </main>
  );
}
