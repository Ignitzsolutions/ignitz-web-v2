import Link from "next/link";
import { PlatformPanelConsole } from "@/components/PlatformRoutePage";
import type { IncubatedProject } from "@/content/dynamic/types";
import { pageMetadata } from "@/lib/seo";
import { getIncubatedProjects } from "@/sanity/lib/content";

export const metadata = pageMetadata(
  "Incubator | Ignitz",
  "Explore Ignitz in-house incubated projects, prototypes, and internal product experiments.",
  "/incubator",
);

const proofRoutes = [
  {
    label: "Source",
    title: "Delivery friction",
    body: "Ideas start with repeated workflow pain, not demo novelty.",
  },
  {
    label: "Incubate",
    title: "Prototype with owners",
    body: "Each build keeps a clear problem, human control point, and next decision.",
  },
  {
    label: "Route",
    title: "Product signal",
    body: "The strongest projects move toward Labs products, hackathons, or internal tools.",
  },
];

const proofLoop = [
  {
    step: "01",
    title: "Frame the system gap",
    body: "Define the user, data, decision, and risk before committing a build cycle.",
  },
  {
    step: "02",
    title: "Ship a narrow prototype",
    body: "Create the smallest useful workflow surface and keep the evaluation criteria visible.",
  },
  {
    step: "03",
    title: "Capture operating proof",
    body: "Record patterns, reviewer feedback, and reusable components for the next sprint.",
  },
  {
    step: "04",
    title: "Choose the route",
    body: "Advance, pause, merge, or retire the project based on evidence from the loop.",
  },
];

export default async function IncubatorPage() {
  const projects = await getIncubatedProjects();

  return (
    <main>
      <IncubatorPlatformHero projects={projects} />
      <IncubatorSystemCards projects={projects} />
      <IncubatorProofLoop projects={projects} />
    </main>
  );
}

function IncubatorPlatformHero({ projects }: { projects: IncubatedProject[] }) {
  const featuredProject = projects[0];
  const projectCount = projects.length;
  const technologyCount = uniqueItems(projects.flatMap((project) => safeList(project.technologies))).length;
  const outcomeCount = uniqueItems(projects.flatMap((project) => safeList(project.outcomes))).length;

  return (
    <section className="incubator-platform-hero" aria-labelledby="incubator-hero-title">
      <div className="incubator-hero-copy">
        <p className="eyebrow">AI systems incubator</p>
        <h1 id="incubator-hero-title">Where Ignitz turns AI workflow ideas into product evidence.</h1>
        <p>
          The incubator is the controlled proving ground for agent workflows, internal tools,
          hackathon builds, and product candidates before they become broader platform capability.
        </p>
        <div className="hero-actions" aria-label="Incubator actions">
          <Link className="button button-primary" href="#incubator-systems">
            Explore active systems
          </Link>
          <Link className="button button-secondary" href="/labs">
            View Labs platform
          </Link>
        </div>
      </div>

      <Link
        className="incubator-featured-panel"
        href={featuredProject ? `/incubator/${featuredProject.slug}` : "/contact"}
      >
        <span className="incubator-panel-label">Featured system</span>
        <PlatformPanelConsole
          active="Evidence"
          items={["Idea", "Prototype", "Evidence", "Route"]}
          label="Incubator console"
          primary={featuredProject?.title ?? "Incubator intake"}
          secondary={featuredProject?.stage ?? "New candidate"}
          status="Under review"
        />
        <h2>{featuredProject?.title ?? "Incubator intake"}</h2>
        <p>
          {featuredProject?.excerpt ??
            "Structured AI system candidates are reviewed for clear workflow need, owner fit, and product signal."}
        </p>
        <div className="incubator-panel-meta" aria-label="Featured project details">
          <span>{featuredProject?.stage ?? "New candidate"}</span>
          <span>{featuredProject?.owner ?? "Ignitz AI Lab"}</span>
        </div>
        <strong>{featuredProject ? "Review system profile" : "Start a systems conversation"}</strong>
      </Link>

      <div className="incubator-route-row" aria-label="Incubator proof routes">
        {proofRoutes.map((route) => (
          <article key={route.label}>
            <span>{route.label}</span>
            <strong>{route.title}</strong>
            <p>{route.body}</p>
          </article>
        ))}
      </div>

      <dl className="incubator-signal-row" aria-label="Incubator signals">
        <div>
          <dt>Projects tracked</dt>
          <dd>{projectCount || "Seed"}</dd>
        </div>
        <div>
          <dt>Technique signals</dt>
          <dd>{technologyCount || "Mapped"}</dd>
        </div>
        <div>
          <dt>Outcome signals</dt>
          <dd>{outcomeCount || "Defined"}</dd>
        </div>
      </dl>
    </section>
  );
}

