import Link from "next/link";
import Image from "next/image";
import {
  aiSystemsStack,
  capabilityNodes,
  caseStudies,
  companySignals,
  contactChannels,
  divisions,
  homepagePlatformPillars,
  homepageProofStories,
  proofMetrics,
} from "@/content/site";
import type {
  CTA,
  Division,
  IndustryCard,
  MarketingPage,
  OutcomeCard,
  ProcessStep,
  ServicePillar,
} from "@/content/types";
import { ContactForm } from "./ContactForm";
import { FAQAccordion } from "./FAQAccordion";
import { BrandLogo } from "./BrandLogo";
import { ProjectQuoteEstimator } from "./ProjectQuoteEstimator";
import { RecruitmentIntelligenceMap } from "./RecruitmentIntelligenceMap";

function ButtonLink({ cta }: { cta: CTA }) {
  const className =
    cta.variant === "secondary"
      ? "button button-secondary"
      : cta.variant === "text"
        ? "text-link"
        : "button button-primary";

  return (
    <Link className={className} href={cta.href}>
      {cta.label}
    </Link>
  );
}

export function PrecisionHome() {
  return (
    <>
      <PrecisionHero />
      <ClientSignalStrip />
      <HomepageConsoleShowcase />
      <PlatformOperatingSystem />
      <CapabilityArchitecture />
      <HomepageProofStories />
      <AISystemsStack />
      <SystemsCTA />
    </>
  );
}

