# Current UI Audit

## Scope and method

Read-only source audit of the Next.js App Router application on 2026-07-12. The review covered every public route, shared shell and UI component, content data, dynamic-content fallbacks, global tokens, responsive rules, forms, motion, and referenced public assets. This is an implementation audit, not a proposed visual direction. Sanity Studio itself is an embedded authoring product and is excluded from the marketing UI assessment.

## Executive assessment

The application has a sound content/data foundation, semantic page landmarks, typed page content, a restrained core navy/orange palette, visible focus treatment, reduced-motion support, and reusable route primitives. The main design risk is accumulated implementation drift: `globals.css` is 14,660 lines long and contains many successive redesign layers, repeated selectors, five breakpoint conventions, and late “reset/correction” blocks. Consequently, similar routes do not reliably share one visual grammar, and changing a shared selector can have remote effects.

The best path is preservation plus consolidation, not wholesale replacement. Retain the typed content model, light-only palette, semantic route components, form labels, focus treatment, and empty CMS fallbacks. Remove or consolidate ornamental consoles/orbits, repeated card systems, duplicated hero implementations, perpetual decorative motion, speculative proof language, and obsolete CSS layers.

## What works and should be retained

- The root token set establishes a clear light-only brand base: canvas, ink, navy, orange, health green, surfaces, lines, shadows, fonts, maximum width, and easing (`src/app/globals.css:1`).
- `next/font` loads Inter, Space Grotesk, and IBM Plex Mono without layout-fragile external CSS (`src/app/layout.tsx:1`).
- All public pages use a shared header/footer shell, while Studio is correctly exempted (`src/components/SiteShell.tsx:7`).
- Public route pages generally have one `main`, one `h1`, semantic sections, lists, articles, definition lists, and labelled interactive controls.
- The two form implementations provide visible labels, appropriate input types, autocomplete, native required validation, and an async live region in the quote estimator.
- `HeroTypingText` watches `prefers-reduced-motion`, and CSS contains reduced-motion overrides (`src/components/HeroTypingText.tsx:12`; `src/app/globals.css:3402`).
- Dynamic collections have explicit empty states and seed fallbacks rather than silently rendering blank pages.
- `PlatformRoutePage` creates meaningful reuse across many informational routes, while content remains typed in `src/content`.
- Buttons and links have a consistent minimum 44px target and visible focus outline at the base layer.

## Route and navigation audit

Global navigation exposes Platform (`/labs`), Solutions (`/business-systems`), Products (`/ai-products`), Resources (`/blogs`), Company (`/team`), and Contact (`/contact`). A persistent “Build with Ignitz” CTA also links to Contact. Footer navigation exposes a broader sitemap. The six-item desktop navigation is understandable, but it hides important service routes and provides no current-location state or grouped hierarchy.

Public route families:

- Core: `/`, `/about`, `/contact`, `/industries`, `/case-studies`, `/insights`, `/careers`.
- Services: `/training`, `/training/ai-leadership-and-readiness`, `/training/consulting-bootcamps`, `/ai-product-development`, `/expert-teams`, `/business-systems`, `/health`.
- Products and community: `/labs`, `/ai-products`, `/ai-products/[slug]`, `/incubator`, `/incubator/[slug]`, `/hackathons`, `/hackathons/[slug]`, `/interns`, `/team`.
- Resources: `/blogs`, `/blogs/[slug]`.
- Legal/support: `/privacy`, `/terms`, `/accessibility`.
- Authoring: `/studio/[[...tool]]`.

## Findings

### UI-01 — Critical — Cascading CSS layers make the visual system non-deterministic

- Relevant page: All public pages.
- Relevant source file: `src/app/globals.css:1` (14,660 lines; later correction layers begin around lines 13,840 and 14,130).
- Current problem: One global file contains old and new implementations of the same selectors, 80+ media-query blocks, late “Brand-kit correction,” “Premium centered homepage hero,” and “Centered homepage reset” sections, and breakpoint families at 720, 760, 860, 900, 980, 1040, 1080, 1100, 1120, and 1180px.
- User impact: Cascade order, rather than component intent, determines the final design. Small edits can break unrelated routes, responsive behavior differs by page generation, and visual QA cannot be trusted to generalize.
- Recommended correction: Structural fix. Inventory live selectors, delete superseded layers, establish one token layer plus shared primitives and route-scoped modules, and standardize breakpoints. Do this before polishing individual pages.

### UI-02 — High — Missing homepage ecosystem logo assets produce broken media

