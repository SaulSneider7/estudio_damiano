import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section id="nosotros" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-bg">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Business Architecture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/85 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-bg z-10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-10 leading-[0.9] font-black text-brand-text tracking-tighter">
              LIDERANDO <br />
              <span className="gold-gradient italic drop-shadow-sm">EL FUTURO</span> <br />
              FINANCIERO
            </h1>
            
            <p className="text-brand-soft text-xl md:text-2xl leading-relaxed mb-14 max-w-2xl mx-auto font-light">
              En <span className="text-brand-text font-bold">Estudio Damiano & Asociados</span>, redefinimos el éxito. Estrategia contable, tributaria y legal con un enfoque disruptivo y de alta precisión.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(180, 83, 9, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="#servicios" 
                className="btn-primary relative overflow-hidden group flex items-center gap-4 rounded-2xl px-12 py-6 text-xl font-black tracking-tight bg-brand-gold text-white hover:bg-brand-gold/90 transition-all duration-300"
              >
                <span className="relative z-10">Nuestra Propuesta</span>
                <FontAwesomeIcon icon={faArrowRight} className="relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(15, 23, 42, 0.05)", borderColor: "#B45309" }}
                whileTap={{ scale: 0.95 }}
                href="#videos" 
                className="btn-outline flex items-center gap-4 rounded-2xl px-12 py-6 text-xl font-black tracking-tight border-2 border-brand-gold text-brand-gold transition-all duration-300"
              >
                <FontAwesomeIcon icon={faPlay} /> Ver Metodología
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
