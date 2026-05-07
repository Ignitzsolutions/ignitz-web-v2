import type {
  CaseStudyCard,
  ContactChannel,
  FAQItem,
  IndustryCard,
  InsightCard,
  NavItem,
  OutcomeCard,
  ProcessStep,
  ProofMetric,
  ServicePillar,
} from "./types";

export const site = {
  name: "Ignitz",
  url: "https://www.ignitz.net",
  description:
    "Ignitz helps enterprises train teams, build AI products, and scale delivery with embedded expert talent.",
  address:
    "4th Floor, Plot No-12, Survey No 1009, KPHB Phase 6, Kukatpally, Hyderabad, Telangana 500085, India",
  phone: "+91 93927 96918",
  email: "info@ignitz.net",
};

export const navItems: NavItem[] = [
  { label: "AI Products", href: "/ai-products" },
  { label: "Incubator", href: "/incubator" },
  { label: "Training", href: "/training" },
  { label: "Blogs", href: "/blogs" },
  { label: "Team", href: "/team" },
];

export const proofMetrics: ProofMetric[] = [
  { value: "3", label: "training, AI builds, expert teams", kicker: "Core offers" },
  { value: "5+", label: "delivery functions from AI to DevOps", kicker: "Capability range" },
  { value: "India", label: "Hyderabad delivery base with enterprise reach", kicker: "Operating base" },
  { value: "V1", label: "approved proof assets pending", kicker: "Proof status" },
];

export const pillars: ServicePillar[] = [
  {
    title: "Corporate Training",
    href: "/training",
    summary:
      "Practical consulting, AI readiness, and delivery programs for enterprise teams.",
    proof: "Programs designed for measurable capability lift, not passive learning.",
    kicker: "01 / Train",
    visualLabel: "Capability",
    stat: "Programs",
    sectionTheme: "warm",
  },
  {
    title: "AI Product Development",
    href: "/ai-product-development",
    summary:
      "Co-build pilots, agents, data workflows, and production AI products with your teams.",
    proof: "Delivery governance keeps pilots connected to business outcomes.",
    kicker: "02 / Build",
    visualLabel: "Product",
    stat: "Pilot to production",
    sectionTheme: "blue",
  },
  {
    title: "Expert Teams",
    href: "/expert-teams",
    summary:
      "Embed consultants, engineers, analysts, and AI specialists where execution matters.",
    proof: "Flexible pods and specialist augmentation without lowering standards.",
    kicker: "03 / Scale",
    visualLabel: "Embedded",
    stat: "Pods",
    sectionTheme: "steel",
  },
];

export const outcomes: OutcomeCard[] = [
  {
    metric: "6 wk",
    title: "AI readiness sprint",
    summary:
      "A leadership cohort moves from use-case noise to prioritized roadmap, governance, and pilot backlog.",
  },
  {
    metric: "2x",
    title: "Faster product discovery",
    summary:
      "Cross-functional teams align around architecture, workflow fit, data availability, and delivery risk earlier.",
  },
  {
    metric: "Pod",
    title: "Embedded execution capacity",
    summary:
      "Specialists join the client cadence and transfer knowledge as the product or program matures.",
  },
];

export const process: ProcessStep[] = [
  {
    title: "Discover",
    summary: "Clarify goals, users, skills gaps, systems, and constraints.",
    kicker: "Diagnose",
  },
  {
    title: "Design",
    summary: "Shape the program, product plan, operating model, and proof points.",
    kicker: "Blueprint",
  },
  {
    title: "Deliver",
    summary: "Run bootcamps, build product increments, or embed expert teams.",
    kicker: "Execute",
  },
  {
    title: "Transfer",
    summary: "Document, coach, and hand over capability so teams keep momentum.",
    kicker: "Enable",
  },
];

export const industries: IndustryCard[] = [
  {
    title: "Consulting and transformation",
    summary: "Structured problem solving, AI fluency, and delivery discipline.",
    visualLabel: "Advisory",
  },
  {
    title: "Technology and SaaS",
    summary: "Product engineering, AI workflows, DevOps, and delivery pods.",
    visualLabel: "Product",
  },
  {
    title: "Financial services",
    summary: "Governed AI adoption, secure data workflows, and workforce readiness.",
    visualLabel: "Governance",
  },
  {
    title: "Operations-heavy enterprises",
    summary: "Automation, analytics, and capability building for complex teams.",
    visualLabel: "Operations",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Can Ignitz support both training and implementation?",
    answer:
      "Yes. The model is designed to connect capability building with hands-on delivery so teams can learn while real products or programs move forward.",
  },
  {
    question: "Is this a staffing model or a consulting model?",
    answer:
      "It can be either. Ignitz can place specialists, run delivery pods, or lead short strategy and training engagements depending on the client need.",
  },
  {
    question: "Are the client logos and metrics final?",
    answer:
      "No. V1 keeps proof content in structured placeholders until approved customer logos, testimonials, and outcome metrics are available.",
  },
];

export const caseStudies: CaseStudyCard[] = [
  {
    title: "AI readiness roadmap for an enterprise team",
    href: "/case-studies",
    metric: "6 wk",
    summary:
      "Prioritized use cases, governance guardrails, and a pilot backlog for leadership review.",
    tags: ["AI readiness", "Leadership", "Roadmap"],
  },
  {
    title: "Consulting bootcamp for delivery teams",
    href: "/case-studies",
    metric: "4 modules",
    summary:
      "Structured problem solving, stakeholder communication, synthesis, and execution routines.",
    tags: ["Training", "Consulting", "Capability"],
  },
  {
    title: "Embedded AI product pod",
    href: "/case-studies",
    metric: "Pod",
    summary:
      "Engineers and AI specialists joined the client cadence to move from prototype to production plan.",
    tags: ["AI product", "Expert teams", "Delivery"],
  },
];

export const insights: InsightCard[] = [
  {
    title: "How to turn AI training into delivery capability",
    href: "/insights",
    topic: "Corporate learning",
    date: "2026-04-24",
    summary:
      "Why enterprise AI programs need practice environments, decision rights, and product-linked outcomes.",
  },
  {
    title: "The pilot-to-product gap in AI delivery",
    href: "/insights",
    topic: "AI products",
    date: "2026-04-24",
    summary:
      "A practical view of the architecture, operating, and ownership decisions that make AI pilots stick.",
  },
  {
    title: "When to use an embedded expert pod",
    href: "/insights",
    topic: "Expert teams",
    date: "2026-04-24",
    summary:
      "How to decide between staff augmentation, a delivery pod, and a guided build engagement.",
  },
];

export const contactChannels: ContactChannel[] = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "WhatsApp", value: site.phone, href: "https://wa.me/919392796918" },
  { label: "Office", value: "Hyderabad, India", href: "/contact" },
];
