import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Course', path: '/course' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
  { name: 'Notice', path: '/notice' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = {
    color: '#137FEC',
    fontWeight: '600',
  };

  return (
    <>
      <div className="bg-primary-yellow text-black font-lexend text-sm py-2 px-4 text-center">
        Admissions for the 2024-25 session are now open!
      </div>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white-tertiary/80 backdrop-blur-sm border-b border-gray-200 shadow-sm' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src="image\logo\cropped-cropped-Dishari-Institute-of-Paramedical-and-Allied-Health-Science-Malda-150x150.jpeg" alt="Dishari Institute Logo" className="h-24 w-24" />
            <div>
              <h1 className="text-lg font-bold text-header-text font-lexend">Dishari Institute</h1>
              <p className="text-xs text-header-text-secondary font-lexend">Of Paramedical & Allied Health Science</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="font-lexend text-sm text-text-primary hover:text-primary-blue transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : {}}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <a href="/contact" className="bg-primary-blue text-white font-lexend text-sm font-medium py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors">
              Apply Now
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-header-text focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white shadow-lg"
            >
              <div className="flex flex-col items-center gap-4 py-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="font-lexend text-text-primary hover:text-primary-blue transition-colors"
                    style={({ isActive }) => isActive ? activeLinkStyle : {}}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <a href="/contact" className="bg-primary-blue text-white font-lexend text-sm font-medium py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors mt-4">
                  Apply Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
