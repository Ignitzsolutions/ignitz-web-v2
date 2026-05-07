import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Privacy Policy | Ignitz",
  "Placeholder privacy policy for the Ignitz website.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <p className="eyebrow">Legal</p>
      <h1>Privacy Policy</h1>
      <p>
        This is placeholder legal copy. Replace it with reviewed privacy terms
        before launch, including analytics, lead-form handling, retention, and
        contact details.
      </p>
    </main>
  );
}
