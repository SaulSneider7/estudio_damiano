import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Hero = () => {
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 800], [0, 300]);
  const overlayY = useTransform(scrollY, [0, 800], [0, 100]);

  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary-container">
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/hero.webp"
          alt="Oficina de lujo"
          referrerPolicy="no-referrer"
          style={{ y: imageY }}
          className="w-full h-[115%] object-cover will-change-transform"
        />

        <motion.div
          style={{ y: overlayY }}
          className="absolute inset-0 bg-gradient-to-b from-primary-container/60 via-primary-container/40 to-primary-container/80"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[11px] font-bold tracking-[0.3em] uppercase text-tertiary-fixed border border-tertiary-fixed/30 rounded-full bg-tertiary-fixed/5"
          >
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
            Consultoría de Elite
          </motion.span>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white leading-[0.9] mb-8">
            Justicia <br />
            <span className="text-tertiary-fixed italic font-light">Contable</span> <br />
            de Precisión
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed mb-12 max-w-2xl">
            Especialistas en peritaje forense y auditoría antifraude para casos de alta complejidad legal y financiera.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="https://wa.me/51962693186"
              className="group px-10 py-5 bg-tertiary-fixed text-on-tertiary-fixed-variant font-bold rounded-full shadow-2xl hover:shadow-tertiary-fixed/20 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              Consulta WhatsApp
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
            </a>

            <a
              href="#servicios"
              className="group px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              Ver Servicios
              <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};