function IncubatorSystemCards({ projects }: { projects: IncubatedProject[] }) {
  return (
    <section
      className="incubator-system-room"
      id="incubator-systems"
      aria-labelledby="incubator-systems-title"
    >
      <div className="incubator-section-intro">
        <p className="eyebrow">System candidates</p>
        <h2 id="incubator-systems-title">Every project is framed as a working system.</h2>
        <p>
          Project pages keep the practical evidence close: the problem, prototype notes,
          technologies, and expected outcomes. Nothing here assumes client approval or
          production readiness before the work earns it.
        </p>
      </div>

      {projects.length ? (
        <div className="incubator-system-grid">
          {projects.map((project) => (
            <Link className="incubator-system-card" href={`/incubator/${project.slug}`} key={project.slug}>
              <span>{project.stage ?? "Incubator candidate"}</span>
              <h3>{project.title}</h3>
              <p>{project.problem ?? project.excerpt ?? "A focused AI systems candidate under review."}</p>
              <div className="incubator-card-notes">
                <strong>Prototype note</strong>
                <p>{project.prototypeNotes ?? "Prototype notes will be added as the project matures."}</p>
              </div>
              <ul aria-label={`${project.title} outcome signals`}>
                {safeList(project.outcomes)
                  .slice(0, 3)
                  .map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
              </ul>
              <div className="incubator-tag-row" aria-label={`${project.title} technologies`}>
                {safeList(project.technologies)
                  .slice(0, 4)
                  .map((technology) => (
                    <small key={technology}>{technology}</small>
                  ))}
              </div>
              <strong className="incubator-card-link">Open system profile</strong>
            </Link>
          ))}
        </div>
      ) : (
        <p className="incubator-empty-state">No incubated projects are published yet.</p>
      )}
    </section>
  );
}

function IncubatorProofLoop({ projects }: { projects: IncubatedProject[] }) {
  const linkedProductCount = projects.filter((project) => project.linkedProductSlug).length;
  const ownerCount = uniqueItems(projects.map((project) => project.owner)).length;

  return (
    <section className="incubator-proof-loop" aria-labelledby="incubator-proof-title">
      <div className="incubator-proof-copy">
        <p className="eyebrow">Proof loop</p>
        <h2 id="incubator-proof-title">A concise path from idea to platform signal.</h2>
        <p>
          Incubation is valuable when it creates reusable judgment: what to build, what to
          stop, what to fold into an existing product, and what needs one more sprint.
        </p>
      </div>

      <div className="incubator-loop-grid">
        {proofLoop.map((item) => (
          <article key={item.step}>
            <span>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>

      <dl className="incubator-proof-summary" aria-label="Incubator proof summary">
        <div>
          <dt>Owners represented</dt>
          <dd>{ownerCount || "Lab-led"}</dd>
        </div>
        <div>
          <dt>Linked product paths</dt>
          <dd>{linkedProductCount || "Emerging"}</dd>
        </div>
        <div>
          <dt>Decision rhythm</dt>
          <dd>Sprint evidence</dd>
        </div>
      </dl>
    </section>
  );
}

function uniqueItems(items: Array<string | null | undefined>) {
  return Array.from(new Set(items.filter(Boolean)));
}

function safeList(items?: string[] | null) {
  return items ?? [];
}
