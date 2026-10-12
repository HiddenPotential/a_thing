# My Website ✏️

A notebook-style personal website. Plain HTML/CSS/JS, no build step.
Click the ☀️/🌙 button to switch between notebook paper and chalkboard.

## Make it yours

Everything on the page comes from **`profile.js`**. Change your name, bio, favorite things, projects, and goals there.

> 🔒 Keep it safe: don't put your address, phone number, full school name, or personal email on a public site.

- Add a photo: drop `me.jpg` in `assets/` and set `photo: "assets/me.jpg"`.
- Check off a goal: set `done: true`.
- Hide a section: empty its array (e.g. `projects: []`).
- Change colors: edit the variables at the top of `styles.css`.

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
