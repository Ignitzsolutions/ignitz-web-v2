# Ignitz Website Redesign Brief

## Product decision

Reframe Ignitz as an enterprise AI operating partner with three immediately understandable offers: corporate AI training, AI product development, and embedded expert teams. The site should convert qualified interest into a focused project brief while using products, Labs, industry knowledge, and insights as evidence—not as competing top-level propositions.

## Audience and buying context

Primary buyers are transformation leaders, technology executives, learning leaders, and operational business owners. They arrive with a workflow, adoption, delivery-capacity, or governance problem. They need fast answers to five questions:

1. Is this offer relevant to my problem?
2. What outcome will Ignitz own or enable?
3. How does the engagement work?
4. What credible evidence supports the claim?
5. What is the next low-friction step?

## Experience principles

- Lead with enterprise outcomes and buyer language, not internal platform metaphors.
- Give every page one primary CTA and no more than one secondary CTA.
- Make service routes commercially complete: fit, outcomes, method, proof, FAQ, and final CTA.
- Use proof only when approved and attributable. Label development seed content; remove broken or speculative logos and metrics.
- Make interactions explain workflow, state, or decisions. Remove decorative consoles, orbits, marquees, typing announcements, and graphs that add no buyer understanding.
- Use a calm editorial hierarchy: concise proposition, strong section sequencing, readable evidence, and generous but purposeful space.
- Preserve the light-only Ignitz navy/orange brand direction, semantic HTML, visible focus, reduced-motion behavior, typed content, and resilient CMS fallbacks.
- Prefer consolidation over replacement: one shell and a small set of service, collection, detail, legal, and conversion patterns.

## Information architecture

### Primary hierarchy

- Home
- What we do
  - Corporate AI training
  - AI product development
  - Expert teams
- Work
  - Case studies
  - AI products
  - Labs
- Industries
- Insights
- Company
- Contact

### Supporting hierarchy

- Training program details live below Training.
- Incubator and Hackathons live below Labs.
- Healthcare is a featured industry solution below Industries.
- Business Systems is a cross-service solution page.
- Team and Careers live below Company; Interns belongs below Careers or Labs.
- Privacy, Terms, and Accessibility remain footer-only.
- `/blogs` is canonical for insights; retire or redirect the overlapping `/insights` index after preserving SEO value.

## Page-level action policy

- **Home:** primary “Discuss your initiative”; secondary “Explore what we do.”
- **Service pages:** primary service-specific consultation; secondary one relevant proof or sibling route.
- **Proof/collection pages:** primary inspect the collection or selected item; page-closing CTA is contextual commercial contact.
- **Detail pages:** primary product-/project-specific conversation; secondary back to collection.
- **Company and editorial pages:** primary path follows user intent (meet Ignitz, view roles, or read); commercial contact remains contextual rather than repeated at equal weight.
- **Contact:** primary “Send project brief”; secondary direct contact fallback.

Repeated global forms must not compete with these page actions. Replace the current full-site footer estimator with a concise footer and place the project brief on Contact and only on explicitly conversion-focused pages if later evidence supports it.

## Content strategy

### Keep and strengthen

- The three-offer business model and capability-transfer distinction.
- Workflow-first diagnosis, governed delivery, adoption, and operating-memory concepts when expressed plainly.
- Typed content in `src/content` and resilient Sanity collections.
- Service outcomes, ordered process, FAQs, industry relevance, and concise final CTA.
- Product, incubation, hackathon, team, intern, and blog collections as supporting evidence.
- Hyderabad location and verified contact details.

### Remove, merge, or quarantine

- Broken ecosystem logo strip and unapproved partnership/customer claims.
- Unsupported metrics, testimonials, client names, and “proof” filler.
- “Estimate ready” language when no estimate is calculated.
- Repeated platform/system/graph/console terminology where it does not convey actual product behavior.
- Duplicate card grids, hero systems, process sections, FAQ patterns, and resource indexes.
- Perpetual or decorative motion and assistive-technology typing noise.
- Full project form in every footer.
- `/insights` as a duplicate peer index; merge with `/blogs`.
- Team links to nonexistent detail routes unless those routes are implemented and published.

## Shared page system

Build future implementation around these content structures, without forcing every page into the same visual composition:

- Global shell: accessible header, grouped mobile navigation, concise footer, skip link.
- Service template: route hero, fit/problem, outcomes, engagement model, approved proof, FAQ, final CTA.
- Hub template: editorial introduction, prioritized pathways, selected proof, contextual CTA.
- Collection template: introduction, optional meaningful filters, list, loading/empty/error states.
- Detail template: status/context, problem, approach, evidence, related service, contextual CTA.
- Legal template: title, approval/currency metadata, readable document, contact/recovery.
- Contact template: expectation setting, project brief, direct channels, complete submission states.

## State and trust requirements

- Server-render stable headings and primary content; loading placeholders must preserve approximate layout without simulating false records.
- Empty states explain what is unavailable and give one useful next action.
- Errors state what failed, preserve user work, and offer Retry or a relevant fallback.
- Success states confirm what happened and what happens next; do not claim response times without operational approval.
- 404 states link to the parent collection and a relevant commercial route.
- Draft/unapproved CMS records remain private. Public interfaces never expose authoring or environment configuration details.
- Studio access is separate from the public site and governed by Sanity authentication/authorization.

## Responsive and accessibility requirements

- Validate representative templates at 360, 768, 1024, and 1440px.
- Preserve one `h1`, sequential headings, landmarks, visible labels, 44px targets, and visible focus.
- Add a skip link, `aria-current`, stable main target, and anchor scroll margin.
- Mobile menu supports Escape, focus return, route-change close, and hidden/inert semantics.
- No interaction depends on pointer hover; no content is hidden behind animation.
- Reduced motion disables smooth scrolling and nonessential movement.
- Dynamic announcements occur once per meaningful state, never per animated character.

## Success measures

Instrument only after analytics/privacy approval. Recommended measures are:

- Primary CTA click-through from Home and each service page.
- Project-brief starts, completion rate, validation failures, and successful submissions.
- Capability-to-Contact path length and abandonment.
- Proof-to-service and detail-to-contact transitions.
- Qualified inquiry rate by service, not raw form volume.
- Mobile versus desktop completion and Core Web Vitals.

## Dependencies and unresolved decisions

- Approved customer logos, usage rights, testimonials, metrics, and case-study evidence.
- Final legal, privacy, consent, retention, and accessibility-reporting copy.
- Production project-brief endpoint, ownership, spam controls, notification routing, and response commitment.
- Confirmation of the three highest-value workflows and conversion targets.
- Decision on public Team detail pages and canonical `/insights` redirect behavior.
- CMS publication/approval model for production versus seed content.

