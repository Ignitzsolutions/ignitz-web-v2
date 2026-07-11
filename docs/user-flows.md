# Ignitz User Flows

## Experience objective

The website should help a qualified enterprise buyer identify the right Ignitz capability, verify that Ignitz understands the operating problem, and begin a focused commercial conversation with minimal uncertainty.

### Primary user

The primary user is a senior enterprise buyer: a transformation leader, technology executive, learning leader, or business owner responsible for an AI initiative with operational consequences.

### Primary problem

The buyer has an AI ambition or delivery constraint but cannot yet see a credible path from the current workflow to a governed, adopted outcome. They need to determine whether Ignitz can diagnose the work, deliver the system or capability, and leave their organization stronger rather than dependent.

### Primary outcome

A qualified buyer reaches `/contact` with a chosen need—training, AI product development, or an embedded expert team—and submits a concise project brief that gives Ignitz enough context to route and prepare the conversation.

## Navigation model

Use buyer language and expose the three offers directly.

1. **What we do**
   - Corporate AI training (`/training`)
   - AI product development (`/ai-product-development`)
   - Expert teams (`/expert-teams`)
2. **Work**
   - Case studies (`/case-studies`)
   - AI products (`/ai-products`)
   - Labs (`/labs`), with Incubator and Hackathons beneath it
3. **Industries** (`/industries`), with Healthcare as a featured industry route
4. **Insights** (`/blogs`)
5. **Company**
   - About (`/about`)
   - Team (`/team`)
   - Careers (`/careers`)
6. Persistent primary action: **Discuss your initiative** (`/contact`)

`/business-systems` remains a solution landing page reachable from the homepage, relevant services, industries, and search, but should not replace the plain-language service hierarchy. `/insights` should redirect to or become an editorial introduction to `/blogs`; two peer resource indexes are unnecessary. `/interns` belongs under Careers or Labs rather than global navigation. Legal pages remain in the footer. Studio is never part of public navigation.

## Main journey: choose a capability and start a conversation

Shortest successful path:

1. Buyer lands on `/` from search, referral, or direct traffic.
2. Hero states the operating-partner proposition and offers one primary action: **Discuss your initiative**.
3. Buyer scans three clearly differentiated capabilities: train a team, build an AI product, or embed experts.
4. Buyer opens the relevant service page.
5. Service page supplies fit, outcomes, method, credible proof, FAQ, and a single primary action.
6. Buyer opens `/contact` with the selected service carried in the URL or form state.
7. Buyer submits a short brief.
8. Success confirmation sets response expectations and offers a direct email/phone fallback.

The buyer must also be able to go directly from the homepage to Contact. Capability exploration is supportive, not mandatory.

## Secondary journeys

### Training evaluation

`/` or search → `/training` → choose `/training/ai-leadership-and-readiness` or `/training/consulting-bootcamps` → review audience, program shape, outputs, and FAQ → `/contact?service=training` → submit program brief.

Remove any step that asks a buyer to understand the Ignitz “platform” before understanding the program. The parent page compares the two program types; detail pages answer purchase-specific questions.

### AI product build evaluation

`/` or search → `/ai-product-development` → review fit, discovery-to-production process, governance, and relevant evidence → optionally inspect `/ai-products` or `/case-studies` → `/contact?service=ai-product-development` → submit project brief.

Products illustrate build capability; they are not a detour required to understand the service.

### Embedded-team evaluation

`/` or search → `/expert-teams` → review pod shapes, ownership model, capability transfer, and engagement boundaries → optionally view Case Studies or Team → `/contact?service=expert-teams` → submit delivery need.

### Proof-first evaluation

Search/referral → `/case-studies`, `/ai-products`, or a detail page → inspect problem, intervention, evidence status, and outcome → follow the contextual service link → `/contact`.

Every proof item must distinguish approved evidence from seed, illustrative, or unavailable content. Unapproved names, logos, testimonials, and metrics are never presented as proof.

### Industry evaluation

Search → `/industries` or `/health` → identify relevant workflow and constraints → open the most relevant service → `/contact` with industry context preserved.

Industry pages explain context and use cases; they do not invent a separate offer architecture.

### Research and credibility

Search/social → `/blogs/[slug]` → read → follow related service or insight → `/contact` if intent develops. `/blogs` is the canonical resource index. Related content should be limited and relevant rather than a generic card carousel.

### Talent journey

Search/referral → `/careers` → review working model and real open roles → application destination. If no approved roles exist, the page explicitly says so and offers a talent-interest contact path. `/interns` explains the builder pathway and links to Careers or a program inquiry; `/team` provides company credibility without pretending every profile is a sales proof point.

### Labs exploration

`/labs` → choose `/ai-products`, `/incubator`, or `/hackathons` → open a detail → contextual action such as request a walkthrough, discuss a pilot, or plan a builder program. Labs supports credibility and product discovery; it must not obscure the three commercial offers.

## Contact and recovery flow

### Form sequence

1. Service/need (preselected when referred from another page).
2. Work email and name.
3. Organization and role (optional unless sales routing requires them).
4. Short workflow/problem description.
5. Optional timing or urgency.
6. Submit **Send project brief**.

Do not call the form an estimator unless it returns a defensible range. Keep WhatsApp, email, and phone as secondary fallback channels.

### States

- **Loading/submitting:** preserve all values, disable duplicate submission, announce progress once.
- **Validation error:** associate each message with its field, focus the first invalid field, retain all valid values.
- **Server/network error:** explain that nothing was lost, offer Retry, and expose email/phone fallback.
- **Success:** confirm receipt, summarize the selected need, state the expected response window only when operationally approved, and allow a new submission.
- **Endpoint unavailable:** never silently fall through to `mailto:`. Present email as an explicit recovery action with a copyable subject/body where feasible.

## Dynamic content and permissions

- Public collection pages may show CMS content, approved seed content in development, or an intentional empty state.
- Missing CMS configuration is not an error for public visitors; show a concise empty/coming-soon state without implementation language.
- Unknown or unpublished slugs return a useful 404 with links back to the parent collection and Contact.
- Draft, seed, placeholder, and unapproved records must not be publicly represented as customer proof.
- `/studio` is permission-sensitive. Configured and authorized users see Studio; unauthorized users receive authentication/access guidance; unconfigured environments show setup guidance only to appropriate administrators, not marketing visitors.
- There are no public account roles or gated buyer features in the current product.

## Mobile journey rules

- Header shows logo, one compact **Discuss your initiative** action where space permits, and a menu button.
- Menu uses the same grouped hierarchy, opens as a true modal/drawer or conditionally rendered panel, traps focus if modal, closes on Escape and navigation, and returns focus to the trigger.
- Pages preserve content priority: proposition → primary action → key evidence → detail. Secondary actions follow the primary action and never visually compete.
- Comparison content becomes a labelled vertical sequence; data meaning must not depend on hover.
- Sticky or animated sections become normal document flow. Continuous marquees, decorative graphs, and horizontal overflow are excluded.
- Forms use one column, appropriate input modes/autocomplete, persistent labels, and error text adjacent to fields.
- Collection filters, if introduced, use native controls and URL state; results and empty states are announced without moving focus unexpectedly.

