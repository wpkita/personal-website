# Refine Done

### Fix dead web font loading (use.edgefonts.net is discontinued)

- type: bug
- impact: high — every visitor loads a script that fails (SSL error); the intended Source Sans Pro typography never renders and falls back to generic sans-serif
- effort: small
- notes: `app/index.html:32` loads `https://use.edgefonts.net/source-sans-pro.js`; Adobe shut down Edge Web Fonts. Verified dead (curl exit 35, SSL failure). Remove the script tag and switch `app/styles/wpkita-main.css` `font-family` to a modern system font stack (keeps the light-weight look, zero external deps). Self-hosting the font is overkill for this one-page site.
- resolution: Removed the dead `use.edgefonts.net` script tag from index.html and replaced the CSS `font-family` with a system font stack (`"Source Sans Pro", "Source Sans 3", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`). Chose the system stack over self-hosting or Google Fonts because it fixes the broken typography with zero external dependencies and negligible visual difference on a two-line page; Source Sans Pro still applies for the rare visitor who has it installed. Completed 2026-07-03.
