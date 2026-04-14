import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const ContactCTA = () => {
  return (
    <section className="py-24 bg-white" id="contacto">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-primary-container rounded-2xl p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden lg:block">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1sOvQDcf8AuMsurxftMpjQvZXQiSZr_TFE5hhpqJVY6LAG4Jk46IryN5HiQJsVCaI8j11G9Scnh5XdTGIM_LLHsr-6eCbd9tU8wqt2DlC7ZNnclJv_jMaqzTlnK5zGTQV5JqFRijKq_KGQ5f6OR5GhVNUvesTfNW1hgtMmR750sSZt-ryFXA9ibF7oTDEdyxTGa1pnRhBD2imFLwUfCJrDCDOASVJfUmpZzoK5Z5sBnHajsTrO5JQyHhNmKKWicT2A40rB5iO2rAb" 
              alt="Firma de documento" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">¿Necesita un Dictamen Pericial Especializado?</h2>
            <p className="text-slate-300 mb-10 text-lg">Hable directamente con nuestros especialistas y obtenga una evaluación preliminar de su caso.</p>
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-tertiary-fixed" />
                </div>
                <span className="text-xl font-medium">+51 962 693 186</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-tertiary-fixed" />
                </div>
                <span className="text-lg">estudiodamianoasociados@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed/20 flex items-center justify-center">
                  <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-tertiary-fixed" />
                </div>
                <span className="text-lg">Elmer Faucett 330 - San Miguel, Lima</span>
              </div>
            </div>
            <a 
              href="https://wa.me/51962693186"
              className="inline-flex items-center gap-3 px-10 py-5 bg-tertiary-fixed text-on-tertiary-fixed-variant font-bold rounded shadow-lg hover:scale-105 transition-transform uppercase tracking-wider text-sm"
            >
              Iniciar Consulta Ahora
              <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
