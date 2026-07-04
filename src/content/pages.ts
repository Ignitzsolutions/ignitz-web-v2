import { faqs, industries, outcomes, pillars, process } from "./site";
import type { MarketingPage } from "./types";

export const pages: Record<string, MarketingPage> = {
  home: {
    slug: "/",
    title: "AI Software for Modern Teams | Ignitz",
    description: "Ignitz builds simple AI software, workflow systems, and operating layers for enterprise teams.",
    hero: {
      eyebrow: "AI software for modern teams",
      title: "Ignitz builds AI systems for modern operations.",
      lead: "Simple AI software for product, workflow, and delivery teams.",
      primaryCta: { label: "Start a build", href: "/contact" },
      secondaryCta: { label: "See the operating model", href: "#operating-model" },
    },
    sections: { pillars, outcomes, process, industries, faqs },
  },
  training: {
    slug: "/training",
    title: "Corporate Training for Consulting and AI Teams | Ignitz",
    description:
      "Practical consulting and AI training for enterprise teams.",
    hero: {
      eyebrow: "Corporate training",
      title: "Training programs for consulting and AI delivery teams.",
      lead: "Consulting rigor, AI fluency, and execution practice.",
      primaryCta: { label: "Request a program brief", href: "/contact" },
      secondaryCta: {
        label: "View consulting bootcamps",
        href: "/training/consulting-bootcamps",
      },
    },
    sections: {
      intro:
        "Use training to build shared language and repeatable methods.",
      outcomes,
      process,
      faqs,
    },
  },
  consultingBootcamps: {
    slug: "/training/consulting-bootcamps",
    title: "Consulting Capability Bootcamps | Ignitz",
    description:
      "Bootcamps for consultants, analysts, and transformation teams.",
    hero: {
      eyebrow: "Consulting bootcamps",
      title: "Make consulting capability visible in daily work.",
      lead: "Structured thinking, communication, and execution.",
      primaryCta: { label: "Schedule a capability call", href: "/contact" },
      secondaryCta: { label: "Explore AI readiness", href: "/training/ai-leadership-and-readiness" },
    },
    sections: { outcomes, process, faqs },
  },
  aiReadiness: {
    slug: "/training/ai-leadership-and-readiness",
    title: "AI Readiness and Leadership Programs | Ignitz",
    description:
      "Help leaders move from AI curiosity to action.",
    hero: {
      eyebrow: "AI leadership",
      title: "Turn AI ambition into priorities, guardrails, and action.",
      lead: "Align leaders on use cases, risk, and next steps.",
      primaryCta: { label: "Book an executive workshop", href: "/contact" },
      secondaryCta: { label: "Explore training", href: "/training" },
    },
    sections: { outcomes, process, faqs },
  },
  aiProduct: {
    slug: "/ai-product-development",
    title: "AI Product Development Services | Ignitz",
    description:
      "Design and ship AI products with embedded teams.",
    hero: {
      eyebrow: "AI product development",
      title: "AI product development from pilot to production.",
      lead: "Pilots become products. Products become capability.",
      primaryCta: { label: "Talk to an AI product lead", href: "/contact" },
      secondaryCta: { label: "See expert teams", href: "/expert-teams" },
    },
    sections: { outcomes, process, industries, faqs },
  },
  expertTeams: {
    slug: "/expert-teams",
    title: "Expert Teams and Embedded Delivery Pods | Ignitz",
    description:
      "Consultants, engineers, and AI specialists who plug into your team.",
    hero: {
      eyebrow: "Embedded teams",
      title: "Expert teams embedded with your business.",
      lead: "Fill gaps without creating dependency.",
      primaryCta: { label: "Hire a delivery pod", href: "/contact" },
      secondaryCta: { label: "Explore AI builds", href: "/ai-product-development" },
    },
    sections: { outcomes, process, faqs },
  },
  industries: {
    slug: "/industries",
    title: "Industry Solutions for AI and Transformation | Ignitz",
    description:
      "How Ignitz adapts for complex industries.",
    hero: {
      eyebrow: "Industries",
      title: "Industry solutions built around real operating needs.",
      lead: "Different sectors need different proof and delivery.",
      primaryCta: { label: "Explore your use case", href: "/contact" },
      secondaryCta: { label: "View case studies", href: "/case-studies" },
    },
    sections: { industries, pillars, faqs },
  },
  about: {
    slug: "/about",
    title: "About Ignitz | Training, AI Products, Expert Teams",
    description:
      "How Ignitz combines training, products, and teams.",
    hero: {
      eyebrow: "About Ignitz",
      title: "A delivery partner for teams learning, building, and scaling AI.",
      lead: "Consulting, product engineering, and delivery support.",
      primaryCta: { label: "Meet the team", href: "/contact" },
      secondaryCta: { label: "View careers", href: "/careers" },
    },
    sections: { pillars, process, faqs },
  },
  careers: {
    slug: "/careers",
    title: "Careers at Ignitz | Learn, Build, Deliver",
    description:
      "Join a team building practical AI work.",
    hero: {
      eyebrow: "Careers",
      title: "Build the future of work with us.",
      lead: "Work across training, products, and delivery.",
      primaryCta: { label: "View open roles", href: "/contact" },
      secondaryCta: { label: "Learn about Ignitz", href: "/about" },
    },
    sections: { process, faqs },
  },
  contact: {
    slug: "/contact",
    title: "Contact Ignitz | Book a Workshop or Project Call",
    description:
      "Talk to Ignitz about training, products, or teams.",
    hero: {
      eyebrow: "Contact",
      title: "Book a workshop or start a build.",
      lead: "Tell us what you need. We’ll route it.",
      primaryCta: { label: "Submit inquiry", href: "#contact-form" },
      secondaryCta: { label: "WhatsApp Ignitz", href: "https://wa.me/919392796918" },
    },
    sections: { faqs },
  },
};
