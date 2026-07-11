# Component Inventory

## Application shell

| Component | Source | Used by | Responsibility | Audit disposition |
|---|---|---|---|---|
| `RootLayout` | `src/app/layout.tsx` | Every route | Metadata, fonts, global CSS, shell | Retain; add skip-link contract and metadata governance. |
| `SiteShell` | `src/components/SiteShell.tsx` | Every route | Header/footer wrapper; exempts Studio | Retain. Server/client split may be revisited, but behavior is sound. |
| `Header` | `src/components/Header.tsx` | Every public route | Brand, desktop nav, CTA, mobile menu | Retain concept; improve active state and mobile accessibility. |
| `Footer` | `src/components/Sections.tsx` | Every public route | Brand, sitemap, legal links, quote estimator | Split into focused files; reconsider global full estimator. |
| `BrandLogo` | `src/components/BrandLogo.tsx` | Header, homepage, footer | Optimized Ignitz mark | Retain; ensure one approved source asset. |

## Page composition

| Component | Source | Used by | Responsibility | Audit disposition |
|---|---|---|---|---|
| `PageRenderer` | `src/components/PageRenderer.tsx` | Homepage; legacy generic marketing composition | Selects generic page modules | Consolidate with the current route composition strategy; avoid two parallel systems. |
| `PrecisionHome` | `src/components/Sections.tsx` | `/` | Current homepage sequence | Retain content intent; simplify component/file boundaries and remove dead historical styles. |
| `PlatformRoutePage` | `src/components/PlatformRoutePage.tsx` | About, careers, case studies, expert teams, industries, insights, training routes, AI development, and others | Reusable service/informational page grammar | Strong reuse candidate; make IDs unique and extract primitives. |
| `DynamicCollectionHero` and dynamic collection views | `src/components/DynamicContent.tsx` | Product/blog/incubator/hackathon/team collections and details | CMS/seed collection rendering | Retain typed empty/fallback behavior; align visual primitives with route pages. |
| `DynamicDetailPage` | `src/components/DynamicContent.tsx` | `[slug]` routes | Shared detail-page template | Retain; add robust not-found/content-state conventions as UX specs mature. |

## Shared section inventory

`src/components/Sections.tsx` contains approximately 611 lines and acts as both a component library and page implementation. It includes homepage sections plus older generic marketing sections. These should be separated by responsibility after the redesign architecture is agreed.

| Component/group | Responsibility | Reuse/duplication note | Disposition |
|---|---|---|---|
| `Hero` / `HeroPlatformPanel` | Generic interior hero and decorative platform preview | Duplicates `PlatformRoutePage` hero/panel and bespoke route heroes | Choose one composable hero family; remove purely decorative panel variants. |
| `ClientSignalStrip` | Ecosystem logo proof | Currently references missing assets and has conflicting static/marquee styles | Quarantine until approved assets exist; prefer static proof. |
| `SystemsMap` / `InteractiveHeroGraph` | Visual division/capability navigation | Multiple graph/map metaphors overlap | Retain only if mapped to a real buyer workflow; otherwise replace with editorial navigation. |
| `PillarEditorial` / `PillarSection` | Offer/service pillars | Two implementations | Merge into one editorial list primitive with optional linked items. |
| `OutcomeProof` / `OutcomeSection` | Proof/outcome ledger | Two implementations plus page-specific proof bands | Merge; distinguish verified metrics from qualitative outcomes. |
| `StickyProcess` / `ProcessSection` | Delivery steps | Two implementations plus bespoke route rails | Merge into one ordered process primitive; sticky behavior only where useful. |
| `IndustryIndex` / `IndustrySection` | Industry fit | Two implementations | Merge. |
| `CaseStudyGrid` / `CaseStudySection` | Case-study cards | Parallel card systems | Merge; add approved/placeholder state. |
| `InsightsGrid` / `InsightSection` | Resource previews | Parallel card systems | Merge; link cards to detail routes and format dates consistently. |
| `FAQSection` variants | FAQ rendering | `FAQAccordion` plus static route FAQ articles | Define one accessible responsive pattern; avoid duplicate section IDs. |
| `ContactSection` | Contact channels and mailto form | Overlaps dedicated `/contact` page | Keep only where it supports the page CTA; otherwise link to Contact. |
| `FinalCTA` | Global conversion close | Similar CTA language appears across routes | Retain as a compact primitive with page-specific primary action. |

## Interactive components and states

| Component | Source | States present | Missing or risky states | Disposition |
|---|---|---|---|---|
| `ContactForm` | `src/components/ContactForm.tsx` | Native required validation; mailto handoff | No pending, endpoint error, success, recovery, durable submission | Requires product decision and approved endpoint. |
| `ProjectQuoteEstimator` | `src/components/ProjectQuoteEstimator.tsx` | Idle, submitting, success, error; disabled submit; live status | No field-level server errors, first-error focus, full reset; “estimate” mismatch | Rename/reframe or implement real estimate. |
| `FAQAccordion` | `src/components/FAQAccordion.tsx` | First open, expanded/collapsed | IDs are index-based and not instance-unique | Retain behavior; use `useId` and verify focus/heading context. |
| `HeroTypingText` | `src/components/HeroTypingText.tsx` | Typing, deleting, phrase rotation, reduced motion | Live region updates per character | Keep visual effect only if stable accessible text is supplied. |
| `InteractiveHeroGraph` | `src/components/InteractiveHeroGraph.tsx` | Active node, hover/focus, instructional text | Value is unclear without runtime context; can be decorative overload | Validate against a real user task or remove. |
| `RecruitmentIntelligenceMap` | `src/components/RecruitmentIntelligenceMap.tsx` | Selectable workflow nodes and status | Bespoke page-only interaction adds another visual grammar | Keep only if it explains actual recruitment workflow and mobile behavior passes. |

