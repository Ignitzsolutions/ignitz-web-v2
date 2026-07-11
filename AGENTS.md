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
- Treat every visible interface as if Ignitz is a billion-dollar AI company:
  polished, deliberate, commercially serious, and investor-grade. Visuals must
  feel premium enough for enterprise buyers, not like a prototype, template, or
  generic startup landing page.
- Interactive elements must explain the business system, not exist as decoration.
  Cursor effects, hover states, motion, diagrams, and product previews should
  reveal workflow meaning, operating status, or decision context. Remove any
  interaction that feels gimmicky, random, noisy, or visually cheap.
- Use restrained, high-confidence visual language: clear hierarchy, generous
  spacing, precise typography, Ignitz navy/orange brand accents, real product or
  workflow meaning, and smooth but subtle motion. Avoid clutter, meaningless
  orbit graphics, overdone gradients, novelty animations, and decorative UI that
  does not help a buyer understand the company.
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

## What Belongs Where
- `AGENTS.md`: permanent project facts and non-negotiable constraints.
- `SKILL.md`: task-specific workflows such as frontend implementation, UI
  review, security audit, database migration, release preparation, performance
  audit, and accessibility audit.
- `.cursor/rules/*.mdc`: narrow file- or directory-scoped rules.
- `docs/*.md`: detailed product and architecture references.
- Do not put the entire software-engineering handbook into one always-on file.

## Scope Examples
- `frontend rules` only for `src/components/**`
- `database rules` only for `src/db/**`
- `testing rules` only for `tests/**`
- `API rules` only for `src/app/api/**`

## Skill Baseline
- Start with `frontend-ui-engineering` for UI implementation work.
- Use additional skills only when the task clearly calls for them.
