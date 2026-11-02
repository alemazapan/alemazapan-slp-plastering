import { Icon } from './Icons.js';

export function Hero({ company, heroReview, onSelectProject }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return html`
    <section id="inicio" class="hero-section-ref" aria-label="Sección de Inicio">
      <div class="container hero-grid-ref">
        <div class="hero-content-ref">
          <div class="hero-tag-ref">
            ${Icon({ name: 'building', size: 14 })}
            <span>EMPRESA DE CONSTRUCCIÓN & ACABADOS • TEXAS</span>
          </div>

          <h1 class="hero-h1-ref">
            <span class="hero-h1-main">DONDE LOS PLANOS</span>
            <span class="hero-h1-accent">SE CONVIERTEN EN REALIDAD</span>
            <span class="hero-h1-sub">30 AÑOS DE EXPERIENCIA EN PLASTERING Y STUCCO COMERCIAL</span>
            <span class="hero-h1-loc">EN FORT WORTH, TEXAS, USA</span>
          </h1>

          <p class="hero-desc-ref">
            ${company.shortDescription}
          </p>

          <div class="hero-cta-group-ref">
            <a href="tel:8170000000" class="btn btn-pill-dark">
              ${Icon({ name: 'phone', size: 16 })}
              <span>Llamar al ${company.phoneDisplay}</span>
            </a>

            <button class="btn btn-primary btn-pill" onClick=${() => scrollTo('contacto')}>
              <span>Solicitar Cotización</span>
              ${Icon({ name: 'arrow-right', size: 16 })}
            </button>
          </div>

          <div class="hero-trust-row-ref">
            <span class="trust-pill-ref">✓ 30 Años de Trayectoria</span>
            <span class="trust-pill-ref">✓ Enfoque Comercial & Residencial</span>
            <span class="trust-pill-ref">✓ Fort Worth & DFW Metro</span>
          </div>
        </div>

        <div class="hero-visual-ref">
          <div class="hero-image-wrap-ref">
            <img 
              src="./images/projects/p11.jpeg" 
              alt="Obra real de construcción y stucco comercial en Texas por SLP Plastering" 
              class="hero-img-ref"
              loading="eager"
            />
            
            <div class="hero-review-card-ref">
              <div class="review-stars-row">
                <span class="star-icon">★</span>
                <span class="star-icon">★</span>
                <span class="star-icon">★</span>
                <span class="star-icon">★</span>
                <span class="star-icon">★</span>
              </div>
              <p class="review-quote-text">
                "${heroReview.quote}"
              </p>
              <div class="review-author-row">
                <div>
                  <div class="review-author-name">${heroReview.author}</div>
                  <div class="review-author-sub">${heroReview.ratingText}</div>
                </div>
                <div class="review-nav-arrows">
                  <span class="review-arrow-btn">‹</span>
                  <span class="review-arrow-btn active">›</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
