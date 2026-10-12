// ─────────────────────────────────────────────────────────────
//  ✏️  Edit this file to make the site yours!
//  Everything on the page comes from here.
//  To hide a section, make its list empty, like:  projects: []
//
//  🔒 Safety tip: don't put your home address, phone number,
//  full school name, or personal email on a public website.
// ─────────────────────────────────────────────────────────────

window.PROFILE = {
  name: "Your Name",
  nickname: "YN",
  grade: "7th grader",
  hi: "Hi! I'm",
  tagline: "I like building stuff, drawing, and asking way too many questions. ✨",
  // Put a picture in /assets and write its name here, like "assets/me.png".
  // (An avatar or drawing works great too!) Leave empty to show a smiley.
  photo: "",

  links: [
    { label: "GitHub", url: "https://github.com/HiddenPotential", emoji: "💻" },
    { label: "Scratch", url: "https://scratch.mit.edu", emoji: "🐱" },
  ],

  about: [
    "I'm in 7th grade and I love figuring out how things work. My favorite thing to do after school is make little games and websites (like this one!).",
    "When I'm not on the computer, I'm probably reading, playing outside, or hanging out with my friends.",
  ],

  favorites: [
    { emoji: "🍦", label: "Food", value: "Ice Cream" },
    { emoji: "🎮", label: "Game", value: "Genshin Impact" },
    { emoji: "📖", label: "Book", value: "The Dragonships series" },
    { emoji: "🐍", label: "Animal", value: "Snakes" },
    { emoji: "🎨", label: "Color", value: "Teal" },
  ],

  learning: [
    "Coding", "HTML & CSS", "Drawing", "Piano", "Spanish", "Basketball",
  ],

  myYear: [
    { when: "Fall", title: "Joined the robotics club", note: "Our robot can pick up a ball now (most of the time)." },
    { when: "Winter", title: "Science fair project", note: "Tested which paper airplane design flies the farthest." },
    { when: "Spring", title: "Made my first website", note: "You're looking at it! 🎉" },
  ],

  projects: [
    {
      name: "Maze Game",
      description: "A game where you escape a maze before the timer runs out.",
      tags: ["Scratch", "Game"],
      url: "",
    },
    {
      name: "Paper Airplane Lab",
      description: "My science fair project about how wing shape changes flight distance.",
      tags: ["Science"],
      url: "",
    },
    {
      name: "This Website!",
      description: "My own little corner of the internet, made with HTML, CSS, and JavaScript.",
      tags: ["Code"],
      url: "https://github.com/HiddenPotential/a_thing",
    },
  ],

  goals: [
    { text: "Build a website", done: true },
    { text: "Read 20 books this year", done: false },
    { text: "Learn to make a real app", done: false },
    { text: "Beat my mile time", done: false },
  ],
};
