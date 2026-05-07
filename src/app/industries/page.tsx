import { PageRenderer } from "@/components/PageRenderer";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  pages.industries.title,
  pages.industries.description,
  "/industries",
);

export default function IndustriesPage() {
  return <PageRenderer page={pages.industries} />;
}
