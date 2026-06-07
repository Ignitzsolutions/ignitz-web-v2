import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Accessibility Statement | Ignitz",
  "Accessibility statement information for the Ignitz website.",
  "/accessibility",
);

export default function AccessibilityPage() {
  return (
    <main className="legal-page">
      <p className="eyebrow">Accessibility</p>
      <h1>Accessibility Statement</h1>
      <p>
        Ignitz aims to provide an accessible website experience. If you
        encounter a barrier or need content in another format, email
        info@ignitz.net.
      </p>
    </main>
  );
}
