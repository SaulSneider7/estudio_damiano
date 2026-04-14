import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFilePdf, faQuoteLeft, faDownload } from '@fortawesome/free-solid-svg-icons';

const publications = [
  {
    title: "Tratado de Peritaje Contable Judicial",
    author: "Dr. Juan Pérez Damiano",
    year: "2023",
    description: "Una guía exhaustiva sobre las normas y procedimientos del peritaje contable en el marco legal peruano.",
    category: "Libro"
  },
  {
    title: "Auditoría Forense: Detección de Fraude Corporativo",
    author: "Instituto IPECOF",
    year: "2022",
    description: "Metodologías avanzadas para la identificación de irregularidades financieras en grandes corporaciones.",
    category: "Manual Técnico"
  },
  {
    title: "El Lavado de Activos y la Prueba Pericial",
    author: "Dra. Elena Rodríguez",
    year: "2024",
    description: "Análisis crítico sobre la valoración de la prueba pericial en delitos de lavado de activos y minería ilegal.",
    category: "Artículo Científico"
  },
  {
    title: "Guía Práctica para la Extinción de Dominio",
    author: "Comisión Técnica IPECOF",
    year: "2021",
    description: "Procedimientos contables para la determinación de desbalance patrimonial en procesos de pérdida de dominio.",
    category: "Guía"
  }
];

export const Bibliography = () => {
  return (
    <section className="py-24 bg-[#F1F5F9]" id="bibliografia">
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
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-tertiary-fixed">Recursos Académicos</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-container tracking-tighter mb-6">
              Bibliografía y <span className="text-tertiary-fixed italic font-light">Publicaciones</span>
            </h2>
            <p className="text-on-surface-variant font-light text-lg leading-relaxed">
              Nuestra contribución al desarrollo académico y técnico del peritaje contable forense a través de publicaciones especializadas.
            </p>
          </div>
          <div className="hidden lg:block">
            <FontAwesomeIcon icon={faBook} className="text-8xl text-primary-container/5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row gap-6"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-primary-container/5 rounded-2xl flex items-center justify-center text-primary-container group-hover:bg-tertiary-fixed group-hover:text-on-tertiary-fixed-variant transition-colors duration-500">
                <FontAwesomeIcon icon={faFilePdf} className="text-2xl md:text-3xl" />
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed bg-tertiary-fixed/10 px-2 py-1 rounded">
                    {pub.category}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {pub.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary-container mb-2 group-hover:text-tertiary-fixed transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm font-bold text-slate-500 mb-4 italic">
                  Por: {pub.author}
                </p>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  {pub.description}
                </p>
                
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary-container hover:text-tertiary-fixed transition-colors">
                  <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
                  Solicitar acceso al documento
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 relative py-12 px-8 bg-white rounded-3xl border border-slate-100 shadow-inner text-center overflow-hidden"
        >
          <FontAwesomeIcon icon={faQuoteLeft} className="absolute top-8 left-8 text-6xl text-slate-50" />
          <p className="text-2xl md:text-3xl font-light italic text-primary-container max-w-4xl mx-auto relative z-10 leading-relaxed">
            "La excelencia en el peritaje no solo reside en el análisis de los números, sino en la capacidad de transformar la complejidad técnica en verdad jurídica."
          </p>
          <div className="mt-8 h-1 w-24 bg-tertiary-fixed mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};
