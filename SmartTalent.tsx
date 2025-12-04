import React from 'react';
import { BrainCircuit, TrendingUp, Award, CheckCircle, ArrowRight, Quote, FileText, UserCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmartTalent: React.FC = () => {
  return (
    <div className="min-h-screen animate-fade-in bg-slate-900">
      {/* Header microsite - Orange/Yellow Theme */}
      <div className="bg-gradient-to-br from-orange-600 to-yellow-600 pt-20 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* CTA Questions Hook */}
          <div className="flex flex-col items-center gap-4 mb-10 animate-fade-in-up">
             <p className="text-yellow-100 text-lg font-medium opacity-90">Porque sabemos que te preguntas:</p>
             <div className="flex flex-wrap justify-center gap-3">
                <div className="px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white text-lg font-bold backdrop-blur-md shadow-lg">
                   ¿Qué sigue?
                </div>
                <div className="px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white text-lg font-bold backdrop-blur-md shadow-lg">
                   ¿Hago una maestría?
                </div>
                <div className="px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white text-lg font-bold backdrop-blur-md shadow-lg">
                   ¿Es muy tarde para estudiar una carrera?
                </div>
             </div>
          </div>

          <div className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-yellow-200/20">
            <BrainCircuit className="w-5 h-5 text-yellow-200" />
            <span className="text-yellow-100 font-bold tracking-wider uppercase text-sm">La Nueva Era</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Evolución Estratégica para la Nueva Era Profesional.
          </h1>
          <p className="text-xl md:text-2xl text-yellow-50 max-w-3xl mx-auto font-light mb-12">
            "El mercado cambió. Tu estrategia también debe hacerlo. Diseñamos la ruta que te mantiene relevante y competitivo."
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="space-y-8">
            {/* What is Smart Talent Section */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-6">¿Qué es Smart Talent?</h2>
              <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-lg leading-relaxed">
                <p>
                  Smart Talent es la línea de inteligencia educativa diseñada exclusivamente para <span className="text-orange-400 font-semibold">profesionales en evolución</span>. Nos dedicamos a transformar la confusión de la mediana carrera en un plan de acción certero.
                </p>
                <p>
                  No vendemos cursos; diseñamos tu <strong>Mapa Estratégico de Reskilling</strong>. Conectamos tus habilidades actuales con la demanda real del mercado laboral y la oferta académica de alto nivel (PFU), asegurando que cada dólar y hora que inviertas en tu formación se traduzca directamente en empleabilidad y relevancia.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 bg-orange-500/20 rounded-lg"><TrendingUp className="w-6 h-6 text-orange-500" /></div>
                     <h4 className="text-white font-bold">Target Prioritario</h4>
                  </div>
                  <p className="text-slate-400 text-sm">Profesionales (25-60 años) con capacidad de inversión que buscan un giro de carrera significativo.</p>
                </div>
                <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 bg-yellow-500/20 rounded-lg"><Award className="w-6 h-6 text-yellow-500" /></div>
                     <h4 className="text-white font-bold">Metodología PLAN SMART</h4>
                  </div>
                  <p className="text-slate-400 text-sm">Su valor no está en la cantidad de sesiones, sino en la calidad estratégica de la conexión (El Puente).</p>
                </div>
              </div>
            </div>

            {/* Pricing / Packages Section */}
            <div className="space-y-6">
               <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                  <div className="h-8 w-1.5 bg-orange-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-white">Elige tu Estrategia</h3>
               </div>
               
               <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* NEW SERVICE: Smart Step (Graduados/Inicio) */}
                  <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 relative hover:border-yellow-500/50 transition-colors flex flex-col shadow-lg">
                    <div className="mb-4">
                        <div className="inline-block bg-yellow-500/10 text-yellow-400 text-xs font-bold px-2 py-1 rounded mb-2 border border-yellow-500/20">NUEVO SERVICIO</div>
                        <h4 className="text-xl font-bold text-white">Smart Step: El Despegue</h4>
                        <p className="text-slate-400 text-sm mt-2">
                          ¿Te graduaste y buscas tu siguiente paso? Trazamos el plan y armamos tus herramientas.
                        </p>
                    </div>
                    <div className="mb-6 flex items-baseline">
                      <span className="text-4xl font-bold text-white">$100</span>
                      <span className="text-slate-500 text-xs ml-2">USD + IVA</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1">
                      <li className="flex items-start gap-3 text-slate-300 text-sm">
                        <div className="bg-slate-900 p-1 rounded"><BrainCircuit className="w-3 h-3 text-yellow-500" /></div>
                        <span><strong>Diagnóstico Indigo:</strong> Autoconocimiento real para enfocar tu búsqueda.</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-300 text-sm">
                        <div className="bg-slate-900 p-1 rounded"><FileText className="w-3 h-3 text-yellow-500" /></div>
                        <span><strong>Armado de CV:</strong> Estructura de alto impacto y ATS friendly.</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-300 text-sm">
                        <div className="bg-slate-900 p-1 rounded"><UserCircle className="w-3 h-3 text-yellow-500" /></div>
                        <span><strong>Perfil Digital:</strong> Creación de tu marca profesional en LinkedIn.</span>
                      </li>
                    </ul>
                    <button className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold transition flex items-center justify-center gap-2 text-sm">
                      Iniciar mi Despegue
                    </button>
                  </div>

                  {/* Smart Ruta (Reinvención) */}
                  <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border-2 border-orange-500 p-6 relative overflow-hidden shadow-2xl flex flex-col transform md:-translate-y-2">
                    <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide">
                       Recomendado
                    </div>
                    <div className="mb-4">
                        <h4 className="text-xl font-bold text-white">Smart Ruta: Estrategia</h4>
                        <p className="text-orange-200 text-sm mt-2 font-medium">
                          Para profesionales que buscan reinvención y posgrado.
                        </p>
                    </div>
                    <div className="mb-6 flex items-baseline">
                      <span className="text-4xl font-bold text-white">$100</span>
                      <span className="text-slate-500 text-xs ml-2">USD + IVA</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1">
                      <li className="flex items-start gap-3 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> 
                        <span><strong>Diagnóstico Indigo + Feedback:</strong> Análisis profundo de competencias.</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> 
                        <span><strong>Mapa de Reskilling:</strong> Ruta exacta de qué estudiar (Maestría/Diplomado).</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> 
                        <span><strong>Conexión PFU:</strong> Acceso a universidades aliadas internacionales.</span>
                      </li>
                    </ul>
                    <button className="w-full py-3 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-white rounded-xl font-bold transition shadow-lg shadow-orange-900/30 flex items-center justify-center gap-2 text-sm">
                      Comprar Ruta <ArrowRight className="w-4 h-4"/>
                    </button>
                  </div>

               </div>
            </div>

            {/* Testimonials Section */}
            <div className="mt-8 border-t border-slate-700 pt-8">
               <h3 className="text-xl font-bold text-white mb-6 text-center">Testimonios de Reinvención</h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 relative">
                     <Quote className="w-6 h-6 text-orange-500/20 absolute top-4 right-4" />
                     <p className="text-slate-300 text-sm italic mb-4">"A mis 35 años sentía que mi carrera en marketing estaba obsoleta. El diagnóstico Indigo me mostró que mi fortaleza real era el análisis de datos. Smart Talent me guió hacia un Master en Big Data que cambió mi trayectoria salarial."</p>
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-900 rounded-full flex items-center justify-center font-bold text-white text-xs">CR</div>
                        <div>
                           <p className="text-white text-xs font-bold">Carlos R.</p>
                           <p className="text-slate-500 text-[10px]">Gerente de Data</p>
                        </div>
                     </div>
                  </div>
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 relative">
                     <Quote className="w-6 h-6 text-orange-500/20 absolute top-4 right-4" />
                     <p className="text-slate-300 text-sm italic mb-4">"Estaba por pagar una maestría carísima solo por tener el título. Edutalent me hizo ver que lo que necesitaba era certificaciones ágiles en gestión de proyectos. Me ahorré miles de dólares y conseguí el ascenso más rápido."</p>
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-yellow-900 rounded-full flex items-center justify-center font-bold text-white text-xs">LN</div>
                        <div>
                           <p className="text-white text-xs font-bold">Lorena N.</p>
                           <p className="text-slate-500 text-[10px]">Project Manager</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

        </div>
      </div>
      
      <div className="py-20 text-center">
        <Link to="/" className="text-slate-400 hover:text-white transition flex items-center justify-center gap-2">
           <ArrowRight className="w-4 h-4 rotate-180" /> Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default SmartTalent;