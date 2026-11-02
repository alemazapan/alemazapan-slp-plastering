import { Icon } from './Icons.js';

export function Navbar({ company, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: "Inicio", target: "inicio" },
    { label: "Nosotros", target: "nosotros" },
    { label: "Servicios", target: "servicios" },
    { label: "Galería", target: "proyectos" },
    { label: "¿Por qué elegirnos?", target: "por-que-elegirnos" },
    { label: "Preguntas", target: "faq" },
    { label: "Contacto", target: "contacto" }
  ];

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) onNavigate(target);
  };

  return html`
    <header class="header-wrapper" role="banner">
      <div class="container header-inner">
        <a href="#inicio" class="brand-logo-link" onClick=${(e) => handleLinkClick(e, 'inicio')} aria-label="SLP Plastering Inicio">
          <img src="${company.logoPath}" alt="Logotipo oficial de SLP Plastering" class="brand-logo-img" />
          <div class="brand-text">
            <span class="brand-name">${company.name}</span>
            <span class="brand-location">Fort Worth, Texas, USA</span>
          </div>
        </a>

        <nav role="navigation" aria-label="Navegación principal">
          <ul class="nav-links ${mobileMenuOpen ? 'mobile-open' : ''}">
            ${navItems.map(item => html`
              <li key="${item.target}">
                <a 
                  href="#${item.target}" 
                  class="nav-link" 
                  onClick=${(e) => handleLinkClick(e, item.target)}
                >
                  ${item.label}
                </a>
              </li>
            `)}
          </ul>
        </nav>

        <div class="header-cta-group">
          <a href="tel:8170000000" class="btn btn-pill-dark" title="Llamar a SLP Plastering">
            ${Icon({ name: 'phone', size: 15 })}
            <span>Llamar al ${company.phoneDisplay}</span>
          </a>

          <a href="#contacto" class="btn btn-primary btn-pill" onClick=${(e) => handleLinkClick(e, 'contacto')}>
            <span>Cotizar</span>
          </a>

          <button 
            class="mobile-menu-btn" 
            aria-label="${mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}"
            onClick=${() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ${Icon({ name: mobileMenuOpen ? 'x' : 'menu', size: 26 })}
          </button>
        </div>
      </div>
    </header>
  `;
}
