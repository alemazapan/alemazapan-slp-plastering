import { Icon } from './Icons.js';

export function Lightbox({ project, onClose, onNext, onPrev, hasNext, hasPrev }) {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight' && hasNext) onNext();
      else if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, hasNext, hasPrev]);

  if (!project) return null;

  return html`
    <div 
      class="lightbox-backdrop" 
      onClick=${(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Detalle de fotografía de proyecto"
    >
      <div class="lightbox-content-box">
        <button class="lightbox-close-btn" onClick=${onClose} aria-label="Cerrar vista ampliada">
          ${Icon({ name: 'x', size: 20 })}
        </button>

        <div class="lightbox-img-area">
          ${project.image ? html`
            <img 
              src="${project.image}" 
              alt="${project.title}" 
              class="lightbox-img" 
            />
          ` : html`
            <div class="placeholder-thumb" style="width: 100%; min-height: 400px; color: #fff;">
              <div style="font-size: 2rem; margin-bottom: 12px;">📐</div>
              <div style="font-weight: 700; font-size: 1.1rem; color: #EDE7D8;">Espacio Reservado para Próxima Obra</div>
              <div style="font-size: 0.85rem; color: #AAA; max-width: 320px; margin-top: 8px;">
                En SLP Plastering únicamente mostramos obras reales. Foto pendiente de carga.
              </div>
            </div>
          `}

          ${hasPrev && html`
            <button class="lightbox-nav-btn lightbox-nav-prev" onClick=${onPrev} aria-label="Fotografía anterior">
              ${Icon({ name: 'chevron-left', size: 24 })}
            </button>
          `}

          ${hasNext && html`
            <button class="lightbox-nav-btn lightbox-nav-next" onClick=${onNext} aria-label="Siguiente fotografía">
              ${Icon({ name: 'chevron-right', size: 24 })}
            </button>
          `}
        </div>

        <div class="lightbox-details">
          <div>
            <span class="lightbox-category-tag">${project.category}</span>
            <h3 class="lightbox-title">${project.title}</h3>
            
            <div class="lightbox-meta-row">
              <span><strong>Ubicación:</strong> ${project.location}</span>
              <span><strong>Año:</strong> ${project.year}</span>
              <span>${project.isRealPhoto ? '✓ Fotografía Real' : 'Próxima Obra'}</span>
            </div>

            <p class="lightbox-desc">
              ${project.description}
            </p>

            ${project.details && project.details.length > 0 && html`
              <div>
                <div class="lightbox-points-title">Detalles Constructivos:</div>
                <ul class="lightbox-points">
                  ${project.details.map((d, i) => html`
                    <li class="lightbox-point-item" key="${i}">
                      ${Icon({ name: 'check', size: 16 })}
                      <span>${d}</span>
                    </li>
                  `)}
                </ul>
              </div>
            `}
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #DCD6C7; padding-top: 20px;">
            <span style="font-size: 0.8rem; color: #777;">Ubicación: Fort Worth, Texas, USA</span>
            <button 
              class="btn btn-primary" 
              style="padding: 9px 18px; font-size: 0.85rem;"
              onClick=${() => {
                onClose();
                const c = document.getElementById('contacto');
                if (c) c.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Consultar por este tipo de obra
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
