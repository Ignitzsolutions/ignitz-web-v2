import { PlatformRoutePage } from "@/components/PlatformRoutePage";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pages.careers.title, pages.careers.description, "/careers");

export default function CareersPage() {
  return (
    <PlatformRoutePage
      page={pages.careers}
      variant="careers"
        panel={{
          label: "Builder track",
          title: "Learn in the same system where delivery happens.",
          body:
            "Ignitz gives builders a practical platform to work across AI products, business systems, and capability programs.",
          metric: "Build / Learn / Deliver",
          meta: "Roles can be added when approved",
        }}
      signals={[
        { label: "Track", value: "AI systems", note: "Work connected to product, automation, and applied delivery." },
        { label: "Growth", value: "Mentored building", note: "Interns, engineers, and specialists learn through real artifacts." },
        { label: "Status", value: "Hiring-ready", note: "Open roles can be published without changing the layout." },
      ]}
    />
  );
}
