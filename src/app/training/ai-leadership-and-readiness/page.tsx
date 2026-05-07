import { PageRenderer } from "@/components/PageRenderer";
import { pages } from "@/content/pages";
import { JsonLd, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  pages.aiReadiness.title,
  pages.aiReadiness.description,
  "/training/ai-leadership-and-readiness",
);

export default function AIReadinessPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "AI Readiness and Leadership Programs",
          pages.aiReadiness.description,
          "/training/ai-leadership-and-readiness",
        )}
      />
      <PageRenderer page={pages.aiReadiness} />
    </>
  );
}
