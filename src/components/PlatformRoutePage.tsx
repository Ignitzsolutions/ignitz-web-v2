import Link from "next/link";
import type {
  CaseStudyCard,
  FAQItem,
  IndustryCard,
  InsightCard,
  MarketingPage,
  OutcomeCard,
  ProcessStep,
  ServicePillar,
} from "@/content/types";

type RouteSignal = {
  label: string;
  value: string;
  note: string;
};

type RoutePanel = {
  label: string;
  title: string;
  body: string;
  metric?: string;
  meta?: string;
};

type PlatformPanelConsoleProps = {
  label?: string;
  active?: string;
  primary?: string;
  secondary?: string;
  status?: string;
  items?: string[];
};

type PlatformRoutePageProps = {
  page: MarketingPage;
  variant: string;
  panel: RoutePanel;
  signals: RouteSignal[];
  caseStudies?: CaseStudyCard[];
  insights?: InsightCard[];
};

export function PlatformRoutePage({
  page,
  variant,
  panel,
  signals,
  caseStudies,
  insights,
}: PlatformRoutePageProps) {
  return (
    <main className={`platform-route platform-route-${variant}`}>
      <section className="platform-route-hero" aria-labelledby={`${variant}-route-title`}>
        <div className="platform-route-copy">
          {page.hero.eyebrow ? <p className="eyebrow">{page.hero.eyebrow}</p> : null}
          <h1 id={`${variant}-route-title`}>{page.hero.title}</h1>
          <p>{page.hero.lead}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href={page.hero.primaryCta.href}>
              {page.hero.primaryCta.label}
            </Link>
            {page.hero.secondaryCta ? (
              <Link className="button button-secondary" href={page.hero.secondaryCta.href}>
                {page.hero.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>

        <aside className="platform-route-panel" aria-label={`${panel.label} overview`}>
          <span>{panel.label}</span>
          <PlatformPanelConsole label={panel.label} />
          <h2>{panel.title}</h2>
          <p>{panel.body}</p>
          <div className="platform-route-panel-footer">
            <strong>{panel.metric ?? "Operating model"}</strong>
            <small>{panel.meta ?? "Evidence-ready proof system"}</small>
          </div>
        </aside>

        <dl className="platform-route-signals" aria-label={`${page.hero.eyebrow ?? page.title} signals`}>
          {signals.map((signal) => (
            <div key={signal.label}>
              <dt>{signal.label}</dt>
              <dd>{signal.value}</dd>
              <p>{signal.note}</p>
            </div>
          ))}
        </dl>
      </section>

      {page.sections.intro ? (
        <section className="platform-route-story" aria-label="Route context">
          <p>{page.sections.intro}</p>
        </section>
      ) : null}

      {page.sections.pillars ? <PillarSection items={page.sections.pillars} /> : null}
      {page.sections.outcomes ? <OutcomeSection items={page.sections.outcomes} /> : null}
      {page.sections.process ? <ProcessSection items={page.sections.process} /> : null}
      {page.sections.industries ? <IndustrySection items={page.sections.industries} /> : null}
      {caseStudies ? <CaseStudySection items={caseStudies} /> : null}
      {insights ? <InsightSection items={insights} /> : null}
      {page.sections.faqs ? <FAQSection items={page.sections.faqs} /> : null}
    </main>
  );
}

export function PlatformPanelConsole({
  label = "Ignitz system",
  active = "AI system",
  primary = "Workflow intake",
  secondary = "Review memory",
  status = "Ready",
  items = ["Data", "Agent", "Review", "Transfer"],
}: PlatformPanelConsoleProps) {
  const selectedItem = items.includes(active) ? active : items.includes("Agent") ? "Agent" : items[0];

  return (
    <div className="platform-panel-console" aria-hidden="true">
      <div className="panel-console-nav">
        {items.map((item) => (
          <i className={item === selectedItem ? "is-active" : undefined} key={item}>
            {item}
          </i>
        ))}
      </div>
      <div className="panel-console-surface">
        <span>{label}</span>
        <strong>{primary}</strong>
        <p>{secondary}</p>
        <b>{status}</b>
      </div>
      <div className="panel-console-ledger">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function PillarSection({ items }: { items: ServicePillar[] }) {
  return (
    <section className="platform-route-section" aria-labelledby="route-pillars-title">
      <div className="platform-route-section-copy">
        <p className="eyebrow">Operating routes</p>
        <h2 id="route-pillars-title">One platform model, different ways to engage.</h2>
        <p>
          Each route connects advisory, AI product work, and embedded execution so
          teams can move from intent to usable systems.
        </p>
      </div>
      <div className="platform-route-card-grid">
        {items.map((item) => (
          <Link className="platform-route-card" href={item.href} key={item.title}>
            <span>{item.kicker ?? item.visualLabel ?? "Route"}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <strong>{item.proof}</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}

function OutcomeSection({ items }: { items: OutcomeCard[] }) {
  return (
    <section className="platform-route-section split" aria-labelledby="route-outcomes-title">
      <div className="platform-route-section-copy">
        <p className="eyebrow">Proof model</p>
        <h2 id="route-outcomes-title">Outcomes stay tied to operating evidence.</h2>
        <p>
          Each outcome is framed around the operating change a team can inspect:
          workflow clarity, system adoption, delivery speed, and capability transfer.
        </p>
      </div>
      <div className="platform-route-ledger">
        {items.map((item) => (
          <article key={item.title}>
            <span>{item.metric}</span>
            <strong>{item.title}</strong>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcessSection({ items }: { items: ProcessStep[] }) {
  return (
    <section className="platform-route-process" aria-labelledby="route-process-title">
      <div className="platform-route-section-copy">
        <p className="eyebrow">Delivery rhythm</p>
        <h2 id="route-process-title">A practical path from first conversation to transfer.</h2>
      </div>
      <ol>
        {items.map((item, index) => (
          <li key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            {item.kicker ? <strong>{item.kicker}</strong> : null}
          </li>
        ))}
      </ol>
    </section>
  );
}

function IndustrySection({ items }: { items: IndustryCard[] }) {
  return (
    <section className="platform-route-section" aria-labelledby="route-industries-title">
      <div className="platform-route-section-copy">
        <p className="eyebrow">Industry fit</p>
        <h2 id="route-industries-title">Different sectors, one systems-first method.</h2>
      </div>
      <div className="platform-route-card-grid compact">
        {items.map((item) => (
          <article className="platform-route-card" key={item.title}>
            <span>{item.visualLabel ?? "Industry"}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseStudySection({ items }: { items: CaseStudyCard[] }) {
  return (
    <section className="platform-route-section" aria-labelledby="route-cases-title">
      <div className="platform-route-section-copy">
        <p className="eyebrow">Case study shelf</p>
        <h2 id="route-cases-title">Proof paths organized around real operating change.</h2>
        <p>
          Case stories are arranged by challenge, system path, measurable shift, and
          the capability a team carries forward.
        </p>
      </div>
      <div className="platform-route-card-grid">
        {items.map((item) => (
          <article className="platform-route-card" key={item.title}>
            <span>{item.metric}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <ul>
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function InsightSection({ items }: { items: InsightCard[] }) {
  return (
    <section className="platform-route-section" aria-labelledby="route-insights-title">
      <div className="platform-route-section-copy">
        <p className="eyebrow">Field notes</p>
        <h2 id="route-insights-title">Practical thinking for teams building with AI.</h2>
      </div>
      <div className="platform-route-card-grid">
        {items.map((item) => (
          <article className="platform-route-card" key={item.title}>
            <span>{item.topic}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <small>{item.date}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <section className="platform-route-faq" aria-labelledby="route-faq-title">
      <div className="platform-route-section-copy">
        <p className="eyebrow">Questions</p>
        <h2 id="route-faq-title">What teams usually ask before starting.</h2>
      </div>
      <div className="platform-route-faq-list">
        {items.map((item) => (
          <article key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
