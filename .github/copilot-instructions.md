# Copilot Instructions

This is a Next.js App Router website for Ignitz, a corporate training, AI
product development, and expert-team partner.

- Use TypeScript and semantic React components.
- Keep the visual direction light-only, premium, editorial, and restrained.
- Favor large layout-led sections, proof bands, and process narratives over
  generic SaaS card grids.
- Reuse content from `src/content` instead of hard-coding copy in components.
- Dynamic collections use Sanity schemas and query helpers in `src/sanity`.
- Public collection pages must render with seed fallback content when Sanity
  environment variables are not configured.
- Preserve the CTA hierarchy: one primary action and at most one secondary
  action per page hero.
- Use accessible controls for navigation, accordions, and forms.
- Honor `prefers-reduced-motion` for all animation.
- Run lint and build checks after substantial edits.
