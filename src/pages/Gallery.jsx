import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  { id: 1, category: 'security', url: '/guard1.jpeg',          title: 'Guard Formation' },
  { id: 2, category: 'security', url: '/guard6.jpg',           title: 'On Duty' },
  { id: 3, category: 'security', url: '/guard2.avif',          title: 'Security Parade' },
  { id: 4, category: 'security', url: '/guard4.jpg',           title: 'Corporate Security' },
  { id: 5, category: 'security', url: '/guard5.jpg',           title: 'Access Checkpoint' },
  { id: 6, category: 'security', url: '/guard7.jpg',           title: 'Deployed Unit' },
  { id: 7, category: 'security', url: '/gate-guard.jpg',        title: 'Gate Duty' },
  { id: 8, category: 'facility', url: '/cleaning.jpg',         title: 'Corporate Housekeeping' },
  { id: 9, category: 'manpower', url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop', title: 'Project Managers' },
  { id: 10, category: 'training', url: '/training/classroom.jpg', title: 'Academy Lectures' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <PageTransition>
      <PageHero 
        title="OPERATIONAL GALLERY" 
        subtitle="A visual testament to our discipline, scale, and uncompromising standards."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
        caption="Our Portfolio"
        captionHindi="हमारा पोर्टफोलियो"
      />

      <section className="py-24 bg-gray-50 dark:bg-navy-950 transition-colors min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['all', 'security', 'facility', 'manpower', 'training'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold tracking-widest uppercase text-sm transition-all border ${
                  filter === cat 
                  ? 'bg-gold-500 border-gold-500 text-white shadow-lg scale-105' 
                  : 'bg-white dark:bg-navy-900 border-gray-200 dark:border-navy-800 text-gray-600 dark:text-gray-300 hover:border-gold-500 hover:text-gold-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-64 rounded-xl overflow-hidden shadow-md cursor-pointer bg-navy-900 border border-transparent dark:border-navy-800 hover:border-gold-500"
                  onClick={() => setLightbox(item)}
                >
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h4 className="text-white font-bebas text-xl md:text-2xl tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 relative z-10">{item.title}</h4>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <ZoomIn className="text-white w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredItems.length === 0 && (
             <div className="text-center py-24 text-gray-500 dark:text-gray-400 font-bebas text-2xl tracking-widest">
               NO IMAGES FOUND
             </div>
          )}

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 backdrop-blur-md p-4 md:p-12">
            <button 
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white hover:text-gold-500 transition-colors z-[60]"
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-6xl flex flex-col items-center"
            >
              <img 
                src={lightbox.url} 
                alt={lightbox.title} 
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <h3 className="text-white font-bebas tracking-widest text-3xl mt-6">
                <span className="text-gold-500">{lightbox.category.toUpperCase()} / </span>
                {lightbox.title}
              </h3>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </PageTransition>
  );
}
