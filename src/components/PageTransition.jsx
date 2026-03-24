import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, staggerChildren: 0.1 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const sweepVariants = {
  initial: { x: '-100%' },
  animate: { 
    x: '100%', 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
};

export default function PageTransition({ children }) {
  return (
    <>
      {/* 600ms Sweep Animation requested by user */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-[9999] bg-navy-900 pointer-events-none flex items-center justify-center"
        initial="initial"
        animate="animate"
        variants={sweepVariants}
      >
        <div className="flex items-center gap-4 animate-pulse">
          <div className="w-16 h-16 bg-gold-500 clip-hexagon flex items-center justify-center text-navy-900 font-bold text-2xl">
            SS
          </div>
          <span className="font-bebas text-5xl text-white tracking-widest">SAFETY SHIELD</span>
        </div>
      </motion.div>

      {/* Actual Page Content fading in */}
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full"
      >
        {children}
      </motion.div>
    </>
  );
}
