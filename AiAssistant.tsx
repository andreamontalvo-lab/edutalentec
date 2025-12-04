import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Briefcase, ArrowRight, BrainCircuit } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { careers } from '../data/careers';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  // Initial state with the new Role Definition
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string; action?: string }[]>([
    { 
      role: 'bot', 
      text: 'Bienvenido a Edutalent. Soy tu Asesor Estratégico de Inteligencia Educativa. Mi misión es darte enfoque sobre el futuro del trabajo y tus rutas de crecimiento. ¿En qué desafío puedo orientarte hoy?' 
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  // Context aware greeting (Updated with Strategic Tone)
  useEffect(() => {
    if (location.pathname === '/career-search' && messages.length === 1) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Estás en el buscador de oferta. Recuerda: No busques solo un título, busca una ruta alineada a la demanda futura. ¿Qué área te interesa analizar?' }]);
    } else if (location.pathname === '/future-talent' && messages.length === 1) {
        setMessages(prev => [...prev, { role: 'bot', text: 'Future Talent es el inicio de la estrategia. Aquí aplicamos el Diagnóstico Indigo para jóvenes. ¿Te gustaría saber cómo funciona para tu hijo/a?' }]);
    }
  }, [location.pathname]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');

    // Simulated AI Logic with "Training"
    setTimeout(() => {
      const lowerText = userText.toLowerCase();

      // --- 1. ENTRENAMIENTO DE PRECIOS E INVERSIÓN (ACTUALIZADO CON SMART STEP) ---
      if (lowerText.match(/(precio|costo|valor|cuanto cuesta|inversion|tarifas|pagar)/)) {
        setMessages(prev => [...prev, { 
          role: 'bot', 
          text: 'La inversión estratégica varía según tu etapa de vida:\n\n1. Future Talent (Jóvenes): Pack Origen básico a $50 o el Pack completo Origen 3D por $150.\n2. Smart Talent (Profesionales): Tanto el Pack "Smart Step" (Graduados) como "Smart Ruta" (Estrategia) tienen una inversión de $100.\n3. Corporate: Desde $170/persona.\n\n¿Cuál de estas rutas se ajusta a tu necesidad actual?' 
        }]);
        return;
      }

      // --- NUEVO: ENTRENAMIENTO PARA GRADUADOS / SMART STEP ---
      if (lowerText.match(/(gradu|cv|hoja de vida|linkedin|perfil|primer trabajo|siguiente paso|despegue)/)) {
        setMessages(prev => [...prev, { 
          role: 'bot', 
          text: 'Si te graduaste y buscas tu siguiente paso, hemos lanzado el servicio "Smart Step".\n\nNo solo es hacer un CV; usamos el Test Indigo para conocerte y luego armamos contigo tu Hoja de Vida de Alto Impacto y tu perfil de LinkedIn. Es un kit de despegue profesional.\n\n¿Te gustaría ver los detalles?',
          action: '/smart-talent'
        }]);
        return;
      }

      // --- 2. ENTRENAMIENTO INSPIRA SUMMIT (PARTICIPACIÓN) ---
      if (lowerText.match(/(inspira|summit|evento|feria|participar en inspira|entrada)/)) {
        setMessages(prev => [...prev, { 
          role: 'bot', 
          text: 'Inspira Summit es el punto de encuentro del ecosistema. \n\n• Para Colegios y Estudiantes: La entrada es 100% GRATUITA e incluye el Test Indigo patrocinado.\n• Para Empresas y Universidades: Participan a través de planes de Auspicio (Platinum, Gold, Silver) para posicionar su marca empleadora.\n\nEs un evento estratégico, no solo una feria. ¿Te interesa inscribir a tu colegio o ser auspiciante?',
          action: '/events'
        }]);
        return;
      }
      
      // --- 3. ENTRENAMIENTO BUSCADOR DE CARRERAS ---
      if (lowerText.match(/(buscador|buscar carrera|oferta academica|donde estudiar|encontrar universidad|filtro)/)) {
        setMessages(prev => [...prev, { 
          role: 'bot', 
          text: 'Nuestro "Buscador de Oferta" es una herramienta de inteligencia de datos. Puedes filtrar por Ciudad, Modalidad (Presencial/Online) y Universidad. Además, si ya hiciste tu test Indigo, te recomendamos activar el filtro de "Recomendados" para ver solo lo que hace match con tu perfil. Te ayudo a ir allí.',
          action: '/career-search'
        }]);
        return;
      }

      // --- 4. ENTRENAMIENTO DEFINICIÓN DE RUTAS (QUÉ OFRECE CADA UNA) ---
      if (lowerText.match(/(rutas|lineas|servicios|que ofrecen|future|smart|corporate|diferencia)/)) {
         if (lowerText.includes('future')) {
            setMessages(prev => [...prev, { role: 'bot', text: 'Future Talent: Enfocada en jóvenes (17-24 años) y colegios. Ofrece descubrimiento de propósito, Test Indigo y gestión de admisión universitaria.', action: '/future-talent' }]);
         } else if (lowerText.includes('smart')) {
            setMessages(prev => [...prev, { role: 'bot', text: 'Smart Talent: Para profesionales. Ofrece el servicio "Smart Step" para graduados (CV/Perfil) y "Smart Ruta" para reinvención de carrera.', action: '/smart-talent' }]);
         } else if (lowerText.includes('corporate')) {
            setMessages(prev => [...prev, { role: 'bot', text: 'Corporate Talent: Para empresas y universidades. Diseñamos academias corporativas, cumplimiento normativo (Level 40+) y expansión internacional.', action: '/corporate-talent' }]);
         } else {
            setMessages(prev => [...prev, { role: 'bot', text: 'Manejamos 3 Rutas Estratégicas:\n1. Future Talent (Jóvenes y Colegios)\n2. Smart Talent (Profesionales y Graduados)\n3. Corporate Talent (Empresas y Universidades)\n\nCada una aplica la metodología Diagnóstico → Ruta → Acompañamiento.' }]);
         }
         return;
      }
      
      // --- CASO 5: PADRES / HIJOS INDECISOS (17-18 AÑOS) ---
      if (lowerText.match(/(hijo|hija|17|18|adolescente|colegio|no sabe que estudiar|graduó|niño)/)) {
        setMessages(prev => [...prev, { 
          role: 'bot', 
          text: 'Entiendo la incertidumbre, es el desafío #1 de las familias hoy. En Edutalent no "adivinamos", usamos ciencia. Para tu hijo, aplicamos nuestra metodología base: 1. Diagnóstico (usando tecnología Indigo e IA para descubrir su talento natural), 2. Ruta (diseño de carrera) y 3. Acompañamiento. No elijan una carrera a ciegas; diseñen un plan de vida.',
          action: '/future-talent'
        }]);
        return;
      }

      // --- CASO 6: PROFESIONALES (MAESTRÍA VS DIPLOMADO) ---
      if (lowerText.match(/(maestría|diplomado|posgrado|título|estudiar ahora|conviene más)/)) {
        setMessages(prev => [...prev, { 
          role: 'bot', 
          text: 'Esa decisión no debe basarse en el "título", sino en el Retorno de Inversión (ROI) de tu carrera. En Smart Talent primero realizamos un Diagnóstico de empleabilidad. Si necesitas un cambio estructural, la Ruta puede ser una Maestría con nuestros aliados de Planeta Formación y Universidades. Si requieres agilidad, un Diplomado en habilidades específicas. Definamos primero tu estrategia.',
          action: '/smart-talent'
        }]);
        return;
      }

      // --- CASO 7: CARRERAS DEL FUTURO / TENDENCIAS ---
      if (lowerText.match(/(futuro|tendencia|demanda|artificial|ia|carreras del futuro|que estudiar)/)) {
        setMessages(prev => [...prev, { 
          role: 'bot', 
          text: 'El futuro del trabajo premia habilidades, no solo diplomas. Las tendencias apuntan a la hibridación: tecnología + humanidades. A través de nuestro buscador impulsado por datos, puedes filtrar opciones que tienen alta demanda proyectada. Recuerda: Diagnóstico → Ruta → Acompañamiento es la clave para navegar este futuro incierto.',
          action: '/career-search'
        }]);
        return;
      }
      
      // --- BÚSQUEDA GENERAL EN BASE DE DATOS (EXISTING) ---
      const matchedCareers = careers.filter(c => 
        c.title.toLowerCase().includes(lowerText) || 
        c.tags.some(t => lowerText.includes(t))
      );

      if (matchedCareers.length > 0) {
        const careerNames = matchedCareers.slice(0, 3).map(c => c.title).join(', ');
        setMessages(prev => [...prev, { 
          role: 'bot', 
          text: `Desde un enfoque estratégico, he localizado estas opciones en nuestra base de datos para "${userText}": ${careerNames}. Analízalas bajo la óptica de tu propósito personal.`,
          action: `/career-search?q=${userText}`
        }]);
        return;
      }

      // --- FALLBACK GENÉRICO ESTRATÉGICO ---
      setMessages(prev => [...prev, { role: 'bot', text: 'Interesante consulta. Para darte una respuesta de alto valor, ¿podrías especificar si buscas orientación para un joven (Future), un profesional (Smart) o una empresa (Corporate)? Recuerda que todo inicia con un Diagnóstico.' }]);

    }, 1000);
  };

  const handleAction = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {isOpen && (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col h-[500px] overflow-hidden mb-4 animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
             <div className="flex items-center gap-2 text-white">
                <div className="bg-orange-500/20 p-1.5 rounded-lg border border-orange-500/50"><BrainCircuit className="w-5 h-5 text-orange-400"/></div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm">Edubot IA</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Asesor Estratégico</span>
                </div>
             </div>
             <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
             </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-900/95 scrollbar-thin scrollbar-thumb-slate-700">
             {messages.map((msg, idx) => (
               <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[90%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user' 
                      ? 'bg-orange-600 text-white rounded-tr-none' 
                      : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none shadow-sm'
                  }`}>
                     {msg.role === 'bot' && <Sparkles className="w-3 h-3 text-orange-400 mb-1 inline mr-1" />}
                     {msg.text}
                  </div>
                  {msg.action && (
                    <button 
                      onClick={() => handleAction(msg.action!)}
                      className="mt-2 flex items-center gap-1 text-xs bg-slate-800 hover:bg-slate-700 text-orange-400 border border-orange-500/30 px-3 py-1.5 rounded-lg transition-colors ml-1"
                    >
                      Explorar esta ruta <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
               </div>
             ))}
             <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 border-t border-slate-700 bg-slate-800 flex gap-2">
             <input 
               type="text" 
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Consulta sobre tu futuro..."
               className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500 placeholder-slate-500"
             />
             <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-xl transition-colors disabled:opacity-50" disabled={!input.trim()}>
                <Send className="w-4 h-4" />
             </button>
          </form>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-3 bg-gradient-to-r from-orange-600 to-pink-600 hover:brightness-110 text-white px-4 py-4 rounded-full shadow-2xl transition-all hover:scale-105 ${isOpen ? 'rotate-90 scale-0 opacity-0 hidden' : 'scale-100 opacity-100'}`}
      >
         <Bot className="w-7 h-7" />
         <span className="font-bold pr-2 hidden group-hover:block transition-all whitespace-nowrap">Asesor IA</span>
         <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></span>
      </button>

      {/* Close button state alternative */}
      {isOpen && (
         <button 
           onClick={() => setIsOpen(false)}
           className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full shadow-lg transition-colors"
         >
            <X className="w-6 h-6" />
         </button>
      )}

    </div>
  );
};

export default AiAssistant;