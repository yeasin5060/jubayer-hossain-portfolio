import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  FileCheck2, 
  Ship, 
  FileSpreadsheet, 
  Users,
  Award,
  Zap
} from 'lucide-react';

export default function Skills({ darkMode = true }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const progressBarsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', clearProps: 'all' }
      );

      // Card Fade & Slide In
      if (cardsRef.current && cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', clearProps: 'all' }
        );
      }

      // Animated GSAP Progress Bars Expansion
      if (progressBarsRef.current && progressBarsRef.current.length > 0) {
        progressBarsRef.current.forEach((bar) => {
          if (bar) {
            const targetWidth = bar.getAttribute('data-level') + '%';
            gsap.fromTo(
              bar,
              { width: '0%' },
              { width: targetWidth, duration: 1.2, delay: 0.3, ease: 'power2.out' }
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // GSAP Hover handlers for cards
  const handleCardMouseEnter = (el) => {
    if (el) {
      gsap.to(el, { scale: 1.02, y: -4, duration: 0.3, ease: 'power2.out' });
    }
  };

  const handleCardMouseLeave = (el) => {
    if (el) {
      gsap.to(el, { scale: 1, y: 0, duration: 0.3, ease: 'power2.out' });
    }
  };

  const skillCategories = [
    {
      title: 'Commercial & Customs Operations',
      icon: <FileCheck2 className="w-6 h-6 text-amber-500 font-bold" />,
      badge: 'Core Expertise',
      skills: [
        { name: 'Customs Documentation & Compliance', level: 98 },
        { name: 'Bill of Lading (B/L) & Invoice Processing', level: 95 },
        { name: 'Certificates of Origin & L/C Verification', level: 94 },
        { name: 'Customs C&F Clearance Liaison', level: 96 },
        { name: 'Import-Export Operations Protocols', level: 95 },
      ]
    },
    {
      title: 'Logistics & Freight Forwarding',
      icon: <Ship className="w-6 h-6 text-blue-500 font-bold" />,
      badge: 'Supply Chain',
      skills: [
        { name: 'Logistics & Shipment Coordination', level: 96 },
        { name: 'Freight Forwarding & Vessel Tracking', level: 92 },
        { name: 'Demurrage & Storage Expense Control', level: 95 },
        { name: 'Vendor & Freight Supplier Coordination', level: 94 },
        { name: 'Port Delivery Schedule Monitoring', level: 93 },
      ]
    },
    {
      title: 'Technical & Reporting Systems',
      icon: <FileSpreadsheet className="w-6 h-6 text-emerald-500 font-bold" />,
      badge: 'Analytics & ERP',
      skills: [
        { name: 'Advanced Excel (VLOOKUP, XLOOKUP, Pivot)', level: 96 },
        { name: 'Costing, Quotation & Landed Price Calculation', level: 95 },
        { name: 'MS Excel Operational & Conveyance Reporting', level: 94 },
        { name: 'Tally ERP 9 / Basic Accounting Support', level: 88 },
        { name: 'Digital Record Control & Archival Systems', level: 92 },
      ]
    },
    {
      title: 'Professional Strengths & Soft Skills',
      icon: <Users className="w-6 h-6 text-purple-500 font-bold" />,
      badge: 'Leadership & Detail',
      skills: [
        { name: 'Analytical & Problem-Solving Ability', level: 95 },
        { name: 'Client & Vendor Relationship Management', level: 94 },
        { name: 'Precision Data Auditing & Attention to Detail', level: 98 },
        { name: 'Time & Port Clearance Deadline Management', level: 96 },
        { name: 'Cross-Functional Team Collaboration', level: 93 },
      ]
    }
  ];

  let progressIndex = 0;

  return (
    <section id="skills" ref={sectionRef} className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950 border-t border-slate-200'
    }`}>
      {/* Moving Ambient Background Glow */}
      <div className={`absolute top-1/4 right-5 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-floating-slow ${
        darkMode ? 'bg-amber-500/10' : 'bg-amber-500/15'
      }`} />
      <div className={`absolute bottom-10 left-5 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-floating-reverse ${
        darkMode ? 'bg-blue-500/10' : 'bg-blue-500/15'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with GSAP Motion */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/15 px-4 py-1.5 rounded-full border border-amber-500/30 mb-3 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>Expertise & Technical Capabilities</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
            Core <span className="gold-gradient-text">Competencies</span> & Skills
          </h2>
          <p className={`mt-3 text-sm sm:text-base font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Proven operational benchmarks across Commercial Logistics, Customs Regulations, ERP systems, and Financial Audits.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 mx-auto mt-4 rounded-full shadow-sm" />
        </div>

        {/* 4 Skill Categories Grid with Dynamic GSAP Animations & Hover Scale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, cIdx) => (
            <div 
              key={cIdx} 
              ref={(el) => (cardsRef.current[cIdx] = el)}
              onMouseEnter={() => handleCardMouseEnter(cardsRef.current[cIdx])}
              onMouseLeave={() => handleCardMouseLeave(cardsRef.current[cIdx])}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 shadow-xl relative overflow-hidden group cursor-pointer ${
                darkMode 
                  ? 'bg-slate-900/95 border-slate-700/80 hover:border-amber-500/60 shadow-slate-950/60' 
                  : 'bg-white border-slate-300 hover:border-amber-500/80 shadow-md'
              }`}
            >
              {/* Top Card Badge */}
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700/40">
                <div className="flex items-center gap-3.5">
                  <div className={`p-3 rounded-2xl border shrink-0 shadow-md transition-transform group-hover:scale-110 ${
                    darkMode ? 'bg-slate-950 border-slate-700' : 'bg-slate-100 border-slate-300'
                  }`}>
                    {cat.icon}
                  </div>
                  <h3 className={`text-lg sm:text-xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    {cat.title}
                  </h3>
                </div>

                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                  {cat.badge}
                </span>
              </div>

              {/* Skill Bars with Smooth GSAP Width Fill */}
              <div className="space-y-5">
                {cat.skills.map((skill, sIdx) => {
                  const currentBarIdx = progressIndex++;
                  return (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs sm:text-sm font-black">
                        <span className={`transition-colors ${darkMode ? 'text-slate-100 group-hover:text-amber-300' : 'text-slate-900 group-hover:text-amber-600'}`}>
                          {skill.name}
                        </span>
                        <span className="text-amber-500 font-black">{skill.level}%</span>
                      </div>
                      <div className={`w-full h-2.5 rounded-full overflow-hidden p-0.5 ${
                        darkMode ? 'bg-slate-950 border border-slate-800' : 'bg-slate-200 border border-slate-300'
                      }`}>
                        <div 
                          ref={(el) => (progressBarsRef.current[currentBarIdx] = el)}
                          data-level={skill.level}
                          className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-full shadow-sm"
                          style={{ width: '0%' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-3 flex items-center justify-between text-[11px] font-extrabold text-amber-600 dark:text-amber-400 opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> Checked & Verified Competency
                </span>
                <span className="tracking-wider">PORTFOLIO AUDITED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

