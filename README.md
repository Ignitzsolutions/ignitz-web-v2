# Ignitz Web V2

Ignitz Web V2 is the public website for Ignitz Solutions. The current direction is a light-only AI systems platform site: clear hero promise, interactive operating graph, editable enterprise proof signals, route-specific platform pages, and CMS-backed product/resource records.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run lint
npm run build
```

The local build environment may print a `--localstorage-file` warning during static generation. The warning is environment-related; verify the command exit code before treating it as a failure.

## Content Notes

- Primary brand asset: `public/brand/ignitz-logo.png`.
- Homepage enterprise names are text-only editable signals until client/logo approval is complete.
- Qualcomm, Shell, and `Enterprise Client A/B` are draft placeholders, not approved client logo claims.
- CMS-backed records currently cover AI products, incubator projects, hackathons, blogs, team members, and interns.

## Main Routes

- `/` - homepage platform hero and proof wall
- `/labs` - AI systems platform
- `/ai-products` - product portfolio
- `/business-systems` - operations systems
- `/health` - healthcare workflows
- `/blogs` - resources and field notes
- `/team` - company and people system
- `/contact` - inquiry flow

## Editing Guidance

Keep the site light-only and use the existing Ignitz navy, orange, green, and neutral palette. Do not add client logos, customer claims, or metrics until they are approved. Prefer editing content in `src/content` and route-specific page files before introducing new global abstractions.
