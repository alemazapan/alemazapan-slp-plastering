# SLP PLASTERING â€” Sitio Web Corporativo Oficial

> **30 aÃ±os de experiencia en plastering y stucco comercial en Fort Worth, Texas, USA**

Sitio web profesional, moderno, completamente en espaÃ±ol y optimizado para la empresa **SLP Plastering**, especializada en sistemas de yeso arquitectÃ³nico interior (*plastering*) y revestimientos exteriores de estuco comercial (*stucco*).

---

## ðŸŽ¨ Paleta de Colores Oficial

- **Negro:** `#202020` (Textos principales, contrastes corporativos, fondo oscuro de confianza)
- **Beige:** `#EDE7D8` (Fondos cÃ¡lidos, cintas mÃ©tricas, detalles arquitectÃ³nicos)
- **Naranja quemado:** `#B94F28` (Llamados a la acciÃ³n, botones principales, insignias de categorÃ­a)
- **Blanco:** `#FFFFFF` (Superficies limpias, tarjetas, fondo principal)
- **Gris:** `#777777` (Descripciones secundarias, bordes y subtÃ­tulos)

---

## ðŸ“‚ Estructura del Proyecto

```text
slp-plastering/
â”œâ”€â”€ index.html                  # Documento principal con SEO (Schema.org, OpenGraph, Viewport)
â”œâ”€â”€ server.js                   # Servidor HTTP nativo en Node.js (cero dependencias externas)
â”œâ”€â”€ package.json                # ConfiguraciÃ³n estÃ¡ndar de scripts npm
â”œâ”€â”€ vite.config.js              # ConfiguraciÃ³n lista para empaquetado con Vite
â”œâ”€â”€ README.md                   # DocumentaciÃ³n tÃ©cnica completa
â”œâ”€â”€ screenshot.png              # Captura de pantalla de alta resoluciÃ³n del sitio terminado
â”œâ”€â”€ public/
â”‚   â”œâ”€â”€ images/
â”‚   â”‚   â”œâ”€â”€ logo.jpg            # Logotipo oficial de SLP Plastering
â”‚   â”‚   â””â”€â”€ projects/           # FotografÃ­as reales de proyectos ejecutados
â”‚   â”‚       â”œâ”€â”€ proyecto-1-stucco-exterior-chimenea.jpg
â”‚   â”‚       â”œâ”€â”€ proyecto-2-plastering-campana-chimenea.jpg
â”‚   â”‚       â”œâ”€â”€ proyecto-3-plastering-salon-chimenea.jpg
â”‚   â”‚       â””â”€â”€ proyecto-4-stucco-chimenea-nichos.jpg
â”‚   â””â”€â”€ vendor/
â”‚       â””â”€â”€ react-bundle.js     # Motor React, hooks y VDOM de alto rendimiento
â””â”€â”€ src/
    â”œâ”€â”€ index.css               # Estilos responsivos con variables CSS y tipografÃ­a moderna
    â”œâ”€â”€ App.js                  # Componente raÃ­z con orquestaciÃ³n de estado y lightbox
    â”œâ”€â”€ main.js                 # Punto de entrada de renderizado React
    â”œâ”€â”€ data/
    â”‚   â””â”€â”€ siteContent.js      # ARCHIVO DE EDICIÃ“N CENTRAL: Servicios, proyectos, FAQs, contacto
    â””â”€â”€ components/
        â”œâ”€â”€ Icons.js            # LibrerÃ­a de iconos vectoriales SVG limpios
        â”œâ”€â”€ Navbar.js           # NavegaciÃ³n fija responsiva con menÃº mÃ³vil
        â”œâ”€â”€ Hero.js             # Portada de alto impacto con fotografÃ­a real y llamados a la acciÃ³n
        â”œâ”€â”€ About.js            # SecciÃ³n Nosotros con mÃ©tricas de 30 aÃ±os de trayectoria
        â”œâ”€â”€ Services.js         # Tarjetas de servicios confirmados con enlace a cotizaciÃ³n
        â”œâ”€â”€ Gallery.js          # CatÃ¡logo con filtros por categorÃ­a
        â”œâ”€â”€ Lightbox.js         # Ventana modal emergente con zoom y navegaciÃ³n
        â”œâ”€â”€ WhyChooseUs.js      # Pilares comerciales y garantÃ­a de calidad
        â”œâ”€â”€ FAQ.js              # AcordeÃ³n interactivo de preguntas y respuestas
        â”œâ”€â”€ Contact.js          # Formulario con validaciÃ³n interactiva y confirmaciÃ³n
        â””â”€â”€ Footer.js           # Pie de pÃ¡gina corporativo con SEO y datos en Fort Worth, TX
```

