# Ignitz Page Specifications

## Global shell

**User objective:** orient quickly, reach a relevant offer, or start a conversation. **Required components:** skip link, logo, grouped desktop navigation, accessible mobile navigation, one persistent Contact CTA, main landmark, concise sitemap footer, legal links, direct contact details. **Primary action:** Discuss your initiative. **Secondary action:** the current page's own secondary action; none is added globally.

**States:** navigation has current-location state; mobile menu has open/closed, Escape, focus-return, and route-change behavior. Footer never contains the full project form. If navigation data fails, render the essential static offer links and Contact. On mobile, groups become labelled vertical sections and hidden links are removed from the accessibility tree.

## Home (`/`)

**Objective/entry:** understand Ignitz from direct, search, or referral traffic and choose a path. **Primary:** Discuss your initiative. **Secondary:** Explore what we do (in-page). **Required content:** plain-language operating-partner proposition; three differentiated offers; workflow-to-outcome method; approved proof or an honest proof placeholder; selected work; relevant industries; concise company credibility; final CTA. **Components:** route hero, offer editorial list, operating model, proof ledger, selected work, final CTA.

Keep the workflow-first proposition and capability transfer. Remove the broken logo marquee, decorative graph/orbit/console UI, unsupported backing claims, repeated product language, and generic grids. Loading should not be needed for core content; dynamic selected work uses stable placeholders. Empty proof omits the section or states that evidence is available on request. Dynamic failure leaves the commercial story intact. Success is a chosen service or Contact transition. Mobile stacks the three offers in priority order and replaces diagrams with a labelled sequence.

## Service hub: Corporate AI Training (`/training`)

**Objective/entry:** determine which program fits. **Primary:** Request a program brief. **Secondary:** Compare program options (in-page or first detail route). **Content/components:** audience and problems; comparison of AI Leadership/Readiness and Consulting Bootcamps; expected artifacts/outcomes; program format and prerequisites; delivery process; approved proof; FAQ; final CTA.

Remove generic signals that repeat hero copy. Loading is static. Empty proof is explicitly unavailable, not fabricated. Error in optional CMS proof does not remove program comparison. Success routes to Contact with Training preselected. Mobile comparison becomes two labelled sections, not a dense table.

## Training details (`/training/ai-leadership-and-readiness`, `/training/consulting-bootcamps`)

**Objective/entry:** validate a specific program for a cohort or leadership team. **Primary:** Book an executive workshop / Schedule a capability call. **Secondary:** Back to Training or the sibling program, only one. **Content/components:** who it is for; trigger problems; learning and business outcomes; modules/sequence; artifacts; cohort requirements; facilitator/proof information when approved; FAQ; final CTA.

Loading is static. If dates, facilitators, or proof are unavailable, omit them and offer a scoped conversation. Errors retain all core typed content. Success carries program name into Contact. Mobile renders modules as an ordered list and keeps CTA near the top and end without a sticky obstruction.

## Service: AI Product Development (`/ai-product-development`)

**Objective/entry:** assess Ignitz for an AI build from discovery to production. **Primary:** Discuss an AI product build. **Secondary:** View relevant AI products or case studies. **Content/components:** fit and non-fit; workflow/problem framing; discovery, prototype, production, governance, and transfer stages; responsibilities; technology only where decision-relevant; approved evidence; FAQ; final CTA.

Remove decorative console/status copy and unsupported maturity claims. Loading is static except evidence. Empty evidence offers a private relevant-example request. Error preserves service content. Success preselects AI Product Development on Contact. Mobile uses a simple ordered delivery path with no horizontal system board.

## Service: Expert Teams (`/expert-teams`)

**Objective/entry:** determine whether an embedded pod closes a delivery gap without creating dependency. **Primary:** Discuss an expert team. **Secondary:** View the delivery model or relevant case study. **Content/components:** engagement triggers; role/pod shapes; client versus Ignitz ownership; onboarding; cadence; governance; capability-transfer and exit model; approved proof; FAQ; final CTA.

Do not lead with “hire” unless the commercial model is staffing. Loading is static. Empty role availability gives a conversation path rather than false capacity. Error preserves the model. Success carries desired capability into Contact. Mobile stacks role shapes and ownership as definition lists.

