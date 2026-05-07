import { PageRenderer } from "@/components/PageRenderer";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = {
  ...pages.home,
  slug: "/insights",
  title: "Insights on AI Delivery and Corporate Training | Ignitz",
  description:
    "Articles, playbooks, and perspectives on AI products, consulting capability, workforce strategy, and enterprise transformation.",
  hero: {
    eyebrow: "Insights",
    title: "Insights on AI delivery and corporate learning.",
    lead: "Build search visibility and executive trust with practical perspectives on training, product delivery, and expert teams.",
    primaryCta: { label: "Subscribe for updates", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/case-studies" },
  },
  sections: { faqs: pages.home.sections.faqs },
};

export const metadata = pageMetadata(page.title, page.description, "/insights");

export default function InsightsPage() {
  return <PageRenderer page={page} insightList />;
}
