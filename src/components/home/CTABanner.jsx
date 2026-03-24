import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section className="relative py-24 bg-navy-50 dark:bg-navy-950 overflow-hidden transition-colors">
      {/* Decorative hexagonal pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill-opacity=\'0\' stroke=\'%23F5A623\' stroke-width=\'1\'/%3E%3C/svg%3E")' }}></div>
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-7xl font-bebas text-navy-900 dark:text-white tracking-widest mb-8"
        >
          READY TO SECURE YOUR BUSINESS?
        </motion.h2>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <Link 
            to="/quote" 
            className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-white px-10 py-5 font-bold tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(245,166,35,0.4)] hover:shadow-[0_0_50px_rgba(245,166,35,0.6)] hover:gap-5"
          >
            Request a Free Assessment <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
