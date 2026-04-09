import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function Bibliography() {
  const resources = [
    { title: "Guía Tributaria 2024", type: "PDF", size: "2.4 MB" },
    { title: "Manual de Costos", type: "PDF", size: "1.8 MB" },
    { title: "Calendario Fiscal", type: "XLSX", size: "0.5 MB" },
  ];

  return (
    <section id="bibliografia" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold mb-4 block">Recursos Gratuitos</span>
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight text-brand-text">BIBLIOTECA <br /><span className="gold-gradient italic">DIGITAL</span></h2>
            <p className="text-brand-soft text-lg mb-12 leading-relaxed font-light">
              Acceda a nuestra selección exclusiva de guías, manuales y herramientas diseñadas para facilitar la gestión de su empresa.
            </p>
            
            <div className="space-y-4">
              {resources.map((res, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="p-6 glass-card rounded-2xl flex items-center justify-between group cursor-pointer border-black/5"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                      <FontAwesomeIcon icon={faBookOpen} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-text group-hover:text-brand-gold transition-colors">{res.title}</h4>
                      <span className="text-[10px] text-brand-soft uppercase tracking-widest">{res.type} • {res.size}</span>
                    </div>
                  </div>
                  <div className="text-brand-gold font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">Descargar</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-black/5 relative">
              <img 
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1000" 
                alt="Library" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
