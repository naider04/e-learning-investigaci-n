import React from 'react';
import { BookOpen, GraduationCap, Calendar, User, FileText, Globe } from 'lucide-react';
import { GLOSSARY, SUGGESTED_READINGS } from '../contentData';

interface BookShellProps {
  onScrollToSection: (id: string) => void;
}

export const UnemiLogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <img 
      src="/logo_unemi.png" 
      alt="UNEMI Logo" 
      className={`${className} object-contain`} 
      referrerPolicy="no-referrer"
    />
  );
};

export const BookShell: React.FC<BookShellProps> = ({ onScrollToSection }) => {
  return (
    <div>
      {/* PORTADA (COVER DESIGNED TO FILL EXCLUSIVELY PAGE 1 ON PRINT) */}
      <div className="page-break flex flex-col justify-between min-h-[920px] bg-white border-4 border-unemi-blue p-10 md:p-16 relative shadow-sm rounded-2xl overflow-hidden mb-12">
        {/* Decorative Orange Line Accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-unemi-orange opacity-10 rounded-full translate-x-12 -translate-y-12" />
        <div className="absolute top-0 right-0 w-4 h-96 bg-unemi-orange" />
        <div className="absolute bottom-0 left-0 w-96 h-4 bg-unemi-blue" />
        <div className="absolute bottom-16 right-0 w-32 h-1 bg-unemi-orange" />

        {/* Top Header - Institutional Identity */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-6">
          <div>
            <h2 className="font-bold text-sm md:text-base text-unemi-blue uppercase tracking-wider font-display">
              Universidad Estatal de Milagro
            </h2>
            <p className="text-[10px] md:text-3xs font-mono text-slate-400 tracking-widest uppercase">
              ACADEMIC BOARD / DIGITAL EDUCATION OFFICE
            </p>
          </div>
          <span className="text-[10px] md:text-3xs font-mono font-bold text-unemi-orange tracking-widest border border-unemi-orange/30 px-3 py-1 rounded bg-orange-50/50">
            ACADEMIC E-BOOK
          </span>
        </div>

        {/* Center Main Titles */}
        <div className="my-10 space-y-6 flex flex-col items-center text-center">
          <div className="flex justify-center mb-2 animate-fade-in">
            <UnemiLogo className="w-[265px] h-auto" />
          </div>

          <div className="inline-flex items-center justify-center gap-2 bg-blue-50 text-unemi-blue border border-blue-100 px-4 py-1.5 rounded-full select-none">
            <GraduationCap className="w-4 h-4 text-unemi-orange shrink-0" />
            <span className="text-2xs font-bold uppercase tracking-wider font-display leading-none">Pedagogy of National and Foreign Languages</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-unemi-blue leading-tight tracking-tight font-display max-w-4xl mx-auto">
            E-Learning Ecosystems:
            <span className="block text-unemi-orange mt-2 font-medium">Systems, Trends, and Platforms</span>
          </h1>

          <p className="text-sm md:text-base text-slate-500 max-w-2xl leading-relaxed mx-auto">
            A Comprehensive Guide for Self-Directed Learning in the Digital Age. A structured methodology spanning the integration of ICT, digital educational content designs, and next-generation ubiquitous platforms.
          </p>
        </div>

        {/* Cover Graphic Banner */}
        <div className="my-6 relative rounded-2xl overflow-hidden border-2 border-unemi-blue p-1.5 bg-white shadow-xl no-print">
          <div className="border border-unemi-orange/40 rounded-xl overflow-hidden relative">
            <img 
              src="/cover_image_1780092735607.png" 
              alt="E-Learning Ecosystems Cover Graphic" 
              className="w-full h-auto max-h-[280px] object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Ambient vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-unemi-blue/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Modern Vector Collage Representation */}
        <div className="my-6 p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 space-y-2">
            <p className="text-3xs font-mono uppercase text-unemi-orange font-bold tracking-wider">Academic Units Covered</p>
            <div className="space-y-1">
              <p className="text-xs font-bold text-unemi-blue">✓ Unit 1: Essential Aspects and Components of E-Learning</p>
              <p className="text-xs font-bold text-unemi-blue">✓ Unit 2: Principal E-Learning Systems and Platforms</p>
            </div>
          </div>
          
          <div className="flex gap-3.5 shrink-0 no-print flex-wrap justify-center">
            <div className="flex flex-col items-center p-3 bg-white border border-slate-200/60 rounded-xl shadow-3xs w-20 text-center">
              <img src="/icon_laptop.png" alt="" className="w-8 h-8 object-contain mb-1" referrerPolicy="no-referrer" />
              <span className="text-[8px] font-mono font-bold text-slate-400 tracking-wider">HARDWARE</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-white border border-slate-200/60 rounded-xl shadow-3xs w-20 text-center font-sans">
              <img src="/icon_lightbulb.png" alt="" className="w-8 h-8 object-contain mb-1" referrerPolicy="no-referrer" />
              <span className="text-[8px] font-mono font-bold text-slate-400 tracking-wider">PEDAGOGY</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-white border border-slate-200/60 rounded-xl shadow-3xs w-20 text-center">
              <img src="/icon_chip_processor.png" alt="" className="w-8 h-8 object-contain mb-1 animate-pulse" referrerPolicy="no-referrer" />
              <span className="text-[8px] font-mono font-bold text-slate-400 tracking-wider">SYSTEMS</span>
            </div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-8 border-t border-slate-100 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans">
          <div className="space-y-1">
            <span className="text-3xs text-slate-400 uppercase tracking-wider font-mono">Institution</span>
            <p className="font-bold text-unemi-blue text-2xs md:text-xs">UNEMI (State University of Milagro)</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xs text-slate-400 uppercase tracking-wider font-mono">Author / Student</span>
            <p className="font-bold text-slate-800 text-2xs md:text-xs uppercase">George Leonel Santos Pinargote</p>
            <p className="text-[10px] font-mono text-slate-400 lowercase select-all font-semibold -mt-0.5">gsantosp2@unemi.edu.ec</p>
            <p className="text-[9px] text-slate-500 font-sans leading-tight mt-0.5">Pedagogy of National and Foreign Languages</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xs text-slate-400 uppercase tracking-wider font-mono">Publish Date</span>
            <p className="font-bold text-slate-800 text-2xs md:text-xs">May, 2026</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xs text-slate-400 uppercase tracking-wider font-mono">Academic Level</span>
            <p className="font-bold text-slate-800 text-2xs md:text-xs">Undergraduate & Continuing Ed.</p>
          </div>
        </div>
      </div>

      {/* ONLINE ADMISSION PORTAL — DIAGNOSTIC ENTRY SLIP */}
      <div className="page-break bg-slate-50 border-2 border-dashed border-indigo-200/80 rounded-2xl p-8 md:p-12 mb-12 shadow-xs relative overflow-hidden">
        {/* Subtle decorative purple corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full translate-x-12 -translate-y-12" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-indigo-600" /> {/* Typical Google Form header color strip */}

        <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Official Google Form Questionnaire</span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-black font-display tracking-tight text-slate-800 uppercase leading-snug">
              Academic Entrance Portal:<br />
              <span className="text-indigo-600">Diagnostic Entry Slip</span>
            </h2>

            <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
              Validate your initial comprehension before addressing Core E-Learning Systems. Undergo the initial study slip on <strong>Learning Environments, Theories, and Activities</strong> via our Google Forms Portal to configure your learning targets.
            </p>

            <div className="pt-2 no-print">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScHGh0q-17mR4hYWBUtpm6UiNSeYGVOvn7k-94S_IIa9Q5xhQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold font-display text-xs tracking-wide transition-all shadow-xs cursor-pointer"
              >
                <span>Access Google Form</span>
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>

          {/* Interactive QR Generator block */}
          <div className="w-full md:w-48 shrink-0 flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200/60 shadow-xs text-slate-800">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://docs.google.com/forms/d/e/1FAIpQLScHGh0q-17mR4hYWBUtpm6UiNSeYGVOvn7k-94S_IIa9Q5xhQ/viewform&color=4F46E5" 
              alt="QR Code Entry Slip" 
              className="w-32 h-32 md:w-36 md:h-36 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-[8px] font-mono font-bold text-slate-400 mt-2.5 tracking-wider uppercase">GOOGLE FORM ACCESS</span>
          </div>
        </div>
      </div>

      {/* ÍNDICE AUTOMÁTICO (PAGE 2 ON PRINT) */}
      <div className="page-break bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 mb-12 shadow-sm">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <h2 className="text-xl md:text-2xl font-bold font-display text-unemi-blue">
            Table of Contents
          </h2>
          <p className="text-3xs font-mono text-slate-400 tracking-widest uppercase mt-0.5">
            Systematic Syllabus Index
          </p>
        </div>

        <div className="space-y-6 text-xs md:text-sm">
          {/* Unit 1 Index Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between font-bold text-unemi-blue font-display border-b border-slate-100 pb-1 text-sm md:text-base">
              <h3>UNIT 1: ESSENTIAL ASPECTS AND COMPONENTS OF E-LEARNING</h3>
              <span className="font-mono text-xs font-normal whitespace-nowrap">Page 03</span>
            </div>
            
            <div className="space-y-2 pl-4">
              {[
                { label: "Topic 1: ICT Integration and the Educational System", id: "u1t1" },
                { label: "Topic 2: Content Development", id: "u1t2" },
                { label: "Topic 3: Educational and Cultural Portals", id: "u1t3" },
                { label: "Topic 4: Social Networks as Learning Spaces", id: "u1t4" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => onScrollToSection(item.id)}
                  className="flex items-center justify-between group cursor-pointer hover:text-unemi-orange transition-colors"
                >
                  <span className="text-slate-600 font-medium group-hover:underline">{item.label}</span>
                  <div className="flex-1 border-b border-dashed border-slate-200 mx-2" />
                  <span className="font-mono text-slate-400 whitespace-nowrap">Page {3 + i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Unit 2 Index Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between font-bold text-unemi-blue font-display border-b border-slate-100 pb-1 text-sm md:text-base">
              <h3>UNIT 2: PRINCIPAL E-LEARNING SYSTEMS AND PLATFORMS</h3>
              <span className="font-mono text-xs font-normal whitespace-nowrap">Page 07</span>
            </div>
            
            <div className="space-y-2 pl-4">
              {[
                { label: "Topic 1: Platforms as New Educational Settings", id: "u2t1" },
                { label: "Topic 2: E-learning Platforms and Services", id: "u2t2" },
                { label: "Topic 3: Types of Educational Platforms", id: "u2t3" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => onScrollToSection(item.id)}
                  className="flex items-center justify-between group cursor-pointer hover:text-unemi-orange transition-colors"
                >
                  <span className="text-slate-600 font-medium group-hover:underline">{item.label}</span>
                  <div className="flex-1 border-b border-dashed border-slate-200 mx-2" />
                  <span className="font-mono text-slate-400 whitespace-nowrap">Page {7 + i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Annexes Index Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between font-bold text-unemi-blue font-display border-b border-slate-100 pb-1 text-sm md:text-base">
              <h3>ANNEXES & METHODOLOGICAL RESOURCES</h3>
              <span className="font-mono text-xs font-normal whitespace-nowrap">Page 10</span>
            </div>
            
            <div className="space-y-2 pl-4">
              <div 
                onClick={() => onScrollToSection("anexo-glosario")}
                className="flex items-center justify-between group cursor-pointer hover:text-unemi-orange"
              >
                <span className="text-slate-600 font-medium group-hover:underline">Glossary of Key Terms</span>
                <div className="flex-1 border-b border-dashed border-slate-200 mx-2" />
                <span className="font-mono text-slate-400 whitespace-nowrap">Page 10</span>
              </div>
              <div 
                onClick={() => onScrollToSection("anexo-lecturas")}
                className="flex items-center justify-between group cursor-pointer hover:text-unemi-orange"
              >
                <span className="text-slate-600 font-medium group-hover:underline">Suggested Readings & Reference Standards</span>
                <div className="flex-1 border-b border-dashed border-slate-200 mx-2" />
                <span className="font-mono text-slate-400 whitespace-nowrap">Page 11</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export const GlossaryAndAnnexes: React.FC = () => {
  return (
    <div className="space-y-12 mt-12">
      
      {/* GLOSSARY */}
      <div id="anexo-glosario" className="page-break bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="flex items-center gap-4 border-b border-slate-200 pb-4 mb-6">
          <div className="p-1.5 bg-slate-50 border border-slate-100 rounded-xl shrink-0 no-print">
            <img src="/icon_puzzle.png" alt="" className="w-9 h-9 object-contain" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-display text-unemi-blue">
              Annex A: Glossary of Terms
            </h2>
            <p className="text-3xs font-mono text-slate-400 tracking-widest uppercase mt-0.5">
              Syllabus Terminology Dictionary
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GLOSSARY.map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border-l-4 border-unemi-orange rounded-r-lg shadow-2xs font-sans">
              <h4 className="font-bold text-sm text-unemi-blue font-display mb-1">
                {item.term}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SUGGESTED READINGS */}
      <div id="anexo-lecturas" className="page-break bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm font-sans">
        <div className="flex items-center gap-4 border-b border-slate-200 pb-4 mb-6">
          <div className="p-1.5 bg-white border border-slate-200 rounded-xl shrink-0 no-print">
            <img src="/icon_shield.png" alt="" className="w-9 h-9 object-contain" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold font-display text-unemi-blue">
              Annex B: Recommended Readings & Reference Standards
            </h2>
            <p className="text-3xs font-mono text-slate-400 tracking-widest uppercase mt-0.5">
              Academic Bibliography & Further Readings
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Reference 1 */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 transition-colors">
            <div className="flex items-start gap-3 flex-1">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-unemi-blue text-2xs font-bold font-mono shrink-0">
                1
              </span>
              <div className="space-y-1">
                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  Greenhow, C., & Askari, E. (2017). Learning and teaching with social network sites: A decade of research in K-12 related education. <span className="italic">Education and Information Technologies</span>, 22(2), 623-645.
                </p>
                <p className="text-3xs font-mono text-slate-400 tracking-wide uppercase">DECADE RESEARCH SYNTHESIS • SOCIAL SITES</p>
              </div>
            </div>
            <a 
              href="https://eric.ed.gov/?id=EJ1132101" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-orange-50 hover:bg-orange-100 text-unemi-orange hover:text-orange-700 font-bold font-display text-[10px] tracking-wide rounded-lg border border-orange-100 transition-all shrink-0 self-start md:self-center cursor-pointer no-print"
            >
              <span>View ERIC Source</span>
              <span>→</span>
            </a>
          </div>

          {/* Reference 2 */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 transition-colors">
            <div className="flex items-start gap-3 flex-1">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-unemi-blue text-2xs font-bold font-mono shrink-0">
                2
              </span>
              <div className="space-y-1">
                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  Siemens, G. (2005). Connectivism: A learning theory for the digital age. <span className="italic">International Journal of Instructional Technology and Distance Learning</span>, 2(1).
                </p>
                <p className="text-3xs font-mono text-slate-400 tracking-wide uppercase">CONNECTIVISM CORNERSTONE • Siemens</p>
              </div>
            </div>
            <a 
              href="https://uark.pressbooks.pub/edtech/chapter/elearnspace-connectivism-a-learning-theory-for-the-digital-age/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-orange-50 hover:bg-orange-100 text-unemi-orange hover:text-orange-700 font-bold font-display text-[10px] tracking-wide rounded-lg border border-orange-100 transition-all shrink-0 self-start md:self-center cursor-pointer no-print"
            >
              <span>View Original Paper</span>
              <span>→</span>
            </a>
          </div>

          {/* Reference 3 */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 transition-colors">
            <div className="flex items-start gap-3 flex-1">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-unemi-blue text-2xs font-bold font-mono shrink-0">
                3
              </span>
              <div className="space-y-1">
                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  Tosun, N. (2018). Social networks as a learning and teaching environment and security in social networks. <span className="italic">Journal of Education and Training Studies</span>, 6(11a), 194-208.
                </p>
                <p className="text-3xs font-mono text-slate-400 tracking-wide uppercase">TEACHING SPACES • SECURITY CONSIDERATIONS</p>
              </div>
            </div>
            <div className="flex gap-2 shrink-0 self-start md:self-center no-print">
              <a 
                href="https://eric.ed.gov/?id=EJ1208397" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 font-bold font-mono text-[9px] tracking-tight rounded-md border border-slate-200/60 transition-all cursor-pointer"
              >
                <span>ERIC ID</span>
              </a>
              <a 
                href="https://files.eric.ed.gov/fulltext/EJ1208397.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-orange-50 hover:bg-orange-100 text-unemi-orange hover:text-orange-700 font-bold font-display text-[10px] tracking-wide rounded-lg border border-orange-100 transition-all cursor-pointer"
              >
                <span>Download PDF</span>
                <span>📋</span>
              </a>
            </div>
          </div>

          {/* Reference 4 */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 transition-colors">
            <div className="flex items-start gap-3 flex-1">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-unemi-blue text-2xs font-bold font-mono shrink-0">
                4
              </span>
              <div className="space-y-1">
                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  ISTE (International Society for Technology in Education). (2014). ISTE Standards for Teachers and Administrators.
                </p>
                <p className="text-3xs font-mono text-slate-400 tracking-wide uppercase">GLOBAL FRAMEWORKS • DIGITAL LEADERSHIP</p>
              </div>
            </div>
            <a 
              href="https://iste.org/standards" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-orange-50 hover:bg-orange-100 text-unemi-orange hover:text-orange-700 font-bold font-display text-[10px] tracking-wide rounded-lg border border-orange-100 transition-all shrink-0 self-start md:self-center cursor-pointer no-print"
            >
              <span>View Standards</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Footer closing signatures of quality book styling */}
        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-3xs text-slate-400 font-mono">
          <p>UNIVERSIDAD ESTATAL DE MILAGRO (UNEMI)</p>
          <p className="mt-1 font-sans">E-Learning Guide - All Rights Reserved © 2026</p>
        </div>
      </div>

    </div>
  );
};
