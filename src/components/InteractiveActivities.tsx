import React, { useState } from 'react';
import { Check, Info, Trash, Smartphone, ExternalLink, RefreshCw, Send, Sliders, Star, BookOpen, Layers } from 'lucide-react';

interface ActivityProps {
  id: string;
  title: string;
  qrLink: string;
}

const OVERRIDE_QR_LINKS: Record<string, string> = {
  u1t1: "https://e-learning-investigaci-n.onrender.com/",
  u1t4: "https://e-learning-investigaci-n.onrender.com/",
  u1t10: "https://e-learning-investigaci-n.onrender.com/",
  u2t1: "https://e-learning-investigaci-n.onrender.com/",
  u2t7: "https://www.youtube.com/watch?v=l3hkS4ny3SQ",
  u2t8: "https://e-learning-investigaci-n.onrender.com/",
};

export const InteractiveActivities: React.FC<ActivityProps> = ({ id, title, qrLink }) => {
  const finalQrLink = OVERRIDE_QR_LINKS[id] || qrLink;

  const renderQRCode = () => {
    return (
      <div className="flex flex-col items-center justify-center p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
        <img 
          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(finalQrLink)}&color=112E51`} 
          alt="QR Code link" 
          className="w-24 h-24 object-contain"
          referrerPolicy="no-referrer"
        />
        <span className="text-[9px] font-mono font-bold text-slate-400 mt-2 tracking-wider">MOBILE SCAN</span>
      </div>
    );
  };

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
              {title} (On-Screen Playground)
            </h4>
          </div>

          <div className="bg-white p-4 border border-slate-100 rounded-lg shadow-sm">
            {id === 'u1t1' && <TheoriesQuiz />}
            {id === 'u1t2' && <ConstructivismScenarioSelection />}
            {id === 'u1t3' && <NetworkConnectGame />}
            {id === 'u1t4' && <ContentStructurePlanner />}
            {id === 'u1t5' && <SynchronousAgendaPlanner />}
            {id === 'u1t6' && <InstructorCompetencyWheel />}
            {id === 'u1t7' && <CulturalPortalsDirectory />}
            {id === 'u1t8' && <ArSandboxSimulator id={id} title={title} qrLink={qrLink} />}
            {id === 'u1t9' && <PLEWorkspaceBuilder />}
            {id === 'u1t10' && <PadletDebateBoard />}
            {id === 'u1t11' && <WebComparisonClicker />}
            {id === 'u1t12' && <CopChecklistBuilder />}
            {id === 'u1t13' && <NetiquettePledgeSigner />}
            
            {id === 'u2t1' && <VirtualPlatformFeatureQuiz />}
            {id === 'u2t2' && <LmsEvolutionTimelineCard />}
            {id === 'u2t3' && <BlendedClassBalancePlanner />}
            {id === 'u2t4' && <MobileMicrolearningSimulator />}
            {id === 'u2t5' && <UlearningEvolutionCard />}
            {id === 'u2t6' && <VennActorsIntersection />}
            {id === 'u2t7' && <ProductivityTaskList />}
            {id === 'u2t8' && <LmsSmartSelector />}
            {id === 'u2t9' && <CommercialLmsEstimator />}
            {id === 'u2t10' && <ScormInteroperabilitySimulator />}
            {id === 'u2t11' && <LmsAccessibilityComplianceForm />}
          </div>
        </div>

        {/* QR Code Segment for booklet printing */}
        <div className="w-full md:w-52 flex flex-col items-center justify-center text-center p-4 border-t md:border-t-0 md:border-l border-slate-200 animate-fade-in shrink-0">
          {id === 'u1t8' ? (
            <div className="flex flex-col gap-4 w-full justify-center">
              {/* Gene Expression QR */}
              <div className="flex flex-col items-center p-3 bg-white border border-slate-200/80 rounded-xl shadow-3xs text-center">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fphet.colorado.edu%2Fsims%2Fhtml%2Fgene-expression-essentials%2Flatest%2Fgene-expression-essentials_en.html&color=112E51" 
                  alt="QR Code Gene Expression" 
                  className="w-24 h-24 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[7.5px] font-mono font-bold text-slate-400 mt-2 tracking-wider uppercase leading-none">CELLULAR GENE EXP SIM</span>
                <a 
                  href="https://phet.colorado.edu/sims/html/gene-expression-essentials/latest/gene-expression-essentials_en.html"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[9px] text-unemi-orange hover:underline mt-1.5 font-mono flex items-center gap-0.5 font-bold hover:text-orange-700"
                >
                  Open Link <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              {/* Solar System QR */}
              <div className="flex flex-col items-center p-3 bg-white border border-slate-200/80 rounded-xl shadow-3xs text-center">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fphet.colorado.edu%2Fsims%2Fhtml%2Fmy-solar-system%2Flatest%2Fmy-solar-system_en.html&color=112E51" 
                  alt="QR Code Solar System" 
                  className="w-24 h-24 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[7.5px] font-mono font-bold text-slate-400 mt-2 tracking-wider uppercase leading-none">ORBITAL SOLAR SYSTEM SIM</span>
                <a 
                  href="https://phet.colorado.edu/sims/html/my-solar-system/latest/my-solar-system_en.html"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[9px] text-unemi-orange hover:underline mt-1.5 font-mono flex items-center gap-0.5 font-bold hover:text-orange-700"
                >
                  Open Link <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          ) : (
            <>
              {renderQRCode()}
              <p className="text-2xs text-slate-500 mt-3 font-sans leading-normal">
                {finalQrLink === "https://e-learning-investigaci-n.onrender.com/"
                  ? "Open e-book online to do this activity."
                  : "Scan to access additional official virtual resources or study boards."}
              </p>
              <a 
                href={finalQrLink} 
                target="_blank"  
                rel="noopener noreferrer" 
                className="text-[10px] text-unemi-orange hover:underline mt-2 font-mono flex items-center gap-1 font-semibold hover:text-orange-700"
              >
                {finalQrLink === "https://e-learning-investigaci-n.onrender.com/"
                  ? "Open E-Book Link"
                  : "Open Link"} <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </>
          )}
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
      q: "Which educational learning theory posits that knowledge is distributed across a virtual network of people and systems?",
      opts: ["Cognitivism", "Constructivism", "Connectivism"],
      correct: 2,
      explanation: "Connectivism, formulated by George Siemens, argues that educational experiences and knowledge expansion occur inside distributed networks."
    },
    {
      q: "Within Constructivism, cognitive learning is defined as a process of...",
      opts: ["Active meaning construction by the student", "Passive data retention and stimulus response", "Rote memorization under strict testing"],
      correct: 0,
      explanation: "Constructivism holds that human learners synthesize fresh schemas by actively building meaning onto prior achievements and scenarios."
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
        <div key={qIdx} className="border-b border-secondary/20 pb-3 last:border-0 last:pb-0">
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
                  id={`q-${qIdx}-opt-${oIdx}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {submitted && (
            <p className="text-3xs text-slate-500 mt-2 font-mono flex items-center gap-1">
              <Info className="w-3 h-3 text-unemi-orange inline shrink-0" /> {item.explanation}
            </p>
          )}
        </div>
      ))}

      <div className="flex gap-2 justify-end pt-2 no-print">
        {!submitted ? (
          <button
            onClick={handleCheck}
            disabled={Object.keys(selectedAnswers).length < questions.length}
            className="text-xs px-3 py-1.5 bg-unemi-blue text-white rounded font-display font-medium hover:bg-opacity-95 disabled:opacity-50 cursor-pointer"
            id="assert-theories-answers"
          >
            Assert Answers
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="text-xs px-3 py-1.5 bg-slate-100 text-slate-600 rounded font-display font-medium hover:bg-slate-200 cursor-pointer"
            id="retry-theories-quiz"
          >
            Retry Quiz
          </button>
        )}
      </div>
    </div>
  );
};

