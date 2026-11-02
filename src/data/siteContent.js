/**
 * SLP PLASTERING - CONTENIDO EDITABLE DEL SITIO WEB
 * Actualizado con el archivo fotográfico real del proyecto.
 * Ubicación: Fort Worth, Texas, USA | 30 Años de Experiencia
 */

export const siteContent = {
  company: {
    name: "SLP Plastering",
    tagline: "30 años de experiencia en plastering y stucco comercial",
    location: "Fort Worth, Texas, USA",
    experienceYears: "30",
    phone: "(817) 000-0000",
    phoneDisplay: "(817) 000-0000",
    phoneCall: "tel:8170000000",
    email: "info@slpplastering.com",
    hours: "Lunes a Sábado: 7:00 AM - 6:00 PM | Domingo: Cerrado",
    serviceArea: "Fort Worth, Dallas, Arlington y todo el Metroplex DFW",
    logoPath: "./images/logo.jpeg",
    heroHeadline: "DONDE LOS PLANOS SE CONVIERTEN EN REALIDAD",
    heroSubheadline: "30 años de experiencia en plastering y stucco comercial en Fort Worth, Texas",
    shortDescription: "Desde la primera idea hasta el acabado final, convertimos sus planos en obras sólidas y duraderas — con comunicación transparente, presupuestos claros y mano de obra artesanal de máxima confianza.",
    aboutHistory: "Fundada con la vocación del trabajo bien hecho y la maestría constructiva, SLP Plastering acumula tres décadas de trayectoria ininterrumpida en Fort Worth y el norte de Texas. Nos especializamos en la ejecución de proyectos de plastering y stucco para edificaciones comerciales y residencias de alto nivel, trabajando hombro a hombro con constructores, arquitectos y propietarios exigentes."
  },

  // Testimonio destacado para el Hero (estilo diseño de referencia)
  heroReview: {
    stars: 5,
    quote: "¡Trabajo excepcional! Meticulosos en cada detalle, acabados de primera calidad en nuestro proyecto comercial y cumplimiento estricto de cronogramas. ¡Ampliamente recomendados en Texas!",
    author: "Carlos E. / Contratista Comercial DFW",
    ratingText: "5.0 de 5 estrellas en obras comerciales"
  },

  // Métricas destacadas
  metrics: [
    { number: "30+", label: "Años de Experiencia", desc: "Trayectoria continua en el sector de la construcción en Texas" },
    { number: "100%", label: "Enfoque Comercial", desc: "Cumplimiento estricto de códigos y normativas de edificación" },
    { number: "DFW", label: "Cobertura Completa", desc: "Servicio en Fort Worth, Dallas y todo el área metropolitana" },
    { number: "1ra", label: "Calidad Garantizada", desc: "Materiales certificados y mano de obra especializada" }
  ],

  // Pilares de la Empresa (¿Por qué elegirnos?)
  pillars: [
    {
      id: "trayectoria",
      title: "30 Años de Maestría Artesanal",
      description: "Nuestras tres décadas en el mercado son el mayor testimonio de solidez, dominio técnico y adaptabilidad a las exigencias constructivas de Texas.",
      iconName: "trophy"
    },
    {
      id: "especializacion",
      title: "Especialistas en Plastering & Stucco Comercial",
      description: "Comprendemos a fondo las demandas de resistencia estructural, aislamiento térmico y estética corporativa que requiere una obra comercial.",
      iconName: "building"
    },
    {
      id: "cumplimiento",
      title: "Puntualidad y Cumplimiento de Cronogramas",
      description: "Coordinamos eficientemente con contratistas generales y directores de obra para entregar cada fase en los tiempos pactados sin comprometer la calidad.",
      iconName: "clock"
    },
    {
      id: "materiales",
      title: "Materiales y Técnicas Certificadas",
      description: "Aplicamos mezclas de primera calidad, mallas de refuerzo de alto rendimiento y selladores impermeabilizantes que protegen la inversión a largo plazo.",
      iconName: "shield"
    }
  ],

  // Servicios Confirmados (Con fotografía real para cada tarjeta estilo referencia)
  services: [
    {
      id: "stucco-comercial",
      title: "Stucco Comercial de Alta Resistencia",
      category: "Exterior",
      image: "./images/projects/p11.jpeg",
      summary: "Sistemas completos de estuco exterior tradicional de 3 capas y EIFS sintético para locales comerciales, oficinas y fachadas expuestas al clima extremo de Texas.",
      description: "Instalación profesional de sistemas de stucco para fachadas comerciales y corporativas. Incluye barrera contra humedad, malla metálica de sujeción (lath), capa base (scratch coat), capa niveladora (brown coat) y capa de acabado con textura y color integral formulado para resistir la radiación solar y la intemperie.",
      highlights: [
        "Sistemas tradicionales de 3 capas y sistemas EIFS",
        "Alta resistencia a fisuras y choque térmico",
        "Acabados texturizados uniformes o personalizados",
        "Barreras impermeabilizantes de grado comercial"
      ],
      badge: "Servicio Destacado"
    },
    {
      id: "plastering-interior",
      title: "Plastering Interior de Lujo & Yeso Pulido",
      category: "Interior",
      image: "./images/projects/proyecto-2-plastering-campana-chimenea.jpg",
      summary: "Acabados de yeso fino arquitectónico, superficies lisas de máxima precisión para campanas monumentales de chimenea, vestíbulos y muros ejecutivos.",
      description: "Aplicación experta de yeso para interiores de alto perfil. Logramos acabados lisos como vidrio (smooth coat), yeso veneciano pulido y revestimientos especiales para campanas monumentales de chimeneas, arcos, techos abovedados y muros de acento que elevan la categoría de cualquier espacio comercial o residencial.",
      highlights: [
        "Campanas cónicas y estructuras de chimenea a medida",
        "Acabados lisos impecables listos para pintura o tinte",
        "Yeso arquitectónico de alta densidad",
        "Detalles curvos, arcos y transiciones perfectas"
      ],
      badge: "Especialidad Artesanal"
    },
    {
      id: "acabados-especiales",
      title: "Acabados Arquitectónicos & Chimeneas",
      category: "Detalles",
      image: "./images/projects/p5.jpeg",
      summary: "Trabajos a mano personalizados: nichos empotrados en arco, molduras ornamentales, repisas integradas, cornisas y texturas rústicas.",
      description: "Modelado manual y aplicación de detalles escultóricos en estuco y yeso. Creamos nichos decorativos en arco, repisas integradas, cornisas perimetrales y texturas rústicas personalizadas para proyectos con identidad visual única y distinciones arquitectónicas.",
      highlights: [
        "Nichos iluminados y hornacinas decorativas en arco",
        "Cornisas y molduras exteriores e interiores",
        "Texturas personalizadas según especificación",
        "Acabados rústicos, arenados o pulidos finos"
      ],
      badge: "Personalización"
    },
    {
      id: "reparacion-restauracion",
      title: "Restauración y Mantenimiento de Fachadas",
      category: "Mantenimiento",
      image: "./images/projects/p1.jpeg",
      summary: "Diagnóstico técnico, sellado estructural de grietas, repello invisible y restauración integral de fachadas comerciales de estuco existentes.",
      description: "Servicio de remediación y mantenimiento preventivo para edificaciones comerciales. Solucionamos problemas de delaminación, grietas por asentamiento estructural, manchas de humedad o daño mecánico, igualando el patrón de textura y color original para una reparación invisible y duradera.",
      highlights: [
        "Inspección y sellado elastomérico de fisuras",
        "Emparejamiento exacto de texturas existentes",
        "Tratamiento hidrófugo y sellado exterior",
        "Extensión de vida útil de la envolvente del edificio"
      ],
      badge: "Mantenimiento Preventivo"
    }
  ],

  // Galería de Proyectos Reales (Selección curada del archivo fotográfico)
  projects: [
    {
      id: "proj-aquarium",
      title: "Downtown Aquarium — Fachada Comercial Temática",
      category: "Stucco Comercial",
      image: "./images/projects/p18.jpeg",
      isRealPhoto: true,
      location: "Texas",
      year: "2024",
      description: "Proyecto emblemático de gran escala comercial: revestimiento exterior de estuco de alta durabilidad y modelado temático escultórico en acceso principal de atracción turística de alta afluencia.",
      details: ["Acabado exterior de resistencia comercial extrema", "Texturas modeladas a mano", "Integración con estructura arquitectónica multinivel"]
    },
    {
      id: "proj-commercial-complex",
      title: "Complejo Comercial y Corporativo en Texas",
      category: "Stucco Comercial",
      image: "./images/projects/p44.jpeg",
      isRealPhoto: true,
      location: "Texas",
      year: "2025",
      description: "Desarrollo de revestimiento exterior en estuco multicapa en múltiples naves y volúmenes corporativos, con control estricto de juntas de dilatación y uniformidad cromática.",
      details: ["Múltiples volúmenes y frentes de trabajo simultáneos", "Barrera impermeabilizante comercial", "Acabado uniforme en tono marfil"]
    },
    {
      id: "proj-modern-office",
      title: "Edificio Comercial Contemporáneo",
      category: "Stucco Comercial",
      image: "./images/projects/p11.jpeg",
      isRealPhoto: true,
      location: "Fort Worth, TX",
      year: "2025",
      description: "Aplicación de sistema de estuco contemporáneo en edificio de dos niveles con líneas limpias, aleros volados y amplios ventanales corporativos.",
      details: ["Estuco liso monocromático contemporáneo", "Perfilado de aristas a escuadra", "Acabado resistente al sol de Texas"]
    },
    {
      id: "proj-modern-facade-2",
      title: "Fachada Comercial con Marquesina",
      category: "Stucco Comercial",
      image: "./images/projects/p12.jpeg",
      isRealPhoto: true,
      location: "Texas",
      year: "2025",
      description: "Detalle de fachada en estuco arquitectónico en edificio con base de hormigón reforzado, marquesina perimetral y vanos horizontales continuos.",
      details: ["Transición estanca con zócalo de concreto", "Textura fina de alta densidad", "Sellado elastomérico perimetral"]
    },
    {
      id: "proj-smooth-chimney",
      title: "Campana de Chimenea en Plastering Liso Minimalista",
      category: "Plastering Interior",
      image: "./images/projects/proyecto-2-plastering-campana-chimenea.jpg",
      isRealPhoto: true,
      location: "Fort Worth, TX",
      year: "2026",
      description: "Diseño y aplicación artesanal de yeso interior (smooth plaster finish) en campana piramidal de chimenea. Se ejecutó una superficie perfectamente lisa con esquinas perfiladas a escuadra, cornisa inferior moldurada y hogar con patrón cerámico en espiga.",
      details: ["Acabado liso de yeso arquitectónico", "Perfilado milimétrico de aristas", "Preparación integral para secado controlado"]
    },
    {
      id: "proj-monumental-living",
      title: "Integración de Plastering en Salón Monumental",
      category: "Plastering Interior",
      image: "./images/projects/proyecto-3-plastering-salon-chimenea.jpg",
      isRealPhoto: true,
      location: "Fort Worth, TX",
      year: "2026",
      description: "Acabado final de yeso en chimenea de doble altura dentro de un salón de concepto abierto con vigas de madera noble y mampostería en piedra natural. La textura uniforme y tono marfil del plastering aporta calidez, elegancia y sobriedad al espacio.",
      details: ["Trabajo en altura con protección de áreas", "Tono marfil integral sin imperfecciones", "Armonización con vigas y elementos de piedra"]
    },
    {
      id: "proj-niche-fireplace",
      title: "Chimenea con Nichos Arqueados en Stucco Texturizado",
      category: "Acabados Especiales",
      image: "./images/projects/p5.jpeg",
      isRealPhoto: true,
      location: "Fort Worth, TX",
      year: "2025",
      description: "Modelado artesanal de chimenea con textura arenada media, arco rebajado sobre el hogar, hornacina decorativa arqueada en el lateral derecho, repisa maciza de madera y rejillas de ventilación integradas.",
      details: ["Modelado a mano de nicho semicircular", "Textura arenada con grano uniforme", "Bancada corrida y repisa de madera noble"]
    },
    {
      id: "proj-mediterranean-villa",
      title: "Villa Mediterránea con Arcos y Cornisas",
      category: "Fachadas y Residencias",
      image: "./images/projects/p10.jpeg",
      isRealPhoto: true,
      location: "Texas",
      year: "2025",
      description: "Residencia señorial con molduras perimetrales en estuco, arcos de medio punto en planta baja y alta, y acabado tradicional en tono crema integrado con teja colonial.",
      details: ["Moldurado de vanos y recuadros exteriores", "Arcadas de medio punto trabajadas a mano", "Tratamiento hidrófugo integral"]
    },
    {
      id: "proj-tuscan-estate",
      title: "Finca Estilo Toscano con Stucco Ocre y Piedra",
      category: "Fachadas y Residencias",
      image: "./images/projects/p14.jpeg",
      isRealPhoto: true,
      location: "Texas",
      year: "2025",
      description: "Combinación de mampostería en piedra caliza con estuco rústico en tono ocre toscano, terraza con balaustrada superior y arcadas de acceso.",
      details: ["Pigmentación mineral integral en tono ocre", "Acabado rústico artesanal", "Detalles en arcos y cornisas"]
    },
    {
      id: "proj-two-story-residence",
      title: "Residencia de Dos Niveles con Pórtico de Acceso",
      category: "Fachadas y Residencias",
      image: "./images/projects/p20.jpeg",
      isRealPhoto: true,
      location: "Texas",
      year: "2025",
      description: "Vivienda de dos plantas con pórtico principal abovedado, cornisas intermedias de estuco, ventanas con recuadros moldurados y techo cerámico.",
      details: ["Molduras de separación de nivel", "Pórtico en arco con capiteles de estuco", "Textura fina de alta durabilidad"]
    },
    {
      id: "proj-modern-white-residence",
      title: "Residencia Contemporánea en Stucco Blanco Puro",
      category: "Fachadas y Residencias",
      image: "./images/projects/p33.jpeg",
      isRealPhoto: true,
      location: "Fort Worth, TX",
      year: "2026",
      description: "Obra moderna con acabado blanco ultra liso, vanos negros de alto contraste y aleros suspendidos. Un ejemplo de la estética minimalista actual en el norte de Texas.",
      details: ["Estuco blanco puro con sellador anti-manchas", "Aristas afiladas y precisas", "Preparación para exteriores contemporáneos"]
    },
    {
      id: "proj-twin-chimney-estate",
      title: "Finca de Lujo con Chimeneas Dobles de Stucco",
      category: "Fachadas y Residencias",
      image: "./images/projects/p41.jpeg",
      isRealPhoto: true,
      location: "Texas",
      year: "2025",
      description: "Gran propiedad con galería posterior cubierta, dos chimeneas monumentales en estuco y muros perimetrales con protección contra intemperie.",
      details: ["Chimeneas de gran altura con remates de estuco", "Acabado en galería cubierta", "Garantía de mano de obra"]
    },
    {
      id: "proj-chimney-scaffold",
      title: "Stucco Exterior en Chimenea y Molduras",
      category: "Stucco Comercial",
      image: "./images/projects/p1.jpeg",
      isRealPhoto: true,
      location: "Fort Worth, TX",
      year: "2026",
      description: "Aplicación de sistema de estuco exterior multicapa en chimenea monumental y recuadros de fachada comercial/residencial con andamiaje de seguridad.",
      details: ["Sistema multicapa de estuco exterior", "Detallado de molduras perimetrales de ventanas", "Sellado estanco contra intemperie de Texas"]
    },
    {
      id: "proj-tall-chimney-terrace",
      title: "Torre y Chimenea Exterior con Balcón",
      category: "Stucco Comercial",
      image: "./images/projects/p39.jpeg",
      isRealPhoto: true,
      location: "Texas",
      year: "2026",
      description: "Volumen vertical de tres plantas con chimenea adosada en estuco blanco, barandillas metálicas y juntas de control arquitectónicas.",
      details: ["Trabajo en altura con nivelación láser", "Juntas de dilatación disimuladas", "Acabado blanco luminoso"]
    },
    {
      id: "proj-country-stone-stucco",
      title: "Residencia Campestre en Piedra y Stucco",
      category: "Fachadas y Residencias",
      image: "./images/projects/p24.jpeg",
      isRealPhoto: true,
      location: "Texas",
      year: "2025",
      description: "Integración de estuco de alta resistencia en tonos tierra con muros de carga en piedra natural rústica.",
      details: ["Transición estanca entre piedra y estuco", "Tono beige cálido que armoniza con el entorno", "Materiales transpirables"]
    },
    {
      id: "proj-columns-under-construction",
      title: "Fachada con Columnas y Balcón en Proceso",
      category: "Stucco Comercial",
      image: "./images/projects/p28.jpeg",
      isRealPhoto: true,
      location: "Texas",
      year: "2026",
      description: "Fase de ejecución y acabado de columnas rectangulares de estuco, vigas de soporte y molduras de alero en residencia de lujo.",
      details: ["Plomo perfecto en columnas estructurales", "Revestimiento continuo sin empalmes visibles", "Supervisión técnica directa"]
    }
  ],

  // Categorías de la Galería
  galleryCategories: [
    "Todos",
    "Stucco Comercial",
    "Plastering Interior",
    "Fachadas y Residencias",
    "Acabados Especiales"
  ],

  // Preguntas Frecuentes (FAQ)
  faqs: [
    {
      question: "¿Cuál es la diferencia técnica entre plastering y stucco?",
      answer: "Aunque ambos son recubrimientos minerales, el stucco se formula principalmente con cemento Portland, arena y cal para exteriores, brindando máxima resistencia al agua, impactos y cambios térmicos extremos. Por su parte, el plastering tradicional emplea base de yeso o cal apagada y se destina principalmente a interiores para lograr acabados lisos como vidrio (smooth coat), decorativos o de alta definición arquitectónica."
    },
    {
      question: "¿Realizan proyectos comerciales de gran escala en Fort Worth y el área de DFW?",
      answer: "Sí. En SLP Plastering contamos con 30 años de experiencia comprobada atendiendo proyectos comerciales de envergadura: locales comerciales, restaurantes, complejos temáticos (como Downtown Aquarium), oficinas corporativas y plazas comerciales en Fort Worth, Arlington, Dallas y condados aledaños."
    },
    {
      question: "¿Cómo puedo solicitar una cotización para mi obra comercial o residencial?",
      answer: "Puede ponerse en contacto con nosotros a través del formulario de esta página web, llamándonos directamente o enviando planos y especificaciones por correo electrónico. Coordinamos visitas técnicas al sitio en Fort Worth para evaluar dimensiones, sustratos y requerimientos técnicos sin costo ni compromiso."
    },
    {
      question: "¿Cuánto tiempo toma típicamente la aplicación de stucco en un edificio comercial?",
      answer: "El tiempo depende del metraje cuadrado, la complejidad arquitectónica y los tiempos reglamentarios de curado entre capas (mínimo de 48 a 72 horas para la capa base y capa niveladora antes del acabado final). Durante nuestra propuesta técnica detallamos un cronograma preciso de fases para integrarnos armónicamente con las demás disciplinas de la obra."
    },
    {
      question: "¿Ofrecen garantía en sus trabajos de plastering y acabados?",
      answer: "Absolutamente. Todos nuestros trabajos están respaldados por nuestra garantía de mano de obra y cumplimiento estricto de las especificaciones del fabricante de los materiales. Nuestras tres décadas de permanencia ininterrumpida en el mercado son la mayor garantía de nuestro compromiso y solidez."
    },
    {
      question: "¿Qué mantenimiento preventivo recomiendan para el stucco exterior en el clima de Texas?",
      answer: "Recomendamos inspecciones visuales periódicas tras temporadas de lluvias intensas o granizo, limpieza suave con agua a baja presión para retirar polvo acumulado y sellado inmediato de cualquier microfisura superficial antes de que el agua pueda infiltrarse en la base del muro."
    }
  ],

  contact: {
    title: "¿Tiene un proyecto en mente?",
    subtitle: "Consulte con especialistas con 30 años de experiencia comprobada en Fort Worth, Texas.",
    note: "Campos de contacto editables en src/data/siteContent.js para actualizar teléfonos o correos cuando estén confirmados.",
    addressLine1: "Fort Worth, Texas, USA",
    addressLine2: "Atención comercial en todo el Metroplex DFW",
    phoneNotice: "Llámenos para atención inmediata o agende una visita a su obra.",
    formDisclaimer: "Envíenos los detalles de su proyecto y nuestro equipo le responderá a la brevedad con una estimación técnica."
  }
};
