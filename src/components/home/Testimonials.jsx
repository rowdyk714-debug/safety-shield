import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Safety Shield's proactive approach saved our manufacturing plant millions during a recent intrusion attempt. Their AI surveillance combined with quick on-ground response was flawless.",
    name: "Rajesh Sharma",
    designation: "Head of Operations",
    company: "Utkal Steel Corp."
  },
  {
    text: "We transitioned our entire facility management and payroll handling to SS in 2021. The operational headache has literally vanished. True professionals who deliver on every promise.",
    name: "Priyanka Das",
    designation: "HR Director",
    company: "Kalinga IT Park"
  },
  {
    text: "For the last 5 years, their armed escorts have secured our high-value transit convoys across 4 states without a single incident. The disciplined ex-military personnel make all the difference.",
    name: "Sanjay Mishra",
    designation: "Logistics Manager",
    company: "Eastern Grid Logistics"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-navy-900 transition-colors">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-0.5 bg-gold-500"></span>
            <span className="text-gold-500 font-bold tracking-[0.2em] text-sm uppercase">Client Testimonials</span>
            <span className="w-8 h-0.5 bg-gold-500"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bebas text-navy-900 dark:text-white tracking-wide"
          >
            WHAT OUR PARTNERS SAY
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white dark:bg-navy-950 p-8 rounded-xl shadow-lg border-t-4 border-gold-500 relative"
            >
              <Quote size={40} className="text-gray-100 dark:text-navy-800 absolute top-6 right-6 pointer-events-none" />
              
              <p className="text-gray-600 dark:text-gray-300 italic mb-8 relative z-10 text-sm leading-relaxed">
                "{testi.text}"
              </p>
              
              <div className="mt-auto">
                <h4 className="text-navy-900 dark:text-white font-bold">{testi.name}</h4>
                <p className="text-gold-500 text-xs uppercase tracking-wider mt-1">{testi.designation}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{testi.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
