import { faqs, industries, outcomes, pillars, process } from "./site";
import type { MarketingPage } from "./types";

export const pages: Record<string, MarketingPage> = {
  home: {
    slug: "/",
    title: "AI Systems for Modern Operations | Ignitz",
    description:
      "Ignitz builds productized AI systems, business operations platforms, healthcare workflows, and learning infrastructure.",
    hero: {
      eyebrow: "Microsoft for Startups-backed AI systems company",
      title: "Ignitz builds AI systems for modern operations.",
      lead: "Productized AI, business operations, healthcare workflows, and learning systems built as practical infrastructure.",
      primaryCta: { label: "Build with Ignitz", href: "/contact" },
      secondaryCta: { label: "Explore the system", href: "#capability-architecture" },
    },
    sections: { pillars, outcomes, process, industries, faqs },
  },
  training: {
    slug: "/training",
    title: "Corporate Training for Consulting and AI Teams | Ignitz",
    description:
      "Upskill teams through practical consulting, AI, and execution programs built for enterprise adoption.",
    hero: {
      eyebrow: "Corporate training",
      title: "Training programs for consulting and AI delivery teams.",
      lead: "Programs designed for teams that need more than theory: consulting rigor, AI fluency, and hands-on execution skills.",
      primaryCta: { label: "Request a program brief", href: "/contact" },
      secondaryCta: {
        label: "View consulting bootcamps",
        href: "/training/consulting-bootcamps",
      },
    },
    sections: {
      intro:
        "Use training when teams need shared language, repeatable methods, and practice that connects directly to delivery.",
      outcomes,
      process,
      faqs,
    },
  },
  consultingBootcamps: {
    slug: "/training/consulting-bootcamps",
    title: "Consulting Capability Bootcamps | Ignitz",
    description:
      "Intensive bootcamps for consultants, analysts, and transformation teams covering structured problem solving and delivery execution.",
    hero: {
      eyebrow: "Consulting bootcamps",
      title: "Make consulting capability visible in daily work.",
      lead: "Short-format bootcamps build structured thinking, stakeholder communication, synthesis, and execution discipline.",
      primaryCta: { label: "Schedule a capability call", href: "/contact" },
      secondaryCta: { label: "Explore AI readiness", href: "/training/ai-leadership-and-readiness" },
    },
    sections: { outcomes, process, faqs },
  },
  aiReadiness: {
    slug: "/training/ai-leadership-and-readiness",
    title: "AI Readiness and Leadership Programs | Ignitz",
    description:
      "Help leaders move from AI curiosity to operating-model decisions, governance, and adoption plans.",
    hero: {
      eyebrow: "AI leadership",
      title: "Turn AI ambition into priorities, guardrails, and action.",
      lead: "Executive programs align leaders on use cases, risk, governance, operating model choices, and adoption plans.",
      primaryCta: { label: "Book an executive workshop", href: "/contact" },
      secondaryCta: { label: "Explore training", href: "/training" },
    },
    sections: { outcomes, process, faqs },
  },
  aiProduct: {
    slug: "/ai-product-development",
    title: "AI Product Development Services | Ignitz",
    description:
      "Design, build, and operationalize AI products with embedded teams, delivery governance, and capability transfer.",
    hero: {
      eyebrow: "AI product development",
      title: "AI product development from pilot to production.",
      lead: "We build AI products with your teams, not around them, so pilots become products and products become operating capability.",
      primaryCta: { label: "Talk to an AI product lead", href: "/contact" },
      secondaryCta: { label: "See expert teams", href: "/expert-teams" },
    },
    sections: { outcomes, process, industries, faqs },
  },
  expertTeams: {
    slug: "/expert-teams",
    title: "Expert Teams and Embedded Delivery Pods | Ignitz",
    description:
      "Access consultants, engineers, analysts, and AI specialists who integrate with your team to speed delivery.",
    hero: {
      eyebrow: "Embedded teams",
      title: "Expert teams embedded with your business.",
      lead: "From specialist augmentation to cross-functional pods, we plug capability gaps without creating dependency.",
      primaryCta: { label: "Hire a delivery pod", href: "/contact" },
      secondaryCta: { label: "Explore AI builds", href: "/ai-product-development" },
    },
    sections: { outcomes, process, faqs },
  },
  industries: {
    slug: "/industries",
    title: "Industry Solutions for AI and Transformation | Ignitz",
    description:
      "See how Ignitz adapts training, AI product delivery, and expert-team models for complex industries.",
    hero: {
      eyebrow: "Industries",
      title: "Industry solutions built around real operating needs.",
      lead: "Different sectors need different proof, governance, and delivery models. Ignitz adapts the offer to the work.",
      primaryCta: { label: "Explore your use case", href: "/contact" },
      secondaryCta: { label: "View case studies", href: "/case-studies" },
    },
    sections: { industries, pillars, faqs },
  },
  about: {
    slug: "/about",
    title: "About Ignitz | Training, AI Products, Expert Teams",
    description:
      "Learn how Ignitz combines capability building, AI product delivery, and embedded expert teams.",
    hero: {
      eyebrow: "About Ignitz",
      title: "A delivery partner for teams learning, building, and scaling AI.",
      lead: "Ignitz connects consulting discipline, product engineering, AI delivery, and workforce support into one practical operating model.",
      primaryCta: { label: "Meet the team", href: "/contact" },
      secondaryCta: { label: "View careers", href: "/careers" },
    },
    sections: { pillars, process, faqs },
  },
  careers: {
    slug: "/careers",
    title: "Careers at Ignitz | Learn, Build, Deliver",
    description:
      "Join a team that combines consulting discipline, AI product building, and practical learning.",
    hero: {
      eyebrow: "Careers",
      title: "Build the future of work with us.",
      lead: "Join a team working across training, product delivery, and expert services for enterprise clients.",
      primaryCta: { label: "View open roles", href: "/contact" },
      secondaryCta: { label: "Learn about Ignitz", href: "/about" },
    },
    sections: { process, faqs },
  },
  contact: {
    slug: "/contact",
    title: "Contact Ignitz | Book a Workshop or Project Call",
    description:
      "Talk to Ignitz about corporate training, AI product development, or embedded expert teams.",
    hero: {
      eyebrow: "Contact",
      title: "Book a workshop or start a build.",
      lead: "Tell us what you are trying to train, build, or staff. We will route the conversation to the right lead.",
      primaryCta: { label: "Submit inquiry", href: "#contact-form" },
      secondaryCta: { label: "WhatsApp Ignitz", href: "https://wa.me/919392796918" },
    },
    sections: { faqs },
  },
};
