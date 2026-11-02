import { Icon } from './Icons.js';

export function Services({ services, onSelectService }) {
  const handleSelect = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return html`
    <section id="servicios" class="services-section-dark" aria-label="Nuestros Servicios">
      <div class="container">
        <div class="services-header-ref">
          <div class="services-tag-ref">
            ${Icon({ name: 'building', size: 14 })}
            <span>QUÉ HACEMOS</span>
          </div>

          <h2 class="services-title-ref">NUESTROS SERVICIOS</h2>

          <p class="services-lead-ref">
            Ejecutamos una amplia gama de proyectos comerciales y residenciales, <span class="highlight-orange">desde stucco exterior de 3 capas y sistemas EIFS hasta plastering interior de lujo y acabados arquitectónicos</span> — hechos con esmero, hechos de la forma correcta.
          </p>
        </div>

        <div class="services-cards-grid-ref">
          ${services.map(svc => html`
            <article class="service-card-ref" key="${svc.id}" id="${svc.id}">
              <div class="service-card-img-wrap">
                <img 
                  src="${svc.image}" 
                  alt="${svc.title}" 
                  class="service-card-img"
                  loading="lazy"
                />
                <span class="service-badge-pill">${svc.badge}</span>
              </div>

              <div class="service-card-body-ref">
                <div class="service-title-row">
                  <h3 class="service-card-title">${svc.title}</h3>
                  <button 
                    type="button" 
                    class="service-card-link"
                    onClick=${() => handleSelect(svc.title)}
                  >
                    <span>Cotizar ></span>
                  </button>
                </div>

                <p class="service-card-desc">
                  ${svc.summary}
                </p>

                <p class="service-card-details">
                  ${svc.description}
                </p>

                <ul class="service-card-bullets">
                  ${svc.highlights.map((h, i) => html`
                    <li key="${i}">
                      ${Icon({ name: 'check', size: 14 })}
                      <span>${h}</span>
                    </li>
                  `)}
                </ul>
              </div>
            </article>
          `)}
        </div>
      </div>
    </section>
  `;
}
