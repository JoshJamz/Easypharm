import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/src/lib/ThemeContext';
import { Button } from '../ui/Button';
import { Moon, Sun, Menu, X, ShoppingCart } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Shop', path: '/shop' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[var(--bg-color)]/80 backdrop-blur-md border-b border-[var(--border-color)] py-3 shadow-sm'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-2 z-50">
            <img src="https://i.ibb.co/6J09zLnT/Whats-App-Image-2026-04-18-at-21-53-34.jpg" alt="EASYPHARM Logo" className="h-10 w-auto rounded-lg object-contain" />
            <span className="font-bold text-xl tracking-tight hidden sm:block">EASYPHARM</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--color-accent)]",
                  location.pathname === link.path ? "text-[var(--color-accent)]" : "text-[var(--text-muted)]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 z-50">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-[var(--text-muted)] hover:text-[var(--text-color)]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <Link to="/shop" className="hidden sm:flex relative group p-2">
              <ShoppingCart size={20} className="text-[var(--text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-[var(--color-accent)] text-white text-[10px] font-bold flex items-center justify-center rounded-full">0</span>
            </Link>

            <Link to="/upload" className="hidden sm:block">
               <Button variant="outline" size="sm">Upload Rx</Button>
            </Link>
            
            <Link to="/shop" className="hidden sm:block">
              <Button size="sm">Order Now</Button>
            </Link>

            <button
              className="md:hidden p-2 text-[var(--text-color)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--bg-color)] border-b border-[var(--border-color)] overflow-hidden inset-x-0 absolute top-full"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                    location.pathname === link.path 
                      ? "bg-[var(--color-accent-subtle)] text-[var(--color-accent)] dark:bg-[var(--color-accent-dark)] dark:bg-opacity-20" 
                      : "text-[var(--text-color)] hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[var(--color-accent)]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-4 mt-4 px-4">
                <Link to="/upload"><Button variant="outline" className="w-full">Upload Rx</Button></Link>
                <Link to="/shop"><Button className="w-full">Order Now</Button></Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
