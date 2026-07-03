# Refine Backlog

Priority order = file order. See `.claude/skills/refine` for process.

### Add canonical link and Open Graph meta to index.html

- type: feature
- impact: low — marginal SEO/social polish; canonical (`https://www.williamkita.com/`) mildly helps consolidate the wpkita.com → williamkita.com domain migration
- effort: small
- notes: Add `<link rel="canonical">`, `og:title`, `og:description`, `og:url`. Left over from the 2026-07-03 run, which stopped on diminishing returns.

### Add modern favicon set

- type: feature
- impact: low — only a legacy favicon.ico exists; an SVG favicon and apple-touch-icon would sharpen bookmarks/home-screen tiles
- effort: small
- notes: Generate from a simple monogram consistent with the site's #4a4e4d/#333 palette. Left over from the 2026-07-03 run.

### Add JSON-LD Person structured data

- type: feature
- impact: low — richer search snippet potential for a name query; speculative benefit
- effort: small
- notes: `@type: Person` with name, jobTitle, sameAs (GitHub, LinkedIn), url. Left over from the 2026-07-03 run.
