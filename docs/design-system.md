# Ignitz visual design system

## Decision

**Recommend Direction A: Editorial Operating System.** Implement it as a single direction. Do not combine it with Direction B's floating navigation, softer panels, or more spacious presentation rhythm. Direction A better answers the redesign brief: it makes Ignitz feel like an enterprise operating partner, gives complex offers a legible commercial structure, and removes the generic AI-product tropes visible in the current site.

`src/styles/tokens.css` encodes Direction A only. It is intentionally not imported yet.

## Shared non-negotiables

- Light-only Ignitz navy/orange brand. Orange signals action or emphasis; it is not a page background or category color.
- One primary action and no more than one secondary action per page.
- Layout, hierarchy, and evidence carry the design. Do not use decorative orbits, consoles, nodes, marquees, arbitrary gradients, or generic card grids.
- No customer mark, metric, testimonial, case study, partnership, or performance claim appears without approval and attribution. Omit missing proof or label its availability honestly.
- Interactions explain navigation, workflow, state, comparison, or disclosure. They never exist only to animate the page.
- Semantic HTML, sequential headings, visible labels, visible focus, 44px minimum targets, and complete loading/empty/error/success states are part of the visual system.

## Direction A — Editorial Operating System (recommended)

### Visual thesis

Ignitz should look like a well-edited operating brief: decisive typography, a disciplined column grid, thin rules, quiet neutral surfaces, and small amounts of orange at moments of action. Navy supplies authority; near-black carries long-form reading. Space is generous between ideas but compact inside controls and evidence. The result is premium through precision, not ornament.

The page canvas is white. Sections alternate through spacing and rules first, with soft neutral or warm surfaces used only when a content role benefits from containment. Heroes are left aligned, commercially direct, and sized to keep the next section visible at common laptop heights. Lists, ledgers, and ordered sequences replace repeated tile grids.

### Content and interaction thesis

Every page answers, in order: relevance, owned outcome, engagement model, evidence, next step. Progressive disclosure is reserved for genuinely secondary detail such as FAQ answers and mobile navigation. Workflow diagrams use labelled steps and explicit handoffs; if the same idea works as an ordered list, use the list. Hover can reinforce an affordance but never reveal required content. Motion confirms state or spatial change and finishes quickly.

### Typography

- **Display and headings:** Space Grotesk, with Inter fallback. Use firm weights (600–700), compact line height, and restrained negative tracking only at display sizes.
- **Body and controls:** Inter. Default body is 16px/1.6; lead is 18–20px/1.55; small supporting text never drops below 14px.
- **Operational data:** IBM Plex Mono, only for IDs, dates in dense data, status codes, and compact technical metadata. Do not use mono as a decorative “AI” signal.
- **Eyebrows:** 12px Inter, 700, uppercase, 0.12em tracking. Keep to one short line and never use below 12px.
- **Scale:** display 64px, h1 52px, h2 40px, h3 28px, h4 21px, lead 19px, body 16px, small 14px, label 12px. Display, h1, and h2 use fluid `clamp()` tokens; all others remain stable.
- One `h1` per page. Do not style metadata as headings or skip heading levels.

### Color use

- **Canvas:** white. **Subtle section:** neutral 50. **Raised surface:** white. **Selected/brand-tinted surface:** navy 50. **Action-tinted surface:** orange 50.
- **Primary text:** near-black. **Secondary text:** slate. **Brand authority:** navy 700. **Primary action:** orange 600 with near-black text; orange 700 is the hover/active border and text accent.
- Orange is reserved for the primary CTA, active markers, focus, and small moments of emphasis. Navy is used for brand framing, headings where useful, selected navigation, and the darkest CTA alternative.
- Status colors are semantic and paired with an icon and text. Never assign colors by route, industry, product, or content collection.
- Text and controls must meet WCAG 2.2 AA contrast. The focus ring uses an opaque orange outline with a white offset halo so it remains visible on every approved surface.

### Navigation

- Use a full-width, 72px sticky header with a white/96% surface, a bottom rule, and no floating capsule or drop shadow.
- Desktop uses grouped navigation with clear labels, a 2px active underline, `aria-current`, and one compact “Discuss your initiative” button. Menus open on click and support keyboard operation; do not create hover-only mega menus.
- Mobile uses a 64px header and a true conditional navigation panel organized into labelled groups. It supports Escape, focus return, route-change close, inert/hidden semantics, and body-scroll management.
- Provide a focus-revealed skip link and a stable `#main-content` target. Anchors use header-aware scroll margin.

### Surfaces and density

