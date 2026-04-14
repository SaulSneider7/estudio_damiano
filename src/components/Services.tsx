import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGavel, 
  faShieldHalved, 
  faMagnifyingGlass, 
  faScaleBalanced, 
  faPercent, 
  faReceipt, 
  faLock, 
  faGlobe,
  faBriefcase,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Peritaje Contable en Lavado de Activos",
    description: "Análisis exhaustivo de la legalidad de recursos. Identificamos el origen ilícito, resguardo y administración de bienes o ganancias bajo sospecha.",
    icon: faLock,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTNX9CVPHzN7CsIl3DtQbkytSkXLaZ-cvZ-iFAA-K-HdpPOjEwunY1w5dlXhtLAY_EwHMdmKTq4TImUEDlYGagLYqQxiiGKk-akDnj_eb9dlMHzbjv_tomyzY7SDXu00AjeJuZajMgbcMdDhg4O7G-GhdquaVRrdvpYbA7V4-NtmNUWgIbFV2pMble3s3ldlgNWnX32ZHTIi2zLiUjrgTBghHhP456Gf7RddLAi7N08RKVNJdZMZvAdPxmVseN6Ez2vPu4Nk4VOih8"
  },
  {
    title: "Peritaje Contable en Contrataciones del Estado",
    description: "Examen técnico de presuntos direccionamientos en licitaciones públicas y contrataciones en agravio del Estado Peruano.",
    icon: faGavel,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMk5mNS0VWB2ngKmoZcWHOi6ZN8oTV5Hri-K1-2iAb77c-4AqXg_uzwbibUv0qioeSJxelJIv4nBQHQQ-KJj-E62inzkDJ-0hiMpsxNzqXQVsUw2ppogd7XEnblMcWvEWPHSKZ2ILsuN94PXzV2pAfx7P6IFPQt8FR4uIjObb_9VPo59LWY73iCFc1xTceQNfrKlbYwrC10p7gP5ntbKXsQDtqKsF6K6E5a570vfu2K0rUPBYjqyoMZb7u6v5ioEU9Ocflyg7PKlAx"
  },
  {
    title: "Peritaje Contable en Delitos Aduaneros",
    description: "Determinación de infracciones aduaneras y valoración de mercancías incautadas en procesos de contrabando y defraudación.",
    icon: faGlobe,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-wemzT2MNPrQ9jEeOVy2c0P4a-HQ0zwYBNko86Pw4_cDP708-ApHDGaSQmb2_KzhuFQWhUN5JjczNJuuuF79ud0BP5MBPz2mt8Z8qqsT-H1kiJgoOfoXF3FsxgcRCpY6wxrPdk5tH61W3UoGGlA5hzMd9dmWnrCNPuIRgX6P8xs0y0eDAA8UEAY95179Kk0U6H7NfWx0xhP62h0hkei1t7u1929wngxhKJp5mxdPHh69Xj4wHAxev4A7vE4F1a77-tRlwlfvmVJSL"
  },
  {
    title: "Peritaje Contable en Delitos Contra el Patrimonio",
    description: "Evaluación de daños en delitos de hurto, robo, estafa, apropiación indebida y otras defraudaciones económicas.",
    icon: faShieldHalved,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo0Q5Odg0JVPnulLtXMmpoBnpPX1ahN4F0imysLHS6LSVJ4z8YqdDjTPOk93RSZrQ8_ibZeJgyHC1cvukHK0TqCxnfSejqKqaDQ5H8CHspSycCal6J0h9zyisCSeCW7nBkxMDeJeYS7et2QOwtYst-pPCuS5af8RLGhVlRXc0pOu8WGmgvtz8N-zeMZjlT-0R6exSLb5aQraEps9Y8LqHGY0Y1ncvMhwGf8yOCya8KneDsNGtpIJMEL5dIrSF6MtEE2w2I3dsipCzl"
  },
  {
    title: "Peritaje Contable en Extinción de Dominio",
    description: "Determinación técnica de desbalance patrimonial vinculado a actividades ilícitas para procesos de pérdida de dominio.",
    icon: faScaleBalanced,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv6uDBykGN9UgcNxx9T-ygQCpF_i9bG_8y2E5X3gZzSMXWyDfEeZS9ZRLY-GARx9IPyBWNO5scH4BG7WY37YwBf3Uh054Gw6vmw0Mg1GhKTMA2fG2gep2voM8WPEeFueOh_I4Tq7rEmwiaogk-BfM8GTpAezEe7BFSZDPK-qgb2HL6QLzeM3dMmCC_TbYEk5efpmxsxyESCqgFP2H9mp9LWN1VVWW74InDlNSgyGuNrEZRTsjJ6ECxASfGARwpEgU941ULWJY2fdlI"
  },
  {
    title: "Peritaje Contable Anticorrupción",
    description: "Cuantificación precisa del perjuicio económico en delitos de corrupción de funcionarios y malversación de fondos.",
    icon: faScaleBalanced,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK_oLqBF4O9QAztjQ12vPnccFZyXXoXNas4i_Ej6lNLqKyLeH3k8Zb86ATrCk2PKy0GEYw7G6H9RpcKUpOAy_gFSaHmARofGslMFixKre2nHdaNGviPqPVakE7xV2GE4GzxDzSG3mdy2MGyzZj6NGlsxCkhiDQvS97pLOenkB-52ywtVu1Hmar3nfnxRMTrcr_6fhBTDrNfH8_SZEnp6dUlqxuYlcWr7XM1WpiaB04-MZGhMnkku9qVRQbtcuGB2XlzLBR4lcHJUbz"
  },
  {
    title: "Peritaje Contable Tributario",
    description: "Elaboración de pruebas periciales ante discrepancias con la Administración Tributaria (SUNAT) y procesos contenciosos.",
    icon: faReceipt,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdoXgLQSTa5QW8pAnbMEQlVca0zNQAxYtg9tz1OCrpfWYFI9Qp8UMeMrGCeHecntKOz9CozP9bFDYJ2Trt6qNcKfopn9CPhRLpBIFEWQdE9Rh42Z-MnJEphHQucM-5F8TR4PoWIi7e2b7DbQt5u5TymI05EorEkHFa9gkSv7t-oaJa1qBdeiIRgteXgPGbZ5ebNuMSiQ5rzUR9F8IUyIm9SnhMoZvJ-PdIEKVPgLwaNk5t7liTWNXfjbR4h7oblvkqUCaC3rAK91a2"
  },
  {
    title: "Auditoria Forense Antifraude",
    description: "Especialización integral para la detección y prevención de Fraude Corporativo, Corrupción y Lavado de Dinero.",
    icon: faMagnifyingGlass,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzD63oRDUHNUpuTuxCG0qhKRYxi_IVeFNEWM-84YLui_5cS4ZZ-b-iihn4N9eQIFU-23ju1tkPD_WosWznJYKsM125LrAyaPoy1Lkz_6fR86w--Xd3fXvqyI8JDLTkgMw2XVwSxTXDE-jcO7tAAiRSFrIR17jhzzDi5l5ZThXWtcj0ue6Mm8aeg33UaurT9jpYikoKyns_P8c33kBtMkXTOw454XqTbOq6EB1yNrMBWQN71HVHWSGCv8cVK22YXxD4Cl3m-0iTf2Tv"
  },
  {
    title: "Peritaje Contable para Cálculo de Intereses Legales",
    description: "Cálculo técnico-matemático de intereses legales y compensatorios bajo normativa del Código Civil.",
    icon: faPercent,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbVMUPo83cwY9-A2KTWbk9DvIs-pwsDpra4hv414RbOzVCEbjAyZoagjwNMBXMT9NtjcXSL7OKBBuAVgnDk4n7Q6nvuDzAr8njNZDzlfmjwJJvllXlyqlJs7O8LI6QpKDo84F6gXj6Wl5cTGcn9zkTr-PqMItivP55wkWOusn0K7TIkByIACZNayVethRvClM878-mtfzNji-5ZQ8xgrbFQ2mQ5ghxeAdNZGbjYpQXhUSd5Na7bC1y_s8xwgYDikpLOeE4x7uXWBPJ"
  }
];

