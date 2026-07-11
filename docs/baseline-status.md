# UI Redesign Baseline

Recorded on 2026-07-12 from branch `redesign/ui-v2`.

## Repository state

- Package manager: npm (`package-lock.json`).
- Framework: Next.js 16 App Router, React 19, TypeScript.
- Important static/public routes: 30 page routes plus generated dynamic collection routes, API, Studio, sitemap, and robots endpoints.

## Verification

- `npm run lint`: passed.
- `npm run build`: passed; 39 static pages generated.
- `node --test src/lib/*.test.ts`: passed (4 tests).
- Browser console on captured key routes: no warnings or errors.

## Pre-existing warnings and risks

- `npm install` reports 24 dependency vulnerabilities: 2 low, 15 moderate, and 7 high. No automatic audit fix was applied because dependency mutation is outside the visual baseline.
- Build workers report that `localStorage` is unavailable without a Node `--localstorage-file`; the build still succeeds.
- Node test execution reports `MODULE_TYPELESS_PACKAGE_JSON` because the package does not declare an ES module type; tests still pass.
- Stakeholder-approved legal copy, customer permissions, proof assets, production form endpoints, and priority-workflow confirmation remain outstanding.

## Screenshot coverage

Baseline full-page captures are stored in `docs/screenshots/before/` at:

- Mobile: 390 × 844
- Tablet: 768 × 1024
- Desktop: 1440 × 1000

Captured routes: homepage, training, AI product development, expert teams, AI products, and contact.
