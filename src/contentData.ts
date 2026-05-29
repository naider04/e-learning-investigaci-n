import { Unit, GlossaryItem, SuggestedReading } from './types';

export const UNITS: Unit[] = [
  {
    id: 1,
    title: "ASPECTOS ESENCIALES Y COMPONENTES DEL E-LEARNING",
    topics: [
      {
        id: "u1t1",
        title: "Tema 1: Integración de las TIC y el Sistema Educativo",
        summary: [
          "El E-learning combina la teoría de la enseñanza con tecnologías de red para permitir el aprendizaje remoto.",
          "Se fundamenta fuertemente en el Conectivismo, donde el conocimiento resides en la diversidad de opiniones y es un producto continuo de red.",
          "Las competencias TIC son vitales para el desempeño académico y profesional en medios sociales y redes virtuales."
        ],
        visualType: "mindmap",
        lessonsLearned: "El e-learning no es solo tecnología; es una transformación pedagógica de fondo que mejora radicalmente la flexibilidad y la eficiencia del acceso al conocimiento humano global.",
        qrLink: "https://quiz.unemi.edu.ec/evaluation-learning-theories",
        qrDesc: "Escanea el QR para responder un test interactivo sobre teorías del aprendizaje (Cognitivismo, Constructivismo y Conectivismo).",
        activityTitle: "Quiz Interactivo de Autoevaluación"
      },
      {
        id: "u1t2",
        title: "Tema 2: Desarrollo de Contenidos",
        summary: [
          "El contenido educativo puede ser asincrónico (acceso flexible en cualquier momento) o sincrónico (clases e interacciones en vivo en tiempo real).",
          "Incluye diversos formatos y niveles de interacción: simulaciones interactivas, juegos serios, tests, y recursos multimedia multimedia simples.",
          "El instructor online actúa como un facilitador polifacético: investigador, experto de contenido, diseñador de experiencias y evaluador constante."
        ],
        visualType: "roles",
        lessonsLearned: "La metodología de e-learning exitosa permite que el estudiante defina libremente su propio ritmo de aprendizaje mediante metas claras y el soporte de múltiples formatos (audio, video, texto).",
        qrLink: "https://youtube.com/unemi-elearning-content-design",
        qrDesc: "Escanea el código QR para ver un video tutorial explicativo sobre el Diseño Instruccional de Contenidos Didácticos.",
        activityTitle: "Diseño Instruccional: Estructura de Módulos"
      },
      {
        id: "u1t3",
        title: "Tema 3: Portales Educativos y Culturales",
        summary: [
          "Los portales funcionan como puertas de enlace especializadas o 'sitios ancla' unificados que centralizan recursos en la web.",
          "Los recursos modernos de vanguardia incluyen realidad virtual (VR), realidad aumentada (AR), laboratorios interactivos multimedia y enciclopedias colaborativas.",
          "Ejemplos recomendados institucionalmente: Google Earth, National Geographic Educational y The Wonderment."
        ],
        visualType: "portal",
        lessonsLearned: "El uso estratégico de portales culturales fomenta de manera exponencial la autonomía del estudiante, permitiéndole construir y personalizar un Entorno Personal de Aprendizaje (PLE).",
        qrLink: "https://ar.unemi.edu.ec/augmented-reality-resources",
        qrDesc: "Escanea el código QR para interactuar con una demostración inmersiva y galería de Realidad Aumentada para la educación.",
        activityTitle: "Simulador de Entorno de Realidad Aumentada"
      },
      {
        id: "u1t4",
        title: "Tema 4: Redes Sociales como Espacios de Aprendizaje",
        summary: [
          "Las redes sociales rompen barreras geográficas y temporales, requiriendo un nivel mínimo de conocimiento técnico de inicio.",
          "La Web 2.0 y su arquitectura de participación abren la puerta a la colaboración masiva de conocimiento (ej. Wikipedia, YouTube, Blogs).",
          "Es crucial aplicar reglas estrictas de netiqueta: rechazo absoluto al ciberbullying, protección celosa de la privacidad personal y mantener el tono profesional."
        ],
        visualType: "networks",
        lessonsLearned: "Una red social común evoluciona a un valioso espacio de aprendizaje formal solo cuando se consolidan verdaderas Comunidades de Práctica (CoP) guiadas por reglas claras de convivencia y respeto.",
        qrLink: "https://padlet.com/unemi/debate-elearning-networks",
        qrDesc: "Sigue el QR para participar en un muro colaborativo sobre los límites pedagógicos de las redes sociales en el aula.",
        activityTitle: "Muro de Debate Colaborativo"
      }
    ]
  },
  {
    id: 2,
    title: "PRINCIPALES SISTEMAS Y PLATAFORMAS DE E-LEARNING",
    topics: [
      {
        id: "u2t1",
        title: "Tema 1: Plataformas como Nuevo Espacio de Formación",
        summary: [
          "Una plataforma educativa es un entorno virtual integrado que organiza sistemáticamente contenidos y facilita una comunicación multidireccional instantánea.",
          "Evolución paradigmática continua: E-Learning (puro virtual) → B-Learning (híbrido presencial/virtual) → M-Learning (aprovechamiento móvil) → U-Learning (aprendizaje ubicuo integrado en el entorno)."
        ],
        visualType: "evolution",
        lessonsLearned: "Las plataformas modernas integradas facilitan planificar y desplegar cursos interactivos completos en minutos y generar analíticas detalladas y reportes de progreso adaptativos.",
        qrLink: "https://youtube.com/unemi-ubiquitous-education",
        qrDesc: "Escanea el QR para ver un documental corto sobre los impactos reales del aprendizaje ubicuo (U-Learning) en las universidades modernas.",
        activityTitle: "Línea de Tiempo de Evolución del Aprendizaje"
      },
      {
        id: "u2t2",
        title: "Tema 2: Plataformas de E-learning y sus Servicios",
        summary: [
          "Coexistencia activa de tres actores principales: el Estudiante (centro de acción), el Profesor/Instructor (guía del proceso) y el Administrador (soporte técnico e infraestructura).",
          "Se agrupan en herramientas de aprendizaje (estrategias), de estructura (diseño del curso) y de productividad (gestión operativa).",
          "Destacan herramientas de alta productividad integrada como Zoom (videoconferencia sincrónica), Google Docs (trabajo en equipo interactivo) y ProofHub (planificación de objetivos)."
        ],
        visualType: "productivity",
        lessonsLearned: "La productividad sustentable en el e-learning no es accidental; es el resultado directo de una planificación estratégica rigurosa y un compromiso inquebrantable con la excelencia interactiva.",
        qrLink: "https://proofhub.com/unemi-interactive-tasks-example",
        qrDesc: "Escanea el código QR para explorar un tablero interactivo funcional para la organización de proyectos educativos.",
        activityTitle: "Planificador de Tareas del Estudiante Online"
      },
      {
        id: "u2t3",
        title: "Tema 3: Tipos de Plataformas Educativas",
        summary: [
          "Clasificación en 7 modalidades principales, divididas centralmente por LMS (Learning Management System) y MOOCs (Cursos Online Masivos y Abiertos).",
          "Software Libre (Open Source): Licencia libre, modificable, adaptable a las necesidades de la institución y sin costos de licenciamiento (ejemplo líder mundial: Moodle).",
          "Plataformas Propietarias (Comerciales): Entornos robustos de pago con soporte corporativo directo y alta usabilidad inmediata (ejemplos: Coursera, Blackboard, LinkedIn Learning)."
        ],
        visualType: "comparison",
        lessonsLearned: "La estandarización técnica e interoperabilidad (como SCORM o LTI) es crucial para garantizar la durabilidad, accesibilidad y reutilización confiable de contenidos didácticos en cualquier LMS del mercado.",
        qrLink: "https://unemi.edu.ec/lms-detailed-comparative-matrix",
        qrDesc: "Escanea el QR para descargar la matriz técnica comparativa de los principales LMS comerciales y libres del mercado.",
        activityTitle: "Selector Inteligente de LMS"
      }
    ]
  }
];

