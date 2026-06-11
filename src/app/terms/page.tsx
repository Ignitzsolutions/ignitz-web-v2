import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Terms of Use | Ignitz",
  "Terms of use information for the Ignitz website.",
  "/terms",
);

export default function TermsPage() {
  return (
    <main className="platform-legal-page">
      <p className="eyebrow">Legal</p>
      <h1>Terms of Use</h1>
      <p>
        The final terms of use are being prepared for launch. If you need
        commercial, delivery, or ownership details before then, contact
        info@ignitz.net.
      </p>
    </main>
  );
}
