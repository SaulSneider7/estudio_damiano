import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function CallCTA() {
  return (
    <section className="py-24 bg-brand-text relative overflow-hidden">
      {/* Dramatic background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-black mb-6 block">Atención Inmediata</span>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-tight tracking-tighter">
            SIEMPRE ESTAMOS <br />
            <span className="gold-gradient italic">DISPONIBLES</span>
          </h2>
          
          <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            ¿Prefiere una conversación directa? Llámenos ahora mismo para recibir asesoría experta sin esperas.
          </p>

          <motion.a
            href="tel:+51962693186"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(180, 83, 9, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-6 bg-white text-brand-text px-16 py-8 rounded-full text-2xl font-black tracking-tight transition-all duration-300 group shadow-2xl"
          >
            <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white text-xl group-hover:rotate-12 transition-transform">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <span>LLAMAR AHORA</span>
          </motion.a>
          
          <div className="mt-12 flex flex-col items-center gap-2">
            <div className="text-brand-gold font-bold tracking-widest text-lg">+51 962 693 186</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
              Línea Directa • Atención 24/7
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
