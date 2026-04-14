import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake,
  faShieldHalved,
  faEye,
  faScaleBalanced,
  faFileContract,
  faBolt,
  faBuildingColumns
} from '@fortawesome/free-solid-svg-icons';

const characteristics = [
  { text: "Honestidad e Idoneidad", icon: faHandshake },
  { text: "Confiabilidad", icon: faShieldHalved },
  { text: "Transparencia", icon: faEye },
  { text: "Equidad y justicia", icon: faScaleBalanced },
  { text: "Servicios Periciales", icon: faFileContract },
  { text: "RÁPIDO Y EFICIENTE", icon: faBolt },
];

export const Characteristics = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <section
      ref={containerRef}
      style={{ position: 'relative' }}
      className="min-h-[720px] md:min-h-[800px] flex items-center justify-center overflow-hidden py-16 md:py-24"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/parallax.webp"
          alt="Parallax Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary-container/85"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-10 md:mb-12">
            Nos caracterizamos por:
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mb-10 md:mb-16">
            {characteristics.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 md:gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-tertiary-fixed/20 flex items-center justify-center text-tertiary-fixed border border-tertiary-fixed/30 shadow-lg">
                  <FontAwesomeIcon icon={item.icon} className="text-xl md:text-2xl" />
                </div>
                <span className="text-white font-bold tracking-tight text-base sm:text-lg md:text-xl leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 md:p-8 rounded-2xl max-w-2xl w-full"
          >
            <div className="w-12 h-12 shrink-0 bg-tertiary-fixed rounded-full flex items-center justify-center text-primary-container">
              <FontAwesomeIcon icon={faBuildingColumns} className="text-xl" />
            </div>

            <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed text-center sm:text-left">
              Estamos registrados en la nómina del registro de peritos{" "}
              <span className="text-tertiary-fixed font-bold">REPEF</span> de la Fiscalía de la Nación.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};