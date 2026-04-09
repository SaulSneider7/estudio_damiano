import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

export default function WhatsAppCTA() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 rounded-[3rem] text-center border-brand-gold/10 shadow-2xl shadow-brand-gold/5"
        >
          <div className="w-20 h-20 bg-brand-gold/10 rounded-3xl flex items-center justify-center text-brand-gold text-3xl mx-auto mb-10">
            <FontAwesomeIcon icon={faMessage} />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-brand-text mb-8 leading-tight">
            ¿TIENE ALGUNA <br />
            <span className="gold-gradient italic">DUDA O CONSULTA?</span>
          </h2>
          
          <p className="text-brand-soft text-xl mb-12 max-w-2xl mx-auto font-light">
            Nuestro equipo de expertos está listo para atenderle de manera inmediata y personalizada a través de nuestro canal oficial.
          </p>

          <motion.a
            href="https://wa.me/51962693186"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(37, 211, 102, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-[#25D366] text-white px-12 py-6 rounded-2xl text-xl font-black tracking-tight transition-all duration-300 group"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl group-hover:rotate-12 transition-transform" />
            <span>CONSULTAR POR WHATSAPP</span>
          </motion.a>
          
          <div className="mt-8 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-soft">
            Respuesta inmediata • Atención personalizada
          </div>
        </motion.div>
      </div>
    </section>
  );
}