export const Services = () => {
  const handleRequestService = (serviceTitle: string) => {
    const phoneNumber = "51962693186";
    const message = encodeURIComponent(`Hola, me gustaría solicitar más información sobre el servicio de: ${serviceTitle}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-32 bg-[#F8FAFC] relative overflow-hidden" id="servicios">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-tertiary-fixed/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-container/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-12 bg-tertiary-fixed"></span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-tertiary-fixed">Nuestra Especialidad</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#001D36] tracking-tighter mb-8 leading-[1.1]">
              Servicios de <span className="text-tertiary-fixed italic font-light">Especialización</span> Forense
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
              Análisis técnico-contable de alta precisión para sustentar procesos legales complejos ante entidades judiciales y corporativas.
            </p>
          </div>
          <div className="hidden lg:block relative">
            <span className="text-[12rem] font-black text-slate-200/50 select-none leading-none tracking-tighter">
              EXPERT
            </span>
            <div className="absolute top-1/2 left-0 w-full h-1 bg-tertiary-fixed/20 -translate-y-1/2"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col h-full"
            >
              {/* Card Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D36]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Floating Icon */}
                <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center text-[#001D36] transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <FontAwesomeIcon icon={service.icon} className="text-2xl" />
                </div>

                {/* Service Tag */}
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Forense
                  </span>
                </div>
              </div>

              {/* Card Content Section */}
              <div className="p-10 flex flex-col flex-grow relative">
                {/* Decorative Number */}
                <span className="absolute top-6 right-10 text-6xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                  0{index + 1}
                </span>

                <h3 className="text-2xl font-bold text-[#001D36] mb-4 leading-tight group-hover:text-tertiary-fixed transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-10 flex-grow font-medium text-[15px]">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <button 
                    onClick={() => handleRequestService(service.title)}
                    className="group/btn relative w-full py-5 bg-[#001D36] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-2xl overflow-hidden transition-all duration-300 hover:bg-tertiary-fixed hover:text-on-tertiary-fixed-variant shadow-lg hover:shadow-tertiary-fixed/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Consultar Especialista
                      <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-tertiary-fixed/20 rounded-3xl pointer-events-none transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.4em] mb-8">¿No encuentra el servicio que busca?</p>
          <a 
            href="https://wa.me/51962693186"
            className="inline-flex items-center gap-4 px-12 py-6 bg-white border-2 border-slate-200 text-[#001D36] font-bold rounded-full hover:border-tertiary-fixed hover:text-tertiary-fixed transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <FontAwesomeIcon icon={faBriefcase} />
            Solicitar Evaluación Personalizada
          </a>
        </motion.div>
      </div>
    </section>
  );
};
