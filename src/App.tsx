/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { UNITS } from './contentData';
import { BookShell, GlossaryAndAnnexes, UnemiLogo } from './components/BookShell';
import { InteractiveDiagrams } from './components/InteractiveDiagrams';
import { InteractiveActivities } from './components/InteractiveActivities';
import { CheckCircle, Info, Heart } from 'lucide-react';

// Custom icon mapping for Lessons Learned / Reflections
const REFLECTION_ICONS: Record<string, string> = {
  u1t1: "icon_plug.png",
  u1t2: "icon_lightbulb.png",
  u1t3: "icon_globe.png",
  u1t4: "icon_chat_bubble.png",
  u2t1: "icon_speedometer.png",
  u2t2: "icon_handshake.png",
  u2t3: "icon_shield.png",
};

export default function App() {
  
  // Smooth scroll handler for anchor links
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-8 font-sans antialiased text-slate-850">
      
      {/* Outer Max-Width Container */}
      <div className="max-w-5xl mx-auto space-y-12 bg-white p-6 md:p-12 shadow-md rounded-2xl border border-slate-100">
        
        {/* Book Shell - Cover, Print Banner & Table of Contents */}
        <BookShell onScrollToSection={handleScrollToSection} />

        {/* CHAPTERS / UNITS SECTION */}
        <div className="space-y-16">
          {UNITS.map((unit) => (
            <div 
              key={unit.id} 
              id={`unit-${unit.id}`}
              className="page-break space-y-12 border-t-2 border-slate-100 pt-12"
            >
              
              {/* UNIT HEADER WITH DECORATIVE BACKGROUND WATERMARK */}
              <div className="relative overflow-hidden p-6 md:p-8 bg-gradient-to-r from-blue-50/50 to-white border-l-4 border-unemi-blue rounded-r-xl">
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-[0.12] pointer-events-none no-print">
                  <img 
                    src={unit.id === 1 ? "/icon_network_nodes.png" : "/icon_server.png"} 
                    alt="" 
                    className="w-20 h-20 md:w-32 md:h-32 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative z-10">
                  <span className="text-3xs font-mono font-bold text-unemi-orange tracking-widest uppercase block mb-1">
                    SCIENTIFIC CORE MODULE {unit.id}
                  </span>
                  <h2 className="text-xl md:text-2xl font-black font-display text-unemi-blue leading-tight uppercase max-w-xl md:max-w-2xl">
                    UNIT {unit.id}: {unit.title}
                  </h2>
                </div>
              </div>

              {/* TOPICS LIST */}
              <div className="space-y-16">
                {unit.topics.map((topic) => (
                  <div 
                    key={topic.id} 
                    id={topic.id}
                    className="space-y-6 scroll-mt-6 border-b border-dashed border-slate-100 pb-12 last:border-0 last:pb-0"
                  >
                    {/* TOPIC TITLE HEADER WITH INSTITUTIONAL DECORATED ICON */}
                    <div className="flex gap-4 items-center border-l-2 border-unemi-orange pl-4">
                      {topic.icon && (
                        <div className="p-1.5 bg-slate-50 border border-slate-100 rounded-lg shadow-2xs shrink-0 no-print">
                          <img 
                            src={`/${topic.icon}`} 
                            alt="" 
                            className="w-10 h-10 object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                      <div>
                        <span className="text-3xs font-mono text-slate-400 uppercase tracking-widest block font-bold">
                          Unit {unit.id} / Academic Topic
                        </span>
                        <h3 className="text-lg md:text-xl font-bold font-display text-unemi-blue mt-0.5 leading-tight">
                          {topic.title}
                        </h3>
                      </div>
                    </div>

                    {/* STACKED LAYOUT: KEY SUMMARY + VISUAL AID BELOW */}
                    <div className="space-y-6">
                      
                      {/* Summary items */}
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg">
                          <span className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                            Core Highlights / Pedagogical Focus
                          </span>
                          <ul className="space-y-3 font-sans">
                            {topic.summary.map((point, index) => (
                              <li key={index} className="flex gap-2.5 items-start">
                                <CheckCircle className="w-4 h-4 text-unemi-orange shrink-0 mt-0.5" />
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {point}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Interactive Mindmap or Diagram */}
                      <div className="w-full">
                        <InteractiveDiagrams 
                          type={topic.visualType} 
                          mindmapPath={topic.mindmapPath}
                          topicId={topic.id}
                        />
                      </div>

                    </div>

                    {/* LESSONS LEARNED CALLOUT WITH BEAUTIFUL FLOATING ICON */}
                    <div className="relative overflow-hidden p-5 bg-gradient-to-r from-orange-50/20 via-orange-50/40 to-transparent border-l-4 border-unemi-orange rounded-r-lg">
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.12] pointer-events-none no-print">
                        <img 
                          src={`/${REFLECTION_ICONS[topic.id] || "icon_lightbulb.png"}`} 
                          alt="" 
                          className="w-16 h-16 object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex gap-3 items-start relative z-10">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-unemi-orange shrink-0 animate-pulse">
                          <Info className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                        <div>
                          <h4 className="font-bold text-2xs text-unemi-orange uppercase tracking-wider font-display mb-1">
                            Lessons Learned / Reflection
                          </h4>
                          <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium pr-12">
                            {topic.lessonsLearned}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* INTERACTIVE ACTIVITIES WITH QR COMPATIBILITY */}
                    <InteractiveActivities
                      id={topic.id}
                      title={topic.activityTitle}
                      qrLink={topic.qrLink}
                    />

                    {/* OPTIONAL FEATURED SEMINAR VIDEO FOR GAMIFICATION TOPICS */}
                    {topic.id === 'u2t1' && (
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mt-5 relative overflow-hidden break-inside-avoid shadow-3xs">
                        <div className="absolute right-4 top-4 opacity-15 pointer-events-none no-print">
                          <img src="/icon_video_camera.png" alt="" className="w-14 h-14 object-contain" referrerPolicy="no-referrer" />
                        </div>
                        <h4 className="font-bold text-xs font-display text-unemi-blue uppercase tracking-wide mb-4 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          Featured Video Case Study: Gamification in Modern E-Learning
                        </h4>
                        
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                          {/* Video wrapper */}
                          <div className="flex-1 w-full aspect-video rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-black">
                            <iframe
                              src="https://www.youtube.com/embed/1CZtIIy7tRU"
                              title="TOP 5 Gamification Examples In Education today!"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="w-full h-full min-h-[220px]"
                            ></iframe>
                          </div>
                          
                          {/* Corresponding QR code next to it */}
                          <div className="w-full md:w-36 shrink-0 flex flex-col items-center justify-center p-3 bg-white border border-slate-200 rounded-xl shadow-3xs text-center">
                            <img 
                              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1CZtIIy7tRU&color=112E51" 
                              alt="QR Code YouTube Video" 
                              className="w-24 h-24 object-contain"
                              referrerPolicy="no-referrer"
                            />
                            <span className="text-[7px] font-mono font-bold text-slate-400 mt-2 tracking-wider uppercase leading-none">WATCH ON MOBILE</span>
                            <a 
                              href="https://www.youtube.com/watch?v=1CZtIIy7tRU"
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[9px] text-unemi-orange hover:underline mt-1.5 font-mono flex items-center gap-0.5 font-bold hover:text-orange-700 no-print"
                            >
                              YOUTUBE LINK
                            </a>
                          </div>
                        </div>

                        <div className="mt-4 text-[11px] font-sans text-slate-500 leading-normal border-t border-slate-200/50 pt-3">
                          <p className="font-semibold text-slate-700">🎯 Recommended Analysis Points:</p>
                          <p className="mt-0.5">Explore how game mechanics (points, badges, leaderboards, and structured quests) are natively integrated into platforms to drive continuous engagement and personalized student feedback.</p>
                        </div>
                      </div>
                    )}

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* GLOSSARY, DISCOVERABLE READINGS & BIBLIOGRAPHIES */}
        <GlossaryAndAnnexes />

        {/* DIGITAL ACCESSIBILITY & TRADEMARK BAR */}
        <div className="py-8 border-t border-slate-100 text-center space-y-2 no-print">
          <div className="flex justify-center items-center gap-2">
            <UnemiLogo className="w-8 h-8" />
            <span className="text-xs font-bold text-unemi-blue uppercase tracking-widest font-display">UNEMI</span>
          </div>
          <p className="text-3xs text-slate-400 font-mono">
            Designed in full alignment with the Visual Identity and Institutional Guidelines of Universidad Estatal de Milagro.
          </p>
          <p className="text-4xs text-slate-400 flex items-center justify-center gap-1 font-mono">
            Developed by the educational assembly to foster critical self-directed competencies <Heart className="w-2.5 h-2.5 text-unemi-orange fill-unemi-orange" /> 2026
          </p>
        </div>

      </div>
    </div>
  );
}