## Cross-service solution: Business Systems (`/business-systems`)

**Objective/entry:** evaluate workflow automation, portals, dashboards, or governed operational systems. **Primary:** Discuss an operating workflow. **Secondary:** Explore AI Product Development. **Content/components:** target workflows; before/after operating model; system boundaries; integration/governance considerations; delivery path; relevant proof; final CTA.

Keep operational specificity; remove generic product-intelligence console UI. Static core content survives proof loading/error. Empty proof links to request a relevant example. Success preselects Business Systems in Contact. Mobile expresses before/after and handoffs linearly.

## Industries hub and Healthcare (`/industries`, `/health`)

**Objective/entry:** confirm domain understanding and find the right capability. **Industries primary:** Discuss your use case. **Secondary:** View case studies. **Healthcare primary:** Discuss a healthcare workflow. **Secondary:** Explore the relevant service. **Content/components:** industry constraints, representative workflows, buyers, applicable services, governance considerations, approved evidence, FAQ where substantive.

Avoid shallow industry cards and any medical/clinical performance claim without approval. Loading/error affects optional proof only. Empty industry evidence is labelled honestly. Success carries industry and use case to Contact. Mobile renders an index followed by readable industry sections; no interactive map is required.

## Work/proof: Case Studies (`/case-studies`)

**Objective/entry:** find evidence relevant to a buying decision. **Primary:** Request a relevant case study until approved public studies exist; later, open a selected study. **Secondary:** Discuss your initiative. **Content/components:** evidence-governance note in development; filters only when enough records exist; each approved record shows context, intervention, outcome, evidence status, and related service.

Loading uses neutral article skeletons. Empty state says public case studies are not yet available and offers a relevant-example request. Error offers Retry and Contact. Success is opening a case study or submitting a request. Never render placeholder organizations/metrics publicly. Mobile uses a single editorial list with filter controls above it.

## Labs hub (`/labs`)

**Objective/entry:** understand how Ignitz experiments become reusable product and builder capability. **Primary:** Explore AI products. **Secondary:** View the Incubator. **Content/components:** concise Labs role; routes to Products, Incubator, and Hackathons; selected approved items; how experiments are reviewed and transferred; contextual CTA.

Remove the product graph, console, and inflated “platform” status language. Loading covers selected records. Empty state keeps the Labs explanation and routes to Contact. Error offers Retry without losing navigation. Success is selecting a collection/detail. Mobile shows three clear pathways in sequence.

## Collection template (`/ai-products`, `/incubator`, `/hackathons`, `/blogs`, `/team`, `/interns`)

**Shared objective:** scan published records and choose one or take a contextual next action. **Entry:** global/sub-navigation, search, or referral. **Components:** collection hero, optional filters if meaningful, semantic list, explicit state region, contextual final action.

| Route | Primary action | Secondary action | Required record content | Keep/remove |
|---|---|---|---|---|
| `/ai-products` | Open a product | Request a walkthrough | Title, stage/status, problem, concise value, tags | Keep real product direction; remove status-console decoration. |
| `/incubator` | Open a project | Discuss a pilot | Title, stage, problem, owner/evidence where approved | Keep review-stage transparency; remove fictional traction. |
| `/hackathons` | Open an event | Plan a builder program | Theme, date/status, audience, outputs, approved results | Keep builder-pipeline context; remove invented participation metrics. |
| `/blogs` | Read an insight | Explore a related service | Title, date, author, excerpt, topic | Make canonical; merge/redirect `/insights`. |
| `/team` | Learn about the team | Learn about Ignitz or Contact | Name, role, concise bio, expertise, approved image | Do not link to nonexistent `/team/[slug]`; remove “people graph” metaphor. |
| `/interns` | Understand the pathway | Plan a builder program or view Careers | Name/cohort, contribution, approved evidence | Keep talent pathway; isolate seed profiles. |

**States:** loading uses a small number of neutral placeholders. Empty explains that no records are published and gives one route-specific action. Error offers Retry and a stable parent/support link. Success opens a detail where one exists. Unknown filters produce “No matches” with Clear filters, distinct from a globally empty collection. On mobile, lists are one column; filters use native controls and URL state.

