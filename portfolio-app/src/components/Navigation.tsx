import React, { useState, useEffect } from 'react';
import { Sun, Moon, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';



interface NavigationProps {
  activeTab: 'all' | 'architecture' | 'art-direction';
  setActiveTab: (tab: 'all' | 'architecture' | 'art-direction') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check local storage or prefers-color-scheme
    let isDarkStored = false;
    try {
      const stored = localStorage.getItem('theme');
      if (stored) {
        isDarkStored = stored === 'dark';
      } else {
        isDarkStored = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    } catch {
      isDarkStored = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    setIsDark(isDarkStored);
    if (isDarkStored) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch {}
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('theme', 'light');
      } catch {}
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-4 glassmorphism shadow-md' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-charcoal dark:text-white">
            IKRAM HAMDAN
          </span>
          <span className="h-4 w-[1px] bg-black/20 dark:bg-white/20 hidden sm:inline"></span>
          <span className="font-sans text-xs tracking-wider text-gray-500 dark:text-gray-400 uppercase hidden sm:inline">
            Art Director & Architect
          </span>
        </div>

        {/* Tab Filters (Quick Jump) */}
        <div className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-brand-terracotta text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-300 hover:text-brand-charcoal dark:hover:text-white'
            }`}
          >
            All Works
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
              activeTab === 'architecture'
                ? 'bg-brand-terracotta text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-300 hover:text-brand-charcoal dark:hover:text-white'
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveTab('art-direction')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
              activeTab === 'art-direction'
                ? 'bg-brand-terracotta text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-300 hover:text-brand-charcoal dark:hover:text-white'
            }`}
          >
            Art Direction
          </button>
        </div>

        {/* Toolbar (Theme + Contact Links) */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 transition-all duration-300 relative overflow-hidden flex items-center justify-center border border-black/5 dark:border-white/5 shadow-sm active:scale-95 cursor-pointer"
            title="Toggle theme"
          >
            <div className="relative w-5 h-5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ y: 15, opacity: 0, rotate: 45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -15, opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-brand-charcoal" />}
                </motion.div>
              </AnimatePresence>
            </div>
          </button>

          <div className="h-6 w-[1px] bg-black/10 dark:bg-white/10"></div>

          <a
            href="mailto:Ikramhamdan204@gmail.com"
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-brand-terracotta/20 dark:border-brand-terracotta/40 hover:bg-brand-terracotta hover:text-white text-brand-terracotta dark:text-brand-pink transition-all duration-300"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Email</span>
          </a>

          <a
            href="tel:+971553176841"
            className="p-2 rounded-full border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 text-gray-600 dark:text-gray-300 hover:text-brand-charcoal dark:hover:text-white transition-all duration-300"
            title="Call me"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};
