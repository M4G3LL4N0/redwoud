---
name: Security and Data Check
alwaysApply: true
---

Review this PR for security and data safety.

Check for:
- auth assumptions
- insecure data access
- missing migration support for schema changes
- nullability mistakes
- RLS implications
- unsafe environment variable usage
- missing error handling around data operations

Return:
- pass/fail
- specific issues
- exact files to inspect
