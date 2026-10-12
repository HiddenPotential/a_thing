(function () {
  const p = window.PROFILE;
  const $ = (id) => document.getElementById(id);
  const el = (tag, props = {}, children = []) => {
    const node = Object.assign(document.createElement(tag), props);
    node.append(...children);
    return node;
  };
  const hide = (id) => { const n = $(id); if (n) n.remove(); };

  // Head
  document.title = `${p.name}'s Website`;
  document.querySelector('meta[name="description"]').content = p.tagline;

  // Hero
  $("brand").textContent = p.nickname;
  $("hi").textContent = p.hi;
  $("name").textContent = p.name;
  $("grade").textContent = p.grade;
  $("tagline").textContent = p.tagline;
  $("avatar").replaceChildren(p.photo ? el("img", { src: p.photo, alt: p.name }) : "😄");
  if (!p.grade) hide("grade");

  $("hero-links").append(
    ...(p.links || []).map((l) =>
      el("li", {}, [el("a", {
        href: l.url, target: "_blank", rel: "noopener",
        textContent: [l.emoji, l.label].filter(Boolean).join(" "),
      })])
    )
  );

  // About
  if (p.about?.length) {
    $("about-text").append(...p.about.map((t) => el("p", { textContent: t })));
    $("learning").append(...(p.learning || []).map((s) => el("li", { textContent: s })));
  } else hide("about");

  // Favorites
  if (p.favorites?.length) {
    $("faves").append(
      ...p.favorites.map((f) =>
        el("div", { className: "fave" }, [
          el("div", { className: "emoji", textContent: f.emoji }),
          el("div", { className: "label", textContent: f.label }),
          el("div", { className: "value", textContent: f.value }),
        ])
      )
    );
  } else hide("favorites");

  // My year
  if (p.myYear?.length) {
    $("timeline").append(
      ...p.myYear.map((e) =>
        el("li", {}, [
          el("div", { className: "when", textContent: e.when }),
          el("h3", { textContent: e.title }),
          el("p", { textContent: e.note }),
        ])
      )
    );
  } else hide("year");

  // Projects
  if (p.projects?.length) {
    $("cards").append(
      ...p.projects.map((pr) => {
        const card = el(pr.url ? "a" : "div", { className: "card" }, [
          el("h3", { textContent: pr.name }),
          el("p", { textContent: pr.description }),
          el("div", { className: "tags" }, (pr.tags || []).map((t) => el("span", { textContent: t }))),
        ]);
        if (pr.url) {
          Object.assign(card, { href: pr.url, target: "_blank", rel: "noopener" });
          card.append(el("span", { className: "arrow", textContent: "↗" }));
        }
        return card;
      })
    );
  } else hide("projects");

  // Goals
  if (p.goals?.length) {
    $("checklist").append(
      ...p.goals.map((g) =>
        el("li", { className: g.done ? "done" : "" }, [
          el("span", { className: "box", textContent: g.done ? "✓" : "" }),
          el("span", { textContent: g.text }),
        ])
      )
    );
  } else hide("goals");

  // Hide nav links for removed sections
  document.querySelectorAll(".nav nav a").forEach((a) => {
    if (!document.querySelector(a.getAttribute("href"))) a.remove();
  });

  $("footer-text").textContent = `made with ♥ by ${p.name} · ${new Date().getFullYear()}`;

  // Theme toggle (notebook ↔ chalkboard)
  $("theme-toggle").addEventListener("click", () => {
    const root = document.documentElement;
    const current = root.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Reveal on scroll
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((s) => io.observe(s));
})();