/* 2. Theme 2: Constructivism Scenario Selection */
const ConstructivismScenarioSelection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const cases = [
    {
      title: "Case A: Grammar flipped worksheet challenge",
      desc: "Language students receive video capsules to watch independently, and in class they solve complex translational problems in teams.",
      paradigm: "Constructivist Classroom Layout",
      points: "Allows peer scaffolding and centers translation on active work."
    },
    {
      title: "Case B: Repetitive drill platform testing",
      desc: "Students click vocabulary matches for 45 minutes, system records scores, incorrect options recur until fully remembered.",
      paradigm: "Cognitivist Direct Instruction",
      points: "Utilizes cognitive retention but lacks active creative formulation."
    }
  ];

  return (
    <div className="space-y-3 font-sans">
      <p className="text-3xs font-mono text-slate-400 uppercase tracking-widest block font-bold mb-1">
        Select a classroom model to analyze:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {cases.map((c, idx) => (
          <div 
            key={idx}
            className={`p-3 border rounded-xl cursor-pointer transition-all ${
              selectedCase === idx 
                ? "bg-blue-50/50 border-unemi-blue" 
                : "border-slate-200 hover:border-slate-350 bg-slate-50/20"
            }`}
            onClick={() => setSelectedCase(idx)}
          >
            <h5 className="font-bold text-xs text-unemi-blue">{c.title}</h5>
            <p className="text-3xs text-slate-600 leading-normal mt-1">{c.desc}</p>
          </div>
        ))}
      </div>

      {selectedCase !== null && (
        <div className="p-3 bg-orange-50/40 border border-orange-100 rounded-lg animate-fade-in">
          <p className="text-3xs text-unemi-orange uppercase font-mono font-bold">Pedagogical Paradigm:</p>
          <h6 className="font-bold text-xs text-slate-800">{cases[selectedCase].paradigm}</h6>
          <p className="text-3xs text-slate-600 leading-relaxed mt-1">
            <strong>Impact:</strong> {cases[selectedCase].points}
          </p>
        </div>
      )}
    </div>
  );
};

