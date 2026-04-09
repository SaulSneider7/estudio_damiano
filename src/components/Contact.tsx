import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  return (
    <section id="contacto" className="py-32 bg-brand-surface relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold mb-4 block">Hablemos</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-brand-text">¿LISTO PARA <br /><span className="gold-gradient italic">EL SIGUIENTE NIVEL?</span></h2>
          <p className="text-brand-soft text-lg mb-16 font-light max-w-2xl mx-auto">
            Estamos listos para transformar su realidad financiera. Contáctenos hoy mismo y descubra el poder de una asesoría de élite.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: faPhone, label: "Línea Directa", value: "+51 962 693 186", href: "tel:+51962693186" },
              { icon: faEnvelope, label: "Correo Corporativo", value: "estudiodamianoasociados@gmail.com", href: "mailto:estudiodamianoasociados@gmail.com" },
              { icon: faMapMarkerAlt, label: "Sede Central", value: "Elmer Faucett 330 - San Miguel, Lima", href: "#" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-brand-bg rounded-3xl flex items-center justify-center text-brand-gold text-2xl group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 shadow-sm mb-6">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2">{item.label}</div>
                <a href={item.href} className="text-lg font-bold text-brand-text hover:text-brand-gold transition-colors break-all">{item.value}</a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
