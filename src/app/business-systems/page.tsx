import { CapabilityIndex, DivisionLanes, FinalCTA, Hero, StickyProcess } from "@/components/Sections";
import { divisions, process } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

const division = divisions[1];

export const metadata = pageMetadata(
  "Ignitz Business Systems | AI-Powered Operations",
  "Ignitz Business Solutions builds commerce infrastructure, automation, dashboards, admin portals, workflow systems, and AI integrations.",
  "/business-systems",
);

export default function BusinessSystemsPage() {
  return (
    <main>
      <Hero
        page={{
          slug: division.href,
          title: "Ignitz Business Systems | AI-Powered Operations",
          description: division.positioning,
          hero: {
            eyebrow: "Ignitz Business Solutions",
            title: "AI-powered business systems for modern operations.",
            lead: "We build storefront infrastructure, admin portals, automation, dashboards, and workflow systems that run the operational layer of a business.",
            primaryCta: { label: "Discuss a system", href: "/contact" },
            secondaryCta: { label: "See AI delivery", href: "/ai-product-development" },
          },
          sections: {},
        }}
      />
      <DivisionLanes items={[division]} />
      <section className="section build-index">
        <p className="eyebrow">Business systems</p>
        <h2>Not web development. Operational infrastructure.</h2>
        <div className="build-rows">
          {division.includedCapabilities.map((item) => (
            <div className="build-row" key={item}>
              <span>{item}</span>
              <p>Designed as part of the workflow, not as a disconnected website or one-off tool.</p>
            </div>
          ))}
        </div>
      </section>
      <StickyProcess items={process} />
      <CapabilityIndex />
      <FinalCTA />
    </main>
  );
}
