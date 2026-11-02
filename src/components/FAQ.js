import { Icon } from './Icons.js';

export function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = React.useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return html`
    <section id="faq" class="section faq-section-ref" aria-label="Preguntas Frecuentes">
      <div class="container">
        <div class="faq-split-grid">
          <div class="faq-left-col">
            <div class="section-label">
              ${Icon({ name: 'shield', size: 14 })}
              <span>DUDAS COMUNES</span>
            </div>
            <h2 class="faq-title-ref">Preguntas Frecuentes</h2>
            <p class="faq-sub-ref">
              Respuestas claras y técnicas a las dudas más frecuentes de contratistas, arquitectos y propietarios en Fort Worth, Texas.
            </p>
            <div style="margin-top: 28px;">
              <button class="btn btn-primary btn-pill" onClick=${scrollToContact}>
                <span>Consultar por mi Proyecto</span>
                ${Icon({ name: 'arrow-right', size: 16 })}
              </button>
            </div>
          </div>

          <div class="faq-right-col">
            <div class="faq-accordion-ref">
              ${faqs.map((f, idx) => {
                const isOpen = openIndex === idx;
                return html`
                  <div class="faq-item-ref ${isOpen ? 'open' : ''}" key="${idx}">
                    <button 
                      class="faq-btn-ref" 
                      onClick=${() => toggle(idx)}
                      aria-expanded="${isOpen}"
                      aria-controls="faq-desc-${idx}"
                    >
                      <span class="faq-q-text">${f.question}</span>
                      <span class="faq-arrow-ref">
                        ${Icon({ name: 'chevron-down', size: 18 })}
                      </span>
                    </button>

                    ${isOpen && html`
                      <div 
                        id="faq-desc-${idx}" 
                        class="faq-ans-body"
                        role="region"
                      >
                        <p>${f.answer}</p>
                      </div>
                    `}
                  </div>
                `;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
