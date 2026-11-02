import { Icon } from './Icons.js';

export function WhyChooseUs({ pillars }) {
  return html`
    <section id="por-que-elegirnos" class="section why-section" aria-label="Por qué elegir a SLP Plastering">
      <div class="container">
        <div class="section-header">
          <div class="section-label" style="background: rgba(185, 79, 40, 0.2); color: #EDE7D8;">
            ${Icon({ name: 'shield', size: 14 })}
            <span>Garantía de Confianza y Calidad</span>
          </div>
          <h2 class="section-title light">¿Por Qué Elegir SLP Plastering?</h2>
          <p class="section-subtitle light">
            Treinta años de solidez en Fort Worth, Texas nos respaldan como la opción preferida de contratistas comerciales y propietarios exigentes.
          </p>
        </div>

        <div class="why-grid">
          ${pillars.map(p => html`
            <div class="why-card" key="${p.id}">
              <div class="why-icon-wrap">
                ${Icon({ name: p.iconName, size: 28 })}
              </div>
              <h3 class="why-card-title">${p.title}</h3>
              <p class="why-card-desc">${p.description}</p>
            </div>
          `)}
        </div>
      </div>
    </section>
  `;
}
