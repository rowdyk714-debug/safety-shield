import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, Landmark, Cpu, Factory, Activity } from 'lucide-react';

const clients = [
  { name: 'Tata Group', domain: 'tata.com', Icon: Activity },
  { name: 'Reliance', domain: 'ril.com', Icon: Factory },
  { name: 'Infosys', domain: 'infosys.com', Icon: Cpu },
  { name: 'Wipro', domain: 'wipro.com', Icon: Cpu },
  { name: 'HDFC Bank', domain: 'hdfcbank.com', Icon: Landmark },
  { name: 'State Bank', domain: 'onlinesbi.sbi', Icon: Landmark },
  { name: 'L&T', domain: 'larsentoubro.com', Icon: Building2 },
  { name: 'NTPC', domain: 'www.ntpc.co.in', Icon: Factory },
  { name: 'Indian Oil', domain: 'iocl.com', Icon: Factory },
  { name: 'Vedanta', domain: 'vedantalimited.com', Icon: Factory },
  { name: 'Amazon', domain: 'amazon.com', Icon: Activity },
  { name: 'Google', domain: 'google.com', Icon: Cpu },
  { name: 'Microsoft', domain: 'microsoft.com', Icon: Cpu }
];

const marqueeItems = [...clients, ...clients];

const ClientLogo = ({ client }) => {
  const [hasError, setHasError] = useState(false);
  const Icon = client.Icon;

  if (hasError) {
    return (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-navy-50 dark:bg-navy-800 flex items-center justify-center text-gold-500">
          <Icon size={22} />
        </div>
        <span className="text-navy-900 font-bold tracking-widest text-lg whitespace-nowrap">{client.name}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <img 
        src={`https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`} 
        alt={client.name} 
        className="max-h-[40px] max-w-[140px] object-contain block"
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default function ClientMarquee() {
  return (
    <section className="py-12 bg-white dark:bg-navy-900 border-y border-gray-200 dark:border-navy-800 overflow-hidden transition-colors">
      <div className="container mx-auto px-4 mb-8">
        <h4 className="text-center text-gold-500 font-bebas text-2xl tracking-widest">
          TRUSTED BY INDIA'S BIGGEST NAMES
        </h4>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex items-center gap-12 group-hover:[animation-play-state:paused] py-4 w-max">
          {marqueeItems.map((client, index) => (
            <div 
              key={`${client.domain}-${index}`}
              className="bg-white rounded-full px-8 py-3 flex items-center justify-center min-w-[200px] h-[70px] shadow-sm shrink-0 border border-gray-100"
            >
              <ClientLogo client={client} />
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
          animation: marquee 35s linear infinite;
        }
      `}} />
    </section>
  );
}