---

## ðŸš€ Instrucciones para Ejecutar el Proyecto

### OpciÃ³n 1: Servidor Node.js Integrado (Recomendada)
El proyecto incluye un servidor nativo que no requiere instalar ningÃºn paquete de internet:

```bash
# Entrar a la carpeta del proyecto
cd slp-plastering

# Iniciar el servidor
node server.js
```
O con npm:
```bash
npm start
```

Abra su navegador web en:
ðŸ‘‰ **`http://localhost:3000`**

---

### OpciÃ³n 2: Abrir Directamente en el Navegador
Puede abrir `index.html` directamente mediante cualquier extensiÃ³n como **Live Server** en VS Code o con cualquier navegador moderno (Edge, Chrome, Firefox).

---

## ðŸ“· CÃ³mo Agregar o Reemplazar FotografÃ­as Reales en la GalerÃ­a

En estricto apego a las directrices de SLP Plastering, **no se utilizan fotografÃ­as de stock falsas**. Para agregar nuevas obras reales finalizadas:

1. Guarde la fotografÃ­a en formato JPG o PNG dentro de la carpeta:
   `public/images/projects/mi-nueva-obra.jpg`
2. Abra el archivo `src/data/siteContent.js`.
3. En la lista `projects`, agregue un nuevo objeto con los detalles de la obra:
   ```javascript
   {
     id: "proyecto-nuevo-5",
     title: "Fachada Comercial en Stucco AcrÃ­lico",
     category: "Stucco Exterior", // "Stucco Exterior" | "Plastering Interior" | "Acabados Especiales"
     image: "/images/projects/mi-nueva-obra.jpg",
     isRealPhoto: true,
     location: "Fort Worth, TX",
     year: "2026",
     description: "AplicaciÃ³n de sistema de stucco resistente al clima de Texas...",
     details: ["Malla de refuerzo", "Acabado elastomÃ©rico", "GarantÃ­a de mano de obra"]
   }
   ```
4. Guarde el archivo. El catÃ¡logo y los filtros se actualizarÃ¡n automÃ¡ticamente sin tocar el diseÃ±o ni el cÃ³digo visual.

---

## âœï¸ CÃ³mo Editar Servicios, Contacto y Preguntas Frecuentes

Todo el contenido textual estÃ¡ centralizado en:
ðŸ‘‰ **`src/data/siteContent.js`**

- **TelÃ©fonos, Correo y Horarios:** Actualice `siteContent.company.phone`, `email` y `hours`.
- **Servicios Confirmados:** Agregue o modifique elementos en `siteContent.services`.
- **Preguntas Frecuentes:** Edite las preguntas y respuestas en `siteContent.faqs`.

---

## ðŸŒ PublicaciÃ³n en Internet (ProducciÃ³n)

El proyecto estÃ¡ diseÃ±ado bajo estÃ¡ndares web estÃ¡ticos modernos:
- **Vercel / Netlify:** Conecte el repositorio y publique seleccionando la carpeta raÃ­z.
- **GitHub Pages:** Suba los archivos al branch `gh-pages` o active Pages desde `main`.
- **Hosting Compartido / cPanel:** Suba todos los archivos por FTP a la carpeta `public_html`.
