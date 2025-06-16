"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', hash: '#home' },
    { name: 'About', href: '/', hash: '#about' },
    { name: 'Features', href: '/', hash: '#features' },
    { name: 'Contact', href: '/', hash: '#contact' },
  ];

  const handleNavClick = (href: string, hash?: string) => {
    if (href === '/' && hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick('/', '#home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className={`text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent relative z-10 ${
                !scrolled ? 'text-white' : ''
              }`}>
                ModernNav
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.href, item.hash)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  scrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  !scrolled ? 'bg-white/10' : ''
                }`}></div>
              </motion.button>
            ))}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative p-2 rounded-lg transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                !scrolled ? 'bg-white/10' : ''
              }`}></div>
              <div className="relative z-10">
                {theme === 'dark' ? (
                  <Sun className={`w-5 h-5 ${scrolled ? 'text-gray-300' : 'text-white'}`} />
                ) : (
                  <Moon className={`w-5 h-5 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
                )}
              </div>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme Toggle for Mobile */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative p-2 rounded-lg transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                !scrolled ? 'bg-white/10' : ''
              }`}></div>
              <div className="relative z-10">
                {theme === 'dark' ? (
                  <Sun className={`w-5 h-5 ${scrolled ? 'text-gray-300' : 'text-white'}`} />
                ) : (
                  <Moon className={`w-5 h-5 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
                )}
              </div>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-lg transition-all duration-300 group"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                !scrolled ? 'bg-white/10' : ''
              }`}></div>
              <div className="relative z-10">
                {isOpen ? (
                  <X className={`w-6 h-6 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
                )}
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${
              scrolled 
                ? 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20' 
                : 'bg-white/20 backdrop-blur-md border-b border-white/10'
            }`}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavClick(item.href, item.hash)}
                  className={`relative block w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg group ${
                    scrolled 
                      ? 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white' 
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    !scrolled ? 'bg-white/10' : ''
                  }`}></div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 