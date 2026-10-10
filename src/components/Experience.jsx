import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Ship
} from 'lucide-react';

export default function Experience({ darkMode = true }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', clearProps: 'all' }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      role: 'Commercial & Logistics Officer',
      company: 'A.R. LOGISTIC',
      period: 'February 2022 – July 2026',
      duration: '4 Years 6 Months',
      badge: 'Senior Executive Role',
      type: 'Full-time',
      description: 'Lead operational management of international trade documents, customs clearance protocols, and multi-modal shipment logistics.',
      responsibilities: [
        'End-to-End Commercial Documentation: Managed, audited, and processed essential import-export documentation including Bills of Lading (B/L), Certificates of Origin (COO), Letters of Credit (L/C), Commercial Invoices, and Packing Lists.',
        'Customs & Freight Coordination: Directed daily communications with shipping lines, C&F (Clearing & Forwarding) agents, port customs authorities, and international freight forwarders to ensure swift cargo release.',
        'Financial & Cost Tracking: Created comprehensive costing sheets, duty expense ledgers, and real-time shipment status tracking reports to accurately assess landed product costs.',
        'Demurrage & Bottleneck Prevention: Proactively identified documentation discrepancies, minimizing port storage fees, container demurrage, and customs clearance delays.',
        'Supplier & Stakeholder Liaison: Maintained active relationships with overseas suppliers and local clearance partners to streamline supply chain flows.'
      ],
      skills: ['Bills of Lading (B/L)', 'Certificates of Origin', 'Customs Clearance', 'Freight Forwarding', 'Costing Sheets', 'Shipment Tracking', 'L/C Processing']
    },
    {
      role: 'Documentation Executive',
      company: 'A.R. LOGISTIC',
      period: 'January 2021 – January 2022',
      duration: '1 Year 1 Month',
      badge: 'Core Foundation',
      type: 'Full-time',
      description: 'Handled high-volume shipping documentation processing, record archiving, and supported senior commercial executives in daily trade operations.',
      responsibilities: [
        'Shipping Records Organization: Structured and cataloged digital and physical archives for commercial invoices, customs entries, and bill of entry records.',
        'High-Accuracy Data Entry: Executed precision data entry into logistical tracking software and inventory databases with zero discrepancy tolerance.',
        'Senior Officer Support: Assisted Senior Commercial Officers in preparing shipment files, tracking consignment locations, and following up on port clearance status.',
        'Document Verification: Pre-screened shipping manifests and bill of lading drafts against purchase orders to catch errors early.'
      ],
      skills: ['Data Entry & Auditing', 'Shipping Archives', 'Document Verification', 'Tally ERP 9 Input', 'Customs File Preparation']
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className={`py-24 relative border-y transition-colors duration-300 ${
      darkMode 
        ? 'bg-slate-900/70 border-slate-800/80 text-white' 
        : 'bg-slate-100/90 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/15 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3 shadow-sm">
            Career Journey
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
            Professional <span className="gold-gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`glass-card p-6 sm:p-8 rounded-2xl border transition-all hover:scale-[1.01] ${
                darkMode ? 'border-slate-700/80 hover:border-amber-500/50' : 'bg-white border-slate-300 hover:border-amber-500/60 shadow-lg'
              }`}
            >
              <div className={`flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b mb-6 ${
                darkMode ? 'border-slate-700/60' : 'border-slate-200'
              }`}>
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-slate-950 font-bold shrink-0 shadow-lg">
                    <Ship className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
                        darkMode ? 'text-white' : 'text-slate-950'
                      }`}>
                        {exp.role}
                      </h3>
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40 shadow-sm">
                        {exp.badge}
                      </span>
                    </div>
                    <div className={`flex flex-wrap items-center gap-4 text-xs font-bold ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-extrabold">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        {exp.period} ({exp.duration})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-xs font-extrabold px-3.5 py-1.5 rounded-xl border ${
                    darkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-900 shadow-sm'
                  }`}>
                    {exp.type}
                  </span>
                </div>
              </div>

              <p className={`text-sm sm:text-base leading-relaxed mb-6 font-semibold ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}>
                {exp.description}
              </p>

              {/* Key Responsibilities */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">Key Responsibilities & Achievements</h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                      <p className={`text-xs sm:text-sm leading-relaxed font-medium ${
                        darkMode ? 'text-slate-200' : 'text-slate-800'
                      }`}>{resp}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Tags */}
              <div className={`flex flex-wrap gap-2 pt-4 border-t ${
                darkMode ? 'border-slate-700/50' : 'border-slate-200'
              }`}>
                {exp.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className={`text-xs font-bold px-3.5 py-1.5 rounded-xl border transition-transform hover:scale-105 ${
                      darkMode 
                        ? 'bg-slate-900/90 border-slate-700 text-slate-200' 
                        : 'bg-slate-100 border-slate-300 text-slate-900 shadow-sm'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
