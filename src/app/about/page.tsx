import { PlatformRoutePage } from "@/components/PlatformRoutePage";
import { pages } from "@/content/pages";
import { JsonLd, organizationSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pages.about.title, pages.about.description, "/about");

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <PlatformRoutePage
        page={pages.about}
        variant="about"
        panel={{
          label: "Ignitz operating model",
          title: "Capability, products, and AI systems in one company.",
          body:
            "Ignitz is being shaped as a practical AI systems partner: strategy, build, delivery, and capability transfer stay connected.",
          metric: "AI systems company",
          meta: "Hyderabad delivery base",
        }}
        signals={[
          { label: "Model", value: "Train / Build / Scale", note: "The company story follows one operating route from capability to shipped systems." },
          { label: "Proof", value: "Evidence-ready", note: "Proof areas are structured for approved names, metrics, and client stories." },
          { label: "Base", value: "Hyderabad", note: "Local delivery energy with global AI platform references." },
        ]}
      />
    </>
  );
}
