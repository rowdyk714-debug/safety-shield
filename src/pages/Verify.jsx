import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { LockKeyhole, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Verify() {
  return (
    <PageTransition>
      <section className="min-h-screen relative flex items-center justify-center bg-navy-950 py-24 overflow-hidden">
        
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="max-w-xl mx-auto bg-navy-900 border border-navy-800 p-8 md:p-12 rounded-2xl shadow-2xl text-center"
          >
            <div className="w-24 h-24 bg-navy-950 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-navy-800 relative">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                 className="absolute inset-0 border-2 border-dashed border-gold-500/30 rounded-full"
               ></motion.div>
               <LockKeyhole size={40} />
            </div>

            <h1 className="text-4xl md:text-5xl font-bebas text-white tracking-widest mb-4">
              VERIFICATION PORTAL
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-alert-500 bg-alert-500/10 py-2 px-4 rounded-full text-sm font-bold tracking-widest uppercase mb-8">
              <ShieldAlert size={16} /> Restricted Access
            </div>

            <p className="text-gray-400 mb-8 leading-relaxed">
              The Safety Shield comprehensive employee verification protocol is currently undergoing system upgrades for enhanced data encryption. 
              <br/><br/>
              Only authorized client nodal officers will be granted access via secure credentials.
            </p>

            <form className="space-y-4 mb-8" onSubmit={e => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Client ID / Auth Token" 
                disabled
                className="w-full bg-navy-950 border border-navy-800 rounded px-4 py-3 text-center tracking-widest uppercase text-gray-500 cursor-not-allowed"
              />
              <button 
                disabled
                className="w-full bg-navy-800 text-gray-500 py-3 uppercase tracking-widest font-bold rounded cursor-not-allowed transition-colors"
              >
                Authenticate
              </button>
            </form>

            <Link to="/" className="text-gold-500 hover:text-gold-400 text-sm tracking-widest uppercase transition-colors underline underline-offset-4">
              Return to Command Center
            </Link>

          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
