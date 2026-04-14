import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faUserTie, faScaleBalanced, faImages } from '@fortawesome/free-solid-svg-icons';
import { ImageModal } from './ImageModal';

const galleryImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCXv-gaBNf1XWMHn-2k8ugy6v-TpKTUgb6it6gMaP4--1ys9HPB4F13Hj_wpQPKdkJbEKPif42mcr0ZdNier9-dJkowQlZSxmAruomEeBqYQAm_gJqjgVxZXb_KPvLFxneHad6wgtgTVwDjqY0qynDrM1U002qnlr8bUR-ti1iIR-iDQJf5AWE40y8WUpxp9fD1c1vVKdQ8MJbPcmxnvzf_FG7DkApzXdHGxz23lpXyghmczy3DD85U5fIAH31JdonqIO-Jk99EjqnA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAUt1F3KtZD6YdnlGiGqIcrexgi7dWkjLSothZO1PD-Peq3-K-qBU6_tuRDDVpehVr0aBC8F38nFHm-qtsY98EIwCtN1ygMKSoYD0zjjF5ps6WfaRdy2o_L966LGJVYN2GofA6uL-Agt_1Za6qpFzWEOakBjYq2zlC4jRdiE4dh__MNzFuBnIVQwaBLAdVsdTpchro01s1EqGiCEJ9Lr3-3ItzolEQ6X21bHXa6QxI9NFWX6RLkkTxjVwGCsmLbXALXBYE71NIQqKEM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC1sOvQDcf8AuMsurxftMpjQvZXQiSZr_TFE5hhpqJVY6LAG4Jk46IryN5HiQJsVCaI8j11G9Scnh5XdTGIM_LLHsr-6eCbd9tU8wqt2DlC7ZNnclJv_jMaqzTlnK5zGTQV5JqFRijKq_KGQ5f6OR5GhVNUvesTfNW1hgtMmR750sSZt-ryFXA9ibF7oTDEdyxTGa1pnRhBD2imFLwUfCJrDCDOASVJfUmpZzoK5Z5sBnHajsTrO5JQyHhNmKKWicT2A40rB5iO2rAb",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCzD63oRDUHNUpuTuxCG0qhKRYxi_IVeFNEWM-84YLui_5cS4ZZ-b-iihn4N9eQIFU-23ju1tkPD_WosWznJYKsM125LrAyaPoy1Lkz_6fR86w--Xd3fXvqyI8JDLTkgMw2XVwSxTXDE-jcO7tAAiRSFrIR17jhzzDi5l5ZThXWtcj0ue6Mm8aeg33UaurT9jpYikoKyns_P8c33kBtMkXTOw454XqTbOq6EB1yNrMBWQN71HVHWSGCv8cVK22YXxD4Cl3m-0iTf2Tv"
];

export const Advisory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-24 bg-surface-container-low" id="asesoria">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase text-on-tertiary-fixed-variant bg-tertiary-fixed rounded">
              Nuestra Asesoría
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-container tracking-tighter mb-8 leading-tight">
              ASESORÍA EN PERITAJE CONTABLE JUDICIAL Y FISCAL
            </h2>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-8">
              Ante el constante cambio en las nuevas legislaciones, es imperativo contar con peritos contables idóneos. En Damiano & Asociados, somos especialistas en:
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm text-primary-container">
                  <FontAwesomeIcon icon={faScaleBalanced} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-container">Delitos Complejos</h4>
                  <p className="text-sm text-on-surface-variant">Expertos en delitos de corrupción de funcionarios y lavado de activos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm text-primary-container">
                  <FontAwesomeIcon icon={faUserTie} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-container">Contrataciones del Estado</h4>
                  <p className="text-sm text-on-surface-variant">Especialistas certificados por el OSCE en procesos de contratación pública.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm text-primary-container">
                  <FontAwesomeIcon icon={faCertificate} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-container">Acreditación Oficial</h4>
                  <p className="text-sm text-on-surface-variant">Acreditados en la nómina del REPEF, garantizando idoneidad técnica y legal.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => openModal(0)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-container text-white font-bold rounded-lg shadow-xl hover:bg-black transition-all group"
            >
              <FontAwesomeIcon icon={faImages} className="text-tertiary-fixed" />
              Ver Galería de Evidencia Técnica
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-lg"
                onClick={() => openModal(idx)}
              >
                <img 
                  src={img} 
                  alt={`Galería ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <FontAwesomeIcon icon={faImages} className="text-white text-2xl" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <ImageModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={galleryImages}
        currentIndex={currentImageIndex}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
};
