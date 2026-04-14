export const Commitment = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#0D1B2A] text-white p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-4">
          Estamos para ayudar
        </h2>
        <p className="text-base md:text-lg font-light text-slate-300 leading-relaxed">
          Estamos para ayudarte Ofrecemos servicios integrales de Peritaje. Tenemos los mejores profesionales para ayudarle a ganar su juicio
        </p>
      </div>

      <div className="bg-[#FFC107] text-[#0D1B2A] p-8 md:p-12 flex flex-col justify-center items-start">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-3">
          Contáctanos
        </h2>
        <p className="text-base md:text-lg font-medium mb-6">
          Reciba una orientación personalizada inmediata para su caso. Nuestros expertos están listos para atenderle.
        </p>
        <a
          href="tel:+51962693186"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#0D1B2A] text-white font-bold rounded shadow-xl hover:scale-105 transition-transform uppercase tracking-widest text-base group"
        >
          Llamar Ahora
          <span className="text-amber-400 group-hover:text-white transition-colors">
            +51 962 693 186
          </span>
        </a>
      </div>
    </section>
  );
};