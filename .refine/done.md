# Refine Done

### Clean remaining boilerplate leftovers

- type: feature
- impact: low — polish only
- effort: small
- notes: —
- resolution: Filled humans.txt TEAM with William Kita / Senior Software Engineer / github.com/wpkita and dropped the empty THANKS placeholder. Removed Web Starter Kit template noise from index.html: "Add your site or app content here", the SEO canonical comment block, the "Built with love" footer comment, and the obsolete X-UA-Compatible IE=edge meta. Completed 2026-07-03.

### Brand the 404 page

- type: feature
- impact: low-medium — `app/404.html` was untouched Firebase CLI boilerplate with no link back home and none of the site's styling
- effort: small
- notes: —
- resolution: Rewrote 404.html to match the site: #4a4e4d background, same system font stack and light-weight centered headings as index, a "Back to williamkita.com" tile-style link to `/`, plus `noindex` meta. Styles are inlined so the page has zero dependencies (works even if the CSS path itself 404s). Verified via headless-Chrome screenshot. Completed 2026-07-03.

### Delete stale .travis.yml (contradicts Firebase deployment)

- type: bug
- impact: medium-low — config drift: `.travis.yml` deployed `app/` to S3, but the site deploys via `firebase deploy` per README/firebase.json; travis-ci.org is defunct
- effort: small
- notes: Nothing referenced it.
- resolution: `git rm .travis.yml`. The Firebase workflow in the README is the single documented deployment path now. Completed 2026-07-03.

### Replace Font Awesome CDN icons with inline SVGs

- type: feature
- impact: medium — the two icon links ARE the site's content; they depended on Font Awesome 4.2.0 from maxcdn.bootstrapcdn.com, a deprecated legacy CDN host and single point of failure
- effort: small
- notes: See backlog history for full context.
- resolution: Replaced both `<i class="fa ...">` icons with inline SVGs — GitHub Octicon mark (MIT) and Font Awesome Free linkedin-in glyph (CC BY 4.0, attribution kept as HTML comments) — and removed the font-awesome CDN stylesheet. `.wk-tile` now sizes the SVGs (4em box, currentColor fill), preserving the white-icon-on-#333-tile look. Verified via headless-Chrome screenshot: rendering matches the original design. The page now makes no third-party requests except gtag.js. Completed 2026-07-03.

### Update domain references from wpkita.com to williamkita.com

- type: bug
- impact: medium — user reports the site's new domain is https://www.williamkita.com; README's "Browse" link and package.json's `homepage`/`name` still said wpkita.com
- effort: small
- notes: User-added item (2026-07-03).
- resolution: Updated README.md browse link and package.json `name`/`homepage` to williamkita.com. Also fixed package.json `repository.url`: the GitHub API 301s wpkita.com.git to its renamed home, wpkita/personal-website. Left unchanged: the GitHub/LinkedIn profile links (wpkita is the account handle, not the domain), the `styles/wpkita-main.css` filename (renaming would churn a cached URL for zero user value), and .firebaserc/firebase.json (custom domains live in the Firebase console, not the repo). Completed 2026-07-03.

### Modernize Google Analytics: legacy analytics.js → gtag.js (GA4)

- type: bug
- impact: medium — originally scoped as "remove dead UA snippet", but the user caught that pageviews still flow: Google auto-migrated the account to GA4 and reuses the legacy analytics.js tag via a compatibility path. Removing it would have silently killed live analytics.
- effort: small
- notes: Item was re-scoped mid-iteration after user feedback. IMPORTANT for future passes: the GA snippet on this site is never dead code.
- resolution: Replaced the legacy analytics.js UA snippet (UA-54484358-1) with the current gtag.js snippet for GA4 property G-H4B5QBP2G3, supplied by the user from their GA admin dashboard. Placed in <head> per Google's tag instructions. Data collection now uses the supported path instead of Google's auto-migration shim. Completed 2026-07-03.

### Fix dead web font loading (use.edgefonts.net is discontinued)

- type: bug
- impact: high — every visitor loads a script that fails (SSL error); the intended Source Sans Pro typography never renders and falls back to generic sans-serif
- effort: small
- notes: `app/index.html:32` loads `https://use.edgefonts.net/source-sans-pro.js`; Adobe shut down Edge Web Fonts. Verified dead (curl exit 35, SSL failure). Remove the script tag and switch `app/styles/wpkita-main.css` `font-family` to a modern system font stack (keeps the light-weight look, zero external deps). Self-hosting the font is overkill for this one-page site.
- resolution: Removed the dead `use.edgefonts.net` script tag from index.html and replaced the CSS `font-family` with a system font stack (`"Source Sans Pro", "Source Sans 3", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`). Chose the system stack over self-hosting or Google Fonts because it fixes the broken typography with zero external dependencies and negligible visual difference on a two-line page; Source Sans Pro still applies for the rare visitor who has it installed. Completed 2026-07-03.
