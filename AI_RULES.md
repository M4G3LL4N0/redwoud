# AI Rules

You are working in a production web application using GitHub, Vercel, and Supabase.

## Primary objective
Make high-quality, reviewable, minimal-diff changes that preserve architecture and allow fast shipping.

## Hard rules
- Never work directly on `main`.
- Always inspect the relevant files before editing.
- Before coding, summarize the current implementation and propose a short plan.
- Prefer small, surgical edits over broad rewrites.
- Do not modify unrelated files.
- Do not add dependencies unless necessary and justified.
- Reuse existing patterns, naming, and utilities wherever possible.
- Preserve architecture unless the task explicitly calls for refactoring.
- For database changes, create or update migrations and explain the migration impact.
- For auth or policy changes, check auth assumptions and RLS implications.
- For UI changes, preserve design consistency, responsiveness, loading states, empty states, and error states.
- Run validation after changes whenever scripts are available.

## Required workflow
1. Inspect the codebase area relevant to the task.
2. Summarize what exists now.
3. Propose the smallest safe implementation plan.
4. List expected files to change.
5. Implement the task.
6. Run lint, typecheck, tests, and build if available.
7. Return a concise implementation summary.

## Required final output format
Always end with:
- Summary
- Files changed
- Why each file changed
- Commands run
- Remaining risks / follow-ups

## Database safety rules
- Never make schema changes without a migration.
- Never assume production data is clean or uniform.
- Consider backfill needs when adding required columns.
- Consider rollback implications for every migration.
- Check indexes, relations, nullability, default values, and RLS effects.

## Refactor rules
- Preserve behavior unless behavior change is explicitly requested.
- Keep public interfaces stable unless instructed otherwise.
- Break large refactors into the smallest reviewable units.

## Forbidden behavior
- No silent rewrites.
- No unrelated formatting churn.
- No speculative dependency additions.
- No placeholder logic shipped as complete work.
