import React, { useState } from 'react';
import { 
  Network, Eye, Brain, Award, Users, Search, 
  Lightbulb, Server, Shield, Layers, Smartphone, 
  Globe, Laptop, Clock, ArrowRight, Check, RefreshCw
} from 'lucide-react';

interface DiagramProps {
  type: string;
}

export const InteractiveDiagrams: React.FC<DiagramProps> = ({ type }) => {
  switch (type) {
    case 'mindmap':
      return <CognitiveMindMap />;
    case 'roles':
      return <InstructorRolesDiagram />;
    case 'portal':
      return <PortalComponentsDiagram />;
    case 'networks':
      return <NetworksComparisonTable />;
    case 'evolution':
      return <LearningEvolutionTimeline />;
    case 'productivity':
      return <ActorsProductivityGrid />;
    case 'comparison':
      return <LmsComparisonInteractive />;
    default:
      return null;
  }
};

/* 1. Mind Map Theme 1: Cognitivismo, Constructivismo, y Conectivismo */
const CognitiveMindMap: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = {
    centro: {
      title: "Pedagogías del E-Learning",
      desc: "Marco conceptual que fusiona la tecnología de redes con las teorías fundamentales del aprendizaje humano.",
      color: "border-unemi-blue text-unemi-blue bg-blue-50"
    },
    cognitivismo: {
      title: "Cognitivismo",
      subtitle: "Procesos Mentales",
      desc: "El aprendizaje se entiende como la adquisición de esquemas y procesamiento de información en el cerebro humano.",
      keys: ["Almacenamiento en memoria", "Esquemas conceptuales", "Procesamiento de datos"],
      color: "border-purple-500 text-purple-700 bg-purple-50"
    },
    constructivismo: {
      title: "Constructivismo",
      subtitle: "Creación de Significado",
      desc: "El conocimiento se construye de forma activa por el sujeto basado en sus experiencias pasadas y aprendizajes previos.",
      keys: ["Construcción activa", "Aprendizaje significativo", "Zona de desarrollo próximo"],
      color: "border-teal-500 text-teal-700 bg-teal-50"
    },
    conectivismo: {
      title: "Conectivismo",
      subtitle: "Redes y Conexiones",
      desc: "Teoría para la era digital: el conocimiento se distribuye a través de redes humanas, tecnológicas y organizacionales virtuales.",
      keys: ["Nodos y conexiones", "Toma de decisiones", "Información actualizada"],
      color: "border-unemi-orange text-unemi-orange bg-orange-50"
    }
  };

  return (
    <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 print-avoid-break">
      <p className="text-xs font-mono text-slate-400 mb-4 uppercase tracking-wider text-center no-print">
        Visualización Interactiva / Haz clic en los nodos para explorar
      </p>
      
      {/* Visual Graphical Node Layout */}
      <div className="relative min-h-[280px] flex flex-col md:flex-row justify-between items-center gap-6 p-4">
        
        {/* Left Branch */}
        <div 
          onClick={() => setActiveNode('cognitivismo')}
          className={`flex-1 w-full p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            activeNode === 'cognitivismo' ? 'ring-4 ring-purple-200 border-purple-600 shadow-md' : 'shadow-sm'
          } ${nodes.cognitivismo.color}`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5" />
            <h4 className="font-semibold text-sm font-display">{nodes.cognitivismo.title}</h4>
          </div>
          <p className="text-xs opacity-90">{nodes.cognitivismo.subtitle}</p>
        </div>

        {/* Center Node */}
        <div 
          onClick={() => setActiveNode('centro')}
          className={`z-10 w-full md:w-56 p-4 rounded-lg border-2 border-dashed text-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${
            activeNode === 'centro' ? 'ring-4 ring-blue-100 shadow-md' : 'shadow-sm bg-white'
          } ${nodes.centro.color}`}
        >
          <span className="text-2xs font-bold uppercase text-unemi-blue bg-blue-100/60 px-2 py-0.5 rounded-full">Principal</span>
          <h3 className="font-bold text-sm mt-1 font-display">{nodes.centro.title}</h3>
        </div>

        {/* Right Branches */}
        <div className="flex flex-col gap-3 w-full md:w-auto flex-y-spacing">
          <div 
            onClick={() => setActiveNode('constructivismo')}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              activeNode === 'constructivismo' ? 'ring-4 ring-teal-200 border-teal-600 shadow-md' : 'shadow-sm'
            } ${nodes.constructivismo.color}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Eye className="w-5 h-5" />
              <h4 className="font-semibold text-sm font-display">{nodes.constructivismo.title}</h4>
            </div>
            <p className="text-xs opacity-90">{nodes.constructivismo.subtitle}</p>
          </div>

          <div 
            onClick={() => setActiveNode('conectivismo')}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              activeNode === 'conectivismo' ? 'ring-4 ring-orange-200 border-orange-600 shadow-md' : 'shadow-sm'
            } ${nodes.conectivismo.color}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Network className="w-5 h-5" />
              <h4 className="font-semibold text-sm font-display">{nodes.conectivismo.title}</h4>
            </div>
            <p className="text-xs opacity-90">{nodes.conectivismo.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Expanded Node Detail Box */}
      <div className="mt-4 p-4 bg-white border border-slate-100 rounded-lg min-h-[100px] transition-all duration-300 shadow-sm">
        {activeNode ? (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-bold text-unemi-orange tracking-wider font-display">
                Detalle Técnico
              </span>
              <button 
                onClick={() => setActiveNode(null)} 
                className="text-xs text-slate-400 hover:text-slate-600 font-mono no-print"
              >
                Cerrar x
              </button>
            </div>
            <h4 className="font-bold text-sm text-unemi-blue mb-1">
              {nodes[activeNode as keyof typeof nodes].title}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {nodes[activeNode as keyof typeof nodes].desc}
            </p>
            {'keys' in nodes[activeNode as keyof typeof nodes] && (
              <div className="mt-3 flex flex-wrap gap-2">
                {(nodes[activeNode as keyof typeof nodes] as any).keys.map((k: string, i: number) => (
                  <span key={i} className="text-2xs font-mono bg-slate-100 text-slate-700 px-2 py-1 rounded bg-slate-200/50">
                    • {k}
                  </span>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400 h-20 text-center">
            <Lightbulb className="w-6 h-6 mb-1 text-unemi-orange animate-pulse" />
            <p className="text-xs">Selecciona cualquier concepto arriba para desplegar la descripción analítica profunda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

/* 2. Concentric Instructor Roles Diagram */
const InstructorRolesDiagram: React.FC = () => {
  const [hoveredRole, setHoveredRole] = useState<number | null>(null);

  const roles = [
    { title: "Investigador", icon: "🔍", desc: "Monitorea constantemente nuevas vertientes e innovaciones educativas." },
    { title: "Experto en Contenidos", icon: "📚", desc: "Selecciona, prioriza y cura la información más rigurosa y actualizada." },
    { title: "Diseñador de Caminos", icon: "🗺️", desc: "Configura secuencias didácticas óptimas para facilitar el avance gradual." },
    { title: "Facilitador de Aprendizaje", icon: "🤝", desc: "Acompaña directamente y clarifica dudas complejas de forma asertiva." },
    { title: "Evaluador de Avances", icon: "🎯", desc: "Valora cualitativa y cuantitativamente el logro de los objetivos trazados." },
    { title: "Asesor Tecnológico", icon: "💻", desc: "Resuelve y guía en el uso estratégico de herramientas integradas." },
    { title: "Motivador del Grupo", icon: "🔥", desc: "Mantiene vivo el interés mediante dinámicas positivas en foros y chats." },
    { title: "Coordinador de Actividades", icon: "🗓️", desc: "Sincroniza tiempos, entregas, debates y dinámicas grupales." }
  ];

  return (
    <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 print-avoid-break">
      <p className="text-xs font-mono text-slate-400 mb-4 uppercase tracking-wider text-center no-print">
        Navegador Dinámico / Rol Docente en Línea
      </p>

      {/* Circle Radial Map or Simple Grid with Radial Connections */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {roles.map((role, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredRole(idx)}
            onMouseLeave={() => setHoveredRole(null)}
            className={`p-3 rounded-lg border transition-all duration-300 flex flex-col items-center text-center cursor-help ${
              hoveredRole === idx 
                ? 'border-unemi-orange bg-orange-50 shadow-sm scale-102' 
                : 'border-slate-200 bg-white'
            }`}
          >
            <span className="text-2xl mb-1">{role.icon}</span>
            <span className="text-2xs font-bold text-unemi-blue leading-tight block">{role.title}</span>
            <p className={`text-2xs text-slate-500 mt-1 transition-all duration-300 ${
              hoveredRole === idx ? 'block text-slate-700' : 'hidden sm:line-clamp-2'
            }`}>
              {role.desc}
            </p>
          </div>
        ))}
      </div>
      
      {/* Central Interactive Status Footer */}
      <div className="mt-4 p-3 bg-unemi-blue text-white rounded-lg text-center">
        <p className="text-xs">
          {hoveredRole !== null 
            ? `Rol activo: "${roles[hoveredRole].title}" — ${roles[hoveredRole].desc}` 
            : "Pasa el cursor por cada rol del facilitador en línea para examinar su impacto pedagógico."
          }
        </p>
      </div>
    </div>
  );
};

/* 3. Educational Portal Components Diagram (Noticias, Educación, Investigación) */
const PortalComponentsDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'noticias' | 'educacion' | 'investigacion'>('educacion');

  const info = {
    noticias: {
      title: "Módulo de Noticias y Difusión",
      desc: "Informa sobre eventos institucionales, plazos, hitos académicos y convocatorias importantes. Sirve como puente de comunicación rápido con el entorno social.",
      tags: ["Calendario Académico", "Boletines de Prensa", "Eventos Virtuales"]
    },
    educacion: {
      title: "Módulo Educativo Principal (Recursos)",
      desc: "La médula del portal. Alberga las aulas virtuales, bibliotecas digitales con acceso remoto 24/7, simuladores en web, y repositorios interactivos adaptables.",
      tags: ["Aulas Virtuales LMS", "Objetos de Aprendizaje (SCORM)", "Laboratorios Web"]
    },
    investigacion: {
      title: "Módulo de Investigación y Ciencia",
      desc: "Conecta a los estudiantes e investigadores con revistas científicas indexadas, tesis de grado, monografías y convenios de cooperación científica.",
      tags: ["Revistas Indexadas", "Repositorio de Tesis", "Redes Académicas"]
    }
  };

  return (
    <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 print-avoid-break">
      <div className="flex justify-center gap-2 mb-4 no-print flex-wrap">
        {(['noticias', 'educacion', 'investigacion'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-xs px-3 py-1.5 rounded-full font-display font-medium transition-all ${
              activeTab === tab 
                ? 'bg-unemi-blue text-white shadow-sm' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="bg-white p-5 border border-slate-100 rounded-lg shadow-sm">
        <h4 className="font-bold text-sm text-unemi-blue mb-1 font-display">
          {info[activeTab].title}
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {info[activeTab].desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {info[activeTab].tags.map((tag, idx) => (
            <span key={idx} className="text-2xs font-mono bg-orange-50 text-unemi-orange border border-orange-100 px-2.5 py-1 rounded-full font-medium">
              ✓ {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* 4. Social Networks Comparative Table */
const NetworksComparisonTable: React.FC = () => {
  const networks = [
    { name: "Facebook", pedagogia: "Estructuración de grupos de estudio informales, anuncios rápidos y sentido de comunidad.", limitacion: "Muchos distractores y necesidad de separar el perfil social del profesional.", rating: "★★★★☆" },
    { name: "LinkedIn", pedagogia: "Desarrollo de marca personal, networking con egresados, foros de debate altamente formales.", limitacion: "Curva de adopción un poco más alta en estudiantes novatos.", rating: "★★★★★" },
    { name: "Twitter / X", pedagogia: "Microblogging crítico, resumen de ideas, debate fluido con hashtags centralizados.", limitacion: "Límite estrecho de caracteres y susceptibilidad a discursos polémicos.", rating: "★★★☆☆" },
    { name: "Instagram", pedagogia: "Bifocalización visual: infografías didácticas rápidas, recordatorios en historias interactivos.", limitacion: "Formato netamente visual e interactivo libre, poco apto para lecturas extensas.", rating: "★★★☆☆" },
    { name: "Edmodo / Discord", pedagogia: "Servidores temáticos organizables por canales específicos de asignación.", limitacion: "Requiere moderación constante por parte de los administradores.", rating: "★★★★☆" }
  ];

  return (
    <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 print-avoid-break overflow-x-auto">
      <table className="min-w-full text-xs text-left bg-white rounded-lg border border-slate-100 overflow-hidden shadow-sm">
        <thead className="bg-unemi-blue text-white font-display">
          <tr>
            <th className="p-3">Red Social</th>
            <th className="p-3">Uso Pedagógico Recomendado</th>
            <th className="p-3">Limitación / Reto</th>
            <th className="p-3 text-center">Idoneidad</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 font-sans">
          {networks.map((net, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              <td className="p-3 font-semibold text-unemi-blue">{net.name}</td>
              <td className="p-3 text-slate-600">{net.pedagogia}</td>
              <td className="p-3 text-slate-500 font-mono text-2xs">{net.limitacion}</td>
              <td className="p-3 text-center text-unemi-orange font-mono font-medium">{net.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* 5. Paradigm Evolution Timeline (E-B-M-U Learning) */
const LearningEvolutionTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // Default values represent current paradigm (U)

  const steps = [
    {
      title: "E-Learning",
      concept: "Electronic Learning",
      year: "2000+",
      desc: "Educación puramente online utilizando la web y ordenadores personales, eliminando la distancia.",
      style: "border-blue-300"
    },
    {
      title: "B-Learning",
      concept: "Blended Learning",
      year: "2005+",
      desc: "Modelo híbrido inteligente que balancea y combina las aulas físicas presenciales con aulas virtuales.",
      style: "border-purple-300"
    },
    {
      title: "M-Learning",
      concept: "Mobile Learning",
      year: "2010+",
      desc: "Uso de teléfonos inteligentes y tabletas para aprender desde cualquier parte y en tránsito.",
      style: "border-pink-300"
    },
    {
      title: "U-Learning",
      concept: "Ubiquitous Learning",
      year: "2018+",
      desc: "Aprendizaje omnipresente, ubicuo y adaptivo integrado con sensores, nubes y el entorno cotidiano.",
      style: "border-unemi-orange border-2"
    }
  ];

  return (
    <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 print-avoid-break">
      <p className="text-xs font-mono text-slate-400 mb-4 uppercase tracking-wider text-center no-print">
        Evolución Histórica Interactiva / Haz clic en los hitos
      </p>

      <div className="relative flex flex-col md:flex-row justify-between items-center gap-4 py-3">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block z-0" />
        
        {steps.map((step, idx) => (
          <div
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`z-10 w-full md:w-1/4 p-4 rounded-lg bg-white border cursor-pointer transition-all duration-300 transform hover:scale-103 ${
              activeStep === idx 
                ? 'border-unemi-orange ring-4 ring-orange-100 shadow-md scale-102 font-bold' 
                : 'border-slate-200 shadow-sm opacity-80 hover:opacity-100'
            }`}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-3xs font-mono font-bold text-unemi-orange bg-orange-100/60 px-2 py-0.5 rounded-full">
                {step.year}
              </span>
              {activeStep === idx && <div className="w-2.5 h-2.5 rounded-full bg-unemi-orange animate-pulse" />}
            </div>
            <h4 className="text-sm font-bold text-unemi-blue font-display">{step.title}</h4>
            <p className="text-3xs font-mono text-slate-400 mb-1">{step.concept}</p>
            <p className="text-2xs text-slate-600 leading-tight">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 6. Actors and Productivity Alignment Grid */
const ActorsProductivityGrid: React.FC = () => {
  const [activeActor, setActiveActor] = useState<'Estudiante' | 'Profesor' | 'Administrador'>('Estudiante');

  const actorDetails = {
    Estudiante: {
      role: "El epicentro autónomo del aprendizaje. Define su propio compás, gestiona trabajos y asimila la teoría de forma adaptativa.",
      tools: [
        { name: "Google Docs", use: "Para redactar ensayos conjuntos, apuntes colaborativos y resúmenes de unidades." },
        { name: "ProofHub / Trello", use: "Planifica entregas del ciclo escolar, plazos de proyectos e hitos personales." },
        { name: "Zoom", use: "Asistencia a tutorías de aclaración técnica con el mentor." }
      ]
    },
    Profesor: {
      role: "El guía, moderador o facilitador de la experiencia didáctica. Cura contenidos y brinda feedback ágil y claro.",
      tools: [
        { name: "Zoom Webinars", use: "Transmisión en vivo de clases, debates socráticos dirigidos y paneles." },
        { name: "Google Forms", use: "Generación de encuestas diagnósticas rápidas y quizzes formativos en línea." },
        { name: "ProofHub", use: "Control de avances del temario pedagógico diario del curso." }
      ]
    },
    Administrador: {
      role: "Garantiza la operatividad técnica ininterrumpida de los servidores, accesos seguros y reportes automatizados.",
      tools: [
        { name: "Analytics Dashboard", use: "Supervisación de cargas concurrentes y ancho de banda ocupado en la nube." },
        { name: "Integraciones LTI", use: "Acople seguro con aplicaciones externas de videoconferencias." },
        { name: "Configuración SQL", use: "Auditoría de consistencia de actas académicas y calificaciones." }
      ]
    }
  };

  return (
    <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 print-avoid-break">
      <div className="flex border-b border-slate-200 mb-4 pb-1">
        {(['Estudiante', 'Profesor', 'Administrador'] as const).map((actor) => (
          <button
            key={actor}
            onClick={() => setActiveActor(actor)}
            className={`flex-1 text-xs pb-3 font-display font-bold transition-all text-center relative ${
              activeActor === actor 
                ? 'text-unemi-blue' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {actor}
            {activeActor === actor && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-unemi-blue" />
            )}
          </button>
        ))}
      </div>

      <div className="px-1">
        <p className="text-2xs text-slate-500 mb-3 font-sans italic">
          <strong>Lente del Actor:</strong> {actorDetails[activeActor].role}
        </p>

        <h5 className="font-semibold text-2xs text-unemi-orange uppercase tracking-wider mb-2 font-display">
          Herramientas de Productividad Asociadas:
        </h5>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {actorDetails[activeActor].tools.map((t, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-3 rounded-lg shadow-sm">
              <span className="text-xs font-bold text-unemi-blue block mb-1 font-display">{t.name}</span>
              <p className="text-2xs text-slate-600 leading-normal">{t.use}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* 7. Open Source vs Commercial LMS LMS Comparison Matrix */
const LmsComparisonInteractive: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'libre' | 'comercial'>('all');

  const lmsData = [
    { name: "Moodle", type: "Libre", lic: "GPLv3+", cost: "Gratuito (Software)", custom: "Ilimitada por código abierto", speed: "Requiere destreza en servidores", user: "Comunidad mundial (+100M)" },
    { name: "Chamilo", type: "Libre", lic: "GPL", cost: "Gratuito (Software)", custom: "Fácil de extender mediante plugins", speed: "Instalación sumamente sencilla", user: "Popular en Europa y Latam" },
    { name: "Blackboard", type: "Comercial", lic: "Propietaria", cost: "Tarifa anual alta", custom: "Restringida a APIs aprobadas", speed: "Acompañamiento corporativo rápido", user: "Universidades corporativas" },
    { name: "Canvas LMS", type: "Comercial", lic: "Híbrido/SaaS", cost: "Suscripción por volumen", custom: "Configurable con integraciones LTI", speed: "Rápida implementación en la nube", user: "Altamente adoptada en América" }
  ];

  const filtered = lmsData.filter(item => {
    if (filter === 'all') return true;
    return item.type.toLowerCase() === filter;
  });

  return (
    <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 print-avoid-break">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <span className="text-2xs font-mono text-slate-400 uppercase tracking-widest no-print">Análisis de Mercado LMS</span>
        
        <div className="flex border border-slate-200 bg-white rounded-full p-0.5 no-print">
          {(['all', 'libre', 'comercial'] as const).map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`text-3xs px-2.5 py-1 rounded-full font-display font-medium uppercase transition-all ${
                filter === opt 
                  ? 'bg-unemi-orange text-white' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {opt === 'all' ? 'Ver Todos' : opt}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map((item, idx) => (
          <div key={idx} className="bg-white p-4 border border-slate-100 rounded-lg shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 mb-2">
              <span className="font-bold text-xs font-display text-unemi-blue">{item.name}</span>
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                item.type === 'Libre' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
              }`}>
                {item.type}
              </span>
            </div>
            
            <div className="space-y-1 font-mono text-3xs text-slate-500">
              <p><strong className="font-sans text-slate-700">Coste de Licencia:</strong> {item.cost}</p>
              <p><strong className="font-sans text-slate-700">Personalización:</strong> {item.custom}</p>
              <p><strong className="font-sans text-slate-700">Velocidad de Despliegue:</strong> {item.speed}</p>
              <p><strong className="font-sans text-slate-700">Público Clave:</strong> {item.user}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
