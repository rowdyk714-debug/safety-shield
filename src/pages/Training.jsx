import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { Flame, ShieldAlert, Users, BookOpen, ExternalLink } from 'lucide-react';

const trainingSyllabus = [
  {
    icon: ShieldAlert,
    title: 'Physical Security & Access Control',
    weeks: 'Week 1-2',
    details: 'Drills on gate management, material inward/outward registers, frisking protocols, and perimeter patrolling. Identification of suspicious activities.'
  },
  {
    icon: Flame,
    title: 'Fire Safety & Disaster Response',
    weeks: 'Week 3',
    details: 'Practical handling of fire extinguishers, building evacuation protocols, first aid response, and coordination with emergency services.'
  },
  {
    icon: Users,
    title: 'Soft Skills & Corporate Etiquette',
    weeks: 'Week 4',
    details: 'Communication skills, polite grievance handling, uniform grooming standards, and behavioral conduct around VIPs and female staff.'
  },
  {
    icon: BookOpen,
    title: 'Legal & PSARA Compliance',
    weeks: 'Week 4',
    details: 'Basic understanding of Indian Penal Code (IPC) related to trespassing, right to private defense, and documentation handling.'
  }
];

export default function Training() {
  return (
    <PageTransition>
      <PageHero 
        title="TRAINING ACADEMY" 
        subtitle="Forging ordinary individuals into elite security and facility professionals."
        image="https://images.unsplash.com/photo-1541888079440-ad818fb52086?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 bg-white dark:bg-navy-900 transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bebas text-navy-900 dark:text-white tracking-widest mb-6">
              THE <span className="text-gold-500">CRUCIBLE</span> OF EXCELLENCE
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              At Safety Shield, we believe that an untrained guard is a liability, not an asset. That's why we operate our own state-of-the-art residential training academy situated in the outskirts of Bhubaneswar. Before securing your premises, every candidate undergoes an intense 30-day program conforming perfectly to PSARA (Private Security Agencies Regulation Act) guidelines.
            </p>
            <div className="inline-flex items-center gap-2 bg-navy-50 dark:bg-navy-800 text-navy-900 dark:text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest border border-gray-200 dark:border-navy-700">
               <ShieldAlert className="text-gold-500" size={20} /> PASRA Authorized Training Center
            </div>
          </div>

          {/* Syllabus Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
            {trainingSyllabus.map((mod, i) => {
               const Icon = mod.icon;
               return (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-gray-50 dark:bg-navy-950 p-8 rounded-2xl border-l-4 border-gold-500 shadow-md flex gap-6"
                 >
                   <div className="w-16 h-16 rounded-xl bg-white dark:bg-navy-900 text-gold-500 flex items-center justify-center shrink-0 shadow-sm border border-gray-100 dark:border-navy-800">
                     <Icon size={32} />
                   </div>
                   <div>
                     <span className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-1 block">{mod.weeks}</span>
                     <h4 className="text-2xl font-bebas text-navy-900 dark:text-white tracking-wide mb-3">{mod.title}</h4>
                     <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{mod.details}</p>
                   </div>
                 </motion.div>
               )
            })}
          </div>

          {/* Picture Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
             <div className="md:col-span-2 h-64 md:h-80 rounded-2xl overflow-hidden group relative bg-navy-950">
               <img src="/training/physical.jpg" alt="Physical Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent flex items-end p-6 pointer-events-none">
                 <h4 className="text-white font-bebas text-2xl tracking-widest">Physical Conditioning</h4>
               </div>
             </div>
             <div className="h-64 md:h-80 rounded-2xl overflow-hidden group relative bg-navy-950">
               <img src="/training/fire.jpg" alt="Fire Drill" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-center" />
               <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent flex items-end p-6 pointer-events-none">
                 <h4 className="text-white font-bebas text-2xl tracking-widest">Fire Handling</h4>
               </div>
             </div>
             <div className="h-64 md:h-80 rounded-2xl overflow-hidden group relative bg-navy-950">
               <img src="/training/system.jpg" alt="Computer Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-center" />
               <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent flex items-end p-6 pointer-events-none">
                 <h4 className="text-white font-bebas text-2xl tracking-widest">System Training</h4>
               </div>
             </div>
             <div className="md:col-span-2 h-64 md:h-80 rounded-2xl overflow-hidden group relative bg-navy-950">
               <img src="/training/classroom.jpg" alt="Classroom Session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent flex items-end p-6 pointer-events-none">
                 <h4 className="text-white font-bebas text-2xl tracking-widest">Classroom Lectures</h4>
               </div>
             </div>
          </div>

          {/* Certificate Verify Callout */}
          <div className="bg-navy-950 p-10 md:p-16 rounded-2xl text-center shadow-xl border border-navy-800 text-white max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="text-left">
               <h3 className="text-3xl font-bebas tracking-widest mb-2">VERIFY CERTIFICATES</h3>
               <p className="text-gray-400 font-light max-w-md">Our clients can cross-check the training credentials and background records of any deployed staff instantaneously.</p>
             </div>
             <a href="/verify" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 uppercase tracking-widest transition-colors shrink-0">
               Verify Portal <ExternalLink size={18} />
             </a>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
