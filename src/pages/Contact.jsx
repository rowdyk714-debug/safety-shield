import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <PageTransition>
      <PageHero 
        title="CONTACT US" 
        subtitle="Our command center is operational 24/7. Reach out for any inquiries, quotes, or emergency support."
        image="https://images.unsplash.com/photo-1554165518-e3c31e78eb51?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 bg-gray-50 dark:bg-navy-950 transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
            
            {/* Contact Information & Map side */}
            <div className="flex-1">
              <h2 className="text-4xl font-bebas text-navy-900 dark:text-white tracking-widest mb-8">HEADQUARTERS</h2>
              
              <div className="grid gap-8 mb-12">
                
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white dark:bg-navy-900 shadow-md rounded-full flex items-center justify-center shrink-0 border border-gray-100 dark:border-navy-800">
                    <MapPin className="text-gold-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 dark:text-white mb-2 uppercase tracking-wide">Corporate Office</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Safety Shield Security Services<br/>
                      Patia, Bhubaneswar,<br/>
                      Odisha 751024, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white dark:bg-navy-900 shadow-md rounded-full flex items-center justify-center shrink-0 border border-gray-100 dark:border-navy-800">
                    <Phone className="text-gold-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 dark:text-white mb-2 uppercase tracking-wide">Direct Lines</h4>
                    <a href="tel:+919123569723" className="block text-gray-600 dark:text-gray-400 hover:text-gold-500 mb-1">+91 91235 69723</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white dark:bg-navy-900 shadow-md rounded-full flex items-center justify-center shrink-0 border border-gray-100 dark:border-navy-800">
                    <Mail className="text-gold-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 dark:text-white mb-2 uppercase tracking-wide">Email Desks</h4>
                    <a href="mailto:rajibmallick@zohomail.in" className="block text-gray-600 dark:text-gray-400 hover:text-gold-500">rajibmallick@zohomail.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white dark:bg-navy-900 shadow-md rounded-full flex items-center justify-center shrink-0 border border-gray-100 dark:border-navy-800">
                    <Clock className="text-gold-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 dark:text-white mb-2 uppercase tracking-wide">Hours of Operation</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Corporate Office: Mon - Sat, 9:00 AM - 6:00 PM<br/>
                      Control Room & Emergency Response: <span className="font-bold text-gold-500">24/7/365</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Map Embed dummy or iframe */}
              <div className="w-full h-64 bg-gray-200 dark:bg-navy-800 rounded-xl overflow-hidden shadow-inner border border-gray-300 dark:border-navy-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119666.86609950543!2d85.74825974443916!3d20.301032333423587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1709210000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HQ Location"
                ></iframe>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="flex-1">
              <div className="bg-white dark:bg-navy-900 p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100 dark:border-navy-800">
                <h3 className="text-3xl font-bebas text-navy-900 dark:text-white mb-2 tracking-widest">SEND A MESSAGE</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">Need a quick response? Drop us a line directly to our management desk.</p>

                {status === 'success' ? (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-8 rounded-xl text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-800/50 text-green-600 mx-auto rounded-full flex items-center justify-center mb-4">
                      <Send size={32} />
                    </div>
                    <h4 className="text-2xl font-bebas text-green-700 dark:text-green-400 mb-2">Message Sent Successfully!</h4>
                    <p className="text-green-600 dark:text-green-300 text-sm">Our team will be in touch within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-2">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all dark:text-white" placeholder="John Doe" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-2">Email Address</label>
                        <input required type="email" className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all dark:text-white" placeholder="john@company.com" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-2">Phone Number</label>
                        <input required type="tel" className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all dark:text-white" placeholder="+91 00000 00000" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-2">Subject</label>
                      <input required type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all dark:text-white" placeholder="General Inquiry / Support" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-2">Message</label>
                      <textarea required rows="5" className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all dark:text-white resize-none" placeholder="How can we assist you?"></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full btn-primary py-4 text-lg tracking-widest flex items-center justify-center gap-2 group"
                    >
                      {status === 'loading' ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <>SEND MESSAGE <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
