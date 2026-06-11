import Link from "next/link";
import { PlatformPanelConsole } from "@/components/PlatformRoutePage";
import { FinalCTA } from "@/components/Sections";
import type { AIProduct, Hackathon, IncubatedProject } from "@/content/dynamic/types";
import { pageMetadata } from "@/lib/seo";
import {
  getAIProducts,
  getHackathons,
  getIncubatedProjects,
} from "@/sanity/lib/content";

export const metadata = pageMetadata(
  "Ignitz Labs | AI Systems Platform",
  "Ignitz Labs is the AI systems platform layer for products, agents, copilots, knowledge workflows, and incubation.",
  "/labs",
);

export default async function LabsPage() {
  const [products, projects, hackathons] = await Promise.all([
    getAIProducts(),
    getIncubatedProjects(),
    getHackathons(),
  ]);

  return (
    <main>
      <LabsPlatformHero products={products} projects={projects} hackathons={hackathons} />
      <LabsOperatingModel />
      <LabsProductSystem products={products} projects={projects} />
      <LabsBuilderPipeline hackathons={hackathons} projects={projects} />
      <FinalCTA />
    </main>
  );
}

function LabsPlatformHero({
  products,
  projects,
  hackathons,
}: {
  products: AIProduct[];
  projects: IncubatedProject[];
  hackathons: Hackathon[];
}) {
  return (
    <section className="platform-route-hero labs-route-hero" aria-labelledby="labs-route-title">
      <div className="platform-route-copy">
        <p className="eyebrow">Platform</p>
        <h1 id="labs-route-title">The Ignitz AI systems platform.</h1>
        <p>
          Labs connects agents, copilots, knowledge workflows, developer tools, and
          incubation into reusable product capability.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/ai-products">
            Explore AI products
          </Link>
          <Link className="button button-secondary" href="/incubator">
            View incubator
          </Link>
        </div>
      </div>

      <aside className="platform-route-panel">
        <span>Product intelligence graph</span>
        <PlatformPanelConsole
          active="Agent"
          items={["Products", "Agent", "Builders", "Launch"]}
          label="Labs console"
          primary="Prototype to product"
          secondary="Incubator review path"
          status="Product graph ready"
        />
        <h2>Products, prototypes, and builders in one operating map.</h2>
        <p>
          Labs is where Ignitz turns delivery lessons, hackathon output, and internal
          experiments into product direction.
        </p>
        <div className="platform-route-panel-footer">
          <strong>{products.length ? `${products.length} product nodes` : "Product graph ready"}</strong>
          <small>{projects.length ? `${projects.length} incubator signals` : "Incubator path ready"}</small>
        </div>
      </aside>

      <dl className="platform-route-signals" aria-label="Ignitz Labs route signals">
        <div>
          <dt>Products</dt>
          <dd>{products.length || "Ready"}</dd>
          <p>AI product directions and reusable platform surfaces.</p>
        </div>
        <div>
          <dt>Incubator</dt>
          <dd>{projects.length || "Open"}</dd>
          <p>Internal systems moving through evidence and review.</p>
        </div>
        <div>
          <dt>Builder pipeline</dt>
          <dd>{hackathons.length || "Open"}</dd>
          <p>Hackathons and cohorts feeding product discovery.</p>
        </div>
      </dl>
    </section>
  );
}

function LabsOperatingModel() {
  const items = [
    {
      label: "Discover",
      title: "Find the workflow worth productizing.",
      body: "Map the user, data, handoff, owner, and decision loop before a tool becomes a build.",
    },
    {
      label: "Build",
      title: "Turn context into AI product surfaces.",
      body: "Agents, copilots, dashboards, knowledge workflows, and admin control ship as one system.",
    },
    {
      label: "Run",
      title: "Move experiments into reusable capability.",
      body: "Every sprint produces operating memory, product proof, and a clearer next release path.",
    },
  ];

  return (
    <section className="labs-operating-model" aria-label="Ignitz Labs operating model">
      <div className="labs-platform-copy">
        <p className="eyebrow">Operating model</p>
        <h2>Labs is the product engine behind the Ignitz platform.</h2>
        <p>
          Every product starts with a workflow, moves through a system build, and
          leaves behind reusable capability for the next client or cohort.
        </p>
      </div>
      <div className="labs-model-grid">
        {items.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function LabsProductSystem({
  products,
  projects,
}: {
  products: AIProduct[];
  projects: IncubatedProject[];
}) {
  const primaryProduct = products[0];
  const productNodes = products.slice(0, 3);
  const projectNodes = projects.slice(0, 2);

  return (
    <section className="labs-product-system" aria-label="Ignitz Labs product system">
      <div className="labs-platform-copy compact">
        <p className="eyebrow">Product system</p>
        <h2>Products, prototypes, and knowledge tools in one roadmap.</h2>
        <p>
          Instead of separate cards, Labs shows how product work moves from concept
          to pilot, incubation, release, and operating proof.
        </p>
      </div>
      <div className="labs-system-board">
        <Link
          className="labs-flagship-panel"
          href={primaryProduct ? `/ai-products/${primaryProduct.slug}` : "/ai-products"}
        >
          <span>Flagship lane</span>
          <h3>{primaryProduct?.title ?? "Evaluate Yourself"}</h3>
          <p>
            {primaryProduct?.excerpt ??
              "Structured assessment, feedback, and capability visibility for learners and teams."}
          </p>
          <strong>{primaryProduct?.stage ?? "Product direction"}</strong>
        </Link>
        <div className="labs-product-lanes">
          {productNodes.map((product) => (
            <Link href={`/ai-products/${product.slug}`} key={product.slug}>
              <span>{product.status}</span>
              <strong>{product.title}</strong>
              <p>{product.excerpt}</p>
            </Link>
          ))}
          {projectNodes.map((project) => (
            <Link href={`/incubator/${project.slug}`} key={project.slug}>
              <span>{project.stage}</span>
              <strong>{project.title}</strong>
              <p>{project.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LabsBuilderPipeline({
  hackathons,
  projects,
}: {
  hackathons: Hackathon[];
  projects: IncubatedProject[];
}) {
  const latestHackathon = hackathons[0];
  const activeProjects = projects.slice(0, 3);

  return (
    <section className="labs-builder-pipeline" aria-label="Ignitz Labs builder pipeline">
      <div className="labs-pipeline-panel">
        <p className="eyebrow">Builder pipeline</p>
        <h2>Hackathons and incubation feed the product graph.</h2>
        <p>
          Student builders, internal prototypes, and guided AI sprints become a
          repeatable source of product discovery and delivery talent.
        </p>
        {latestHackathon ? (
          <Link className="labs-pipeline-cta" href={`/hackathons/${latestHackathon.slug}`}>
            <span>{latestHackathon.status}</span>
            <strong>{latestHackathon.title}</strong>
            <small>{latestHackathon.date}</small>
          </Link>
        ) : null}
      </div>
      <div className="labs-pipeline-list">
        {activeProjects.map((project, index) => (
          <Link href={`/incubator/${project.slug}`} key={project.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{project.title}</strong>
            <p>{project.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
