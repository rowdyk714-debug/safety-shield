import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Quote() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <PageTransition>
      <section className="min-h-screen bg-navy-950 py-32 relative overflow-hidden flex items-center justify-center">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill-opacity=\'0\' stroke=\'%23F5A623\' stroke-width=\'1\'/%3E%3C/svg%3E")' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bebas text-white tracking-widest mb-4">REQUEST A COMPREHENSIVE QUOTE</h1>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Provide the details of your requirements, and our operations head will contact you within 2 business hours with a preliminary assessment.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-navy-900 border border-navy-800 p-8 md:p-12 rounded-2xl shadow-2xl relative"
            >
              {status === 'success' ? (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-green-900/40 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-3xl font-bebas text-white tracking-widest mb-4">REQUIREMENT PROTOCOL INITIATED</h2>
                  <p className="text-gray-400">Our command center has received your request. A designated account manager will be reaching out shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Section 1: Contact Detail */}
                  <div>
                    <h3 className="text-xl font-bebas tracking-widest text-gold-500 border-b border-navy-800 pb-2 mb-6">1. Point of Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold tracking-wider uppercase text-gray-400 mb-2">Company Name</label>
                        <input required type="text" className="w-full px-4 py-3 bg-navy-950 border border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all text-white" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold tracking-wider uppercase text-gray-400 mb-2">Decision Maker Name</label>
                        <input required type="text" className="w-full px-4 py-3 bg-navy-950 border border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all text-white" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold tracking-wider uppercase text-gray-400 mb-2">Email Address</label>
                        <input required type="email" className="w-full px-4 py-3 bg-navy-950 border border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all text-white" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold tracking-wider uppercase text-gray-400 mb-2">Phone Number</label>
                        <input required type="tel" className="w-full px-4 py-3 bg-navy-950 border border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Requirement */}
                  <div>
                     <h3 className="text-xl font-bebas tracking-widest text-gold-500 border-b border-navy-800 pb-2 mb-6">2. Operational Requirement</h3>
                     <div className="grid grid-cols-1 gap-6">
                       <div>
                         <label className="block text-xs font-bold tracking-wider uppercase text-gray-400 mb-3">Primary Service Required</label>
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <label className="flex items-center gap-3 bg-navy-950 p-4 border border-navy-800 rounded cursor-pointer hover:border-gold-500 transition-colors">
                              <input type="checkbox" className="accent-gold-500 w-4 h-4" />
                              <span className="text-gray-300 font-medium">Security Guards</span>
                            </label>
                            <label className="flex items-center gap-3 bg-navy-950 p-4 border border-navy-800 rounded cursor-pointer hover:border-gold-500 transition-colors">
                              <input type="checkbox" className="accent-gold-500 w-4 h-4" />
                              <span className="text-gray-300 font-medium">Housekeeping</span>
                            </label>
                            <label className="flex items-center gap-3 bg-navy-950 p-4 border border-navy-800 rounded cursor-pointer hover:border-gold-500 transition-colors">
                              <input type="checkbox" className="accent-gold-500 w-4 h-4" />
                              <span className="text-gray-300 font-medium">Manpower Sourcing</span>
                            </label>
                            <label className="flex items-center gap-3 bg-navy-950 p-4 border border-navy-800 rounded cursor-pointer hover:border-gold-500 transition-colors">
                              <input type="checkbox" className="accent-gold-500 w-4 h-4" />
                              <span className="text-gray-300 font-medium">Payroll Outsourcing</span>
                            </label>
                         </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold tracking-wider uppercase text-gray-400 mb-2">Estimated Headcount Needed</label>
                            <select className="w-full px-4 py-3 bg-navy-950 border border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all text-white appearance-none">
                              <option>1-5 Personnel</option>
                              <option>6-20 Personnel</option>
                              <option>21-50 Personnel</option>
                              <option>50+ Personnel</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-bold tracking-wider uppercase text-gray-400 mb-2">Deployment Location</label>
                            <input type="text" className="w-full px-4 py-3 bg-navy-950 border border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all text-white" placeholder="City, State" />
                          </div>
                       </div>

                       <div>
                         <label className="block text-xs font-bold tracking-wider uppercase text-gray-400 mb-2">Specific Details / Brief</label>
                         <textarea required rows="4" className="w-full px-4 py-3 bg-navy-950 border border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all text-white resize-none" placeholder="Provide any specific challenges, shifts required, or special skills..."></textarea>
                       </div>
                     </div>
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full btn-primary py-5 text-xl tracking-widest flex items-center justify-center gap-2 group border border-transparent hover:border-gold-500"
                    >
                      {status === 'loading' ? (
                        <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <>SUBMIT FOR ASSESSMENT <Send size={20} className="group-hover:translate-x-2 transition-transform" /></>
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4 uppercase tracking-widest">
                      100% Confidentiality Guaranteed
                    </p>
                  </div>

                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
