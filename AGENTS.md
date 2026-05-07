# Ignitz Website Agent Guide

## Project Intent
This repository builds a premium light-theme corporate website for Ignitz,
focused on corporate training, AI product development, and embedded expert
teams. The visual direction is editorial, high-trust, precise, and light-only.

## Technical Standards
- Use Next.js App Router with TypeScript.
- Use semantic HTML and accessible React components.
- Keep reusable content in `src/content` typed data files until a CMS is added.
- Use Sanity Studio at `/studio` for dynamic content collections when a Sanity
  project is configured.
- Use global design tokens in `src/app/globals.css`.
- Do not add a dark theme; the approved direction is light-only.
- Favor layout-led editorial sections over generic SaaS card grids.
- No animation may block content or violate `prefers-reduced-motion`.
- Do not introduce heavy dependencies without a clear need.

## Content and UX Standards
- Keep copy concise, enterprise-focused, and outcome-led.
- Every page should have one primary CTA and at most one secondary CTA.
- Service pages should include proof, process, FAQ, and final CTA modules.
- The homepage should feel like an AI operating partner page: brand-forward,
  calm, precise, and built around capability transfer.
- Placeholder logos, testimonials, metrics, and legal copy must remain clearly
  isolated until stakeholder-approved assets are available.
- AI products, incubator projects, hackathons, blogs, team members, and interns
  are dynamic content collections. Public pages must tolerate empty or missing
  CMS data and use clean placeholders or seed content during development.

## Validation
- Run `npm run lint` and `npm run build` before finalizing changes.
- Verify keyboard navigation, focus visibility, and heading hierarchy.
- Verify responsive behavior at mobile, tablet, and desktop widths.
- Flag any missing legal copy, logo files, customer permissions, or production
  form endpoints.
