import React, { useState } from 'react';
import { BookOpen, GraduationCap, Calendar, User, FileText, Globe, Clipboard, Check, Shield, Info, Heart, ExternalLink } from 'lucide-react';
import { GLOSSARY, SUGGESTED_READINGS } from '../contentData';

interface BookShellProps {
  onScrollToSection: (id: string) => void;
  currentPage?: number;
  setCurrentPage?: (p: number) => void;
  viewMode?: 'book' | 'scroll';
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

export const BookShell: React.FC<BookShellProps> = ({ onScrollToSection, currentPage, setCurrentPage, viewMode }) => {
  const [copied, setCopied] = useState(false);

  const copyCitation = () => {
    const citation = "Santos Pinargote, G. L. (2026). E-Learning Ecosystems: Systems, Trends, and Platforms. Milagro, Ecuador: Universidad Estatal de Milagro (UNEMI).";
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNav = (targetId: string, pageNum: number) => {
    if (viewMode === 'book' && setCurrentPage) {
      setCurrentPage(pageNum);
    } else {
      onScrollToSection(targetId);
    }
  };

  const showPage = (p: number) => {
    if (viewMode === 'scroll') return true;
    return currentPage === p;
  };

  return (
    <div className="space-y-12">
      
      {/* PAGE 1: PORTADA (COVER DESIGNED TO FILL EXCLUSIVELY PAGE 1) */}
      {showPage(1) && (
        <div id="page-1" className="page-break flex flex-col justify-between min-h-[960px] bg-white border-4 border-unemi-blue p-8 md:p-14 relative shadow-xs rounded-2xl overflow-hidden">
          {/* Decorative Orange Line Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-unemi-orange opacity-10 rounded-full translate-x-12 -translate-y-12" />
          <div className="absolute top-0 right-0 w-4 h-96 bg-unemi-orange" />
          <div className="absolute bottom-0 left-0 w-96 h-4 bg-unemi-blue" />
          <div className="absolute bottom-16 right-0 w-32 h-1 bg-unemi-orange" />

          {/* Top Header - Institutional Identity */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <div>
              <h2 className="font-bold text-sm text-unemi-blue uppercase tracking-wider font-display">
                Universidad Estatal de Milagro
              </h2>
              <span className="text-[9px] font-mono text-slate-400 tracking-widest uppercase block font-semibold">
                ACADEMIC BOARD / DIGITAL EDUCATION OFFICE
              </span>
            </div>
            <span className="text-[10px] md:text-3xs font-mono font-bold text-unemi-orange tracking-widest border border-unemi-orange/30 px-3 py-1 rounded bg-orange-50/50">
              ACADEMIC E-BOOK
            </span>
          </div>

          {/* Center Main Titles */}
          <div className="my-auto space-y-6 flex flex-col items-center text-center">
            <div className="flex justify-center mb-1">
              <UnemiLogo className="w-[230px] h-auto" />
            </div>

            <div className="inline-flex items-center justify-center gap-2 bg-blue-50 text-unemi-blue border border-blue-100 px-4 py-1 rounded-full select-none">
              <GraduationCap className="w-3.5 h-3.5 text-unemi-orange shrink-0" />
              <span className="text-[9px] font-bold uppercase tracking-wider font-display">Pedagogy of National and Foreign Languages</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-unemi-blue leading-tight tracking-tight font-display max-w-4xl mx-auto">
              E-Learning Ecosystems:
              <span className="block text-unemi-orange mt-2 font-medium">Systems, Trends, and Platforms</span>
            </h1>

            <p className="text-xs text-slate-500 max-w-2xl leading-relaxed mx-auto font-sans">
              An authoritative academic textbook and syllabus map for contemporary computer sciences, blended learning strategies, and virtual classroom setups.
            </p>
          </div>

          {/* Cover Graphic Banner */}
          <div className="my-4 relative rounded-xl overflow-hidden border-2 border-unemi-blue p-1 bg-white shadow-md no-print max-w-xl mx-auto w-full">
            <img 
              src="/cover_image_1780092735607.png" 
              alt="E-Learning Ecosystems Cover Graphic" 
              className="w-full h-auto max-h-[190px] object-cover rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Bottom Metadata */}
          <div className="border-t border-slate-100 pt-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="space-y-0.5">
              <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono block font-bold">Institution</span>
              <p className="font-extrabold text-unemi-blue text-3xs md:text-2xs">Universidad Estatal de Milagro (UNEMI)</p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono block font-bold">Author / Student</span>
              <p className="font-extrabold text-slate-800 text-3xs md:text-2xs uppercase">George Leonel Santos Pinargote</p>
              <p className="text-[9px] font-mono text-slate-400 font-semibold lowercase -mt-0.5">gsantosp2@unemi.edu.ec</p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono block font-bold">Release Date</span>
              <p className="font-extrabold text-slate-800 text-3xs md:text-2xs">June, 2026</p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono block font-bold">Page Count</span>
              <p className="font-extrabold text-slate-800 text-3xs md:text-2xs">34 Pages (Accredited Booklet)</p>
            </div>
          </div>

          {/* Page Footer */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-[9px] font-mono text-slate-400">
            <span>UNEMI STATE UNIVERSITY</span>
            <span className="font-bold">PAGE 01 / 34</span>
          </div>
        </div>
      )}

      {/* PAGE 2: ADMINISTRATIVE METADATA & ACADEMIC REGISTRY */}
      {showPage(2) && (
        <div id="page-2" className="page-break flex flex-col justify-between min-h-[960px] bg-white border border-slate-200/80 p-8 md:p-14 relative shadow-xs rounded-2xl">
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-[9px] font-mono font-bold text-unemi-orange uppercase tracking-wider block">UNEMI TECHNICAL CREDIT SHEET</span>
              <h3 className="text-lg md:text-xl font-bold font-display text-unemi-blue">Booklet Metadata & Licensure Registry</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 font-sans">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-unemi-blue text-3xs uppercase font-mono tracking-wider">Project Specification</h4>
                  <p className="mt-1 leading-relaxed">This scholarly booklet serves as secondary research and syllabus guide on computer-integrated schooling frameworks inside bilingual academic departments.</p>
                </div>
                <div>
                  <h4 className="font-bold text-unemi-blue text-3xs uppercase font-mono tracking-wider">Academic Sponsor</h4>
                  <p className="mt-1 font-bold">Unidad de Ciencias de la Educación (Academic Commission)</p>
                  <p className="text-slate-500">Mención: Pedagogía de los Idiomas Nacionales y Extranjeros</p>
                </div>
              </div>

              <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="font-bold text-unemi-blue text-3xs uppercase font-mono tracking-wider">APA Citation Generator</h4>
                <p className="text-[10px] text-slate-600 leading-normal italic mt-1">
                  "Santos Pinargote, G. L. (2026). E-Learning Ecosystems: Systems, Trends, and Platforms. State University of Milagro (UNEMI)."
                </p>
                <button 
                  onClick={copyCitation}
                  className="w-full mt-2 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-unemi-blue hover:bg-opacity-95 text-white text-3xs font-bold rounded-lg cursor-pointer transition-all uppercase tracking-wide no-print"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Clipboard className="w-3 h-3" />}
                  <span>{copied ? "Copied to Clipboard!" : "Copy reference citation"}</span>
                </button>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h4 className="font-bold text-unemi-blue text-3xs uppercase font-mono tracking-wider">Intellectual Property & Copyleft Parameters</h4>
              <div className="flex gap-4 items-start mt-3">
                <Shield className="w-8 h-8 text-unemi-orange shrink-0 mt-0.5" />
                <p className="text-3xs text-slate-500 leading-relaxed font-sans">
                  Licensed under CC BY-NC-ND 4.0 International. Educational institutions, teachers and digital tutors are fully permitted to download, scan, and print this booklet for non-commercial classrooms provided proper citations remain attached. Do not alter content or release corporate paid copies without written Dean approvals.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-[9px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <UnemiLogo className="w-16 h-5 shrink-0" />
              <span>ADMINISTRATIVE RECORD SHEET</span>
            </div>
            <span className="font-bold">PAGE 02 / 34</span>
          </div>
        </div>
      )}

      {/* PAGE 3: PRESENTACIÓN Y INTRODUCCIÓN GENERAL */}
      {showPage(3) && (
        <div id="page-3" className="page-break flex flex-col justify-between min-h-[960px] bg-white border border-slate-200/80 p-8 md:p-14 relative shadow-xs rounded-2xl">
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-[9px] font-mono font-bold text-unemi-orange uppercase tracking-wider block">ACADEMIC COMMISSIONS PROLOGUE</span>
              <h3 className="text-lg md:text-xl font-bold font-display text-unemi-blue">EPILOGUE: E-learning and Modern Languages Pedagogy</h3>
            </div>

            <div className="text-xs text-slate-700 font-sans space-y-4 leading-relaxed">
              <p>
                In contemporany academic structures, the integration of Information and Communication Technologies (ICT) is no longer an optional classroom dynamic, but a fundamental prerequisite for continuous, self-directed professional capability. When teaching national and foreign languages, virtual platforms alter classical linear methodologies.
              </p>
              <p>
                This guidebook explores the fundamental transition from teacher-centric static websites (Web 1.0) to participative, co-authored student network models (Web 2.0). Connectivism forms the center of our analysis-knowledge is not a solid resource stored in brains, but a living network of nodes spanning global databases and community opinions.
              </p>
              <p>
                By studying this syllabus, language practitioners will gain structured framework competencies to curate cultural portals, design synchronous Zoom class roadmaps, deploy standard SCORM packages, and evaluate Moodle configurations.
              </p>
            </div>

            <div className="bg-orange-50/40 border border-orange-100/60 rounded-xl p-4 mt-6">
              <h4 className="text-2xs font-bold text-unemi-orange font-display flex items-center gap-1.5">
                <span>🎯</span> Recommended Student Learning Objectives:
              </h4>
              <ul className="space-y-1.5 mt-2 text-3xs text-slate-600 font-sans">
                <li>• Classify e-learning paradigms spanning B-learning, M-learning, and ubiquitous systems.</li>
                <li>• Assess software standards to select interoperable proprietary or open-source LMS frameworks.</li>
                <li>• Formulate custom Personal Learning Environments (PLE) utilizing robust Web 2.0 channels.</li>
              </ul>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-[9px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <UnemiLogo className="w-16 h-5 shrink-0" />
              <span>CURRICULAR ALIGNMENT MEMORANDUM</span>
            </div>
            <span className="font-bold">PAGE 03 / 34</span>
          </div>
        </div>
      )}

      {/* PAGE 4: PORTAL DE ACCESO A EVALUACIÓN DIAGNÓSTICA */}
      {showPage(4) && (
        <div id="page-4" className="page-break flex flex-col justify-between min-h-[960px] bg-white border border-slate-200/80 p-8 md:p-14 relative shadow-xs rounded-2xl">
          <div className="space-y-6">
            <div className="border-b border-indigo-200 pb-4">
              <span className="text-[9px] font-mono font-bold text-indigo-600 uppercase tracking-wider block">ACADEMIC ENTRY SLIP</span>
              <h3 className="text-lg md:text-xl font-bold font-display text-slate-800">Diagnostic Assessment Google Form Access</h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Validate your initial comprehension before addressing Core E-Learning Systems. Undergo the initial study slip on Learning Environments, Theories, and Activities via our Google Forms Portal to configure your learning targets.
            </p>

            <div className="bg-indigo-50/40 border border-indigo-150 p-5 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 space-y-3">
                <span className="px-2.5 py-1 bg-indigo-100/50 text-indigo-750 text-[9px] rounded-full border border-indigo-200 font-mono font-bold uppercase tracking-wide inline-block leading-none">Access Token Approved</span>
                <h5 className="font-bold text-xs text-slate-850 font-sans">Required Google Form Assessment</h5>
                <p className="text-3xs text-slate-500 leading-relaxed font-sans">Please load our institutional questionnaire inside your portable device to report your initial digital competence score to the registrar board.</p>
                
                <div className="pt-2 no-print">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScHGh0q-17mR4hYWBUtpm6UiNSeYGVOvn7k-94S_IIa9Q5xhQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-slate-850 text-white font-bold font-display text-2xs tracking-wide rounded-lg transition-all"
                  >
                    <span>Launch Google Form</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              <div className="w-32 h-32 shrink-0 bg-white p-2 rounded-xl border border-slate-200 shadow-3xs flex flex-col items-center justify-center">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://docs.google.com/forms/d/e/1FAIpQLScHGh0q-17mR4hYWBUtpm6UiNSeYGVOvn7k-94S_IIa9Q5xhQ/viewform&color=4F46E5" 
                  alt="QR Code Entry Slip" 
                  className="w-24 h-24 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[7.5px] font-mono font-bold text-slate-400 mt-1 tracking-wider">SCAN SLIP</span>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-[9px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <UnemiLogo className="w-16 h-5 shrink-0" />
              <span>OFFICIAL GOOGLE FORMS SLIP</span>
            </div>
            <span className="font-bold">PAGE 04 / 34</span>
          </div>
        </div>
      )}

      {/* PAGE 5: ÍNDICE AUTOMÁTICO (TABLE OF CONTENTS COVERS ALL 34 PAGES) */}
      {showPage(5) && (
        <div id="page-5" className="page-break flex flex-col justify-between min-h-[960px] bg-white border border-slate-200/80 p-8 md:p-14 relative shadow-xs rounded-2xl">
          <div className="space-y-5">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-[9px] font-mono font-bold text-unemi-orange uppercase tracking-wider block">SYLLABUS CONTENT MAP</span>
              <h3 className="text-lg md:text-xl font-bold font-display text-unemi-blue">Table of Contents & Pagination Key</h3>
            </div>

            <div className="space-y-4 text-xs">
              
              {/* Unit 1 TOC */}
              <div>
                <div 
                  onClick={() => handleNav("unit-1", 6)}
                  className="flex justify-between font-bold text-unemi-blue font-display border-b border-slate-100 pb-0.5 text-2xs uppercase cursor-pointer hover:text-unemi-orange transition-colors"
                >
                  <span>UNIT 1: ESSENTIAL ASPECTS & COMPONENTS OF E-LEARNING</span>
                  <span className="font-mono">Pág. 06</span>
                </div>
                <div className="space-y-1.5 pl-3 mt-1.5">
                  {[
                    { label: "Topic 1: ICT Integration and the Educational System", id: "u1t1", pageNum: 7 },
                    { label: "Topic 2: Learning Theories in the Digital Age: Cognitivism & Constructivism", id: "u1t2", pageNum: 8 },
                    { label: "Topic 3: Connectivism: The Cybernetic Learning Network Theory", id: "u1t3", pageNum: 9 },
                    { label: "Topic 4: Educational Content Development (Asynchronous Layouts)", id: "u1t4", pageNum: 10 },
                    { label: "Topic 5: Synchronous Class Interaction Models", id: "u1t5", pageNum: 11 },
                    { label: "Topic 6: Role of the Virtual Instructor as a Designer", id: "u1t6", pageNum: 12 },
                    { label: "Topic 7: Educational and Cultural Portals as Reference Gateways", id: "u1t7", pageNum: 13 },
                    { label: "Topic 8: Immersive Simulations and AR/VR in Classroom Gates", id: "u1t8", pageNum: 14 },
                    { label: "Topic 9: Personal Learning Environments (PLE) Configuration", id: "u1t9", pageNum: 15 },
                    { label: "Topic 10: Social Networks as Active Pedagogical Spaces", id: "u1t10", pageNum: 16 },
                    { label: "Topic 11: Web 1.0 vs. Web 2.0 Web Architecture", id: "u1t11", pageNum: 17 },
                    { label: "Topic 12: Communities of Practice (CoP)", id: "u1t12", pageNum: 18 },
                    { label: "Topic 13: Ethics, Netiquette and Virtual Coexistence", id: "u1t13", pageNum: 19 },
                    { label: "Unit 1 Synthesis Review & Core Self-Assessment", id: "u1-summary", pageNum: 20 }
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      onClick={() => handleNav(item.id, item.pageNum)}
                      className="flex items-center justify-between group cursor-pointer hover:text-unemi-orange transition-colors"
                    >
                      <span className="text-[10px] text-slate-600 group-hover:underline">{item.label}</span>
                      <div className="flex-1 border-b border-dashed border-slate-200 mx-2" />
                      <span className="font-mono text-slate-400 text-3xs">Page {item.pageNum < 10 ? `0${item.pageNum}` : item.pageNum}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unit 2 TOC */}
              <div>
                <div 
                  onClick={() => handleNav("unit-2", 21)}
                  className="flex justify-between font-bold text-unemi-blue font-display border-b border-slate-100 pb-0.5 text-2xs uppercase cursor-pointer hover:text-unemi-orange transition-colors"
                >
                  <span>UNIT 2: PRINCIPAL E-LEARNING SYSTEMS & PLATFORMS</span>
                  <span className="font-mono">Pág. 21</span>
                </div>
                <div className="space-y-1.5 pl-3 mt-1.5">
                  {[
                    { label: "Topic 1: Platforms as New Educational Settings", id: "u2t1", pageNum: 22 },
                    { label: "Topic 2: Learning Management Systems - LMS Evolution", id: "u2t2", pageNum: 23 },
                    { label: "Topic 3: Blended Learning Mode - B-Learning", id: "u2t3", pageNum: 24 },
                    { label: "Topic 4: Mobile Learning & Microlearning Systems - M-Learning", id: "u2t4", pageNum: 25 },
                    { label: "Topic 5: Ubiquitous Ecosystems - U-Learning", id: "u2t5", pageNum: 26 },
                    { label: "Topic 6: The Three Essential Actors of LMS Environments", id: "u2t6", pageNum: 27 },
                    { label: "Topic 7: Pedagogical Planning & Productivity Platforms", id: "u2t7", pageNum: 28 },
                    { label: "Topic 8: Open Source Software Platforms: Moodle & Chamilo", id: "u2t8", pageNum: 29 },
                    { label: "Topic 9: Commercial & Proprietary LMS Alternatives", id: "u2t9", pageNum: 30 },
                    { label: "Topic 10: System Standardization & Interoperability Standards (SCORM)", id: "u2t10", pageNum: 31 },
                    { label: "Topic 11: Virtual Classroom Quality Criteria & Accessibility", id: "u2t11", pageNum: 32 },
                    { label: "LMS Architecture Review & Match Assessment", id: "u2-summary", pageNum: 33 }
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      onClick={() => handleNav(item.id, item.pageNum)}
                      className="flex items-center justify-between group cursor-pointer hover:text-unemi-orange transition-colors"
                    >
                      <span className="text-[10px] text-slate-600 group-hover:underline">{item.label}</span>
                      <div className="flex-1 border-b border-dashed border-slate-200 mx-2" />
                      <span className="font-mono text-slate-400 text-3xs">Page {item.pageNum < 10 ? `0${item.pageNum}` : item.pageNum}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Annexes TOC */}
              <div>
                <div className="flex justify-between font-bold text-unemi-blue font-display border-b border-slate-100 pb-0.5 text-2xs uppercase">
                  <span>ANNEXES AND METHODOLOGICAL REFERENCE GLOSSARY</span>
                  <span className="font-mono">Pág. 33</span>
                </div>
                <div className="space-y-1.5 pl-3 mt-1.5">
                  <div 
                    onClick={() => handleNav("anexo-glosario", 33)}
                    className="flex items-center justify-between group cursor-pointer hover:text-unemi-orange"
                  >
                    <span className="text-[10px] text-slate-600 group-hover:underline">Annex A: Glossary of E-Learning and Platform Terminology</span>
                    <div className="flex-1 border-b border-dashed border-slate-200 mx-2" />
                    <span className="font-mono text-slate-400 text-3xs">Page 33</span>
                  </div>
                  <div 
                    onClick={() => handleNav("anexo-lecturas", 34)}
                    className="flex items-center justify-between group cursor-pointer hover:text-unemi-orange"
                  >
                    <span className="text-[10px] text-slate-600 group-hover:underline">Annex B: Recommended Academic Bibliography & Closing Signatures</span>
                    <div className="flex-1 border-b border-dashed border-slate-200 mx-2" />
                    <span className="font-mono text-slate-400 text-3xs">Page 34</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-[9px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <UnemiLogo className="w-16 h-5 shrink-0" />
              <span>TABLE OF CONTENTS DOCUMENT GUIDE</span>
            </div>
            <span className="font-bold">PAGE 05 / 34</span>
          </div>
        </div>
      )}

    </div>
  );
};

export const GlossaryAndAnnexes: React.FC<{ currentPage?: number; viewMode?: 'book' | 'scroll' }> = ({ currentPage, viewMode }) => {
  const showPage = (p: number) => {
    if (viewMode === 'scroll') return true;
    return currentPage === p;
  };

  return (
    <div className="space-y-12">
      
      {/* PAGE 33: GLOSSARY OF TERMS */}
      {showPage(33) && (
        <div id="anexo-glosario" className="page-break bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm min-h-[960px] flex flex-col justify-between">
          <div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[680px] overflow-y-auto pr-1">
              {GLOSSARY.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border-l-4 border-unemi-orange rounded-r-lg shadow-2xs font-sans">
                  <h4 className="font-bold text-2xs text-unemi-blue font-display mb-1 select-all hover:text-unemi-orange transition-colors">
                    {item.term}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-[9px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <UnemiLogo className="w-16 h-5 shrink-0" />
              <span>ANNEX A Glossary OF E-LEARNING</span>
            </div>
            <span className="font-bold">PAGE 33 / 34</span>
          </div>
        </div>
      )}

      {/* PAGE 34: SUGGESTED READINGS & BIBLIOGRAPHIES */}
      {showPage(34) && (
        <div id="anexo-lecturas" className="page-break bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm font-sans min-h-[960px] flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-4 mb-3">
              <div className="p-1.5 bg-slate-50 border border-slate-101 rounded-xl shrink-0 no-print">
                <img src="/icon_shield.png" alt="" className="w-9 h-9 object-contain" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold font-display text-unemi-blue">
                  Annex B: Recommended Readings & Standards
                </h2>
                <span className="text-3xs font-mono text-slate-400 tracking-widest uppercase block mt-0.5 font-semibold">
                  Academic Bibliography & Further Readings
                </span>
              </div>
            </div>

            <div className="space-y-3.5 max-h-[480px] overflow-y-auto pr-1">
              {SUGGESTED_READINGS.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 transition-colors">
                  <div className="flex items-start gap-2.5 flex-1 text-xs">
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-50 text-unemi-blue text-3xs font-bold font-mono shrink-0">
                      {index + 1}
                    </span>
                    <div className="space-y-0.5">
                      <p className="text-slate-800 leading-normal font-medium italic">
                        {item.title}
                      </p>
                      <p className="text-3xs font-mono text-slate-400 tracking-wide uppercase font-bold">{item.authorOrRef}</p>
                    </div>
                  </div>
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-orange-50 hover:bg-orange-100 text-unemi-orange hover:text-orange-700 font-bold font-display text-3xs tracking-wide rounded-lg border border-orange-100 transition-all shrink-0 cursor-pointer no-print"
                    >
                      <span>Retrieve Document</span>
                      <span>→</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Quality Stamps and Institutional Back Cover Signatures */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 text-center font-sans">
              <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-unemi-orange block mb-2">Faculty Quality Certification</span>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-around items-center pt-2">
                <div className="flex flex-col items-center">
                  <UnemiLogo className="w-14 h-14 object-contain opacity-80" />
                  <span className="text-[8px] font-mono font-bold text-slate-400 uppercase mt-1">Official UNEMI stamp</span>
                </div>
                
                <div className="space-y-0.5 text-center">
                  <p className="text-[10px] font-bold text-slate-700 uppercase">Prof. Dr. Edison Barcos C.</p>
                  <p className="text-[8px] font-mono text-slate-400 uppercase">Head of Linguistic Department</p>
                  <p className="text-[7.5px] text-emerald-600 font-bold tracking-wider font-mono">✔ ACCREDITED ACCURACY SYSTEM 2026</p>
                </div>
                
                <div className="space-y-0.5 text-center">
                  <p className="text-[10px] font-bold text-slate-700 uppercase">Lic. Martha Valdivieso, M.Sc.</p>
                  <p className="text-[8px] font-mono text-slate-400 uppercase">Syllabus Coordinator</p>
                  <p className="text-[7.5px] text-emerald-600 font-bold tracking-wider font-mono">✔ COMPLIANCE CURRICULAR AUDITOR</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-150 pt-4 flex justify-between items-center text-[9px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <UnemiLogo className="w-16 h-5 shrink-0" />
              <span>UNIVERSIDAD ESTATAL DE MILAGRO</span>
            </div>
            <span className="font-bold">PAGE 34 / 34</span>
          </div>
        </div>
      )}

    </div>
  );
};
