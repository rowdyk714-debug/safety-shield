import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function TrustStats() {
  const stats = [
    { id: 1, icon: '🛡️', number: 500, suffix: '+', label: 'Trained Guards' },
    { id: 2, icon: '🏢', number: 200, suffix: '+', label: 'Client Sites' },
    { id: 3, icon: '📅', number: 15, suffix: '+', label: 'Years of Excellence' },
    { id: 4, icon: '🌍', number: 10, suffix: '+', label: 'States Covered' },
  ];

  return (
    <section className="bg-white dark:bg-navy-900 border-t-4 border-gold-500 relative z-20 shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-2xl transition-colors">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-navy-800/50">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center px-4"
            >
              <span className="text-3xl md:text-4xl mb-3 opacity-90">{stat.icon}</span>
              <h3 className="text-4xl md:text-5xl font-bebas text-gold-500 tracking-wider mb-2">
                <Counter end={stat.number} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium text-sm md:text-base uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