export const GLOSSARY: GlossaryItem[] = [
  {
    term: "Asincrónico",
    definition: "Modalidad de aprendizaje donde los participantes no coinciden en el tiempo. Permite acceder a recursos y realizar actividades al ritmo personal del estudiante."
  },
  {
    term: "B-Learning (Blended Learning)",
    definition: "Modelo educativo mixto o híbrido que combina de forma equilibrada la enseñanza presencial en el aula física con actividades y recursos de aprendizaje virtual."
  },
  {
    term: "LMS (Learning Management System)",
    definition: "Sistema de gestión de aprendizaje. Software hospedado en un servidor que se emplea para administrar, distribuir, dar seguimiento y evaluar un programa de capacitación virtual."
  },
  {
    term: "U-Learning (Ubiquitous Learning)",
    definition: "Aprendizaje ubicuo. Su premisa principal es que el aprendizaje puede ocurrir en cualquier lugar y en cualquier momento, integrándose de forma transparente al entorno mediante dispositivos móviles, sensores e internet."
  },
  {
    term: "Conectivismo",
    definition: "Teoría del aprendizaje para la era digital, atribuida a George Siemens. Explica que el conocimiento reside en un ecosistema de redes y el aprendizaje consiste en la habilidad de conectar nodos o fuentes de información."
  },
  {
    term: "SCORM",
    definition: "Conjunto de estándares y especificaciones que permite crear objetos de aprendizaje estructurados susceptibles de ser importados en cualquier plataforma de teleformación compatible."
  }
];

export const SUGGESTED_READINGS: SuggestedReading[] = [
  {
    title: "Impact of modern technology in education: A critical review of pedagogical paradigms",
    authorOrRef: "UNEMI Educational Sciences Department Quarterly (2024)",
  },
  {
    title: "Entering the 3rd Generation of e-Learning: Personal Learning Networks and Ubiquitious spaces",
    authorOrRef: "Siemens, G. & Downes, S. (Advanced Pedagogical Research)",
  },
  {
    title: "Standards for learning, teaching, and leading in the digital age - International Society for Technology in Education (ISTE)",
    authorOrRef: "Official Guidelines and National Policies in High Education (2025)",
  }
];
