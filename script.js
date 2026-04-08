const cycleBtn = document.getElementById("theme-cycle");
const arrowBtn = document.getElementById("theme-arrow");
const menu = document.getElementById("theme-menu");
const label = cycleBtn.querySelector("span");

const themes = [
    { class: "", name: "Light" },
    // Dark / Neutral
    { class: "dark", name: "Dark" },
    { class: "graphite", name: "Graphite" },
    { class: "shadow", name: "Shadow" },
    { class: "charcoal", name: "Charcoal" },
    { class: "void", name: "Void" },
    { class: "onyx", name: "Onyx" },
    { class: "obsidian", name: "Obsidian" },

    // Blue / Ocean / Cool
    { class: "ocean", name: "Ocean" },
    { class: "arctic", name: "Arctic" },
    { class: "glacier", name: "Glacier" },
    { class: "iceberg", name: "Iceberg" },
    { class: "frostbite", name: "Frostbite" },
    { class: "marine", name: "Marine" },
    { class: "skyline", name: "Skyline" },
    { class: "storm", name: "Storm" },
    { class: "aether", name: "Aether" },
    { class: "midnightblue", name: "Midnight Blue" },
    { class: "sapphire", name: "Sapphire" },

    // Green / Nature
    { class: "forest", name: "Forest" },
    { class: "earth", name: "Earth" },
    { class: "mint", name: "Mint" },
    { class: "lime", name: "Lime" },
    { class: "jungle", name: "Jungle" },
    { class: "moss", name: "Moss" },
    { class: "biotech", name: "Biotech" },
    { class: "seafoam", name: "Seafoam" },
    { class: "honeydew", name: "Honeydew" },
    { class: "pear", name: "Pear" },
    { class: "kiwi", name: "Kiwi" },

    // Yellow / Gold / Light Warm
    { class: "solar", name: "Solar" },
    { class: "gold", name: "Gold" },
    { class: "honey", name: "Honey" },
    { class: "zest", name: "Zest" },
    { class: "lemon", name: "Lemon" },
    { class: "banana", name: "Banana" },
    { class: "pineapple", name: "Pineapple" },
    { class: "starfruit", name: "Starfruit" },

    // Orange / Warm / Fire
    { class: "sunset", name: "Sunset" },
    { class: "inferno", name: "Inferno" },
    { class: "ember", name: "Ember" },
    { class: "emberglow", name: "Emberglow" },
    { class: "rust", name: "Rust" },
    { class: "desert", name: "Desert" },
    { class: "tangerine", name: "Tangerine" },
    { class: "orange", name: "Orange" },
    { class: "mango", name: "Mango" },
    { class: "papaya", name: "Papaya" },
    { class: "cantaloupe", name: "Cantaloupe" },
    { class: "apricot", name: "Apricot" },

    // Red / Pink
    { class: "rose", name: "Rose" },
    { class: "sakura", name: "Sakura" },
    { class: "blossom", name: "Blossom" },
    { class: "candy", name: "Candy" },
    { class: "bubblegum", name: "Bubblegum" },
    { class: "flamingo", name: "Flamingo" },
    { class: "watermelon", name: "Watermelon" },
    { class: "strawberry", name: "Strawberry" },
    { class: "cherry", name: "Cherry" },
    { class: "apple", name: "Apple" },
    { class: "raspberry", name: "Raspberry" },
    { class: "cranberry", name: "Cranberry" },
    { class: "pomegranate", name: "Pomegranate" },
    { class: "bloodmoon", name: "Bloodmoon" },
    { class: "bloodorange", name: "Blood Orange" },

    // Purple / Violet / Fantasy
    { class: "violet", name: "Violet" },
    { class: "arcane", name: "Arcane" },
    { class: "midnight", name: "Midnight" },
    { class: "cosmic", name: "Cosmic" },
    { class: "eclipse", name: "Eclipse" },
    { class: "nova", name: "Nova" },
    { class: "plasma", name: "Plasma" },
    { class: "amethyst", name: "Amethyst" },
    { class: "grape", name: "Grape" },
    { class: "plum", name: "Plum" },
    { class: "fig", name: "Fig" },
    { class: "acai", name: "Acai" },
    { class: "mulberry", name: "Mulberry" },
    { class: "berry", name: "Berry" },

    // Neon / Cyber / Special
    { class: "neon", name: "Neon" },
    { class: "cyberpunk", name: "Cyberpunk" },
    { class: "terminal", name: "Terminal" },
    { class: "hacker", name: "Hacker" },
    { class: "radioactive", name: "Radioactive" },
    { class: "toxic", name: "Toxic" },
    { class: "glow", name: "Glow" },

    // Soft / Pastel / Light
    { class: "aqua", name: "Aqua" },
    { class: "pastel", name: "Pastel" },
    { class: "prism", name: "Prism" },
    { class: "lavender", name: "Lavender" },
    { class: "dream", name: "Dream" },
    { class: "icecream", name: "Ice Cream" },
    { class: "coconut", name: "Coconut" },
    { class: "lychee", name: "Lychee" },
    { class: "guava", name: "Guava" },
    { class: "dragonfruit", name: "Dragonfruit" },

    // Brown / Coffee / Earthy
    { class: "coffee", name: "Coffee" },
    { class: "toffee", name: "Toffee" },
    { class: "tamarind", name: "Tamarind" },
    { class: "bronze", name: "Bronze" },

    // Unique / Misc
    { class: "tactical", name: "Tactical" },
    { class: "royal", name: "Royal" },
    { class: "saturn", name: "Saturn" },
    { class: "aurora", name: "Aurora" },
    { class: "velvet", name: "Velvet" },
    { class: "lofi", name: "Lofi" },
    { class: "theatre", name: "Theatre" },
    { class: "blackberry", name: "Blackberry" }
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