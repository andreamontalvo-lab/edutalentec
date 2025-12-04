import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Edutalent<span className="text-orange-400">.</span>
            </h3>
            <p className="text-slate-400 max-w-sm mb-6">
              Formación con propósito. Talento con futuro. 
              Somos una firma de inteligencia educativa que potencia personas, empresas y universidades.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Lineas de Acción</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#/future-talent" className="hover:text-orange-400 transition">Future Talent</a></li>
              <li><a href="#/smart-talent" className="hover:text-orange-400 transition">Smart Talent</a></li>
              <li><a href="#/corporate-talent" className="hover:text-orange-400 transition">Corporate Talent</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-400" />
                info@edutalent.com.ec
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-400" />
                +593 93 969 1733
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-400" />
                Quito, Ecuador
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Edutalent. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-orange-400 transition"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="text-slate-400 hover:text-orange-400 transition"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-slate-400 hover:text-orange-400 transition"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;