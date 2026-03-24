import { motion } from 'framer-motion';
import { Award, Clock, ShieldCheck, PhoneCall } from 'lucide-react';

const blocks = [
  { title: 'ISO 9001:2015 Certified', desc: 'Internationally recognized processes and quality management.', icon: Award },
  { title: '15+ Years Experience', desc: 'A proven track record of securing Odisha since 2010.', icon: Clock },
  { title: 'Ex-Military & Police', desc: 'Command structures led by veterans and specialized forces.', icon: ShieldCheck },
  { title: '24/7 Operations Support', desc: 'Round-the-clock rapid response and control room monitoring.', icon: PhoneCall },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white dark:bg-navy-900 transition-colors overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-alert-500"></span>
              <span className="text-alert-500 font-bold tracking-[0.2em] text-sm uppercase">The Safety Shield Advantage</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas text-navy-900 dark:text-white tracking-wide mb-6 leading-[1.1]">
              UNCOMPROMISING <span className="text-gold-500">STANDARDS.</span><br/>
              UNBREAKABLE <span className="text-gold-500">TRUST.</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              We don't just provide guards; we engineer holistic security ecosystems. From rigorous background verifications to AI surveillance and rapid response protocols, our integrated facility solutions ensure absolute peace of mind for enterprises, hospitals, and societies.
            </p>

            <ul className="space-y-4 mb-10 text-navy-900 dark:text-white font-medium">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                <span>PSARA Licensed Operations</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                <span>100% Statutory Compliant (PF/ESIC/GST)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                <span>Digitized Attendance & Payroll Systems</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Cards Side */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-navy-50 dark:bg-navy-950/50 blur-[100px] rounded-full -z-10"></div>
            
            {blocks.map((block, index) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className={`bg-white dark:bg-navy-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 dark:border-navy-700 ${index % 2 === 1 ? 'sm:translate-y-8' : ''}`}
                >
                  <div className="w-12 h-12 bg-navy-50 text-navy-900 dark:bg-navy-900 dark:text-gold-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-bebas tracking-wide text-navy-900 dark:text-white mb-3">
                    {block.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {block.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
