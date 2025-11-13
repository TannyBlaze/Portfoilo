const btn = document.getElementById("theme-toggle");
const label = btn.querySelector("span");

const themes = [
    "",
    "dark",
    "ocean",
    "inferno",
    "violet",
    "earth",
    "aqua",
    "cyber",
    "sunset",
    "forest",
    "rose",
    "graphite",
    "neon",
    "terminal",
    "sakura",
    "solar",
    "arctic",
    "midnight",
    "emerald",
    "obsidian",
    "tactical",
    "arcane"
];

const themeNames = [
    "Light",
    "Dark",
    "Ocean",
    "Inferno",
    "Violet",
    "Earth",
    "Aqua",
    "Cyberpunk",
    "Sunset",
    "Forest",
    "Rose",
    "Graphite",
    "Neon",
    "Terminal",
    "Sakura",
    "Solar",
    "Arctic",
    "Midnight",
    "Emerald",
    "Obsidian",
    "Tactical",
    "Arcane"
];

let current = parseInt(localStorage.getItem("themeIndex") || 0);

function applyTheme(index) {
    document.body.className = themes[index];
    label.textContent = `Theme: ${themeNames[index]}`;
    localStorage.setItem("themeIndex", index);
}

btn.addEventListener("click", () => {
    current = (current + 1) % themes.length;
    applyTheme(current);
});

applyTheme(current);