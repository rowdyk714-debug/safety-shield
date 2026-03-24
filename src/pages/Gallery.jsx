import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  { id: 1, category: 'security', url: 'https://images.unsplash.com/photo-1541888079440-ad818fb52086?q=80&w=2070&auto=format&fit=crop', title: 'Armed Division' },
  { id: 2, category: 'facility', url: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop', title: 'Deep Cleaning Ops' },
  { id: 3, category: 'training', url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop', title: 'Academy Lectures' },
  { id: 4, category: 'security', url: 'https://images.unsplash.com/photo-1530983821616-24eeb6d2eb10?q=80&w=2070&auto=format&fit=crop', title: 'Control Room' },
  { id: 5, category: 'manpower', url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop', title: 'Corporate Staffing' },
  { id: 6, category: 'training', url: 'https://images.unsplash.com/photo-1627907228175-2bfb3e6c0fba?q=80&w=2070&auto=format&fit=crop', title: 'Fire Drills' },
  { id: 7, category: 'facility', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop', title: 'Office Housekeeping' },
  { id: 8, category: 'security', url: 'https://images.unsplash.com/photo-1520694478166-daaaaaec95b4?q=80&w=2070&auto=format&fit=crop', title: 'Executive Escort' },
  { id: 9, category: 'manpower', url: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop', title: 'Factory Operations' }
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
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-72 rounded-xl overflow-hidden shadow-md cursor-pointer bg-navy-900"
                  onClick={() => setLightbox(item)}
                >
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h4 className="text-white font-bebas text-2xl tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 relative z-10">{item.title}</h4>
                    <ZoomIn className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50 w-16 h-16 pointer-events-none" />
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 backdrop-blur-md p-4 md:p-12">
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
              className="relative w-full max-w-6xl max-h-full flex flex-col items-center"
            >
              <img 
                src={lightbox.url} 
                alt={lightbox.title} 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <h3 className="text-white font-bebas tracking-widest text-3xl mt-6">{lightbox.title}</h3>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </PageTransition>
  );
}
