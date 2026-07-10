// Cargar contenido dinámicamente
async function loadContent(pageName) {
    const container = document.getElementById('content-container');
    const response = await fetch(`./content/${pageName}.html`);
    const data = await response.text();
    container.innerHTML = data;
    
    // IMPORTANTE: Después de cargar, aplicamos los efectos de hover
    applyHoverEffects();
}

// Lógica de hover: "pasar el cursor y cambiar texto"
function applyHoverEffects() {
    document.querySelectorAll('.hover-swap').forEach(el => {
        const original = el.innerText;
        el.addEventListener('mouseenter', () => el.innerText = el.dataset.alt);
        el.addEventListener('mouseleave', () => el.innerText = original);
    });
}
