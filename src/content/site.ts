import type {
  AISystemsStackItem,
  BrandNarrative,
  CaseStudyCard,
  CapabilityNode,
  CompanySignal,
  ContactChannel,
  Division,
  EngineeringCultureItem,
  FAQItem,
  FlagshipProduct,
  HomepagePlatformPillar,
  HomepageProofStory,
  IndustryCard,
  InsightCard,
  KnowledgeGraphEdge,
  KnowledgeGraphNode,
  NavItem,
  OutcomeCard,
  PlatformProof,
  ProcessStep,
  ProofMetric,
  CommunitySignal,
  RecognitionSignal,
  ServicePillar,
} from "./types";

export const site = {
  name: "Ignitz",
  url: "https://www.ignitz.net",
  description:
    "Ignitz builds AI-powered products, operational systems, and healthcare technologies.",
  address:
    "4th Floor, Plot No-12, Survey No 1009, KPHB Phase 6, Kukatpally, Hyderabad, Telangana 500085, India",
  phone: "+91 93927 96918",
  email: "info@ignitz.net",
};

export const navItems: NavItem[] = [
  { label: "Platform", href: "/labs" },
  { label: "Solutions", href: "/business-systems" },
  { label: "Products", href: "/ai-products" },
  { label: "Resources", href: "/blogs" },
  { label: "Company", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const proofMetrics: ProofMetric[] = [
  { value: "MS", label: "Microsoft for Startups backed company", kicker: "Ecosystem" },
  { value: "AI", label: "OpenAI, Azure OpenAI, agents, RAG, Realtime", kicker: "Engineering" },
  { value: "Ops", label: "storefronts, dashboards, automation platforms", kicker: "Business systems" },
  { value: "HYD", label: "Hyderabad delivery base with builder community", kicker: "Operating base" },
];

export const brandNarrative: BrandNarrative = {
  eyebrow: "Microsoft for Startups-backed AI systems company",
  title: "Smart AI systems for teams that run real work.",
  lead:
    "Ignitz connects workflows, data, AI products, and capability transfer into one operating layer for teams that need production outcomes, not another disconnected tool.",
  primaryCta: { label: "Build with Ignitz", href: "/contact" },
  secondaryCta: { label: "Explore the platform", href: "#capability-architecture" },
  signals: [
    "Workflow",
    "Data",
    "AI system",
    "Operating memory",
  ],
};

export const heroTypingPhrases = [
  "for healthcare",
  "for consulting",
  "for recruitment",
  "for business",
  "for empowerment",
];

export const knowledgeGraphNodes: KnowledgeGraphNode[] = [
  {
    id: "ignitz",
    label: "Ignitz",
    group: "core",
    summary: "The central operating layer connecting AI products, services, talent, and vertical systems.",
    href: "/about",
    x: 50,
    y: 50,
  },
  {
    id: "health",
    label: "Health",
    group: "health",
    summary: "Clinic workflows, patient systems, dashboards, and AI-assisted healthcare applications.",
    href: "/health",
    x: 50,
    y: 15,
  },
  {
    id: "business",
    label: "Business Solutions",
    group: "business",
    summary: "Storefront OS, operations dashboards, workflow automation, CRM, reports, and admin control.",
    href: "/business-systems",
    x: 81,
    y: 30,
  },
  {
    id: "products",
    label: "AI Products",
    group: "labs",
    summary: "Reusable products like Evaluate Yourself, MindSpan, agents, copilots, and knowledge systems.",
    href: "/ai-products",
    x: 82,
    y: 70,
  },
  {
    id: "automation",
    label: "Automation",
    group: "business",
    summary: "AI APIs, RAG pipelines, Realtime interfaces, and automation flows that reduce repeated work.",
    href: "/ai-product-development",
    x: 50,
    y: 86,
  },
  {
    id: "recruitment",
    label: "Recruitment",
    group: "talent",
    summary: "Embedded teams, intern cohorts, hiring pipelines, and builder communities for execution capacity.",
    href: "/expert-teams",
    x: 18,
    y: 70,
  },
  {
    id: "training",
    label: "Training",
    group: "learning",
    summary: "Learning programs, hackathons, feedback systems, and engineering memory for compounding capability.",
    href: "/training",
    x: 19,
    y: 30,
  },
  {
    id: "consulting",
    label: "Consulting",
    group: "business",
    summary: "Strategy, systems design, AI readiness, governance, delivery pods, and transformation support.",
    href: "/training/ai-leadership-and-readiness",
    x: 31,
    y: 18,
  },
  {
    id: "labs",
    label: "Labs",
    group: "labs",
    summary: "Incubation, hackathons, internal R&D, product experiments, and future founder energy.",
    href: "/labs",
    x: 69,
    y: 18,
  },
];

export const knowledgeGraphEdges: KnowledgeGraphEdge[] = [
  { from: "ignitz", to: "health" },
  { from: "ignitz", to: "business" },
  { from: "ignitz", to: "products" },
  { from: "ignitz", to: "automation" },
  { from: "ignitz", to: "recruitment" },
  { from: "ignitz", to: "training" },
  { from: "ignitz", to: "consulting" },
  { from: "ignitz", to: "labs" },
  { from: "labs", to: "products" },
  { from: "business", to: "automation" },
  { from: "training", to: "recruitment" },
  { from: "health", to: "consulting" },
];

export const platformProof: PlatformProof[] = [
  { label: "Backing", value: "Microsoft for Startups" },
  { label: "AI stack", value: "OpenAI + Azure OpenAI" },
  { label: "Product culture", value: "MindSpan + Evaluate Yourself" },
  { label: "Builder pipeline", value: "NexGen-AI Hackathon" },
];

export const companySignals: CompanySignal[] = [
  {
    label: "Qualcomm",
    category: "placeholder",
    status: "placeholder",
    publicNote: "Draft enterprise signal reserved for later approval.",
  },
  {
    label: "Shell",
    category: "placeholder",
    status: "placeholder",
    publicNote: "Draft enterprise signal reserved for later approval.",
  },
  {
    label: "Microsoft for Startups",
    category: "ecosystem",
    status: "active",
    publicNote: "Startup ecosystem backing and cloud-aligned context.",
  },
  {
    label: "OpenAI",
    category: "platform",
    status: "reference",
    publicNote: "AI platform reference for agents and copilots.",
  },
  {
    label: "Azure",
    category: "platform",
    status: "reference",
    publicNote: "Cloud platform reference for enterprise integration.",
  },
  {
    label: "Enterprise Client A",
    category: "placeholder",
    status: "placeholder",
    publicNote: "Editable placeholder for an approved client name.",
  },
  {
    label: "Enterprise Client B",
    category: "placeholder",
    status: "placeholder",
    publicNote: "Editable placeholder for an approved client name.",
  },
  {
    label: "Healthcare systems",
    category: "audience",
    status: "reference",
    publicNote: "Domain focus for patient and clinic workflows.",
  },
  {
    label: "Operations teams",
    category: "audience",
    status: "reference",
    publicNote: "Buyer context for workflow automation and dashboards.",
  },
];

export const homepagePlatformPillars: HomepagePlatformPillar[] = [
  {
    eyebrow: "01 / Find",
    title: "See the real workflow",
    summary: "Map the owner, decision, data source, exception, and handoff before a single AI surface is built.",
    signal: "Workflow graph",
    accent: "blue",
  },
  {
    eyebrow: "02 / Build",
    title: "Turn context into systems",
    summary: "Create copilots, dashboards, portals, agents, and automations around the way the team actually works.",
    signal: "AI product layer",
    accent: "orange",
  },
  {
    eyebrow: "03 / Run",
    title: "Transfer the capability",
    summary: "Ship with review loops, operating memory, training, and admin controls so the team can keep improving.",
    signal: "Operating memory",
    accent: "green",
  },
];

export const homepageProofStories: HomepageProofStory[] = [
  {
    label: "Enterprise systems",
    title: "From scattered intake to governed AI work.",
    summary: "For operations teams, Ignitz frames intake, documents, CRM context, AI action, and approval into one usable workspace.",
    meta: "Placeholder proof pattern",
    href: "/business-systems",
    accent: "enterprise",
  },
  {
    label: "AI products",
    title: "Product surfaces that prove the platform model.",
    summary: "Internal product surfaces and build tools show how Ignitz turns learning and workflow problems into product systems.",
    meta: "Product direction",
    href: "/ai-products",
    accent: "product",
  },
  {
    label: "Capability transfer",
    title: "Training, delivery, and builder pipelines work together.",
    summary: "Corporate programs, hackathons, interns, and embedded teams become the adoption engine behind production AI systems.",
    meta: "Builder ecosystem",
    href: "/training",
    accent: "learning",
  },
];

export const recognitionSignals: RecognitionSignal[] = [
  {
    label: "Ecosystem",
    value: "Microsoft for Startups",
    summary: "Startup ecosystem backing for the Ignitz platform story and cloud-aligned delivery motion.",
    status: "active",
  },
  {
    label: "AI stack",
    value: "OpenAI + Azure",
    summary: "Reference stack for agents, copilots, retrieval, Realtime interfaces, and workflow automation.",
    status: "reference",
  },
  {
    label: "Delivery base",
    value: "Hyderabad",
    summary: "A practical engineering base for product builds, operations systems, training, and delivery pods.",
    status: "draft",
  },
  {
    label: "Product proof",
    value: "Systems in motion",
    summary: "Evaluate Yourself, MindSpan, Storefront OS, and NexGen-AI show the product direction.",
    status: "active",
  },
];

export const capabilityNodes: CapabilityNode[] = [
  {
    label: "01",
    title: "Platform strategy",
    summary: "Identify the operating workflow, governance boundary, and AI use case worth productionizing.",
    accent: "strategy",
  },
  {
    label: "02",
    title: "Data foundation",
    summary: "Shape the knowledge sources, retrieval paths, and cloud patterns that make AI dependable.",
    accent: "data",
  },
  {
    label: "03",
    title: "AI Systems",
    summary: "Build agents, copilots, RAG flows, Realtime interfaces, and governed automation.",
    accent: "systems",
  },
  {
    label: "04",
    title: "Operations",
    summary: "Turn storefronts, dashboards, reports, and admin control into business infrastructure.",
    accent: "operations",
  },
  {
    label: "05",
    title: "Capability transfer",
    summary: "Turn feedback, reviews, and delivery lessons into reusable operating knowledge.",
    accent: "memory",
  },
];

export const flagshipProducts: FlagshipProduct[] = [
  {
    name: "Evaluate Yourself",
    status: "Flagship product in progress",
    tagline: "Structured self-evaluation for learners, interns, and capability teams.",
    summary:
      "Evaluate Yourself is a focused platform direction for assessment, feedback, progress visibility, and learning accountability.",
    useCase: "Assessment, feedback, progress visibility, and learner accountability.",
    targetUser: "Students, interns, training cohorts, and capability teams.",
    proof: "Designed as a product, not a campaign page.",
    href: "/ai-products",
    ctaLabel: "View product direction",
    accent: "flagship",
  },
  {
    name: "MindSpan",
    status: "Knowledge infrastructure",
    tagline: "See the spread of your thinking.",
    summary:
      "A Markdown-based knowledge bandwidth visualizer that turns notes, reviews, mistakes, and lessons into a living growth map.",
    useCase: "Engineering memory, review learning, cognitive maps, and knowledge growth.",
    targetUser: "Builders, reviewers, mentors, and AI-assisted engineering teams.",
    proof: "Shows Ignitz's belief that learning should compound.",
    href: "/incubator",
    ctaLabel: "Open incubator",
    accent: "memory",
  },
  {
    name: "Storefront OS",
    status: "Business systems direction",
    tagline: "Operations infrastructure for teams that need control.",
    summary:
      "Dynamic storefronts, admin dashboards, inventory-aware workflows, reports, exports, and operating control without constant developer dependency.",
    useCase: "Storefronts, admin systems, reports, dashboards, and workflow control.",
    targetUser: "Business owners and operators who need self-managed systems.",
    proof: "Business owners should control daily operations.",
    href: "/business-systems",
    ctaLabel: "Explore systems",
    accent: "operations",
  },
  {
    name: "NexGen-AI Hackathon",
    status: "Builder pipeline",
    tagline: "AI learning through rapid product building.",
    summary:
      "Hackathons are treated as capability accelerators: Azure/OpenAI tooling, mentorship, incubation paths, and exposure to real AI workflows.",
    useCase: "Rapid prototypes, AI upskilling, mentorship, and product discovery.",
    targetUser: "Students, interns, campus builders, and future founders.",
    proof: "A pipeline for students, builders, and future founders.",
    href: "/hackathons",
    ctaLabel: "See hackathons",
    accent: "community",
  },
];

export const aiSystemsStack: AISystemsStackItem[] = [
  {
    layer: "01",
    title: "Data foundation",
    summary: "Knowledge sources, structured records, operating data, and retrieval-ready foundations.",
    signal: "RAG / databases / cloud",
    accent: "data",
  },
  {
    layer: "02",
    title: "AI agents",
    summary: "Copilots, assistants, Realtime interfaces, and OpenAI/Azure OpenAI workflows.",
    signal: "agents / copilots / realtime",
    accent: "agents",
  },
  {
    layer: "03",
    title: "Workflow automation",
    summary: "Business rules, handoffs, reporting loops, notifications, and governed acceleration.",
    signal: "automation / integrations",
    accent: "automation",
  },
  {
    layer: "04",
    title: "Admin systems",
    summary: "Storefront control, dashboards, inventory-aware workflows, exports, and operating views.",
    signal: "dashboards / portals",
    accent: "admin",
  },
  {
    layer: "05",
    title: "Capability memory",
    summary: "Feedback, reviews, lessons, mistakes, and notes turned into reusable team knowledge.",
    signal: "MindSpan / learning maps",
    accent: "memory",
  },
  {
    layer: "06",
    title: "Talent pipeline",
    summary: "Hackathons, interns, embedded teams, recruitment support, and builder community.",
    signal: "NexGen-AI / interns",
    accent: "talent",
  },
];

export const engineeringCulture: EngineeringCultureItem[] = [
  {
    title: "AI-first engineering",
    summary: "OpenAI APIs, GPT Realtime systems, Azure OpenAI, agents, RAG pipelines, and automation workflows.",
  },
  {
    title: "Engineering memory",
    summary: "Reusable PR review learning, Markdown knowledge systems, cognitive maps, and learning velocity tracking.",
  },
  {
    title: "Lean infrastructure",
    summary: "Ubuntu, Nginx, Azure, secure admin systems, scalable databases, and sustainable multi-app deployments.",
  },
  {
    title: "Practical business impact",
    summary: "AI-enabled applications, dashboards, storefront systems, workflow automation, and customer management.",
  },
];

export const communitySignals: CommunitySignal[] = [
  {
    label: "Talent",
    title: "Build capability where delivery happens.",
    summary: "Ignitz creates exposure, mentorship, and product-building opportunities for students and young engineers.",
  },
  {
    label: "Hackathons",
    title: "Prototype with production habits.",
    summary: "NexGen-AI turns Azure/OpenAI resources and mentor feedback into practical AI prototypes.",
  },
  {
    label: "Incubation",
    title: "Turn experiments into reusable IP.",
    summary: "Internal R&D, product experiments, and founder-led building convert lessons into reusable systems.",
  },
];

export const divisions: Division[] = [
  {
    name: "Ignitz Labs",
    shortName: "Labs",
    href: "/labs",
    positioning: "Building AI-native products and intelligent systems.",
    includedCapabilities: [
      "MindSpan and AI product concepts",
      "AI agents and copilots",
      "Knowledge graph systems",
      "Developer tools and automation products",
      "Incubation projects and hackathons",
    ],
    proofLine: "Internal R&D becomes product proof, reusable IP, and delivery strength.",
    accent: "labs",
    relatedLinks: [
      { label: "AI products", href: "/ai-products" },
      { label: "Incubator", href: "/incubator" },
      { label: "Hackathons", href: "/hackathons" },
    ],
  },
  {
    name: "Ignitz Business Solutions",
    shortName: "Business Systems",
    href: "/business-systems",
    positioning: "AI-powered business systems for modern operations.",
    includedCapabilities: [
      "Commerce and storefront infrastructure",
      "Invoice, admin, and ERP-lite systems",
      "CRM and workflow integrations",
      "Operational dashboards",
      "AI automation for business processes",
    ],
    proofLine: "Operational software positioned as infrastructure, not web development.",
    accent: "business",
    relatedLinks: [
      { label: "AI product development", href: "/ai-product-development" },
      { label: "Expert teams", href: "/expert-teams" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    name: "Ignitz Health",
    shortName: "Health",
    href: "/health",
    positioning: "AI-assisted healthcare applications and intelligent patient workflows.",
    includedCapabilities: [
      "Clinic and appointment workflows",
      "Patient systems and health dashboards",
      "AI triage and medical assistants",
      "Healthcare analytics",
      "Secure workflow automation",
    ],
    proofLine: "A focused vertical for higher-trust, healthcare-ready applications.",
    accent: "health",
    relatedLinks: [
      { label: "Explore use cases", href: "/health" },
      { label: "Talk to Ignitz", href: "/contact" },
    ],
  },
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
      "Client names, logos, testimonials, and outcome metrics are only published through approved proof patterns.",
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
