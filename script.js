const btn = document.getElementById("theme-toggle");
const label = btn.querySelector("span");

const themes = [
    "", "dark", "ocean", "aqua", "forest", "earth",
    "arctic", "solar", "sunset", "inferno", "rose",
    "sakura", "pastel", "prism", "graphite", "neon",
    "cyberpunk", "terminal", "tactical", "violet",
    "arcane", "aether", "midnight", "onyx", "cosmic",
    "eclipse", "nova", "obsidian", "rust"
];

const themeNames = [
    "Light", "Dark", "Ocean", "Aqua", "Forest", "Earth",
    "Arctic", "Solar", "Sunset", "Inferno", "Rose",
    "Sakura", "Pastel", "Prism", "Graphite", "Neon",
    "Cyberpunk", "Terminal", "Tactical", "Violet",
    "Arcane", "Aether", "Midnight", "Onyx", "Cosmic",
    "Eclipse", "Nova", "Obsidian", "Rust"
];


let current = parseInt(localStorage.getItem("themeIndex") || 0);

function applyTheme(index) {
    document.body.classList.remove(...themes.filter(t => t !== ""));
    if (themes[index] !== "") {
        document.body.classList.add(themes[index]);
    }
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

