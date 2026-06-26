# Plumber Xavier — Landing Page

A fast, professional, conversion-focused **single-page website** for **Plumber Xavier**, a licensed
plumber serving **Fort Lauderdale, FL**. The whole page is built to do one thing well: get visitors to
**call (917) 396-9796** (or send a service request).

It's a plain **static site** — just HTML, CSS, and a tiny bit of JavaScript. No build step, no framework,
nothing to install. It loads fast and runs comfortably on free hosting.

---

## ✅ What's already done

- Full landing page (`index.html`): sticky header, hero, services, "why us", how-it-works, reviews,
  service area, contact form, FAQ, footer, and a **sticky mobile "Call" bar**.
- Warm **cream + coral + dark-navy** design system with serif headlines (from `DESIGN.md`).
- Original **SVG logo, favicon, hero illustration, and social-share image** (in `assets/`).
- **Local SEO** baked in: page title/description, Open Graph + Twitter cards, `Plumber` + `FAQPage`
  structured data (JSON-LD), `sitemap.xml`, `robots.txt`, web manifest.
- **Click-to-call** links everywhere + a contact form ready for **Web3Forms**.
- Your details are already in place: phone **(917) 396-9796**, email **xavierpalma01@gmail.com**,
  **Fort Lauderdale, FL**, hours **6am–10pm daily**.

## 🔧 What you need to do (about 5 minutes total)

Two quick things to make it fully live. Both are explained step-by-step below.

1. **Connect the contact form** (one free signup at Web3Forms). *Optional* — calling already works without it.
2. **Turn on GitHub Pages** to publish the site (you're already signed into GitHub).

There's also an **optional polish** checklist further down (license #, real reviews, photos, custom domain).

---

## 1. Connect the contact form (Web3Forms — free)

The "Request your service" form sends submissions straight to your email. It just needs a free key.

1. Go to **https://web3forms.com** → enter **xavierpalma01@gmail.com** → click **Create Access Key**.
2. Check your inbox and verify — you'll get an **Access Key** (a long code).
3. Open **`index.html`**, find this line (around the contact form):
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
   ```
   Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your key. Save.

That's it — form submissions now arrive at your Gmail. (Free plan: up to 250/month, plenty here.)
Until you do this, the form politely tells visitors to call instead, so nothing looks broken.

> Don't want a form at all? You can delete the `<form>` block — every other button still calls you.

## 2. Publish with GitHub Pages (free hosting)

The site is already in your repo (`Anthony-Sin/plumber_xavier`). To put it online:

1. Push the files to GitHub (see **Deploy** below) — or they may already be pushed for you.
2. On GitHub, open the repo → **Settings** → **Pages**.
3. Under **Build and deployment → Source**, pick **Deploy from a branch**.
4. Set **Branch = `main`** and **Folder = `/ (root)`** → **Save**.
5. Wait ~1 minute. Your site goes live at:

   **https://anthony-sin.github.io/plumber_xavier/**

That URL is already used in the SEO tags, sitemap, and social image, so everything matches out of the box.

---

## ✨ Optional polish (do any time)

| Item | Where | Notes |
|---|---|---|
| **License number** | `index.html` — search `add yours` (FAQ + footer) | Replace with your FL plumbing license #. |
| **Real reviews** | `index.html` — "Reviews" section | Swap the 3 sample quotes for real Google reviews. |
| **Star rating in Google** | see note below | Only add a rating once you have **real** reviews. |
| **Photos** | hero / service cards | Drop real job or team photos in `assets/` and swap the `<img>` — great for trust + SEO. |
| **Social links** | `index.html` JSON-LD | Add your Google Business Profile / Facebook URLs via a `sameAs` array. |
| **Custom domain** | see below | e.g. `plumberxavier.com`. |

### Adding a verified star rating (do it the honest way)
Google can show ★ stars in search results, but **only with real review data** — inventing ratings can get
you penalized. Once you have genuine reviews, add an `aggregateRating` to the `Plumber` JSON-LD in
`index.html`, for example:
```json
"aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "37" }
```
Use your **actual** numbers. The best source of plumber reviews is a **Google Business Profile** (below).

### Custom domain (optional)
1. Buy a domain (e.g. from Namecheap/Cloudflare/Google Domains).
2. Create a file named **`CNAME`** in this folder containing just your domain, e.g. `plumberxavier.com`.
3. At your domain registrar, point DNS to GitHub Pages
   (see GitHub's guide: *Managing a custom domain for your GitHub Pages site*).
4. Update the URL in these files to your new domain: `index.html` (canonical, OG/Twitter, JSON-LD),
   `sitemap.xml`, and `robots.txt`.

---

## 🚀 Most important step for getting found: Google Business Profile
For a local plumber, the single highest-impact thing for showing up on Google (especially the map) is a
free **Google Business Profile**: https://www.google.com/business — add your name, phone, service area,
hours, photos, and ask happy customers for reviews. This site is built to match that profile (same name,
phone, hours, area) so they reinforce each other.

---

## 🖥️ Preview locally
From this folder, run any of these, then open the address it prints:
```bash
python -m http.server 8000      # → http://localhost:8000
# or
npx serve .                     # if you have Node.js
```
You can also just double-click `index.html`, though a local server matches the live site more closely.

## ⬆️ Deploy (push changes)
Any time you edit a file, publish it with:
```bash
git add -A
git commit -m "Update site"
git push
```
GitHub Pages redeploys automatically within a minute.

---

## 📁 Project structure
```
index.html            The whole landing page (edit copy & details here)
css/styles.css        Design system + layout + responsive styles
js/main.js            Mobile menu, FAQ, and contact-form sending
assets/
  logo.svg            Brand mark
  favicon.svg         Browser-tab icon
  hero-illustration.svg
  og-image.svg        Social-share preview card
robots.txt            Search-engine rules
sitemap.xml           Search-engine page list
site.webmanifest      Install/icon metadata
.nojekyll             Tells GitHub Pages to serve files as-is
DESIGN.md             The design system this site follows
```

## ⚡ Notes
- **Performance/SEO:** all graphics are lightweight SVG and there are no heavy scripts, so it should score
  very well on Google's Core Web Vitals. You can verify with Chrome DevTools → **Lighthouse**.
- **Social image:** `assets/og-image.svg` is provided as SVG. A few platforms prefer PNG/JPG — if you want
  maximum compatibility, open it in any browser and export/screenshot a **1200×630 PNG** named
  `og-image.png`, then update the `og:image` / `twitter:image` links in `index.html`.
- **Edit safely:** all real wording lives in `index.html`; you can change any text without touching the CSS/JS.
