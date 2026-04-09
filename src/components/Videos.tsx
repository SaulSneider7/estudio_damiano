import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Videos() {
  const videos = [
    { title: "Optimización Fiscal 2024", category: "Tributario" },
    { title: "Gestión de Planillas", category: "Laboral" },
    { title: "Auditoría Preventiva", category: "Contable" },
  ];

  return (
    <section id="videos" className="py-32 bg-brand-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold mb-4 block">Contenido de Valor</span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-text">CÁPSULAS <br /><span className="gold-gradient italic">INFORMATIVAS</span></h2>
          </div>
          <p className="text-brand-soft max-w-sm text-lg font-light">
            Manténgase a la vanguardia con nuestro contenido exclusivo sobre las últimas tendencias del mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video bg-white rounded-3xl overflow-hidden mb-6 border border-black/5 shadow-sm">
                <img 
                  src={`https://picsum.photos/seed/video${idx}/800/450`} 
                  alt={video.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-brand-gold text-white rounded-full flex items-center justify-center text-xl shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <FontAwesomeIcon icon={faPlay} className="ml-1" />
                  </div>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2 block">{video.category}</span>
              <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-gold transition-colors">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
