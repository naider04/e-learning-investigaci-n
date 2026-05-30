import React, { useState } from 'react';

interface DiagramProps {
  type: string;
  mindmapPath?: string;
  topicId?: string;
}

const ADDITIONAL_DIAGRAMS: Record<string, { src: string; title: string; desc: string }[]> = {
  u1t1: [
    {
      src: "/diagram_connectivism_cycle.png",
      title: "Connectivism Cybernetic Learning Cycle",
      desc: "Observe → Pattern recognition → Network formation → Knowledge creation circular flow."
    }
  ],
  u1t2: [
    {
      src: "/diagram_teacher_competences.png",
      title: "Academic Teacher Competences Radial Matrix",
      desc: "The 8 instructor competences centered around planning, digital curation, continuous evaluation, and feedback."
    }
  ],
  u1t3: [],
  u1t4: [
    {
      src: "/diagram_social_network_flowchart.png",
      title: "Social Network Classroom Setup Flowchart",
      desc: "Pragmatic 5-step checklist workflow: Choose platform → Create group → Set rules → Invite → Start activities."
    },
    {
      src: "/diagram_web1_vs_web2.png",
      title: "Web 1.0 vs Web 2.0 Architectural Pivot",
      desc: "Active structural transformation from reader-only (static) sites into dynamic, interactive, user-contributed social feeds."
    }
  ],
  u2t1: [
    {
      src: "/diagram_evolution_timeline.png",
      title: "Paradigmatic Evolution Timeline",
      desc: "Decadal evolution: 1990s (CD-ROM / local files) → 2000s (LMS portals) → 2010s (Mobile / micro-tasks) → 2020s (Ambient AI & Ubiquitous spaces)."
    },
    {
      src: "/diagram_five_trends.png",
      title: "The Five Core Platform Trends",
      desc: "5 structural hexagons: Blended Learning, Gamification, Microlearning, Personalized Learning, and Continuous Learning."
    },
    {
      src: "/diagram_nine_platforms_grid.png",
      title: "Software Platforms: 3x3 Taxonomy Matrix",
      desc: "Comprehensive structure representing nine distinct software platform varieties (Technology, Computing, Utility, etc.)."
    }
  ],
  u2t2: [
    {
      src: "/diagram_three_actors.png",
      title: "The Three Pillars of E-Learning Platforms",
      desc: "Venn relationship mapping: overlapping domains and responsibilities of the Learner, the Instructor, and the Administrator."
    }
  ],
  u2t3: [
    {
      src: "/diagram_free_vs_commercial.png",
      title: "Open Source vs Proprietary LMS Solutions",
      desc: "Comprehensive comparison mapping Moodle's infinite customization capabilities vs Coursera's instant enterprise-ready cloud SLA setups."
    },
    {
      src: "/diagram_standardization_criteria.png",
      title: "Syllabus Quality Standards Checklist",
      desc: "6 universal educational software criteria: Accessibility, Interoperability, Reusability, Durability, Maintainability, and Adaptability."
    }
  ]
};

export const InteractiveDiagrams: React.FC<DiagramProps> = ({ mindmapPath, topicId }) => {
  const [zoomImg, setZoomImg] = useState<{ src: string; title: string; desc: string } | null>(null);

  const schemes = topicId ? ADDITIONAL_DIAGRAMS[topicId as keyof typeof ADDITIONAL_DIAGRAMS] || [] : [];

  return (
    <div className="space-y-6">
      {/* 1. Official Concept Mapping (Syllabus Core) */}
      {mindmapPath && (
        <div className="bg-white border border-slate-200/60 rounded-xl p-4 overflow-hidden relative group/map flex flex-col items-center">
          <div 
            className="cursor-zoom-in relative w-full flex justify-center bg-slate-50 border border-slate-100 rounded-lg overflow-hidden py-4"
            onClick={() => setZoomImg({
              src: `/${mindmapPath}`,
              title: "Official Syllabus Mind Map",
              desc: "State University of Milagro authoritative visual curriculum concept map."
            })}
          >
            <img
              src={`/${mindmapPath}`}
              alt="Official Mind Map"
              className="max-h-[500px] w-full object-contain hover:scale-103 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 right-3 bg-slate-950/70 text-white rounded-full p-2 hover:bg-slate-950 transition-all opacity-0 group-hover/map:opacity-100 no-print flex items-center gap-1">
              <span className="text-[10px] uppercase font-mono px-1">Expand Concept Map</span>
            </div>
          </div>
          <div className="mt-3 text-center px-4">
            <p className="text-3xs font-mono font-bold text-unemi-orange uppercase tracking-wider">Concept Alignment Map</p>
            <p className="text-3xs text-slate-400 mt-0.5 leading-relaxed font-mono">
              Click the diagram to view high-resolution interactive detail.
            </p>
          </div>
        </div>
      )}

      {/* 2. Technical and Academic Schemes (Always visible under the Mind Map) */}
      {schemes.length > 0 && (
        <div className="space-y-4">
          {schemes.map((scheme, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 rounded-xl p-4 flex flex-col items-center group/scheme shadow-3xs">
              <div 
                className="cursor-zoom-in relative w-full flex justify-center bg-slate-50 border border-slate-100 rounded-lg overflow-hidden py-3"
                onClick={() => setZoomImg(scheme)}
              >
                <img
                  src={scheme.src}
                  alt={scheme.title}
                  className="max-h-[380px] w-full object-contain hover:scale-103 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 right-2 bg-slate-950/70 text-white rounded-full p-1.5 hover:bg-slate-950 transition-all opacity-0 group-hover/scheme:opacity-100 no-print flex items-center gap-1">
                  <span className="text-[9px] uppercase font-mono px-1">Enlarge</span>
                </div>
              </div>
              <div className="mt-3 text-left w-full px-1">
                <h4 className="font-bold text-unemi-blue text-xs font-display flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-unemi-orange shrink-0 animate-pulse" />
                  {scheme.title}
                </h4>
                <p className="text-3xs text-slate-500 leading-relaxed mt-0.5 font-sans font-medium">
                  {scheme.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Zoom Portal */}
      {zoomImg && (
        <div 
          className="fixed inset-0 bg-slate-950/95 z-[999] flex flex-col items-center justify-center p-4 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setZoomImg(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white font-mono text-xs cursor-pointer bg-slate-800/80 hover:bg-slate-700 px-4 py-2 rounded-full shadow-lg transition-all focus:outline-none"
            onClick={() => setZoomImg(null)}
          >
            Close ×
          </button>
          <div 
            className="bg-white p-6 rounded-2xl max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-y-auto w-full relative border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center bg-slate-50 border border-slate-200/60 rounded-xl p-4 overflow-hidden relative select-none">
              <img 
                src={zoomImg.src} 
                alt={zoomImg.title} 
                className="max-h-[60vh] object-contain rounded-lg shadow-sm" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-5 border-t border-slate-100 pt-4 text-center">
              <h4 className="font-bold text-unemi-blue text-sm md:text-base font-display">{zoomImg.title}</h4>
              <p className="text-slate-600 text-xs mt-1.5 leading-relaxed max-w-2xl mx-auto font-sans font-medium">
                {zoomImg.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
