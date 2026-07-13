import Link from "next/link";
import { PlatformPanelConsole } from "@/components/PlatformRoutePage";
import { divisions } from "@/content/site";
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
      <BusinessSystemsHero />
      <BusinessOperatingSystem />
      <BusinessSystemMap />
    </main>
  );
}

function BusinessSystemsHero() {
  return (
    <section className="platform-route-hero business-route-hero" aria-labelledby="business-route-title">
      <div className="platform-route-copy">
        <p className="eyebrow">Ignitz Business Solutions</p>
        <h1 id="business-route-title">AI-powered business systems for modern operations.</h1>
        <p>
          We build storefront infrastructure, admin portals, automation, dashboards,
          and workflow systems that run the operational layer of a business.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/contact">
            Discuss a system
          </Link>
          <Link className="button button-secondary" href="/ai-product-development">
            See AI delivery
          </Link>
        </div>
      </div>

      <aside className="platform-route-panel">
        <span>Operating surface</span>
        <PlatformPanelConsole
          active="Automation"
          items={["Commerce", "Automation", "Dashboard", "Control"]}
          label="Business OS"
          primary="Orders, customers, and approvals"
          secondary="Admin control with AI assistance"
          status="Operations OS"
        />
        <h2>Commerce, admin, automation, and decisions connected.</h2>
        <p>
          Business systems are treated as infrastructure: every workflow needs an
          owner, a state, a dashboard, and a path for improvement.
        </p>
        <div className="platform-route-panel-footer">
          <strong>Operations OS</strong>
          <small>Storefront / CRM / dashboards</small>
        </div>
      </aside>

      <dl className="platform-route-signals" aria-label="Business systems signals">
        <div>
          <dt>Commerce</dt>
          <dd>Storefront control</dd>
          <p>Catalogs, checkout flows, admin pages, and business ownership.</p>
        </div>
        <div>
          <dt>Automation</dt>
          <dd>Workflow loops</dd>
          <p>Rules, notifications, approvals, reporting, and AI assistance.</p>
        </div>
        <div>
          <dt>Control</dt>
          <dd>Dashboards</dd>
          <p>Decision visibility for owners and operating teams.</p>
        </div>
      </dl>
    </section>
  );
}

function BusinessOperatingSystem() {
  const lanes = [
    {
      label: "Commerce",
      title: "Storefronts that operators can actually run.",
      body: "Catalogs, checkout flows, inventory-aware pages, and admin controls built around daily business movement.",
    },
    {
      label: "Automation",
      title: "Workflow rules connected to real handoffs.",
      body: "Notifications, reports, status changes, data entry, and approval paths become governed operating loops.",
    },
    {
      label: "Control",
      title: "Dashboards, exports, and decision visibility.",
      body: "Owners get the working surface they need: metrics, records, customer state, and operational memory.",
    },
  ];

  return (
    <section className="business-os-section" aria-label="Business systems operating model">
      <div className="route-platform-copy">
        <p className="eyebrow">Business systems</p>
        <h2>Not web development. Operational infrastructure.</h2>
        <p>
          Business Systems turns commerce, admin, automation, reporting, and AI assistance
          into one controlled operating layer.
        </p>
      </div>
      <div className="route-lane-grid">
        {lanes.map((lane) => (
          <article key={lane.label}>
            <span>{lane.label}</span>
            <h3>{lane.title}</h3>
            <p>{lane.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function BusinessSystemMap() {
  return (
    <section className="business-system-map" aria-label="Business systems capability map">
      <div className="route-platform-copy compact">
        <p className="eyebrow">System map</p>
        <h2>Each capability plugs into the same operating surface.</h2>
        <p>
          These are not disconnected services. They are the modules a business needs
          to manage orders, customers, workflows, and decisions.
        </p>
      </div>
      <div className="route-system-ledger">
        {division.includedCapabilities.map((item, index) => (
          <article key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
            <p>Designed as part of the workflow, with admin ownership and AI automation considered from the start.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
