import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faHistory, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const Features = () => {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="nosotros">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-tertiary-fixed/30 rounded-full blur-3xl"></div>
            <div className="bg-white p-4 shadow-2xl relative z-10 rounded-lg">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXv-gaBNf1XWMHn-2k8ugy6v-TpKTUgb6it6gMaP4--1ys9HPB4F13Hj_wpQPKdkJbEKPif42mcr0ZdNier9-dJkowQlZSxmAruomEeBqYQAm_gJqjgVxZXb_KPvLFxneHad6wgtgTVwDjqY0qynDrM1U002qnlr8bUR-ti1iIR-iDQJf5AWE40y8WUpxp9fD1c1vVKdQ8MJbPcmxnvzf_FG7DkApzXdHGxz23lpXyghmczy3DD85U5fIAH31JdonqIO-Jk99EjqnA" 
                alt="Perito contable" 
                className="w-full h-[500px] object-cover rounded-md"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-primary-container tracking-tighter mb-8">Por qué elegir a Damiano & Asociados</h2>
            <ul className="space-y-8">
              <li className="flex gap-6">
                <FontAwesomeIcon icon={faCircleCheck} className="w-8 h-8 text-tertiary-fixed shrink-0" />
                <div>
                  <h4 className="font-bold text-primary-container mb-1">Rigor Metodológico</h4>
                  <p className="text-sm text-on-surface-variant">Aplicamos los más altos estándares de auditoría forense para garantizar que cada informe pericial sea inquebrantable.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 text-tertiary-fixed shrink-0" />
                <div>
                  <h4 className="font-bold text-primary-container mb-1">Confidencialidad Absoluta</h4>
                  <p className="text-sm text-on-surface-variant">Entendemos la sensibilidad de los delitos financieros; manejamos su información con protocolos de máxima seguridad.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <FontAwesomeIcon icon={faHistory} className="w-8 h-8 text-tertiary-fixed shrink-0" />
                <div>
                  <h4 className="font-bold text-primary-container mb-1">Resultados Comprobados</h4>
                  <p className="text-sm text-on-surface-variant">Nuestros dictámenes han sido piezas clave en la resolución de casos de alto perfil a nivel nacional.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
