import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassChart, faChessKnight, faRocket } from "@fortawesome/free-solid-svg-icons";

export default function Advisory() {
  const steps = [
    {
      icon: faMagnifyingGlassChart,
      title: "DIAGNÓSTICO",
      desc: "Análisis profundo de su situación actual para detectar fugas y oportunidades.",
      number: "01"
    },
    {
      icon: faChessKnight,
      title: "ESTRATEGIA",
      desc: "Diseño de un plan maestro personalizado para optimizar su estructura fiscal.",
      number: "02"
    },
    {
      icon: faRocket,
      title: "EJECUCIÓN",
      desc: "Implementación rigurosa y monitoreo constante de resultados extraordinarios.",
      number: "03"
    }
  ];

  return (
    <section id="asesoria" className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-gold/5 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold mb-4 block">Metodología Damiano</span>
            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none text-brand-text">
              NUESTRA <br />
              <span className="gold-gradient italic">ASESORÍA</span>
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border border-black/5 rounded-[3rem] overflow-hidden glass-card">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`p-16 relative group hover:bg-black/[0.02] transition-colors border-b lg:border-b-0 lg:border-r border-black/5 last:border-0`}
            >
              <div className="absolute top-8 right-8 text-6xl font-black text-black/5 group-hover:text-brand-gold/10 transition-colors">
                {step.number}
              </div>
              
              <div className="w-20 h-20 bg-brand-bg rounded-3xl flex items-center justify-center text-brand-gold text-3xl mb-10 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(180,83,9,0.2)] transition-all duration-500">
                <FontAwesomeIcon icon={step.icon} />
              </div>
              
              <h3 className="text-2xl font-black mb-6 tracking-widest text-brand-text group-hover:text-brand-gold transition-colors">{step.title}</h3>
              <p className="text-brand-soft leading-relaxed text-lg font-light">
                {step.desc}
              </p>
              
              <div className="mt-10 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-px bg-brand-gold"></div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">Paso {step.number}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
