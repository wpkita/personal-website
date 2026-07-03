# Refine Backlog

Priority order = file order. See `.claude/skills/refine` for process.

### Harden firebase.json hosting config

- type: feature
- impact: low — nice-to-have
- effort: small
- notes: Add `"cleanUrls": true` and cache headers (long max-age for `styles/**`, short for HTML). Consider basic security headers (X-Content-Type-Options, Referrer-Policy). Verify against current Firebase Hosting docs before applying.