## Dynamic detail template (`/ai-products/[slug]`, `/incubator/[slug]`, `/hackathons/[slug]`, `/blogs/[slug]`)

**Objective/entry:** deeply evaluate one published record. **Primary:** route-specific—request walkthrough, discuss pilot, plan program, or follow the related service. **Secondary:** Back to collection. **Content/components:** title/status/date context; problem or thesis; approach/body; capabilities/outputs; evidence and limitations; related service; final CTA.

Loading preserves title/body geometry. Missing/unpublished content returns 404 with parent collection and Contact/related service links. Fetch error offers Retry and parent navigation. Empty optional fields are omitted, not filled with generic copy. Success is completing the primary CTA transition. Draft/preview controls are permission-sensitive and never visible publicly. Mobile keeps metadata compact, body readable, and related content after the article.

## Insights compatibility route (`/insights`)

Preferred behavior is a permanent redirect to `/blogs` after SEO review. If retained temporarily, it is an editorial introduction with **Read the latest insight** as primary and **View case studies** as secondary; it must not duplicate the full blog index or use “Subscribe” unless a real consented subscription flow exists.

## Company: About (`/about`)

**Objective/entry:** understand who Ignitz is, how it works, and why it is credible. **Primary:** Discuss your initiative. **Secondary:** Meet the team. **Content/components:** company proposition; three connected capabilities; operating principles; location; verified milestones/recognition; leadership link; final CTA.

Remove unsupported ecosystem proof and vague platform language. Static content loads directly; missing optional proof is omitted. Success routes to Contact or Team. Mobile uses a clear narrative sequence.

## Careers (`/careers`)

**Objective/entry:** understand working culture and find a real opportunity. **Primary:** View/apply for open roles when roles exist; otherwise Register interest. **Secondary:** Learn about Ignitz. **Content/components:** working model, candidate expectations, hiring process, real role collection or honest empty state, accessibility/equal-opportunity information when approved.

Loading/empty/error apply to roles. Empty says no approved openings and provides one interest path. Application success must be owned by the selected endpoint; do not imply an application was received through a generic Contact link. Mobile keeps role facts and action visible without card clutter.

## Contact (`/contact`)

**Objective/entry:** send enough context for a relevant response. **Primary:** Send project brief. **Secondary:** Email, phone, or WhatsApp fallback (presented as one “Contact directly” group). **Content/components:** expectation statement; service-aware brief form; privacy/consent context; direct channels; office/location where useful.

Required states are idle, submitting, field validation error, server/network error, success, and retry/recovery. Preserve values on error; associate errors to fields; focus first invalid field; prevent duplicate sends. Success confirms receipt and next step without unapproved response-time promises. If no production endpoint exists, label the form unavailable and provide explicit direct channels—do not simulate success or silently launch `mailto:`. Mobile is one column with correct input modes and no competing footer form.

## Legal/support template (`/privacy`, `/terms`, `/accessibility`)

**Objective/entry:** verify policy, terms, or accessibility commitment. **Primary:** read the document; Accessibility additionally offers Report an accessibility issue. **Secondary:** Contact Ignitz. **Content/components:** approved title/body, owner, effective/last-reviewed date, contact/recovery, readable headings and lists.

Until approved, clearly mark copy as pending in non-production and avoid presenting placeholders as final policy. Static loading is unnecessary. Missing content shows an unavailable notice and contact route. Mobile uses a narrow readable measure and anchored section index only when document length warrants it.

## Studio (`/studio/[[...tool]]`)

**Objective/entry:** authorized editors manage dynamic collections. **Primary:** sign in/edit content when configured. **Secondary:** administrator setup/help. **Required states:** loading Studio; configured and authorized; configured but unauthenticated; authenticated but unauthorized; configuration missing; runtime error with retry/support.

Studio remains outside the marketing shell. Configuration details and environment-variable guidance are shown only in appropriate administrative environments. Mobile support follows Sanity capabilities; do not advertise mobile authoring if it is not validated.

