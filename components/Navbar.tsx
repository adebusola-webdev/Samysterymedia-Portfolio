import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-brand-black/90 backdrop-blur-md py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
            href="#home" 
            className="text-2xl font-bold tracking-tighter text-brand-navy dark:text-white"
        >
          SAMYSTERY<span className="text-brand-accent">.</span>MEDIA
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-accent dark:hover:text-white transition-colors uppercase tracking-widest hover:border-b border-brand-accent cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-300 dark:border-gray-700">
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-brand-accent transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://instagram.com/samysterymedia"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-brand-accent transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:iamsamuelayeni@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-brand-accent transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="text-brand-navy dark:text-white hover:text-brand-accent transition-colors"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              className="text-brand-navy dark:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-brand-black border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-brand-navy dark:text-gray-200 hover:text-brand-accent cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                 <a
                  href="https://instagram.com/samysterymedia"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand-accent transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="mailto:iamsamuelayeni@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-brand-accent transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;