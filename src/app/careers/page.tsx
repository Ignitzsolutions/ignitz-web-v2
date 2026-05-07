import { PageRenderer } from "@/components/PageRenderer";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pages.careers.title, pages.careers.description, "/careers");

export default function CareersPage() {
  return <PageRenderer page={pages.careers} />;
}
