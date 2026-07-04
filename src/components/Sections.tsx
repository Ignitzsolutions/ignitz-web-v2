import Link from "next/link";
import Image from "next/image";
import {
  caseStudies,
  contactChannels,
  divisions,
  homepagePlatformPillars,
  homepageLogos,
  proofMetrics,
  process as processSteps,
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
      <HomepageLogoRail />
      <PlatformOperatingSystem />
      <HomepageTrustBand />
      <FinalCTA />
    </>
  );
}

function PrecisionHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero-inner">
        <p className="eyebrow">AI SaaS for modern teams</p>
        <h1 id="home-hero-title">Build the AI layer your team can actually run.</h1>
        <p className="home-hero-lead">
          Ignitz designs product surfaces, workflow automation, and operating memory for
          teams that need simple, credible, production-ready AI software.
        </p>
        <div className="hero-actions home-hero-actions" aria-label="Homepage actions">
          <Link className="button button-primary" href="/contact">
            Start a build
          </Link>
          <Link className="button button-secondary" href="#operating-model">
            See the operating model
          </Link>
        </div>
        <p className="home-hero-note">Strategy / product / automation / transfer</p>
      </div>
    </section>
  );
}

function HomepageLogoRail() {
  return (
    <section className="home-logo-rail" aria-labelledby="home-logo-rail-title">
      <div className="home-section-intro">
        <p className="eyebrow">Ecosystem signals</p>
        <h2 id="home-logo-rail-title">Built on the platforms teams already trust.</h2>
        <p>
          Local SVG marks keep the page fast and consistent while still showing the AI and
          infrastructure ecosystem the company works inside.
        </p>
      </div>
      <div className="home-logo-grid" aria-label="Homepage ecosystem logos">
        {homepageLogos.map((logo) => (
          <figure className="home-logo-card" key={logo.label}>
            <Image alt={logo.label} height={logo.height} src={logo.src} width={logo.width} />
          </figure>
        ))}
      </div>
    </section>
  );
}

function PlatformOperatingSystem() {
  return (
    <section className="home-system" id="operating-model">
      <div className="home-section-intro">
        <p className="eyebrow">Operating model</p>
        <h2>One system for strategy, delivery, and transfer.</h2>
        <p>
          Ignitz keeps the build simple: find the workflow, shape the AI surface, and
          leave the team with something they can run without us.
        </p>
      </div>
      <div className="home-system-grid">
        {homepagePlatformPillars.map((pillar, index) => (
          <article className={`home-system-card pillar-${pillar.accent}`} key={pillar.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.summary}</p>
            <small>{pillar.signal}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function HomepageTrustBand() {
  const processItems: ProcessStep[] = processSteps.slice(0, 3);

  return (
    <section className="home-trust-band">
      <div className="home-section-intro">
        <p className="eyebrow">How we work</p>
        <h2>Small surface area. Clear delivery path.</h2>
        <p>
          Discovery first. Build second. Transfer always. The process stays visible so the
          page reads like a credible product company, not a speculative deck.
        </p>
      </div>
      <div className="home-process-grid">
        {processItems.map((item, index) => (
          <article className="home-process-card" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
      <div className="home-proof-band" aria-label="Ignitz proof metrics">
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
  return (
    <div className="client-signal-strip" aria-label="Ignitz ecosystem and platform signal strip">
      <div className="client-signal-heading">
        <span className="client-signal-label">Ecosystem signals</span>
        <p>Local SVG marks for the AI and cloud platforms that sit around the Ignitz stack.</p>
      </div>
      <div className="client-signal-track">
        {homepageLogos.map((logo) => (
          <article className="client-signal-tile signal-reference" key={logo.label}>
            <Image alt={logo.label} height={logo.height} src={logo.src} width={logo.width} />
          </article>
        ))}
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
