import { Icon } from './Icons.js';

export function Footer({ company }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return html`
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand-col">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <img src="${company.logoPath}" alt="${company.name}" style="width: 44px; height: 44px; border-radius: 6px; background: #fff;" />
              <div>
                <div class="footer-brand-title">${company.name}</div>
                <div class="footer-brand-sub">${company.tagline}</div>
              </div>
            </div>

            <p class="footer-desc">
              Especialistas con 30 años de experiencia comprobada en plastering arquitectónico interior y sistemas duraderos de stucco comercial en el norte de Texas.
            </p>

            <div class="footer-location-tag">
              ${Icon({ name: 'map-pin', size: 16 })}
              <span>${company.location}</span>
            </div>
          </div>

          <div>
            <h4 class="footer-col-title">Navegación</h4>
            <ul class="footer-links-list">
              <li class="footer-link-item"><a href="#inicio" class="footer-link" onClick=${(e) => { e.preventDefault(); scrollTo('inicio'); }}>Inicio</a></li>
              <li class="footer-link-item"><a href="#nosotros" class="footer-link" onClick=${(e) => { e.preventDefault(); scrollTo('nosotros'); }}>Nosotros</a></li>
              <li class="footer-link-item"><a href="#servicios" class="footer-link" onClick=${(e) => { e.preventDefault(); scrollTo('servicios'); }}>Servicios</a></li>
              <li class="footer-link-item"><a href="#proyectos" class="footer-link" onClick=${(e) => { e.preventDefault(); scrollTo('proyectos'); }}>Galería de Proyectos</a></li>
              <li class="footer-link-item"><a href="#por-que-elegirnos" class="footer-link" onClick=${(e) => { e.preventDefault(); scrollTo('por-que-elegirnos'); }}>¿Por qué elegirnos?</a></li>
              <li class="footer-link-item"><a href="#faq" class="footer-link" onClick=${(e) => { e.preventDefault(); scrollTo('faq'); }}>Preguntas Frecuentes</a></li>
              <li class="footer-link-item"><a href="#contacto" class="footer-link" onClick=${(e) => { e.preventDefault(); scrollTo('contacto'); }}>Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title">Servicios</h4>
            <ul class="footer-links-list">
              <li class="footer-link-item"><a href="#servicios" class="footer-link" onClick=${(e) => { e.preventDefault(); scrollTo('stucco-comercial'); }}>Stucco Comercial Exterior</a></li>
              <li class="footer-link-item"><a href="#servicios" class="footer-link" onClick=${(e) => { e.preventDefault(); scrollTo('plastering-interior'); }}>Plastering Interior de Lujo</a></li>
              <li class="footer-link-item"><a href="#servicios" class="footer-link" onClick=${(e) => { e.preventDefault(); scrollTo('acabados-especiales'); }}>Acabados Arquitectónicos</a></li>
              <li class="footer-link-item"><a href="#servicios" class="footer-link" onClick=${(e) => { e.preventDefault(); scrollTo('reparacion-restauracion'); }}>Reparación de Stucco</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title">Área de Servicio</h4>
            <p style="font-size: 0.85rem; color: #AAA; line-height: 1.5; margin-bottom: 14px;">
              Fort Worth, Dallas, Arlington, Denton, Keller, Southlake, Frisco, Plano y todo el Metroplex de Dallas-Fort Worth.
            </p>
            <div style="font-size: 0.85rem; color: #EDE7D8; font-weight: 600;">
              Horario de Atención:
            </div>
            <div style="font-size: 0.8rem; color: #888;">
              ${company.hours}
            </div>
          </div>
        </div>

        <div class="seo-keywords-bar">
          <strong>Optimización Local:</strong> Commercial Plastering Fort Worth • Commercial Stucco Fort Worth • Contratista de Estuco y Yeso en Fort Worth, Texas, USA
        </div>

        <div class="footer-bottom-bar">
          <div>
            &copy; 2026 <strong>SLP Plastering</strong> — Fort Worth, Texas, USA. Todos los derechos reservados.
          </div>
          <div style="display: flex; gap: 20px;">
            <span>30 Años de Experiencia</span>
            <span>Plastering & Stucco Comercial</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
