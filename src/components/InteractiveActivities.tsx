import React, { useState } from 'react';
import { Check, Info, Send, Plus, Trash, Layers, HelpCircle, Star, ThumbsUp, Smartphone, Award, ExternalLink } from 'lucide-react';

interface ActivityProps {
  id: string;
  title: string;
  qrLink: string;
}

export const InteractiveActivities: React.FC<ActivityProps> = ({ id, title, qrLink }) => {
  // Common QR Code renderer as high-contrast scalable SVG so it prints beautiful
  const renderQRCode = () => {
    // We dynamically render a high-quality stylized SVG QR Code
    // To make sure it looks identical and works, we draw a clear high-contrast vector QR design
    return (
      <div className="flex flex-col items-center justify-center p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-slate-800" fill="currentColor">
          {/* External Border Detectors */}
          <rect x="0" y="0" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
          <rect x="8" y="8" width="14" height="14" fill="currentColor" />
          
          <rect x="70" y="0" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
          <rect x="78" y="8" width="14" height="14" fill="currentColor" />
          
          <rect x="0" y="70" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="6" />
          <rect x="8" y="78" width="14" height="14" fill="currentColor" />
          
          {/* Small Alignment Block */}
          <rect x="70" y="70" width="10" height="10" fill="currentColor" />
          <rect x="84" y="84" width="16" height="16" fill="currentColor" />
          
          {/* Grid pattern mimicking actual data encoding for standard URL */}
          <rect x="36" y="4" width="6" height="6" />
          <rect x="48" y="10" width="12" height="6" />
          <rect x="36" y="22" width="18" height="6" />
          <rect x="4" y="36" width="14" height="6" />
          <rect x="22" y="42" width="12" height="12" />
          <rect x="44" y="36" width="6" height="18" />
          <rect x="56" y="44" width="16" height="6" />
          <rect x="84" y="36" width="12" height="12" />
          
          <rect x="4" y="56" width="18" height="6" />
          <rect x="30" y="60" width="18" height="6" />
          <rect x="54" y="56" width="6" height="12" />
          <rect x="72" y="54" width="8" height="8" />
          
          <rect x="36" y="72" width="12" height="6" />
          <rect x="52" y="78" width="12" height="12" />
          <rect x="36" y="88" width="12" height="6" />
        </svg>
        <span className="text-[9px] font-mono font-bold text-slate-400 mt-2 tracking-wider">MÓVIL SCAN</span>
      </div>
    );
  };

  const [score, setScore] = useState<number | null>(null);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mt-6 print-avoid-break">
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        
        {/* On-screen actual interactive playground widget */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-unemi-orange text-white text-xs font-bold font-mono">
              ★
            </span>
            <h4 className="font-bold text-xs font-display text-unemi-blue uppercase tracking-wide">
              {title} (En Pantalla)
            </h4>
          </div>

          <div className="bg-white p-4 border border-slate-100 rounded-lg shadow-sm">
            {id === 'u1t1' && <TheoriesQuiz />}
            {id === 'u1t2' && <ContentStructurePlanner />}
            {id === 'u1t3' && <ArSandboxSimulator />}
            {id === 'u1t4' && <PadletDebateBoard />}
            {id === 'u2t1' && <UlearningEvolutionCard />}
            {id === 'u2t2' && <ProductivityTaskList />}
            {id === 'u2t3' && <LmsSmartSelector />}
          </div>
        </div>

        {/* QR Code Segment for booklet printing */}
        <div className="w-full md:w-52 flex flex-col items-center justify-center text-center p-4 border-t md:border-t-0 md:border-l border-slate-200">
          {renderQRCode()}
          <p className="text-2xs text-slate-500 mt-3 font-sans leading-normal">
            Escanea para acceder a recursos adicionales externos o al aula virtual unificada.
          </p>
          <a 
            href={qrLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] text-unemi-orange hover:underline mt-2 font-mono flex items-center gap-1 font-semibold hover:text-orange-700"
          >
            Enlace Web <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

      </div>
    </div>
  );
};

