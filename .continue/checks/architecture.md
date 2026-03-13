---
name: Architecture Check
alwaysApply: true
---

Review this PR for architecture quality.

Check for:
- unrelated files changed
- duplicate logic introduced
- business logic improperly mixed into UI
- needless rewrites
- deviation from existing naming or patterns
- hidden coupling or confusing data flow

Return:
- pass/fail
- specific issues
- exact files to inspect
