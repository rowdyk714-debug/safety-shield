import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Medal, HeartPulse, GraduationCap, MapPin, DollarSign, X, Send } from 'lucide-react';
import { useState } from 'react';

const benefits = [
  { title: 'Industry-Best Salaries', desc: 'On-time monthly disbursements with full PF and ESIC benefits.', icon: DollarSign },
  { title: 'Comprehensive Medical', desc: 'Health coverage for you and your direct dependents.', icon: HeartPulse },
  { title: 'Continuous Training', desc: 'Upskill at our academy. Transition from Guard to Supervisor.', icon: GraduationCap },
  { title: 'Performance Bonuses', desc: 'Annual appraisals, Diwali bonuses, and spot-awards for bravery.', icon: Medal },
];

const jobs = [
  { id: 1, title: 'Security Supervisor', location: 'Bhubaneswar, Odisha', type: 'Full-Time', exp: '3-5 Years (Ex-Servicemen Preferred)' },
  { id: 2, title: 'Armed Security Guard', location: 'Cuttack, Odisha', type: 'Full-Time', exp: 'Valid Gun License Required' },
  { id: 3, title: 'Facility Manager', location: 'Jharsuguda, Odisha', type: 'Full-Time', exp: '5+ Years in Soft Services' },
  { id: 4, title: 'CCTV Control Room Operator', location: 'Bhubaneswar, Odisha', type: 'Shift Based', exp: '1-3 Years in Surveillance' },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [status, setStatus] = useState('idle');

  const handleApply = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setSelectedJob(null);
      }, 3000);
    }, 1500);
  };

  return (
    <PageTransition>
      <PageHero 
        title="JOIN THE SHIELD" 
        subtitle="Build a career of honor, discipline, and growth with Odisha's premier security & facility management firm."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
      />

      {/* Why Join Us */}
      <section className="py-24 bg-gray-50 dark:bg-navy-950 transition-colors">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bebas text-navy-900 dark:text-white mb-6 tracking-wide">
              NOT JUST A JOB. <span className="text-gold-500">A BROTHERHOOD.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At Safety Shield, we believe our people are our ultimate armor. Whether you're a towering ex-army veteran or a meticulous housekeeping professional, we provide a structured career path, unshakeable job security, and an environment of mutual respect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-navy-900 p-8 rounded-xl shadow-lg border-t-4 border-gold-500 text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-navy-50 dark:bg-navy-800 text-gold-500 rounded-full flex items-center justify-center mb-6">
                    <Icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 dark:text-white mb-3 tracking-wide">{benefit.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Open Positions */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bebas text-navy-900 dark:text-white mb-10 tracking-widest border-b border-gray-200 dark:border-navy-800 pb-4">CURRENT OPENINGS</h3>
            
            <div className="space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white dark:bg-navy-900 p-6 md:p-8 rounded-xl shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-gray-100 dark:border-navy-800 hover:border-gold-500 dark:hover:border-gold-500 transition-colors">
                  <div>
                    <h4 className="text-2xl font-bebas text-navy-900 dark:text-white mb-2 tracking-wide">{job.title}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                      <span className="flex items-center gap-1"><MapPin size={16} className="text-gold-500" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Shield size={16} className="text-gold-500" /> {job.exp}</span>
                      <span className="bg-navy-100 dark:bg-navy-800 text-navy-900 dark:text-white px-3 py-1 rounded-full text-xs">{job.type}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedJob(job.title)}
                    className="w-full md:w-auto px-8 py-3 bg-navy-900 dark:bg-gold-500 text-white font-bold tracking-widest uppercase hover:bg-gold-500 dark:hover:bg-gold-600 transition-colors shrink-0"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center text-gray-500 dark:text-gray-400">
              Don't see a fit? Send your resume directly to <a href="mailto:careers@safetyshield.com" className="text-gold-500 hover:underline">careers@safetyshield.com</a>
            </div>
          </div>

        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-navy-900 w-full max-w-lg rounded-2xl shadow-2xl relative z-10 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-navy-900 dark:hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
                
                <h3 className="text-3xl font-bebas text-navy-900 dark:text-white mb-2 tracking-widest pr-8">Apply For Position</h3>
                <p className="text-gold-500 font-bold mb-8">{selectedJob}</p>

                {status === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={32} />
                    </div>
                    <h4 className="text-2xl font-bebas text-navy-900 dark:text-white mb-2 tracking-widest">Application Submitted</h4>
                    <p className="text-gray-500 dark:text-gray-400">HR will contact you for an interview if shortlisted.</p>
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-1.5">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-1.5">Phone Number</label>
                      <input required type="tel" className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-1.5">Years of Experience</label>
                      <input required type="number" min="0" className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 rounded focus:ring-2 focus:ring-gold-500 outline-none transition-all dark:text-white" />
                    </div>
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full btn-primary py-4 mt-4 tracking-widest flex items-center justify-center"
                    >
                      {status === 'loading' ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        'SUBMIT APPLICATION'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
