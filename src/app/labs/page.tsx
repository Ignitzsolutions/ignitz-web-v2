import {
  AIProductsShowcase,
  BlogPreview,
  HackathonPreview,
  IncubatorPreview,
} from "@/components/DynamicContent";
import { CapabilityIndex, DivisionLanes, FinalCTA, Hero } from "@/components/Sections";
import { divisions } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import {
  getAIProducts,
  getBlogPosts,
  getHackathons,
  getIncubatedProjects,
} from "@/sanity/lib/content";

const division = divisions[0];

export const metadata = pageMetadata(
  "Ignitz Labs | AI Products and Intelligent Systems",
  "Ignitz Labs builds AI-native products, agents, copilots, knowledge systems, developer tools, and incubation projects.",
  "/labs",
);

export default async function LabsPage() {
  const [products, projects, hackathons, posts] = await Promise.all([
    getAIProducts(),
    getIncubatedProjects(),
    getHackathons(),
    getBlogPosts(),
  ]);

  return (
    <main>
      <Hero
        page={{
          slug: division.href,
          title: "Ignitz Labs | AI Products and Intelligent Systems",
          description: division.positioning,
          hero: {
            eyebrow: "Ignitz Labs",
            title: "Building AI-native products and intelligent systems.",
            lead: "Labs is where Ignitz turns agents, copilots, knowledge systems, developer tools, and internal experiments into reusable product capability.",
            primaryCta: { label: "Explore AI products", href: "/ai-products" },
            secondaryCta: { label: "View incubator", href: "/incubator" },
          },
          sections: {},
        }}
      />
      <DivisionLanes items={[division]} />
      <AIProductsShowcase products={products} />
      <IncubatorPreview projects={projects} />
      <HackathonPreview hackathons={hackathons} />
      <BlogPreview posts={posts} />
      <CapabilityIndex />
      <FinalCTA />
    </main>
  );
}
