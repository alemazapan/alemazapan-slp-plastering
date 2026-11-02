import { Icon } from './Icons.js';

export function MetricsRibbon({ metrics }) {
  return html`
    <section class="metrics-ribbon" aria-label="Métricas de la empresa">
      <div class="container">
        <div class="metrics-grid">
          ${metrics.map((m, idx) => html`
            <div class="metric-item" key="${idx}">
              <div class="metric-number">${m.number}</div>
              <div class="metric-label">${m.label}</div>
              <div class="metric-desc">${m.desc}</div>
            </div>
          `)}
        </div>
      </div>
    </section>
  `;
}

export function About({ company }) {
  const highlights = [
    "30 años de ejecución ininterrumpida en Texas",
    "Especialistas en stucco comercial y EIFS",
    "Plastering interior de yeso fino y pulido",
    "Técnicas tradicionales y contemporáneas",
    "Cumplimiento riguroso de normativas y seguridad",
    "Atención personalizada directa por maestros yeseros"
  ];

  return html`
    <section id="nosotros" class="section about-section" aria-label="Acerca de SLP Plastering">
      <div class="container">
        <div class="about-grid">
          <div class="about-images-stack">
            <img 
              src="./images/projects/proyecto-3-plastering-salon-chimenea.jpg" 
              alt="Plastering de alta gama en chimenea y salón ejecutado por SLP Plastering" 
              class="about-image-primary"
              loading="lazy"
            />
            <div class="about-experience-card">
              <div class="exp-years">${company.experienceYears}</div>
              <div class="exp-text">Años construyendo confianza y acabados de primera clase en Texas</div>
            </div>
          </div>

          <div class="about-content">
            <div class="section-label">
              ${Icon({ name: 'trophy', size: 14 })}
              <span>Nuestra Historia y Trayectoria</span>
            </div>

            <h2 class="section-title">
              Tres Décadas de Excelencia en Plastering & Stucco Comercial
            </h2>

            <p class="about-lead">
              En <strong>SLP Plastering</strong>, con sede en <strong>Fort Worth, Texas, USA</strong>, combinamos el rigor de la ingeniería moderna con la maestría artesanal transmitida a lo largo de 30 años.
            </p>

            <p class="about-body">
              ${company.aboutHistory}
            </p>

            <div class="about-features-list">
              ${highlights.map((item, idx) => html`
                <div class="about-feature-item" key="${idx}">
                  <span class="feature-check-icon">${Icon({ name: 'check', size: 18 })}</span>
                  <span>${item}</span>
                </div>
              `)}
            </div>

            <div class="about-action-row">
              <a href="#contacto" class="btn btn-secondary">
                <span>Agendar Consulta Técnica</span>
                ${Icon({ name: 'arrow-right', size: 16 })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
