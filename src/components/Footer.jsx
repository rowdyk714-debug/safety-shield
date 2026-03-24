import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 pt-16 pb-6 text-gray-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-navy-800 pb-12 mb-8">
          
          {/* Column 1: Company */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/ss-logo.jpeg" 
                alt="Safety Shield Logo" 
                className="w-10 h-10 object-contain bg-white rounded-md p-0.5"
              />
              <span className="font-bebas text-xl tracking-widest text-white">SAFETY SHIELD</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Odisha's #1 Integrated Security & Facility Management Company — Trusted Since 2010. Protecting what matters most.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bebas text-xl tracking-wider mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/security" className="hover:text-gold-400 transition-colors">Security Management</Link></li>
              <li><Link to="/services/facility" className="hover:text-gold-400 transition-colors">Facility Management</Link></li>
              <li><Link to="/services/manpower" className="hover:text-gold-400 transition-colors">Manpower Sourcing</Link></li>
              <li><Link to="/services/payroll" className="hover:text-gold-400 transition-colors">Payroll Management</Link></li>
              <li><Link to="/services/facility" className="hover:text-gold-400 transition-colors">Housekeeping & Cleaning</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white font-bebas text-xl tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-gold-400 transition-colors">Careers</Link></li>
              <li><Link to="/training" className="hover:text-gold-400 transition-colors">Training Academy</Link></li>
              <li><Link to="/verify" className="hover:text-gold-400 transition-colors">Verify Employee</Link></li>
              <li><Link to="/gallery" className="hover:text-gold-400 transition-colors">Media Gallery</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bebas text-xl tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
                <span>Patia, Bhubaneswar,<br/>Odisha 751024, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <a href="tel:+919123569723" className="hover:text-gold-400 transition-colors">+91 91235 69723</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500 shrink-0" />
                <a href="mailto:rajibmallick@zohomail.in" className="hover:text-gold-400 transition-colors break-all">rajibmallick@zohomail.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>&copy; {new Date().getFullYear()} Safety Shield Security Services. All rights reserved.</p>
          <div className="flex items-center gap-2 bg-navy-800 px-3 py-1.5 rounded border border-navy-700">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="tracking-widest uppercase text-gray-400">ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
