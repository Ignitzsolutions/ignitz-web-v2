import { PageRenderer } from "@/components/PageRenderer";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = {
  ...pages.home,
  slug: "/case-studies",
  title: "Case Studies and Client Outcomes | Ignitz",
  description:
    "Explore selected transformation, workforce, and AI product outcomes delivered through training, co-build, and expert-team engagement models.",
  hero: {
    eyebrow: "Case studies",
    title: "Client outcomes ready for stronger proof.",
    lead: "Use this page to publish approved metrics, testimonials, and stories as soon as client permissions are complete.",
    primaryCta: { label: "Request a relevant case study", href: "/contact" },
    secondaryCta: { label: "Talk to Ignitz", href: "/contact" },
  },
  sections: { faqs: pages.home.sections.faqs },
};

export const metadata = pageMetadata(page.title, page.description, "/case-studies");

export default function CaseStudiesPage() {
  return <PageRenderer page={page} caseStudies />;
}
