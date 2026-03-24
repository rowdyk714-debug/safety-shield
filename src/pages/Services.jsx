import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Building2, Users, Receipt } from 'lucide-react';

const servicesList = [
  {
    title: 'Security Management',
    desc: 'Elite armed and unarmed guards, active AI-surveillance ops, and robust access control ecosystems for complete site security.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
    icon: ShieldCheck,
    link: '/services/security'
  },
  {
    title: 'Facility Management',
    desc: 'Meticulous housekeeping, deep cleaning, landscaping, and 360-degree building maintenance to keep your environments pristine.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
    icon: Building2,
    link: '/services/facility'
  },
  {
    title: 'Manpower Sourcing',
    desc: 'Rapid deployment of skilled and unskilled labor. We handle the recruiting, vetting, and verification so you can focus on operations.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    icon: Users,
    link: '/services/manpower'
  },
  {
    title: 'Payroll Management',
    desc: 'Bulletproof payroll processing guaranteeing 100% compliance with local labor laws, PF, ESIC, and timely disbursements.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    icon: Receipt,
    link: '/services/payroll'
  }
];

export default function Services() {
  return (
    <PageTransition>
      <PageHero 
        title="OUR SERVICES" 
        subtitle="Comprehensive security and facility solutions engineered for maximum protection and efficiency."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 bg-gray-50 dark:bg-navy-950 transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link 
                    to={service.link}
                    className="group block rounded-2xl overflow-hidden bg-white dark:bg-navy-900 shadow-xl hover:shadow-2xl transition-all duration-300 relative border border-gray-100 dark:border-navy-800 h-full flex flex-col"
                  >
                    {/* Image Header */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors z-10" />
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-6 left-6 z-20 w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center text-white shadow-lg">
                        <Icon size={24} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-grow flex flex-col">
                      <h2 className="text-3xl font-bebas text-navy-900 dark:text-white tracking-wide mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        {service.desc}
                      </p>
                      
                      <div className="mt-auto flex items-center gap-2 text-gold-500 font-bold uppercase tracking-widest text-sm">
                        Explore Service <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
