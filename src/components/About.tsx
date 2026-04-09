import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="nosotros" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-black/5 group">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Office" 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-[2rem] animate-bounce-slow border-black/5">
              <div className="text-5xl font-black text-brand-gold mb-2">15+</div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-text">Años de Excelencia</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold mb-4 block">Nuestra Esencia</span>
            <h2 className="text-6xl md:text-8xl font-black mb-10 leading-none text-brand-text">
              MÁS QUE <br />
              <span className="gold-gradient italic">ASESORES</span>
            </h2>
            <p className="text-brand-soft text-xl leading-relaxed mb-12 font-light">
              En <span className="text-brand-text font-bold">Estudio Damiano & Asociados</span>, no solo gestionamos números; forjamos el futuro de su empresa. Nuestra pasión por la excelencia nos impulsa a superar los estándares convencionales.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "MISIÓN", text: "Empoderar empresas a través de soluciones financieras de vanguardia." },
                { label: "VISIÓN", text: "Ser el referente indiscutible de consultoría estratégica en la región." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-brand-gold"></div>
                    <span className="text-[10px] uppercase tracking-widest font-black text-brand-gold">{item.label}</span>
                  </div>
                  <p className="text-sm text-brand-soft leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
