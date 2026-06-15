# AI Review Notes

The original site was built with **OpenAI Codex** and then independently
reviewed and improved with **Claude Code**. The resume PDF in this repository
was treated as the source of truth; no employers, dates, degrees, metrics, or
skills were invented.

## Most important weaknesses found

- **Education section felt unfinished.** It used a two-column "muted" full-bleed
  layout with a single small card, leaving awkward empty space and weak
  hierarchy.
- **No LinkedIn link** anywhere, despite the site being aimed at recruiters.
- **Social/metadata gaps:** the Open Graph image had no alt text and there was
  no `theme-color`.
- **Generic footer** ("Built for GitHub Pages") with no useful contact links.
- **No active-state feedback** in the navigation as a visitor scrolls.

## Improvements made

- **Redesigned the Education section** into an intentional editorial block:
  Tulane University as the heading, the degree on its own line, and a clean
  two-up facts grid (Expected graduation / Location) with a restrained blue
  top-rule. Clearer hierarchy and spacing, no oversized card, no empty space.
  All details kept accurate to the resume.
- **Added a LinkedIn link** (provided by Mitch) to the navigation, contact
  section, and footer, with `target="_blank"` and `rel="noopener noreferrer"`.
- **Rebuilt the footer** with name/location, quick links (Email, LinkedIn,
  Resume), and a copyright line.
- **Improved metadata:** added `og:image:alt` and a `theme-color`.
- **Added active-section navigation highlighting** via a small, dependency-free
  `IntersectionObserver` that sets `aria-current` on the current link
  (progressive enhancement; the site works without JavaScript).
- Removed an unused CSS selector left over from the old Education card.

## Tests performed

- Reviewed the full rendered structure and the complete diff.
- Verified heading order (single `h1`, no skipped levels) and that all external
  links use `rel="noopener noreferrer"`.
- Confirmed the resume PDF path and all internal anchor links resolve, and that
  no references to the removed Education card remain.
- Checked responsive behavior in CSS at ~375px, 768px, and desktop widths
  (mobile menu, single-column stacking, education facts grid).
- Confirmed GitHub Pages compatibility: `index.html` at repo root, `.nojekyll`
  present, relative asset paths, working custom `404.html`.
- Confirmed accessibility features remain intact: skip-to-content link, visible
  focus styles, `prefers-reduced-motion` handling, and semantic landmarks.

## Items for Mitch to review manually

- **Add a real photograph.** No photo currently exists, so the layout uses a
  monogram card by design. Drop a headshot into `assets/` and swap it into the
  hero `<aside>` when ready — the structure is easy to update.
- **Proper social-preview image.** The Open Graph image is currently the SVG
  monogram favicon. A 1200×630 PNG/JPG would render better on social platforms
  (rasterization tooling was not available in this environment).
- **Confirm the LinkedIn URL** (`https://www.linkedin.com/in/mitchbaltz/`)
  points to the correct profile.
- **Confirm the resume PDF** is the latest version.

## Note

The site was built with OpenAI Codex and independently reviewed with Claude
Code. Content was verified against the resume; nothing was fabricated.
