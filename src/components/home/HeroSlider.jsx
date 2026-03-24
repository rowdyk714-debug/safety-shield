import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
    title: 'SPOTLESS SPACES.\nHAPPY WORKPLACES.',
    subtitle: 'Professional facility management that keeps your business running clean.',
    cta: 'Explore Facility Management',
    link: '/services/facility',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    title: 'THE RIGHT PEOPLE.\nRIGHT PLACE. RIGHT TIME.',
    subtitle: 'End-to-end manpower solutions for every industry.',
    cta: 'Find Our Manpower Services',
    link: '/services/manpower',
  },
  {
    id: 3,
    image: '/guard6.jpg',
    title: 'SECURITY YOU CAN TRUST.\nPROTECTION YOU CAN SEE.',
    subtitle: 'Battle-tested guards, AI-powered surveillance, 24/7 response — across Odisha and beyond.',
    cta: 'Discover Our Security',
    link: '/services/security',
  }
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] bg-navy-950 overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        // Apply custom css logic for slider overlap fix
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
          >
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent dark:from-navy-950/90 dark:via-navy-900/60 dark:to-transparent" />
            <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />

            {/* Text Content */}
            <div className="relative z-20 container mx-auto px-4 md:px-8 h-full flex items-center justify-start pt-20">
              <div className="max-w-3xl">
                {/* Only render text animation when active */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-1 bg-gold-500"></span>
                        <span className="text-gold-400 font-bold tracking-[0.2em] text-sm uppercase">Odisha's #1 Security</span>
                      </div>
                      
                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas text-navy-900 dark:text-white leading-[0.9] tracking-widest mb-6 whitespace-pre-line drop-shadow-sm dark:drop-shadow-none">
                        {slide.title}
                      </h1>
                      
                      <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-10 max-w-xl font-medium dark:font-light">
                        {slide.subtitle}
                      </p>

                      <Link 
                        to={slide.link}
                        className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 font-bold tracking-widest uppercase transition-all hover:gap-5"
                      >
                        {slide.cta} <ArrowRight size={20} />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        );
      })}

      {/* Manual Controls */}
      <div className="absolute bottom-10 left-1/2 -transform-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`transition-all duration-300 rounded-full ${i === activeIndex ? 'w-8 h-3 bg-gold-500' : 'w-3 h-3 bg-white/50 hover:bg-white'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
