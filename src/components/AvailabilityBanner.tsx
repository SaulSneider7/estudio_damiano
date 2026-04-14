import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const AvailabilityBanner = () => {
  return (
    <section className="w-full bg-tertiary-fixed py-8 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-on-tertiary-fixed-variant tracking-tighter text-center">
          Estamos siempre disponibles
        </h2>
        <a 
          href="tel:+51962693186"
          className="flex items-center gap-4 px-8 py-4 bg-primary-container text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform active:scale-95"
        >
          <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-primary-container">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <span className="text-xl">+51 962 693 186</span>
        </a>
      </div>
    </section>
  );
};
