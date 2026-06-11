import { PlatformRoutePage } from "@/components/PlatformRoutePage";
import { pages } from "@/content/pages";
import { insights } from "@/content/site";
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
  return (
    <PlatformRoutePage
      page={page}
      variant="insights"
      panel={{
        label: "Knowledge system",
        title: "Field notes for teams turning AI into operating capability.",
        body:
          "Insights are presented as practical decision notes, not a loose blog shelf, so the resource section feels connected to the platform.",
        metric: "3 themes",
        meta: "Learning / product / delivery",
      }}
      signals={[
        { label: "Theme", value: "AI delivery", note: "How pilots become products and products become systems." },
        { label: "Theme", value: "Corporate learning", note: "Training tied to practice environments and decision rights." },
        { label: "Theme", value: "Expert pods", note: "When embedded specialists help teams move faster." },
      ]}
      insights={insights}
    />
  );
}
