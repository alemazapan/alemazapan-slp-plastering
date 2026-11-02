import { Icon } from './Icons.js';

export function Gallery({ projects, categories, onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = React.useState("Todos");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === "Todos" || p.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      (p.title && p.title.toLowerCase().includes(query)) ||
      (p.description && p.description.toLowerCase().includes(query)) ||
      (p.location && p.location.toLowerCase().includes(query)) ||
      (p.category && p.category.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return html`
    <section id="proyectos" class="section gallery-section" aria-label="Galería de Proyectos Reales">
      <div class="container">
        <div class="section-header">
          <div class="section-label">
            ${Icon({ name: 'zoom-in', size: 14 })}
            <span>ARCHIVO REAL DE OBRAS TERMINADAS</span>
          </div>
          <h2 class="section-title">Galería de Proyectos Ejecutados</h2>
          <p class="section-subtitle">
            Evidencia fotográfica 100% auténtica de nuestras obras en Fort Worth, Dallas y el norte de Texas a lo largo de 30 años. Obras comerciales de gran escala, complejos turísticos y residencias de alto nivel.
          </p>
        </div>

        <!-- Herramienta Interactiva: Buscador en Tiempo Real y Contador Dinámico -->
        <div class="gallery-interactive-bar">
          <div class="gallery-search-wrap">
            <span class="gallery-search-icon">🔍</span>
            <input 
              type="text" 
              class="gallery-search-input" 
              placeholder="Buscar por acabado, chimenea, fachada, comercial o ciudad..." 
              value="${searchQuery}"
              onInput=${(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar proyectos por palabra clave"
            />
            ${searchQuery ? html`
              <button 
                type="button" 
                class="gallery-clear-search-btn" 
                onClick=${() => setSearchQuery('')}
                title="Limpiar búsqueda"
              >
                ✕ Limpiar
              </button>
            ` : ''}
          </div>

          <div class="gallery-counter-pill">
            <span class="gallery-counter-tag">Mostrando</span>
            <span class="gallery-counter-number">${filteredProjects.length}</span>
            <span class="gallery-counter-total">de ${projects.length} obras</span>
          </div>
        </div>

        <!-- Filtros por Categoría -->
        <div class="gallery-filter-bar" role="tablist" aria-label="Filtro de proyectos por categoría">
          ${categories.map(cat => html`
            <button
              key="${cat}"
              class="filter-btn ${activeCategory === cat ? 'active' : ''}"
              onClick=${() => setActiveCategory(cat)}
              role="tab"
              aria-selected="${activeCategory === cat}"
            >
              ${cat}
            </button>
          `)}
        </div>

        <!-- Cuadrícula de Proyectos o Estado Vacío -->
        ${filteredProjects.length === 0 ? html`
          <div class="gallery-empty-state">
            <div class="gallery-empty-icon">📁</div>
            <h3 class="gallery-empty-title">No se encontraron obras coincidentes</h3>
            <p class="gallery-empty-desc">No hay proyectos que coincidan con "${searchQuery}" en la categoría seleccionada.</p>
            <button 
              type="button" 
              class="btn btn-primary"
              onClick=${() => { setSearchQuery(''); setActiveCategory('Todos'); }}
            >
              Restablecer Búsqueda y Ver Todas las 45 Obras
            </button>
          </div>
        ` : html`
          <div class="gallery-collage-grid">
            ${filteredProjects.map((p) => html`
              <div class="gallery-collage-card" key="${p.id}">
                <div 
                  class="gallery-collage-thumb" 
                  onClick=${() => onOpenLightbox(p)}
                  title="Ampliar fotografía de ${p.title}"
                >
                  <img 
                    src="${p.image}" 
                    alt="${p.title}" 
                    class="gallery-collage-img" 
                    loading="lazy"
                  />
                  <div class="gallery-overlay">
                    <span class="zoom-badge">
                      ${Icon({ name: 'zoom-in', size: 16 })}
                      <span>Ampliar Fotografía</span>
                    </span>
                  </div>
                </div>

                <div class="gallery-collage-caption">
                  <div class="gallery-caption-meta">
                    <span class="gallery-caption-cat">${p.category}</span>
                    <span class="gallery-caption-loc">${p.location}</span>
                  </div>
                  <h3 class="gallery-caption-title">${p.title}</h3>
                  <p class="gallery-caption-desc">${p.description}</p>
                  <button 
                    type="button" 
                    class="gallery-caption-btn"
                    onClick=${() => onOpenLightbox(p)}
                  >
                    <span>Ver detalles completos</span>
                    ${Icon({ name: 'arrow-right', size: 14 })}
                  </button>
                </div>
              </div>
            `)}
          </div>
        `}
      </div>
    </section>
  `;
}
