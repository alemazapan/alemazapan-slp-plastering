<<<<<<< HEAD
# SLP PLASTERING — Sitio Web Corporativo Oficial

> **30 años de experiencia en plastering y stucco comercial en Fort Worth, Texas, USA**

Sitio web profesional, moderno, completamente en español y optimizado para la empresa **SLP Plastering**, especializada en sistemas de yeso arquitectónico interior (*plastering*) y revestimientos exteriores de estuco comercial (*stucco*).

---

## 🎨 Paleta de Colores Oficial

- **Negro:** `#202020` (Textos principales, contrastes corporativos, fondo oscuro de confianza)
- **Beige:** `#EDE7D8` (Fondos cálidos, cintas métricas, detalles arquitectónicos)
- **Naranja quemado:** `#B94F28` (Llamados a la acción, botones principales, insignias de categoría)
- **Blanco:** `#FFFFFF` (Superficies limpias, tarjetas, fondo principal)
- **Gris:** `#777777` (Descripciones secundarias, bordes y subtítulos)

---

## 📂 Estructura del Proyecto

```text
slp-plastering/
├── index.html                  # Documento principal con SEO (Schema.org, OpenGraph, Viewport)
├── server.js                   # Servidor HTTP nativo en Node.js (cero dependencias externas)
├── package.json                # Configuración estándar de scripts npm
├── vite.config.js              # Configuración lista para empaquetado con Vite
├── README.md                   # Documentación técnica completa
├── screenshot.png              # Captura de pantalla de alta resolución del sitio terminado
├── public/
│   ├── images/
│   │   ├── logo.jpg            # Logotipo oficial de SLP Plastering
│   │   └── projects/           # Fotografías reales de proyectos ejecutados
│   │       ├── proyecto-1-stucco-exterior-chimenea.jpg
│   │       ├── proyecto-2-plastering-campana-chimenea.jpg
│   │       ├── proyecto-3-plastering-salon-chimenea.jpg
│   │       └── proyecto-4-stucco-chimenea-nichos.jpg
│   └── vendor/
│       └── react-bundle.js     # Motor React, hooks y VDOM de alto rendimiento
└── src/
    ├── index.css               # Estilos responsivos con variables CSS y tipografía moderna
    ├── App.js                  # Componente raíz con orquestación de estado y lightbox
    ├── main.js                 # Punto de entrada de renderizado React
    ├── data/
    │   └── siteContent.js      # ARCHIVO DE EDICIÓN CENTRAL: Servicios, proyectos, FAQs, contacto
    └── components/
        ├── Icons.js            # Librería de iconos vectoriales SVG limpios
        ├── Navbar.js           # Navegación fija responsiva con menú móvil
        ├── Hero.js             # Portada de alto impacto con fotografía real y llamados a la acción
        ├── About.js            # Sección Nosotros con métricas de 30 años de trayectoria
        ├── Services.js         # Tarjetas de servicios confirmados con enlace a cotización
        ├── Gallery.js          # Catálogo con filtros por categoría
        ├── Lightbox.js         # Ventana modal emergente con zoom y navegación
        ├── WhyChooseUs.js      # Pilares comerciales y garantía de calidad
        ├── FAQ.js              # Acordeón interactivo de preguntas y respuestas
        ├── Contact.js          # Formulario con validación interactiva y confirmación
        └── Footer.js           # Pie de página corporativo con SEO y datos en Fort Worth, TX
```

---

## 🚀 Instrucciones para Ejecutar el Proyecto

### Opción 1: Servidor Node.js Integrado (Recomendada)
El proyecto incluye un servidor nativo que no requiere instalar ningún paquete de internet:

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
👉 **`http://localhost:3000`**

---

### Opción 2: Abrir Directamente en el Navegador
Puede abrir `index.html` directamente mediante cualquier extensión como **Live Server** en VS Code o con cualquier navegador moderno (Edge, Chrome, Firefox).

---

## 📷 Cómo Agregar o Reemplazar Fotografías Reales en la Galería

En estricto apego a las directrices de SLP Plastering, **no se utilizan fotografías de stock falsas**. Para agregar nuevas obras reales finalizadas:

1. Guarde la fotografía en formato JPG o PNG dentro de la carpeta:
   `public/images/projects/mi-nueva-obra.jpg`
2. Abra el archivo `src/data/siteContent.js`.
3. En la lista `projects`, agregue un nuevo objeto con los detalles de la obra:
   ```javascript
   {
     id: "proyecto-nuevo-5",
     title: "Fachada Comercial en Stucco Acrílico",
     category: "Stucco Exterior", // "Stucco Exterior" | "Plastering Interior" | "Acabados Especiales"
     image: "/images/projects/mi-nueva-obra.jpg",
     isRealPhoto: true,
     location: "Fort Worth, TX",
     year: "2026",
     description: "Aplicación de sistema de stucco resistente al clima de Texas...",
     details: ["Malla de refuerzo", "Acabado elastomérico", "Garantía de mano de obra"]
   }
   ```
4. Guarde el archivo. El catálogo y los filtros se actualizarán automáticamente sin tocar el diseño ni el código visual.

---

## ✏️ Cómo Editar Servicios, Contacto y Preguntas Frecuentes

Todo el contenido textual está centralizado en:
👉 **`src/data/siteContent.js`**

- **Teléfonos, Correo y Horarios:** Actualice `siteContent.company.phone`, `email` y `hours`.
- **Servicios Confirmados:** Agregue o modifique elementos en `siteContent.services`.
- **Preguntas Frecuentes:** Edite las preguntas y respuestas en `siteContent.faqs`.

---

## 🌐 Publicación en Internet (Producción)

El proyecto está diseñado bajo estándares web estáticos modernos:
- **Vercel / Netlify:** Conecte el repositorio y publique seleccionando la carpeta raíz.
- **GitHub Pages:** Suba los archivos al branch `gh-pages` o active Pages desde `main`.
- **Hosting Compartido / cPanel:** Suba todos los archivos por FTP a la carpeta `public_html`.
=======
# alemazapan-slp-plastering
>>>>>>> 0461958b02dcfd299b8a96c411b3f53d7852fcf0
