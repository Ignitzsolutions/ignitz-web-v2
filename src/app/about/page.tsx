import { PageRenderer } from "@/components/PageRenderer";
import { pages } from "@/content/pages";
import { JsonLd, organizationSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pages.about.title, pages.about.description, "/about");

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <PageRenderer page={pages.about} />
    </>
  );
}
