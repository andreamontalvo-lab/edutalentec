import React from 'react';
import { Building2, Globe, Briefcase, Users, GraduationCap, ArrowRight, Laptop, FileCheck, BarChart3, Presentation, FlaskConical, Languages, Plane, Award, Puzzle, School, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const CorporateTalent: React.FC = () => {
  return (
    <div className="min-h-screen animate-fade-in bg-slate-900">
      {/* Header microsite - Turquoise/Celeste Theme */}
      <div className="bg-gradient-to-br from-cyan-600 via-sky-700 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-cyan-400/20 relative overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-cyan-300/30">
              <Building2 className="w-10 h-10 text-cyan-300" />
            </div>
            <span className="text-cyan-200 font-bold tracking-wider uppercase">La Estrategia</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Talento, Cultura y Cumplimiento.
          </h1>
          <p className="text-xl text-sky-100 max-w-3xl font-light">
            Edutalent es el aliado estratégico que trae la mejor formación global de <strong>Planeta Formación y Universidades</strong> y asegura la reconversión profesional que exige la automatización y la IA.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid lg:grid-cols-1 gap-8">
          
          {/* Identity & University Services */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl relative overflow-hidden mb-8">
             <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl -z-10"></div>
             <div className="grid md:grid-cols-2 gap-12">
                <div>
                   <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <Briefcase className="w-6 h-6 text-cyan-400" /> Soluciones Corporativas
                   </h2>
                   <p className="text-slate-300 text-lg leading-relaxed">
                      <strong>Corporate Talent es el puente estratégico</strong> entre la demanda empresarial y la oferta académica de clase mundial de Planeta Formación y Universidades. Actuamos como arquitectos de soluciones educativas que impulsan la competitividad organizacional y la adaptación al cambio.
                   </p>
                </div>
                <div>
                   <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <School className="w-6 h-6 text-sky-400" /> Servicios para Universidades
                   </h2>
                   <p className="text-slate-300 text-lg leading-relaxed">
                      Atendemos a universidades con <strong>proyectos de internacionalización</strong>. Somos el puente que conecta su oferta académica con nuevos mercados, facilitando la expansión global y la conexión con el tejido empresarial local para sus programas de grado y posgrado.
                   </p>
                </div>
             </div>
          </div>

          {/* Portfolio B2B Section */}
          <div className="mb-12">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white">Portfolio B2B</h2>
                <p className="text-sky-200/80 mt-2">Soluciones integrales para el desarrollo corporativo</p>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Item 1 */}
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:-translate-y-1 group">
                   <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4 text-cyan-400 group-hover:text-cyan-300">
                      <Puzzle className="w-7 h-7" />
                   </div>
                   <h3 className="text-white font-bold text-lg mb-2">Cursos Experto</h3>
                   <p className="text-slate-400 text-sm">Adquisición de conocimientos prácticos para el dominio de un proceso concreto de la empresa.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:-translate-y-1 group">
                   <div className="w-12 h-12 bg-sky-900/30 rounded-lg flex items-center justify-center mb-4 text-sky-400 group-hover:text-sky-300">
                      <Presentation className="w-7 h-7" />
                   </div>
                   <h3 className="text-white font-bold text-lg mb-2">Conferencias</h3>
                   <p className="text-slate-400 text-sm">Ponencias virtuales con referentes internacionales sobre tendencias del S.XXI aplicados al sector empresarial.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:-translate-y-1 group">
                   <div className="w-12 h-12 bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4 text-yellow-400 group-hover:text-yellow-300">
                      <FlaskConical className="w-7 h-7" />
                   </div>
                   <h3 className="text-white font-bold text-lg mb-2">Laboratorios</h3>
                   <p className="text-slate-400 text-sm">Acompañamiento integral para el desarrollo de un proyecto, producto, proceso o servicio.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:-translate-y-1 group">
                   <div className="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 text-orange-400 group-hover:text-orange-300">
                      <GraduationCap className="w-7 h-7" />
                   </div>
                   <h3 className="text-white font-bold text-lg mb-2">Diplomados</h3>
                   <p className="text-slate-400 text-sm">Conocimientos y habilidades prácticas especializadas para el dominio de una industria concreta.</p>
                </div>

                {/* Item 5 */}
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:-translate-y-1 group">
                   <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-4 text-red-400 group-hover:text-red-300">
                      <Plane className="w-7 h-7" />
                   </div>
                   <h3 className="text-white font-bold text-lg mb-2">Misiones Internacionales</h3>
                   <p className="text-slate-400 text-sm">Inmersión Internacional de una semana de duración para el conocimiento y networking de una industria concreta.</p>
                </div>

                {/* Item 6 */}
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:-translate-y-1 group">
                   <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 text-purple-400 group-hover:text-purple-300">
                      <Languages className="w-7 h-7" />
                   </div>
                   <h3 className="text-white font-bold text-lg mb-2">Formación en Idiomas</h3>
                   <p className="text-slate-400 text-sm">Programas bilingües individualizados en múltiples idiomas con niveles de aprendizaje y acompañamiento permanente.</p>
                </div>

                {/* Item 7 */}
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all hover:-translate-y-1 group md:col-span-2">
                   <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4 text-indigo-400 group-hover:text-indigo-300">
                      <Award className="w-7 h-7" />
                   </div>
                   <h3 className="text-white font-bold text-lg mb-2">Programas Certificados</h3>
                   <p className="text-slate-400 text-sm">Formación para certificaciones internacionales y programas certificados por empresas internacionales.</p>
                </div>
             </div>
          </div>

          {/* LEVEL 40+ Program Section (Maintained) */}
          <div className="bg-gradient-to-r from-cyan-900/40 to-sky-900/40 rounded-2xl p-1 border-2 border-cyan-400/50 overflow-hidden shadow-lg shadow-cyan-500/10 mb-8">
              <div className="bg-slate-900/95 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                      <div>
                          <div className="flex items-center gap-2 mb-2">
                              <span className="bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded">NUEVO</span>
                              <span className="text-cyan-400 text-xs font-bold tracking-wide">NORMATIVA 2025</span>
                          </div>
                          <h3 className="text-3xl font-bold text-white">LEVEL 40+</h3>
                          <p className="text-lg text-slate-400 mt-1">
                              Las 40 horas que te llevan más lejos.
                          </p>
                      </div>
                      <div className="text-right">
                         <div className="text-sm text-slate-500 font-medium">by Edutalent x ICAL</div>
                      </div>
                  </div>

                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mb-8">
                      <h4 className="text-xl font-bold text-cyan-300 mb-2">Cumple la norma del MDT-2025-006</h4>
                      <p className="text-slate-300">
                           Y transforma tu cultura. LEVEL 40+ es el programa para cumplir la normativa y fortalecer una cultura de respeto e igualdad.
                      </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700/50">
                          <Laptop className="w-5 h-5 text-cyan-400" />
                          <span className="text-sm text-white">100% Virtual</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700/50">
                          <FileCheck className="w-5 h-5 text-cyan-400" />
                          <span className="text-sm text-white">Certificación ICAL</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700/50">
                          <BarChart3 className="w-5 h-5 text-cyan-400" />
                          <span className="text-sm text-white">Reporte y Trazabilidad</span>
                      </div>
                  </div>

                  {/* Pricing Table */}
                  <div className="overflow-x-auto rounded-lg border border-slate-700">
                      <table className="w-full text-sm text-left">
                          <thead className="text-xs text-cyan-200 uppercase bg-cyan-900/40">
                              <tr>
                                  <th className="px-6 py-3">Rango de empleados</th>
                                  <th className="px-6 py-3 text-right">Valor por participante</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-700">
                              <tr className="bg-slate-800/50 hover:bg-slate-800/80 transition-colors">
                                  <td className="px-6 py-4 font-medium text-slate-300">1 a 10 empleados</td>
                                  <td className="px-6 py-4 text-right text-white font-bold">$170</td>
                              </tr>
                              <tr className="bg-slate-800 hover:bg-slate-750 transition-colors">
                                  <td className="px-6 py-4 font-medium text-slate-300">11 a 50 empleados</td>
                                  <td className="px-6 py-4 text-right text-white font-bold">$340</td>
                              </tr>
                              <tr className="bg-slate-800/50 hover:bg-slate-800/80 transition-colors">
                                  <td className="px-6 py-4 font-medium text-slate-300">51 a 100 empleados</td>
                                  <td className="px-6 py-4 text-right text-white font-bold">$570</td>
                              </tr>
                              <tr className="bg-slate-800 hover:bg-slate-750 transition-colors">
                                  <td className="px-6 py-4 font-medium text-slate-300">101 a 300 empleados</td>
                                  <td className="px-6 py-4 text-right text-white font-bold">$900</td>
                              </tr>
                              <tr className="bg-slate-800/50 hover:bg-slate-800/80 transition-colors">
                                  <td className="px-6 py-4 font-medium text-slate-300">301 a 500 empleados</td>
                                  <td className="px-6 py-4 text-right text-white font-bold">$1.300</td>
                              </tr>
                              <tr className="bg-slate-800 hover:bg-slate-750 transition-colors">
                                  <td className="px-6 py-4 font-medium text-slate-300">De 501 en adelante</td>
                                  <td className="px-6 py-4 text-right text-white font-bold">$2.800</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                       <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <span className="block w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                          Fecha de inicio: 15 de noviembre 2025
                       </div>
                       <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition shadow-lg shadow-cyan-500/20 flex items-center gap-2">
                          Inscribir Empresa <ArrowRight className="w-4 h-4" />
                       </button>
                  </div>
              </div>
          </div>

          <div className="space-y-6">
             <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Roles de Ejecución</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="bg-cyan-500/20 p-1.5 rounded h-fit mt-0.5"><Users className="w-4 h-4 text-cyan-400"/></div>
                  <div>
                      <span className="block text-white text-sm font-semibold">Dirección y Alto Impacto</span>
                      <span className="text-slate-400 text-xs">Cierre B2B y Alianzas Planeta Formación y Universidades.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="bg-cyan-500/20 p-1.5 rounded h-fit mt-0.5"><Briefcase className="w-4 h-4 text-cyan-400"/></div>
                  <div>
                      <span className="block text-white text-sm font-semibold">Comercial y Operaciones</span>
                      <span className="text-slate-400 text-xs">Gestión de Contratos y Logística.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="bg-cyan-500/20 p-1.5 rounded h-fit mt-0.5"><Users className="w-4 h-4 text-cyan-400"/></div>
                  <div>
                      <span className="block text-white text-sm font-semibold">Community B2B</span>
                      <span className="text-slate-400 text-xs">Webinars y White Papers.</span>
                  </div>
                </li>
              </ul>
            </div>

             <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-cyan-400/5"></div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Potencia tu Organización</h3>
              <p className="text-slate-400 text-sm mb-6 relative z-10">Diseñemos juntos la estrategia de talento que tu empresa necesita.</p>
              <a 
                href="https://wa.me/593939691733?text=Hola,%20quisiera%20agendar%20una%20reunión%20estratégica%20para%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors font-medium relative z-10 border border-cyan-400/50 shadow-lg shadow-cyan-500/20 flex items-center justify-center"
              >
                Agendar Reunión
              </a>
            </div>
          </div>
          
          {/* Testimonials Section */}
          <div className="mb-8 mt-12 border-t border-slate-700 pt-16">
             <h3 className="text-2xl font-bold text-white mb-8 text-center">Empresas Transformadas</h3>
             <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative">
                   <Quote className="w-6 h-6 text-cyan-500/20 absolute top-4 right-4" />
                   <p className="text-slate-300 text-sm italic mb-4">"LEVEL 40+ no fue solo un curso de cumplimiento. Transformó realmente cómo nuestros líderes entienden el acoso y la discriminación. La cultura cambió."</p>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-900 rounded-full flex items-center justify-center font-bold text-white text-xs">TH</div>
                      <div>
                         <p className="text-white text-xs font-bold">Gerente Talento Humano</p>
                         <p className="text-slate-500 text-[10px]">Multinacional Retail</p>
                      </div>
                   </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative">
                   <Quote className="w-6 h-6 text-cyan-500/20 absolute top-4 right-4" />
                   <p className="text-slate-300 text-sm italic mb-4">"Edutalent diseñó nuestra Academia Corporativa desde cero. Ahora tenemos rutas de aprendizaje claras y nuestra retención de talento clave aumentó un 20%."</p>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-sky-900 rounded-full flex items-center justify-center font-bold text-white text-xs">VP</div>
                      <div>
                         <p className="text-white text-xs font-bold">VP de Personas</p>
                         <p className="text-slate-500 text-[10px]">Sector Banca</p>
                      </div>
                   </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative">
                   <Quote className="w-6 h-6 text-cyan-500/20 absolute top-4 right-4" />
                   <p className="text-slate-300 text-sm italic mb-4">"Las misiones internacionales nos abrieron la mente. Conectar con empresas de Europa nos dio la visión para nuestra transformación digital."</p>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-900 rounded-full flex items-center justify-center font-bold text-white text-xs">CEO</div>
                      <div>
                         <p className="text-white text-xs font-bold">Director General</p>
                         <p className="text-slate-500 text-[10px]">Empresa de Tecnología</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      <div className="py-20 text-center">
        <Link to="/" className="text-slate-400 hover:text-white transition">← Volver al inicio</Link>
      </div>
    </div>
  );
};

export default CorporateTalent;