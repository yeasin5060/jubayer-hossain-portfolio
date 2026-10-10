import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  FileCheck2, 
  Ship, 
  ArrowRight, 
  FileSpreadsheet, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

export default function Hero({ darkMode = true }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const summaryRef = useRef(null);
  const statsRef = useRef(null);
  const cardGraphicRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all' }
      );
      gsap.fromTo(
        summaryRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.15, ease: 'power3.out', clearProps: 'all' }
      );
      if (statsRef.current && statsRef.current.children) {
        gsap.fromTo(
          statsRef.current.children,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, delay: 0.3, ease: 'power3.out', clearProps: 'all' }
        );
      }
      gsap.fromTo(
        cardGraphicRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 0.2, ease: 'back.out(1.2)', clearProps: 'transform,opacity' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className={`relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden transition-colors duration-300 ${
        darkMode
          ? 'bg-slate-950 text-white'
          : 'bg-slate-50 text-slate-950'
      }`}
    >
      {/* Dynamic Moving Ambient Orbs */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-floating-slow ${
        darkMode ? 'bg-amber-500/15' : 'bg-amber-500/25'
      }`} />
      <div className={`absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse-glow ${
        darkMode ? 'bg-blue-600/15' : 'bg-blue-500/20'
      }`} />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${darkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'} 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Experience Pill Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-extrabold mb-6 shadow-md transition-all hover:scale-105 ${
              darkMode 
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-400' 
                : 'bg-amber-100 border-amber-300 text-amber-900 shadow-sm'
            }`}>
              <Sparkles className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '8s' }} />
              <span>5+ Years Executive Commercial & Logistics Expertise</span>
            </div>

            {/* Catchy Headline */}
            <h1
              ref={headlineRef}
              className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6 ${
                darkMode ? 'text-white' : 'text-slate-950'
              }`}
            >
              Streamlining <span className="gold-gradient-text">Global Trade</span>, Customs Clearance & Freight Logistics
            </h1>

            {/* Impactful Professional Summary */}
            <p
              ref={summaryRef}
              className={`text-lg sm:text-xl font-medium leading-relaxed mb-8 max-w-2xl ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}
            >
              Dedicated Commercial & Logistics Executive with over 5 years of hands-on mastery in import-export operations, customs documentation, freight forwarding, and end-to-end shipment coordination. Proven track record in minimizing port demurrage, ensuring 100% regulatory compliance, and driving supply chain operational efficiency.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-12 w-full sm:w-auto">
              <a
                href="#experience"
                className="flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm sm:text-base tracking-wide uppercase shadow-xl shadow-amber-500/25 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto text-center"
              >
                <span>View Work Experience</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>

              <a
                href="#contact"
                className={`flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl border font-extrabold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto text-center ${
                  darkMode 
                    ? 'bg-slate-900/90 hover:bg-slate-800 border-slate-600 text-slate-100 hover:border-amber-400 hover:text-amber-300 shadow-lg shadow-slate-950/60' 
                    : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-950 shadow-md'
                }`}
              >
                <FileCheck2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Stats Metrics Grid */}
            <div ref={statsRef} className={`grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-6 border-t ${
              darkMode ? 'border-slate-800' : 'border-slate-300'
            }`}>
              <div className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all ${
                darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-300 shadow-md'
              }`}>
                <div className="text-xl sm:text-3xl font-black text-amber-500">5+</div>
                <div className={`text-[11px] sm:text-xs font-bold mt-1 leading-tight ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}>Years Operations Exp.</div>
              </div>

              <div className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all ${
                darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-300 shadow-md'
              }`}>
                <div className="text-xl sm:text-3xl font-black text-blue-500">100%</div>
                <div className={`text-[11px] sm:text-xs font-bold mt-1 leading-tight ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}>Customs Compliance</div>
              </div>

              <div className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all ${
                darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-300 shadow-md'
              }`}>
                <div className="text-xl sm:text-3xl font-black text-emerald-500">500+</div>
                <div className={`text-[11px] sm:text-xs font-bold mt-1 leading-tight ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}>Shipments Tracked</div>
              </div>

              <div className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all ${
                darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-300 shadow-md'
              }`}>
                <div className="text-xl sm:text-3xl font-black text-purple-500">Zero</div>
                <div className={`text-[11px] sm:text-xs font-bold mt-1 leading-tight ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}>Doc Discrepancies</div>
              </div>
            </div>

          </div>

          {/* Right Interactive Visual Card with High Clarity Image */}
          <div className="lg:col-span-5 flex justify-center animate-floating" ref={cardGraphicRef}>
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500 to-blue-600 opacity-40 blur-xl animate-pulse-glow"></div>
              
              <div className={`relative rounded-2xl p-6 sm:p-8 space-y-6 border shadow-2xl ${
                darkMode ? 'bg-slate-900/95 border-slate-700' : 'bg-white border-slate-300'
              }`}>
                
                {/* Executive Profile Card Header with Crystal Clear Large Photo */}
                <div className={`flex items-center justify-between border-b pb-5 ${
                  darkMode ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-tr from-amber-500 to-amber-600 shadow-xl shrink-0 overflow-hidden">
                      <img 
                        src="/profile.jpg" 
                        alt="Jubayer Hossain" 
                        className="w-full h-full object-cover object-top rounded-[12px] brightness-105 contrast-105"
                      />
                    </div>
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-black ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        Jubayer Hossain
                      </h3>
                      <p className="text-xs text-amber-500 font-extrabold mt-1">Commercial & Logistics Executive</p>
                      <p className={`text-xs font-bold mt-0.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>A.R. LOGISTIC (2021 – Present)</p>
                    </div>
                  </div>
                  <span className="flex h-4 w-4 relative shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                  </span>
                </div>

                {/* Logistics Key Capabilities List */}
                <div className="space-y-3.5">
                  <div className={`text-xs font-black uppercase tracking-wider ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Core Documentation Workflow
                  </div>

                  <div className={`flex items-center justify-between p-3.5 rounded-xl border ${
                    darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-300'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/15 text-amber-500 font-bold">
                        <FileCheck2 className="w-4.5 h-4.5" />
                      </div>
                      <span className={`text-xs font-extrabold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                        Bill of Lading & Invoice Audit
                      </span>
                    </div>
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">VERIFIED</span>
                  </div>

                  <div className={`flex items-center justify-between p-3.5 rounded-xl border ${
                    darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-300'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/15 text-blue-500 font-bold">
                        <Ship className="w-4.5 h-4.5" />
                      </div>
                      <span className={`text-xs font-extrabold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                        Customs C&F Agent Liaison
                      </span>
                    </div>
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-md bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">ACTIVE</span>
                  </div>

                  <div className={`flex items-center justify-between p-3.5 rounded-xl border ${
                    darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-300'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/15 text-purple-500 font-bold">
                        <FileSpreadsheet className="w-4.5 h-4.5" />
                      </div>
                      <span className={`text-xs font-extrabold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                        Costing Sheets & Tracking
                      </span>
                    </div>
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-md bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">EXCEL READY</span>
                  </div>
                </div>

                {/* Bottom Trust Badge */}
                <div className={`pt-3 flex items-center justify-between text-xs border-t ${
                  darkMode ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-800'
                }`}>
                  <div className="flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span>Tejgaon College MBA Graduate</span>
                  </div>
                  <span className="font-extrabold text-amber-500">Dhaka, BD</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
