import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Terms of Use | Ignitz",
  "Placeholder terms of use for the Ignitz website.",
  "/terms",
);

export default function TermsPage() {
  return (
    <main className="legal-page">
      <p className="eyebrow">Legal</p>
      <h1>Terms of Use</h1>
      <p>
        This is placeholder legal copy. Replace it with reviewed terms before
        launch, including acceptable use, liability, ownership, and jurisdiction.
      </p>
    </main>
  );
}
