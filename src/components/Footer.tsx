import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-brand-bg text-brand-text pt-32 pb-12 px-6 md:px-12 lg:px-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-gold flex items-center justify-center rounded-lg">
                <span className="font-serif font-black text-white text-xl">D</span>
              </div>
              <span className="font-serif text-2xl font-black tracking-tighter text-brand-text">
                DAMIANO <span className="text-brand-gold">&</span> ASOCIADOS
              </span>
            </div>
            <p className="text-brand-soft text-sm leading-relaxed mb-10 max-w-sm font-light">
              Liderando la transformation financiera con integridad, precisión y una visión inquebrantable hacia el éxito de nuestros clientes.
            </p>
            <div className="flex gap-4">
              {[faFacebook, faWhatsapp, faInstagram].map((icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-brand-surface flex items-center justify-center text-brand-soft hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-sm">
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold mb-10">Navegación</h5>
            <ul className="space-y-4 text-sm font-medium">
              {['Nosotros', 'Servicios', 'Asesoría', 'Videos', 'Bibliografía'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-brand-soft hover:text-brand-gold transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold scale-0 group-hover:scale-100 transition-transform"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold mb-10">Contacto</h5>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-brand-surface rounded-xl flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all shadow-sm">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-brand-soft font-bold mb-1">Llámenos</div>
                  <div className="font-bold text-brand-text">+51 962 693 186</div>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-brand-surface rounded-xl flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all shadow-sm">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-brand-soft font-bold mb-1">Escríbanos</div>
                  <div className="font-bold text-brand-text break-all">estudiodamianoasociados@gmail.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-brand-soft font-bold">
            © 2024 ESTUDIO DAMIANO & ASOCIADOS. TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-brand-soft font-bold">
            DISEÑADO POR <a href="https://tu-sitioweb.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-text transition-colors">TU SITIOWEB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
