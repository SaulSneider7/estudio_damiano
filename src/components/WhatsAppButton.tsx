import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 mb-2 hidden md:block"
      >
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#001D36]">
          ¿Necesita asesoría? <span className="text-tertiary-fixed">En línea</span>
        </p>
      </motion.div>

      <motion.a 
        href="https://wa.me/51962693186"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] group"
        aria-label="WhatsApp"
      >
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></span>
        
        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl relative z-10" />
      </motion.a>
    </div>
  );
};
