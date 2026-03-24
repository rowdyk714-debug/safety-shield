import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, Building2, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: ShieldCheck,
    title: 'Security Guards',
    desc: 'Elite armed & unarmed guards, trained to PSARA standards.',
    link: '/services/security',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop'
  },
  {
    icon: Sparkles,
    title: 'Facility Management',
    desc: 'Corporate housekeeping and deep cleaning operations.',
    link: '/services/facility',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Building2,
    title: 'Manpower Sourcing',
    desc: 'Placement of skilled and unskilled labor matching your requirements.',
    link: '/services/manpower',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Wallet,
    title: 'Payroll Outsourcing',
    desc: '100% compliance with local labor laws, PF, ESIC.',
    link: '/services/payroll',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-navy-950 transition-colors border-t border-gray-200 dark:border-navy-800">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bebas text-navy-900 dark:text-white mb-6 tracking-wide"
          >
            COMPREHENSIVE <span className="text-gold-500">SOLUTIONS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            We deploy specialized units tailored to your operational vulnerabilities. From heavily armed cash transit to immaculate hospital sanitation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white dark:bg-navy-900 rounded-xl overflow-hidden shadow-xl hover:shadow-[0_0_40px_rgba(245,166,35,0.15)] transition-all h-[400px] flex flex-col justify-end p-6 border border-gray-200 dark:border-navy-800"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gold-500/20 text-gold-500 rounded-full flex items-center justify-center mb-6 border border-gold-500/30 group-hover:scale-110 transition-transform">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bebas text-white mb-3 tracking-wide">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-2 text-gold-400 font-bold uppercase tracking-widest text-xs group-hover:text-gold-500 hover:gap-4 transition-all"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
