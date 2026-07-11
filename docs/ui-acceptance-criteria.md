# UI Acceptance Criteria

## Product clarity

- Every public page states a clear user objective and has one primary CTA, with at most one secondary CTA.
- Copy is concise, enterprise-focused, and supported by approved evidence or clearly isolated placeholders.
- Navigation labels and page hierarchy make the three core offers immediately understandable.

## Visual system

- All colors, spacing, typography, radii, borders, and shadows use documented global tokens.
- The interface remains light-only and uses Ignitz navy/orange accents with restraint.
- Layout is editorial and content-led; cards, pills, gradients, and decorative graphics appear only when they communicate structure or status.
- Long headings, body copy, navigation labels, and dynamic CMS content do not overflow.

## Responsive behavior

- Key routes are visually verified at 360–390 px, 768 px, and 1280–1440 px.
- No unintended horizontal scrolling occurs at 320 px or wider.
- Mobile navigation is operable by touch and keyboard, preserves focus visibility, and exposes the primary CTA.
- Content order and hierarchy remain coherent across breakpoints.

## Accessibility

- Semantic landmarks and a logical heading hierarchy are present; each page has one `h1`.
- All functionality is keyboard-accessible with visible focus indicators.
- Interactive controls have accessible names, and forms have persistent labels, helpful instructions, and field-level errors.
- Text and interactive-state contrast meet WCAG AA; status is not communicated by color alone.
- Motion respects `prefers-reduced-motion` and never blocks access to content.

## States and resilience

- Relevant dynamic areas define loading, empty, error, partial, and success states.
- Failed form submissions preserve user input and explain recovery.
- Destructive or consequential actions require confirmation or an undo path.
- Missing Sanity configuration or records produce intentional placeholders rather than broken pages.

## Engineering and performance

- Existing business logic, API contracts, and data behavior remain unchanged unless separately approved.
- Reusable components replace meaningful duplication without speculative abstraction.
- Client components and client-side state are used only where interaction requires them.
- Images and fonts are loaded without avoidable layout shift; major visual content is optimized for LCP.
- `npm run lint`, `npm run build`, and the repository tests pass.

## Verification artifacts

- Before, prototype, and final screenshots exist for representative key routes at mobile, tablet, and desktop widths.
- Browser console errors and known baseline warnings are recorded.
- Final review reports list revised routes, remaining issues, accessibility findings, performance findings, and known risks.
