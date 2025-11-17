const btn = document.getElementById("theme-toggle");
const label = btn.querySelector("span");

const themes = [
    "", "dark", "ocean", "inferno", "violet", "earth", "aqua", "cyberpunk",
    "sunset", "forest", "rose", "graphite", "neon", "terminal", "sakura",
    "solar", "arctic", "midnight", "emerald", "obsidian", "tactical",
    "arcane", "ordeal", "onyx", "nova"
];

const themeNames = [
    "Light", "Dark", "Ocean", "Inferno", "Violet", "Earth", "Aqua", "Cyberpunk",
    "Sunset", "Forest", "Rose", "Graphite", "Neon", "Terminal", "Sakura",
    "Solar", "Arctic", "Midnight", "Emerald", "Obsidian", "Tactical",
    "Arcane", "Ordeal", "Onyx", "Nova"
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

document.addEventListener("DOMContentLoaded", () => {
    const toast = document.getElementById("theme-toast");

    function showToast() {
        toast.classList.remove("hidden");

        setTimeout(() => {
            toast.classList.add("show");
        }, 50);

        setTimeout(() => {
            toast.classList.remove("show");

            setTimeout(() => {
                toast.classList.add("hidden");
            }, 400);
        }, 5000);
    }

    setTimeout(showToast, 1200);

    setInterval(showToast, 60000);
});

