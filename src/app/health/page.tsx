import Link from "next/link";
import { PlatformPanelConsole } from "@/components/PlatformRoutePage";
import { FinalCTA } from "@/components/Sections";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Ignitz Health | Healthcare AI Applications",
  "Ignitz Health builds AI-assisted healthcare applications, clinic workflows, patient systems, health dashboards, and intelligent patient workflows.",
  "/health",
);

export default function HealthPage() {
  return (
    <main>
      <HealthPlatformHero />
      <HealthWorkflowPlatform />
      <HealthTrustSystem />
      <FinalCTA />
    </main>
  );
}

function HealthPlatformHero() {
  return (
    <section className="platform-route-hero health-route-hero" aria-labelledby="health-route-title">
      <div className="platform-route-copy">
        <p className="eyebrow">Ignitz Health</p>
        <h1 id="health-route-title">AI-assisted healthcare applications and patient workflows.</h1>
        <p>
          A focused vertical for clinic systems, patient operations, appointment
          workflows, healthcare dashboards, and AI-assisted medical workflows.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/contact">
            Discuss healthcare
          </Link>
          <Link className="button button-secondary" href="/team">
            View team
          </Link>
        </div>
      </div>

      <aside className="platform-route-panel">
        <span>Healthcare workflow map</span>
        <PlatformPanelConsole
          active="Review"
          items={["Patient", "Staff", "AI assist", "Review"]}
          label="Health console"
          primary="Patient flow with staff visibility"
          secondary="Bounded AI support and review state"
          status="Review-ready"
        />
        <h2>Patient flow, staff dashboards, and responsible AI assistance.</h2>
        <p>
          The Health vertical is framed around calm systems, traceable workflow state,
          and review-ready product boundaries.
        </p>
        <div className="platform-route-panel-footer">
          <strong>Review-ready</strong>
          <small>Patient / staff / clinic ops</small>
        </div>
      </aside>

      <dl className="platform-route-signals" aria-label="Healthcare platform signals">
        <div>
          <dt>Patient flow</dt>
          <dd>Cleaner handoffs</dd>
          <p>Intake, appointments, routing, reminders, and follow-up paths.</p>
        </div>
        <div>
          <dt>Clinic ops</dt>
          <dd>Dashboards</dd>
          <p>Operating visibility for queues, activity, and exceptions.</p>
        </div>
        <div>
          <dt>AI assist</dt>
          <dd>Bounded support</dd>
          <p>Summarization, routing, and workflow acceleration with guardrails.</p>
        </div>
      </dl>
    </section>
  );
}

function HealthWorkflowPlatform() {
  const workflows = [
    {
      label: "Patient flow",
      title: "Appointments, routing, intake, and follow-up.",
      body: "Patient operations need clear status, fewer repeated calls, and handoffs that staff can trust.",
    },
    {
      label: "Clinical ops",
      title: "Dashboards for staff and operating teams.",
      body: "Clinic owners need visibility into queues, activity, reminders, and operational exceptions.",
    },
    {
      label: "AI assist",
      title: "Supportive automation, never noisy magic.",
      body: "AI is framed around summarization, routing, reminders, and workflow acceleration with responsible boundaries.",
    },
  ];

  return (
    <section className="health-platform-section" aria-label="Healthcare workflow platform">
      <div className="route-platform-copy">
        <p className="eyebrow">Healthcare platform</p>
        <h2>Clean workflow systems for higher-trust healthcare operations.</h2>
        <p>
          Ignitz Health turns patient workflows, staff dashboards, appointment operations,
          and AI assistance into calm systems that can be reviewed and improved.
        </p>
      </div>
      <div className="route-lane-grid health">
        {workflows.map((workflow) => (
          <article key={workflow.label}>
            <span>{workflow.label}</span>
            <h3>{workflow.title}</h3>
            <p>{workflow.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HealthTrustSystem() {
  const principles = [
    "Calm patient and staff interfaces",
    "Traceable workflow state and ownership",
    "Responsible AI assistance boundaries",
    "Secure dashboards and operating reviews",
    "Healthcare-ready product documentation",
  ];

  return (
    <section className="health-trust-system" aria-label="Healthcare system trust principles">
      <div className="route-platform-copy compact">
        <p className="eyebrow">Review-ready systems</p>
        <h2>Designed for clarity before scale.</h2>
        <p>
          The priority is not adding AI everywhere. The priority is making healthcare
          workflows cleaner, safer to operate, and easier to evaluate.
        </p>
      </div>
      <div className="route-system-ledger health">
        {principles.map((item, index) => (
          <article key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
            <p>Built as an operating requirement, not a decorative feature.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
