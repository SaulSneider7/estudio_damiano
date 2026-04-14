import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faVideo } from '@fortawesome/free-solid-svg-icons';

const videos = [
  {
    title: "Introducción al Peritaje Contable Forense",
    description: "Conozca la importancia del peritaje técnico en los procesos judiciales modernos.",
    youtubeId: "v_1H6v_1H6A", // Placeholder ID
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Auditoría Antifraude y Prevención",
    description: "Técnicas avanzadas para la detección temprana de irregularidades financieras.",
    youtubeId: "dQw4w9WgXcQ", // Placeholder ID
    thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Lavado de Activos: Casos de Estudio",
    description: "Análisis de metodologías utilizadas en la determinación de origen ilícito de fondos.",
    youtubeId: "v_1H6v_1H6A", // Placeholder ID
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  }
];

export const Videos = () => {
  return (
    <section className="py-24 bg-white" id="videos">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-12 bg-tertiary-fixed"></span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-tertiary-fixed">Multimedia</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-container tracking-tighter mb-6">
              Centro de <span className="text-tertiary-fixed italic font-light">Conocimiento</span>
            </h2>
            <p className="text-on-surface-variant font-light text-lg">
              Explore nuestros recursos audiovisuales sobre auditoría forense, peritaje judicial y prevención de delitos financieros.
            </p>
          </div>
          <div className="hidden md:block">
            <FontAwesomeIcon icon={faVideo} className="text-7xl text-surface-container-high opacity-20" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface-container-low rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-surface-container-low"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary-container/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <FontAwesomeIcon icon={faPlay} className="text-xl ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded">
                  HD 1080p
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary-container mb-3 group-hover:text-tertiary-fixed transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  {video.description}
                </p>
                <button className="text-xs font-bold uppercase tracking-widest text-primary-container flex items-center gap-2 group/link">
                  Ver video completo
                  <span className="w-8 h-px bg-primary-container/20 group-hover/link:w-12 group-hover/link:bg-tertiary-fixed transition-all"></span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-primary-container rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary-fixed/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-2xl font-bold text-white mb-4 relative z-10">¿Desea una capacitación para su equipo?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">Ofrecemos seminarios y talleres especializados en auditoría forense y prevención de fraude para instituciones públicas y privadas.</p>
          <a 
            href="https://wa.me/51962693186"
            className="inline-flex items-center gap-3 px-8 py-4 bg-tertiary-fixed text-on-tertiary-fixed-variant font-bold rounded-full hover:scale-105 transition-transform relative z-10"
          >
            Solicitar Información
            <FontAwesomeIcon icon={faVideo} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
