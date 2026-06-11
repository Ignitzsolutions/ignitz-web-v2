import { PlatformRoutePage } from "@/components/PlatformRoutePage";
import { pages } from "@/content/pages";
import { caseStudies } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

const page = {
  ...pages.home,
  slug: "/case-studies",
  title: "Case Studies and Client Outcomes | Ignitz",
  description:
    "Explore selected transformation, workforce, and AI product outcomes delivered through training, co-build, and expert-team engagement models.",
  hero: {
    eyebrow: "Case studies",
    title: "Client outcomes organized as operating proof.",
    lead: "Explore the way Ignitz frames transformation, training, AI product, and embedded team work around measurable operating change.",
    primaryCta: { label: "Request a relevant case study", href: "/contact" },
    secondaryCta: { label: "Talk to Ignitz", href: "/contact" },
  },
  sections: { faqs: pages.home.sections.faqs },
};

export const metadata = pageMetadata(page.title, page.description, "/case-studies");

export default function CaseStudiesPage() {
  return (
    <PlatformRoutePage
      page={page}
      variant="case-studies"
      panel={{
        label: "Proof shelf",
        title: "Client stories shaped around evidence.",
        body:
          "Each story format connects the problem, system path, team adoption, and business shift so proof can be reviewed clearly.",
        metric: "3 proof formats",
        meta: "Metrics / quote / operating change",
      }}
      signals={[
        { label: "Status", value: "Evidence-first", note: "Client names and outcomes are presented through approved proof patterns." },
        { label: "Formats", value: "Roadmap / Bootcamp / Pod", note: "Stories cover training, build, and embedded execution." },
        { label: "CTA", value: "Relevant proof", note: "Visitors can request a case study matched to their context." },
      ]}
      caseStudies={caseStudies}
    />
  );
}
