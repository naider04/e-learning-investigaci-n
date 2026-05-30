import React, { useState } from 'react';
import { Check, Info, Trash, Smartphone, ExternalLink } from 'lucide-react';

interface ActivityProps {
  id: string;
  title: string;
  qrLink: string;
}

const OVERRIDE_QR_LINKS: Record<string, string> = {
  u1t1: "https://e-learning-investigaci-n.onrender.com/",
  u1t2: "https://www.canva.com/templates/s/syllabus/",
  u1t4: "https://e-learning-investigaci-n.onrender.com/",
  u2t1: "https://e-learning-investigaci-n.onrender.com/",
  u2t2: "https://www.youtube.com/watch?v=l3hkS4ny3SQ",
  u2t3: "https://e-learning-investigaci-n.onrender.com/",
};

export const InteractiveActivities: React.FC<ActivityProps> = ({ id, title, qrLink }) => {
  const finalQrLink = OVERRIDE_QR_LINKS[id] || qrLink;

  // Common QR Code renderer as high-contrast official QR code images so it scans and works perfectly
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
            {id === 'u1t2' && <ContentStructurePlanner />}
            {id === 'u1t3' && <ArSandboxSimulator />}
            {id === 'u1t4' && <PadletDebateBoard />}
            {id === 'u2t1' && <UlearningEvolutionCard />}
            {id === 'u2t2' && <ProductivityTaskList />}
            {id === 'u2t3' && <LmsSmartSelector />}
          </div>
        </div>

        {/* QR Code Segment for booklet printing */}
        <div className="w-full md:w-52 flex flex-col items-center justify-center text-center p-4 border-t md:border-t-0 md:border-l border-slate-200 animate-fade-in shrink-0">
          {id === 'u1t3' ? (
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
            Assert Answers
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="text-xs px-3 py-1.5 bg-slate-100 text-slate-600 rounded font-display font-medium hover:bg-slate-200"
          >
            Retry Quiz
          </button>
        )}
      </div>
    </div>
  );
};

/* 2. Theme 2: Instructional Content Structure Builder */
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

/* 3. Theme 3: PhET Interactive Scientific Simulators */
const ArSandboxSimulator: React.FC = () => {
  const [activeSim, setActiveSim] = useState<'gene' | 'solar'>('gene');

  const simulations = {
    gene: {
      title: "Gene Expression - Basics",
      src: "https://phet.colorado.edu/sims/html/gene-expression-essentials/latest/gene-expression-essentials_en.html",
      icon: "/icon_lightbulb.png",
      topics: [
        "Cells",
        "Gene Expression",
        "DNA Transcription",
        "Protein Synthesis",
        "Stochastic Molecular Interactions"
      ],
      goals: [
        "Explain the sequence of events that occur within a cell that leads to protein synthesis.",
        "Predict how changing concentrations and interactions of biomolecules affects protein production.",
        "Explain how protein production in a single cell relates to the quantity produced by a collection of cells."
      ]
    },
    solar: {
      title: "My Solar System - Space Physics",
      src: "https://phet.colorado.edu/sims/html/my-solar-system/latest/my-solar-system_en.html",
      icon: "/icon_laptop.png",
      topics: [
        "Gravitational Force",
        "Astronomy",
        "Orbits"
      ],
      goals: [
        "Predict how the position, mass, velocity, and distance between planetary bodies affect their motion and orbits.",
        "Illustrate how the gravitational force controls the motions of the planets.",
        "Explore the different motions that a group of planetary bodies can have.",
        "Describe the behavior of the planet's velocity in different moments of its orbit."
      ]
    }
  };

  const current = simulations[activeSim];

  return (
    <div className="space-y-4">
      {/* Simulation Selector Tabs */}
      <div className="flex bg-slate-100 p-1 rounded-xl no-print gap-1 max-w-sm mx-auto border border-slate-200/50">
        <button
          onClick={() => setActiveSim('gene')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 text-[10px] font-bold rounded-lg font-display transition-all ${
            activeSim === 'gene' ? 'bg-white text-unemi-blue shadow-xs' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>🧬</span>
          <span>Gene Expression</span>
        </button>
        <button
          onClick={() => setActiveSim('solar')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 text-[10px] font-bold rounded-lg font-display transition-all ${
            activeSim === 'solar' ? 'bg-white text-unemi-blue shadow-xs' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>🪐</span>
          <span>Solar System</span>
        </button>
      </div>

      {/* Embedded Live Iframe Wrapper */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 bg-black shadow-inner">
        <iframe 
          src={current.src}
          width="100%"
          height="480"
          allowFullScreen
          className="w-full bg-slate-950 min-h-[420px]"
          title={current.title}
        />
        <div className="absolute top-3 left-3 bg-slate-900/80 text-white rounded-full px-3 py-1 text-[9px] font-mono no-print flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live PhET Simulator Active
        </div>
      </div>

      {/* Simulation Academic Metadata & Curriculum Alignment */}
      <div className="bg-slate-50 border border-slate-200/40 rounded-xl p-4 md:p-5 mt-3 space-y-3 font-sans">
        <div className="flex items-center gap-2.5">
          <img src={current.icon} alt="" className="w-6 h-6 object-contain no-print" referrerPolicy="no-referrer" />
          <h5 className="font-bold text-xs text-unemi-blue font-display">
            {current.title} Simulation Specifications
          </h5>
        </div>

        {/* Core Topics Coverage tags */}
        <div className="space-y-1.5">
          <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-slate-400 block">Core Topics:</span>
          <div className="flex flex-wrap gap-1.5">
            {current.topics.map((item, idx) => (
              <span key={idx} className="text-[10px] px-2 py-0.5 bg-blue-50 text-unemi-blue rounded-md border border-blue-100 font-medium font-sans">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Core Learning Goals Checklists */}
        <div className="space-y-1.5 pt-1.5 border-t border-slate-200/50">
          <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-slate-400 block">Learning Goals:</span>
          <ul className="space-y-1.5">
            {current.goals.map((item, idx) => (
              <li key={idx} className="flex gap-2 items-start text-xs text-slate-600 leading-relaxed font-sans">
                <span className="flex h-4 w-4 bg-orange-100 rounded text-unemi-orange items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/* 4. Theme 4: Collaborative Padlet Message Board Mock */
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

/* 5. Theme 5 (Unit 2 Theme 1): Ubiquitous Learning Card Discover */
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
            className={`flex-1 text-[10px] py-1.5 text-center font-bold ${
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

      <div className="grid grid-cols-1 gap-2.5">
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

/* 7. Theme 7 (Unit 2 Theme 3): Smart LMS Selector */
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
