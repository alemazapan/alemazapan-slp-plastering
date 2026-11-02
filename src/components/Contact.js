import { Icon } from './Icons.js';

export function Contact({ company, contactInfo, selectedService }) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService || 'Stucco Comercial de Alta Resistencia',
    message: ''
  });

  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Sync selected service if changed from outside
  React.useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Por favor ingrese su nombre completo.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'El nombre debe tener al menos 2 caracteres.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'El correo electrónico es requerido.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Ingrese un formato de correo electrónico válido (ej. nombre@empresa.com).';
    }

    const phoneClean = formData.phone.replace(/[\s\-\(\)\.]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Por favor ingrese un número telefónico de contacto.';
    } else if (phoneClean.length < 7) {
      errs.phone = 'Ingrese un teléfono válido con código de área (mínimo 7 dígitos).';
    }

    if (!formData.message.trim()) {
      errs.message = 'Por favor describa brevemente su proyecto o consulta.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'El mensaje debe tener al menos 10 caracteres para evaluar su solicitud adecuadamente.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simula envío controlado con respuesta visual inmediata
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Stucco Comercial de Alta Resistencia',
      message: ''
    });
    setErrors({});
  };

  return html`
    <section id="contacto" class="section contact-section" aria-label="Contacto y Cotizaciones">
      <div class="container">
        <div class="section-header">
          <div class="section-label">
            ${Icon({ name: 'mail', size: 14 })}
            <span>Atención Directa en Texas</span>
          </div>
          <h2 class="section-title">Comuníquese con SLP Plastering</h2>
          <p class="section-subtitle">
            ${contactInfo.subtitle} Solicite una cotización técnica sin compromiso para su próximo proyecto comercial o residencial.
          </p>
        </div>

        <div class="contact-grid">
          <div class="contact-info-col">
            <div>
              <div class="contact-card-box">
                <div class="contact-method-item">
                  <div class="contact-method-icon">
                    ${Icon({ name: 'map-pin', size: 22 })}
                  </div>
                  <div>
                    <div class="contact-method-title">Ubicación de Operaciones</div>
                    <div class="contact-method-val">${company.location}</div>
                    <div class="contact-method-note">${contactInfo.addressLine2}</div>
                  </div>
                </div>

                <div class="contact-method-item">
                  <div class="contact-method-icon">
                    ${Icon({ name: 'phone', size: 22 })}
                  </div>
                  <div>
                    <div class="contact-method-title">Teléfono Comercial</div>
                    <div class="contact-method-val">${company.phoneDisplay}</div>
                    <div class="contact-method-note">Atención de Lunes a Sábado</div>
                  </div>
                </div>

                <div class="contact-method-item">
                  <div class="contact-method-icon">
                    ${Icon({ name: 'mail', size: 22 })}
                  </div>
                  <div>
                    <div class="contact-method-title">Correo Electrónico</div>
                    <div class="contact-method-val">${company.email}</div>
                    <div class="contact-method-note">Respuestas técnicas en menos de 24 horas</div>
                  </div>
                </div>

                <div class="contact-method-item">
                  <div class="contact-method-icon">
                    ${Icon({ name: 'clock', size: 22 })}
                  </div>
                  <div>
                    <div class="contact-method-title">Horario de Operación</div>
                    <div class="contact-method-val">${company.hours}</div>
                  </div>
                </div>
              </div>

              <div class="contact-disclaimer-box">
                <strong>Aviso de Transparencia:</strong> ${contactInfo.note}
              </div>
            </div>

            <div style="margin-top: 24px; padding: 20px; background-color: var(--color-black); border-radius: var(--radius-md); color: #fff;">
              <div style="font-weight: 700; color: var(--color-beige); margin-bottom: 6px;">
                ¿Necesita una visita técnica en Fort Worth?
              </div>
              <p style="font-size: 0.85rem; color: #BBB; line-height: 1.5;">
                Coordinamos revisiones en sitio para tomar medidas precisas, evaluar el sustrato y entregar una propuesta con desglose de costos detallado.
              </p>
            </div>
          </div>

          <div class="contact-form-wrap">
            ${submitted ? html`
              <div class="form-success-alert">
                <div style="font-size: 3rem; margin-bottom: 12px;">✅</div>
                <h3 class="form-success-title">¡Mensaje Enviado con Éxito!</h3>
                <p style="margin-bottom: 16px; font-size: 0.95rem;">
                  Gracias por contactar a <strong>SLP Plastering</strong> en <strong>Fort Worth, Texas, USA</strong>. Hemos recibido los detalles de su proyecto y nuestro equipo técnico se comunicará con usted a la brevedad.
                </p>
                <div style="background: rgba(255, 255, 255, 0.7); padding: 14px; border-radius: var(--radius-sm); margin-bottom: 20px; font-size: 0.85rem; text-align: left;">
                  <div><strong>Contacto registrado:</strong> ${formData.name}</div>
                  <div><strong>Teléfono:</strong> ${formData.phone}</div>
                  <div><strong>Correo:</strong> ${formData.email}</div>
                  <div><strong>Servicio de interés:</strong> ${formData.service}</div>
                </div>
                <button class="btn btn-secondary" onClick=${handleReset}>
                  Enviar otra consulta
                </button>
              </div>
            ` : html`
              <form onSubmit=${handleSubmit} noValidate>
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" htmlFor="client-name">
                      Nombre Completo <span class="req">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="client-name" 
                      class="form-input ${errors.name ? 'error' : ''}" 
                      placeholder="Ej. Carlos Martínez"
                      value="${formData.name}"
                      onInput=${(e) => handleChange('name', e.target.value)}
                    />
                    ${errors.name && html`<div class="form-error-msg">${errors.name}</div>`}
                  </div>

                  <div class="form-group">
                    <label class="form-label" htmlFor="client-email">
                      Correo Electrónico <span class="req">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="client-email" 
                      class="form-input ${errors.email ? 'error' : ''}" 
                      placeholder="nombre@empresa.com"
                      value="${formData.email}"
                      onInput=${(e) => handleChange('email', e.target.value)}
                    />
                    ${errors.email && html`<div class="form-error-msg">${errors.email}</div>`}
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" htmlFor="client-phone">
                      Teléfono de Contacto <span class="req">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="client-phone" 
                      class="form-input ${errors.phone ? 'error' : ''}" 
                      placeholder="(817) 000-0000"
                      value="${formData.phone}"
                      onInput=${(e) => handleChange('phone', e.target.value)}
                    />
                    ${errors.phone && html`<div class="form-error-msg">${errors.phone}</div>`}
                  </div>

                  <div class="form-group">
                    <label class="form-label" htmlFor="client-service">
                      Tipo de Servicio Requerido
                    </label>
                    <select 
                      id="client-service" 
                      class="form-select"
                      value="${formData.service}"
                      onChange=${(e) => handleChange('service', e.target.value)}
                    >
                      <option value="Stucco Comercial de Alta Resistencia">Stucco Comercial de Alta Resistencia</option>
                      <option value="Plastering Interior Comercial y de Lujo">Plastering Interior Comercial y de Lujo</option>
                      <option value="Acabados Arquitectónicos & Molduras">Acabados Arquitectónicos & Molduras</option>
                      <option value="Reparación y Mantenimiento de Stucco">Reparación y Mantenimiento de Stucco</option>
                      <option value="Consulta General de Obra">Consulta General de Obra</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" htmlFor="client-message">
                    Detalles del Proyecto o Consulta <span class="req">*</span>
                  </label>
                  <textarea 
                    id="client-message" 
                    class="form-textarea ${errors.message ? 'error' : ''}" 
                    placeholder="Describa dimensiones aproximadas, tipo de inmueble comercial o residencial, ubicación en Fort Worth o DFW, o fechas estimadas de inicio..."
                    value="${formData.message}"
                    onInput=${(e) => handleChange('message', e.target.value)}
                  ></textarea>
                  ${errors.message && html`<div class="form-error-msg">${errors.message}</div>`}
                </div>

                <button 
                  type="submit" 
                  class="btn btn-primary" 
                  style="width: 100%; padding: 15px;"
                  disabled="${isSubmitting}"
                >
                  ${isSubmitting ? html`<span>Procesando envío...</span>` : html`
                    ${Icon({ name: 'arrow-right', size: 18 })}
                    <span>Enviar Solicitud de Cotización</span>
                  `}
                </button>
              </form>
            `}
          </div>
        </div>
      </div>
    </section>
  `;
}
