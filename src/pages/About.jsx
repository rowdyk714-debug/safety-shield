import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Navigation } from 'lucide-react';

export default function About() {
  return (
    <PageTransition>
      <PageHero 
        title="ABOUT SAFETY SHIELD" 
        subtitle="Odisha's most trusted name in Integrated Facility & Security Management since 2010."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      />

      {/* Our Story */}
      <section className="py-24 bg-white dark:bg-navy-950 transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-0.5 bg-gold-500"></span>
                <span className="text-gold-500 font-bold tracking-[0.2em] text-sm uppercase">Our Genesis</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bebas text-navy-900 dark:text-white tracking-widest mb-6">
                BUILT ON <span className="text-gold-500">HONOR.</span> DRIVEN BY <span className="text-gold-500">DUTY.</span>
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                <p>
                  Founded in 2010 by ex-armed forces personnel, Safety Shield Security Services was built with a singular mission: to bring military-grade discipline and absolute reliability to India's private security and facility management sector.
                </p>
                <p>
                  We recognized that modern enterprises needed more than just manpower; they needed strategic partners who could anticipate threats, maintain immaculate environments, and handle complex payroll compliances without missing a beat.
                </p>
                <p>
                  Today, with over 15 years of excellence, a PSARA-licensed operational framework, and an ISO 9001:2015 certification, we stand as the premier choice for hundreds of corporations, hospitals, educational institutions, and residential societies across Odisha and neighboring states.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative w-full h-[500px]"
            >
              <div className="absolute inset-0 bg-navy-900 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop" 
                alt="Corporate Office"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl transform -rotate-3 transition-transform hover:rotate-0 duration-500"
              />
              <div className="absolute -bottom-8 -left-8 bg-gold-500 text-white p-8 rounded-xl shadow-xl z-20 hidden md:block">
                <div className="text-6xl font-bebas mb-2">15+</div>
                <div className="text-sm font-bold tracking-widest uppercase">Years of Service</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission / Vision / Core Values */}
      <section className="py-24 bg-gray-50 dark:bg-navy-900 transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bebas text-navy-900 dark:text-white tracking-widest">
              THE <span className="text-gold-500">SAFETY SHIELD</span> WAY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-navy-950 p-10 rounded-2xl shadow-lg text-center relative overflow-hidden group border border-gray-100 dark:border-navy-800"
            >
              <div className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
              <div className="relative z-10">
                <Target size={48} className="mx-auto text-gold-500 group-hover:text-white transition-colors mb-6" />
                <h3 className="text-3xl font-bebas text-navy-900 dark:text-white group-hover:text-white tracking-widest mb-4">OUR MISSION</h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-white/90 leading-relaxed">
                  To provide uncompromising security, immaculate facility care, and seamless manpower solutions through a relentless commitment to training, technology, and absolute integrity.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-navy-950 p-10 rounded-2xl shadow-lg text-center relative overflow-hidden group border border-gray-100 dark:border-navy-800"
            >
              <div className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
              <div className="relative z-10">
                <Eye size={48} className="mx-auto text-gold-500 group-hover:text-white transition-colors mb-6" />
                <h3 className="text-3xl font-bebas text-navy-900 dark:text-white group-hover:text-white tracking-widest mb-4">OUR VISION</h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-white/90 leading-relaxed">
                  To be the gold standard of integrated services in India, recognized for engineering environments where businesses can thrive without fear or operational friction.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-navy-950 p-10 rounded-2xl shadow-lg text-center relative overflow-hidden group border border-gray-100 dark:border-navy-800"
            >
              <div className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
              <div className="relative z-10">
                <Navigation size={48} className="mx-auto text-gold-500 group-hover:text-white transition-colors mb-6" />
                <h3 className="text-3xl font-bebas text-navy-900 dark:text-white group-hover:text-white tracking-widest mb-4">CORE VALUES</h3>
                <ul className="text-gray-600 dark:text-gray-300 group-hover:text-white/90 leading-relaxed space-y-2 font-medium">
                  <li>Vigilance & Discipline</li>
                  <li>Incorruptible Integrity</li>
                  <li>Client-Centric Agility</li>
                  <li>Continuous Innovation</li>
                </ul>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Leadership / Approach */}
      <section className="py-24 bg-navy-950">
        <div className="container mx-auto px-4 md:px-8 text-center text-white">
          <Shield size={64} className="mx-auto text-gold-500 mb-8" />
          <h2 className="text-4xl md:text-5xl font-bebas tracking-widest mb-8">LEADERSHIP THAT PROTECTS</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 font-light leading-relaxed mb-12">
            Safety Shield is led by a syndicate of seasoned professionals from the armed forces, paramilitary, and corporate HR sectors. This unique amalgamation of tactical expertise and corporate governance ensures that every guard deployed, every cleaner assigned, and every payroll generated adheres to the highest standards of operational excellence.
          </p>
        </div>
      </section>
      
    </PageTransition>
  );
}