function PrecisionHero() {
  const heroChips = [
    "AI systems",
    "Workflow design",
    "Automation",
    "Embedded teams",
    "Training",
    "Governance",
  ];

  return (
    <section className="precision-hero platform-home-hero">
      <div className="precision-hero-shell">
        <div className="precision-hero-copy reveal">
          <p className="eyebrow hero-premium-badge">AI operating partner</p>
          <h1>Build AI systems teams can actually run.</h1>
          <p>
            Ignitz designs the workflow, product layer, automation, and training around the way
            enterprise teams really operate.
          </p>
          <div className="hero-actions" aria-label="Homepage actions">
            <Link className="button button-primary" href="/contact">
              Start a build
            </Link>
            <Link className="button button-secondary" href="#capability-architecture">
              See the operating model
            </Link>
          </div>
          <ul className="hero-signal-list" aria-label="Ignitz consulting capabilities">
            {heroChips.map((signal) => (
              <li className="hero-signal" key={signal}>
                {signal}
              </li>
            ))}
          </ul>
        </div>
        <div className="precision-hero-visual" aria-label="Ignitz operating system visual">
          <Image
            alt="Ignitz operating system visual"
            className="hero-visual-image"
            height={720}
            priority
            src="/brand/ignitz-hero-visual.svg"
            width={960}
          />
          <div className="hero-visual-caption">
            <span>Operating model</span>
            <strong>Signal, review, and transfer stay connected.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageConsoleShowcase() {
  return (
    <section className="homepage-console-showcase" aria-labelledby="homepage-console-title">
      <div className="console-showcase-copy">
        <p className="eyebrow">Platform preview</p>
        <h2 id="homepage-console-title">The operating board explains the system after the promise.</h2>
        <p>
          First we make the value clear. Then the preview shows how Ignitz turns workflow
          context, AI action, review, stack, and outcomes into one running system.
        </p>
      </div>
      <HeroOperatingBoard />
    </section>
  );
}

function HeroOperatingBoard() {
  const navItems = ["Intake", "Context", "Agents", "Review", "Memory"];
  const tasks = [
    { label: "Workflow brief", status: "Synced" },
    { label: "Action agent", status: "Running" },
    { label: "Human review", status: "Queued" },
  ];
  const integrations = ["Docs", "CRM", "API", "Email"];
  const outcomeRows = [
    { label: "Cycle time", value: "-32%" },
    { label: "Handoff path", value: "Mapped" },
    { label: "Operating memory", value: "Ready" },
  ];

  return (
    <aside className="hero-operating-board hero-product-platform" aria-label="Ignitz AI product console preview">
      <div className="product-console-sidebar">
        <span>Ignitz</span>
        {navItems.map((item, index) => (
          <b className={index === 2 ? "is-active" : undefined} key={item}>
            {item}
          </b>
        ))}
      </div>
      <div className="product-console-main">
        <div className="product-console-topline">
          <div>
            <span>Active AI system</span>
            <strong>Workflow Operations Workspace</strong>
          </div>
          <small>Live</small>
        </div>
        <div className="product-console-grid">
          <section className="console-workflow-card" aria-label="Workflow state">
            <span>Workflow</span>
            <h3>Role intake to candidate shortlist</h3>
            <div className="workflow-path" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
          </section>
          <section className="console-task-list" aria-label="AI system tasks">
            {tasks.map((task) => (
              <article key={task.label}>
                <span>{task.label}</span>
                <strong>{task.status}</strong>
              </article>
            ))}
          </section>
          <section className="console-policy-card" aria-label="Review and policy">
            <span>Review policy</span>
            <strong>Human review before release</strong>
            <p>Owners, context, exceptions, and decisions stay attached to the workflow state.</p>
          </section>
          <section className="console-integrations" aria-label="Connected platforms">
            <span>Connected stack</span>
            <div>
              {integrations.map((item) => (
                <b key={item}>{item}</b>
              ))}
            </div>
          </section>
          <section className="console-outcomes" aria-label="Operating outcomes">
            {outcomeRows.map((row) => (
              <article key={row.label}>
                <span>{row.label}</span>
                <strong>{row.value}</strong>
              </article>
            ))}
          </section>
        </div>
      </div>
    </aside>
  );
}

function PlatformOperatingSystem() {
  return (
    <section className="homepage-platform-system" id="capability-architecture">
      <div className="platform-system-copy">
        <p className="eyebrow">Ignitz platform</p>
        <h2>One AI operating layer for work, product, and capability.</h2>
        <p>
          Ignitz turns scattered workflows, data sources, AI actions, approvals, and
          training memory into production systems your team can keep running.
        </p>
      </div>
      <div className="platform-system-stage" aria-label="Ignitz platform operating system">
        <div className="platform-system-panel">
          <span>Live system model</span>
          <strong>Workflow → AI product → operating memory</strong>
          <p>Every engagement is shaped as a system your team can inspect, use, and keep improving.</p>
        </div>
        <div className="platform-pillar-grid">
          {homepagePlatformPillars.map((pillar) => (
            <article className={`platform-pillar pillar-${pillar.accent}`} key={pillar.title}>
              <span>{pillar.eyebrow}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.summary}</p>
              <small>{pillar.signal}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageProofStories() {
  return (
    <section className="homepage-proof-stories">
      <div className="proof-stories-heading">
        <p className="eyebrow">Proof patterns</p>
        <h2>Built like customer stories, editable until real approvals arrive.</h2>
        <p>
          Enterprise names stay as draft signals until approved. The proof pattern is ready
          for real customers, product launches, and measurable delivery outcomes.
        </p>
      </div>
      <div className="proof-story-grid">
        {homepageProofStories.map((story) => (
          <Link className={`proof-story-card story-${story.accent}`} href={story.href} key={story.title}>
            <span>{story.label}</span>
            <h3>{story.title}</h3>
            <p>{story.summary}</p>
            <small>{story.meta}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CapabilityArchitecture() {
  return (
    <section className="precision-section capability-architecture" id="system-map">
      <div className="precision-section-heading">
        <p className="eyebrow">Capability architecture</p>
        <h2>Ignitz connects strategy, data, AI systems, operations, and learning memory.</h2>
        <p>
          The work is not a service catalog. It is an operating system for building
          practical intelligence into business workflows.
        </p>
      </div>
      <div className="capability-map" aria-label="Capability architecture nodes">
        {capabilityNodes.map((node) => (
          <article className={`capability-node node-${node.accent}`} key={node.title}>
            <span>{node.label}</span>
            <h3>{node.title}</h3>
            <p>{node.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AISystemsStack() {
  return (
    <section className="precision-section ai-stack-section ai-architecture-board">
      <div className="stack-shell">
        <div className="stack-intro">
          <p className="eyebrow">Platform architecture</p>
          <h2>The layers behind every Ignitz AI system.</h2>
          <p>
            The platform is intentionally practical: data, agents, automation, admin control,
            memory, and talent capacity arranged around real workflows.
          </p>
        </div>
        <RecruitmentIntelligenceMap />
        <div className="stack-list stack-layer-grid">
          {aiSystemsStack.map((item) => (
            <article className={`stack-item stack-${item.accent}`} key={item.title}>
              <span>{item.layer}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
              <small>{item.signal}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemsCTA() {
  const ctaSignals = ["Map the workflow", "Design the graph", "Ship the system"];

  return (
    <section className="systems-cta systems-conversion-panel">
      <div className="systems-cta-copy">
        <p className="eyebrow">Build an AI system with Ignitz</p>
        <h2>Bring the workflow, product idea, learning gap, or operational problem.</h2>
        <p>
          Ignitz will help turn it into a practical system: scoped, built, operated,
          learned from, and improved over time.
        </p>
        <div className="systems-cta-actions">
          <Link className="button button-primary" href="/contact">
            Start the conversation
          </Link>
          <Link className="button button-secondary" href="/labs">
            Explore the platform
          </Link>
        </div>
      </div>
      <aside className="systems-cta-panel" aria-label="Ignitz briefing preview">
        <span>Briefing path</span>
        <strong>Discover → Build → Run</strong>
        <form action="/contact">
          <label htmlFor="systems-cta-email">Work email</label>
          <div>
            <input id="systems-cta-email" name="workEmail" placeholder="you@company.com" type="email" />
            <button type="submit">Request briefing</button>
          </div>
        </form>
        <div className="systems-cta-signals">
          {ctaSignals.map((signal, index) => (
            <article key={signal}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <b>{signal}</b>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}

export function Hero({ page, home = false }: { page: MarketingPage; home?: boolean }) {
  return (
    <section className={home ? "hero hero-home" : "hero hero-interior"}>
      <div className="hero-inner">
        <div className="hero-copy reveal">
          {page.hero.eyebrow ? <p className="eyebrow">{page.hero.eyebrow}</p> : null}
          <h1>{page.hero.title}</h1>
          <p className="hero-lead">{page.hero.lead}</p>
          <div className="hero-actions">
            <ButtonLink cta={page.hero.primaryCta} />
            {page.hero.secondaryCta ? (
              <ButtonLink cta={{ ...page.hero.secondaryCta, variant: "secondary" }} />
            ) : null}
          </div>
        </div>
        {home ? <SystemsMap /> : <HeroPlatformPanel page={page} />}
      </div>
      {!home ? <ClientSignalStrip /> : null}
      {!home ? <InteriorStoryBand page={page} /> : null}
    </section>
  );
}

function InteriorStoryBand({ page }: { page: MarketingPage }) {
  const storyItems = [
    { label: "Discover", body: "Map the workflow, data, users, and operating constraint behind the page." },
    { label: "Build", body: "Turn the context into an AI product surface, automation layer, or vertical system." },
    { label: "Run", body: "Transfer the method so the team can operate and improve the system after launch." },
  ];

  return (
    <div className="interior-story-band" aria-label={`${page.hero.eyebrow ?? page.title} operating model`}>
      {storyItems.map((item) => (
        <article key={item.label}>
          <span>{item.label}</span>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function HeroPlatformPanel({ page }: { page: MarketingPage }) {
  const activeDivision =
    divisions.find((division) => division.href === page.slug) ??
    divisions.find((division) => page.slug.includes(division.accent)) ??
    divisions[0];

  return (
    <aside className={`hero-platform-panel accent-${activeDivision.accent}`} aria-label="Ignitz platform preview">
      <div className="platform-panel-topline">
        <span>Ignitz platform</span>
        <strong>{activeDivision.shortName}</strong>
      </div>
      <div className="platform-visual-card">
        <span className="platform-node platform-node-core">Ignitz</span>
        <span className="platform-node platform-node-labs">Labs</span>
        <span className="platform-node platform-node-business">Systems</span>
        <span className="platform-node platform-node-health">Health</span>
        <div className="platform-orbit platform-orbit-one" aria-hidden="true" />
        <div className="platform-orbit platform-orbit-two" aria-hidden="true" />
      </div>
      <div className="platform-panel-metrics">
        <article>
          <span>Stack</span>
          <strong>AI / Data / Ops</strong>
        </article>
        <article>
          <span>Mode</span>
          <strong>Build + transfer</strong>
        </article>
      </div>
      <p>{activeDivision.proofLine}</p>
    </aside>
  );
}

function ClientSignalStrip() {
  const logoSignals = companySignals.filter((signal) => signal.status !== "placeholder");

  return (
    <div className="client-signal-strip" aria-label="Ignitz ecosystem and platform signal strip">
      <div className="client-signal-heading">
        <span className="client-signal-label">Ecosystem, platform, and enterprise signals</span>
        <p>Approved platform references and buyer contexts, presented as a clean proof rail rather than a logo wall.</p>
      </div>
      <div className="client-signal-track">
        {logoSignals.map((signal) => {
          return (
            <article className={`client-signal-tile signal-${signal.status}`} key={`${signal.category}-${signal.label}`}>
              <span>{signal.category}</span>
              <strong>{signal.label}</strong>
              <p>{signal.publicNote}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function SystemsMap() {
  return (
    <div className="systems-map" aria-label="Ignitz division map">
      <div className="map-core">
        <span>Ignitz operating model</span>
        <strong>Products / Operations / Health</strong>
      </div>
      {divisions.map((division, index) => (
        <Link
          className={`map-division map-${division.accent}`}
          href={division.href}
          key={division.name}
          style={{ ["--map-index" as string]: index }}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{division.name}</strong>
          <small>{division.positioning}</small>
        </Link>
      ))}
    </div>
  );
}

export function ProofBand() {
  return (
    <section className="proof-band" aria-label="Ignitz proof points">
      <p>Operating signals</p>
      <div>
        {proofMetrics.map((metric) => (
          <article key={metric.label}>
            <span>{metric.kicker}</span>
            <strong>{metric.value}</strong>
            <small>{metric.label}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DivisionLanes({ items = divisions }: { items?: Division[] }) {
  return (
    <section className="platform-division-system" id="divisions">
      <div className="platform-section-intro">
        <p className="eyebrow">Company architecture</p>
        <h2>Three operating nodes. One company intelligence layer.</h2>
        <p>Ignitz is structured as a product lab, an operations systems unit, and a focused healthcare vertical.</p>
      </div>
      <div className="division-system-grid">
        {items.map((item, index) => (
          <article className={`division-system-card accent-${item.accent}`} key={item.name}>
            <div className="division-number">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <p className="kicker">{item.shortName}</p>
              <h3>{item.name}</h3>
              <p>{item.positioning}</p>
            </div>
            <ul>
              {item.includedCapabilities.slice(0, 4).map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
            <div className="division-actions">
              {item.relatedLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CapabilityIndex({ items = divisions }: { items?: Division[] }) {
  return (
    <section className="platform-capability-index">
      <div className="platform-section-intro compact">
        <p className="eyebrow">What Ignitz builds</p>
        <h2>Products, systems, and vertical applications that carry intelligence into daily work.</h2>
        <p>Each route connects back to the same data, AI, operations, and capability transfer model.</p>
      </div>
      <div className="capability-route-list">
        {items.map((item) => (
          <Link className={`capability-route accent-${item.accent}`} href={item.href} key={item.name}>
            <span>{item.shortName}</span>
            <strong>{item.proofLine}</strong>
            <small>{item.includedCapabilities.slice(0, 3).join(" / ")}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function PillarEditorial({ items }: { items: ServicePillar[] }) {
  return (
    <section className="platform-offer-matrix" id="pillars">
      <div className="platform-section-intro">
        <p className="eyebrow">Platform routes</p>
        <h2>One operating model, three ways to enter the Ignitz system.</h2>
        <p>
          Training, AI product development, and embedded teams are designed as connected
          routes through the same build-and-transfer engine.
        </p>
      </div>
      <div className="platform-route-grid">
        {items.map((item) => (
          <Link
            className={`platform-route-card theme-${item.sectionTheme ?? "steel"}`}
            href={item.href}
            key={item.title}
          >
            <div className="route-card-top">
              <span className="kicker">{item.kicker}</span>
              <small>{item.visualLabel}</small>
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </div>
            <div className="route-card-proof">
              <strong>{item.stat}</strong>
              <span>{item.proof}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function OutcomeProof({ items }: { items: OutcomeCard[] }) {
  return (
    <section className="platform-outcome-ledger">
      <div className="platform-section-intro compact">
        <p className="eyebrow">Outcome ledger</p>
        <h2>Proof is treated as an operating artifact, not a slide afterthought.</h2>
        <p>Every engagement needs visible evidence: timing, confidence, owner clarity, and transfer.</p>
      </div>
      <div className="ledger-grid">
        {items.map((item) => (
          <article className="ledger-card" key={item.title}>
            <strong>{item.metric}</strong>
            <div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function StickyProcess({ items }: { items: ProcessStep[] }) {
  return (
    <section className="platform-process-rail">
      <div className="platform-process-copy">
        <p className="eyebrow">How Ignitz works</p>
        <h2>Diagnose the work, build the system, then leave capability behind.</h2>
        <p>
          The workflow is intentionally tight: context first, scoped build next,
          operating transfer always included.
        </p>
      </div>
      <div className="process-rail">
        {items.map((item, index) => (
          <article className="process-node" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <small>{item.kicker}</small>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function IndustryIndex({ items }: { items: IndustryCard[] }) {
  return (
    <section className="platform-usecase-cloud">
      <div className="platform-section-intro">
        <p className="eyebrow">Use-case field</p>
        <h2>Built for operating teams with different proof, governance, and data realities.</h2>
        <p>Each segment can become a deeper landing page as approved proof and examples mature.</p>
      </div>
      <div className="usecase-cloud">
        {items.map((item) => (
          <article className="usecase-token" key={item.title}>
            <span>{item.visualLabel}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyGrid() {
  return (
    <section className="platform-proof-room">
      <div className="platform-section-intro compact">
        <p className="eyebrow">Proof room</p>
        <h2>Customer stories organized by challenge, system path, and measurable shift.</h2>
        <p>Each proof card is shaped for the operating detail a buyer needs before starting a build.</p>
      </div>
      <div className="proof-room-grid">
        {caseStudies.map((item) => (
          <article className="proof-room-card" key={item.title}>
            <strong>{item.metric}</strong>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <div className="tag-row">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FAQSection({ page }: { page: MarketingPage }) {
  if (!page.sections.faqs?.length) return null;

  return (
    <section className="platform-faq-section">
      <div className="platform-section-intro compact">
        <p className="eyebrow">FAQ</p>
        <h2>Short answers for the first buyer conversation.</h2>
        <p>This section should remove friction before a workshop or project call.</p>
      </div>
      <FAQAccordion items={page.sections.faqs} />
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="platform-contact-section">
      <div className="contact-command-panel">
        <p className="eyebrow">Start here</p>
        <h2>Route the right Ignitz team into the conversation.</h2>
        <p>
          Keep the first inquiry short. We will map it to Labs, Business Systems,
          Health, training, or embedded delivery after the right lead has context.
        </p>
        <div className="contact-channels">
          {contactChannels.map((channel) => (
            <a href={channel.href} key={channel.label}>
              <span>{channel.label}</span>
              <strong>{channel.value}</strong>
            </a>
          ))}
        </div>
      </div>
      <ContactForm />
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="platform-final-cta">
      <div>
        <p className="eyebrow">Build with Ignitz</p>
        <h2>Bring the product, workflow, or healthcare system that needs intelligence.</h2>
        <p>
          We will route the conversation to Labs, Business Systems, or Health and
          shape the next concrete build path.
        </p>
      </div>
      <Link className="button button-primary" href="/contact">
        Contact the team
      </Link>
    </section>
  );
}

export function Footer() {
  const footerSignals = ["Systems", "Operations", "Healthcare", "Builder pipeline"];
  const footerGroups = [
    {
      label: "Platform",
      links: [
        { href: "/labs", label: "Ignitz Labs" },
        { href: "/business-systems", label: "Business Systems" },
        { href: "/health", label: "Ignitz Health" },
      ],
    },
    {
      label: "Products",
      links: [
        { href: "/ai-products", label: "Products" },
        { href: "/incubator", label: "Incubator" },
        { href: "/hackathons", label: "Hackathons" },
      ],
    },
    {
      label: "Services",
      links: [
        { href: "/training", label: "Training" },
        { href: "/ai-product-development", label: "Product development" },
        { href: "/expert-teams", label: "Expert teams" },
      ],
    },
    {
      label: "Resources",
      links: [
        { href: "/blogs", label: "Field notes" },
        { href: "/case-studies", label: "Case studies" },
        { href: "/interns", label: "Interns" },
      ],
    },
    {
      label: "Company",
      links: [
        { href: "/team", label: "Team" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact" },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-gradient-shell">
        <div className="footer-platform-panel">
          <div className="footer-brand-block">
            <Link className="footer-brand" href="/" aria-label="Ignitz home">
              <BrandLogo className="footer-logo" />
            </Link>
            <p className="footer-kicker">Ignitz Solutions</p>
            <h2>We solve complex work globally.</h2>
            <p>
              Products, operations, healthcare workflows, and training programs,
              built into systems teams can run.
            </p>
            <div className="footer-signal-row" aria-label="Ignitz platform signals">
              {footerSignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </div>
          <div className="footer-action-panel" aria-label="Quote estimator">
            <ProjectQuoteEstimator />
          </div>
        </div>

        <div className="footer-link-groups">
          {footerGroups.map((group) => (
            <nav aria-label={`Footer ${group.label}`} key={group.label}>
              <h3>{group.label}</h3>
              {group.links.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
          <nav aria-label="Footer legal">
            <h3>Legal</h3>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/accessibility">Accessibility</Link>
          </nav>
        </div>

        <div className="footer-mega-word" aria-hidden="true">Ignitz Solutions</div>

      </div>
    </footer>
  );
}
