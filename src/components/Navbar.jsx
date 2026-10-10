import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode = true, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Tracker', href: '#tracker' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl py-2.5 border-b border-slate-800' 
            : 'bg-white/95 backdrop-blur-xl shadow-lg py-2.5 border-b border-slate-300' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo / Brand with Profile Avatar */}
          <a href="#home" className="flex items-center gap-3 shrink-0 group">
            <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 to-amber-600 shadow-md group-hover:scale-105 transition-transform shrink-0 overflow-hidden">
              <img 
                src="/profile.jpg" 
                alt="Jubayer Hossain" 
                className="w-full h-full object-cover object-top rounded-full bg-slate-900"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-base sm:text-lg font-black tracking-tight whitespace-nowrap block transition-colors group-hover:text-amber-500 ${
                darkMode ? 'text-white' : 'text-slate-950'
              }`}>
                Jubayer Hossain
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-amber-500 tracking-wider uppercase whitespace-nowrap block">
                Logistics Executive
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border transition-colors ${
            darkMode 
              ? 'bg-slate-900/90 border-slate-800' 
              : 'bg-slate-100 border-slate-300 shadow-inner'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap transition-all duration-200 ${
                  darkMode 
                    ? 'text-slate-200 hover:text-amber-400 hover:bg-slate-800' 
                    : 'text-slate-900 hover:text-amber-600 hover:bg-white shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Dark / Light Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl border font-bold transition-all duration-200 cursor-pointer ${
                darkMode 
                  ? 'bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-800 hover:border-amber-400 shadow-md shadow-slate-950/50' 
                  : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 shadow-sm'
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="tel:+8801627217707"
              className={`hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-extrabold transition-all duration-200 ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 text-slate-100 hover:border-amber-400 hover:text-amber-400 shadow-md'
                  : 'bg-white border-slate-300 text-slate-900 hover:border-amber-500 hover:text-amber-600 shadow-sm'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>+880 1627-217707</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs tracking-wide uppercase shadow-lg shadow-amber-500/25 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile / Tablet Actions (Below LG screen size) */}
          <div className="flex lg:hidden items-center gap-2.5 shrink-0">
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                darkMode 
                  ? 'bg-slate-900 border-slate-700 text-amber-400 hover:border-amber-400 shadow-md' 
                  : 'bg-white border-slate-300 text-slate-900 shadow-sm'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                darkMode 
                  ? 'bg-slate-900 border-slate-700 text-amber-400 hover:border-amber-400 shadow-md' 
                  : 'bg-white border-slate-300 text-slate-900 shadow-sm'
              }`}
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden px-4 pt-4 pb-6 mt-2 shadow-2xl border-b transition-all ${
          darkMode ? 'bg-slate-950/98 border-slate-800' : 'bg-white border-slate-300'
        }`}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-extrabold transition-all ${
                  darkMode 
                    ? 'text-slate-100 hover:text-amber-400 hover:bg-slate-900 border border-transparent hover:border-slate-800' 
                    : 'text-slate-900 hover:text-amber-600 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="tel:+8801627217707"
                className={`flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl border text-sm font-extrabold transition-all ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-700 text-slate-100 hover:border-amber-400 hover:text-amber-400 shadow-md' 
                    : 'bg-slate-100 border-slate-300 text-slate-900 shadow-sm'
                }`}
              >
                <Phone className="w-4.5 h-4.5 text-amber-500" />
                <span>+880 1627-217707</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 active:scale-95 transition-all"
              >
                <Mail className="w-4.5 h-4.5" />
                <span>Contact Jubayer</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
