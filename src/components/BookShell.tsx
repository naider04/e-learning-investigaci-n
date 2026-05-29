import React from 'react';
import { BookOpen, GraduationCap, ArrowDown, Calendar, User, FileText, Globe } from 'lucide-react';
import { GLOSSARY, SUGGESTED_READINGS } from '../contentData';

interface BookShellProps {
  onScrollToSection: (id: string) => void;
}

export const UnemiLogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer elegant shield or gear representing UNEMI - Universidad de Milagro */}
      <circle cx="50" cy="50" r="45" stroke="#004080" strokeWidth="6" fill="#FFFFFF" />
      <circle cx="50" cy="50" r="37" stroke="#FF6600" strokeWidth="2.5" strokeDasharray="6 4" />
      
      {/* Inner Book / Flame vectors representing knowledge & light of Education */}
      <path d="M32 58C32 58 41 51 50 58C59 51 68 58 68 58V40C68 40 59 33 50 40C41 33 32 40 32 40V58Z" fill="#004080" />
      <path d="M50 58V40" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      
      {/* Flame of knowledge */}
      <path d="M50 22C50 22 46 29 50 33C54 29 50 22 50 22Z" fill="#FF6600" />
      
      {/* Professional initials */}
      <text x="50" y="73" fill="#004080" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        UNEMI
      </text>
      <text x="50" y="81" fill="#FF6600" fontSize="5" fontWeight="semibold" tracking="1" textAnchor="middle" fontFamily="sans-serif">
        EST. 2001
      </text>
    </svg>
  );
};

