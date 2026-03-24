import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services', dropdown: [
    { name: 'Security Services', path: '/services/security' },
    { name: 'Facility Management', path: '/services/facility' },
    { name: 'Manpower Sourcing', path: '/services/manpower' },
    { name: 'Payroll Management', path: '/services/payroll' },
  ]},
  { name: 'Training', path: '/training' },
  { name: 'Verify Staff', path: '/verify' },
  { name: 'Careers', path: '/careers' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ toggleTheme, theme, openQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [mobileMenuOpen]);

  return (
    <header className={clsx(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-50">
          <div className="w-10 h-10 bg-gold-500 rounded-lg transform rotate-45 flex items-center justify-center shadow-lg">
            <span className="transform -rotate-45 font-bebas text-navy-900 text-xl font-bold tracking-wider">SS</span>
          </div>
          <div className="flex flex-col">
            <span className={clsx('font-bebas text-2xl leading-none tracking-widest', isScrolled ? 'text-navy-900 dark:text-white' : 'text-white')}>
              SAFETY SHIELD
            </span>
            <span className={clsx('text-[10px] uppercase font-bold tracking-widest', isScrolled ? 'text-navy-500 dark:text-gray-400' : 'text-gray-300')}>
              Security Services
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => clsx('nav-link flex items-center gap-1', 
                    isActive ? 'active' : '',
                    !isScrolled && 'text-white hover:text-gold-400'
                  )}
                >
                  {link.name} <ChevronDown size={14} className={clsx("transition-transform", servicesOpen && "rotate-180")} />
                </NavLink>
                
                {/* Dropdown */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div 
                      key="dropdown"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-navy-900 rounded shadow-xl border border-gray-100 dark:border-navy-800 overflow-hidden"
                    >
                      {link.dropdown.map(sublink => (
                        <NavLink
                          key={sublink.name}
                          to={sublink.path}
                          onClick={() => setServicesOpen(false)}
                          className={({isActive}) => clsx(
                            "block px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-50 dark:hover:bg-navy-800",
                            isActive ? "text-gold-500 bg-gray-50 dark:bg-navy-800" : "text-gray-700 dark:text-gray-300"
                          )}
                        >
                          {sublink.name}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => clsx('nav-link', 
                    isActive ? 'active' : '',
                    !isScrolled && 'text-white hover:text-gold-400'
                )}
              >
                {link.name}
              </NavLink>
            )
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button onClick={toggleTheme} className={clsx("p-2 rounded-full transition-colors", 
            isScrolled ? 'hover:bg-gray-100 dark:hover:bg-navy-800' : 'text-white hover:bg-white/10'
          )}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button onClick={openQuote} className="btn-primary rounded-full px-8 uppercase tracking-widest text-sm">
            Request a Quote
          </button>
        </div>

        {/* Mobile Hamburger Layout */}
        <div className="lg:hidden flex items-center gap-4 z-50">
          <button onClick={toggleTheme} className={clsx("p-2", isScrolled || mobileMenuOpen ? 'text-gray-800 dark:text-white' : 'text-white')}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={clsx("p-2", isScrolled || mobileMenuOpen ? 'text-gray-800 dark:text-white' : 'text-white')}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-white dark:bg-navy-950 z-40 pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-2xl font-bebas tracking-widest overflow-y-auto pb-24">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <NavLink 
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({isActive}) => clsx("block", isActive && "text-gold-500")}
                  >
                    {link.name}
                  </NavLink>
                  {link.dropdown && (
                    <div className="flex flex-col gap-4 mt-4 ml-4 border-l-2 border-gray-200 dark:border-navy-800 pl-4 text-xl text-gray-500 dark:text-gray-400">
                      {link.dropdown.map(sublink => (
                        <NavLink
                          key={sublink.name}
                          to={sublink.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={({isActive}) => clsx("block", isActive && "text-gold-500")}
                        >
                          {sublink.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gray-50 dark:bg-navy-900 border-t border-gray-200 dark:border-navy-800">
              <button 
                onClick={() => { setMobileMenuOpen(false); openQuote(); }} 
                className="btn-primary w-full text-lg tracking-widest py-4"
              >
                REQUEST A QUOTE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
