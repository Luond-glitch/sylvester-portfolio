# LUONDIA Portfolio (React + Vite)
npm install
npm run dev      # development
npm run build    # production build in /dist

Edit content in src/data/*. Add photos in src/data/galleries.js. Put cv.pdf in /public and set `cv: '/cv.pdf'` in src/data/site.js.
Add social URLs in site.js. Copy .env.example to .env and set VITE_FORM_ENDPOINT (e.g. a Formspree URL) for real form submission; otherwise forms open the visitor's email app.
For hosting with client routing (Netlify/Firebase), add a fallback to index.html.
