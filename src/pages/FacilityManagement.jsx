import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Building2, Wind, ShieldAlert, BadgeCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const facilityFeatures = [
  { icon: Building2, title: 'Corporate Housekeeping', desc: 'Daily maintenance, floor scrubbing, and workstation sanitization using industry-grade chemicals.' },
  { icon: Sparkles, title: 'Deep Cleaning Ops', desc: 'Post-construction cleaning, façade washing, and intensive carpet/upholstery shampooing.' },
  { icon: ShieldAlert, title: 'Pest Control', desc: 'Anti-termite, rodent, and general disinfestation treatments for commercial premises.' },
  { icon: Wind, title: 'HVAC & MEP', desc: 'Basic electrical, plumbing, and AC filter maintenance by skilled technicians.' },
];

export default function FacilityManagement() {
  return (
    <PageTransition>
      <PageHero 
        title="FACILITY MANAGEMENT" 
        subtitle="Immaculate environments driven by mechanized cleaning and trained hospitality professionals."
        image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
        caption="Facility Management"
        captionHindi="सुविधा प्रबंधन"
      />

      <section className="py-24 bg-gray-50 dark:bg-navy-950 transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-5xl font-bebas text-navy-900 dark:text-white mb-6 tracking-wide">
                BEYOND JUST BROOMS. <span className="text-gold-500">MECHANIZED EXCELLENCE.</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Manual wiping is obsolete. We deploy industrial-grade ride-on scrubbers, high-pressure washers, and steam sanitizers operated by trained task-forces. We deliver clinical hygiene suitable for IT parks, hospitals, and heavy industrial belts.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-gray-700 dark:text-gray-200">
                  <span className="w-8 h-8 shrink-0 bg-gold-500/20 text-gold-500 rounded-full flex items-center justify-center shadow-inner mt-1"><CheckCircle2 size={18} /></span>
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white">Eco-Friendly Consumables</h4>
                    <p className="text-sm font-light">We exclusively use biodegradable Taski / Diversey chemicals.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Before/After visual split concept using CSS images */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] group flex"
            >
               <div className="w-1/2 h-full bg-cover bg-center border-r-[3px] border-gold-500 relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop")'}}>
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-8 left-8 text-white font-bebas text-3xl tracking-widest drop-shadow-md">ROUTINE CARE</div>
               </div>
               <div className="w-1/2 h-full bg-cover bg-center relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop")'}}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-8 right-8 text-white font-bebas text-3xl tracking-widest drop-shadow-md">DEEP CLEANING</div>
               </div>
               
               {/* Center badge */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center border-4 border-white shadow-xl z-20">
                 <Sparkles className="text-white" size={32} />
               </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {facilityFeatures.map((feat, i) => {
               const Icon = feat.icon;
               return (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-white dark:bg-navy-900 border border-gray-100 dark:border-navy-800 p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group"
                 >
                   <div className="w-16 h-16 rounded-full bg-navy-50 dark:bg-navy-950 text-gold-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Icon size={32} />
                   </div>
                   <h4 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{feat.title}</h4>
                   <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                 </motion.div>
               )
            })}
          </div>
          
          <div className="bg-navy-900 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute right-0 top-0 opacity-10">
               <Sparkles size={200} />
             </div>
             <h3 className="text-3xl md:text-4xl font-bebas text-white mb-4 tracking-widest relative z-10">IS YOUR PREMISE REFLECTING YOUR BRAND?</h3>
             <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">Let our facility experts conduct a free site-survey to recommend a customized mechanized cleaning protocol for your campus.</p>
             <button onClick={() => document.dispatchEvent(new CustomEvent('openQuoteModal'))} className="relative z-10 inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 uppercase tracking-widest transition-colors shadow-[0_0_20px_rgba(245,166,35,0.3)]">
               Request Site Audit <ArrowRight size={20} />
             </button>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
