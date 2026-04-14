import { motion } from 'framer-motion';

const partners = [
  "Fiscalía de la Nación",
  "Poder Judicial",
  "OSCE",
  "REPEF",
  "Colegio de Contadores",
  "IPECOF",
  "SUNAT",
  "SBS",
];

export const LogoCarousel = () => {
  // Duplicate the array to create a seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="bg-surface-container-low py-12 overflow-hidden border-y border-surface-container-high">
      <div className="max-w-7xl mx-auto px-8 mb-6">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant text-center opacity-60">
          Instituciones y Alianzas
        </h3>
      </div>
      
      <div className="relative flex">
        <motion.div 
          className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedPartners.map((partner, idx) => (
            <div 
              key={idx} 
              className="text-xl md:text-2xl font-black text-primary-container/20 uppercase tracking-tighter hover:text-primary-container/40 transition-colors cursor-default select-none"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