- Relevant page: `/`.
- Relevant source file: `src/content/site.ts:47`; `src/components/Sections.tsx:215`; `public/brand/`.
- Current problem: Six logo records reference `/brand/logos/*.svg`, but the repository only contains `public/brand/ignitz-logo.png` and `public/brand/ignitz-logo.svg`; the referenced `logos` directory is absent.
- User impact: The homepage proof strip can show broken images and undermines trust precisely where ecosystem credibility is asserted.
- Recommended correction: Structural/content fix. Add stakeholder-approved local marks with permission, or remove the strip until assets and claims are approved. Do not substitute invented logos.

### UI-03 — High — Header lacks active-location semantics and robust mobile-menu behavior

- Relevant page: All public pages.
- Relevant source file: `src/components/Header.tsx:8`.
- Current problem: Links never receive `aria-current="page"`; the mobile menu is a generic `div`, does not close on Escape, does not return focus, does not close on route changes outside link clicks, and does not explicitly suppress hidden descendants from the accessibility tree.
- User impact: Users cannot quickly orient themselves; keyboard and screen-reader users receive incomplete navigation state, and mobile menu behavior is less predictable.
- Recommended correction: Structural fix. Use pathname-derived active state, a labelled `nav`, true conditional rendering or `hidden`/`inert`, Escape and focus-return behavior, and a clear menu button accessible name that changes with state.

### UI-04 — High — No skip link; sticky header can obstruct anchor destinations

- Relevant page: All public pages, especially `/` and `/incubator` with in-page links.
- Relevant source file: `src/app/layout.tsx:34`; `src/components/SiteShell.tsx:16`; `src/app/globals.css:20`.
- Current problem: There is no “Skip to main content” control, main regions do not have a shared target ID, and anchored headings/sections do not define `scroll-margin-top` despite the sticky header.
- User impact: Keyboard users must traverse the full header on every page; anchor navigation can land content beneath the header.
- Recommended correction: Structural accessibility fix. Add a focus-revealed skip link and stable main target, then apply tokenized scroll margin to anchored sections/headings.

### UI-05 — High — Heading IDs are duplicated across reusable route sections

- Relevant page: Pages rendered with `PlatformRoutePage`; risk increases if multiple instances are composed or embedded.
- Relevant source file: `src/components/PlatformRoutePage.tsx:147-296`.
- Current problem: Reusable sections hardcode IDs such as `route-pillars-title`, `route-outcomes-title`, and `route-faq-title` instead of deriving unique IDs from the route/instance.
- User impact: Duplicate IDs break deterministic accessible-name relationships and make future composition unsafe.
- Recommended correction: Structural fix. Prefix IDs with the route variant or generate them with `useId`; preserve the existing section labelling pattern.

### UI-06 — High — Contact conversion depends on a local email client

- Relevant page: `/contact` and the shared contact module when used elsewhere.
- Relevant source file: `src/components/ContactForm.tsx:5`.
- Current problem: Submission redirects to `mailto:`. There is no server submission, loading state, success confirmation, failure recovery, or durable lead capture.
- User impact: Visitors using webmail, locked-down corporate devices, or devices without a configured mail client can lose their input; sales cannot reliably measure or recover leads.
- Recommended correction: Structural/product fix. Connect to an approved production endpoint with inline errors, pending state, success state, spam/privacy handling, and mailto as an explicit fallback. Production endpoint and privacy copy are currently missing.

### UI-07 — Medium — Quote estimator overpromises an “estimate” without showing a quote

- Relevant page: All public pages through the footer.
- Relevant source file: `src/components/ProjectQuoteEstimator.tsx:82`; `src/lib/projectQuote.ts`.
- Current problem: The control is called an estimator and says “Estimate ready,” but it calculates no price or range; it submits a qualification form. Every public page ends with this large form regardless of page intent.
- User impact: The mismatch can feel misleading, creates a very heavy repeated footer, and competes with each page’s primary CTA.
- Recommended correction: Structural/content fix. Rename it as a project brief/request, or provide a defensible range with assumptions. Consider a concise global footer and place the full form only on conversion-relevant routes.

### UI-08 — Medium — Form state and copy miss several production interaction details