- Prefer open editorial composition with rules and aligned columns. Use a contained surface only for forms, feedback, selected records, or a clearly bounded evidence unit.
- Default section padding is 96px desktop, 72px tablet, and 56px mobile. Compact sections use 64/48/40px. Hero padding is 96px top and 80px bottom on desktop, never a forced full viewport.
- Default component padding is 24px desktop and 20px mobile. Dense rows use 16px vertical padding.
- Avoid nested surfaces. A surface may have a border or a subtle shadow, not both by default. Use the 1px neutral border as the primary separator.
- Use 4px, 8px, and 12px radii. Pills are reserved for status or filters whose shape communicates a compact token; buttons are not pills.

### Buttons

- Minimum height 44px; standard height 48px. Radius 8px. Labels use 14px/700 with no forced uppercase.
- **Primary:** orange fill, near-black text, orange-700 border; darken slightly on hover. One primary style per action group.
- **Secondary:** white fill, navy text, neutral-strong border; use for the single secondary action.
- **Tertiary:** inline navy text with a directional icon; underline appears on hover and focus.
- **Destructive:** red fill only for confirmed destructive operations, not marketing actions.
- Disabled controls remain legible, use `not-allowed`, and are never the sole explanation for why an action is unavailable. Pending buttons retain width, show a small spinner, and use a state label such as “Sending…”.

### Forms

- Visible labels sit above controls; helper text follows the label and errors follow the control. Required state is stated in text, not only an asterisk.
- Controls are 48px high; textareas have a 128px minimum height. White controls use a neutral-strong border and 8px radius. Placeholder text is illustrative, never a replacement for a label.
- Hover strengthens the border. Focus uses the system focus ring. Invalid fields use a red border plus an icon/message connected with `aria-describedby`; focus the first invalid field after submit.
- Preserve entered values on server/network error, prevent duplicate submissions, and provide explicit pending, success, error, and retry states. Never simulate success when the production endpoint is unavailable.
- Native inputs and selects are preferred. Filters use URL state and a visible “Clear filters” action when applied.

### Data and evidence display

- Use an **outcome ledger** for proof: label/context, intervention, outcome, evidence status, and source. Align fields to the grid; separate rows with rules.
- Tables are for true multi-column comparison, not page layout. Headers are left aligned, 12px/700, with a neutral-50 header surface. Rows are 52px minimum and use horizontal rules; avoid zebra striping unless density makes row tracking difficult.
- On narrow screens, preserve the data relationship: allow an intentionally scrollable table with an accessible label, or transform each row into a definition list. Do not hide columns silently.
- Status uses icon + text in a compact badge. Skeletons approximate real geometry and never invent logos, names, metrics, or record counts.
- Empty states state what is unavailable and offer one useful action. Error states state what failed and provide Retry or a stable fallback. Success states confirm only what the system actually completed.

## Direction B — Quiet Institutional (conservative alternative)

Direction B retains more of the current visual familiarity. It is a valid fallback, but it is **not recommended** and must not be blended into Direction A.

### Visual and content thesis

The site reads like a polished corporate advisory practice: larger areas of white space, centered or narrow-column introductions, soft bordered panels, and a gentler hierarchy. Content follows the same five buyer questions, but interaction is reduced further: primarily links, accordions, and form states. This lowers redesign risk but makes the three-offer operating-partner distinction less immediate and can preserve some of the current “presentation page” feel.

### Typography and color

- Retain Space Grotesk headings and Inter body, but cap display at 56px, use 600 heading weights, 1.05–1.15 heading line heights, and a 17px body size.
- Use white and neutral-50 broadly, navy for headings/navigation, and orange almost exclusively for primary buttons and small link accents.
- Avoid mono in marketing layouts; reserve it for actual technical data.

### Navigation, surfaces, and density

- Retain a floating contained header, but simplify it to a 12px radius, a single border, and a very soft shadow. Active state remains a navy underline; mobile behavior follows the same accessibility contract as Direction A.
- Use more bordered content panels and two-column text/panel arrangements, with 16px radii and soft shadow only for the highest-priority panel.
- Section spacing is 112px desktop, 80px tablet, and 56px mobile. Content density is lower; evidence remains an editorial list rather than a tile grid.

### Buttons, forms, and data

- Buttons are 48px high with 10px radii. Primary remains orange; secondary is white/navy. No pills except status.
- Forms use the same explicit labels, state handling, and accessible errors as Direction A, but may sit in a 16px-radius bordered panel with 32px desktop padding.
- Tables use more breathing room (60px rows) and can use a soft header panel. Evidence lists remain rules-based and may show a subtle navy-tinted selected row.

## Direction A foundation

