import Link from "next/link";
import { caseStudies, contactChannels, divisions, proofMetrics, site } from "@/content/site";
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
        {home ? <SystemsMap /> : null}
      </div>
    </section>
  );
}

function SystemsMap() {
  return (
    <div className="systems-map" aria-label="Ignitz division map">
      <div className="map-core">
        <span>Parent layer</span>
        <strong>Ignitz</strong>
        <small>AI systems company</small>
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
    <section className="section division-lanes" id="divisions">
      <SectionHeading
        eyebrow="Company architecture"
        title="Three divisions. One AI systems company."
        lead="The structure gives Ignitz product credibility, consulting flexibility, healthcare focus, and room to scale into separate teams later."
      />
      <div className="division-lane-list">
        {items.map((item, index) => (
          <article className={`division-lane accent-${item.accent}`} key={item.name}>
            <div className="division-number">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <p className="kicker">{item.shortName}</p>
              <h3>{item.name}</h3>
              <p>{item.positioning}</p>
            </div>
            <ul>
              {item.includedCapabilities.map((capability) => (
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
    <section className="section capability-index">
      <div className="index-intro">
        <p className="eyebrow">What Ignitz builds</p>
        <h2>Products, systems, and vertical applications that carry intelligence into daily work.</h2>
      </div>
      <div className="index-rows">
        {items.map((item) => (
          <Link className={`index-row accent-${item.accent}`} href={item.href} key={item.name}>
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
    <section className="section pillars-editorial" id="pillars">
      <SectionHeading
        eyebrow="Three ways to engage"
        title="One partner for learning, product delivery, and execution capacity."
        lead="Each offer is distinct, but the operating model is integrated: improve the team while the work moves."
      />
      <div className="pillar-editorial-list">
        {items.map((item) => (
          <Link
            className={`pillar-editorial-item theme-${item.sectionTheme ?? "steel"}`}
            href={item.href}
            key={item.title}
          >
            <div>
              <span className="kicker">{item.kicker}</span>
              <h3>{item.title}</h3>
            </div>
            <p>{item.summary}</p>
            <div className="pillar-mark" aria-hidden="true">
              <span>{item.visualLabel}</span>
              <strong>{item.stat}</strong>
            </div>
            <small>{item.proof}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function OutcomeProof({ items }: { items: OutcomeCard[] }) {
  return (
    <section className="section outcome-proof">
      <SectionHeading
        eyebrow="Outcome proof"
        title="Evidence should be readable before the meeting starts."
        lead="The design treats proof as the product: large numbers, short claims, and no decorative noise."
      />
      <div className="outcome-grid">
        {items.map((item) => (
          <article className="outcome-card" key={item.title}>
            <strong>{item.metric}</strong>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function StickyProcess({ items }: { items: ProcessStep[] }) {
  return (
    <section className="section process-story">
      <div className="process-sticky">
        <p className="eyebrow">How Ignitz works</p>
        <h2>Diagnose the work. Build the capability. Transfer the method.</h2>
      </div>
      <div className="process-steps">
        {items.map((item, index) => (
          <article className="process-step" key={item.title}>
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
    <section className="section industry-index">
      <SectionHeading
        eyebrow="Use-case index"
        title="Designed for complex teams, not generic transformation copy."
        lead="Each segment can become a deeper landing page once proof and approved examples are available."
      />
      <div className="industry-list">
        {items.map((item) => (
          <article className="industry-row" key={item.title}>
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
    <section className="section case-study-grid">
      <SectionHeading
        eyebrow="Client outcomes"
        title="A clean structure for approved customer proof."
        lead="These cards are ready for challenge, approach, result, metric, and testimonial content when permissions are complete."
      />
      <div className="outcome-grid">
        {caseStudies.map((item) => (
          <article className="outcome-card" key={item.title}>
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
    <section className="section faq-section">
      <SectionHeading
        eyebrow="FAQ"
        title="Short answers for the first buyer conversation."
        lead="This section should remove friction before a workshop or project call."
      />
      <FAQAccordion items={page.sections.faqs} />
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section contact-section">
      <div>
        <p className="eyebrow">Start here</p>
        <h2>Tell Ignitz what you need to train, build, or staff.</h2>
        <p>
          Keep the first inquiry short. Routing and qualification can happen
          after the right lead has context.
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
    <section className="final-cta">
      <p className="eyebrow">Build with Ignitz</p>
      <h2>Bring the product, workflow, or healthcare system that needs intelligence.</h2>
      <p>
        We will route the conversation to Labs, Business Systems, or Health and
        shape the next concrete build path.
      </p>
      <Link className="button button-primary" href="/contact">
        Contact the team
      </Link>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-block">
        <Link className="footer-brand" href="/" aria-label="Ignitz home">
          <BrandLogo className="footer-logo" />
        </Link>
        <p>{site.description}</p>
        <div className="footer-contact">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href="tel:+919392796918">{site.phone}</a>
          <span>Hyderabad, India</span>
        </div>
      </div>
      <div className="footer-link-groups">
        <nav aria-label="Footer services">
          <h3>Divisions</h3>
          <Link href="/labs">Ignitz Labs</Link>
          <Link href="/business-systems">Business Systems</Link>
          <Link href="/health">Ignitz Health</Link>
        </nav>
        <nav aria-label="Footer products">
          <h3>Labs</h3>
          <Link href="/ai-products">AI products</Link>
          <Link href="/incubator">Incubator</Link>
          <Link href="/hackathons">Hackathons</Link>
        </nav>
        <nav aria-label="Footer services">
          <h3>Services</h3>
          <Link href="/training">Training</Link>
          <Link href="/ai-product-development">AI product development</Link>
          <Link href="/expert-teams">Expert teams</Link>
        </nav>
        <nav aria-label="Footer company">
          <h3>Company</h3>
          <Link href="/blogs">Blogs</Link>
          <Link href="/team">Team</Link>
          <Link href="/interns">Interns</Link>
        </nav>
        <nav aria-label="Footer legal">
          <h3>Legal</h3>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/accessibility">Accessibility</Link>
        </nav>
      </div>
      <p className="footer-line">Engineering intelligent systems from Hyderabad.</p>
    </footer>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{lead}</p>
    </div>
  );
}
