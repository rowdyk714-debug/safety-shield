import { motion } from 'framer-motion';

const clients = [
  { name: 'Tata Group', domain: 'tata.com' },
  { name: 'Reliance', domain: 'ril.com' },
  { name: 'Infosys', domain: 'infosys.com' },
  { name: 'Wipro', domain: 'wipro.com' },
  { name: 'HDFC Bank', domain: 'hdfcbank.com' },
  { name: 'State Bank', domain: 'sbi.co.in' },
  { name: 'L&T', domain: 'larsentoubro.com' },
  { name: 'NTPC', domain: 'ntpc.co.in' },
  { name: 'Indian Oil', domain: 'iocl.com' },
  { name: 'Vedanta', domain: 'vedantalimited.com' },
  { name: 'Amazon', domain: 'amazon.com' },
  { name: 'Google', domain: 'google.com' },
  { name: 'Microsoft', domain: 'microsoft.com' }
];

// Duplicate the array to create a seamless infinite loop
const marqueeItems = [...clients, ...clients];

export default function ClientMarquee() {
  return (
    <section className="py-12 bg-navy-900 border-y border-navy-800 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h4 className="text-center text-gold-500 font-bebas text-2xl tracking-widest">
          TRUSTED BY INDIA'S BIGGEST NAMES
        </h4>
      </div>
      
      {/* CSS approach for infinite marquee */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 group-hover:[animation-play-state:paused] py-4">
          {marqueeItems.map((client, index) => (
            <div 
              key={`${client.domain}-${index}`}
              className="bg-white rounded-full px-6 py-3 flex items-center justify-center min-w-[160px] h-[60px] shadow-sm shrink-0"
            >
              <img 
                src={`https://icon.horse/icon/${client.domain}`} 
                alt={client.name} 
                className="max-h-[35px] max-w-[120px] object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden text-navy-900 font-bold tracking-widest">{client.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}} />
    </section>
  );
}
