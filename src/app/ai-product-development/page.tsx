import { PageRenderer } from "@/components/PageRenderer";
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
      <PageRenderer page={pages.aiProduct} />
    </>
  );
}
