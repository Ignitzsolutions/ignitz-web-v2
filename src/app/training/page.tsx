import { PageRenderer } from "@/components/PageRenderer";
import { pages } from "@/content/pages";
import { JsonLd, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata = pageMetadata(pages.training.title, pages.training.description, "/training");

export default function TrainingPage() {
  return (
    <>
      <JsonLd data={serviceSchema("Corporate Training", pages.training.description, "/training")} />
      <PageRenderer page={pages.training} />
    </>
  );
}
