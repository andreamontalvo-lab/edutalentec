import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Rocket, 
  Briefcase, 
  Building2, 
  ArrowRight, 
  Search, 
  Map, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Target,
  BrainCircuit,
  Globe2,
  Cpu,
  GraduationCap,
  Quote,
  Linkedin,
  Instagram,
  Facebook
} from 'lucide-react';
import { mockCareers } from '../data/careers';
import EventPopup from '../components/EventPopup';

// Simple TikTok Icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/career-search');
  };

  return (
    <div className="animate-fade-in bg-slate-900 min-h-screen">
      <EventPopup />
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
        
        {/* Background Icons */}
        <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-5 pointer-events-none select-none">
           <div className="flex gap-4 md:gap-12 transform scale-125 md:scale-150">
              <Rocket className="w-48 h-48 md:w-64 md:h-64 text-purple-500" />
              <BrainCircuit className="w-48 h-48 md:w-64 md:h-64 text-orange-500" />
              <Building2 className="w-48 h-48 md:w-64 md:h-64 text-cyan-500" />
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-sm font-medium mb-6">
            Inteligencia Educativa
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Formación con propósito. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
              Talento con futuro.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Aprender impulsa. Conectar proyecta. Potenciamos a personas, empresas y universidades para adaptarse y crecer en un mundo donde el trabajo se reinventa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/blog"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 transition-colors shadow-lg shadow-orange-900/20"
            >
              Explorar Blog
            </Link>
            <a 
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Nuestras Líneas
            </a>
          </div>
        </div>
      </section>

      {/* 2. Purpose & Philosophy Section */}
      <section className="py-20 border-b border-slate-800 relative overflow-hidden bg-transparent">
         <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10 -translate-y-1/2"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

           {/* Main Narrative */}
           <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Nuestro Propósito</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed text-justify md:text-center font-light">
                 <p>
                    Impulsar el desarrollo humano y profesional en Ecuador y la región a través de decisiones formativas inteligentes, accesibles y conectadas con las necesidades reales del mercado, la tecnología y la vida.
                 </p>
                 <p>
                    Edutalent existe para impulsar una nueva cultura de aprendizaje adaptativo: una cultura donde las personas se forman con propósito, las empresas evolucionan con conocimiento y las universidades se conectan con la realidad del futuro del trabajo.
                 </p>
                 <p>
                    Creemos que la educación no es un fin, sino una fuerza viva de transformación y protección frente a la obsolescencia. Formarse es parte de construir, de crecer, de reinventarse y de evolucionar con sentido.
                 </p>
                 <p>
                    Por eso, Edutalent combina educación, inteligencia del talento y experiencia real para que las personas y organizaciones diseñen su propio futuro en un entorno donde el trabajo muta.
                 </p>
              </div>
              
              <div className="mt-10">
                 <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                    "Aprender con inteligencia. Crecer con propósito."
                 </span>
              </div>
           </div>

           {/* Pillars Grid */}
           <div className="grid md:grid-cols-2 gap-8">
              
              {/* Card 1: Why & Belief */}
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/30 transition-colors">
                 <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                       <Lightbulb className="w-6 h-6 text-yellow-400" /> Por qué hacemos lo que hacemos
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                       Creemos que la educación debe generar claridad, no confusión; impulso, no presión. En tiempos de automatización e incertidumbre, la formación no puede ser solo un trámite: debe ser una decisión estratégica, emocional y sostenible. Edutalent nace para convertir el aprendizaje en el principal mecanismo de adaptación a un mundo laboral que cambia sin pausa.
                    </p>
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-white mb-2 text-orange-400">Creencia fundamental</h4>
                    <p className="text-slate-400 leading-relaxed text-sm italic border-l-2 border-orange-500 pl-4 bg-slate-900/30 p-3 rounded-r-lg">
                       La formación no es solo un trámite: debe ser una decisión estratégica, emocional y sostenible que genere claridad e impulso en tiempos de automatización e incertidumbre.
                    </p>
                 </div>
              </div>

              {/* Card 2: Core Purpose Definition */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/30 transition-colors flex flex-col justify-center relative overflow-hidden shadow-xl">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
                 <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
                    <Target className="w-6 h-6 text-orange-500" /> ¿Qué hacemos?
                 </h3>
                 <div className="relative z-10">
                    <p className="text-white text-lg font-medium leading-relaxed">
                       Acompañamos a personas y organizaciones a descubrir, diseñar y desarrollar su mejor versión <span className="text-orange-400">personal, profesional y tecnológica</span> a través de la educación y la inteligencia del talento, para que puedan cambiar al ritmo del mundo, sin perder su esencia.
                    </p>
                 </div>
                 <div className="mt-8 pt-6 border-t border-slate-700/50 flex items-center gap-2 text-slate-500 text-sm">
                    <BrainCircuit className="w-4 h-4" /> Inteligencia del Talento Aplicada
                 </div>
              </div>

           </div>

         </div>
      </section>

      {/* 3. CEO Message */}
      <section className="py-24 bg-slate-800/80 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-slate-900/50 to-transparent pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
               
               {/* Image Column */}
               <div className="lg:col-span-4 flex justify-center lg:justify-start">
                  <div className="relative group">
                     <div className="absolute inset-0 bg-orange-500 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-300"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" 
                        alt="Andrea Montalvo Chedraui" 
                        className="relative rounded-2xl shadow-2xl w-full max-w-sm object-cover aspect-[3/4] border border-slate-600 grayscale hover:grayscale-0 transition-all duration-500" 
                     />
                  </div>
               </div>

               {/* Text Column */}
               <div className="lg:col-span-8">
                  <Quote className="w-12 h-12 text-orange-500 mb-6 opacity-50" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                     Liderazgo con Propósito
                  </h2>
                  <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light text-justify">
                     <p>
                        Edutalent nace de la convicción de que el talento humano y la formación son la única fuerza verdaderamente emergente y sostenible en esta nueva revolución.
                     </p>
                     <p>
                        Fundamos esta firma porque vimos una brecha crítica: faltaba un puente estratégico que conectara eficazmente la demanda empresarial con la oferta de la academia, dejando a profesionales y estudiantes sin una ruta clara de inversión.
                     </p>
                     <p>
                        Hoy, donde la tecnología redefine todo, el conocimiento es vital para la supervivencia y Edutalent existe para proporcionar ese <strong>Enfoque Estratégico</strong> a esa inversión. Nuestro propósito final es inspirar y acompañar a que cada persona y organización evolucione con sentido, recordándoles que, en medio del cambio, somos seres humanos diseñando nuestro propio valor, sin perder nuestra esencia.
                     </p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-700">
                     <h3 className="text-xl font-bold text-white">Andrea Montalvo Chedraui</h3>
                     <p className="text-orange-400">Gerente General</p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 4. Methodology Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestra Metodología</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Convertimos la incertidumbre en rutas claras de acción a través de tres pasos fundamentales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-800 -z-10"></div>

            <div className="relative bg-slate-900/80 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-colors group">
              <div className="w-24 h-24 bg-slate-950 rounded-full border-4 border-slate-800 flex items-center justify-center mx-auto mb-6 group-hover:border-orange-500 transition-colors z-10">
                <Search className="w-10 h-10 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-4">1. Diagnóstico</h3>
              <p className="text-slate-400 text-center text-sm">
                Entendemos quién eres y qué exige el futuro. Usamos herramientas como Indigo y Talent Scan 360+AI.
              </p>
            </div>

            <div className="relative bg-slate-900/80 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-colors group">
              <div className="w-24 h-24 bg-slate-950 rounded-full border-4 border-slate-800 flex items-center justify-center mx-auto mb-6 group-hover:border-orange-500 transition-colors z-10">
                <Map className="w-10 h-10 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-4">2. Ruta</h3>
              <p className="text-slate-400 text-center text-sm">
                Traducimos el diagnóstico en un plan concreto. Qué habilidades desarrollar y qué alianzas activar.
              </p>
            </div>

            <div className="relative bg-slate-900/80 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-colors group">
              <div className="w-24 h-24 bg-slate-950 rounded-full border-4 border-slate-800 flex items-center justify-center mx-auto mb-6 group-hover:border-orange-500 transition-colors z-10">
                <Users className="w-10 h-10 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-4">3. Acompañamiento</h3>
              <p className="text-slate-400 text-center text-sm">
                Ponemos en marcha la ruta. Formación, mentorías y comunidad activa para medir avances reales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section (Lines of Action) */}
      <section id="servicios" className="py-24 relative bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestras Líneas de Acción</h2>
            <p className="text-slate-400">Selecciona tu perfil para descubrir tu ruta ideal</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Future Talent Card */}
            <Link to="/future-talent" className="group relative bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:bg-slate-800 hover:-translate-y-2 hover:border-green-500/30 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Rocket className="w-32 h-32 text-purple-500 transform rotate-12" />
              </div>
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Future Talent</h3>
              <p className="text-purple-400 text-sm font-medium mb-4">Jóvenes y Colegios</p>
              <p className="text-slate-400 mb-8 line-clamp-3">
                Acompañamos a jóvenes a descubrir su propósito y futuro profesional. Tests vocacionales, mentoring y experiencias reales.
              </p>
              <div className="flex items-center text-white font-medium group-hover:text-green-400 transition-colors">
                Ver micrositio <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Smart Talent Card */}
            <Link to="/smart-talent" className="group relative bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:bg-slate-800 hover:-translate-y-2 hover:border-yellow-500/30 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BrainCircuit className="w-32 h-32 text-orange-500 transform rotate-12" />
              </div>
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <BrainCircuit className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Smart Talent</h3>
              <p className="text-orange-400 text-sm font-medium mb-4">Adultos y Profesionales</p>
              <p className="text-slate-400 mb-8 line-clamp-3">
                Procesos personalizados para reinventar la carrera profesional. Diagnóstico de fortalezas y guía estratégica para maestrías.
              </p>
              <div className="flex items-center text-white font-medium group-hover:text-yellow-400 transition-colors">
                Ver micrositio <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Corporate Talent Card */}
            <Link to="/corporate-talent" className="group relative bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:bg-slate-800 hover:-translate-y-2 hover:border-cyan-400/30 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Building2 className="w-32 h-32 text-cyan-600 transform rotate-12" />
              </div>
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Corporate Talent</h3>
              <p className="text-sky-400 text-sm font-medium mb-4">Empresas y Universidades</p>
              <p className="text-slate-400 mb-8 line-clamp-3">
                Diseño de academias corporativas y rutas de formación en habilidades críticas. Conexión estratégica universidad-empresa.
              </p>
              <div className="flex items-center text-white font-medium group-hover:text-cyan-400 transition-colors">
                Ver micrositio <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 6. Allies Section */}
      <section className="py-20 border-t border-slate-800/50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Aliados Estratégicos</h2>
            <p className="text-slate-400">Trabajamos con líderes globales en educación y tecnología</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 hover:opacity-100 transition-opacity">
            <div className="group flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                <Globe2 className="w-10 h-10 text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <span className="text-slate-300 font-semibold text-sm tracking-wide text-center max-w-[150px]">
                Planet Formación <br/> y Universidades
              </span>
            </div>
            <div className="group flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                <Cpu className="w-10 h-10 text-slate-400 group-hover:text-indigo-500 transition-colors" />
              </div>
              <span className="text-slate-300 font-semibold text-sm tracking-wide text-center max-w-[150px]">
                Indigo Education <br/> Company
              </span>
            </div>
             <div className="group flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                <GraduationCap className="w-10 h-10 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <span className="text-slate-300 font-semibold text-sm tracking-wide text-center max-w-[150px]">
                Red de Universidades <br/> Nacionales
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Target Audience */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Nuestro impacto alcanza a</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-4">
               <div className="mx-auto w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                 <Target className="w-6 h-6 text-orange-400" />
               </div>
               <h4 className="text-lg font-bold text-white">Jóvenes</h4>
               <p className="text-sm text-slate-500 mt-2">17-24 años</p>
            </div>
            <div className="text-center p-4">
               <div className="mx-auto w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                 <Users className="w-6 h-6 text-orange-400" />
               </div>
               <h4 className="text-lg font-bold text-white">Padres</h4>
               <p className="text-sm text-slate-500 mt-2">35-50 años</p>
            </div>
             <div className="text-center p-4">
               <div className="mx-auto w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                 <Briefcase className="w-6 h-6 text-orange-400" />
               </div>
               <h4 className="text-lg font-bold text-white">Profesionales</h4>
               <p className="text-sm text-slate-500 mt-2">25-45 años</p>
            </div>
             <div className="text-center p-4">
               <div className="mx-auto w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                 <TrendingUp className="w-6 h-6 text-orange-400" />
               </div>
               <h4 className="text-lg font-bold text-white">Empresas</h4>
               <p className="text-sm text-slate-500 mt-2">RRHH y Líderes</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Career Search Teaser */}
      <section className="py-20 border-t border-slate-800/50 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
             <div className="p-4 bg-orange-500/20 rounded-full mb-2">
                <BrainCircuit className="w-10 h-10 text-orange-400" />
             </div>
             <h2 className="text-3xl font-bold text-white">Encuentra tu carrera</h2>
             <span className="text-orange-400 font-medium">Primer buscador de carreras del Ecuador</span>
          </div>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
            Usa nuestro buscador impulsado por inteligencia de datos para encontrar carreras alineadas a tu propósito y al futuro del trabajo en las mejores universidades del país.
          </p>
          <form onSubmit={handleSearchSubmit} className="relative max-w-xl mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 bg-slate-900 border border-slate-700 rounded-xl leading-5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all shadow-xl"
              placeholder="Ej: Ingeniería en IA, Diseño Sostenible..."
            />
            <button
              type="submit"
              className="absolute inset-y-2 right-2 px-6 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Buscar
            </button>
          </form>
          <div className="flex justify-center gap-2 text-sm text-slate-500">
             <span>Búsquedas populares:</span>
             <span className="text-slate-400 hover:text-orange-400 cursor-pointer transition-colors">Medicina</span>,
             <span className="text-slate-400 hover:text-orange-400 cursor-pointer transition-colors">Derecho</span>,
             <span className="text-slate-400 hover:text-orange-400 cursor-pointer transition-colors">Software</span>
          </div>
        </div>
      </section>

      {/* 9. Trending Careers */}
      <section className="py-16 border-t border-slate-800/50 bg-transparent">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-8">
               <div>
                  <h2 className="text-2xl font-bold text-white">Tendencias del Futuro</h2>
                  <p className="text-slate-400 text-sm">Explora las profesiones con mayor crecimiento proyectado</p>
               </div>
               <Link to="/career-search" className="text-orange-400 text-sm font-medium hover:text-orange-300 flex items-center gap-1">
                  Ver todas <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {mockCareers.slice(0, 4).map(career => (
                  <div key={career.id} className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-orange-500/30 transition-colors">
                     <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">{career.category}</span>
                        <span className="text-xs bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded">{career.match}% Match</span>
                     </div>
                     <h3 className="text-white font-bold mb-1 truncate">{career.title}</h3>
                     <p className="text-slate-400 text-xs line-clamp-2 mb-3">{career.description}</p>
                     <div className="text-xs text-slate-500 flex gap-2">
                        <span className="flex items-center gap-1"><Rocket className="w-3 h-3"/> {career.demand}</span>
                        <span className="flex items-center gap-1"><Users className="w-3 h-3"/> {career.salary}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 10. Social Media Community */}
      <section className="py-12 bg-transparent border-t border-slate-700">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Únete a la Comunidad Digital</h2>
            <p className="text-slate-400 text-sm mb-8">Síguenos para contenido exclusivo sobre el futuro del trabajo.</p>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
               <a href="#" className="group flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-blue-500 group-hover:text-blue-500 transition-all shadow-lg group-hover:shadow-blue-900/20">
                     <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium group-hover:text-blue-400 transition-colors">LinkedIn</span>
               </a>
               
               <a href="#" className="group flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-pink-500 group-hover:text-pink-500 transition-all shadow-lg group-hover:shadow-pink-900/20">
                     <Instagram className="w-6 h-6 text-slate-400 group-hover:text-pink-500 transition-colors" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium group-hover:text-pink-400 transition-colors">Instagram</span>
               </a>

               <a href="#" className="group flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-black group-hover:bg-white transition-all shadow-lg group-hover:shadow-white/10">
                     <TikTokIcon className="w-6 h-6 text-slate-400 group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium group-hover:text-white transition-colors">TikTok</span>
               </a>

               <a href="#" className="group flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-blue-600 group-hover:text-blue-600 transition-all shadow-lg group-hover:shadow-blue-900/20">
                     <Facebook className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium group-hover:text-blue-500 transition-colors">Facebook</span>
               </a>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;