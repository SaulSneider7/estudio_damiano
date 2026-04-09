import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faChartLine, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: faShieldHalved,
      title: "Integridad Absoluta",
      desc: "Operamos bajo los más altos estándares éticos y legales, garantizando su tranquilidad total."
    },
    {
      icon: faChartLine,
      title: "Visión Estratégica",
      desc: "No solo reportamos el pasado, proyectamos su futuro con análisis de datos avanzado."
    },
    {
      icon: faUsers,
      title: "Atención de Élite",
      desc: "Un equipo de especialistas dedicados exclusivamente a potenciar el valor de su organización."
    }
  ];

  return (
    <section id="por-que-elegirnos" className="py-32 bg-brand-surface relative overflow-hidden">
      {/* Background Text Accent */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-black text-black/[0.02] leading-none">ELITE</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold mb-4 block">Diferenciación</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-brand-text">
              ¿POR QUÉ <br />
              <span className="gold-gradient italic">ELEGIRNOS?</span>
            </h2>
          </div>
          <p className="text-brand-soft text-xl leading-relaxed font-light">
            En un mercado saturado de generalistas, nosotros nos especializamos en la excelencia. Nuestra metodología combina precisión técnica con una visión audaz del crecimiento empresarial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group p-12 glass-card rounded-[3rem] transition-all duration-500 border-black/5"
            >
              <div className="w-20 h-20 bg-brand-gold/10 rounded-3xl flex items-center justify-center text-brand-gold text-3xl mb-10 group-hover:scale-110 transition-all duration-500">
                <FontAwesomeIcon icon={reason.icon} />
              </div>
              <h3 className="text-2xl font-black mb-6 text-brand-text transition-colors">{reason.title}</h3>
              <p className="text-brand-soft leading-relaxed transition-colors">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
