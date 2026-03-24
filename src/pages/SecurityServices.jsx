import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Crosshair, Eye, ShieldCheck, UserCheck, Star, Radio } from 'lucide-react';

const securityFeatures = [
  { title: 'Armed Guards', desc: 'Highly trained personnel with valid arms licenses for high-risk assets and transit security.', icon: Crosshair },
  { title: 'Unarmed Guards', desc: 'Professional, courteous guards for corporate lobbies, residential gates, and retail.', icon: UserCheck },
  { title: 'CCTV Surveillance', desc: '24/7 proactive monitoring from our central command center with AI-threat detection.', icon: Eye },
  { title: 'Access Control', desc: 'Biometric and RFID implementation to secure restricted zones and manage visitor flow.', icon: ShieldCheck },
  { title: 'Event Security', desc: 'Crowd management, executive protection, and perimeter security for large-scale events.', icon: Star },
  { title: 'VIP Protection', desc: 'Discreet, elite close-protection officers trained in defensive driving and threat assessment.', icon: Radio },
];

export default function SecurityServices() {
  return (
    <PageTransition>
      <PageHero 
        title="SECURITY MANAGEMENT" 
        subtitle="Our flagship division. Uncompromising protection protocol deployed by highly trained professionals."
        image="https://images.unsplash.com/photo-1541888079440-ad818fb52086?q=80&w=2070&auto=format&fit=crop"
        caption="Security Services"
        captionHindi="सुरक्षा सेवाएं"
      />

      <section className="py-24 bg-white dark:bg-navy-900 transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Intro & Stats */}
          <div className="flex flex-col lg:flex-row gap-16 mb-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-4xl md:text-5xl font-bebas text-navy-900 dark:text-white mb-6 tracking-wide">
                BATTLE-TESTED PROTECTION. <span className="text-gold-500">ABSOLUTE DETERRENCE.</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At Safety Shield, we don't just react to threats—we neutralize them before they materialize. Our security personnel are hand-picked from ex-military and police backgrounds, undergoing rigorous PSARA-compliant training at our in-house academy before deployment.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Combined with state-of-the-art AI surveillance and a 24/7 rapid response command center, we provide an impenetrable shield around your assets, people, and reputation.
              </p>
            </motion.div>
            
            <div className="flex-1 grid grid-cols-2 gap-6 w-full">
              <div className="bg-navy-50 dark:bg-navy-950 p-8 rounded-xl border-t-4 border-gold-500 text-center shadow-lg">
                <div className="text-5xl font-bebas text-gold-500 mb-2">500+</div>
                <div className="text-sm font-bold tracking-widest uppercase text-navy-900 dark:text-white">Active Guards</div>
              </div>
              <div className="bg-navy-50 dark:bg-navy-950 p-8 rounded-xl border-t-4 border-gold-500 text-center shadow-lg">
                <div className="text-5xl font-bebas text-gold-500 mb-2">200+</div>
                <div className="text-sm font-bold tracking-widest uppercase text-navy-900 dark:text-white">Sites Secured</div>
              </div>
              <div className="bg-navy-50 dark:bg-navy-950 p-8 rounded-xl border-t-4 border-gold-500 text-center shadow-lg col-span-2">
                <div className="text-5xl font-bebas text-gold-500 mb-2">&lt; 15 mins</div>
                <div className="text-sm font-bold tracking-widest uppercase text-navy-900 dark:text-white">Emergency Response Time</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-24">
            <h3 className="text-3xl font-bebas text-navy-900 dark:text-white mb-10 text-center tracking-widest">OUR SECURITY ARSENAL</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 border border-gray-200 dark:border-navy-800 rounded-xl hover:border-gold-500 hover:shadow-xl transition-all dark:bg-navy-800"
                  >
                    <div className="w-14 h-14 bg-navy-900 text-gold-500 rounded-lg flex items-center justify-center mb-6">
                      <Icon size={28} />
                    </div>
                    <h4 className="text-2xl font-bebas text-navy-900 dark:text-white mb-3 tracking-wide">{feat.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Gallery (6 images from unsplash) */}
          <div className="mb-24">
            <h3 className="text-3xl font-bebas text-navy-900 dark:text-white mb-10 text-center tracking-widest">ON THE FRONTLINES</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img src="https://images.unsplash.com/photo-1541888079440-ad818fb52086?q=80&w=800&auto=format&fit=crop" className="w-full h-48 md:h-64 object-cover rounded-lg" alt="Security Guard" />
              <img src="https://images.unsplash.com/photo-1530983821616-24eeb6d2eb10?q=80&w=800&auto=format&fit=crop" className="w-full h-48 md:h-64 object-cover rounded-lg" alt="CCTV Room" />
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" className="w-full h-48 md:h-64 object-cover rounded-lg hidden md:block" alt="Corporate Security" />
              <img src="https://images.unsplash.com/photo-1563207153-f4728f321d23?q=80&w=800&auto=format&fit=crop" className="w-full h-48 md:h-64 object-cover rounded-lg hidden md:block" alt="Access Control" />
              <img src="https://images.unsplash.com/photo-1520694478166-daaaaaec95b4?q=80&w=800&auto=format&fit=crop" className="w-full h-48 md:h-64 object-cover rounded-lg" alt="Executive Protection" />
              <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=800&auto=format&fit=crop" className="w-full h-48 md:h-64 object-cover rounded-lg" alt="Event Security" />
            </div>
          </div>

          {/* CTA */}
          <div className="bg-navy-950 p-12 md:p-16 rounded-2xl text-center relative overflow-hidden shadow-2xl border border-navy-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl"></div>
            <h3 className="text-4xl md:text-5xl font-bebas text-white mb-6 relative z-10 tracking-widest">SECURE YOUR PERIMETER TODAY</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 relative z-10">Don't compromise on what matters most. Our experts will conduct a free vulnerability assessment of your site.</p>
            <Link to="/quote" className="inline-flex items-center px-8 py-4 bg-gold-500 text-white font-bold tracking-widest uppercase hover:bg-gold-600 transition-colors relative z-10 shadow-lg">
              Get Security Quote
            </Link>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