## Route implementation matrix

| Route | Implementation family | Dynamic state | Notes |
|---|---|---|---|
| `/` | `PageRenderer` → `PrecisionHome` | Static typed content | Current homepage is materially simpler than many retained historical CSS layers. |
| `/about` | `PlatformRoutePage` | Static typed content | Shared route primitive. |
| `/training` | `PlatformRoutePage` | Static typed content | Parent service route is absent from main navigation. |
| `/training/ai-leadership-and-readiness` | `PlatformRoutePage` | Static typed content | Service detail. |
| `/training/consulting-bootcamps` | `PlatformRoutePage` | Static typed content | Service detail. |
| `/ai-product-development` | `PlatformRoutePage` | Static typed content | Service detail. |
| `/expert-teams` | `PlatformRoutePage` | Static typed content | Service detail. |
| `/business-systems` | Bespoke route using shared panel/section concepts | Static typed content | Near-duplicate of shared route family. |
| `/health` | Bespoke route | Static typed content | Page-specific healthcare workflow system. |
| `/industries` | `PlatformRoutePage` | Static typed content | Shared route primitive. |
| `/case-studies` | `PlatformRoutePage` | Static typed content | Proof requires explicit approval state. |
| `/insights` | `PlatformRoutePage` | Static typed content | Overlaps `/blogs` in information architecture. |
| `/labs` | Bespoke route | CMS/seed products and community collections | Platform hub with a distinct section system. |
| `/ai-products` | Bespoke collection route | CMS/seed; empty fallback | Product portfolio. |
| `/ai-products/[slug]` | `DynamicDetailPage` | CMS/seed; `notFound` | Shared detail family. |
| `/incubator` | Bespoke collection route | CMS/seed; empty fallback | Product incubation. |
| `/incubator/[slug]` | `DynamicDetailPage` | CMS/seed; `notFound` | Shared detail family. |
| `/hackathons` | Bespoke collection route | CMS/seed; empty fallback | Events and outcomes. |
| `/hackathons/[slug]` | `DynamicDetailPage` | CMS/seed; `notFound` | Shared detail family. |
| `/blogs` | Bespoke collection route | CMS/seed; empty fallback | Canonical resource collection; reconcile label with `/insights`. |
| `/blogs/[slug]` | `DynamicDetailPage` | CMS/seed; `notFound` | Shared detail family. |
| `/team` | Bespoke collection route | CMS/seed; empty fallback | Main-nav “Company” points here rather than `/about`. |
| `/interns` | Bespoke collection route | CMS/seed; empty fallback | Community/talent route. |
| `/careers` | `PlatformRoutePage` | Static typed content | Footer/discovery route. |
| `/contact` | Bespoke conversion route | Mailto form | Needs production endpoint decision. |
| `/privacy` | Legal template | Static | Missing approval/currency metadata. |
| `/terms` | Legal template | Static | Missing approval/currency metadata. |
| `/accessibility` | Legal/support template | Static | Missing last-reviewed date and reporting workflow. |
| `/studio/[[...tool]]` | Sanity Studio | Sanity runtime | Correctly outside marketing shell. |

## Content and data inventory

| Source | Purpose | Assessment |
|---|---|---|
| `src/content/types.ts` | Typed marketing models | Retain; useful basis for a future CMS contract. |
| `src/content/pages.ts` | Reusable marketing-page records | Retain; review for concise, page-specific proof rather than repeated system language. |
| `src/content/site.ts` | Navigation, proof, homepage, services, outcomes, industries, insights | Retain but split by domain as it grows; add approval status to proof/logo records. |
| `src/content/dynamic/types.ts` | Dynamic collection types | Retain. |
| `src/content/dynamic/seed.ts` | Development seed/fallback content | Retain as explicitly non-production/seeded content. |
| `src/sanity/lib/content.ts` | CMS retrieval and fallback behavior | Retain; public pages already tolerate missing CMS configuration. |

## Token and pattern inventory

Defined global semantic tokens include body/heading/mono font families; canvas, ink, muted, line and surface colors; navy, orange, health/success accents; two shadows; maximum content width; header height; and easing. Missing token families are spacing, radii, type scale, breakpoints, control height, and elevation roles.

Observed pattern drift:

- Radius values span 3px through 36px plus `999px` pills.
- Numerous one-off shadows coexist with the two declared shadow tokens.
- Breakpoint conventions span 720–1180px with many page-specific pairs.
- Tiny uppercase metadata often ranges from 0.6–0.78rem with wide tracking.
- The same selectors are restyled in multiple distant sections of `globals.css`.

The redesign should derive a minimal token set from surviving, intentional patterns rather than preserve every observed legacy value.

## Recommended consolidation targets

1. `AppHeader`, `MobileNavigation`, `AppFooter`.
2. `RouteHero` with optional evidence panel, not a decorative console.
3. `SectionIntro` and `EditorialSection`.
4. `OutcomeLedger` with explicit verified/unverified data treatment.
5. `ProcessList`.
6. `CollectionList`, `CollectionEmptyState`, and `DetailPage`.
7. `FAQList` with one accessible interaction mode.
8. `FinalCTA` and a separately placed `ProjectBriefForm`.

This consolidation preserves intentional editorial variation while eliminating duplicate semantics, IDs, state handling, and CSS systems.
