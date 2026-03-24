import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import QuoteModal from './components/QuoteModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SecurityServices from './pages/SecurityServices';
import FacilityManagement from './pages/FacilityManagement';
import ManpowerSourcing from './pages/ManpowerSourcing';
import PayrollManagement from './pages/PayrollManagement';
import Careers from './pages/Careers';
import Training from './pages/Training';
import Verify from './pages/Verify';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Quote from './pages/Quote';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/security" element={<SecurityServices />} />
        <Route path="/services/facility" element={<FacilityManagement />} />
        <Route path="/services/manpower" element={<ManpowerSourcing />} />
        <Route path="/services/payroll" element={<PayrollManagement />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/training" element={<Training />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
        <ScrollToTop />
        <Navbar toggleTheme={toggleTheme} theme={theme} openQuote={() => setIsQuoteModalOpen(true)} />
        
        <main className="flex-grow w-full relative">
          <AnimatedRoutes />
        </main>
        
        <Footer />
        <FloatingButtons openQuote={() => setIsQuoteModalOpen(true)} />
        
        <AnimatePresence>
          {isQuoteModalOpen && <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
