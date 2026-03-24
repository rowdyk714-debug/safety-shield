import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { Users, Target, UserCheck, BriefcaseIcon, ArrowRight, ShieldCheck } from 'lucide-react';

const processSteps = [
  { id: 1, icon: Target, title: 'Requirement Analysis', desc: 'Detailed mapping of your skill expectations, cultural fit, and SLA parameters.' },
  { id: 2, icon: Users, title: 'Sourcing & Screening', desc: 'Tapping into our pan-India database and conducting rigorous trade tests.' },
  { id: 3, icon: ShieldCheck, title: 'BGC Verification', desc: 'Mandatory police verification, Aadhar validation, and reference checks.' },
  { id: 4, icon: UserCheck, title: 'Onboarding & Deployment', desc: 'Seamless induction into client premises with full statutory compliance.' }
];

export default function ManpowerSourcing() {
  return (
    <PageTransition>
      <PageHero 
        title="MANPOWER SOURCING" 
        subtitle="End-to-end blue collar and grey collar workforce placement."
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
        caption="Manpower Sourcing"
        captionHindi="जनशक्ति भर्ती"
      />

      <section className="py-24 bg-white dark:bg-navy-900 transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bebas text-navy-900 dark:text-white mb-6 tracking-wide">
              THE RIGHT PEOPLE. <span className="text-gold-500">RIGHT NOW.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Finding reliable blue-collar and grey-collar workers is challenging. We take the hassle out of recruitment, verification, and payroll management, providing you with an instantly deployable workforce.
            </p>
          </div>

          {/* Process Flow With Images */}
          <div className="mb-24">
            <h3 className="text-3xl font-bebas text-navy-900 dark:text-white tracking-widest text-center mb-12 border-b border-gray-200 dark:border-navy-800 pb-4 inline-block mx-auto">SOURCING PROTOCOL</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-[96px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent z-0" />

              <div className="text-center group relative z-10">
                 <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg mb-6 relative">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop" alt="Meeting" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-2 left-2 w-10 h-10 bg-gold-500 text-white font-bebas text-2xl flex items-center justify-center rounded shadow-md">1</div>
                 </div>
                 <h4 className="font-bold text-navy-900 dark:text-white mb-2">Requirement Analysis</h4>
                 <p className="text-xs text-gray-500 dark:text-gray-400 px-4">Detailed mapping of your skill expectations and SLA.</p>
              </div>

              <div className="text-center group relative z-10">
                 <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg mb-6 relative">
                   <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" alt="Screening" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-2 left-2 w-10 h-10 bg-gold-500 text-white font-bebas text-2xl flex items-center justify-center rounded shadow-md">2</div>
                 </div>
                 <h4 className="font-bold text-navy-900 dark:text-white mb-2">Sourcing & Screening</h4>
                 <p className="text-xs text-gray-500 dark:text-gray-400 px-4">Tapping into our pan-India database & conducting trade tests.</p>
              </div>

              <div className="text-center group relative z-10">
                 <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg mb-6 relative">
                   <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" alt="Verification" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-2 left-2 w-10 h-10 bg-gold-500 text-white font-bebas text-2xl flex items-center justify-center rounded shadow-md">3</div>
                 </div>
                 <h4 className="font-bold text-navy-900 dark:text-white mb-2">BGC Verification</h4>
                 <p className="text-xs text-gray-500 dark:text-gray-400 px-4">Mandatory police verification and Aadhar validation.</p>
              </div>

              <div className="text-center group relative z-10">
                 <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg mb-6 relative">
                   <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Deployment" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-2 left-2 w-10 h-10 bg-gold-500 text-white font-bebas text-2xl flex items-center justify-center rounded shadow-md">4</div>
                 </div>
                 <h4 className="font-bold text-navy-900 dark:text-white mb-2">Onboarding & Deployment</h4>
                 <p className="text-xs text-gray-500 dark:text-gray-400 px-4">Seamless induction into client premises with full compliance.</p>
              </div>
            </div>
          </div>

          {/* Categories block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 dark:bg-navy-950 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-navy-800">
             <div>
               <h4 className="text-2xl font-bold text-navy-900 dark:text-white mb-6 border-l-4 border-gold-500 pl-4">Skilled Category</h4>
               <ul className="space-y-3">
                 {['Data Entry Operators', 'Store Supervisors', 'ITI Technicians (Electrician/Plumber)', 'Receptionists & Front Desk', 'Drivers (LMV/HMV)'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-navy-900 px-4 py-3 rounded-lg shadow-sm">
                     <div className="w-2 h-2 rounded-full bg-gold-500 shrink-0"></div> {item}
                   </li>
                 ))}
               </ul>
             </div>
             <div>
               <h4 className="text-2xl font-bold text-navy-900 dark:text-white mb-6 border-l-4 border-gold-500 pl-4">Unskilled Category</h4>
               <ul className="space-y-3">
                 {['Warehouse Loaders / Packers', 'Pantry Boys / Peons', 'Construction Laborers', 'Factory Helpers', 'Delivery Executives'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-navy-900 px-4 py-3 rounded-lg shadow-sm">
                     <div className="w-2 h-2 rounded-full bg-red-500 shrink-0"></div> {item}
                   </li>
                 ))}
               </ul>
             </div>
          </div>

          <div className="mt-20 text-center">
             <button onClick={() => document.dispatchEvent(new CustomEvent('openQuoteModal'))} className="inline-flex items-center gap-2 bg-navy-900 dark:bg-gold-500 hover:bg-gold-500 dark:hover:bg-gold-600 text-white dark:text-navy-900 font-bold px-8 py-4 uppercase tracking-widest transition-colors shadow-lg rounded-full">
               Request Manpower <ArrowRight size={20} />
             </button>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
