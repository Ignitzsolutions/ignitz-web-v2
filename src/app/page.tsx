import { PageRenderer } from "@/components/PageRenderer";
import { pages } from "@/content/pages";
import { JsonLd, organizationSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pages.home.title, pages.home.description);

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <PageRenderer page={pages.home} home />
    </>
  );
}
