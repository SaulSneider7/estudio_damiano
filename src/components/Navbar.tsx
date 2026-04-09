import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Asesoría', href: '#asesoria' },
    { name: 'Videos', href: '#videos' },
    { name: 'Bibliografía', href: '#bibliografia' },
  ];

  return (
    <header className="fixed top-0 w-full z-[100] transition-all duration-500">
      {/* Top Bar - Hidden on scroll for a cleaner look */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div 
            initial={{ height: 'auto', opacity: 1 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="hidden md:flex justify-between items-center px-12 py-2 bg-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] text-brand-bg"
          >
            <div className="flex gap-8">
              <a href="tel:+51962693186" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <FontAwesomeIcon icon={faPhone} /> +51 962 693 186
              </a>
              <a href="mailto:estudiodamianoasociados@gmail.com" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <FontAwesomeIcon icon={faEnvelope} /> estudiodamianoasociados@gmail.com
              </a>
            </div>
            <div className="animate-pulse">Asesoría de Élite para Empresas de Élite</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Nav */}
      <nav className={`px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-black/5 py-4 shadow-xl' : 'bg-transparent'}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-gold flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(180,83,9,0.3)]">
            <span className="font-serif font-black text-white text-xl">D</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-black tracking-tighter text-brand-text">
              DAMIANO <span className="text-brand-gold">&</span> ASOCIADOS
            </span>
            <span className="text-[9px] uppercase tracking-[0.5em] text-brand-gold font-bold -mt-1">Financial Excellence</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-brand-text hover:text-brand-gold transition-all duration-300 relative group">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contacto" className="bg-brand-red text-white px-6 py-2.5 rounded-full hover:scale-105 transition-transform shadow-lg shadow-brand-red/20">Contacto</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-brand-text w-10 h-10 flex items-center justify-center rounded-full bg-black/5 border border-black/5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="lg" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-brand-bg lg:hidden"
          >
            <div className="flex justify-between items-center px-6 py-6 border-b border-black/5">
               <span className="font-serif text-xl font-black text-brand-text">DAMIANO <span className="text-brand-gold">&</span> ASOCIADOS</span>
               <button onClick={() => setIsMenuOpen(false)} className="text-brand-text w-10 h-10 bg-black/5 rounded-full">
                 <FontAwesomeIcon icon={faXmark} size="lg" />
               </button>
            </div>
            <div className="flex flex-col py-12 px-8 gap-8 text-left">
              {menuItems.map((item, idx) => (
                <motion.a 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-serif font-bold text-brand-text hover:text-brand-gold transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                href="#contacto" 
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-serif font-bold text-brand-red"
              >
                Contacto
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