/* 3. Theme 3: Connectivism Network Game */
const NetworkConnectGame: React.FC = () => {
  const [connections, setConnections] = useState<string[]>([]);
  
  const nodes = ["George Siemens (Connectivism)", "You (Student Node)", "YouTube (Language Source)", "UNEMI (Academic Guideline)"];

  const toggleConnect = (node: string) => {
    if (connections.includes(node)) {
      setConnections(connections.filter(c => c !== node));
    } else {
      setConnections([...connections, node]);
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-3xs text-slate-500 leading-relaxed italic">
        Simulate connectivism: Click information nodes to link them to your personal neural network and observe your intelligence coefficient expand!
      </p>

      {/* Nodes visual block */}
      <div className="flex flex-wrap gap-2.5 justify-center py-2">
        {nodes.map((node, i) => {
          const connected = connections.includes(node);
          return (
            <button
              key={i}
              onClick={() => toggleConnect(node)}
              className={`text-2xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                connected 
                  ? "bg-unemi-orange text-white border-unemi-orange font-bold scale-103 shadow-xs" 
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100/80"
              }`}
            >
              {connected ? "🔗 Connected: " : "○ "} {node}
            </button>
          );
        })}
      </div>

      <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-100/80 text-center">
        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block mb-1">
          Active Connection Quotient:
        </span>
        <div className="text-sm font-black text-unemi-blue font-display">
          {connections.length * 25}% Integration Level (Knowledge Network Built)
        </div>
        <p className="text-3xs text-slate-500 mt-1">
          {connections.length === 0 && "Your nodes are isolated. Connect nodes to start collaborative learning!"}
          {connections.length > 0 && connections.length < 4 && "Network is forming. Connecting concepts improves recall."}
          {connections.length === 4 && "Perfect Connectivist network achieved! Knowledge flows seamlessly and autonomously."}
        </p>
      </div>
    </div>
  );
};

/* 4. Theme 4: Instructional Content Structure Builder */
const ContentStructurePlanner: React.FC = () => {
  return (
    <div className="space-y-4 font-sans">
      <p className="text-[11px] text-slate-500 font-sans italic leading-relaxed">
        Recommended structured sequence of an effective e-learning syllabus template designed in Canva:
      </p>

      {/* Canva Syllabus Image container */}
      <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-2 shadow-3xs flex flex-col items-center">
        <img 
          src="/canva syllabus.png" 
          alt="Canva Syllabus Template" 
          className="w-full max-w-sm h-auto rounded-lg object-contain border border-slate-100 shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <div className="w-full mt-2.5 bg-white p-2.5 rounded-lg border border-slate-200/50 text-center">
          <p className="text-3xs font-bold text-unemi-blue uppercase tracking-wider">Visual Syllabus Layout Preview</p>
          <p className="text-[9px] text-slate-500 mt-0.5">Structured modules, sequencing rules, and timing mappings for virtual school environments.</p>
        </div>
      </div>
      
      <div className="pt-2 border-t border-slate-100 flex justify-between items-center no-print">
        <span className="text-3xs uppercase font-mono tracking-wider text-slate-400 font-bold">CANVA ARCHITECTURE</span>
        <a 
          href="https://www.canva.com/templates/s/syllabus/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[10px] text-unemi-blue hover:underline font-mono flex items-center gap-1 font-semibold"
        >
          <span>Use Canva Template</span>
          <span className="text-xs">→</span>
        </a>
      </div>
    </div>
  );
};

/* 5. Theme 5: Synchronous Agenda Planner */
const SynchronousAgendaPlanner: React.FC = () => {
  const [sessionMinutes, setSessionMinutes] = useState<number>(45);

  const calculateSlots = () => {
    const lecture = Math.round(sessionMinutes * 0.35);
    const collaboration = Math.round(sessionMinutes * 0.45);
    const qAndA = Math.round(sessionMinutes * 0.20);
    return { lecture, collaboration, qAndA };
  };

  const { lecture, collaboration, qAndA } = calculateSlots();

  return (
    <div className="space-y-3 font-sans">
      <p className="text-3xs text-slate-500 leading-normal">
        Determine the optimal virtual class times using our synchronous duration calculator to prevent screen tiredness or low engagement:
      </p>

      <div className="space-y-2 p-3 bg-slate-50 rounded-xl border border-slate-200/50">
        <label className="text-3xs font-mono font-bold text-slate-500 uppercase flex justify-between items-center">
          <span>Target Live Zoom Session Duration:</span>
          <span className="text-unemi-orange font-bold text-xs">{sessionMinutes} mins</span>
        </label>
        <input 
          type="range"
          min="20"
          max="90"
          value={sessionMinutes}
          onChange={(e) => setSessionMinutes(Number(e.target.value))}
          className="w-full accent-unemi-orange cursor-pointer"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2 border border-blue-100 bg-blue-50/50 rounded-lg">
          <span className="text-[17px]">🎙️</span>
          <p className="text-[9px] font-bold text-slate-600 uppercase font-mono">Lecture</p>
          <p className="text-xs font-black text-unemi-blue">{lecture} mins</p>
          <span className="text-[7.5px] text-slate-400 block font-sans">Theoretical Slide Recap</span>
        </div>
        <div className="p-2 border border-orange-100 bg-orange-50/50 rounded-lg">
          <span className="text-[17px]">👥</span>
          <p className="text-[9px] font-bold text-slate-600 uppercase font-mono">Workshop</p>
          <p className="text-xs font-black text-unemi-orange">{collaboration} mins</p>
          <span className="text-[7.5px] text-slate-400 block font-sans">Breakout Rooms Teamwork</span>
        </div>
        <div className="p-2 border border-emerald-100 bg-emerald-50/50 rounded-lg">
          <span className="text-[17px]">💬</span>
          <p className="text-[9px] font-bold text-slate-600 uppercase font-mono">Feedback</p>
          <p className="text-xs font-black text-emerald-800">{qAndA} mins</p>
          <span className="text-[7.5px] text-slate-400 block font-sans">Student Plenary Q&As</span>
        </div>
      </div>
    </div>
  );
};

/* 6. Theme 6: Instructor Competency Wheel */
const InstructorCompetencyWheel: React.FC = () => {
  const [scores, setScores] = useState<Record<string, number>>({
    pedagogy: 80,
    curation: 75,
    technical: 60,
    empathy: 90
  });

  const handleSlider = (key: string, v: number) => {
    setScores(prev => ({ ...prev, [key]: v }));
  };

  const getMean = () => {
    const values = Object.values(scores) as number[];
    return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  };

  return (
    <div className="space-y-3 font-sans">
      <p className="text-3xs text-slate-500 leading-normal">
        Rate your current capabilities across 4 essential domains to build your formal teaching scorecard:
      </p>

      <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50/50 rounded-xl border border-slate-100">
        {[
          { key: "pedagogy", label: "Pedagogical Planning", icon: "🎓" },
          { key: "curation", label: "Content Curation", icon: "📑" },
          { key: "technical", label: "LMS Server Operation", icon: "⚙️" },
          { key: "empathy", label: "Emotional Empathy", icon: "❤️" }
        ].map(item => (
          <div key={item.key} className="space-y-1">
            <span className="text-3xs uppercase font-bold text-slate-500 block flex items-center gap-1">
              <span>{item.icon}</span> {item.label}: <span className="text-unemi-blue ml-auto font-mono">{scores[item.key]}%</span>
            </span>
            <input 
              type="range"
              min="20"
              max="100"
              value={scores[item.key]}
              onChange={(e) => handleSlider(item.key, Number(e.target.value))}
              className="w-full accent-unemi-blue cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div className="p-2.5 bg-blue-50 text-center rounded-xl border border-blue-100">
        <span className="text-3xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Global Capability Index:</span>
        <span className="text-base font-black text-unemi-blue font-display">{getMean()}% Preparedness Factor</span>
      </div>
    </div>
  );
};

/* 7. Theme 7: Cultural Portals Directory */
const CulturalPortalsDirectory: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const portals = [
    { title: "Smithsonian Learning Lab", cat: "history", url: "https://learninglab.si.edu", d: "Millions of historical and cultural artifacts, high-definition digital slides, and customized teacher playlists." },
    { title: "Google Earth Education", cat: "planet", url: "https://earth.google.com/web", d: "Satellite 3D mapping and curated geographic voyages to teach languages within real-life structural settings." },
    { title: "National Geographic Classroom", cat: "science", url: "https://www.nationalgeographic.org/society/education-resources/", d: "High-impact storytelling, global biology and anthropology media kits, and free interactive tools." }
  ];

  return (
    <div className="space-y-3 font-sans">
      <div className="flex bg-slate-100 p-1 rounded-lg gap-1 border border-slate-200/50">
        {["all", "history", "planet", "science"].map(tab => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`flex-1 text-[9px] font-bold py-1 px-1 rounded uppercase tracking-wider ${
              filter === tab ? "bg-white text-unemi-blue shadow-3xs" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
        {portals.filter(p => filter === "all" || p.cat === filter).map((p, idx) => (
          <div key={idx} className="p-2.5 bg-slate-50 border border-slate-150 rounded-lg hover:border-slate-300 transition-colors">
            <div className="flex justify-between items-center">
              <h5 className="font-bold text-xs text-unemi-blue">{p.title}</h5>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-3xs text-unemi-orange hover:underline font-mono font-bold">VISIT GATEWAY</a>
            </div>
            <p className="text-3xs text-slate-500 mt-0.5 leading-snug">{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 8. Theme 8: PhET Scientific Simulators */
interface ArSandboxSimulatorProps {
  id: string;
  title: string;
  qrLink: string;
}
const ArSandboxSimulator: React.FC<ArSandboxSimulatorProps> = () => {
  const [activeSim, setActiveSim] = useState<'gene' | 'solar'>('gene');

  const simulations = {
    gene: {
      title: "Gene Expression - Basics",
      src: "https://phet.colorado.edu/sims/html/gene-expression-essentials/latest/gene-expression-essentials_en.html",
      icon: "🧬",
      topics: ["Cells", "Gene Expression", "DNA Transcription", "Protein Synthesis"],
      goals: ["Explain how transcription operates.", "Predict changes in bio-molecular densities."]
    },
    solar: {
      title: "My Solar System - Astro Physics",
      src: "https://phet.colorado.edu/sims/html/my-solar-system/latest/my-solar-system_en.html",
      icon: "🪐",
      topics: ["Physics", "Orbits", "Gravity Laws"],
      goals: ["Determine how planetary mass affects orbit velocity.", "Simulate orbital gravitational collapses."]
    }
  };

  const current = simulations[activeSim];

  return (
    <div className="space-y-3">
      <div className="flex bg-slate-100 p-0.5 rounded-lg no-print gap-1 max-w-xs mx-auto border border-slate-200/50">
        <button
          onClick={() => setActiveSim('gene')}
          className={`flex-1 flex items-center justify-center gap-1 py-1 px-2 text-[9px] font-bold rounded font-display transition-all cursor-pointer ${
            activeSim === 'gene' ? 'bg-white text-unemi-blue shadow-3xs' : 'text-slate-500'
          }`}
        >
          <span>🧬</span>
          <span>Gene Expression</span>
        </button>
        <button
          onClick={() => setActiveSim('solar')}
          className={`flex-1 flex items-center justify-center gap-1 py-1 px-2 text-[9px] font-bold rounded font-display transition-all cursor-pointer ${
            activeSim === 'solar' ? 'bg-white text-unemi-blue shadow-3xs' : 'text-slate-500'
          }`}
        >
          <span>🪐</span>
          <span>Solar System</span>
        </button>
      </div>

      <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-950 shadow-inner">
        <iframe 
          src={current.src}
          width="100%"
          height="320"
          allowFullScreen
          className="w-full bg-slate-950 min-h-[300px] border-0"
          title={current.title}
        />
        <div className="absolute top-2 left-2 bg-slate-900/80 text-white rounded-full px-2 py-0.5 text-[8px] font-mono no-print flex items-center gap-1 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Active Simulated Canvas
        </div>
      </div>

      <div className="p-2 bg-slate-50 border border-slate-150 rounded-lg text-slate-650 font-sans">
        <h6 className="text-[10px] font-bold text-unemi-blue font-display flex items-center gap-1">
          <span>{current.icon}</span> Curriculum Alignment Matrix:
        </h6>
        <div className="flex flex-wrap gap-1 mt-1.5">
          {current.topics.map((t, i) => (
            <span key={i} className="text-[8px] font-mono bg-blue-50 text-unemi-blue px-1.5 py-0.5 rounded border border-blue-100">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* 9. Theme 9: PLE Personal Workspace Builder */
const PLEWorkspaceBuilder: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<string[]>([
    "Curated vocabulary bookmarks",
    "Weekly podcasts channels feed"
  ]);
  const [inputVal, setInputVal] = useState<string>("");

  const addBookmark = () => {
    if (!inputVal.trim()) return;
    setBookmarks([...bookmarks, inputVal.trim()]);
    setInputVal("");
  };

  return (
    <div className="space-y-3 font-sans">
      <p className="text-3xs text-slate-500 leading-normal">
        Build a localized digital Personal Learning Environment (PLE). Drag-and-store active research links to compile your portfolio targets:
      </p>

      <div className="flex gap-2 no-print">
        <input 
          type="text"
          placeholder="Add portfolio feed link or tool label..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="flex-1 text-2xs p-1.5 border border-slate-200 rounded outline-none font-sans focus:ring-1 focus:ring-unemi-orange"
        />
        <button 
          onClick={addBookmark}
          className="bg-unemi-orange text-white text-2xs px-3 rounded font-bold hover:bg-orange-600 transition-colors"
        >
          Inject Tool
        </button>
      </div>

      <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
        {bookmarks.map((b, i) => (
          <div key={i} className="flex justify-between items-center p-1.5 bg-slate-50 border border-slate-150 rounded text-3xs font-medium text-slate-700">
            <span>🔖 {b}</span>
            <button 
              onClick={() => setBookmarks(bookmarks.filter((_, idx) => idx !== i))}
              className="text-red-500 hover:text-red-700 font-bold ml-2 text-2xs cursor-pointer no-print"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 10. Theme 10: Padlet Collaborative Board */
const PadletDebateBoard: React.FC = () => {
  const [posts, setPosts] = useState([
    { author: "Eng. Xavier Cabrera (Instructor)", content: "Excellent summary. Remember to actively moderate discussion boards on Discord/Edmodo to keep school topics aligned." },
    { author: "Elena R. (Student)", content: "Connectivism perfectly explains how we use YouTube tutorials to master software skills, not just official syllabus PDFs." }
  ]);
  const [newContent, setNewContent] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const addPost = () => {
    if (!newContent.trim()) return;
    setPosts([
      ...posts,
      { author: newAuthor.trim() || "Guest Student", content: newContent }
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
            placeholder="Your name (Optional)"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
            className="text-2xs px-2.5 py-1.5 border border-slate-200 rounded focus:ring-1 focus:ring-unemi-blue outline-none"
          />
          <button 
            onClick={addPost}
            className="text-2xs px-3 py-1.5 bg-unemi-blue text-white rounded font-medium hover:bg-opacity-95"
          >
            Post to Board
          </button>
        </div>
        <textarea
          rows={2}
          placeholder="Write your perspective regarding social networks in academic environments..."
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="w-full text-2xs p-2 border border-slate-200 rounded focus:ring-1 focus:ring-unemi-blue outline-none"
        />
      </div>
    </div>
  );
};

/* 11. Theme 11: Web 1.0 vs. Web 2.0 comparison clicker */
const WebComparisonClicker: React.FC = () => {
  const [selectedWeb, setSelectedWeb] = useState<'1' | '2'>('2');

  return (
    <div className="space-y-3 font-sans">
      <div className="flex rounded-md border border-slate-200 overflow-hidden no-print">
        <button 
          onClick={() => setSelectedWeb('1')}
          className={`flex-1 py-1.5 text-center text-3xs font-bold leading-none uppercase tracking-wider ${
            selectedWeb === '1' ? 'bg-slate-750 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
          }`}
        >
          Web 1.0 Static Archives
        </button>
        <button 
          onClick={() => setSelectedWeb('2')}
          className={`flex-1 py-1.5 text-center text-3xs font-bold leading-none uppercase tracking-wider ${
            selectedWeb === '2' ? 'bg-unemi-orange text-white font-bold' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
          }`}
        >
          Web 2.0 Social Canvas
        </button>
      </div>

      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 leading-relaxed text-slate-700">
        {selectedWeb === '1' ? (
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Architecture profile:</span>
            <h6 className="font-bold text-xs text-unemi-blue font-display mb-1">Publisher-to-reader (Read Only)</h6>
            <p className="text-3xs text-slate-600 leading-normal">
              Users act as mere content consumers. Information resides inside closed institutional HTML grids with zero options to leave review remarks or submit files.
            </p>
          </div>
        ) : (
          <div>
            <span className="text-[10px] uppercase font-bold text-unemi-orange block mb-1">Architecture profile:</span>
            <h6 className="font-bold text-xs text-unemi-blue font-display mb-1">Peer-to-peer sharing (Read & Write)</h6>
            <p className="text-3xs text-slate-600 leading-normal">
              The internet is a crowd-sourced cloud. Students create slides on Canva, answer forums on Padlet, publish tutorials on YouTube, and co-author wikis collectively.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

/* 12. Theme 12: Communities of Practice Checklist */
const CopChecklistBuilder: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Define concrete common domain value", checked: true },
    { id: 2, text: "Establish regular study meeting calendar", checked: false },
    { id: 3, text: "Configure digital folders for shared resources", checked: false }
  ]);

  const toggleItem = (id: number) => {
    setItems(items.map(it => it.id === id ? { ...it, checked: !it.checked } : it));
  };

  return (
    <div className="space-y-3 font-sans">
      <p className="text-3xs text-slate-500 leading-normal">
        Check critical criteria needed to transform a simple study group into an official Community of Practice (CoP):
      </p>

      <div className="space-y-2">
        {items.map(it => (
          <div 
            key={it.id} 
            onClick={() => toggleItem(it.id)}
            className="flex items-center gap-2 p-2 border border-slate-100 rounded-lg bg-slate-50/40 hover:bg-slate-50 hover:border-slate-200 transition-all cursor-pointer select-none"
          >
            <span className={`w-4 h-4 rounded border flex items-center justify-center font-mono text-[9px] ${
              it.checked ? "bg-unemi-blue text-white border-unemi-blue" : "border-slate-300"
            }`}>
              {it.checked && "✓"}
            </span>
            <span className="text-2xs text-slate-700 leading-none">{it.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 13. Theme 13: Netiquette Pledge Signer */
const NetiquettePledgeSigner: React.FC = () => {
  const [studentName, setStudentName] = useState<string>("");
  const [signed, setSigned] = useState<boolean>(false);

  return (
    <div className="space-y-3 font-sans">
      <p className="text-3xs text-slate-500 leading-relaxed border-l-2 border-unemi-orange pl-2">
        "I pledge to protect student privacy, maintain absolute professional wording in discussion forums, and show empathy to peer colleagues."
      </p>

      {!signed ? (
        <div className="flex gap-2 no-print">
          <input 
            type="text" 
            placeholder="Type your academic name to sign..."
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="flex-1 text-2xs p-1.5 border border-slate-200 rounded focus:ring-1 focus:ring-unemi-blue outline-none"
          />
          <button 
            disabled={!studentName.trim()}
            onClick={() => setSigned(true)}
            className="text-2xs px-3 bg-unemi-blue text-white rounded font-bold hover:bg-opacity-95 disabled:opacity-50"
          >
            Sign Pledge
          </button>
        </div>
      ) : (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
          <span className="text-base text-emerald-600 block mb-0.5">🎖️ Pledge Sealed</span>
          <p className="text-2xs font-extrabold text-emerald-800 uppercase font-display leading-none">
            {studentName}
          </p>
          <span className="text-[8px] font-mono text-slate-400 mt-1.5 block uppercase">AUTHORIZED DIGITALLY FOR THE ACADEMIC YEAR 2026</span>
          <button 
            onClick={() => { setSigned(false); setStudentName(""); }}
            className="text-[9px] text-unemi-orange hover:underline font-mono font-bold mt-2.5 block mx-auto no-print"
          >
            RESET SIGNATURE
          </button>
        </div>
      )}
    </div>
  );
};


/* 14. Unit 2 Theme 1: LMS Settings quiz */
const VirtualPlatformFeatureQuiz: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="space-y-3 font-sans">
      <p className="text-3xs text-slate-500 leading-normal">
        Select which capability forms the core infrastructure of any modern LMS platform (versus a simple file storage network):
      </p>

      <div className="grid grid-cols-1 gap-2">
        {[
          { k: "wrong1", label: "Hosting unstructured PDF files next to downloadable pictures." },
          { k: "correct", label: "Generating systematic database catalogs recording student cohorts, grades, and trace course progress." },
          { k: "wrong2", label: "Allowing users to write HTML codes directly into live chat widgets." }
        ].map(item => (
          <button
            key={item.k}
            onClick={() => setSelected(item.k)}
            className={`text-2xs p-2 text-left rounded-lg border transition-all cursor-pointer ${
              selected === item.k
                ? item.k === "correct"
                  ? "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold"
                  : "bg-red-50 border-red-500 text-red-800"
                : "bg-slate-50/50 border-slate-250 text-slate-650 hover:bg-slate-100/50"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

/* 15. Unit 2 Theme 2: LMS Generations timeline card flip */
const LmsEvolutionTimelineCard: React.FC = () => {
  const [activeGen, setActiveGen] = useState<number>(2);

  const gens = [
    { label: "1G (1990s)", code: "Local files and CD-ROM modules. Rigid, zero social dialogues, physical offline files." },
    { label: "2G (2000s)", code: "Client-Server systems like early Moodle. Interactive forum tools, central web directories." },
    { label: "3G (2020s)", code: "Cloud multi-tenant environments. Automated dashboard analytics, native Mobile, robust API plugins." }
  ];

  return (
    <div className="space-y-3 font-sans">
      <div className="flex rounded-lg border border-slate-200 overflow-hidden no-print">
        {gens.map((g, i) => (
          <button
            key={i}
            onClick={() => setActiveGen(i)}
            className={`flex-1 py-1.5 text-center text-3xs font-bold leading-none ${
              activeGen === i ? "bg-unemi-blue text-white" : "bg-slate-50 text-slate-500"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="p-3 rounded-lg bg-orange-50/40 border border-orange-100">
        <span className="text-[10px] font-bold text-unemi-blue block mb-1 font-display">Generation Profile:</span>
        <p className="text-2xs text-slate-700 leading-normal font-medium">{gens[activeGen].code}</p>
      </div>
    </div>
  );
};

/* 16. Unit 2 Theme 3: Blended Learning Balance planner */
const BlendedClassBalancePlanner: React.FC = () => {
  const [percent, setPercent] = useState<number>(50);

  return (
    <div className="space-y-3 font-sans">
      <p className="text-3xs text-slate-500 leading-normal">
        Use slides to plan your blended class hours division. Decide the weight allocated respectively to physical classrooms vs modern LMS courses:
      </p>

      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-slate-700">
        <label className="text-[10px] font-bold text-slate-500 block mb-1.5 flex justify-between uppercase font-mono">
          <span>In-Person Weight: <b className="text-unemi-blue">{percent}%</b></span>
          <span>Digital LMS Weight: <b className="text-unemi-orange">{100 - percent}%</b></span>
        </label>
        <input 
          type="range"
          min="10"
          max="90"
          value={percent}
          onChange={(e) => setPercent(Number(e.target.value))}
          className="w-full accent-unemi-orange cursor-pointer"
        />
      </div>

      <div className="p-2.5 bg-blue-50/60 text-center rounded-xl border border-blue-100">
        <span className="text-3xs text-slate-400 font-mono font-bold block mb-0.5">Resulting Syllabus Architecture:</span>
        <p className="text-2xs text-unemi-blue font-bold">
          {percent >= 70 && "Traditional Hybrid model (focus remains on physically matching hours)."}
          {percent < 70 && percent > 30 && "Flipped Classroom Synergy (perfect balance: active debate in labs, theory at home)."}
          {percent <= 30 && "Strong Virtual/Continuous model (LMS carries absolute weights, negligible face-to-face labs)."}
        </p>
      </div>
    </div>
  );
};

/* 17. Unit 2 Theme 4: Mobile Learning smartphone simulator */
const MobileMicrolearningSimulator: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0);

  const cards = [
    { word: "SCORM", definition: "A package format to migrate educational models effortlessly." },
    { word: "LMS", definition: "Learning Management System like Moodle." },
    { word: "Connectivism", definition: "Learning occurs inside continuous, decentralized networks." }
  ];

  const currentIdx = clickCount % cards.length;

  return (
    <div className="space-y-3">
      <p className="text-3xs text-slate-500 leading-normal">
        Simulate a microlearning mobile card interface (flashcards). Tap below to swap terminology capsules instantly:
      </p>

      <div className="max-w-[200px] mx-auto p-4 bg-slate-900 text-white rounded-2xl border-4 border-slate-800 shadow-lg text-center flex flex-col justify-between min-h-[160px] relative">
        <span className="text-[7.5px] font-mono text-slate-400 absolute top-1.5 left-1/2 -translate-x-1/2 uppercase leading-none">Smart Screen Mock</span>
        
        <div className="my-auto space-y-1.5 pt-1">
          <span className="text-xs font-bold text-unemi-orange font-display tracking-wide">{cards[currentIdx].word}</span>
          <p className="text-[10px] text-slate-350 leading-snug">{cards[currentIdx].definition}</p>
        </div>

        <button 
          onClick={() => setClickCount(clickCount + 1)}
          className="bg-unemi-orange hover:bg-orange-600 text-[10px] font-bold py-1 rounded-md text-white mt-2 transition-colors cursor-pointer"
        >
          ► Next Flashcard
        </button>
      </div>
    </div>
  );
};

/* 18. Unit 2 Theme 5: Ubiquitous learning card discover */
const UlearningEvolutionCard: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const list = [
    { title: "E-Learning (Electronic)", tech: "Web LMS Portals, classic Moodle, Desktop PCs", focus: "Centralized educational content delivered asynchronously without geographical restrictions." },
    { title: "B-Learning (Blended)", tech: "Digital forums, physical workshops, live streams", focus: "A balanced synergy of physical and digital classrooms for optimal instructional flexibility." },
    { title: "M-Learning (Mobile)", tech: "Responsive web apps, podcast shorts, push notifications", focus: "Microlearning assets that fit in the palm of your hand, tailored to brief idle moments." },
    { title: "U-Learning (Ubiquitous)", tech: "IoT, localized QR links, ubiquitous cloud servers", focus: "Omnipresent instruction perfectly integrated into the student's daily lifestyle." }
  ];

  return (
    <div className="space-y-3">
      <div className="flex border border-slate-100 rounded overflow-hidden">
        {list.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`flex-1 text-[10px] py-1.5 text-center font-bold font-sans cursor-pointer ${
              activeStep === idx ? 'bg-unemi-orange text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
            }`}
          >
            {item.title.split(" ")[0]}
          </button>
        ))}
      </div>

      <div className="bg-slate-50/50 p-4 border border-slate-101 rounded-lg">
        <h5 className="font-bold text-xs text-unemi-blue mb-0.5">{list[activeStep].title}</h5>
        <span className="text-3xs text-unemi-orange font-mono block mb-2">{list[activeStep].tech}</span>
        <p className="text-2xs text-slate-600 leading-normal font-sans border-l-2 border-unemi-blue pl-2">
          {list[activeStep].focus}
        </p>
      </div>
    </div>
  );
};

/* 19. Unit 2 Theme 6: Three Actors intersection */
const VennActorsIntersection: React.FC = () => {
  const [activeActor, setActiveActor] = useState<string>("all");

  const actorContent = {
    all: "Navigate the digital school ecology. Click on any specific actor from our matrix to view their unique responsibilities within LMS environments:",
    learner: "1. The Learner: Completes curriculum goals, reviews peers on forums, self-assesses vocabulary tasks, and directs personalized learning roadmaps.",
    teacher: "2. The Teacher: Curates digital resources, moderates weekly web chats, creates grading patterns, and guides administrative courses.",
    admin: "3. The Admin: Configures LMS servers, runs performance audits, maintains student registrations, and handles API keys."
  };

  return (
    <div className="space-y-3 font-sans">
      <div className="flex rounded-md border border-slate-200 overflow-hidden no-print">
        {["all", "learner", "teacher", "admin"].map(id => (
          <button
            key={id}
            onClick={() => setActiveActor(id)}
            className={`flex-1 text-[9px] py-1 text-center font-bold uppercase tracking-wider ${
              activeActor === id ? "bg-unemi-blue text-white" : "bg-slate-50 text-slate-500 hover:bg-slate-100"
            }`}
          >
            {id}
          </button>
        ))}
      </div>

      <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-3xs leading-relaxed">
        <p className="font-medium">{actorContent[activeActor as keyof typeof actorContent]}</p>
      </div>
    </div>
  );
};

/* 20. Unit 2 Theme 7: Action-Tool Planner / TaskList Tracker */
const ProductivityTaskList: React.FC = () => {
  return (
    <div className="space-y-4 font-sans text-slate-700">
      <div className="border-l-4 border-unemi-blue pl-3 py-0.5 space-y-1">
        <h4 className="font-bold text-xs text-unemi-blue uppercase tracking-wide font-display">
          📋 Productivity Tools for Teachers
        </h4>
        <p className="text-[10px] text-slate-500">
          These real-world digital platforms assist contemporary educators in managing tasks and monitoring student workflows:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 hover:bg-slate-100/65 border border-slate-150 transition-colors">
          <span className="text-xs">📄</span>
          <div className="text-2xs leading-normal">
            <strong className="text-slate-800">Google Docs</strong> –{" "}
            <a 
              href="https://docs.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-unemi-orange font-bold hover:underline"
            >
              Configure slides & collaborative sheets
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 hover:bg-slate-100/65 border border-slate-150 transition-colors">
          <span className="text-xs">🎥</span>
          <div className="text-2xs leading-normal">
            <strong className="text-slate-800">Zoom Meetings</strong> –{" "}
            <a 
              href="https://zoom.us" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-unemi-orange font-bold hover:underline"
            >
              Record interactive video classes
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 hover:bg-slate-100/65 border border-slate-150 transition-colors">
          <span className="text-xs">📋</span>
          <div className="text-2xs leading-normal">
            <strong className="text-slate-800">ProofHub Pages</strong> –{" "}
            <a 
              href="https://www.proofhub.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-unemi-orange font-bold hover:underline"
            >
              Plan delivery schedules & milestones
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 hover:bg-slate-100/65 border border-slate-150 transition-colors">
          <span className="text-xs">📊</span>
          <div className="text-2xs leading-normal">
            <strong className="text-slate-800">Trello Boards</strong> –{" "}
            <a 
              href="https://trello.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-unemi-orange font-bold hover:underline"
            >
              Track weekly self-assessment tasks
            </a>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-orange-50 border border-orange-100/80 text-[10px] leading-relaxed text-slate-600">
        <p className="font-bold text-unemi-orange mb-0.5 flex items-center gap-1 text-[9px] uppercase tracking-wide font-display">
          <span>💡</span> Teachers Video Guide: Oxford Classroom
        </p>
        <p className="text-[10px] text-slate-500">
          New mobile phones, tablets, apps, and websites are driving changes in education for both learners and teachers, improving professional development and project design.
        </p>
      </div>
    </div>
  );
};

/* 21. Unit 2 Theme 8: Smart LMS Selector (Open source focus) */
const LmsSmartSelector: React.FC = () => {
  const [budget, setBudget] = useState<string>("free");
  const [devSkill, setDevSkill] = useState<string>("medium");

  const solve = () => {
    if (budget === "high" && devSkill === "low") {
      return {
        name: "Blackboard or Canvas SaaS",
        reason: "Enterprise grade budget with zero server headaches. Ready-to-go setups backed by dedicated corporate SLA support."
      };
    } else if (budget === "free" && devSkill === "high") {
      return {
        name: "Moodle LMS (Self-Hosted)",
        reason: "Leverages the full power of open source. Exceptional capability to scale, customize code, and host on your own cluster."
      };
    } else if (budget === "free" && devSkill === "low") {
      return {
        name: "Chamilo or Google Classroom",
        reason: "Simplified architectures, low overhead, and highly intuitive interfaces requiring negligible server management."
      };
    } else {
      return {
        name: "Moodle or Canvas LMS Cloud",
        reason: "The optimal sweet spot combining manageable costs, high standards, and easy onboarding for students and teachers."
      };
    }
  };

  const ans = solve();

  return (
    <div className="space-y-4">
      <p className="text-[10px] text-slate-500 leading-normal mb-1">
        Align your budget and IT support profiles to discover the recommended LMS layout:
      </p>

      <div className="grid grid-cols-2 gap-3">
        {/* Param 1: Presupuesto */}
        <div>
          <label className="text-3xs uppercase font-bold text-slate-500 block mb-1">Student Volume / Target Budget</label>
          <select 
            value={budget} 
            onChange={(e) => setBudget(e.target.value)}
            className="w-full text-2xs p-1.5 border border-slate-200 rounded focus:ring-1 focus:ring-unemi-blue focus:outline-none bg-white font-sans"
          >
            <option value="free">Free / Open Source Software</option>
            <option value="high">High Enterprise Budget</option>
          </select>
        </div>

        {/* Param 2: Habilidad Técnica */}
        <div>
          <label className="text-3xs uppercase font-bold text-slate-500 block mb-1">Development Skill / IT Support</label>
          <select 
            value={devSkill} 
            onChange={(e) => setDevSkill(e.target.value)}
            className="w-full text-2xs p-1.5 border border-slate-200 rounded focus:ring-1 focus:ring-unemi-blue focus:outline-none bg-white font-sans"
          >
            <option value="high">Advanced Software Developers Available</option>
            <option value="low">No In-House Developers (User Friendly)</option>
          </select>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg">
        <span className="text-[9px] uppercase font-bold text-unemi-orange tracking-wider block mb-1 font-display">Suggested LMS Integration</span>
        <h5 className="font-bold text-xs text-unemi-blue font-display mb-1">{ans.name}</h5>
        <p className="text-2xs text-slate-600 leading-normal">{ans.reason}</p>
      </div>
    </div>
  );
};

/* 22. Unit 2 Theme 9: Commercial LMS Estimator Tool */
const CommercialLmsEstimator: React.FC = () => {
  const [users, setUsers] = useState<number>(500);

  const cost = users * 3.5;

  return (
    <div className="space-y-3 font-sans">
      <p className="text-3xs text-slate-500 leading-normal">
        Estimate your commercial proprietary subscription costs. Compute Canvas or Blackboard hosting bills relative to active campus registrations:
      </p>

      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 font-sans text-slate-700">
        <label className="text-3xs font-mono font-bold text-slate-500 block mb-1 flex justify-between uppercase">
          <span>Active Campus Student Volume:</span>
          <span className="text-unemi-blue font-bold text-xs">{users} registered users</span>
        </label>
        <input 
          type="range"
          min="100"
          max="5000"
          step="100"
          value={users}
          onChange={(e) => setUsers(Number(e.target.value))}
          className="w-full accent-unemi-blue cursor-pointer"
        />
      </div>

      <div className="p-2.5 bg-orange-50 text-center rounded-xl border border-orange-100">
        <span className="text-3xs text-slate-400 font-mono font-bold block mb-0.5">Projected Licensing Costs:</span>
        <p className="text-sm font-black text-unemi-orange font-display">${cost.toLocaleString()} USD / Month</p>
        <span className="text-[7.5px] text-slate-500 mt-1 block">Based on a competitive enterprise market benchmark ($3.50 per user).</span>
      </div>
    </div>
  );
};

/* 23. Unit 2 Theme 10: SCORM Interoperability Package Emulator */
const ScormInteroperabilitySimulator: React.FC = () => {
  const [uploadStatus, setUploadStatus] = useState<string>("idle");

  const triggerUpload = () => {
    setUploadStatus("checking");
    setTimeout(() => {
      setUploadStatus("success");
    }, 1500);
  };

  return (
    <div className="space-y-3 font-sans">
      <p className="text-3xs text-slate-500 leading-normal">
        Test package standards: Simulate uploading a SCORM ZIP package inside a standard web compiler:
      </p>

      <div className="border border-dashed border-slate-200 rounded-xl p-4 text-center bg-slate-50/20 flex flex-col items-center">
        {uploadStatus === "idle" && (
          <>
            <span className="text-xl shrink-0">📦</span>
            <span className="text-[10px] font-bold text-slate-600 block mt-1">Ready to upload SCORM_Syllabus.zip</span>
            <button 
              onClick={triggerUpload}
              className="mt-2.5 text-[9px] font-mono font-bold bg-unemi-orange hover:bg-orange-600 text-white py-1 px-4 rounded-md transition-colors cursor-pointer"
            >
              Simulate SCORM Upload
            </button>
          </>
        )}

        {uploadStatus === "checking" && (
          <div className="py-2 flex flex-col items-center gap-1.5">
            <RefreshCw className="w-5 h-5 text-unemi-blue animate-spin" />
            <span className="text-3xs uppercase font-mono tracking-wider font-bold text-slate-400 text-center">Parsing manifest XML schemas...</span>
          </div>
        )}

        {uploadStatus === "success" && (
          <div className="py-1">
            <span className="text-emerald-500 text-lg shrink-0">✓</span>
            <h5 className="font-bold text-xs text-emerald-800 font-display">Manifest Validated successfully</h5>
            <p className="text-3xs text-slate-500 mt-0.5 max-w-xs mx-auto leading-tight">
              LMS successfully parsed SCORM 2004 4th Edition schemes. Interoperable communication with grade books established.
            </p>
            <button 
              onClick={() => setUploadStatus("idle")}
              className="text-[9px] text-slate-400 hover:text-slate-600 font-bold underline mt-2 block mx-auto cursor-pointer"
            >
              Reset simulator
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/* 24. Unit 2 Theme 11: LMS Accessibility auditing checklist form */
const LmsAccessibilityComplianceForm: React.FC = () => {
  const [checks, setChecks] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: false
  });

  const items = [
    { id: 1, text: "High contrast typography setting (WCAG 4-5 quotient)" },
    { id: 2, text: "All diagram images include exact alt descriptions" },
    { id: 3, text: "Course navigable solely via keyboard triggers" }
  ];

  const toggleCheck = (id: number) => {
    setChecks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const score = Object.values(checks).filter(Boolean).length;

  return (
    <div className="space-y-3 font-sans">
      <p className="text-3xs text-slate-500 leading-normal">
        Undergo a simulated accessibility audit. Tick checkboxes corresponding to current class settings:
      </p>

      <div className="space-y-2">
        {items.map(it => (
          <div 
            key={it.id}
            onClick={() => toggleCheck(it.id)}
            className="flex items-center gap-2 p-2 border border-slate-100 rounded-lg bg-slate-50/40 hover:bg-slate-50 cursor-pointer transition-colors"
          >
            <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center font-mono text-[9px] ${
              checks[it.id] ? "bg-emerald-500 font-bold text-white border-emerald-500" : "border-slate-300"
            }`}>
              {checks[it.id] && "✓"}
            </span>
            <span className="text-3xs text-slate-700 leading-snug">{it.text}</span>
          </div>
        ))}
      </div>

      <div className="p-2 bg-slate-50 rounded-xl text-center border mt-1">
        <span className="text-[9px] uppercase tracking-wider font-mono text-slate-400 font-bold block mb-0.5">Verification Score:</span>
        <span className="text-2xs font-extrabold text-unemi-blue">
          {score === 3 ? "🏆 100% compliant classroom! Perfect accessibility setup." : `Score: ${score} / 3 domains validated.`}
        </span>
      </div>
    </div>
  );
};