export const BookShell: React.FC<BookShellProps> = ({ onScrollToSection }) => {
  return (
    <div>
      {/* PRINT ADVICE BANNER - HIDDEN WHEN PRINTING */}
      <div className="no-print bg-amber-50 border border-amber-200 p-4 rounded-xl mb-8 flex items-center justify-between shadow-sm">
        <div className="flex gap-3 items-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-unemi-orange text-white">
            <GraduationCap className="w-5 h-5" />
          </span>
          <div>
            <h4 className="font-bold text-sm text-unemi-blue">Sugerencia de Exportación</h4>
            <p className="text-2xs text-slate-600">
              Esta guía pedagógica está optimizada con márgenes reglamentarios UNEMI. Presiona <kbd className="font-mono bg-white border px-1.5 py-0.5 rounded shadow-2xs font-extrabold text-slate-800 text-xs">Ctrl + P</kbd> en tu navegador para guardarla como PDF listo para distribuir.
            </p>
          </div>
        </div>
        <button 
          onClick={() => window.print()} 
          className="text-xs px-4 py-2 bg-unemi-blue hover:bg-opacity-95 text-white rounded-lg font-display font-medium shadow-sm transition-all"
        >
          Imprimir PDF
        </button>
      </div>

      {/* PORTADA (COVER DESIGNED TO FILL EXCLUSIVELY PAGE 1 ON PRINT) */}
      <div className="page-break flex flex-col justify-between min-h-[920px] bg-white border-4 border-unemi-blue p-10 md:p-16 relative shadow-sm rounded-2xl overflow-hidden mb-12">
        {/* Decorative Orange Line Accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-unemi-orange opacity-10 rounded-full translate-x-12 -translate-y-12" />
        <div className="absolute top-0 right-0 w-4 h-96 bg-unemi-orange" />
        <div className="absolute bottom-0 left-0 w-96 h-4 bg-unemi-blue" />
        <div className="absolute bottom-16 right-0 w-32 h-1 bg-unemi-orange" />

        {/* Top Header - Institutional Identity */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-6">
          <div className="flex items-center gap-3">
            <UnemiLogo className="w-16 h-16" />
            <div>
              <h2 className="font-bold text-base text-unemi-blue uppercase tracking-widest font-display">
                Universidad Estatal de Milagro
              </h2>
              <p className="text-3xs font-mono text-slate-400 tracking-widest">
                VICERRECTORADO ACADÉMICO / FORMACIÓN EN LÍNEA
              </p>
            </div>
          </div>
          <span className="text-3xs font-mono font-bold text-unemi-orange tracking-widest border border-unemi-orange/30 px-3 py-1 rounded bg-orange-50/50">
            E-BOOK ACADÉMICO
          </span>
        </div>

        {/* Center Main Titles */}
        <div className="my-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-unemi-blue border border-blue-100 px-4 py-1.5 rounded-full">
            <BookOpen className="w-4 h-4 text-unemi-orange" />
            <span className="text-2xs font-bold uppercase tracking-wider font-display">Sistemas de Información Educativa</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-unemi-blue leading-tight tracking-tight font-display max-w-4xl">
            Sistemas de E-Learning:
            <span className="block text-unemi-orange mt-2 font-medium">Tipos, Tendencias y Plataformas</span>
          </h1>

          <p className="text-sm md:text-base text-slate-500 max-w-2xl leading-relaxed">
            Guía Integral para el Aprendizaje Autodirigido en la Era Digital. Un compendio metodológico riguroso que abarca desde la integración de las TIC hasta las nuevas plataformas ubicuas de formación.
          </p>
        </div>

        {/* Modern Vector Collage Representation */}
        <div className="my-6 p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 space-y-2">
            <p className="text-3xs font-mono uppercase text-unemi-orange font-bold tracking-wider">Unidades Académicas Cubiertas</p>
            <div className="space-y-1">
              <p className="text-xs font-bold text-unemi-blue">✓ Unidad 1: Aspectos Esenciales y Componentes del E-Learning</p>
              <p className="text-xs font-bold text-unemi-blue">✓ Unidad 2: Principales Sistemas y Plataformas de E-Learning</p>
            </div>
          </div>
          <div className="w-full md:w-48 bg-white p-4 border border-slate-200/60 rounded-xl shadow-xs text-center flex flex-col items-center">
            <Globe className="w-8 h-8 text-unemi-blue mb-1 animate-spin-slow" />
            <span className="text-[10px] font-mono text-slate-400 font-bold">UNEMI DIGITAL</span>
            <span className="text-2xs font-semibold text-slate-800 mt-0.5">Acceso Ubicuo 24/7</span>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-8 border-t border-slate-100 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans">
          <div className="space-y-1">
            <span className="text-3xs text-slate-400 uppercase tracking-wider font-mono">Institución</span>
            <p className="font-bold text-unemi-blue text-2xs md:text-xs">UNEMI (Ecuador)</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xs text-slate-400 uppercase tracking-wider font-mono">Autor / Elaborado Por</span>
            <p className="font-bold text-slate-800 text-2xs md:text-xs">W. Patino C.</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xs text-slate-400 uppercase tracking-wider font-mono">Fecha de Emisión</span>
            <p className="font-bold text-slate-800 text-2xs md:text-xs">Mayo, 2026</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xs text-slate-400 uppercase tracking-wider font-mono">Nivel de Formación</span>
            <p className="font-bold text-slate-800 text-2xs md:text-xs">Pregrado y Continuidad</p>
          </div>
        </div>
      </div>

      {/* ÍNDICE AUTOMÁTICO (PAGE 2 ON PRINT) */}
      <div className="page-break bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 mb-12 shadow-sm">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <h2 className="text-xl md:text-2xl font-bold font-display text-unemi-blue">
            Índice de Contenidos
          </h2>
          <p className="text-3xs font-mono text-slate-400 tracking-widest uppercase mt-0.5">
            Estructuración Sistémica del eBook
          </p>
        </div>

        <div className="space-y-6 text-xs md:text-sm">
          {/* Unit 1 Index Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between font-bold text-unemi-blue font-display border-b border-slate-100 pb-1 text-sm md:text-base">
              <h3>UNIDAD 1: ASPECTOS ESENCIALES Y COMPONENTES DEL E-LEARNING</h3>
              <span className="font-mono text-xs font-normal">Pág. 03</span>
            </div>
            
            <div className="space-y-2 pl-4">
              {[
                { label: "Tema 1: Integración de las TIC y el S. Educativo", id: "u1t1" },
                { label: "Tema 2: Desarrollo de Contenidos Didácticos", id: "u1t2" },
                { label: "Tema 3: Portales Educativos y Espacios Culturales", id: "u1t3" },
                { label: "Tema 4: Redes Sociales como Espacios de Aprendizaje", id: "u1t4" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => onScrollToSection(item.id)}
                  className="flex items-center justify-between group cursor-pointer hover:text-unemi-orange transition-colors"
                >
                  <span className="text-slate-600 font-medium group-hover:underline">{item.label}</span>
                  <div className="flex-1 border-b border-dashed border-slate-200 mx-2" />
                  <span className="font-mono text-slate-400">Pág. {3 + i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Unit 2 Index Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between font-bold text-unemi-blue font-display border-b border-slate-100 pb-1 text-sm md:text-base">
              <h3>UNIDAD 2: PRINCIPALES SISTEMAS Y PLATAFORMAS DE E-LEARNING</h3>
              <span className="font-mono text-xs font-normal">Pág. 07</span>
            </div>
            
            <div className="space-y-2 pl-4">
              {[
                { label: "Tema 1: Plataformas como Nuevo Espacio de Formación", id: "u2t1" },
                { label: "Tema 2: Plataformas de E-learning y sus Servicios", id: "u2t2" },
                { label: "Tema 3: Tipos de Plataformas Educativas", id: "u2t3" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => onScrollToSection(item.id)}
                  className="flex items-center justify-between group cursor-pointer hover:text-unemi-orange transition-colors"
                >
                  <span className="text-slate-600 font-medium group-hover:underline">{item.label}</span>
                  <div className="flex-1 border-b border-dashed border-slate-200 mx-2" />
                  <span className="font-mono text-slate-400">Pág. {7 + i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Annexes Index Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between font-bold text-unemi-blue font-display border-b border-slate-100 pb-1 text-sm md:text-base animate-pulse-slow">
              <h3>ANEXOS Y RECURSOS METODOLÓGICOS</h3>
              <span className="font-mono text-xs font-normal">Pág. 10</span>
            </div>
            
            <div className="space-y-2 pl-4">
              <div 
                onClick={() => onScrollToSection("anexo-glosario")}
                className="flex items-center justify-between group cursor-pointer hover:text-unemi-orange"
              >
                <span className="text-slate-600 font-medium group-hover:underline">Glosario de Términos Clave</span>
                <div className="flex-1 border-b border-dashed border-slate-200 mx-2" />
                <span className="font-mono text-slate-400">Pág. 10</span>
              </div>
              <div 
                onClick={() => onScrollToSection("anexo-lecturas")}
                className="flex items-center justify-between group cursor-pointer hover:text-unemi-orange"
              >
                <span className="text-slate-600 font-medium group-hover:underline">Lecturas Sugeridas y Referencias Bibliográficas</span>
                <div className="flex-1 border-b border-dashed border-slate-200 mx-2" />
                <span className="font-mono text-slate-400">Pág. 11</span>
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
        <div className="border-b border-slate-200 pb-4 mb-6">
          <h2 className="text-xl md:text-2xl font-bold font-display text-unemi-blue">
            Anexo A: Glosario de Términos
          </h2>
          <p className="text-3xl font-mono text-slate-400 tracking-widest uppercase mt-0.5">
            Soporte Lexicográfico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GLOSSARY.map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border-l-4 border-unemi-orange rounded-r-lg shadow-2xs">
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
      <div id="anexo-lecturas" className="page-break bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <h2 className="text-xl md:text-2xl font-bold font-display text-unemi-blue">
            Anexo B: Lecturas Recomendadas e ISTE
          </h2>
          <p className="text-3xl font-mono text-slate-400 tracking-widest uppercase mt-0.5">
            Referencias y Vías de Profundización
          </p>
        </div>

        <div className="space-y-4">
          {SUGGESTED_READINGS.map((reading, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-blue-100 text-unemi-blue text-xs font-bold font-mono">
                {idx + 1}
              </span>
              <div>
                <h4 className="font-bold text-xs text-slate-800 leading-tight">
                  {reading.title}
                </h4>
                {reading.authorOrRef && (
                  <p className="text-3xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
                    {reading.authorOrRef}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer closing signatures of quality book styling */}
        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-3xs text-slate-400 font-mono">
          <p>UNIVERSIDAD ESTATAL DE MILAGRO (UNEMI)</p>
          <p className="mt-1 font-sans">Guía de E-Learning - Todos los Derechos Reservados © 2026</p>
        </div>
      </div>

    </div>
  );
};
