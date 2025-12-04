import React, { useState, useMemo, useEffect } from 'react';
import { useLocation as useRouterLocation, useNavigate } from 'react-router-dom';
import { careers } from '../data/careers';
import { Search, MapPin, Building2, Clock, Award, Star, Filter, X, Laptop, Sparkles, ChevronRight, ExternalLink } from 'lucide-react';
import { Career, AnalysisResult } from '../data/careers';

const CareerSearch: React.FC = () => {
  // --- Estados de Filtros ---
  const [searchTerm, setSearchTerm] = useState('');
  const [universityFilter, setUniversityFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [modalityFilter, setModalityFilter] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);
  
  // Datos del análisis (si existen)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const routerLocation = useRouterLocation();
  const navigate = useNavigate();

  // --- Carga Inicial ---
  useEffect(() => {
    // Intentar recuperar el análisis del localStorage
    const saved = localStorage.getItem('indigoAnalysis');
    if (saved) {
      setAnalysisResult(JSON.parse(saved));
    }

    // Verificar parámetros de URL
    const params = new URLSearchParams(routerLocation.search);
    
    // Solo activamos el modo "recomendado" si la URL lo pide explícitamente
    if (params.get('filter') === 'recommended' && saved) {
      setShowRecommended(true);
    }
    
    // Si hay una búsqueda específica (q=...), la aplicamos al buscador de texto
    const careerQuery = params.get('q');
    if (careerQuery) {
      setSearchTerm(careerQuery);
    }
  }, [routerLocation]);

  // --- Listas Únicas para Selectores (Memoizadas) ---
  const uniqueLocations = useMemo(() => 
    Array.from(new Set(careers.map(c => c.location))).sort(), 
  []);

  const uniqueUniversities = useMemo(() => 
    Array.from(new Set(careers.map(c => c.university.name))).sort(), 
  []);

  const uniqueModalities = useMemo(() => 
    Array.from(new Set(careers.map(c => c.modality))).sort(), 
  []);

  // --- Lógica de Filtrado Principal ---
  const filteredCareers = useMemo(() => {
    let filtered = careers.filter(career => {
      // 1. Filtro de Texto (Título o Tags)
      const matchesSearch = searchTerm === '' || 
                            career.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            career.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // 2. Filtros de Dropdowns
      const matchesUni = universityFilter === '' || career.university.name === universityFilter;
      const matchesLocation = locationFilter === '' || career.location === locationFilter;
      const matchesModality = modalityFilter === '' || career.modality === modalityFilter;
      
      return matchesSearch && matchesUni && matchesLocation && matchesModality;
    });

    // 3. Lógica de Recomendación
    if (showRecommended && analysisResult && searchTerm === '') {
      const topCareerKeywords = analysisResult.top5Careers.map(c => c.careerName.toLowerCase());
      
      filtered = filtered.filter(career => {
        return topCareerKeywords.some(keyword => 
            career.title.toLowerCase().includes(keyword) || 
            keyword.includes(career.title.toLowerCase())
        );
      });
    }

    // 4. Ordenamiento (Patrocinadas primero) - Booking.com Style
    return filtered.sort((a, b) => {
      if (a.university.isSponsored && !b.university.isSponsored) return -1;
      if (!a.university.isSponsored && b.university.isSponsored) return 1;
      return 0;
    });
  }, [searchTerm, universityFilter, locationFilter, modalityFilter, showRecommended, analysisResult]);

  // Limpiar todos los filtros
  const clearFilters = () => {
    setSearchTerm('');
    setUniversityFilter('');
    setLocationFilter('');
    setModalityFilter('');
    setShowRecommended(false);
    navigate('/career-search'); // Limpia la URL
  };

  const applyTopCareerFilter = (careerName: string) => {
    setSearchTerm(careerName);
    setShowRecommended(true); 
  };

  const hasActiveFilters = searchTerm || universityFilter || locationFilter || modalityFilter || showRecommended;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-slate-900 min-h-screen text-slate-100 animate-fade-in pb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Oferta Académica Ecuador</h1>
        <p className="mt-3 text-lg text-slate-400">Explora programas educativos de las mejores universidades y conecta con tu futuro.</p>
      </div>

      {/* Banner de Recomendación Personalizada (Colapsado) */}
      {analysisResult && !showRecommended && (
        <div 
          onClick={() => setShowRecommended(true)}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg p-4 mb-8 flex items-center justify-between cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1 text-white border border-purple-400/30"
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Hola, {analysisResult.candidateName.split(' ')[0]}</h3>
              <p className="text-indigo-100 text-sm">Hemos identificado las 5 carreras ideales para tu perfil {analysisResult.profileTitle}.</p>
            </div>
          </div>
          <div className="flex items-center font-bold bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm">
            Ver Mis Top 5 <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      )}

      {/* Panel de Recomendaciones Activo (Chips de Top 5) */}
      {showRecommended && analysisResult && (
        <div className="bg-indigo-900/40 border border-indigo-500/50 rounded-xl p-5 mb-8 animate-fade-in shadow-sm">
           <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2 text-indigo-200">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span className="font-bold text-lg">Tus Top 5 Carreras Recomendadas:</span>
              </div>
              <button onClick={() => setShowRecommended(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
           </div>
           
           <div className="flex flex-wrap gap-3">
              {analysisResult.top5Careers.map((career, i) => {
                const isActive = searchTerm === career.careerName;
                return (
                  <button 
                    key={i} 
                    onClick={() => applyTopCareerFilter(career.careerName)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                      isActive 
                        ? 'bg-indigo-600 text-white border-indigo-500 shadow-md ring-2 ring-indigo-400' 
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-indigo-500 hover:bg-slate-700'
                    }`}
                  >
                    <span className={`flex items-center justify-center w-5 h-5 rounded-full text-xs ${isActive ? 'bg-white text-indigo-600' : 'bg-indigo-900 text-indigo-200'}`}>
                      {i + 1}
                    </span>
                    {career.careerName}
                  </button>
                );
              })}
           </div>
           <p className="mt-3 text-xs text-indigo-300 ml-1">
             * Haz clic en una carrera para filtrar la oferta académica automáticamente.
           </p>
        </div>
      )}

      {/* Barra de Búsqueda Avanzada y Filtros */}
      <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 p-6 mb-8 sticky top-20 z-40">
        <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-slate-300">
          <Filter className="w-4 h-4 text-orange-500" />
          Filtros de Búsqueda
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* 1. Búsqueda por Texto (Carrera) */}
          <div className="md:col-span-4 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-slate-600 rounded-lg leading-5 bg-slate-900 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors sm:text-sm"
              placeholder="Carrera: Derecho, Medicina..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* 2. Filtro por Universidad */}
          <div className="md:col-span-3 relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Building2 className="h-5 w-5 text-slate-400" />
            </div>
            <select
              className="block w-full pl-10 pr-8 py-3 border border-slate-600 rounded-lg leading-5 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors sm:text-sm appearance-none cursor-pointer"
              value={universityFilter}
              onChange={(e) => setUniversityFilter(e.target.value)}
            >
              <option value="">Universidad</option>
              {uniqueUniversities.map(uni => (
                <option key={uni} value={uni}>{uni}</option>
              ))}
            </select>
          </div>

          {/* 3. Filtro por Ciudad */}
          <div className="md:col-span-3 relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-slate-400" />
            </div>
            <select
              className="block w-full pl-10 pr-8 py-3 border border-slate-600 rounded-lg leading-5 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors sm:text-sm appearance-none cursor-pointer"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">Ciudad</option>
              {uniqueLocations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* 4. Filtro por Modalidad */}
          <div className="md:col-span-2 relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Laptop className="h-5 w-5 text-slate-400" />
            </div>
            <select
              className="block w-full pl-10 pr-8 py-3 border border-slate-600 rounded-lg leading-5 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors sm:text-sm appearance-none cursor-pointer"
              value={modalityFilter}
              onChange={(e) => setModalityFilter(e.target.value)}
            >
              <option value="">Modalidad</option>
              {uniqueModalities.map(mod => (
                <option key={mod} value={mod}>{mod}</option>
              ))}
            </select>
          </div>
        </div>

        {hasActiveFilters && (
          <div className="mt-4 flex justify-end">
            <button 
              onClick={clearFilters}
              className="text-sm text-red-400 hover:text-red-300 font-medium flex items-center gap-1 transition-colors"
            >
              <X className="w-4 h-4" />
              Limpiar todos los filtros
            </button>
          </div>
        )}
      </div>

      {/* Lista de Resultados */}
      <div className="space-y-4">
        {filteredCareers.length === 0 ? (
          <div className="text-center py-20 bg-slate-800/50 rounded-xl border border-dashed border-slate-700">
            <div className="mx-auto h-12 w-12 text-slate-500 mb-3">
              <Search className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-medium text-white">No se encontraron resultados</h3>
            <p className="mt-1 text-slate-400">
              {searchTerm 
                ? `No encontramos carreras exactas para "${searchTerm}". Intenta usar términos más generales.` 
                : "Intenta ajustar tus filtros de búsqueda."}
            </p>
            <button 
              onClick={clearFilters}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700"
            >
              Ver todas las carreras
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-slate-400 italic">
               Encontrados {filteredCareers.length} programas académicos
            </div>
            {filteredCareers.map((career) => (
              <CareerCard key={career.id} career={career} recommended={showRecommended} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

// --- Componente Tarjeta de Carrera ---
const CareerCard: React.FC<{ career: Career, recommended: boolean }> = ({ career, recommended }) => {
  const isSponsored = career.university.isSponsored;
  
  return (
    <div className={`group relative bg-slate-800 rounded-xl transition-all duration-200 hover:shadow-xl hover:bg-slate-750 flex flex-col sm:flex-row overflow-hidden border ${isSponsored ? 'border-yellow-500/50 shadow-yellow-900/10' : 'border-slate-700 hover:border-orange-500/30'}`}>
      
      {/* Badges y Etiquetas */}
      <div className="absolute top-0 right-0 flex flex-col items-end z-10">
        {isSponsored && (
            <div className="bg-yellow-500 text-slate-900 text-xs px-3 py-1 rounded-bl-lg font-bold flex items-center mb-1 shadow-sm">
            <Star className="w-3 h-3 mr-1 fill-slate-900 text-slate-900" />
            Destacado
            </div>
        )}
        {recommended && (
             <div className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-bl-lg font-semibold flex items-center">
             <Sparkles className="w-3 h-3 mr-1" />
             Recomendado
             </div>
        )}
      </div>

      {/* Sección Logo */}
      <div className={`sm:w-48 p-6 flex items-center justify-center bg-slate-50`}>
        {/* Usamos un fallback visual si no hay imagen, o la imagen en un contenedor blanco para logos universitarios */}
        <div className="w-full h-full flex items-center justify-center">
             {career.university.logoUrl ? (
                 <img src={career.university.logoUrl} alt={career.university.name} className="max-h-20 max-w-full object-contain" />
             ) : (
                 <Building2 className="w-12 h-12 text-slate-300" />
             )}
        </div>
      </div>

      {/* Sección Contenido */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <div className="pr-12">
              <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                {career.title}
              </h3>
              <div className="flex items-center mt-1 text-slate-400 font-medium text-sm">
                <Building2 className="w-4 h-4 mr-1 text-slate-500" />
                {career.university.name} <span className="text-slate-600 ml-1">({career.university.acronym})</span>
              </div>
            </div>
          </div>

          <p className="mt-3 text-sm text-slate-300">
            {career.degree}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
            <span className="flex items-center bg-slate-900 px-2 py-1 rounded border border-slate-700">
              <MapPin className="w-3 h-3 mr-1 text-orange-400" /> {career.location}
            </span>
            <span className="flex items-center bg-slate-900 px-2 py-1 rounded border border-slate-700">
              <Award className="w-3 h-3 mr-1 text-purple-400" /> {career.modality}
            </span>
          </div>
        </div>

        {/* Footer de Tarjeta */}
        <div className="mt-4 pt-4 border-t border-slate-700 flex justify-between items-center">
          <div className="flex gap-2 flex-wrap">
            {career.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-xs font-medium text-orange-300 bg-orange-900/20 px-2 py-1 rounded-full border border-orange-500/10 uppercase">
                {tag}
              </span>
            ))}
          </div>
          <a 
            href={career.university.websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center ${
            isSponsored 
              ? 'bg-yellow-500 text-slate-900 hover:bg-yellow-400 shadow-lg shadow-yellow-500/20' 
              : 'text-orange-400 hover:bg-slate-700 border border-slate-700 hover:border-orange-500'
          }`}>
            Ver programa <ExternalLink className="ml-1 w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareerSearch;