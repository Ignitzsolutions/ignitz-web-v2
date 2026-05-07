import type {
  AIProduct,
  BlogPost,
  Hackathon,
  IncubatedProject,
  Intern,
  TeamMember,
} from "./types";

export const seedAIProducts: AIProduct[] = [
  {
    _id: "seed-ai-product-1",
    title: "Proposal Intelligence Workspace",
    slug: "proposal-intelligence-workspace",
    status: "Incubating",
    stage: "Prototype",
    excerpt:
      "An AI workspace that helps consulting teams convert client context into sharper proposals, scopes, and delivery plans.",
    problem:
      "Sales and delivery teams lose time translating discovery notes into structured proposals and delivery assumptions.",
    solution:
      "The product turns call notes, requirements, and past delivery patterns into proposal sections, risks, milestones, and team-shape recommendations.",
    capabilities: ["Document intelligence", "Proposal drafting", "Risk prompts", "Delivery blueprinting"],
    targetUsers: ["Consulting teams", "Pre-sales leads", "Delivery managers"],
    demoCta: "Request a product walkthrough",
    tags: ["Consulting", "AI workspace", "Delivery"],
  },
  {
    _id: "seed-ai-product-2",
    title: "Learning Copilot for Enterprise Cohorts",
    slug: "learning-copilot-enterprise-cohorts",
    status: "Internal pilot",
    stage: "Pilot",
    excerpt:
      "A guided AI learning layer for consulting and AI readiness programs, built around practice, feedback, and cohort analytics.",
    problem:
      "Enterprise training often stops at content delivery and does not create enough practice, feedback, or manager visibility.",
    solution:
      "The copilot gives learners guided exercises, reflective prompts, review checklists, and cohort-level signals for program leads.",
    capabilities: ["Practice prompts", "Rubric feedback", "Cohort analytics", "Manager summaries"],
    targetUsers: ["L&D leaders", "Consulting cohorts", "AI readiness teams"],
    demoCta: "Discuss a cohort pilot",
    tags: ["Training", "AI learning", "Cohorts"],
  },
  {
    _id: "seed-ai-product-3",
    title: "Delivery Pod Operating System",
    slug: "delivery-pod-operating-system",
    status: "Concept",
    stage: "Discovery",
    excerpt:
      "A lightweight operating system for embedded expert pods, tracking outcomes, blockers, capability transfer, and weekly client confidence.",
    problem:
      "Embedded teams can create progress, but clients often lack a crisp view of outcomes, risk, ownership, and knowledge transfer.",
    solution:
      "The product structures pod rituals, decision logs, risk visibility, and capability-transfer artifacts in one operating surface.",
    capabilities: ["Pod cadence", "Risk tracking", "Outcome reporting", "Knowledge transfer"],
    targetUsers: ["Delivery pods", "Client sponsors", "Program managers"],
    demoCta: "Shape a pod pilot",
    tags: ["Expert teams", "Delivery", "Operations"],
  },
];

export const seedIncubatedProjects: IncubatedProject[] = [
  {
    _id: "seed-incubator-1",
    title: "Requirements Validation Agent",
    slug: "requirements-validation-agent",
    stage: "Internal prototype",
    owner: "Ignitz AI Lab",
    excerpt:
      "An agentic review flow that checks requirements for ambiguity, missing acceptance criteria, and delivery risk.",
    problem:
      "Project requirements often enter delivery with unclear language, incomplete edge cases, and hidden risk.",
    prototypeNotes:
      "The prototype reviews requirement batches, produces structured findings, and keeps human reviewers in control.",
    technologies: ["LLM workflows", "Structured outputs", "Review UI", "Traceable findings"],
    outcomes: ["Faster first-pass review", "More consistent requirement quality", "Reusable review criteria"],
    linkedProductSlug: "proposal-intelligence-workspace",
    tags: ["Requirements", "Agent", "Quality"],
  },
  {
    _id: "seed-incubator-2",
    title: "AI Hackathon Project Evaluator",
    slug: "ai-hackathon-project-evaluator",
    stage: "Hackathon build",
    owner: "Ignitz interns and mentors",
    excerpt:
      "A judging assistant for hackathon teams that evaluates prototype clarity, usefulness, feasibility, and presentation readiness.",
    problem:
      "Hackathon teams need fast structured feedback before demos, but mentors cannot review every idea deeply in real time.",
    prototypeNotes:
      "The evaluator scores project briefs, suggests missing proof, and helps teams prepare demo narratives.",
    technologies: ["Scoring rubrics", "Project briefs", "AI feedback", "Mentor workflow"],
    outcomes: ["Better demos", "Faster mentor triage", "Reusable judging criteria"],
    tags: ["Hackathons", "Interns", "Evaluation"],
  },
];

