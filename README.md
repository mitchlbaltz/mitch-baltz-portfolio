# Mitch Baltz — Portfolio

A static, single-page portfolio for **Mitch Baltz**, built for opportunities in
Democratic campaign communications, political and opposition research, public
affairs, advocacy, digital strategy, and voter outreach.

The site is intentionally lightweight: hand-written HTML and CSS with a small
amount of vanilla JavaScript, and no build step or third-party dependencies.

## Technology

- Plain HTML in `index.html`
- CSS in `assets/styles.css` (editorial serif headings, sans-serif body, warm
  off-white palette with restrained navy/blue accents)
- Minimal vanilla JavaScript in `assets/script.js` for the mobile navigation
  menu and active-section highlighting
- No framework, package manager, server-side code, or third-party libraries

## File structure

```text
.
├── index.html              # The portfolio (single page)
├── 404.html                # Custom not-found page
├── .nojekyll               # Tells GitHub Pages to serve files as-is
├── README.md
├── AI-REVIEW-NOTES.md      # Summary of the independent AI review
└── assets/
    ├── favicon.svg         # Monogram favicon / social image
    ├── mitch-baltz-resume.pdf
    ├── script.js
    └── styles.css
```

## AI workflow

This project was developed with AI assistance in two independent passes:

1. **Build** — the initial site was generated with **OpenAI Codex**.
2. **Review** — the site was then independently audited and improved with
   **Claude Code**, focused on accuracy against the resume, professional
   positioning, the Education section, accessibility, and web best practices.

The resume PDF (`assets/mitch-baltz-resume.pdf`) is treated as the source of
truth for all biographical and professional content. See `AI-REVIEW-NOTES.md`
for the review summary.

## Local preview

No build is required. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing on GitHub Pages

1. Push to GitHub.
2. In the repository, open **Settings → Pages**.
3. Set the source to the desired branch and the `/ (root)` folder.
4. Save. The site publishes at a project URL such as
   `https://<username>.github.io/mitch-baltz-portfolio/`.

All asset paths are relative, so the site works correctly from that
project-subpath URL. The `.nojekyll` file ensures GitHub Pages serves the
files without Jekyll processing.

## Resume

The source resume PDF lives at `assets/mitch-baltz-resume.pdf` and is linked
from the navigation, hero, contact section, and footer via download buttons.
