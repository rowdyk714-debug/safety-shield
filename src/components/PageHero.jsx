import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle, image, caption, captionHindi, overlayOpacity = 0.7 }) {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Dark Overlays */}
      <div className="absolute inset-0 bg-navy-950" style={{ opacity: overlayOpacity }} />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center container mx-auto px-4 mt-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-gold-500"></span>
              <span className="text-gold-500 font-bold tracking-[0.2em] text-sm uppercase">Safety Shield Options</span>
              <span className="w-8 h-0.5 bg-gold-500"></span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bebas text-white tracking-widest mb-6"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl text-center leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {(caption || captionHindi) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 inline-flex flex-col bg-navy-950/60 border-l-4 border-gold-500 p-4 backdrop-blur-sm self-start text-left"
            >
              {caption && <span className="text-white font-bold tracking-widest uppercase text-sm">{caption}</span>}
              {captionHindi && <span className="text-gold-400 font-bold text-lg">{captionHindi}</span>}
            </motion.div>
          )}
        </div>
      </div>

    </section>
  );
}
