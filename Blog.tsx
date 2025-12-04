import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  TrendingUp, 
  Compass, 
  Users, 
  BookOpen, 
  ArrowRight, 
  Calendar,
  Clock
} from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: React.ReactNode;
  color: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "El fin del trabajo lineal: Por qué reinventarse es la nueva estabilidad",
    excerpt: "El mundo laboral ya no es una escalera recta. Descubre cómo adaptar tu perfil profesional a una economía que premia la agilidad sobre la antigüedad.",
    category: "Futuro del Trabajo",
    date: "Oct 12, 2025",
    readTime: "5 min",
    icon: <TrendingUp className="w-12 h-12 text-orange-400" />,
    color: "orange"
  },
  {
    id: 2,
    title: "IA y Talento: ¿Sustitución o Potenciación Humana?",
    excerpt: "La inteligencia artificial no viene a reemplazarte, sino a obligarte a evolucionar. Analizamos las habilidades humanas que la tecnología no puede replicar.",
    category: "Tecnología",
    date: "Oct 08, 2025",
    readTime: "4 min",
    icon: <Cpu className="w-12 h-12 text-pink-500" />,
    color: "pink"
  },
  {
    id: 3,
    title: "Universidades Corporativas: El futuro de la formación interna",
    excerpt: "Las empresas se están convirtiendo en las nuevas universidades. Cómo diseñar academias internas que generen ROI y retengan talento clave.",
    category: "Corporate",
    date: "Sep 28, 2025",
    readTime: "7 min",
    icon: <Users className="w-12 h-12 text-purple-500" />,
    color: "purple"
  },
  {
    id: 4,
    title: "¿Qué estudiar hoy? Guía para padres en tiempos de incertidumbre",
    excerpt: "Consejos prácticos para acompañar a tus hijos en la elección de carrera cuando las profesiones del futuro aún no tienen nombre.",
    category: "Orientación",
    date: "Sep 15, 2025",
    readTime: "6 min",
    icon: <Compass className="w-12 h-12 text-orange-400" />,
    color: "orange"
  },
  {
    id: 5,
    title: "Micro-credenciales vs. Maestrías: ¿Qué valora el mercado?",
    excerpt: "Analizamos el dilema de la formación continua. Cuándo invertir en un posgrado tradicional y cuándo optar por certificaciones ágiles.",
    category: "Educación",
    date: "Sep 01, 2025",
    readTime: "5 min",
    icon: <BookOpen className="w-12 h-12 text-pink-500" />,
    color: "pink"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 animate-fade-in">
      
      {/* Blog Header */}
      <div className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-orange-400 font-medium tracking-wider text-sm uppercase mb-4 block">Edutalent Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Insights & Tendencias
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Recursos, análisis y guías sobre inteligencia educativa y el futuro del trabajo para potenciar tus decisiones.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon "Image" Header */}
              <div className={`h-48 bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-900/50 transition-colors`}>
                <div className={`absolute inset-0 opacity-10 bg-${post.color}-500 blur-3xl`}></div>
                <div className="z-10 transform group-hover:scale-110 transition-transform duration-500">
                  {post.icon}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className={`px-2 py-1 rounded bg-slate-900 border border-slate-700 text-${post.color}-400 font-medium`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <Link 
                  to={`/blog`} 
                  className="inline-flex items-center text-sm font-medium text-white hover:text-orange-400 transition-colors"
                >
                  Leer artículo <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup (Community Hook) */}
      <div className="bg-slate-950 py-16 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Únete a la comunidad Edutalent</h2>
          <p className="text-slate-400 mb-8">
            Recibe semanalmente insights sobre tendencias laborales, becas y herramientas de IA para tu desarrollo.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
            />
            <button type="submit" className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors">
              Suscribirse
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Blog;