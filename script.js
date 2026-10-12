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
  document.title = `${p.name} · ${p.role}`;
  document.querySelector('meta[name="description"]').content = p.tagline;

  // Hero
  $("brand").textContent = p.initials;
  $("name").textContent = p.name;
  $("role-line").textContent = [p.role, p.location].filter(Boolean).join(" · ");
  $("tagline").textContent = p.tagline;
  $("avatar").replaceChildren(
    p.photo ? el("img", { src: p.photo, alt: p.name }) : p.initials
  );

  if (p.email) {
    $("email-btn").href = $("email-big").href = `mailto:${p.email}`;
    $("email-big").textContent = p.email;
  } else {
    hide("email-btn"); hide("email-big");
  }
  if (p.resume) $("resume-btn").href = p.resume;
  else hide("resume-btn");

  $("hero-links").append(
    ...(p.links || []).map((l) =>
      el("li", {}, [el("a", { href: l.url, textContent: l.label, target: "_blank", rel: "noopener" })])
    )
  );

  // About
  if (p.about?.length) {
    $("about-text").append(...p.about.map((t) => el("p", { textContent: t })));
    $("skills").append(...(p.skills || []).map((s) => el("li", { textContent: s })));
  } else hide("about");

  // Experience
  if (p.experience?.length) {
    $("timeline").append(
      ...p.experience.map((e) =>
        el("li", {}, [
          el("div", { className: "period", textContent: e.period }),
          el("div", {}, [
            el("h3", {}, [`${e.title} `, el("span", { className: "org", textContent: `@ ${e.org}` })]),
            el("p", { textContent: e.summary }),
          ]),
        ])
      )
    );
  } else hide("experience");

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

  // Hide nav links for removed sections
  document.querySelectorAll(".nav nav a").forEach((a) => {
    if (!document.querySelector(a.getAttribute("href"))) a.remove();
  });

  $("footer-text").textContent = `© ${new Date().getFullYear()} ${p.name}`;

  // Theme toggle
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
