const cycleBtn = document.getElementById("theme-cycle");
const arrowBtn = document.getElementById("theme-arrow");
const menu = document.getElementById("theme-menu");
const label = cycleBtn.querySelector("span");

const themes = [
    { class: "", name: "Light" },
    { class: "dark", name: "Dark" },
    { class: "ocean", name: "Ocean" },
    { class: "aqua", name: "Aqua" },
    { class: "forest", name: "Forest" },
    { class: "earth", name: "Earth" },
    { class: "arctic", name: "Arctic" },
    { class: "solar", name: "Solar" },
    { class: "sunset", name: "Sunset" },
    { class: "inferno", name: "Inferno" },
    { class: "rose", name: "Rose" },
    { class: "sakura", name: "Sakura" },
    { class: "pastel", name: "Pastel" },
    { class: "prism", name: "Prism" },
    { class: "graphite", name: "Graphite" },
    { class: "neon", name: "Neon" },
    { class: "cyberpunk", name: "Cyberpunk" },
    { class: "terminal", name: "Terminal" },
    { class: "tactical", name: "Tactical" },
    { class: "violet", name: "Violet" },
    { class: "arcane", name: "Arcane" },
    { class: "aether", name: "Aether" },
    { class: "midnight", name: "Midnight" },
    { class: "onyx", name: "Onyx" },
    { class: "cosmic", name: "Cosmic" },
    { class: "eclipse", name: "Eclipse" },
    { class: "nova", name: "Nova" },
    { class: "obsidian", name: "Obsidian" },
    { class: "rust", name: "Rust" },
    { class: "icecream", name: "Ice Cream" },
    { class: "toxic", name: "Toxic" },
    { class: "royal", name: "Royal" },
    { class: "coffee", name: "Coffee" },
    { class: "lime", name: "Lime" },
    { class: "glacier", name: "Glacier" },
    { class: "bloodmoon", name: "Blood Moon" },
    { class: "gold", name: "Gold" },
    { class: "mint", name: "Mint" },
    { class: "shadow", name: "Shadow" },
];


let current = parseInt(localStorage.getItem("themeIndex") || 0);

function applyTheme(index) {
    document.body.classList.remove(...themes.map(t => t.class).filter(c => c));
    if (themes[index].class) {
        document.body.classList.add(themes[index].class);
    }
    label.textContent = `Theme: ${themes[index].name}`;
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

themes.forEach((theme, i) => {
    const opt = document.createElement("div");
    opt.className = "theme-option";
    opt.textContent = theme.name;

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