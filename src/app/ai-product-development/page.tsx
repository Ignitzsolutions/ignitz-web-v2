import { PlatformRoutePage } from "@/components/PlatformRoutePage";
import { pages } from "@/content/pages";
import { JsonLd, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  pages.aiProduct.title,
  pages.aiProduct.description,
  "/ai-product-development",
);

export default function AIProductDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "AI Product Development",
          pages.aiProduct.description,
          "/ai-product-development",
        )}
      />
      <PlatformRoutePage
        page={pages.aiProduct}
        variant="ai-product-development"
        panel={{
          label: "Pilot to product",
          title: "AI product work with the operating model attached.",
          body:
            "AI builds move as governed systems: data, workflow, product surface, ownership, and capability transfer stay connected.",
          metric: "Build route",
          meta: "Agents / RAG / copilots / dashboards",
        }}
        signals={[
          { label: "Stack", value: "OpenAI + Azure", note: "Reference platform for agents, copilots, and AI workflows." },
          { label: "Path", value: "Pilot to production", note: "Delivery governance keeps experiments connected to outcomes." },
          { label: "Transfer", value: "Client capability", note: "Teams learn the system as it is built." },
        ]}
      />
    </>
  );
}
