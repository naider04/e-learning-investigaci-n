/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { UNITS } from './contentData';
import { BookShell, GlossaryAndAnnexes, UnemiLogo } from './components/BookShell';
import { InteractiveDiagrams } from './components/InteractiveDiagrams';
import { InteractiveActivities } from './components/InteractiveActivities';
import { BookOpen, Award, CheckCircle, Info, Heart } from 'lucide-react';

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
        
        {/* Book Shell - Portada, Print Banner & Table of Contents */}
        <BookShell onScrollToSection={handleScrollToSection} />

        {/* CHAPTERS / UNITS SECTION */}
        <div className="space-y-16">
          {UNITS.map((unit) => (
            <div 
              key={unit.id} 
              id={`unit-${unit.id}`}
              className="page-break space-y-12 border-t-2 border-slate-100 pt-12"
            >
              
              {/* UNIT HEADER */}
              <div className="p-6 md:p-8 bg-gradient-to-r from-blue-50/50 to-white border-l-4 border-unemi-blue rounded-r-xl">
                <span className="text-3xs font-mono font-bold text-unemi-orange tracking-widest uppercase block mb-1">
                  MÓDULO CIENTÍFICO {unit.id}
                </span>
                <h2 className="text-xl md:text-2xl font-black font-display text-unemi-blue leading-tight uppercase">
                  UNIDAD {unit.id}: {unit.title}
                </h2>
              </div>

              {/* TOPICS ACCORDION/LIST */}
              <div className="space-y-16">
                {unit.topics.map((topic) => (
                  <div 
                    key={topic.id} 
                    id={topic.id}
                    className="space-y-6 scroll-mt-6 border-b border-dashed border-slate-100 pb-12 last:border-0 last:pb-0"
                  >
                    {/* TOPIC TITLE HEADER */}
                    <div className="border-l-2 border-unemi-orange pl-4">
                      <span className="text-3xs font-mono text-slate-400 uppercase tracking-widest block font-bold">
                        Unidad {unit.id} / Sección Académica
                      </span>
                      <h3 className="text-lg md:text-xl font-bold font-display text-unemi-blue mt-0.5">
                        {topic.title}
                      </h3>
                    </div>

                    {/* TWO COLUMN GRID : RESUMEN CLAVE + APOYO VISUAL */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* LEFT: Summary items */}
                      <div className="lg:col-span-6 space-y-4">
                        <div className="bg-white rounded-lg">
                          <span className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                            Resumen Clave / Aspectos Pedagógicos
                          </span>
                          <ul className="space-y-3">
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

                      {/* RIGHT: Interactive Mindmap or Diagram */}
                      <div className="lg:col-span-6">
                        <span className="text-4xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                          Apoyo Visual / Diagrama Estructural
                        </span>
                        <InteractiveDiagrams type={topic.visualType} />
                      </div>

                    </div>

                    {/* LESSONS LEARNED CALLOUT */}
                    <div className="p-5 bg-gradient-to-r from-orange-50/20 via-orange-50/40 to-transparent border-l-4 border-unemi-orange rounded-r-lg">
                      <div className="flex gap-3 items-start">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-unemi-orange shrink-0">
                          <Info className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                        <div>
                          <h4 className="font-bold text-2xs text-unemi-orange uppercase tracking-wider font-display mb-1">
                            Lessons Learned / Reflexión
                          </h4>
                          <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">
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
            Diseñado en conformidad con la Identidad Visual y Simbología Institucional de la Universidad Estatal de Milagro.
          </p>
          <p className="text-4xs text-slate-400 flex items-center justify-center gap-1 font-mono">
            Hecho por el equipo académico para fomento de destrezas autodidactas <Heart className="w-2.5 h-2.5 text-unemi-orange fill-unemi-orange" /> 2026
          </p>
        </div>

      </div>
    </div>
  );
}
