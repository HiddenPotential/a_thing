# Personal site

A simple, fast personal website. Plain HTML/CSS/JS, no build step.

## Make it yours

Everything on the page comes from **`profile.js`**. Edit your name, bio, links, experience and projects there.

- Add a photo: drop `me.jpg` in `assets/` and set `photo: "assets/me.jpg"`.
- Add a résumé: drop `resume.pdf` in `assets/` and set `resume: "assets/resume.pdf"`.
- Hide a section: empty its array (e.g. `projects: []`).
- Change colors: edit the `--accent` variables at the top of `styles.css`.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish with GitHub Pages

1. Push to `main`.
2. In the repo on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. The site goes live at `https://<username>.github.io/a_thing/` within a minute or two.
