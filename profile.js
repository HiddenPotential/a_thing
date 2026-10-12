// ─────────────────────────────────────────────────────────────
//  Edit this file to make the site yours.
//  Every section on the page is rendered from this object.
//  Delete any section (or leave its array empty) to hide it.
// ─────────────────────────────────────────────────────────────

window.PROFILE = {
  name: "Your Name",
  initials: "YN",
  role: "Software Engineer",
  location: "City, Country",
  tagline:
    "I build thoughtful software and care about the small details that make things feel effortless.",
  // Optional: put a square photo in /assets and reference it here, e.g. "assets/me.jpg".
  // Leave empty to show your initials instead.
  photo: "",
  email: "you@example.com",
  resume: "", // e.g. "assets/resume.pdf"

  links: [
    { label: "GitHub", url: "https://github.com/HiddenPotential" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" },
    { label: "X / Twitter", url: "https://x.com/your-handle" },
  ],

  about: [
    "Hi! I'm a developer who enjoys turning fuzzy ideas into clear, working products. I like working across the stack, from shaping an interface to designing the data model behind it.",
    "Outside of work you'll find me reading, cooking something new, or wandering around with a camera.",
  ],

  skills: [
    "TypeScript", "React", "Node.js", "Python",
    "SQL", "Cloud", "Product thinking", "Design systems",
  ],

  experience: [
    {
      title: "Software Engineer",
      org: "Company Name",
      period: "2024 — Present",
      summary: "What you work on, the impact you've had, and what you're proud of.",
    },
    {
      title: "Previous Role",
      org: "Another Company",
      period: "2021 — 2024",
      summary: "A sentence or two about this role and what you learned.",
    },
    {
      title: "B.S. Computer Science",
      org: "University Name",
      period: "2017 — 2021",
      summary: "Relevant coursework, honors, or activities.",
    },
  ],

  projects: [
    {
      name: "Project One",
      description: "A short description of what it does and why it exists.",
      tags: ["React", "TypeScript"],
      url: "https://github.com/HiddenPotential",
    },
    {
      name: "Project Two",
      description: "Another thing you built, maybe a tool, a library, or an experiment.",
      tags: ["Python", "ML"],
      url: "",
    },
    {
      name: "Project Three",
      description: "Something you're curious about or currently tinkering with.",
      tags: ["Side project"],
      url: "",
    },
  ],
};
