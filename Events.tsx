import React, { useState } from 'react';
import { Calendar, MapPin, Users, Star, Clock, ArrowRight, Building2, UserCheck, Mic2, Music, Search, Filter, Sparkles, Briefcase, GraduationCap, HeartHandshake } from 'lucide-react';

// --- COMPONENT: HR Transformation Nights ---
const HRNightsEvent: React.FC = () => {
  return (
    <div className="group relative bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
         {/* Decoration */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 transition-colors group-hover:bg-cyan-500/20"></div>
         
         <div className="grid lg:grid-cols-2">
             <div className="p-8 md:p-12 flex flex-col justify-center">
                 <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                       <span className="bg-cyan-900/50 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full border border-cyan-500/30 uppercase tracking-wide">
                          Networking
                       </span>
                       <span className="bg-slate-700 text-slate-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          Exclusivo
                       </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-1">HR Transformation <span className="text-cyan-400">Nights</span></h3>
                    <p className="text-slate-400 text-lg mt-4">
                       Conversaciones que transforman la cultura. Un espacio curado para líderes de Gestión Humana.
                    </p>
                 </div>

                 <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4">
                       <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-700">
                          <Calendar className="w-5 h-5 text-cyan-400" />
                       </div>
                       <div>
                          <p className="text-slate-400 text-xs uppercase font-bold">Fecha</p>
                          <p className="text-white font-medium">2 de Febrero, 2026</p>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                       <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-700">
                          <MapPin className="w-5 h-5 text-cyan-400" />
                       </div>
                       <div>
                          <p className="text-slate-400 text-xs uppercase font-bold">Lugar</p>
                          <p className="text-white font-medium">QPH, Quito</p>
                       </div>
                    </div>
                 </div>

                 <button className="w-fit px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-900/20 flex items-center gap-2">
                    Solicitar Invitación <ArrowRight className="w-4 h-4" />
                 </button>
             </div>

             <div className="bg-slate-900/50 p-8 md:p-12 border-l border-slate-700/50 flex flex-col justify-center">
                  <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                     <Sparkles className="w-5 h-5 text-cyan-400" /> Highlights
                  </h4>
                  <ul className="space-y-6">
                     <li className="flex gap-4">
                        <div className="mt-1 bg-cyan-500/20 p-1.5 rounded h-fit">
                           <Users className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                           <h5 className="text-white font-semibold">Mesa Redonda Ejecutiva</h5>
                           <p className="text-sm text-slate-400 mt-1">Sin teoría. Solo experiencias reales (éxitos y fracasos) compartidas por VPs de RRHH.</p>
                        </div>
                     </li>
                     <li className="flex gap-4">
                        <div className="mt-1 bg-cyan-500/20 p-1.5 rounded h-fit">
                           <Briefcase className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                           <h5 className="text-white font-semibold">Temáticas de Impacto</h5>
                           <p className="text-sm text-slate-400 mt-1">Implementación de IA en procesos de selección y nuevas dinámicas de fidelización.</p>
                        </div>
                     </li>
                  </ul>
             </div>
         </div>
    </div>
  );
};

// --- COMPONENT: Inspira Summit (Full Block) ---
const InspiraSummitEvent: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative">
      
      {/* 1. Hero Section */}
      <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 hover:scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/80 mix-blend-multiply"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
           <span className="inline-block py-1 px-3 rounded-full bg-yellow-400 text-purple-900 text-xs font-bold mb-4 uppercase tracking-wider">
            Edutalent Presenta
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter drop-shadow-2xl">
            INSPiRA
          </h2>
          <p className="text-xl md:text-2xl text-yellow-400 font-light tracking-[0.3em] uppercase mb-8">
            Summit 2026
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-black/30 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 flex items-center gap-3 text-white">
              <Calendar className="w-5 h-5 text-yellow-400" />
              <div className="text-left leading-tight">
                <p className="text-[10px] text-slate-300 uppercase">Fecha</p>
                <p className="font-bold text-sm">3 de Marzo</p>
              </div>
            </div>
            <div className="bg-black/30 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 flex items-center gap-3 text-white">
              <MapPin className="w-5 h-5 text-yellow-400" />
              <div className="text-left leading-tight">
                <p className="text-[10px] text-slate-300 uppercase">Lugar</p>
                <p className="font-bold text-sm">Casa de la Música</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Content Body */}
      <div className="p-8 md:p-12">
         {/* Purpose */}
         <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">El primer punto de encuentro entre el Futuro y la Realidad Laboral.</h3>
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              INSPIRA SUMMIT nace para romper el molde de las ferias vocacionales. Es el <strong>primer espacio estratégico del Ecuador</strong> donde <span className="text-white font-bold">Empresas Líderes, Instituciones de Educación Superior y Jóvenes Talentos</span> se sientan a la misma mesa.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              No convocamos solo a estudiantes; convocamos al ecosistema completo. Creamos el lugar donde las organizaciones posicionan su marca empleadora ante su futura fuerza laboral, y donde las universidades conectan su oferta con la demanda real del mercado. Es donde la inspiración deja de ser abstracta para convertirse en rutas de carrera tangibles.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                {/* Cards for each stakeholder */}
                <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700/50 hover:border-yellow-500/30 transition-colors">
                    <div className="text-yellow-400 font-bold mb-2 flex items-center gap-2"><Briefcase className="w-4 h-4"/> Empresas</div>
                    <p className="text-slate-400 text-sm">Posicionamiento de marca empleadora, reputación y conexión temprana con talento.</p>
                </div>
                 <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-colors">
                    <div className="text-purple-400 font-bold mb-2 flex items-center gap-2"><GraduationCap className="w-4 h-4"/> Universidades</div>
                    <p className="text-slate-400 text-sm">Visibilidad estratégica y vinculación directa con estudiantes de colegios premium.</p>
                </div>
                 <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                    <div className="text-blue-400 font-bold mb-2 flex items-center gap-2"><Users className="w-4 h-4"/> Jóvenes</div>
                    <p className="text-slate-400 text-sm">Orientación real basada en el mercado, networking y descubrimiento de propósito.</p>
                </div>
            </div>

            {/* FREE FOR STUDENTS BLOCK */}
            <div className="bg-gradient-to-r from-emerald-900/40 to-slate-900 border border-emerald-500/30 rounded-xl p-6 relative overflow-hidden shadow-lg shadow-emerald-900/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-400" /> 
                    Acceso Gratuito & Test Indigo Incluido
                  </h4>
                  <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                    Gracias al patrocinio del ecosistema (empresas y universidades), la entrada es <strong>100% gratuita para los colegios</strong>. 
                    Además, las instituciones inscritas recibirán cupos del <strong className="text-emerald-400">Test Indigo</strong> patrocinado para que sus estudiantes descubran sus talentos reales antes del evento.
                  </p>
                </div>
                <a 
                  href="mailto:info@edutalent.com.ec?subject=Inscripción%20Colegio%20Inspira%20Summit"
                  className="whitespace-nowrap bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/30 flex items-center gap-2 transform hover:scale-105"
                >
                  Inscribir Colegio <ArrowRight className="w-4 h-4"/>
                </a>
              </div>
            </div>
         </div>

         {/* Agenda */}
         <div className="mb-12">
            <h4 className="text-lg font-bold text-white mb-6 border-l-4 border-yellow-400 pl-3">Agenda: Inspira Summit</h4>
            <div className="space-y-3">
               {[
                 { time: "08:30", title: "Bienvenida & Check-in", icon: <UserCheck className="w-4 h-4 text-green-400"/> },
                 { time: "09:00", title: "Apertura Oficial", icon: <Mic2 className="w-4 h-4 text-purple-400"/> },
                 { time: "09:40", title: "Inspira Talks (Empresas Gold)", icon: <Star className="w-4 h-4 text-yellow-400"/> },
                 { time: "10:30", title: "Coffee Break + Feria de Stands", icon: <Users className="w-4 h-4 text-blue-400"/> },
                 { time: "12:20", title: "Talk Show (Platinum + Gold)", icon: <Star className="w-4 h-4 text-yellow-400"/> },
                 { time: "15:00", title: "Pitch Challenge", icon: <ArrowRight className="w-4 h-4 text-orange-400"/> },
                 { time: "15:40", title: "Cierre Musical + Premiación", icon: <Music className="w-4 h-4 text-pink-400"/> },
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700/50">
                   <div className="w-16 font-mono text-purple-300 font-bold text-sm">{item.time}</div>
                   <div className="bg-slate-800 p-1.5 rounded">{item.icon}</div>
                   <div className="text-slate-200 text-sm font-medium">{item.title}</div>
                 </div>
               ))}
            </div>
         </div>

         {/* 3. Auspicios Section - "Join the Movement" */}
         <div className="bg-gradient-to-br from-purple-900/30 to-slate-900 rounded-2xl p-8 border border-purple-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
               <div>
                  <h4 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                     <HeartHandshake className="w-6 h-6 text-purple-400" /> Únete al Movimiento
                  </h4>
                  <p className="text-slate-300 text-sm max-w-lg leading-relaxed">
                     ¿Tu empresa o universidad quiere ser parte del cambio? Auspicia el evento y permite que más jóvenes accedan a herramientas de futuro como el Test Indigo. Sé parte del ecosistema que impulsa el talento del Ecuador.
                  </p>
               </div>
               <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <a 
                    href="mailto:info@edutalent.com.ec?subject=Interés%20Auspicio%20Inspira%20Summit" 
                    className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-purple-900/40 text-sm transform hover:scale-105"
                  >
                    Quiero ser Auspiciante <Building2 className="w-4 h-4"/>
                  </a>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
};

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', 'Summit', 'Networking', 'Corporativo'];

  const events = [
    {
      id: 'inspira',
      title: 'Inspira Summit',
      category: 'Summit',
      date: '3 de Marzo, 2026',
      location: 'Casa de la Música, Quito',
      tags: ['jovenes', 'colegios', 'universidad', 'feria'],
      component: <InspiraSummitEvent />
    },
    {
      id: 'hr-nights',
      title: 'HR Transformation Nights',
      category: 'Networking',
      date: '2 de Febrero, 2026',
      location: 'QPH, Quito',
      tags: ['rrhh', 'lideres', 'corporate', 'talento humano'],
      component: <HRNightsEvent />
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === 'Todos' || event.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-900 animate-fade-in pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid lg:grid-cols-4 gap-8 items-start">
          
          {/* LEFT SIDEBAR - SEARCH & FILTER */}
          <div className="lg:col-span-1 sticky top-24 bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl z-30">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Eventos</h1>
              <p className="text-slate-400 text-sm">Explora nuestra agenda de experiencias.</p>
            </div>

            {/* Search Input */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Buscar evento..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:border-orange-500 transition-colors placeholder-slate-600"
              />
            </div>

            {/* Category Filters */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                <Filter className="w-3 h-3" /> Categorías
              </div>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex justify-between items-center group ${
                    activeCategory === cat 
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/20' 
                      : 'bg-slate-800/50 text-slate-400 hover:bg-slate-750 hover:text-white'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                </button>
              ))}
            </div>

            {/* Mini Calendar Widget (Visual only) */}
            <div className="mt-8 pt-8 border-t border-slate-700">
               <h3 className="text-white font-bold text-sm mb-4">Próximos Meses</h3>
               <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-slate-700/50 rounded p-2 text-slate-400">Ene</div>
                  <div className="bg-cyan-900/30 rounded p-2 text-cyan-400 border border-cyan-500/30">Feb</div>
                  <div className="bg-purple-900/30 rounded p-2 text-purple-400 border border-purple-500/30">Mar</div>
               </div>
            </div>
          </div>

          {/* RIGHT CONTENT - EVENTS LIST */}
          <div className="lg:col-span-3 space-y-12">
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <div key={event.id} className="animate-fade-in-up">
                  {event.component}
                </div>
              ))
            ) : (
              <div className="bg-slate-800 rounded-2xl p-12 text-center border border-slate-700 border-dashed">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No se encontraron eventos</h3>
                <p className="text-slate-400">Intenta cambiar los filtros de búsqueda.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setActiveCategory('Todos');}}
                  className="mt-6 text-orange-400 font-medium hover:text-orange-300 transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Events;