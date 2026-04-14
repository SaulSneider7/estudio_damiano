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
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/parallax.webp" 
          alt="Parallax Background" 
          className="w-full h-[150%] object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary-container/85 "></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-12">
            Nos caracterizamos por:
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
            {characteristics.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-tertiary-fixed/20 flex items-center justify-center text-tertiary-fixed border border-tertiary-fixed/30 shadow-lg">
                  <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                </div>
                <span className="text-white font-bold tracking-tight text-lg md:text-xl">
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
            className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl max-w-2xl"
          >
            <div className="w-12 h-12 shrink-0 bg-tertiary-fixed rounded-full flex items-center justify-center text-primary-container">
              <FontAwesomeIcon icon={faBuildingColumns} className="text-xl" />
            </div>
            <p className="text-white text-lg md:text-xl font-medium leading-tight text-left">
              Estamos registrados en la nómina del registro de peritos <span className="text-tertiary-fixed font-bold">REPEF</span> de la Fiscalía de la Nación.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
