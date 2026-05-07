import { PageRenderer } from "@/components/PageRenderer";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pages.contact.title, pages.contact.description, "/contact");

export default function ContactPage() {
  return <PageRenderer page={pages.contact} contact />;
}
