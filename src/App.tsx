import React, { useState, useEffect } from 'react';
import { UNITS } from './contentData';
import { BookShell, GlossaryAndAnnexes, UnemiLogo } from './components/BookShell';
import { InteractiveDiagrams } from './components/InteractiveDiagrams';
import { InteractiveActivities } from './components/InteractiveActivities';
import { CheckCircle, Info, ArrowLeft, ArrowRight, BookOpen, Printer, List, Eye, Activity, Sparkles } from 'lucide-react';

const REFLECTION_ICONS: Record<string, string> = {
  u1t1: "icon_chip_processor.png",
  u1t2: "icon_gears.png",
  u1t3: "icon_globe.png",
  u1t4: "icon_chat_bubble.png",
  u1t5: "icon_broadcast_tower.png",
  u1t6: "icon_database.png",
  u2t1: "icon_speedometer.png",
  u2t2: "icon_handshake.png",
  u2t3: "icon_shield.png",
};

export default function App() {
  const [viewMode, setViewMode] = useState<'book' | 'scroll'>('scroll');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleScrollToSection = (id: string) => {
    // If we are in book mode, map anchor clicks directly to their correct pages
    if (viewMode === 'book') {
      if (id === 'page-1') setCurrentPage(1);
      else if (id === 'page-2') setCurrentPage(2);
      else if (id === 'page-3') setCurrentPage(3);
      else if (id === 'page-4') setCurrentPage(4);
      else if (id === 'page-5') setCurrentPage(5);
      else if (id === 'unit-1') setCurrentPage(6);
      else if (id.startsWith('u1t')) {
        const topicNum = parseInt(id.replace('u1t', ''), 10);
        if (!isNaN(topicNum)) setCurrentPage(6 + topicNum); // topic 1 -> page 7
      }
      else if (id === 'u1-summary') setCurrentPage(20);
      else if (id === 'unit-2') setCurrentPage(21);
      else if (id.startsWith('u2t')) {
        const topicNum = parseInt(id.replace('u2t', ''), 10);
        if (!isNaN(topicNum)) setCurrentPage(21 + topicNum); // topic 1 -> page 22
      }
      else if (id === 'u2-summary') setCurrentPage(33);
      else if (id === 'anexo-glosario') setCurrentPage(33);
      else if (id === 'anexo-lecturas') setCurrentPage(34);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Helper selectors for layout display
  const shouldShowUnitHeader = (unitId: number, pageNum: number) => {
    if (viewMode === 'scroll') return true;
    if (unitId === 1 && pageNum === 6) return true;
    if (unitId === 2 && pageNum === 21) return true;
    return false;
  };

  const getTopicPageNum = (unitId: number, topicIdx: number) => {
    // Unit 1 topic 1 is on page 7
    if (unitId === 1) return topicIdx + 7;
    // Unit 2 topic 1 is on page 22
    return topicIdx + 22;
  };

  const handlePrint = () => {
    setViewMode('scroll');
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] pb-16 pt-6 px-4 md:px-8 font-sans antialiased text-slate-800 select-none">
      
      {/* Main Page Layout Wrapper */}
      <div className="max-w-5xl mx-auto relative">
        
        {/* Page Container */}
        <div className="space-y-10">
          
          <div className="space-y-10">
            {/* Introductory Shell Pages (Pages 1-5) */}
            <BookShell 
              onScrollToSection={handleScrollToSection} 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              viewMode={viewMode}
            />

            {/* Scientific Core Units */}
            {UNITS.map((unit) => {
              const showUnit = viewMode === 'scroll' || currentPage === (unit.id === 1 ? 6 : 21) || 
                (currentPage > (unit.id === 1 ? 6 : 21) && currentPage < (unit.id === 1 ? 20 : 33));

              if (!showUnit) return null;

              return (
                <div key={unit.id} id={`unit-${unit.id}`} className="space-y-12">
                  
                  {/* UNIT HEADER (Pages 6 and 21) */}
                  {shouldShowUnitHeader(unit.id, currentPage) && (
                    <div className="page-break flex flex-col justify-between min-h-[960px] border-4 border-unemi-blue p-8 md:p-14 rounded-2xl bg-white relative shadow-sm mb-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-unemi-orange opacity-5 rounded-full translate-x-12 -translate-y-12" />
                      
                      <div className="my-auto space-y-6">
                        <span className="text-[10px] font-mono font-bold text-unemi-orange tracking-widest uppercase block">
                          UNEMI SCIENTIFIC CORE MODULE {unit.id}
                        </span>
                        
                        <h2 className="text-3xl md:text-5xl font-extrabold text-unemi-blue leading-tight uppercase font-display max-w-3xl">
                          UNIT {unit.id}: {unit.title}
                        </h2>

                        <div className="h-1 w-24 bg-unemi-orange" />
                        
                        <p className="text-xs text-slate-500 max-w-xl leading-relaxed">
                          This structured unit comprises detailed research guidelines regarding contemporary learning theories, asynchronous content design maps, and software settings evaluations.
                        </p>
                      </div>

                      <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-[9px] font-mono text-slate-400">
                        <div className="flex items-center gap-2">
                          <UnemiLogo className="w-16 h-5 shrink-0" />
                          <span>UNEMI MODULE LAUNCH SHEET</span>
                        </div>
                        <span className="font-bold">PAGE {unit.id === 1 ? "06" : "21"} / 34</span>
                      </div>
                    </div>
                  )}

                  {/* Topics List within active page range */}
                  {unit.topics.map((topic, topicIdx) => {
                    const pageNum = getTopicPageNum(unit.id, topicIdx);
                    const showTopic = viewMode === 'scroll' || currentPage === pageNum;

                    if (!showTopic) return null;

                    return (
                      <div 
                        key={topic.id} 
                        id={topic.id}
                        className="page-break bg-white border border-slate-200 p-8 md:p-14 rounded-2xl shadow-sm min-h-[960px] flex flex-col justify-between scroll-mt-24 mb-10"
                      >
                        <div className="space-y-6">
                          {/* Topic Header */}
                          <div className="flex gap-4 items-center border-l-4 border-unemi-orange pl-4">
                            {topic.icon && (
                              <div className="p-1.5 bg-slate-50 border border-slate-100 rounded-lg shadow-3xs shrink-0 no-print">
                                <img 
                                  src={`/${topic.icon}`} 
                                  alt="" 
                                  className="w-10 h-10 object-contain"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            )}
                            <div>
                              <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest block font-bold leading-none">
                                Unidad {unit.id} / Topic Page {pageNum}
                              </span>
                              <h3 className="text-base md:text-lg font-black font-display text-unemi-blue mt-1 leading-tight">
                                {topic.title}
                              </h3>
                            </div>
                          </div>

                          {/* Content Core Grid */}
                          <div className="space-y-6">
                            
                            {/* Summary Points */}
                            <div className="bg-white rounded-lg">
                              <span className="text-4xs font-mono font-bold uppercase tracking-widest text-slate-400 block mb-3.5">
                                CURRICULAR CONCEPTS & SYSTEM REVIEWS
                              </span>
                              <ul className="space-y-3 font-sans">
                                {topic.summary.map((point, index) => (
                                  <li key={index} className="flex gap-2.5 items-start">
                                    <CheckCircle className="w-3.5 h-3.5 text-unemi-orange shrink-0 mt-0.5" />
                                    <p className="text-[11.5px] text-slate-650 leading-relaxed font-sans font-medium">
                                      {point}
                                    </p>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Mindmap visual aids if provided */}
                            {topic.mindmapPath && (
                              <div className="w-full">
                                <InteractiveDiagrams 
                                  type={topic.visualType} 
                                  mindmapPath={topic.mindmapPath}
                                  topicId={topic.id}
                                />
                              </div>
                            )}

                          </div>

                          {/* Pedagogical reflection callout */}
                          <div className="relative overflow-hidden p-4 bg-orange-50/20 border-l-4 border-unemi-orange rounded-r-lg">
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none no-print">
                              <img 
                                src={`/${REFLECTION_ICONS[topic.id] || "icon_lightbulb.png"}`} 
                                alt="" 
                                className="w-16 h-16 object-contain"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="flex gap-2.5 items-start relative z-10">
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-unemi-orange shrink-0">
                                <Info className="w-3 h-3 stroke-[2.5]" />
                              </span>
                              <div>
                                <h4 className="font-bold text-3xs text-unemi-orange uppercase tracking-wider font-display mb-0.5">
                                  Lessons Learned / Reflection
                                </h4>
                                <p className="text-2xs text-slate-650 leading-relaxed font-sans pr-10">
                                  {topic.lessonsLearned}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Playground Activity Area */}
                          <InteractiveActivities
                            id={topic.id}
                            title={topic.activityTitle}
                            qrLink={topic.qrLink}
                          />

                          {/* Gamification Video Integration */}
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
                                <div className="flex-1 w-full aspect-video rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-black">
                                  <iframe
                                    src="https://www.youtube.com/embed/1CZtIIy7tRU"
                                    title="TOP 5 Gamification Examples In Education today!"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="w-full h-full min-h-[200px]"
                                  ></iframe>
                                </div>
                                <div className="w-full md:w-34 shrink-0 flex flex-col items-center justify-center p-3 bg-white border border-slate-200 rounded-xl shadow-3xs text-center">
                                  <img 
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1CZtIIy7tRU&color=112E51" 
                                    alt="QR Code YouTube Video" 
                                    className="w-20 h-20 object-contain"
                                    referrerPolicy="no-referrer"
                                  />
                                  <span className="text-[7px] font-mono font-bold text-slate-400 mt-2 tracking-wider leading-none">WATCH VIDEO</span>
                                </div>
                              </div>

                              <div className="mt-4 text-[11px] font-sans text-slate-500 leading-normal border-t border-slate-200/50 pt-3">
                                <p className="font-semibold text-slate-700">🎯 Recommended Analysis Points:</p>
                                <p className="mt-0.5">Explore how game mechanics (points, badges, leaderboards, and structured quests) are natively integrated into platforms to drive continuous engagement and personalized student feedback.</p>
                              </div>
                            </div>
                          )}

                        </div>

                        {/* Page Footer */}
                        <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center text-[9px] font-mono text-slate-400">
                          <div className="flex items-center gap-2">
                            <UnemiLogo className="w-16 h-5 shrink-0" />
                            <span>GEORGE SANTOS - E-LEARNING SYLLABUS BOOK</span>
                          </div>
                          <span className="font-bold">PAGE {pageNum < 10 ? `0${pageNum}` : pageNum} / 34</span>
                        </div>
                      </div>
                    );
                  })}

                  {/* UNIT SUMMARYS SUMMARY REVIEWS (Pages 20 and 33) */}
                  {((unit.id === 1 && (viewMode === 'scroll' || currentPage === 20)) || 
                    (unit.id === 2 && (viewMode === 'scroll' || currentPage === 33))) && (
                    <div className="page-break flex flex-col justify-between min-h-[960px] border border-slate-200 rounded-2xl p-8 md:p-14 bg-white shadow-sm relative mb-10">
                      <div className="space-y-6">
                        <div className="border-b border-slate-200 pb-4">
                          <span className="text-[9px] font-mono font-bold text-unemi-orange uppercase tracking-wider block">
                            MODULE {unit.id} EVALUATION MATRIX
                          </span>
                          <h3 className="text-lg md:text-xl font-bold font-display text-unemi-blue">
                            Unit {unit.id} Synthesis Review & Self-Assessment
                          </h3>
                        </div>

                        <div className="space-y-4 text-xs text-slate-700 leading-relaxed font-sans">
                          <p>
                            Verify course benchmarks and review lessons to validate your performance before unlocking upcoming certification sections:
                          </p>
                          <div className="space-y-3 bg-slate-50 p-5 border border-slate-100 rounded-xl">
                            <span className="text-3xs uppercase font-mono tracking-widest text-[#94A3B8] font-black block">Verification items:</span>
                            <div className="flex gap-3 items-center">
                              <span className="w-5 h-5 rounded bg-emerald-150 text-emerald-700 font-bold text-3xs flex items-center justify-center">✔</span>
                              <p className="text-2xs text-slate-600 font-bold">Comprehensive reading of Unit {unit.id} material completed.</p>
                            </div>
                            <div className="flex gap-3 items-center">
                              <span className="w-5 h-5 rounded bg-emerald-150 text-emerald-700 font-bold text-3xs flex items-center justify-center">✔</span>
                              <p className="text-2xs text-slate-600 font-bold">All 100% interactive playgrounds and diagnostics solved.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-[9px] font-mono text-slate-400">
                        <div className="flex items-center gap-2">
                          <UnemiLogo className="w-16 h-5 shrink-0" />
                          <span>MODULE PERFORMANCE REPORT</span>
                        </div>
                        <span className="font-bold">PAGE {unit.id === 1 ? "20" : "33"} / 34</span>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}

            {/* Glossary (Page 33) & Bibliography (Page 34) */}
            <GlossaryAndAnnexes currentPage={currentPage} viewMode={viewMode} />
          </div>

          {/* Dynamic footer copyright metadata (No-Print) */}
          <div className="pt-6 text-center text-3xs text-slate-400 uppercase font-mono no-print">
            <span className="font-extrabold hover:text-slate-600 transition-colors">UNEMI • Pedagogía de los Idiomas Nacionales y Extranjeros</span>
          </div>

        </div>
      </div>

    </div>
  );
}
