# Supabase Rules

## Schema changes
- Every schema change must be migration-backed.
- Do not manually rely on dashboard-only changes as the source of truth.
- Keep schema state reproducible from the repository.

## When changing schema
Always document:
- what changed
- why it changed
- whether existing rows need backfill
- whether indexes need updates
- whether RLS policies are affected
- how rollback would work

## Auth / RLS
- Never assume auth state.
- Check all affected read/write paths.
- Verify policy impact when adding new tables, columns, or relationships.
- Prefer explicitness over convenience.

## Types and app code
- If generated DB types are used, update them after schema changes.
- Ensure the app reflects new nullability, defaults, and constraints.

## Safety checklist
Before merging schema-related work:
- migration exists
- migration reviewed
- local validation passed
- affected queries reviewed
- RLS reviewed
- rollback considered
