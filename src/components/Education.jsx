import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  GraduationCap, 
  Calendar,
  BookOpen,
  Building2
} from 'lucide-react';

export default function Education({ darkMode = true }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current && cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, stagger: 0.12, ease: 'power3.out', clearProps: 'all' }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const educationList = [
    {
      degree: 'Master of Business Administration (MBA)',
      major: 'Marketing',
      institution: 'Tejgaon College, Dhaka',
      result: 'CGPA 2.92',
      year: '2023',
      type: 'Post-Graduate Degree',
      badge: 'Master’s Degree',
      description: 'Specialized in strategic marketing, supply chain marketing communications, international buyer relationship management, and market research.'
    },
    {
      degree: 'Bachelor of Business Administration (BBA)',
      major: 'Marketing',
      institution: 'Tejgaon College, Dhaka',
      result: 'CGPA 2.62',
      year: '2022',
      type: 'Undergraduate Degree',
      badge: 'Bachelor’s Degree',
      description: 'Comprehensive business administration foundation covering commercial management, business law, logistics, and organizational behavior.'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      major: 'Business Studies',
      institution: 'Govt. BK Nagar Bangabondhu Degree College',
      result: 'GPA 3.91',
      year: '2018',
      type: 'Higher Secondary Education',
      badge: 'Board Excellence',
      description: 'Business Studies concentration in Accounting, Business Organization, and Commercial Studies.'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      major: 'Business Studies',
      institution: 'Vadrason G.C. Academy',
      result: 'GPA 4.72',
      year: '2016',
      type: 'Secondary Education',
      badge: 'High Distinction',
      description: 'Business Studies concentration with strong mathematics, general science, and commerce foundation.'
    }
  ];

  return (
    <section id="education" ref={sectionRef} className={`py-24 relative transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950 border-t border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/15 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3 shadow-sm">
            Academic Qualifications
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
            Education & <span className="gold-gradient-text">Credentials</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Grid with Guaranteed 100% Visibility for all 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <div 
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.01] shadow-xl ${
                darkMode 
                  ? 'bg-slate-900/95 border-slate-700 hover:border-amber-500/60' 
                  : 'bg-white border-slate-300 hover:border-amber-500/60 shadow-lg'
              }`}
            >
              <div className={`flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b mb-5 ${
                darkMode ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-slate-950 font-black shrink-0 shadow-lg">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-lg sm:text-xl font-black tracking-tight leading-snug ${
                      darkMode ? 'text-white' : 'text-slate-950'
                    }`}>
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/40 inline-flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                        Major: {edu.major}
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm font-extrabold mt-2 flex items-center gap-1.5 ${
                      darkMode ? 'text-slate-200' : 'text-slate-900'
                    }`}>
                      <Building2 className="w-4 h-4 text-blue-500 shrink-0" />
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
                  <span className="text-xs sm:text-sm font-black px-3.5 py-1 rounded-xl bg-emerald-500/20 text-emerald-950 dark:text-emerald-300 border-2 border-emerald-500/50 shadow-sm whitespace-nowrap">
                    {edu.result}
                  </span>
                  <span className="text-[11px] font-black px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 whitespace-nowrap">
                    {edu.badge}
                  </span>
                </div>
              </div>

              <p className={`text-xs sm:text-sm font-bold leading-relaxed mb-6 ${
                darkMode ? 'text-slate-200' : 'text-slate-900'
              }`}>
                {edu.description}
              </p>

              <div className={`flex items-center justify-between text-xs sm:text-sm font-black pt-4 border-t ${
                darkMode ? 'border-slate-800 text-slate-200' : 'border-slate-200 text-slate-950'
              }`}>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-500" />
                  <span>Passing Year:</span>
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/40 font-black">
                    {edu.year}
                  </span>
                </span>
                <span className="text-xs font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  Verified Result
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
