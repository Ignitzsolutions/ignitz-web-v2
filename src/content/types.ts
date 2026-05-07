export type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "text";
};

export type NavItem = {
  label: string;
  href: string;
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
