const cycleBtn = document.getElementById("theme-cycle");
const arrowBtn = document.getElementById("theme-arrow");
const menu = document.getElementById("theme-menu");
const label = cycleBtn.querySelector("span");

const themes = [
    "", "dark", "ocean", "aqua", "forest", "earth",
    "arctic", "solar", "sunset", "inferno", "rose",
    "sakura", "pastel", "prism", "graphite", "neon",
    "cyberpunk", "terminal", "tactical", "violet",
    "arcane", "aether", "midnight", "onyx", "cosmic",
    "eclipse", "nova", "obsidian", "rust", "icecream",
    "toxic", "royal", "coffee", "lime", "glacier",
    "bloodmoon", "gold", "mint", "shadow",
];

const themeNames = [
    "Light", "Dark", "Ocean", "Aqua", "Forest", "Earth",
    "Arctic", "Solar", "Sunset", "Inferno", "Rose",
    "Sakura", "Pastel", "Prism", "Graphite", "Neon",
    "Cyberpunk", "Terminal", "Tactical", "Violet",
    "Arcane", "Aether", "Midnight", "Onyx", "Cosmic",
    "Eclipse", "Nova", "Obsidian", "Rust", "Ice Cream",
    "Toxic", "Royal", "Coffee", "Lime", "Glacier",
    "Blood Moon", "Gold", "Mint", "Shadow",
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

cycleBtn.onclick = () => {
    current = (current + 1) % themes.length;
    applyTheme(current);
};

arrowBtn.onclick = (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden");
};

themes.forEach((_, i) => {
    const opt = document.createElement("div");
    opt.className = "theme-option";
    opt.textContent = themeNames[i];

    opt.onclick = () => {
        current = i;
        applyTheme(i);
        menu.classList.add("hidden");
    };

    menu.appendChild(opt);
});

document.addEventListener("click", () => {
    menu.classList.add("hidden");
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

