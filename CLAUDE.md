@AGENTS.md

## Production Application Standard
Treat this repository as a production application, not a visual concept.

Before implementing:
1. Restate the user goal.
2. Describe the shortest successful user flow.
3. List all required UI states.
4. Identify reusable components.
5. Identify accessibility, security, and data risks.
6. Ask only for information that blocks implementation.

Implementation rules:
- Use only existing design tokens and components.
- Do not create one-off colors, spacing values, or component variants.
- Use semantic HTML.
- Maintain keyboard navigation and visible focus.
- Use one clear primary action per screen.
- Do not add decorative gradients, glass effects, excessive cards, or animation.
- Do not use vague placeholder copy.
- Preserve user input during failures.
- Implement empty, loading, partial, success, and error states.
- Keep the UI responsive at mobile, tablet, and desktop widths.
- Validate external and AI-generated data before rendering.
- Require confirmation before consequential AI tool calls.
- Never expose secrets or perform authorization only in the browser.

After implementation:
- Run type checking.
- Run linting.
- Run component tests.
- Run end-to-end tests.
- Run accessibility checks.
- Check mobile and keyboard behavior.
- Review loading, empty, and error states.
- Report any unresolved risks or assumptions.

## Skill Selection
- If the user does not name a skill, choose the required skills automatically
  from the task.
- Use `frontend-ui-engineering` for UI implementation.
- Use `frontend-skill`, `use-mcp`, and `ponytail` for landing pages or visual
  polish work.
- Use `accessibility` for accessibility changes and checks.
- Use `performance` and `core-web-vitals` for performance work.
- Use `seo` for search optimization work.
- Use `ponytail-review` for simplification or over-engineering reviews.
- Use `gh-fix-ci` for GitHub Actions or CI failures.
- Use `notion-knowledge-capture` for product or workflow documentation.
- Use `openai-docs` for OpenAI product guidance.
