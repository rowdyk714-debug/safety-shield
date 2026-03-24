import { motion } from 'framer-motion';
import { X, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function QuoteModal({ isOpen, onClose }) {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate EmailJS or actual EmailJS if initialized
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    setTimeout(() => {
      setStatus('success');
      // Reset form or close after delay
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-[90] cursor-pointer cursor-zoom-out"
      />

      {/* Sliding Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 w-full max-w-md h-full bg-white dark:bg-navy-900 border-l border-gray-200 dark:border-navy-800 shadow-2xl z-[100] overflow-y-auto"
      >
        <div className="p-6 md:p-8 flex flex-col min-h-full relative">
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors text-gray-500 dark:text-gray-400"
          >
            <X size={24} />
          </button>

          <div className="mb-8 pr-12">
            <h2 className="text-3xl font-bebas tracking-widest text-navy-900 dark:text-white mb-2">Request Quote</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Fill out the details below, and our team will get back to you within 2 business hours.</p>
          </div>

          {status === 'success' ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500 flex items-center justify-center mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bebas tracking-widest text-navy-900 dark:text-white mb-2">Request Received!</h3>
              <p className="text-gray-600 dark:text-gray-400">Thank you! We'll contact you shortly regarding your security needs.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-1.5">First Name</label>
                  <input required type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all dark:text-white" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-1.5">Last Name</label>
                  <input required type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all dark:text-white" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-1.5">Phone Number</label>
                <input required type="tel" className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all dark:text-white" placeholder="+91 90000 00000" />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-1.5">Email Address</label>
                <input required type="email" name="user_email" className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all dark:text-white" placeholder="john@company.com" />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-1.5">Service Required</label>
                <select required className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all dark:text-white appearance-none">
                  <option value="" disabled selected>Select a service</option>
                  <option value="Security">Security Management</option>
                  <option value="Facility">Facility & Cleaning</option>
                  <option value="Manpower">Manpower Sourcing</option>
                  <option value="Payroll">Payroll Processing</option>
                  <option value="Multiple">Multiple Services</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-1.5">Message / Details</label>
                <textarea rows="4" className="w-full bg-gray-50 dark:bg-navy-950 px-4 py-3 border border-gray-200 dark:border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all dark:text-white resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <div className="mt-auto pt-6">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full btn-primary text-lg tracking-widest py-4 flex items-center justify-center gap-2 group"
                >
                  {status === 'loading' ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>SEND REQUEST <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  By submitting, you agree to our privacy policy.
                </p>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </>
  );
}
