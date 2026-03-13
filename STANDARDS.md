# Engineering Standards

## TypeScript
- Prefer strict typing.
- Avoid `any` unless justified.
- Use explicit types for public interfaces and shared utilities.
- Keep functions focused and named clearly.

## React / Next.js
- Keep components small and composable.
- Extract repeated logic when duplication becomes meaningful.
- Handle loading, empty, success, and error states explicitly.

## Data / API
- Centralize repeated data access logic.
- Validate nullability assumptions.
- Avoid hidden side effects.
- Keep auth assumptions explicit.

## Styling / UI
- Preserve visual consistency.
- Reuse existing component patterns.
- Keep responsive behavior intact.
- Do not introduce visual churn outside the scope of the task.

## Testing
- Add or update tests when behavior changes.
- For bug fixes, add regression coverage where practical.
- At minimum run lint + typecheck + build if available.

## Commit / PR quality
- Keep diffs tight.
- Avoid unrelated cleanup.
- Explain the intent clearly.
- Note any tradeoffs or unresolved risks.
