import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after 1 second for better UX
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem('hasSeenEventPopup');
      if (!hasSeen) {
        setIsVisible(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    sessionStorage.setItem('hasSeenEventPopup', 'true');
  };

  const handleCta = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenEventPopup', 'true');
    navigate('/events');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 left-6 z-[100] animate-fade-in">
      <div 
        onClick={handleCta}
        className="relative w-72 bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-purple-500/40 cursor-pointer transform hover:scale-105 transition-all duration-300 flex flex-col"
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 z-20 bg-black/60 hover:bg-black/80 text-white p-1 rounded-full transition-colors backdrop-blur-md border border-white/10"
        >
          <X className="w-3 h-3" />
        </button>

        {/* Small Visual Header */}
        <div className="relative h-28 bg-[url('https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
           <div className="absolute bottom-2 left-4">
              <h2 className="text-xl font-black text-white leading-none drop-shadow-md">
                 INSPiRA <span className="text-yellow-400 text-[10px] font-bold tracking-widest uppercase ml-1">Summit 2026</span>
              </h2>
           </div>
        </div>

        {/* Compact Content */}
        <div className="p-4 bg-slate-900 border-t border-white/5">
           <div className="flex items-center justify-between mb-3 text-xs text-slate-300">
               <div className="flex items-center gap-1.5">
                   <Calendar className="w-3 h-3 text-purple-400" /> 3 Marzo
               </div>
               <div className="flex items-center gap-1.5">
                   <MapPin className="w-3 h-3 text-blue-400" /> Quito
               </div>
           </div>
           
           <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white py-2 rounded-lg font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg">
              Ver Detalles <ArrowRight className="w-3 h-3" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;