### Semantic token model

Components consume semantic tokens (`--color-text-primary`, `--color-action-primary`, `--space-section`, `--radius-control`) rather than palette values. Primitive palette tokens exist only to define semantic roles. Route CSS must not introduce new hex colors, shadows, radii, or spacing values.

The token file defines:

- brand and neutral primitives;
- semantic text, surface, border, action, focus, and feedback roles;
- fluid type roles and font families;
- a compact 4px-based spacing scale plus semantic page/component spacing;
- content, wide, and text measures;
- control, border, radius, icon, shadow, layer, and motion roles.

### Grid and widths

- Page gutter: 24px mobile, 40px tablet, 56px desktop; use `--gutter-page`.
- Main content: 1200px maximum. Wide content: 1320px. Reading measure: 720px. Compact measure: 560px.
- Desktop: 12 columns, 24px gutters. Tablet: 8 columns, 20px gutters. Mobile: 4 columns, 16px gutters.
- Align hero copy, section headings, ledgers, and final CTAs to the same grid. Do not center a narrow module inside an unrelated grid merely for symmetry.

### Breakpoints

Use mobile-first CSS and only these shared boundaries:

- Base: 0–639px (4-column contract; validate at 360/390px).
- `sm`: 640px and above.
- `md`: 768px and above (8-column tablet contract).
- `lg`: 1024px and above (desktop navigation and 12-column layout only when content fits).
- `xl`: 1280px and above.
- `2xl`: 1440px and above (validation width, not a license for larger type).

CSS custom properties cannot be used directly in media-query conditions; keep these values documented and repeated only in shared media rules. Component-level container queries are allowed when a component's content, rather than the viewport, determines reflow.

### Borders, radii, shadows, and icons

- Border: 1px default, 2px selected/emphasis. Use neutral borders; action borders use their semantic state color.
- Radius: 4px small, 8px controls/default, 12px contained feature, full only for status/filter badges and circular icon buttons.
- Shadow: none by default; one low elevation for menus/popovers and one medium elevation for dialogs. Large ambient card shadows are not part of the system.
- Icons: simple outlined SVGs, 1.75px stroke, round joins/caps. Sizes are 16, 20, and 24px. Icons supplement visible text; icon-only controls require accessible names. Do not use bespoke “AI sparkle,” orbit, node, or robot iconography.

### Feedback and overlays

- Inline feedback sits adjacent to the affected content. Page-level alerts use icon, heading, concise message, and at most one recovery action.
- Info uses navy; success green; warning amber; error red. Never communicate state by color alone.
- Popovers and menus use the low shadow and 8px radius. Dialogs use the medium shadow, 12px radius, a visible title, focus trap, Escape close where safe, and focus return. Avoid dialogs for ordinary page navigation.
- Toasts supplement an in-context confirmation; they do not carry the only record of success or failure.

### Responsive behavior

- Preserve source order. Multi-column editorial layouts become one column without moving the CTA ahead of its explanatory content.
- Heroes and body copy use fluid type tokens; controls and metadata do not shrink below their defined sizes.
- Horizontal process boards become numbered vertical sequences. Comparison tables become labelled definition lists or explicitly scrollable tables. Navigation becomes grouped mobile sections.
- Media uses intrinsic dimensions and `object-fit` deliberately. Do not crop approved logos or evidence imagery into decorative shapes.
- Test Home, one service, one collection, one detail, Contact, and one legal page at 360, 768, 1024, and 1440px.

### Motion and reduced motion

- Motion is optional. Use 120ms for micro feedback, 180ms for controls, and 240ms for panels. Only opacity and transform may animate by default; do not animate layout dimensions or run continuous motion.
- Use the standard easing token for entering and the emphasized easing token for spatial transitions. State changes remain understandable with animation disabled.
- Under `prefers-reduced-motion: reduce`, set smooth scrolling to auto, reduce durations to effectively zero, remove nonessential transforms, stop auto-advancing content, and expose final content immediately.
- Never place character-by-character updates in a live region. Announce only meaningful completed states.

## Governance

- `src/styles/tokens.css` becomes the only central token source when the implementation phase imports it. Existing values in `globals.css` should be mapped to semantic tokens and removed incrementally; do not keep two live token systems.
- Add a token only when at least two components share a durable semantic need. Do not tokenise every legacy value.
- Product imagery and external marks require an owner, approval state, source, and usage rights. Development placeholders remain isolated and cannot appear as production proof.
- Visual QA is incomplete until keyboard navigation, focus visibility, heading hierarchy, responsive layouts, reduced motion, and all form/content states are exercised in a real browser.
