export const Stats = () => {
  return (
    <section className="bg-primary-container text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          <div>
            <div className="text-4xl font-bold text-tertiary-fixed mb-1">15+</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400">Años de Trayectoria</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-tertiary-fixed mb-1">500+</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400">Casos Dictaminados</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-tertiary-fixed mb-1">100%</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400">Confidencialidad</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-tertiary-fixed mb-1">Elite</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400">Staff Especializado</div>
          </div>
        </div>
      </div>
    </section>
  );
};