export const seedHackathons: Hackathon[] = [
  {
    _id: "seed-hackathon-1",
    title: "Ignitz AI Build Sprint",
    slug: "ignitz-ai-build-sprint",
    date: "2026-06-14",
    status: "Planning",
    theme: "AI tools for consulting, delivery, and enterprise learning",
    participants: "Interns, engineers, consultants, and invited student teams",
    excerpt:
      "A focused build sprint where teams prototype practical AI products connected to Ignitz training and delivery use cases.",
    projectsProduced: ["Proposal assistant", "Learning feedback bot", "Delivery risk dashboard"],
    winners: ["To be announced"],
    registrationCta: "Register interest",
    tags: ["AI products", "Hackathon", "Internship"],
  },
  {
    _id: "seed-hackathon-2",
    title: "Campus AI Prototype Day",
    slug: "campus-ai-prototype-day",
    date: "2026-07-20",
    status: "Draft",
    theme: "Student-built AI workflows for real business operations",
    participants: "Campus teams and Ignitz mentors",
    excerpt:
      "A campus-facing prototype day designed to identify interns, product ideas, and future incubator projects.",
    projectsProduced: ["Student project gallery", "Mentor shortlist", "Incubator candidates"],
    winners: ["To be announced"],
    registrationCta: "Partner with Ignitz",
    tags: ["Campus", "Interns", "Prototype"],
  },
];

export const seedBlogPosts: BlogPost[] = [
  {
    _id: "seed-blog-1",
    title: "Why AI products should grow out of delivery work",
    slug: "ai-products-from-delivery-work",
    author: "Ignitz AI Lab",
    date: "2026-04-25",
    excerpt:
      "The best internal AI products start with repeated delivery pain, not abstract innovation theatre.",
    body:
      "AI products become useful when they are grounded in repeated operational friction. Ignitz uses training programs, delivery pods, and internal hackathons to identify where AI can improve quality, speed, and capability transfer.",
    tags: ["AI products", "Incubator", "Delivery"],
    relatedSlugs: ["proposal-intelligence-workspace"],
  },
  {
    _id: "seed-blog-2",
    title: "How hackathons can become a real product pipeline",
    slug: "hackathons-product-pipeline",
    author: "Ignitz Programs",
    date: "2026-04-25",
    excerpt:
      "A hackathon matters when it creates reusable prototypes, mentor feedback, and a path into incubation.",
    body:
      "Hackathons should produce more than demo-day energy. A strong program captures project briefs, technical choices, judging feedback, and next-step ownership so the best prototypes can become incubated products.",
    tags: ["Hackathons", "Interns", "Product pipeline"],
    relatedSlugs: ["ai-hackathon-project-evaluator"],
  },
];

export const seedTeamMembers: TeamMember[] = [
  {
    _id: "seed-team-1",
    name: "AI Product Lead",
    slug: "ai-product-lead",
    role: "AI Product Development",
    bio: "Leads product discovery, prototype framing, and pilot-to-production planning for Ignitz AI initiatives.",
    expertise: ["AI strategy", "Product discovery", "Delivery governance"],
    sortOrder: 1,
  },
  {
    _id: "seed-team-2",
    name: "Learning Programs Lead",
    slug: "learning-programs-lead",
    role: "Corporate Training",
    bio: "Designs cohort-based consulting and AI readiness programs with practice, feedback, and measurable outcomes.",
    expertise: ["L&D", "Consulting capability", "Cohort design"],
    sortOrder: 2,
  },
  {
    _id: "seed-team-3",
    name: "Incubator Mentor",
    slug: "incubator-mentor",
    role: "Internal Projects",
    bio: "Guides interns and product teams through prototype scoping, technical review, and demo readiness.",
    expertise: ["Mentorship", "Hackathons", "Prototype review"],
    sortOrder: 3,
  },
];

export const seedInterns: Intern[] = [
  {
    _id: "seed-intern-1",
    name: "AI Product Intern Cohort",
    slug: "ai-product-intern-cohort",
    cohort: "Summer 2026",
    track: "AI Products",
    bio: "Intern cohort focused on converting hackathon prototypes into product briefs, demos, and incubator candidates.",
    mentor: "Incubator Mentor",
    projectLinks: [{ label: "AI Build Sprint", href: "/hackathons/ignitz-ai-build-sprint" }],
  },
  {
    _id: "seed-intern-2",
    name: "Delivery Automation Intern Cohort",
    slug: "delivery-automation-intern-cohort",
    cohort: "Summer 2026",
    track: "Delivery Automation",
    bio: "Intern cohort exploring AI workflows for requirements review, reporting, and delivery quality.",
    mentor: "AI Product Lead",
    projectLinks: [{ label: "Requirements Validation Agent", href: "/incubator/requirements-validation-agent" }],
  },
];
