import { Icon } from './Icons.js';

export function CtaBanner({ company }) {
  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return html`
    <section class="cta-banner-ref" aria-label="Llamado a la acción comercial">
      <div class="container cta-banner-inner">
        <div class="cta-banner-saw-edge"></div>
        <div class="cta-banner-content">
          <div class="cta-badge">30 AÑOS DE EXPERIENCIA EN TEXAS</div>
          <h2 class="cta-banner-title">
            DONDE LOS PLANOS SE CONVIERTEN EN REALIDAD
          </h2>
          <p class="cta-banner-subtitle">
            Permítanos dar vida a su próximo proyecto comercial o residencial en Fort Worth y todo el área de DFW. Presupuestos sin compromiso y asesoría técnica de primer nivel.
          </p>
          <div class="cta-banner-actions">
            <button class="btn btn-dark btn-pill" onClick=${scrollToContact}>
              <span>Contactar a Nuestro Equipo</span>
              ${Icon({ name: 'arrow-right', size: 16 })}
            </button>
            <a href="tel:8170000000" class="btn btn-outline-white btn-pill">
              ${Icon({ name: 'phone', size: 16 })}
              <span>Llamar al ${company.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
