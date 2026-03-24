import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { FileText, Calculator, Landmark, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const compliances = [
  { icon: ShieldCheck, title: 'EPF', desc: 'Provident Fund registration, monthly challans, and employee grievance redressal.' },
  { icon: ShieldCheck, title: 'ESIC', desc: 'Employee State Insurance compliance, Pehchan card generation, and claims assistance.' },
  { icon: Landmark, title: 'Professional Tax', desc: 'State-wise PT deduction and timely deposit to local municipal bodies.' },
  { icon: FileText, title: 'Labour Law', desc: 'Maintenance of statutory registers under Minimum Wages Act, Payment of Bonus Act.' }
];

export default function PayrollManagement() {
  return (
    <PageTransition>
      <PageHero 
        title="PAYROLL MANAGEMENT" 
        subtitle="Zero-error processing. 100% compliance. Let us handle your paperwork."
        image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
        caption="Payroll Management"
        captionHindi="वेतन प्रबंधन"
      />

      <section className="py-24 bg-gray-50 dark:bg-navy-950 transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bebas text-navy-900 dark:text-white mb-6 tracking-wide">
                DE-RISK YOUR <span className="text-gold-500">BUSINESS COMPLIANCE.</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Managing a large workforce means navigating a minefield of complex Indian labor laws. Our dedicated payroll division ensures every worker is paid accurately, on time, with all statutory deductions remitted to the government without fail.
              </p>
              
              <div className="bg-white dark:bg-navy-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-navy-800">
                <h4 className="font-bold text-navy-900 dark:text-white mb-4">Core Deliverables:</h4>
                <ul className="space-y-3">
                  {['Biometric Attendance Processing', 'Salary Sheet Generation', 'Payslip Distribution (Digital & Print)', 'Full & Final Settlements', 'Year-end Form 16 / Returns filing'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Images layout */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 h-[500px]"
            >
               <div className="space-y-4">
                  <div className="h-2/3 bg-cover bg-center rounded-2xl shadow-md" style={{backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')"}} />
                  <div className="h-1/3 bg-cover bg-center rounded-2xl shadow-md" style={{backgroundImage: "url('https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop')"}} />
               </div>
               <div className="space-y-4 pt-12">
                  <div className="h-1/3 bg-cover bg-center rounded-2xl shadow-md" style={{backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop')"}} />
                  <div className="h-2/3 bg-cover bg-center rounded-2xl shadow-md" style={{backgroundImage: "url('https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=2070&auto=format&fit=crop')"}} />
               </div>
            </motion.div>
          </div>

          {/* Compliance Badges */}
          <div>
            <h3 className="text-3xl font-bebas text-navy-900 dark:text-white text-center mb-12 tracking-widest">STATUTORY COMPLIANCE MASTERY</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {compliances.map((comp, index) => {
                const Icon = comp.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-navy-900 border border-gold-500/20 p-8 rounded-2xl relative overflow-hidden group hover:border-gold-500 transition-colors"
                  >
                    <div className="absolute right-[-20px] top-[-20px] opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icon size={120} className="text-white" />
                    </div>
                    
                    {/* Badge Image representation */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-yellow-400 text-navy-950 font-black tracking-widest px-4 py-1 rounded shadow mb-6 relative z-10">
                       <Icon size={16} /> {comp.title}
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed relative z-10">
                      {comp.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="mt-20 text-center">
             <button onClick={() => document.dispatchEvent(new CustomEvent('openQuoteModal'))} className="inline-flex items-center gap-2 border-2 border-gold-500 text-gold-500 dark:text-white dark:border-white hover:bg-gold-500 hover:text-white font-bold px-8 py-4 uppercase tracking-widest transition-all rounded">
               Get Compliance Quote <ArrowRight size={20} />
             </button>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
