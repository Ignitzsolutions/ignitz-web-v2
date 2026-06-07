import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Privacy Policy | Ignitz",
  "Privacy policy information for the Ignitz website.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <p className="eyebrow">Legal</p>
      <h1>Privacy Policy</h1>
      <p>
        The final privacy policy is being prepared for launch. For questions
        about data handling, analytics, or contact requests, email
        info@ignitz.net.
      </p>
    </main>
  );
}
