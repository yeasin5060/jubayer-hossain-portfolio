import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Ship, 
  Clock, 
  CheckCircle2
} from 'lucide-react';

export default function WorkflowTracker({ darkMode = true }) {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const stepsRef = useRef([]);

  const [activeTrackingNumber, setActiveTrackingNumber] = useState('BL-ARL-98421');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all' }
      );
      if (stepsRef.current && stepsRef.current.length > 0) {
        gsap.fromTo(
          stepsRef.current,
          { x: -25, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, stagger: 0.1, delay: 0.2, ease: 'power3.out', clearProps: 'all' }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTrackingNumber]);

  // GSAP Hover animations for items
  const handleStepMouseEnter = (el) => {
    if (el) {
      gsap.to(el, { scale: 1.025, x: 6, duration: 0.25, ease: 'power2.out' });
    }
  };

  const handleStepMouseLeave = (el) => {
    if (el) {
      gsap.to(el, { scale: 1, x: 0, duration: 0.25, ease: 'power2.out' });
    }
  };

  const trackedShipments = {
    'BL-ARL-98421': {
      id: 'BL-ARL-98421',
      supplier: 'Global Trade Suppliers Ltd (Singapore)',
      consignee: 'A.R. LOGISTIC / Client Import',
      originPort: 'Singapore (SGSIN)',
      destinationPort: 'Chittagong Port, Bangladesh (BDCGP)',
      currentStage: 3,
      eta: '14 Oct 2026',
      status: 'Customs Clearing In Progress',
      carrier: 'Maersk Line / Vessel: MV BAY BRIDGE',
      items: [
        { name: 'Commercial Invoice & Packing List Audit', completed: true, date: '02 Oct 2026' },
        { name: 'Bill of Lading (B/L) Draft Verification', completed: true, date: '04 Oct 2026' },
        { name: 'Freight Arrival & Customs Duty Filing', completed: true, date: '08 Oct 2026' },
        { name: 'Port Authority Assessment & Physical Inspection', completed: false, date: 'Estimated 11 Oct 2026' },
        { name: 'Final Gate Pass & Delivery Release', completed: false, date: 'Estimated 14 Oct 2026' }
      ]
    },
    'BL-ARL-88310': {
      id: 'BL-ARL-88310',
      supplier: 'Pacific Freight Partners (Shanghai)',
      consignee: 'A.R. LOGISTIC Commercial Division',
      originPort: 'Shanghai Port, China (CNSHA)',
      destinationPort: 'Dhaka Airport Cargo Complex (DAC)',
      currentStage: 4,
      eta: '10 Oct 2026',
      status: 'Final Release Ready',
      carrier: 'Emirates SkyCargo / Flight EK-582',
      items: [
        { name: 'Air Waybill (AWB) & Invoice Verification', completed: true, date: '01 Oct 2026' },
        { name: 'Certificate of Origin (COO) Submission', completed: true, date: '03 Oct 2026' },
        { name: 'Customs Assessment & Duty Settlement', completed: true, date: '05 Oct 2026' },
        { name: 'Cargo Inspection & Verification Clearance', completed: true, date: '07 Oct 2026' },
        { name: 'Final Delivery & Warehouse Receipt', completed: false, date: 'Today' }
      ]
    }
  };

  const activeShipment = trackedShipments[activeTrackingNumber] || trackedShipments['BL-ARL-98421'];

  return (
    <section id="tracker" ref={sectionRef} className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/80 border-y border-slate-800 text-white' : 'bg-slate-100/90 border-y border-slate-200 text-slate-950'
    }`}>
      {/* Moving Ambient Background */}
      <div className={`absolute top-1/3 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-floating-slow ${
        darkMode ? 'bg-amber-500/10' : 'bg-amber-500/20'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/15 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3 shadow-sm">
            Interactive Operational Demo
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
            Live Logistics & <span className="gold-gradient-text">Shipment Tracker</span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Demonstrating how Jubayer Hossain manages customs clearance stages, Bills of Lading, and documentation timelines.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tracker Interactive Container with GSAP Motion */}
        <div ref={cardRef} className={`p-4 sm:p-8 rounded-2xl border transition-all shadow-2xl ${
          darkMode ? 'bg-slate-950/90 border-slate-700' : 'bg-white border-slate-300'
        }`}>
          {/* Tracking Search & Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-700/40">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-amber-500/15 text-amber-500 font-bold shrink-0 shadow-md">
                <Ship className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className={`text-base sm:text-lg font-black ${darkMode ? 'text-white' : 'text-slate-950'}`}>Consignment Tracking Ledger</h3>
                <p className={`text-xs font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Select a B/L reference to simulate operational tracking</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
              {Object.keys(trackedShipments).map((trackId) => (
                <button
                  key={trackId}
                  onClick={() => setActiveTrackingNumber(trackId)}
                  className={`flex-1 sm:flex-initial w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-black transition-all border shadow-sm cursor-pointer text-center whitespace-nowrap ${
                    activeTrackingNumber === trackId
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-500 ring-2 ring-amber-500/40 shadow-lg shadow-amber-500/25 font-black'
                      : darkMode
                        ? 'bg-slate-900 border-slate-700 text-slate-100 hover:border-amber-400 hover:text-amber-300'
                        : 'bg-slate-100 border-slate-300 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {trackId}
                </button>
              ))}
            </div>
          </div>

          {/* Consignment Info Header */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 my-6">
            <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <span className={`text-[10px] font-black uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Consignee / Client</span>
              <p className={`text-sm font-black mt-1 ${darkMode ? 'text-white' : 'text-slate-950'}`}>{activeShipment.consignee}</p>
            </div>
            <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <span className={`text-[10px] font-black uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Route Origin → Destination</span>
              <p className={`text-xs font-bold mt-1 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                {activeShipment.originPort} → {activeShipment.destinationPort}
              </p>
            </div>
            <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <span className={`text-[10px] font-black uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Estimated Clearance ETA</span>
              <p className="text-sm font-black text-amber-500 mt-1">{activeShipment.eta}</p>
            </div>
          </div>

          {/* Stepper Timeline with GSAP Hover Motion */}
          <div className="space-y-4 pt-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">Document & Clearance Progress Timeline</h4>

            <div className="space-y-3">
              {activeShipment.items.map((item, idx) => (
                <div 
                  key={idx}
                  ref={(el) => (stepsRef.current[idx] = el)}
                  onMouseEnter={() => handleStepMouseEnter(stepsRef.current[idx])}
                  onMouseLeave={() => handleStepMouseLeave(stepsRef.current[idx])}
                  className={`flex flex-col xs:flex-row xs:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all ${
                    item.completed 
                      ? darkMode ? 'bg-slate-900/90 border-emerald-500/40 shadow-sm' : 'bg-emerald-50/80 border-emerald-300 shadow-sm'
                      : darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className={`p-2 rounded-full shrink-0 ${
                      item.completed 
                        ? 'bg-emerald-500/20 text-emerald-400' 
                        : 'bg-amber-500/20 text-amber-400 animate-pulse'
                    }`}>
                      {item.completed ? <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5" /> : <Clock className="w-4.5 h-4.5 sm:w-5 sm:h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs sm:text-sm font-bold leading-tight ${
                        item.completed 
                          ? darkMode ? 'text-white' : 'text-slate-950' 
                          : darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        {item.name}
                      </p>
                      <p className={`text-[11px] sm:text-xs font-semibold mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.date}</p>
                    </div>
                  </div>

                  <span className={`self-start xs:self-auto shrink-0 whitespace-nowrap inline-flex items-center justify-center min-w-max text-[10px] sm:text-xs font-black px-3 py-1 rounded-full border shadow-sm ${
                    item.completed
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                      : 'bg-amber-500/20 text-amber-400 border-amber-500/50'
                  }`}>
                    {item.completed ? 'COMPLETED' : 'IN PROGRESS'}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