- Relevant page: All public pages (footer), `/contact`.
- Relevant source file: `src/components/ProjectQuoteEstimator.tsx:155-205`; `src/components/ContactForm.tsx:31-59`.
- Current problem: Selects lack `name`; controlled email/phone inputs lack `name`; requirements lacks autocomplete guidance; placeholders use a period instead of an ellipsis/example; status uses three ASCII periods (“Saving...”); errors are only in a summary live region, with no field association or first-error focus; successful submission clears only requirements.
- User impact: Browser autofill/form tooling is weaker, error recovery is harder, and the submission state can leave stale personal data visible.
- Recommended correction: Styling/interaction fix after endpoint decisions. Add names and appropriate autocomplete/spellcheck, use “Saving…”, associate errors with fields, focus the first invalid field, reset intentionally on success, and provide a meaningful example placeholder.

### UI-09 — Medium — Dynamic typing announces every incremental character

- Relevant page: Homepage variants using `HeroTypingText`.
- Relevant source file: `src/components/HeroTypingText.tsx:54`.
- Current problem: `aria-live="polite"` wraps text updated every 36–62ms while phrases type and delete.
- User impact: Assistive technology may repeatedly announce fragments, creating severe auditory noise in the primary heading area.
- Recommended correction: Accessibility fix. Hide the animated text from assistive technology and provide a stable visually hidden phrase, or announce only completed phrase changes at a restrained cadence.

### UI-10 — Medium — Perpetual logo marquee is fragile, decorative, and not content-led

- Relevant page: `/`.
- Relevant source file: `src/app/globals.css:13,890-14,109`; `src/components/Sections.tsx:215`.
- Current problem: A content-bearing logo track animates continuously with `will-change: transform` and translates by `-50%`, but the rendered list is not duplicated; a later reset then redefines the same selectors and layout. Reduced motion is handled, but normal-motion behavior can leave empty space and consumes compositor resources.
- User impact: Credibility marks become harder to inspect, animation can distract from primary content, and results depend on whichever CSS layer wins.
- Recommended correction: Structural/styling fix. Use a static, responsive proof row with approved marks. If motion is retained, duplicate accessibly, pause on hover/focus, avoid permanent `will-change`, and validate the full loop.

### UI-11 — Medium — Route families duplicate hero, section, panel, and card implementations

- Relevant page: `/business-systems`, `/health`, `/labs`, `/ai-products`, `/incubator`, `/hackathons`, `/blogs`, `/interns`, `/team`, plus generic marketing routes.
- Relevant source file: `src/components/PageRenderer.tsx`; `src/components/PlatformRoutePage.tsx`; `src/components/DynamicContent.tsx`; multiple `src/app/*/page.tsx` files.
- Current problem: Some pages use `PlatformRoutePage`; others import it but implement bespoke near-equivalents with distinct hero panels, signal rows, section intros, proof rails, and card grids. `Sections.tsx` also retains an older component family.
- User impact: Buyers encounter shifting layouts and terminology for comparable information, while fixes must be repeated across page-specific systems.
- Recommended correction: Structural fix. Define a small set of composable primitives (route hero, proof ledger, editorial list, process, FAQ, collection empty state) and let pages vary content and intentional layout, not recreate the grammar.

### UI-12 — Medium — The interface contains generic AI-product visual tropes

- Relevant page: Homepage and platform/service routes.
- Relevant source file: `src/components/InteractiveHeroGraph.tsx`; `src/components/PlatformRoutePage.tsx:113`; `src/components/Sections.tsx:185`; `src/app/globals.css` throughout.
- Current problem: Decorative graph nodes, orbits, pseudo-console panels, status badges, repeated “system/graph/node/ledger/rail” language, pill chips, radial gradients, large rounded panels, and shadowed card grids recur without always conveying real product state or evidence.
- User impact: The site can read as an AI-generated technology template rather than a specific enterprise operator; decorative systems compete with actual offers and proof.
- Recommended correction: Mostly structural/content. Retain only diagrams that explain a real Ignitz workflow with verifiable labels and interactions. Remove decorative consoles/orbits and generic status UI; replace unsupported visualization with concise editorial evidence.

### UI-13 — Medium — Proof and partnership language is not consistently asset-backed

- Relevant page: `/` and shared content-led sections.
- Relevant source file: `src/content/site.ts:21-57`; `src/components/Sections.tsx:123-134`.
- Current problem: “Microsoft for Startups-backed” and multiple ecosystem/platform marks are presented as proof, while the project guide explicitly says placeholder logos, testimonials, and metrics must stay isolated until approved. No permissions or approved evidence files are present.
- User impact: Unverified or broken proof claims reduce buyer trust and can create brand/legal risk.
- Recommended correction: Content governance fix. Mark seed/placeholder proof in one typed collection with an approval status; render only approved claims in production and provide a restrained placeholder in development.

