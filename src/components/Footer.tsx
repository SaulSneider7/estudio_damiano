import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001D36] text-white pt-20 pb-10 px-8 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tertiary-fixed to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tighter text-white">IPECOF</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-tertiary-fixed font-bold">Instituto de Peritaje Contable</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Líderes internacionales en la determinación técnica de hechos económicos y financieros. Especialistas en peritaje forense y auditoría antifraude.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61577522342214" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tertiary-fixed hover:text-primary-container transition-all duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest text-tertiary-fixed font-bold">Servicios</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#servicios" className="hover:text-white transition-colors">Peritaje Contable Judicial</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Auditoría Forense</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Lavado de Activos</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Corrupción de Funcionarios</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Valorización de Empresas</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest text-tertiary-fixed font-bold">Institucional</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nuestra Asesoría</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Acreditaciones REPEF</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certificaciones OSCE</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest text-tertiary-fixed font-bold">Contacto Directo</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-tertiary-fixed shrink-0" />
                <span className="text-sm text-slate-400 group-hover:text-white transition-colors">
                  Av. Elmer Faucett 330, San Miguel<br />Lima, Perú
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-tertiary-fixed shrink-0" />
                <a href="tel:+51962693186" className="text-sm text-slate-400 group-hover:text-white transition-colors">
                  +51 962 693 186
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-tertiary-fixed shrink-0" />
                <a href="mailto:estudiodamianoasociados@gmail.com" className="text-sm text-slate-400 group-hover:text-white transition-colors break-all">
                  estudiodamianoasociados@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-xs text-center md:text-left">
            <p>© 2024 IPECOF - Instituto Internacional de Peritaje Contable Forense.</p>
            <p className="mt-1">Todos los derechos reservados. Miembro acreditado REPEF.</p>
            <p className="mt-2 text-[10px] opacity-70">
              Diseñado por <a href="https://tu-sitioweb.com" target="_blank" rel="noopener noreferrer" className="text-tertiary-fixed hover:underline">Tu SitioWeb</a>
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 hover:text-tertiary-fixed transition-colors"
          >
            <span>Volver arriba</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-tertiary-fixed transition-colors">
              <FontAwesomeIcon icon={faArrowUp} className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
