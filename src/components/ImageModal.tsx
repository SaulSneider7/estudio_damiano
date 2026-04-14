import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onNext, 
  onPrev 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-0 right-0 md:-top-10 md:-right-10 text-white text-2xl p-2 hover:text-tertiary-fixed transition-colors"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <button
              onClick={onPrev}
              className="absolute left-0 md:-left-16 text-white text-3xl p-4 hover:text-tertiary-fixed transition-colors z-10"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <img
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />

            <button
              onClick={onNext}
              className="absolute right-0 md:-right-16 text-white text-3xl p-4 hover:text-tertiary-fixed transition-colors z-10"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <div className="absolute bottom-0 md:-bottom-10 left-0 right-0 text-center text-white text-sm font-light tracking-widest">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
