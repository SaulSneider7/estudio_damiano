import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronLeft, 
  faChevronRight, 
  faCheckCircle, 
  faScaleBalanced, 
  faBuilding, 
  faGraduationCap, 
  faFire, 
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

const sliderImages = [
  "/carrusel1.webp",
  "/carrusel2.webp",
  "/carrusel3.webp",
  "/carrusel4.webp",
];

export const ExpertiseSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % sliderImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden" id="nosotros">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-container tracking-tighter mb-4">
                ¿Necesitas respaldo contable o legal de confianza?
              </h2>
              <p className="text-lg text-on-surface-variant font-medium">
                En Estudio Damiano & Asociados ponemos tu caso en manos de verdaderos expertos 👨‍💼📊
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-tertiary-fixed">
                  <FontAwesomeIcon icon={faScaleBalanced} className="text-xl" />
                  <h3 className="font-black uppercase tracking-widest text-sm">PERITAJE CONTABLE</h3>
                </div>
                <ul className="space-y-2">
                  {["Lavado de activos", "Anticorrupción", "Materia laboral", "Cálculo de intereses", "Daño emergente y lucro cesante"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-tertiary-fixed text-[10px]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-tertiary-fixed">
                  <FontAwesomeIcon icon={faBuilding} className="text-xl" />
                  <h3 className="font-black uppercase tracking-widest text-sm">CONSTITUCIÓN DE EMPRESAS</h3>
                </div>
                <ul className="space-y-2">
                  {["Formalización rápida", "Modificación de estatutos", "Incremento patrimonial", "Transformación y extinción de empresas"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-tertiary-fixed text-[10px]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 pt-6 border-t border-surface-container-high"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container/5 flex items-center justify-center text-primary-container shrink-0">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Contamos con especialistas con grados de maestría y doctorado, experiencia en <span className="font-bold text-primary-container">REPEJ</span> y ex Ministerio Público.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed/10 flex items-center justify-center text-tertiary-fixed shrink-0">
                  <FontAwesomeIcon icon={faFire} />
                </div>
                <p className="text-sm text-on-surface-variant font-bold">
                  Más de 16 años ayudando a empresas y emprendedores en todo el Perú
                </p>
              </div>

              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2 text-sm font-bold text-primary-container">
                  <FontAwesomeIcon icon={faLocationDot} className="text-tertiary-fixed" />
                  San Miguel | Andahuaylas
                </div>
                <a 
                  href="https://wa.me/51962693186"
                  className="flex items-center gap-2 text-sm font-black text-tertiary-fixed hover:underline"
                >
                  <FontAwesomeIcon icon={faPhone} />
                  Escríbenos por WhatsApp y recibe asesoría inmediata
                </a>
              </div>

              <div className="bg-primary-container text-white p-4 rounded-xl inline-block">
                <p className="text-sm font-bold tracking-tight">
                  👉 Tu caso merece resultados, no improvisaciones
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={sliderImages[currentImage]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-contain will-change-transform bg-primary-container"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-transparent to-transparent"></div>

              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={prevImage}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-primary-container transition-all"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button 
                  onClick={nextImage}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-primary-container transition-all"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {sliderImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${currentImage === i ? "w-8 bg-tertiary-fixed" : "w-2 bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};