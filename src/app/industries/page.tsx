import { PlatformRoutePage } from "@/components/PlatformRoutePage";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  pages.industries.title,
  pages.industries.description,
  "/industries",
);

export default function IndustriesPage() {
  return (
    <PlatformRoutePage
      page={pages.industries}
      variant="industries"
      panel={{
        label: "Industry map",
        title: "AI systems shaped around each operating environment.",
        body:
          "Different teams need different governance, proof, adoption rhythms, and workflow surfaces. Ignitz keeps the same systems method but adapts the route.",
        metric: "4 sectors",
        meta: "Editable market focus",
      }}
      signals={[
        { label: "Consulting", value: "Transformation teams", note: "Structured problem solving and AI delivery discipline." },
        { label: "Technology", value: "Product teams", note: "AI workflows, delivery pods, and platform engineering." },
        { label: "Operations", value: "Complex teams", note: "Automation, analytics, dashboards, and capability transfer." },
      ]}
    />
  );
}
