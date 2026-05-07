import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Accessibility Statement | Ignitz",
  "Placeholder accessibility statement for the Ignitz website.",
  "/accessibility",
);

export default function AccessibilityPage() {
  return (
    <main className="legal-page">
      <p className="eyebrow">Accessibility</p>
      <h1>Accessibility Statement</h1>
      <p>
        Ignitz aims to provide an accessible website experience. This placeholder
        should be replaced with the final support channel, audit status, and
        accessibility commitment before launch.
      </p>
    </main>
  );
}
