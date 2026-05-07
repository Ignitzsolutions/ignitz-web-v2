import { PageRenderer } from "@/components/PageRenderer";
import { pages } from "@/content/pages";
import { JsonLd, organizationSchema, pageMetadata } from "@/lib/seo";
import {
  getAIProducts,
  getBlogPosts,
  getHackathons,
  getIncubatedProjects,
  getInterns,
  getTeamMembers,
} from "@/sanity/lib/content";

export const metadata = pageMetadata(pages.home.title, pages.home.description);

export default async function Home() {
  const [products, projects, hackathons, posts, team, interns] = await Promise.all([
    getAIProducts(),
    getIncubatedProjects(),
    getHackathons(),
    getBlogPosts(),
    getTeamMembers(),
    getInterns(),
  ]);

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <PageRenderer
        page={pages.home}
        home
        dynamicContent={{ products, projects, hackathons, posts, team, interns }}
      />
    </>
  );
}
