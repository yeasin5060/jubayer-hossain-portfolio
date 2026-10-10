import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  CheckCircle2, 
  FileCheck, 
  Clock, 
  TrendingUp, 
  UserCheck, 
  Target,
  Award,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

export default function About({ darkMode = true }) {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9, ease: 'back.out(1.2)', clearProps: 'all' }
      );
      gsap.fromTo(
        contentRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.15, ease: 'power3.out', clearProps: 'all' }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      icon: <FileCheck className="w-6 h-6 text-amber-500 font-bold" />,
      title: 'Accurate Record Management',
      description: 'Meticulous archiving and structured data entry for commercial invoices, packing lists, and shipping manifests.',
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500 font-bold" />,
      title: 'Documentation Conflict Resolution',
      description: 'Swift resolution of discrepancies in Bills of Lading and Certificate of Origins to prevent port delays or extra fees.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-500 font-bold" />,
      title: 'Operational Efficiency',
      description: 'Streamlining freight forwarding operations and cost tracking to optimize landed cost calculations.',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-purple-500 font-bold" />,
      title: 'Stakeholder & Client Satisfaction',
      description: 'Proactive coordination with customs brokers, suppliers, and freight forwarders for seamless clearance.',
    },
  ];

  return (
    <section id="about" ref={aboutRef} className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/80 text-white' : 'bg-slate-100/90 text-slate-950 border-y border-slate-200'
    }`}>
      {/* Moving Background Ambient Lights */}
      <div className={`absolute top-1/4 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none animate-floating-slow ${
        darkMode ? 'bg-amber-500/10' : 'bg-amber-500/20'
      }`} />
      <div className={`absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none animate-pulse-glow ${
        darkMode ? 'bg-blue-500/10' : 'bg-blue-500/15'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/15 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3 shadow-sm">
            Professional Profile
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
            About <span className="gold-gradient-text">Jubayer Hossain</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Image Profile Card with Floating Movement */}
          <div className="lg:col-span-5 flex justify-center animate-floating" ref={imageRef}>
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-500 to-blue-600 opacity-35 blur-xl animate-pulse-glow"></div>
              
              <div className={`relative rounded-2xl p-6 sm:p-8 border text-center space-y-6 shadow-2xl ${
                darkMode ? 'bg-slate-950/90 border-slate-700' : 'bg-white border-slate-300'
              }`}>
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-amber-500 to-amber-600 shadow-2xl">
                  <img 
                    src="/profile.jpg" 
                    alt="Jubayer Hossain" 
                    className="w-full h-full object-cover object-top rounded-xl brightness-105 contrast-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">Logistics Executive</span>
                  </div>
                </div>

                <div>
                  <h3 className={`text-2xl sm:text-3xl font-black ${darkMode ? 'text-white' : 'text-slate-950'}`}>Jubayer Hossain</h3>
                  <p className="text-sm font-extrabold text-amber-500 mt-1">Commercial & Logistics Executive</p>
                  <p className={`text-xs font-bold mt-0.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>A.R. LOGISTIC • Dhaka, Bangladesh</p>
                </div>

                <div className={`grid grid-cols-1 gap-2.5 pt-3 border-t text-xs font-bold ${
                  darkMode ? 'border-slate-800 text-slate-200' : 'border-slate-200 text-slate-900'
                }`}>
                  <div className="flex items-center gap-2 justify-center">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Shekertek, Adabor, Dhaka</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>+880 1627-217707</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>jubayerhossainbd25@gmail.com</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-xs font-black text-amber-600 dark:text-amber-400 flex items-center justify-center gap-2 shadow-sm">
                  <Award className="w-4.5 h-4.5 text-amber-500" />
                  <span>MBA & BBA Marketing Graduate (Tejgaon College)</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Professional Summary */}
          <div className="lg:col-span-7 space-y-6" ref={contentRef}>
            <div className={`p-8 rounded-2xl border space-y-5 shadow-xl ${
              darkMode ? 'bg-slate-950/90 border-slate-700' : 'bg-white border-slate-300'
            }`}>
              <h3 className={`text-xl sm:text-2xl font-black flex items-center gap-3 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                <Target className="w-6 h-6 text-amber-500" />
                <span>Dedicated Commercial & Supply Chain Operations Leader</span>
              </h3>

              <p className={`leading-relaxed text-base sm:text-lg font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                With over five years of concentrated experience in international commercial and logistics management, I specialize in bridging the gap between global suppliers, customs authorities, freight forwarders, and corporate leadership. My career has been defined by precision execution in managing complex import and export procedures.
              </p>

              <p className={`leading-relaxed text-base sm:text-lg font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                At the core of my professional philosophy is a commitment to operational excellence. I take pride in maintaining immaculate, audit-ready operational ledgers, resolving documentation bottlenecks before cargo arrival, and systematically driving down demurrage and detention risks.
              </p>

              <p className={`leading-relaxed text-base sm:text-lg font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                Whether coordinating with C&F agents at Bangladeshi ports or auditing multi-line supplier invoices in Advanced Excel and Tally ERP 9, I remain focused on safeguarding financial accuracy, legal compliance, and customer satisfaction at every phase of shipment lifecycle.
              </p>

              {/* Core Commitment Highlights */}
              <div className={`pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-bold ${
                darkMode ? 'text-slate-100' : 'text-slate-900'
              }`}>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                  <span>100% On-Time Commercial Filing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                  <span>Customs & Port Duty Optimization</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                  <span>Transparent Costing Sheet Generation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                  <span>End-to-End Freight Status Tracking</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Pillars Grid with Floating Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl flex flex-col items-start gap-4 border transition-all duration-300 hover:-translate-y-2 shadow-lg ${
                darkMode 
                  ? 'bg-slate-950/90 border-slate-700 hover:border-amber-500/60' 
                  : 'bg-white border-slate-300 hover:border-amber-500/60 shadow-md'
              }`}
            >
              <div className={`p-3 rounded-xl border shrink-0 ${
                darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-300 shadow-sm'
              }`}>
                {pillar.icon}
              </div>
              <div>
                <h4 className={`text-base font-extrabold mb-2 ${darkMode ? 'text-white' : 'text-slate-950'}`}>{pillar.title}</h4>
                <p className={`text-xs sm:text-sm leading-relaxed font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
