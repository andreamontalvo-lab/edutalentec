import React, { useState, useRef } from 'react';
import { Rocket, Compass, BookOpen, MessageCircle, CheckCircle, BrainCircuit, Search, BarChart3, Upload, Zap, Lightbulb, ArrowRight, Linkedin, MessageSquare, Target, Shield, UserCheck, AlertTriangle, GraduationCap, Map, Users, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const FutureTalent: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [candidateName, setCandidateName] = useState("Candidato");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get filename to simulate personalization
    const file = fileInputRef.current?.files?.[0];
    const name = file ? file.name.split('.')[0].replace(/_/g, ' ').replace(/-/g, ' ') : "Micaela Alejandra";
    setCandidateName(name);

    setIsAnalyzing(true);
    
    // Simulate Processing Time
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasResult(true);
      
      // Save result to localStorage for CareerSearch page integration
      const result = {
        candidateName: name,
        profileTitle: "Analista Estratégica & Líder",
        top5Careers: [
           { careerName: "INGENIERÍA CIVIL", matchPercentage: 96 },
           { careerName: "DERECHO", matchPercentage: 94 },
           { careerName: "ADMINISTRACIÓN DE EMPRESAS", matchPercentage: 92 },
           { careerName: "INGENIERÍA INDUSTRIAL", matchPercentage: 89 },
           { careerName: "NEGOCIOS INTERNACIONALES", matchPercentage: 88 }
        ]
      };
      localStorage.setItem('indigoAnalysis', JSON.stringify(result));
    }, 3000); 
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen animate-fade-in bg-slate-900">
      {/* Hero Section - Purple/Green Theme */}
      <div className="hero-section bg-gradient-to-br from-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-purple-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6 bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/30">
            <Rocket className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-bold tracking-wider uppercase text-sm">El Origen</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tu futuro tiene un Origen.
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto font-light">
            "Nosotros te ayudamos a diseñarlo, no a adivinarlo."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 1. What is Future Talent (Definition) */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Qué es Future Talent?</h2>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-12">
            Es la línea dedicada a jóvenes y colegios. Transformamos la orientación vocacional tradicional en un proceso vivencial de <span className="text-green-400 font-semibold">autoconocimiento</span> y <span className="text-purple-400 font-semibold">estrategia de vida</span>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                   <Compass className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Claridad Vocacional</h3>
                <p className="text-slate-400 text-sm">De la confusión a la certeza. Identificamos tu propósito real.</p>
             </div>
             
             <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                   <BrainCircuit className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Tecnología Indigo</h3>
                <p className="text-slate-400 text-sm">Diagnóstico con IA validado internacionalmente para medir habilidades y valores.</p>
             </div>

             <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                   <GraduationCap className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Puente Universitario</h3>
                <p className="text-slate-400 text-sm">Conexión directa con las mejores universidades (PFU y Nacionales).</p>
             </div>
          </div>
        </div>

        {/* 2. Methodology Section */}
        <div className="mb-20">
           <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-2 bg-gradient-to-b from-purple-500 to-green-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Nuestra Metodología: FUTURE3D</h2>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6">
              {/* Phase 1 */}
              <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                 <div className="absolute top-4 right-4 text-6xl font-black text-slate-800 select-none">1</div>
                 <div className="mb-6 bg-purple-600/20 w-fit p-3 rounded-xl border border-purple-500/30">
                    <Search className="w-8 h-8 text-purple-400" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Descubre</h3>
                 <p className="text-slate-400 mb-4">Identificar talentos, intereses y valores profundos.</p>
                 <ul className="text-sm text-slate-500 space-y-2">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Test Indigo</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Entrevista Inicial</li>
                 </ul>
              </div>

              {/* Phase 2 */}
              <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                 <div className="absolute top-4 right-4 text-6xl font-black text-slate-800 select-none">2</div>
                 <div className="mb-6 bg-green-600/20 w-fit p-3 rounded-xl border border-green-500/30">
                    <Map className="w-8 h-8 text-green-400" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Declara</h3>
                 <p className="text-slate-400 mb-4">Conectar con el propósito y definir la visión personal.</p>
                 <ul className="text-sm text-slate-500 space-y-2">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-500"/> Análisis de Brechas</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-500"/> Selección de Rol</li>
                 </ul>
              </div>

              {/* Phase 3 */}
              <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                 <div className="absolute top-4 right-4 text-6xl font-black text-slate-800 select-none">3</div>
                 <div className="mb-6 bg-blue-600/20 w-fit p-3 rounded-xl border border-blue-500/30">
                    <Users className="w-8 h-8 text-blue-400" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Diseña</h3>
                 <p className="text-slate-400 mb-4">Construir el plan de vida y carrera a 3-5 años.</p>
                 <ul className="text-sm text-slate-500 space-y-2">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Selección de U</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Plan de Acción</li>
                 </ul>
              </div>
           </div>
        </div>

        {/* 3. Pricing Packages */}
        <div className="mb-24">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white">Paquetes Disponibles</h2>
              <p className="text-slate-400">Inversión transparente para un futuro sólido.</p>
           </div>

           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Pack 1: ORIGEN */}
              <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 flex flex-col hover:border-purple-500/50 transition-colors shadow-lg">
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-white">Paquete 1: ORIGEN</h4>
                  <p className="text-slate-400 text-sm mt-1">Diagnóstico Inicial y Flujo Rápido.</p>
                </div>
                <div className="mb-6 flex items-baseline">
                  <span className="text-4xl font-bold text-white">$50</span>
                  <span className="text-slate-500 text-sm ml-2">USD + IVA</span>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex items-start gap-3">
                    <div className="bg-slate-700 p-1 rounded"><BrainCircuit className="w-4 h-4 text-purple-400" /></div>
                    <span className="text-slate-300 text-sm"><strong>Test Indigo (Licencia)</strong>: Diagnóstico con IA.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-slate-700 p-1 rounded"><Users className="w-4 h-4 text-purple-400" /></div>
                    <span className="text-slate-300 text-sm"><strong>1 Sesión de Mentoring</strong> Estratégico (1 hora).</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-slate-700 p-1 rounded"><Search className="w-4 h-4 text-purple-400" /></div>
                    <span className="text-slate-300 text-sm">Acceso a Herramienta IA (Buscador de Carreras).</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold transition">
                  Elegir Básico
                </button>
              </div>

              {/* Pack 2: ORIGEN 3D */}
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border-2 border-green-500 p-8 relative overflow-hidden flex flex-col shadow-2xl transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-green-500 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-md">
                  MÁS POPULAR
                </div>
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-white">Paquete 2: ORIGEN 3D</h4>
                  <p className="text-green-400 text-sm mt-1 font-medium">Servicio Premium y Plan Completo.</p>
                </div>
                <div className="mb-6 flex items-baseline">
                  <span className="text-5xl font-bold text-white">$150</span>
                  <span className="text-slate-500 text-sm ml-2">USD + IVA</span>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/20 p-1 rounded"><CheckCircle className="w-4 h-4 text-green-400" /></div>
                    <span className="text-white text-sm"><strong>Todo lo del Pack ORIGEN</strong>.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/20 p-1 rounded"><Users className="w-4 h-4 text-green-400" /></div>
                    <span className="text-slate-300 text-sm"><strong>Plan Future3D</strong>: 3 Sesiones de Mentoría profunda.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/20 p-1 rounded"><BookOpen className="w-4 h-4 text-green-400" /></div>
                    <span className="text-slate-300 text-sm"><strong>"Diario de la Ruta"</strong>: Bitácora Edutalent.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/20 p-1 rounded"><GraduationCap className="w-4 h-4 text-green-400" /></div>
                    <span className="text-slate-300 text-sm"><strong>El Puente</strong>: Gestión de admisión a Universidades Aliadas (PFU).</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold transition shadow-lg shadow-purple-900/40 flex justify-center items-center gap-2">
                  Comprar Pack 3D <ArrowRight className="w-5 h-5" />
                </button>
              </div>
           </div>
        </div>

        {/* 4. Schools Alliance Banner */}
        <div className="mb-20 bg-gradient-to-r from-slate-800 to-indigo-900 p-8 sm:p-12 rounded-3xl border border-slate-700 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10"></div>
           <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="flex-1">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/10 rounded-lg"><MessageCircle className="w-6 h-6 text-green-400" /></div>
                    <h3 className="text-2xl font-bold text-white">Para Colegios</h3>
                 </div>
                 <p className="text-lg text-slate-300 mb-6">
                    Llevamos el Pack ORIGEN a tu institución con dashboards pedagógicos y talleres grupales. Potencia el perfil de tus graduados.
                 </p>
                 <a 
                   href="https://wa.me/593939691733?text=Hola,%20quisiera%20solicitar%20información%20sobre%20una%20Alianza%20Institucional%20para%20mi%20colegio"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-block px-6 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-200 transition-colors"
                 >
                    Solicitar Alianza Institucional
                 </a>
              </div>
              <div className="flex-shrink-0 opacity-80 md:opacity-100">
                 <Target className="w-40 h-40 text-purple-500/30" />
              </div>
           </div>
        </div>

        {/* 5. IA Analyzer Section */}
        <div id="analizador" className="py-12 border-t border-slate-800">
           <div className="text-center mb-10">
              <span className="text-green-400 font-bold tracking-wider text-sm uppercase mb-2 block">Tecnología Exclusiva</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Ya tienes tus resultados Indigo?</h2>
              <p className="text-slate-400 text-lg">Iniciemos aquí. Sube tu reporte y deja que nuestra IA interprete tu perfil.</p>
           </div>

           <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-1 border border-purple-500/30 shadow-2xl max-w-5xl mx-auto">
              <div className="bg-slate-950 rounded-xl p-6 sm:p-10">
                 {!hasResult ? (
                   <div className="border-2 border-dashed border-slate-700 hover:border-green-500/50 rounded-2xl p-12 transition-all group cursor-pointer bg-slate-900/50" onClick={triggerFileInput}>
                     <form onSubmit={handleUpload} className="flex flex-col items-center justify-center">
                        <input 
                          type="file" 
                          ref={fileInputRef} 
                          className="hidden" 
                          accept=".pdf" 
                          onChange={handleUpload}
                        />
                        <div className="bg-slate-800 p-6 rounded-full mb-6 group-hover:bg-slate-700 transition-colors shadow-lg shadow-purple-900/20 group-hover:scale-110 duration-300">
                          <Upload className="w-12 h-12 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Sube tu PDF de Indigo</h3>
                        <p className="text-slate-400 text-center max-w-md mb-8">
                           Analizaremos tu estructura DISC, motivadores y habilidades para generarte un reporte estratégico al instante.
                        </p>
                        <button 
                          type="button"
                          onClick={triggerFileInput}
                          className={`px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 text-lg ${isAnalyzing ? 'opacity-70 cursor-wait' : 'hover:shadow-lg hover:shadow-purple-600/30'}`}
                        >
                          {isAnalyzing ? (
                            <>
                              <BrainCircuit className="w-6 h-6 animate-spin" /> Procesando {fileInputRef.current?.files?.[0]?.name || 'Datos'}...
                            </>
                          ) : (
                            'Cargar Reporte'
                          )}
                        </button>
                     </form>
                   </div>
                 ) : (
                   /* Full Analysis Report */
                   <div className="animate-fade-in">
                      
                      {/* Report Header */}
                      <div className="bg-slate-900 px-6 py-8 rounded-t-xl border-b border-slate-800 mb-8">
                          <div className="flex flex-wrap justify-between items-start gap-4">
                              <div className="flex items-center gap-5">
                                 <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-3xl border-4 border-slate-800 shadow-xl">
                                    {candidateName.charAt(0)}
                                 </div>
                                 <div>
                                    <h3 className="text-white font-bold text-3xl">{candidateName}</h3>
                                    <div className="flex items-center gap-3 mt-2">
                                      <span className="text-xs bg-green-500/10 text-green-400 px-3 py-1 rounded-full font-bold border border-green-500/20 flex items-center gap-1">
                                        <CheckCircle className="w-3 h-3"/> Perfil Validado
                                      </span>
                                      <span className="text-slate-400 text-sm border-l border-slate-700 pl-3">Analista Estratégica & Líder</span>
                                    </div>
                                 </div>
                              </div>
                              <div className="text-right hidden sm:block bg-slate-800 p-3 rounded-lg border border-slate-700">
                                 <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Potencial Detectado</div>
                                 <div className="text-green-400 font-bold text-xl flex items-center gap-1 justify-end">
                                    <Zap className="w-4 h-4 fill-current"/> Muy Alto
                                 </div>
                              </div>
                          </div>
                          
                          {/* Executive Summary Phrase */}
                          <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-slate-800 rounded-xl border-l-4 border-purple-500">
                              <p className="text-purple-100 italic text-lg font-medium leading-relaxed">
                                 "Profesional orientada a la excelencia que combina una metodología analítica con un liderazgo persuasivo para garantizar resultados de alta calidad."
                              </p>
                          </div>
                      </div>
                      
                      <div className="grid gap-8">
                         
                         {/* 1. Skills & Strengths Grid */}
                         <div className="grid md:grid-cols-2 gap-8">
                            {/* Top 5 Skills */}
                            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                               <h4 className="text-white font-bold mb-6 flex items-center gap-2 text-lg">
                                  <Zap className="w-5 h-5 text-yellow-400 fill-current" /> Top 5 Habilidades
                               </h4>
                               <div className="space-y-4">
                                  {[
                                     { name: "Orientación a las Metas", val: 95 },
                                     { name: "Liderazgo", val: 90 },
                                     { name: "Persuasión", val: 88 },
                                     { name: "Presentación de Información", val: 85 },
                                     { name: "Desarrollo de Personal", val: 82 }
                                  ].map((skill, idx) => (
                                     <div key={idx}>
                                        <div className="flex justify-between text-sm mb-1.5 text-slate-300">
                                           <span className="font-medium">{idx + 1}. {skill.name}</span>
                                           <span className="font-bold text-white">{skill.val}%</span>
                                        </div>
                                        <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                                           <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]" style={{ width: `${skill.val}%` }}></div>
                                        </div>
                                     </div>
                                  ))}
                               </div>
                            </div>

                            {/* Strengths */}
                            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                               <h4 className="text-white font-bold mb-6 flex items-center gap-2 text-lg">
                                  <Shield className="w-5 h-5 text-green-400 fill-current" /> Fortalezas Clave
                               </h4>
                               <ul className="space-y-4">
                                  <li className="flex gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                                     <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                     <span>Hace todo de la mejor manera y es reconocida por su trato.</span>
                                  </li>
                                  <li className="flex gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                                     <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                     <span>Tiene un plan calculado para avanzar y ganar dentro de la organización.</span>
                                  </li>
                                  <li className="flex gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                                     <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                     <span>Mantiene estándares altos y busca resultados de calidad.</span>
                                  </li>
                                  <li className="flex gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                                     <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                     <span>Dispuesta a ser la vocera del equipo.</span>
                                  </li>
                               </ul>
                            </div>
                         </div>

                         {/* 2. Communication Manual */}
                         <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                            <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
                               <MessageSquare className="w-7 h-7 text-blue-400" />
                               <div>
                                  <h4 className="text-white font-bold text-xl">Manual de Usuario: Comunicación</h4>
                                  <p className="text-slate-400 text-sm">Cómo interactuar efectivamente con {candidateName.split(' ')[0]}</p>
                               </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                               {/* Do's */}
                               <div>
                                  <h5 className="text-green-400 font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-wide">
                                     <UserCheck className="w-5 h-5" /> Qué hacer
                                  </h5>
                                  <ul className="space-y-3">
                                     <li className="text-sm text-slate-200 bg-slate-900/80 p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
                                        Proporcionar datos y hechos sólidos, tangibles y prácticos.
                                     </li>
                                     <li className="text-sm text-slate-200 bg-slate-900/80 p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
                                        Ser claro, específico y no dejar nada al azar.
                                     </li>
                                     <li className="text-sm text-slate-200 bg-slate-900/80 p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
                                        Darle tiempo para verificar la fiabilidad de las acciones.
                                     </li>
                                     <li className="text-sm text-slate-200 bg-slate-900/80 p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
                                        Felicitarla por su nivel de compromiso.
                                     </li>
                                  </ul>
                               </div>

                               {/* Don'ts */}
                               <div>
                                  <h5 className="text-red-400 font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-wide">
                                     <AlertTriangle className="w-5 h-5" /> Qué evitar
                                  </h5>
                                  <ul className="space-y-3">
                                     <li className="text-sm text-slate-200 bg-slate-900/80 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
                                        Ser desorganizado o desordenado.
                                     </li>
                                     <li className="text-sm text-slate-200 bg-slate-900/80 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
                                        Usar trucos o manipulaciones ingeniosas.
                                     </li>
                                     <li className="text-sm text-slate-200 bg-slate-900/80 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
                                        Hacer comentarios contradictorios.
                                     </li>
                                     <li className="text-sm text-slate-200 bg-slate-900/80 p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
                                        Presionar para decisiones impulsivas sin análisis.
                                     </li>
                                  </ul>
                               </div>
                            </div>
                         </div>

                         {/* 3. LinkedIn Summary Generator */}
                         <div className="bg-gradient-to-r from-blue-900/30 to-slate-900 rounded-2xl p-8 border border-blue-500/20">
                            <div className="flex justify-between items-start mb-4">
                               <h5 className="text-white font-bold flex items-center gap-2 text-lg">
                                  <Linkedin className="w-6 h-6 text-blue-400" /> Bio Profesional Generada
                               </h5>
                               <span className="text-[10px] bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-bold border border-blue-500/30">LINKEDIN READY</span>
                            </div>
                            <div className="relative">
                               <div className="absolute top-0 left-0 text-4xl text-slate-600 font-serif">"</div>
                               <p className="text-slate-300 italic bg-slate-900/80 p-6 rounded-xl border border-slate-700 leading-relaxed text-lg pl-8">
                                  Profesional orientada a la excelencia y los resultados. Combino una metodología sistemática y analítica con habilidades de liderazgo y persuasión. Me enfoco en la calidad, el cumplimiento de estándares altos y la toma de decisiones basada en datos lógicos, manteniendo siempre una comunicación clara y efectiva para potenciar el desarrollo de equipos.
                               </p>
                            </div>
                         </div>

                         {/* 4. Top Careers (Deep Linked) */}
                         <div>
                            <h5 className="text-white font-bold mb-6 flex items-center gap-2 text-xl">
                               <Lightbulb className="w-6 h-6 text-green-400 fill-current" /> Top 5 Carreras Recomendadas
                            </h5>
                            <div className="grid gap-4">
                               <Link to="/career-search?q=CIVIL&filter=recommended" className="flex items-center justify-between p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500 hover:bg-slate-750 transition-all group shadow-md hover:shadow-green-900/20">
                                  <div className="flex items-center gap-4">
                                     <span className="bg-slate-900 text-slate-400 font-bold w-8 h-8 flex items-center justify-center rounded-lg text-sm border border-slate-700">1</span>
                                     <span className="text-white font-bold text-lg group-hover:text-green-300 transition-colors">Ingeniería Civil</span>
                                  </div>
                                  <div className="flex items-center gap-4">
                                     <span className="text-sm text-green-400 font-bold bg-green-900/20 px-3 py-1.5 rounded-lg border border-green-500/20">96% Match</span>
                                     <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-green-400 transition-colors" />
                                  </div>
                               </Link>
                               
                               <Link to="/career-search?q=DERECHO&filter=recommended" className="flex items-center justify-between p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500 hover:bg-slate-750 transition-all group shadow-md hover:shadow-green-900/20">
                                  <div className="flex items-center gap-4">
                                     <span className="bg-slate-900 text-slate-400 font-bold w-8 h-8 flex items-center justify-center rounded-lg text-sm border border-slate-700">2</span>
                                     <span className="text-white font-bold text-lg group-hover:text-green-300 transition-colors">Derecho</span>
                                  </div>
                                  <div className="flex items-center gap-4">
                                     <span className="text-sm text-green-400 font-bold bg-green-900/20 px-3 py-1.5 rounded-lg border border-green-500/20">94% Match</span>
                                     <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-green-400 transition-colors" />
                                  </div>
                               </Link>

                               <Link to="/career-search?q=ADMINISTRACION&filter=recommended" className="flex items-center justify-between p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500 hover:bg-slate-750 transition-all group shadow-md hover:shadow-green-900/20">
                                  <div className="flex items-center gap-4">
                                     <span className="bg-slate-900 text-slate-400 font-bold w-8 h-8 flex items-center justify-center rounded-lg text-sm border border-slate-700">3</span>
                                     <span className="text-white font-bold text-lg group-hover:text-green-300 transition-colors">Administración de Empresas</span>
                                  </div>
                                  <div className="flex items-center gap-4">
                                     <span className="text-sm text-green-400 font-bold bg-green-900/20 px-3 py-1.5 rounded-lg border border-green-500/20">92% Match</span>
                                     <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-green-400 transition-colors" />
                                  </div>
                               </Link>

                               <div className="grid grid-cols-2 gap-4">
                                  <Link to="/career-search?q=INDUSTRIAL&filter=recommended" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-all text-center block hover:bg-slate-800 group">
                                     <span className="text-slate-300 hover:text-white block font-medium group-hover:text-purple-300 transition-colors">Ingeniería Industrial</span>
                                     <span className="text-xs text-slate-500 mt-1 block">89% Match</span>
                                  </Link>
                                  <Link to="/career-search?q=NEGOCIOS&filter=recommended" className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-all text-center block hover:bg-slate-800 group">
                                     <span className="text-slate-300 hover:text-white block font-medium group-hover:text-purple-300 transition-colors">Negocios Internacionales</span>
                                     <span className="text-xs text-slate-500 mt-1 block">88% Match</span>
                                  </Link>
                               </div>
                            </div>
                         </div>
                         
                         <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                            <button 
                              onClick={() => { setHasResult(false); setCandidateName("Candidato"); }} 
                              className="text-sm text-slate-500 hover:text-green-400 underline transition-colors"
                            >
                              ← Subir un nuevo reporte
                            </button>
                         </div>
                      </div>
                   </div>
                 )}
              </div>
           </div>
        </div>

        {/* 6. Testimonials Section */}
        <div className="mt-20 border-t border-slate-800 pt-16">
           <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-2">Historias de Impacto</h2>
              <p className="text-slate-400">Lo que dicen las familias que ya encontraron su origen.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 relative">
                 <Quote className="w-8 h-8 text-green-500/20 absolute top-4 right-4" />
                 <p className="text-slate-300 text-sm italic mb-4">"Mi hijo estaba perdido entre tres carreras totalmente distintas. El diagnóstico Indigo le dio una claridad impresionante sobre sus talentos naturales. Ahora estudia Ingeniería con una motivación que no le había visto antes."</p>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-900 rounded-full flex items-center justify-center font-bold text-white text-xs">MA</div>
                    <div>
                       <p className="text-white text-xs font-bold">María Augusta</p>
                       <p className="text-slate-500 text-[10px]">Madre de Familia, Quito</p>
                    </div>
                 </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 relative">
                 <Quote className="w-8 h-8 text-green-500/20 absolute top-4 right-4" />
                 <p className="text-slate-300 text-sm italic mb-4">"Pensé que la orientación vocacional era solo llenar un test online. Future3D fue una experiencia completa. Me ayudaron a entender no solo qué estudiar, sino dónde y por qué. El proceso de admisión fue súper fácil con su ayuda."</p>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center font-bold text-white text-xs">JS</div>
                    <div>
                       <p className="text-white text-xs font-bold">Juan Sebastián</p>
                       <p className="text-slate-500 text-[10px]">Estudiante de 1ero Semestre</p>
                    </div>
                 </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 relative">
                 <Quote className="w-8 h-8 text-green-500/20 absolute top-4 right-4" />
                 <p className="text-slate-300 text-sm italic mb-4">"Como colegio, integrar Edutalent nos permitió elevar el nivel de nuestro departamento de consejería. Los reportes grupales nos dieron datos reales para mejorar nuestra malla curricular."</p>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center font-bold text-white text-xs">DIR</div>
                    <div>
                       <p className="text-white text-xs font-bold">Dirección Académica</p>
                       <p className="text-slate-500 text-[10px]">Colegio Partner en Cumbayá</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
      
      <div className="py-10 text-center">
        <Link to="/" className="text-slate-400 hover:text-white transition">← Volver al inicio</Link>
      </div>
    </div>
  );
};

export default FutureTalent;