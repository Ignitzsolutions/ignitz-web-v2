import { insights } from "@/content/site";
import type { MarketingPage } from "@/content/types";
import {
  CaseStudyGrid,
  ContactSection,
  FAQSection,
  FinalCTA,
  Hero,
  IndustryIndex,
  OutcomeProof,
  PillarEditorial,
  PrecisionHome,
  SectionHeading,
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
        <section className="intro-section">
          <p>{page.sections.intro}</p>
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
      <FinalCTA />
    </main>
  );
}

function InsightsGrid() {
  return (
    <section className="section">
      <SectionHeading
        eyebrow="Insights"
        title="Perspectives on AI delivery and corporate learning."
        lead="Use these cards as the launch structure for article pages, downloadable briefs, and SEO topic clusters."
      />
      <div className="insight-grid">
        {insights.map((item) => (
          <article className="insight-card" key={item.title}>
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
