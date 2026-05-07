import { PageRenderer } from "@/components/PageRenderer";
import { pages } from "@/content/pages";
import { JsonLd, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata = pageMetadata(
  pages.consultingBootcamps.title,
  pages.consultingBootcamps.description,
  "/training/consulting-bootcamps",
);

export default function ConsultingBootcampsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "Consulting Capability Bootcamps",
          pages.consultingBootcamps.description,
          "/training/consulting-bootcamps",
        )}
      />
      <PageRenderer page={pages.consultingBootcamps} />
    </>
  );
}
