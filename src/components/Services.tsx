import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileShield, faGavel, faShip, faHandHoldingDollar, faLandmark, faUserSecret, faCalculator, faHandshakeSlash, faUserTie, faCoins, faBuildingShield } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Services() {
  const services = [
    {
      icon: faUserSecret,
      title: "Peritaje Contable en Lavado de Activos",
      desc: "Examina la legalidad a recursos de origen ilícito. Adquirir, resguardar, invertir, transformar, transportar, custodiar y administrar bienes o ganancias ilícitos.",
      whatsapp: "Hola, me gustaría solicitar información sobre el Peritaje Contable en Lavado de Activos."
    },
    {
      icon: faBuildingShield,
      title: "Peritaje Contable en Contrataciones del Estado",
      desc: "El peritaje contable examina el presunto direccionamiento en las contrataciones públicas en agravio del estado.",
      whatsapp: "Hola, me gustaría solicitar información sobre el Peritaje Contable en Contrataciones del Estado."
    },
    {
      icon: faShip,
      title: "Peritaje Contable en Delitos Aduaneros",
      desc: "Examina las infracciones aduaneras y las mercancías que son objeto de delito incautadas por el fiscal, quedando en custodia de la Administración Aduanera.",
      whatsapp: "Hola, me gustaría solicitar información sobre el Peritaje Contable en Delitos Aduaneros."
    },
    {
      icon: faHandHoldingDollar,
      title: "Peritaje Contable en Delitos Contra el Patrimonio",
      desc: "Examina los delitos más comunes contra el patrimonio, como son el hurto, el robo, la estafa, las defraudaciones, la apropiación indebida o daños.",
      whatsapp: "Hola, me gustaría solicitar información sobre el Peritaje Contable en Delitos Contra el Patrimonio."
    },
    {
      icon: faLandmark,
      title: "Peritaje Contable en Extinción de Dominio",
      desc: "Determina el desbalance patrimonial vinculado a delitos como lavado de activos, corrupción de funcionarios, crimen organizado y otros.",
      whatsapp: "Hola, me gustaría solicitar información sobre el Peritaje Contable en Extinción de Dominio."
    },
    {
      icon: faGavel,
      title: "Peritaje Contable Anticorrupción",
      desc: "Examina y determina el presunto perjuicio económico en los delitos de corrupción de funcionarios.",
      whatsapp: "Hola, me gustaría solicitar información sobre el Peritaje Contable Anticorrupción."
    },
    {
      icon: faFileShield,
      title: "Peritaje Contable Tributario",
      desc: "Elaboración de una prueba pericial motivado por la discrepancia de criterios entre la Administración Tributaria y la empresa.",
      whatsapp: "Hola, me gustaría solicitar información sobre el Peritaje Contable Tributario."
    },
    {
      icon: faUserSecret,
      title: "Auditoria Forense Antifraude",
      desc: "Máxima especialización del Contador Público, que atiende de manera integral el Fraude, la Corrupción y el Lavado de Dinero.",
      whatsapp: "Hola, me gustaría solicitar información sobre la Auditoria Forense Antifraude."
    },
    {
      icon: faCalculator,
      title: "Peritaje Contable para Cálculo de Intereses Legales",
      desc: "Se utilizará cuando deba pagarse interés, sin haberse fijado la tasa, el deudor debe abonar el interés legal según el Código Civil.",
      whatsapp: "Hola, me gustaría solicitar información sobre el Peritaje Contable para Cálculo de Intereses Legales."
    },
    {
      icon: faHandshakeSlash,
      title: "Peritaje Contable para Deudas",
      desc: "Estudia la obligación de devolver cuantía de dinero. El Perito analizará si las condiciones son legales y la clasificación del deudor.",
      whatsapp: "Hola, me gustaría solicitar información sobre el Peritaje Contable para Deudas."
    },
    {
      icon: faUserTie,
      title: "Peritaje Contable en Materia Laboral",
      desc: "Se aplica en juicios laborales sobre reclamaciones de beneficios sociales, reintegro de sueldo o vacaciones, a fin de señalar el monto reclamado.",
      whatsapp: "Hola, me gustaría solicitar información sobre el Peritaje Contable en Materia Laboral."
    },
    {
      icon: faCoins,
      title: "Peritaje Contable Financiero",
      desc: "Ofrecimiento de elementos de convicción aplicables a operaciones financieras indispensables para la solución de controversias en juicio.",
      whatsapp: "Hola, me gustaría solicitar información sobre el Peritaje Contable Financiero."
    }
  ];

  const getWhatsAppLink = (text: string) => {
    return `https://wa.me/51962693186?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="servicios" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold mb-4 block">Nuestras Especialidades</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-brand-text">
              SERVICIOS DE <br />
              <span className="gold-gradient italic">ALTA ESPECIALIZACIÓN</span>
            </h2>
            <p className="text-brand-soft text-lg max-w-2xl mx-auto font-light">
              Ofrecemos peritajes contables de precisión quirúrgica para la resolución de controversias legales y financieras de alta complejidad.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group p-1 bg-gradient-to-br from-black/5 to-transparent rounded-[2rem] hover:from-brand-gold/40 transition-all duration-500 shadow-lg"
            >
              <div className="bg-white p-8 rounded-[1.9rem] h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-gold text-xl group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                  <div className="text-3xl font-black text-black/5">0{idx + 1}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-brand-text leading-tight group-hover:text-brand-gold transition-colors">{service.title}</h3>
                <p className="text-brand-soft text-sm mb-8 flex-grow leading-relaxed font-light">
                  {service.desc}
                </p>
                
                <motion.a
                  href={getWhatsAppLink(service.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-brand-bg border border-brand-gold/20 text-brand-gold rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                  Solicitar Servicio
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
