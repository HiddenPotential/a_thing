// ─────────────────────────────────────────────────────────────
//  ✏️  Edit this file to make the site yours!
//  Everything on the page comes from here.
//  To hide a section, make its list empty, like:  projects: []
//
//  🔒 Safety tip: don't put your home address, phone number,
//  full school name, or personal email on a public website.
// ─────────────────────────────────────────────────────────────

window.PROFILE = {
  name: "Anna Wang",
  nickname: "AW",
  grade: "7th grader",
  hi: "Hi! I'm",
  tagline: "I make games and apps, run a science YouTube channel, play golf and the flute, and spend way too long in Roblox. ✨",
  // Put a picture in /assets and write its name here, like "assets/me.png".
  // (An avatar or drawing works great too!) Leave empty to show a smiley.
  photo: "",

  links: [
    { label: "YouTube", url: "https://www.youtube.com/@STEMsplosion", emoji: "▶️" },
    { label: "GitHub", url: "https://github.com/HiddenPotential", emoji: "💻" },
  ],

  about: [
    "I'm in 7th grade and I love building things. I started coding in Scratch in 1st grade, moved on to Python, and now I make games and apps that real people can use, like a coin pusher game and a little pet that lives on your Mac.",
    "When I'm not coding, I'm making science videos, practicing my golf swing, or playing the flute. When I grow up, I want to be the CEO of a famous company!",
  ],

  // Things I do: each one gets a card with a few facts.
  activities: [
    {
      emoji: "🦉",
      title: "STEMsplosion",
      facts: [
        "My YouTube channel about science, tech, engineering, and math",
        "Amazing facts, explained by an owl",
      ],
      url: "https://www.youtube.com/@STEMsplosion",
    },
    {
      emoji: "⛳",
      title: "Golf",
      facts: [
        "Playing since I was 8",
        "Won awards in US Kids Golf tournaments",
        "5th place in the Drive, Chip & Putt semifinals",
      ],
    },
    {
      emoji: "🎶",
      title: "Flute",
      facts: [
        "Playing since 4th grade",
        "Performed in my school's music recital",
        "Favorite piece: The Magic Flute by Mozart",
      ],
    },
    {
      emoji: "🎮",
      title: "Roblox",
      facts: [
        "Favorites: Forsaken, 99 Nights in the Forest, Grow a Garden",
        "Also building my own Roblox adventure game",
      ],
    },
  ],

  favorites: [
    { emoji: "🍦", label: "Food", value: "Ice Cream" },
    { emoji: "🎮", label: "Game", value: "Genshin Impact" },
    { emoji: "📖", label: "Book", value: "The Dragonships series" },
    { emoji: "🐍", label: "Animal", value: "Snakes" },
    { emoji: "🎨", label: "Color", value: "Teal" },
  ],

  projects: [
    {
      name: "Coin Pusher",
      description: "An arcade coin pusher game! Drop coins, push them off the edge, and try to hit the LUCKY slot.",
      url: "https://hiddenpotential.github.io/cool/",
    },
    {
      name: "Fluffipets",
      description: "A little animal that lives on your Mac desktop. He walks along your screen, follows your cursor, and naps in the corner.",
      url: "https://hiddenpotential.github.io/apps/fluffipets/",
    },
    {
      name: "Schedule Maker",
      description: "Make a colorful class schedule in seconds and print it as a one-page PDF.",
      url: "https://hiddenpotential.github.io/class-schedule/",
    },
    {
      name: "This Website!",
      description: "My own little corner of the internet, made with HTML, CSS, and JavaScript.",
      url: "https://github.com/HiddenPotential/a_thing",
    },
  ],
};
