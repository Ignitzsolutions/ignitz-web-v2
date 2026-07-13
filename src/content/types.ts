export type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "text";
};

export type BrandLogoAsset = {
  label: string;
  src: string;
  width: number;
  height: number;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Division = {
  name: "Ignitz Labs" | "Ignitz Business Solutions" | "Ignitz Health";
  shortName: string;
  href: string;
  positioning: string;
  includedCapabilities: string[];
  proofLine: string;
  accent: "labs" | "business" | "health";
  relatedLinks: CTA[];
};

export type PageHero = {
  eyebrow?: string;
  title: string;
  lead: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
};

export type ProofMetric = {
  value: string;
  label: string;
  kicker?: string;
};

export type ServicePillar = {
  title: string;
  href: string;
  summary: string;
  proof: string;
  kicker?: string;
  visualLabel?: string;
  stat?: string;
  sectionTheme?: "warm" | "blue" | "steel";
};

export type OutcomeCard = {
  metric: string;
  title: string;
  summary: string;
};

export type ProcessStep = {
  title: string;
  summary: string;
  kicker?: string;
};

export type IndustryCard = {
  title: string;
  summary: string;
  visualLabel?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type InsightCard = {
  title: string;
  href: string;
  topic: string;
  date: string;
  summary: string;
};

export type CaseStudyCard = {
  title: string;
  href: string;
  metric: string;
  summary: string;
  tags: string[];
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
};

export type BrandNarrative = {
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  signals: string[];
};

export type KnowledgeGraphNode = {
  id: string;
  label: string;
  group: "core" | "labs" | "business" | "health" | "learning" | "talent";
  summary: string;
  href?: string;
  x: number;
  y: number;
};

export type KnowledgeGraphEdge = {
  from: string;
  to: string;
};

export type CapabilityNode = {
  label: string;
  title: string;
  summary: string;
  accent: "strategy" | "data" | "systems" | "operations" | "memory";
};

export type FlagshipProduct = {
  name: string;
  status: string;
  tagline: string;
  summary: string;
  useCase: string;
  targetUser: string;
  proof: string;
  href: string;
  ctaLabel: string;
  accent: "flagship" | "memory" | "operations" | "community";
};

export type AISystemsStackItem = {
  layer: string;
  title: string;
  summary: string;
  signal: string;
  accent: "data" | "agents" | "automation" | "admin" | "memory" | "talent";
};

export type EngineeringCultureItem = {
  title: string;
  summary: string;
};

export type CommunitySignal = {
  label: string;
  title: string;
  summary: string;
};

export type PlatformProof = {
  label: string;
  value: string;
};

export type RecognitionSignal = {
  label: string;
  value: string;
  summary: string;
  status: "active" | "reference" | "draft";
};

export type HomepagePlatformPillar = {
  eyebrow: string;
  title: string;
  summary: string;
  signal: string;
  href: string;
  accent: "blue" | "orange" | "green" | "navy";
};

export type HomepageProofStory = {
  label: string;
  title: string;
  summary: string;
  meta: string;
  href: string;
  accent: "enterprise" | "product" | "learning";
};

export type CompanySignal =
  | {
      label: string;
      category: "placeholder" | "ecosystem" | "platform" | "audience";
      status: "placeholder" | "active" | "reference";
      publicNote: string;
      href?: string;
      logo?: never;
    }
  | {
      label: string;
      category: "ecosystem" | "platform" | "audience";
      status: "approved";
      publicNote: string;
      href?: string;
      logo?: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
      };
    };

export type MarketingPage = {
  slug: string;
  hero: PageHero;
  title: string;
  description: string;
  sections: {
    intro?: string;
    pillars?: ServicePillar[];
    outcomes?: OutcomeCard[];
    process?: ProcessStep[];
    industries?: IndustryCard[];
    faqs?: FAQItem[];
  };
};
