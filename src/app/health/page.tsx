import { CapabilityIndex, DivisionLanes, FinalCTA, Hero, StickyProcess } from "@/components/Sections";
import { divisions, process } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

const division = divisions[2];

export const metadata = pageMetadata(
  "Ignitz Health | Healthcare AI Applications",
  "Ignitz Health builds AI-assisted healthcare applications, clinic workflows, patient systems, health dashboards, and intelligent patient workflows.",
  "/health",
);

export default function HealthPage() {
  return (
    <main>
      <Hero
        page={{
          slug: division.href,
          title: "Ignitz Health | Healthcare AI Applications",
          description: division.positioning,
          hero: {
            eyebrow: "Ignitz Health",
            title: "AI-assisted healthcare applications and patient workflows.",
            lead: "A focused vertical for clinic systems, patient operations, appointment workflows, healthcare dashboards, and AI-assisted medical workflows.",
            primaryCta: { label: "Discuss healthcare", href: "/contact" },
            secondaryCta: { label: "View team", href: "/team" },
          },
          sections: {},
        }}
      />
      <DivisionLanes items={[division]} />
      <section className="section health-principles">
        <p className="eyebrow">Healthcare principles</p>
        <h2>Clean, reliable, secure, and ready for enterprise review.</h2>
        <div className="principle-rows">
          <div>
            <strong>Calm workflows</strong>
            <p>Interfaces that reduce noise for staff, patients, and operators.</p>
          </div>
          <div>
            <strong>Responsible AI assistance</strong>
            <p>AI features framed around support, routing, summarization, and workflow acceleration.</p>
          </div>
          <div>
            <strong>Operational clarity</strong>
            <p>Dashboards and patient systems designed for traceable decisions and daily use.</p>
          </div>
        </div>
      </section>
      <StickyProcess items={process} />
      <CapabilityIndex />
      <FinalCTA />
    </main>
  );
}
