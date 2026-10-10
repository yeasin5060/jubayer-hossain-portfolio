import React from 'react';
import { Ship, ArrowUp } from 'lucide-react';

export default function Footer({ darkMode = true }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t text-xs py-12 transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Ship className="w-4 h-4" />
            </div>
            <div>
              <span className={`text-sm font-bold block ${darkMode ? 'text-white' : 'text-slate-900'}`}>Jubayer Hossain</span>
              <span className="text-[11px] text-amber-500 font-medium">Commercial & Logistics Executive</span>
            </div>
          </div>

          {/* Quick Contact summary */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:jubayerhossainbd25@gmail.com" className="hover:text-amber-500 transition-colors font-medium">
              jubayerhossainbd25@gmail.com
            </a>
            <span>•</span>
            <a href="tel:+8801627217707" className="hover:text-amber-500 transition-colors font-medium">
              +880 1627-217707
            </a>
            <span>•</span>
            <span>Tejgaon College MBA (2023)</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
              darkMode 
                ? 'bg-slate-900 border-slate-800 hover:border-amber-500 text-slate-300 hover:text-amber-400' 
                : 'bg-white border-slate-300 hover:border-amber-500 text-slate-700 hover:text-amber-600 shadow-sm'
            }`}
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-500" />
          </button>

        </div>

        <div className={`mt-8 pt-6 border-t text-center text-xs ${
          darkMode ? 'border-slate-900 text-slate-500' : 'border-slate-200 text-slate-500'
        }`}>
          <p>© {new Date().getFullYear()} Jubayer Hossain. All Rights Reserved. Built for Corporate & Supply Chain Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
