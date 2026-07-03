# Refine Backlog

Priority order = file order. See `.claude/skills/refine` for process.

### Clean remaining boilerplate leftovers

- type: feature
- impact: low — polish only
- effort: small
- notes: (1) `app/humans.txt` still has `<name> -- <role> -- <twitter>` placeholders — fill with William Kita / Senior Software Engineer or delete the file; (2) index.html comments "Add your site or app content here", the SEO canonical comment block, and "Built with love using Web Starter Kit" are template noise; (3) `<meta http-equiv="X-UA-Compatible" content="IE=edge">` is obsolete.

### Harden firebase.json hosting config

- type: feature
- impact: low — nice-to-have
- effort: small
- notes: Add `"cleanUrls": true` and cache headers (long max-age for `styles/**`, short for HTML). Consider basic security headers (X-Content-Type-Options, Referrer-Policy). Verify against current Firebase Hosting docs before applying.
