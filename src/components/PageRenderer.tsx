import { insights } from "@/content/site";
import type { MarketingPage } from "@/content/types";
import type {
  AIProduct,
  BlogPost,
  Hackathon,
  IncubatedProject,
  Intern,
  TeamMember,
} from "@/content/dynamic/types";
import {
  AIProductsShowcase,
  BlogPreview,
  HackathonPreview,
  IncubatorPreview,
  PeoplePreview,
} from "./DynamicContent";
import {
  CaseStudyGrid,
  CapabilityIndex,
  ContactSection,
  DivisionLanes,
  FAQSection,
  FinalCTA,
  Hero,
  IndustryIndex,
  OutcomeProof,
  PillarEditorial,
  ProofBand,
  SectionHeading,
  StickyProcess,
} from "./Sections";

export function PageRenderer({
  page,
  home = false,
  contact = false,
  caseStudies = false,
  insightList = false,
  dynamicContent,
}: {
  page: MarketingPage;
  home?: boolean;
  contact?: boolean;
  caseStudies?: boolean;
  insightList?: boolean;
  dynamicContent?: {
    products: AIProduct[];
    projects: IncubatedProject[];
    hackathons: Hackathon[];
    posts: BlogPost[];
    team: TeamMember[];
    interns: Intern[];
  };
}) {
  return (
    <main>
      <Hero page={page} home={home} />
      {home ? <ProofBand /> : null}
      {home ? (
        <>
          <DivisionLanes />
          <CapabilityIndex />
        </>
      ) : null}
      {home && dynamicContent ? (
        <>
          <AIProductsShowcase products={dynamicContent.products} />
          <IncubatorPreview projects={dynamicContent.projects} />
          <HackathonPreview hackathons={dynamicContent.hackathons} />
          <BlogPreview posts={dynamicContent.posts} />
          <PeoplePreview team={dynamicContent.team} interns={dynamicContent.interns} />
        </>
      ) : null}
      {page.sections.intro ? (
        <section className="intro-section">
          <p>{page.sections.intro}</p>
        </section>
      ) : null}
      {!home && page.sections.pillars ? <PillarEditorial items={page.sections.pillars} /> : null}
      {page.sections.outcomes ? <OutcomeProof items={page.sections.outcomes} /> : null}
      {caseStudies ? <CaseStudyGrid /> : null}
      {insightList ? <InsightsGrid /> : null}
      {page.sections.process ? <StickyProcess items={page.sections.process} /> : null}
      {page.sections.industries ? <IndustryIndex items={page.sections.industries} /> : null}
      {contact ? <ContactSection /> : null}
      <FAQSection page={page} />
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
