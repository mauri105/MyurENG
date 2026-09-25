document.addEventListener('DOMContentLoaded', () => {
  // 1. Obtener el ID de la lección desde la URL (ej: leccion.html?id=pasado-simple)
  const urlParams = new URLSearchParams(window.location.search);
  const lessonId = urlParams.get('id');

  if (!lessonId) {
    document.getElementById('lesson-content').innerHTML = `
      <h2>No se especificó ninguna lección</h2>
      <p>Selecciona una lección desde la <a href="index.html">página principal</a>.</p>
    `;
    return;
  }

  loadAndRenderLesson(`lecciones/${lessonId}.md`);
});

async function loadAndRenderLesson(filePath) {
  const contentElement = document.getElementById('lesson-content');

  try {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error(`No se pudo cargar el archivo: ${filePath}`);

    const markdownText = await res.text();

    // 2. Configurar Marked.js para interceptar bloques ```sentence
    const renderer = new marked.Renderer();

    renderer.code = function({ text, lang }) {
      if (lang === 'sentence') {
        try {
          const data = JSON.parse(text);
          return buildSentenceHtml(data);
        } catch (err) {
          console.error('Error parseando JSON de oración:', err);
          return `<div class="error">Error de sintaxis en la oración interactiva.</div>`;
        }
      }
      // Código regular en caso de usar bloques normales
      return `<pre><code>${text}</code></pre>`;
    };

    // Actualizar título de la pestaña si el Markdown tiene un H1
    const titleMatch = markdownText.match(/^#\s+(.+)$/m);
    if (titleMatch) {
      document.title = titleMatch[1];
    }

    // Renderizar Markdown
    contentElement.innerHTML = marked.parse(markdownText, { renderer });

    // 3. Activar los eventos interactivos
    document.querySelectorAll('.special-sentence-card').forEach(attachSentenceEvents);

  } catch (error) {
    contentElement.innerHTML = `
      <h2>Error al cargar la lección</h2>
      <p>Verifica que el archivo exista en la carpeta <code>lecciones/</code>.</p>
    `;
    console.error(error);
  }
}

// Construye la estructura HTML de la tarjeta
function buildSentenceHtml(data) {
  const tokensHtml = data.tokens.map(token => `
    <span class="token ${token.type || ''}">
      <span class="token-original">${token.text}</span>
      <span class="token-trans">${token.trans}</span>
    </span>
  `).join(' ');

  return `
    <div class="special-sentence-card">
      <div class="sentence-header">
        <button class="btn-icon toggle-grammar" title="Alternar colores gramaticales" aria-label="Alternar colores">🎨</button>
        <p class="sentence-text">${tokensHtml}</p>
        <button class="btn-icon toggle-translation" title="Ver traducción completa" aria-label="Ver traducción">🌐</button>
      </div>
      <div class="sentence-full-translation" hidden>
        ${data.fullTranslation}
      </div>
    </div>
  `;
}

// Activa el comportamiento de hover (PC), tap (móvil) y botones
function attachSentenceEvents(card) {
  const textContainer = card.querySelector('.sentence-text');
  const grammarBtn = card.querySelector('.toggle-grammar');
  const transBtn = card.querySelector('.toggle-translation');
  const fullTrans = card.querySelector('.sentence-full-translation');
  const tokens = card.querySelectorAll('.token');

  // Toggle de gramática
  grammarBtn.addEventListener('click', () => {
    textContainer.classList.toggle('colored');
    grammarBtn.classList.toggle('active');
  });

  // Toggle de traducción completa
  transBtn.addEventListener('click', () => {
    const isHidden = fullTrans.hasAttribute('hidden');
    if (isHidden) {
      fullTrans.removeAttribute('hidden');
      transBtn.classList.add('active');
    } else {
      fullTrans.setAttribute('hidden', '');
      transBtn.classList.remove('active');
    }
  });

  // Eventos de palabras (Tokens): solo alternan la clase CSS
  tokens.forEach(token => {
    // Hover (PC)
    token.addEventListener('mouseenter', () => {
      token.classList.add('showing-translation');
    });

    token.addEventListener('mouseleave', () => {
      token.classList.remove('showing-translation');
    });

    // Tap / Clic (Móviles)
    token.addEventListener('click', (e) => {
      e.stopPropagation();
      const isAlreadyActive = token.classList.contains('showing-translation');

      // Limpia los demás tokens que pudieran estar abiertos
      tokens.forEach(t => t.classList.remove('showing-translation'));

      if (!isAlreadyActive) {
        token.classList.add('showing-translation');
      }
    });
  });
}

// Si se toca en cualquier parte vacía en un móvil, se restauran las palabras
document.addEventListener('click', () => {
  document.querySelectorAll('.token.showing-translation').forEach(token => {
    token.classList.remove('showing-translation');
  });
});