### UI-14 — Medium — Responsive behavior is managed page-by-page with inconsistent thresholds

- Relevant page: All public pages.
- Relevant source file: `src/app/globals.css` media queries, beginning at line 2,578 and repeated through line 14,626.
- Current problem: The stylesheet has many route-specific breakpoint pairs and five different “desktop-to-tablet” thresholds. Similar grids collapse at different widths, while the header uses a separate threshold from multiple content sections.
- User impact: Tablet and small-laptop layouts are more likely to show awkward wrapping, premature stacking, or inconsistent density; new pages inherit no dependable responsive contract.
- Recommended correction: Structural fix. Establish content-driven shared breakpoints, test a route matrix at approximately 360, 768, 1024, and 1440px, and keep component-specific queries only where content requires them.

### UI-15 — Medium — Type, radius, shadow, and spacing values exceed the token system

- Relevant page: All public pages.
- Relevant source file: `src/app/globals.css`.
- Current problem: Tokens cover colors and two shadows but not spacing, radii, type scale, or breakpoints. The implementation uses many independent radii (3–36px plus pills), shadows, gaps, paddings, letter spacings, and tiny uppercase text as small as 0.6rem.
- User impact: Visual hierarchy varies by route, small labels may be difficult to read, and design tuning becomes manual and inconsistent.
- Recommended correction: Styling-system fix after CSS consolidation. Add a compact semantic scale for spacing, type, radius, elevation, and layout; map surviving components to it. Avoid tokenizing every legacy value.

### UI-16 — Low — Global smooth scrolling does not itself honor reduced motion

- Relevant page: All pages with anchors.
- Relevant source file: `src/app/globals.css:20`.
- Current problem: `html { scroll-behavior: smooth; }` remains enabled; reduced-motion blocks disable many animations but do not clearly reset scroll behavior.
- User impact: Anchor navigation may animate for users who request reduced motion.
- Recommended correction: Styling/accessibility fix. Set `scroll-behavior: auto` inside the reduced-motion media query.

### UI-17 — Low — Legal and accessibility screens are visually isolated from the main content system

- Relevant page: `/privacy`, `/terms`, `/accessibility`.
- Relevant source file: `src/app/privacy/page.tsx`; `src/app/terms/page.tsx`; `src/app/accessibility/page.tsx`; `.legal-page` rules in `src/app/globals.css`.
- Current problem: These routes are minimal static pages with no visible last-updated date, owner/contact recovery context, or legal-copy approval status.
- User impact: Enterprise buyers cannot judge currency or ownership; placeholder legal copy could be mistaken for finalized policy.
- Recommended correction: Content/structural fix. Use one legal-document template with updated date, contact, approval marker in development, readable measure, and stakeholder-approved production copy.

### UI-18 — Low — Unused starter stylesheet remains in the repository

- Relevant page: None currently; maintenance risk.
- Relevant source file: `src/app/page.module.css`.
- Current problem: The default-style module includes unrelated layout rules and a dark-color-scheme media query, but `src/app/page.tsx` does not import it.
- User impact: It creates false design-system signals and risks accidental reintroduction of a dark direction that the project explicitly forbids.
- Recommended correction: Cleanup fix. Remove the unused file after confirming no import; keep the approved light-only constraint in the consolidated tokens.

## Structural fixes before styling fixes

1. Consolidate `globals.css`, delete dead layers, and standardize breakpoints.
2. Resolve missing/unsupported brand proof assets and claims.
3. Establish the global navigation, skip link, active state, and mobile-menu interaction contract.
4. Consolidate route primitives and define which pages legitimately need bespoke structures.
5. Decide contact/quote lead-capture behavior and production endpoints.
6. Then normalize tokens, typography, spacing, radii, shadows, and visual polish.

## Must remove or quarantine

- Missing ecosystem logo references and any unapproved partnership/proof claim.
- Superseded CSS layers and unused `page.module.css`.
- Decorative consoles, orbits, graphs, and continuous marquees that do not explain a real workflow.
- Repeated generic card-grid systems and unsupported “operating evidence” filler copy.
- The misleading “estimate ready” wording unless a defensible estimate is actually calculated.

## Validation gaps for the next phase

This source audit did not certify runtime appearance at mobile/tablet/desktop, keyboard traversal in a browser, color contrast of every composed state, or Sanity Studio behavior. After consolidation, validate all representative route families at 360, 768, 1024, and 1440px; traverse header, accordions, graph controls, forms, and footer by keyboard; run automated accessibility checks; and verify loading/empty/error/success states against both seeded and empty CMS data.
