import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', path: '/', hash: '#home' },
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Skills', path: '/', hash: '#skills' },
    { name: 'Projects', path: '/', hash: '#projects' },
    { name: 'Experience', path: '/', hash: '#experience' },
    { name: 'Contact', path: '/', hash: '#contact' }
  ];

  const scrollToSection = (hash) => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight hover:text-primary transition-colors"
          >
            <span className="text-primary">{'<'}</span>
            AR
            <span className="text-primary">{'/>'}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.hash}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.hash);
                }}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-secondary rounded-sm transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Admin Login Button */}
            <Link
              to="/admin"
              className="btn-primary text-sm px-4 py-2"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-secondary rounded-sm transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-secondary rounded-sm transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.hash}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.hash);
                  }}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors uppercase tracking-wider py-2"
                >
                  {link.name}
                </a>
              ))}
              <Link
                to="/admin"
                className="btn-primary text-sm px-4 py-2 text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;