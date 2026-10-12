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
  } else hide("about");

  // Things I do
  if (p.activities?.length) {
    $("activities-list").append(
      ...p.activities.map((a) => {
        const title = a.url
          ? el("a", { href: a.url, target: "_blank", rel: "noopener", textContent: `${a.title} ↗` })
          : a.title;
        return el("div", { className: "activity" }, [
          el("div", { className: "emoji", textContent: a.emoji }),
          el("div", {}, [
            el("h3", {}, [title]),
            el("ul", {}, a.facts.map((f) => el("li", { textContent: f }))),
          ]),
        ]);
      })
    );
  } else hide("activities");

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

  // Projects
  if (p.projects?.length) {
    $("cards").append(
      ...p.projects.map((pr) => {
        const card = el(pr.url ? "a" : "div", { className: "card" }, [
          el("h3", { textContent: pr.name }),
          el("p", { textContent: pr.description }),
        ]);
        if (pr.url) {
          Object.assign(card, { href: pr.url, target: "_blank", rel: "noopener" });
          card.append(el("span", { className: "arrow", textContent: "↗" }));
        }
        return card;
      })
    );
  } else hide("projects");

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
})();
