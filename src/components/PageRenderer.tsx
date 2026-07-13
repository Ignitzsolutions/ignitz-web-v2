import { insights } from "@/content/site";
import type { MarketingPage } from "@/content/types";
import {
  CaseStudyGrid,
  ContactSection,
  FAQSection,
  Hero,
  IndustryIndex,
  OutcomeProof,
  PillarEditorial,
  PrecisionHome,
  StickyProcess,
} from "./Sections";

export function PageRenderer({
  page,
  home = false,
  contact = false,
  caseStudies = false,
  insightList = false,
}: {
  page: MarketingPage;
  home?: boolean;
  contact?: boolean;
  caseStudies?: boolean;
  insightList?: boolean;
}) {
  if (home) {
    return (
      <main>
        <PrecisionHome />
      </main>
    );
  }

  return (
    <main>
      <Hero page={page} home={home} />
      {page.sections.intro ? (
        <section className="platform-intro-ribbon" aria-label={`${page.hero.eyebrow ?? page.title} brief`}>
          <span>Platform brief</span>
          <p>{page.sections.intro}</p>
          <strong>{page.hero.lead}</strong>
        </section>
      ) : null}
      {!home && page.sections.pillars ? <PillarEditorial items={page.sections.pillars} /> : null}
      {!home && page.sections.outcomes ? <OutcomeProof items={page.sections.outcomes} /> : null}
      {caseStudies ? <CaseStudyGrid /> : null}
      {insightList ? <InsightsGrid /> : null}
      {!home && page.sections.process ? <StickyProcess items={page.sections.process} /> : null}
      {!home && page.sections.industries ? <IndustryIndex items={page.sections.industries} /> : null}
      {contact ? <ContactSection /> : null}
      {!home ? <FAQSection page={page} /> : null}
    </main>
  );
}

function InsightsGrid() {
  return (
    <section className="platform-insight-room">
      <div className="platform-section-intro compact">
        <p className="eyebrow">Insights</p>
        <h2>Perspectives on AI delivery and corporate learning.</h2>
        <p>Article pages, downloadable briefs, and SEO topic clusters can grow from this room.</p>
      </div>
      <div className="insight-room-grid">
        {insights.map((item) => (
          <article className="insight-room-card" key={item.title}>
            <span>{item.topic}</span>
            <h3>{item.title}</h3>
            <time dateTime={item.date}>{item.date}</time>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
