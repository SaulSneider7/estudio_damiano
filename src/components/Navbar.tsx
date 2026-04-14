import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Videos", href: "#videos" },
    { name: "Bibliografía", href: "#bibliografia" },
    { name: "Asesoría", href: "#asesoria" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "shadow-xl" : "shadow-md"}`}>
      {/* Top Bar */}
      <div className={`bg-primary-container text-white overflow-hidden transition-all duration-300 ${isScrolled ? "h-0 opacity-0" : "py-2 opacity-100"}`}>
        <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] md:text-[11px] font-bold tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <span className="text-tertiary-fixed">IPECOF</span>
            <span className="opacity-70 hidden md:inline">|</span>
            <span className="opacity-90">Instituto Internacional de Peritaje Contable Forense</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="w-3 h-3 text-tertiary-fixed" />
              <span>+51 962 693 186</span>
            </div>
            <a 
              href="tel:+51962693186"
              className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded hover:bg-white transition-colors"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`bg-white relative transition-all duration-300 ${isScrolled ? "py-3" : "py-5"}`}>
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-tertiary-fixed origin-left z-50"
          style={{ scaleX }}
        />
        <div className="max-w-7xl mx-auto px-8 flex items-center">
          {/* Logo - Left Aligned */}
          <div className="flex-shrink-0">
            <a href="#" className="flex flex-col group">
              <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-primary-container font-headline uppercase leading-none group-hover:text-on-surface-variant transition-colors">
                Damiano
              </span>
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-on-surface-variant uppercase mt-1">
                & Asociados
              </span>
            </a>
          </div>

          {/* Spacer to push everything else to the right */}
          <div className="flex-grow"></div>

          {/* Desktop Links - Right Aligned */}
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary-container transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tertiary-fixed transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="https://wa.me/51962693186"
              className="ml-4 px-6 py-2.5 bg-primary-container text-white text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-black transition-all transform active:scale-95 shadow-md hover:shadow-xl flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faPhone} className="w-3 h-3 text-tertiary-fixed" />
              Consulta WhatsApp
            </a>
          </div>

          {/* Mobile Toggle - Right Aligned */}
          <button 
            className="lg:hidden text-primary-container p-2 hover:bg-surface-container-low rounded-lg transition-colors ml-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-surface-container-low md:hidden overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-6">
                {navLinks.map((link, idx) => (
                  <motion.a 
                    key={link.name}
                    href={link.href} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold text-primary-container border-b border-surface-container-low pb-2 hover:text-on-surface-variant transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a 
                  href="https://wa.me/51962693186"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-primary-container text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform"
                >
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-tertiary-fixed" />
                  WhatsApp Directo
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
