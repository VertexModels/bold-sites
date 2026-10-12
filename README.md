# Bold Sites — landing page

Static site: plain HTML/CSS/JS, no build step, relative paths only. Open `index.html` directly or serve the folder (`python3 -m http.server`).

```
index.html            all copy (Arabic-ready: swap to <html lang="ar" dir="rtl">)
assets/brand-tokens.css  brand tokens from the brand kit (+ JetBrains Mono 600 added to the font import)
assets/style.css      layout, uses CSS logical properties so dir="rtl" works
assets/main.js        mobile menu toggle only
assets/logo/          supplied SVG logos (unchanged)
assets/img/           portfolio thumbnails (cropped from sample-site screenshots) + og.png
favicon.*, apple-touch-icon.png   from logo/icon-cobalt
```

## Before going live
- Remove `<meta name="robots" content="noindex, nofollow">` from `index.html`.
- Replace the `href="#"` WhatsApp/email placeholders (search for "coming soon") and remove `aria-disabled`.
- Make `og:image` an absolute URL (`https://boldsites.me/assets/img/og.png`) and add `og:url`, since social scrapers need absolute URLs.

## Publishing on GitHub Pages with boldsites.me
1. Push this folder's contents to the root of a repo (or a `/docs` folder).
2. Repo → **Settings → Pages** → Source: *Deploy from a branch*, choose the branch and folder.
3. In the same screen set **Custom domain** to `boldsites.me` (this creates a `CNAME` file containing `boldsites.me`; or commit one yourself).
4. At your DNS provider:
   - Apex `boldsites.me`: four `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (optionally `AAAA` → `2606:50c0:8000::153`, `…8001::153`, `…8002::153`, `…8003::153`).
   - `www`: `CNAME` → `<your-github-username>.github.io`.
5. Optional but recommended: verify the domain under your GitHub account **Settings → Pages** to stop takeovers.
6. Once DNS resolves (can take up to 24h), tick **Enforce HTTPS**.

Relative paths mean nothing needs changing when the domain moves.
