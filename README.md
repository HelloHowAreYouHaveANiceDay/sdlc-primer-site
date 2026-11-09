# sdlc-primer-site

The companion site for *The Building Probable Primer to Software Development*.
Live at https://hellohowareyouhaveaniceday.github.io/sdlc-primer-site/

Every step in the post is a real commit in this repo's history (`git log`).

| File | What it is |
|---|---|
| `index.md` | The page, written in Markdown |
| `_includes/base.njk` | The template the page is poured into |
| `package.json` | The packages this site borrows (Eleventy) and its scripts |
| `package-lock.json` | The exact versions installed, so every machine gets the same ones |
| `test.js` | A tiny test: the built page must have a title and a heading |
| `.github/workflows/deploy.yml` | The robot: on every push to `main`, install, build, test, publish |

Run it yourself:

    npm ci          # install the exact packages
    npm start       # preview at http://localhost:8080
    npm run build   # build the site into _site/
    npm test        # check the build
