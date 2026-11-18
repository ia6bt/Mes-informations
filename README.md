# Mohamed Bouchlouch - Portfolio

Plain HTML5 / CSS3 / JavaScript. No build step, no internet needed.

## Run it
Open `index.html` in any browser (double-click, or on Android open it from a file manager / Chrome).

## Structure
- `index.html` - all sections
- `css/style.css` - mobile-first styles (dark theme, RTL-ready with logical properties)
- `js/script.js` - translations (EN/FR/AR), menu, reveal, project details, form validation
- `assets/` - local images (SVG), icons, backgrounds and fonts (Inter + DejaVu Sans Mono, Latin subsets)

## Edit
- **Texts / languages:** the `T` object at the top of `js/script.js` (English text is also in `index.html`).
- **Experience duration:** keys `exp_time` in each language.
- **Certificates:** replace `assets/images/cert-best-employee.svg` and `cert-sewing.svg` with scans (keep the file name, or change the `src` in `index.html`).
- **Project previews:** `assets/images/project-*.svg`; swap in real screenshots (.webp/.jpg) the same way.
- **Social links:** none are shown because no real profiles were provided. Add them in the footer when you have them.

## Notes
- The contact form checks the fields, then opens the visitor's email app with the message prefilled (a static site has no server to receive forms).
- The WhatsApp button opens `wa.me/212772692016` with a ready message in the selected language.
- Arabic switches the page to right-to-left automatically; the chosen language is remembered.

## Publish for free
Upload the folder to GitHub Pages, Netlify Drop or Cloudflare Pages.