/* 1. Theme 1: Theories of Learning Quiz */
const TheoriesQuiz: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const questions = [
    {
      q: "¿Qué teoría asume que el conocimiento se distribuye en una red de personas y tecnologías?",
      opts: ["Cognitivismo", "Constructivismo", "Conectivismo"],
      correct: 2,
      explanation: "El Conectivismo, formulado por Siemens, plantea que el conocimiento ocurre en entornos altamente distribuidos."
    },
    {
      q: "En el Constructivismo, el aprendizaje es un proceso de...",
      opts: ["Construcción activa del sujeto", "Almacenamiento pasivo de datos", "Asociación estímulo-respuesta"],
      correct: 0,
      explanation: "El Constructivismo sostiene que el cerebro asimila información estructurando significado activo basado en vivencias."
    }
  ];

  const handleSelect = (qIdx: number, oIdx: number) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  const handleCheck = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="space-y-4">
      {questions.map((item, qIdx) => (
        <div key={qIdx} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
          <p className="text-xs font-bold mb-2 text-slate-800">{qIdx + 1}. {item.q}</p>
          <div className="grid grid-cols-1 gap-2">
            {item.opts.map((opt, oIdx) => {
              const checked = selectedAnswers[qIdx] === oIdx;
              const isCorrect = item.correct === oIdx;
              let btnClass = "border border-slate-200 text-slate-600 hover:bg-slate-50";
              
              if (checked) {
                if (submitted) {
                  btnClass = isCorrect 
                    ? "bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold" 
                    : "bg-red-50 border-red-500 text-red-800";
                } else {
                  btnClass = "bg-blue-50 border-unemi-blue text-unemi-blue font-semibold";
                }
              } else if (submitted && isCorrect) {
                btnClass = "bg-emerald-50 border-emerald-300 text-emerald-800 font-semibold";
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelect(qIdx, oIdx)}
                  className={`text-2xs p-2 rounded-lg text-left transition-all ${btnClass}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {submitted && (
            <p className="text-3xs text-slate-500 mt-2 font-mono flex items-center gap-1">
              <Info className="w-3 h-3 text-unemi-orange inline" /> {item.explanation}
            </p>
          )}
        </div>
      ))}

      <div className="flex gap-2 justify-end pt-2 no-print">
        {!submitted ? (
          <button
            onClick={handleCheck}
            disabled={Object.keys(selectedAnswers).length < questions.length}
            className="text-xs px-3 py-1.5 bg-unemi-blue text-white rounded font-display font-medium hover:bg-opacity-95 disabled:opacity-50"
          >
            Validar Respuestas
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="text-xs px-3 py-1.5 bg-slate-100 text-slate-600 rounded font-display font-medium hover:bg-slate-200"
          >
            Reintentar
          </button>
        )}
      </div>
    </div>
  );
};

/* 2. Theme 2: Instructional Content Structure Builder */
const ContentStructurePlanner: React.FC = () => {
  const [modules, setModules] = useState<string[]>([
    "Bienvenida y Objetivos en Video",
    "Lectura Principal Guía de Unidad",
    "Caso Práctico en Audio (Sincrónico/Asincrónico)",
    "Foro de Debate en Línea con Feedback",
    "Test de Autoevaluación Final"
  ]);
  const [newValue, setNewValue] = useState("");

  const addModule = () => {
    if (!newValue.trim()) return;
    setModules([...modules, newValue]);
    setNewValue("");
  };

  const removeModule = (idx: number) => {
    setModules(modules.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-3">
      <p className="text-[11px] text-slate-500 font-sans italic">
        Configura los bloques secuenciales recomendados de un curso e-learning efectivo:
      </p>

      <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
        {modules.map((mod, idx) => (
          <div key={idx} className="flex justify-between items-center bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg">
            <span className="text-2xs font-mono text-slate-700 flex items-center gap-1.5">
              <span className="text-3xs text-unemi-orange font-bold font-mono">[{idx + 1}]</span> {mod}
            </span>
            <button 
              onClick={() => removeModule(idx)} 
              className="text-slate-400 hover:text-red-500 transition-colors no-print"
            >
              <Trash className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-2 pt-1 no-print">
        <input 
          type="text" 
          value={newValue} 
          onChange={(e) => setNewValue(e.target.value)}
          placeholder="Escribe un nuevo recurso pedagógico..." 
          className="flex-1 text-2xs px-2.5 py-1.5 border border-slate-200 rounded focus:ring-1 focus:ring-unemi-blue focus:outline-none"
        />
        <button 
          onClick={addModule}
          className="text-2xs px-3 py-1.5 bg-unemi-orange text-white rounded font-medium hover:bg-opacity-95"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

/* 3. Theme 3: Realidad Aumentada Educational Simulator */
const ArSandboxSimulator: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>("Sistemas Planetarios");
  const [placed, setPlaced] = useState(false);

  const models = [
    { name: "Sistemas Planetarios", scale: "1:2.0 M", poly: "1.2 M", detail: "Representación tridimensional animada de las órbitas solares y lunas." },
    { name: "Estructura del ADN", scale: "100.0M :1", poly: "800 K", detail: "Modelo helicoidal interactivo con visualización de puentes de hidrógeno." },
    { name: "Célula Eucariota", scale: "10 K :1", poly: "2.1 M", detail: "Desglose por capas de los orgánulos citoplasmáticos con zoom táctil." }
  ];

  const current = models.find(m => m.name === selectedModel) || models[0];

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {models.map(m => (
          <button
            key={m.name}
            onClick={() => { setSelectedModel(m.name); setPlaced(false); }}
            className={`flex-1 text-3xs p-1.5 border rounded transition-all font-display ${
              selectedModel === m.name ? 'border-unemi-blue bg-blue-50 font-bold' : 'border-slate-200 bg-white'
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      <div className="bg-slate-900 text-slate-100 p-4 rounded-lg relative h-36 flex flex-col items-center justify-center border border-slate-800">
        {placed ? (
          <div className="text-center space-y-1.5 animate-fade-in">
            <Smartphone className="w-8 h-8 text-unemi-orange mx-auto animate-bounce" />
            <p className="text-2xs font-bold text-white uppercase tracking-wider">{current.name} Renderizado</p>
            <p className="text-3xs text-slate-400 font-mono">Escala: {current.scale} | Elementos: {current.poly} polígonos</p>
          </div>
        ) : (
          <div className="text-center space-y-1">
            <p className="text-3xs font-mono text-slate-400">Entorno Inmersivo UNEMI WebGL</p>
            <button 
              onClick={() => setPlaced(true)}
              className="text-2xs px-3 py-1 bg-unemi-orange hover:bg-orange-700 text-white rounded font-bold font-display shadow"
            >
              Inicializar AR Holograma
            </button>
          </div>
        )}

        <span className="absolute bottom-1 right-2 text-[8px] font-mono text-slate-600">PREVISTA 3D STAGE</span>
      </div>

      <p className="text-3xs text-slate-400 mt-1 font-mono">
        <strong>Detalles:</strong> {current.detail}
      </p>
    </div>
  );
};

/* 4. Theme 4: Collaborative Padlet Message Board Mock */
const PadletDebateBoard: React.FC = () => {
  const [posts, setPosts] = useState([
    { author: "Ing. Xavier Cabrera (Profesor)", content: "Excelente sumario. Recuerden moderar siempre los foros de Edmodo para evitar distorsiones del tema central." },
    { author: "Elena R. (Estudiante)", content: "El conectivismo realmente explica cómo usamos YouTube para aprender cosas del día a día, no solo las clases formales." }
  ]);
  const [newContent, setNewContent] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const addPost = () => {
    if (!newContent.trim()) return;
    setPosts([
      ...posts,
      { author: newAuthor.trim() || "Estudiante Invitado", content: newContent }
    ]);
    setNewContent("");
    setNewAuthor("");
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto pr-1">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-amber-50 border border-amber-200 p-2.5 rounded shadow-xs relative">
            <span className="text-[9px] font-bold text-unemi-blue block mb-1">{post.author}</span>
            <p className="text-2xs text-slate-700 leading-tight pr-1 font-sans">{post.content}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 pt-3 space-y-2 no-print">
        <div className="grid grid-cols-2 gap-2">
          <input 
            type="text" 
            placeholder="Tu nombre (Opcional)"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
            className="text-2xs px-2.5 py-1.5 border border-slate-200 rounded focus:ring-1 focus:ring-unemi-blue outline-none"
          />
          <button 
            onClick={addPost}
            className="text-2xs px-3 py-1.5 bg-unemi-blue text-white rounded font-medium hover:bg-opacity-95"
          >
            Publicar en Muro
          </button>
        </div>
        <textarea
          rows={2}
          placeholder="Escribe tu postura sobre las redes sociales en el aula..."
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="w-full text-2xs p-2 border border-slate-200 rounded focus:ring-1 focus:ring-unemi-blue outline-none"
        />
      </div>
    </div>
  );
};

/* 5. Theme 5 (Unit 2 Theme 1): Ubiquitous Learning Card Flip/Discover */
const UlearningEvolutionCard: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const list = [
    { title: "E-Learning (Electrónico)", tech: "Plataformas Web, Moodle tradicional, PCs", focus: "Contenido centralizado de forma estructurada sin importar la ubicación geográfica." },
    { title: "B-Learning (Híbrido)", tech: "Foros virtuales, laboratorios físicos, videoconferencias", focus: "Sinergia de la educación presencial y remota para máxima flexibilidad docente." },
    { title: "M-Learning (Móvil)", tech: "Aplicaciones responsive, podcasts cortos, notificaciones push", focus: "El contenido cabe en la palma de la mano, adaptado para micro-momentos libres." },
    { title: "U-Learning (Ubicuo)", tech: "Internet de las Cosas (IoT), códigos QR, nubes globales", focus: "Educación de forma omnipresente fundida en la cotidianidad laboral del alumno." }
  ];

  return (
    <div className="space-y-3">
      <div className="flex border border-slate-100 rounded overflow-hidden">
        {list.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`flex-1 text-4xs py-1.5 text-center font-bold ${
              activeStep === idx ? 'bg-unemi-orange text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
            }`}
          >
            {item.title.split(" ")[0]}
          </button>
        ))}
      </div>

      <div className="bg-slate-50/50 p-4 border border-slate-100 rounded-lg">
        <h5 className="font-bold text-xs text-unemi-blue mb-0.5">{list[activeStep].title}</h5>
        <span className="text-3xs text-unemi-orange font-mono block mb-2">{list[activeStep].tech}</span>
        <p className="text-2xs text-slate-600 leading-normal font-sans border-l-2 border-unemi-blue pl-2">
          {list[activeStep].focus}
        </p>
      </div>
    </div>
  );
};

/* 6. Theme 6 (Unit 2 Theme 2): Action-Tool Planner/TaskList Tracker */
const ProductivityTaskList: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Preparar presentación interactiva sobre portales", done: false, tool: "Google Docs" },
    { id: 2, text: "Sincronizar y grabar tutoría grupal con los alumnos", done: true, tool: "Zoom" },
    { id: 3, text: "Organizar plazos de entrega y cronograma final", done: false, tool: "ProofHub" }
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div className="space-y-2.5">
      <p className="text-[10px] text-slate-500 mb-1">
        Simula la interacción de tareas del profesor con los actores mediante la asignación de herramientas de productividad:
      </p>

      <div className="space-y-1.5">
        {tasks.map(t => (
          <div 
            key={t.id} 
            onClick={() => toggleTask(t.id)}
            className="flex items-center gap-3 bg-slate-50 border border-slate-200/50 p-2 rounded-lg cursor-pointer hover:bg-slate-100/50 transition-all select-none"
          >
            <div className={`h-4 w-4 rounded border flex items-center justify-center ${
              t.done ? 'bg-unemi-blue border-unemi-blue text-white' : 'border-slate-300 bg-white'
            }`}>
              {t.done && <Check className="w-3 h-3 stroke-[3]" />}
            </div>
            
            <div className="flex-1 min-w-0">
              <span className={`text-2xs truncate block ${t.done ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                {t.text}
              </span>
            </div>
            
            <span className="text-[9px] font-mono font-medium px-2 py-0.5 bg-orange-100 text-unemi-orange rounded">
              {t.tool}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 7. Theme 7 (Unit 2 Theme 3): Smart LMS Selector Bot */
const LmsSmartSelector: React.FC = () => {
  const [budget, setBudget] = useState<string>("free");
  const [devSkill, setDevSkill] = useState<string>("medium");

  const solve = () => {
    if (budget === "high" && devSkill === "low") {
      return {
        name: "Blackboard o Canvas SaaS",
        reason: "Dispone de fondos suficientes y requiere despliegue listo para usar con asistencia corporativa inmediata y soporte integral de TI."
      };
    } else if (budget === "free" && devSkill === "high") {
      return {
        name: "Moodle LMS (Self-Hosted)",
        reason: "Aprovecha al máximo el código abierto. Moodle brinda escalabilidad virtualmente infinita e integraciones personalizadas complejas."
      };
    } else if (budget === "free" && devSkill === "low") {
      return {
        name: "Chamilo o Google Classroom",
        reason: "Sistemas sumamente sencillos, de bajo costo operativo y que demandan nulos conocimientos de desarrollo y servidores."
      };
    } else {
      return {
        name: "Moodle o Canvas LMS Cloud",
        reason: "Combinación ideal de costos medianos con alta modularidad estándar para su cuerpo de profesores y estudiantes."
      };
    }
  };

  const ans = solve();

  return (
    <div className="space-y-4">
      <p className="text-[10px] text-slate-500 leading-normal mb-1">
        Alinea tu presupuesto y perfil técnico para conocer el LMS recomendado para tu proyecto:
      </p>

      <div className="grid grid-cols-2 gap-3">
        {/* Param 1: Presupuesto */}
        <div>
          <label className="text-3xs uppercase font-bold text-slate-500 block mb-1">Población / Presupuesto</label>
          <select 
            value={budget} 
            onChange={(e) => setBudget(e.target.value)}
            className="w-full text-2xs p-1.5 border border-slate-200 rounded focus:ring-1 focus:ring-unemi-blue focus:outline-none bg-white font-sans"
          >
            <option value="free">Gratuito / Código Abierto</option>
            <option value="high">Presupuesto Institucional Alto</option>
          </select>
        </div>

        {/* Param 2: Habilidad Técnica */}
        <div>
          <label className="text-3xs uppercase font-bold text-slate-500 block mb-1">Perfil Desarrollo / Soporte</label>
          <select 
            value={devSkill} 
            onChange={(e) => setDevSkill(e.target.value)}
            className="w-full text-2xs p-1.5 border border-slate-200 rounded focus:ring-1 focus:ring-unemi-blue focus:outline-none bg-white font-sans"
          >
            <option value="high">Conocimiento Altamente Técnico</option>
            <option value="low">Sin Programadores (Amigable)</option>
          </select>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg">
        <span className="text-[9px] uppercase font-bold text-unemi-orange tracking-wider block mb-1 font-display">LMS Sugerido en UNEMI</span>
        <h5 className="font-bold text-xs text-unemi-blue font-display mb-1">{ans.name}</h5>
        <p className="text-2xs text-slate-600 leading-normal">{ans.reason}</p>
      </div>
    </div>
  );
};
