import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  UserCheck
} from 'lucide-react';

export default function Contact({ darkMode = true }) {
  const sectionRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const refsRef = useRef([]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        infoRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all' }
      );
      gsap.fromTo(
        formRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 0.15, ease: 'power3.out', clearProps: 'all' }
      );
      if (refsRef.current && refsRef.current.length > 0) {
        gsap.fromTo(
          refsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.3, ease: 'power3.out', clearProps: 'all' }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  const references = [
    {
      name: 'Yeasin Munshi',
      title: 'Mern-Satck Developer',
      company: 'The Legend It',
      address: 'Sekhertek, Mohammadpur, Dhaka-1207',
      email: 'yeasin.dev01@gmail.com',
      mobile: '+880 1754789867'
    },
    {
      name: 'MD Iqbal Hossain',
      title: 'Executive Admin Officer',
      company: 'BZM Graphics Ltd',
      address: 'Sekhertek, Mohammadpur, Dhaka-1207',
      email: 'iqabal.aa.bzm@gmail.com',
      mobile: '+880 1896198502'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/80 border-t border-slate-800 text-white' : 'bg-slate-100/90 border-t border-slate-200 text-slate-950'
    }`}>
      {/* Moving Ambient Background */}
      <div className={`absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-floating-slow ${
        darkMode ? 'bg-amber-500/10' : 'bg-amber-500/20'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/15 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-3 shadow-sm">
            Get In Touch
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
            Contact <span className="gold-gradient-text">Jubayer Hossain</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6" ref={infoRef}>
            <div className={`p-6 sm:p-8 rounded-2xl border shadow-xl transition-all hover:scale-[1.01] ${
              darkMode ? 'bg-slate-950/90 border-slate-700' : 'bg-white border-slate-300'
            }`}>
              <h3 className={`text-xl font-black mb-6 ${darkMode ? 'text-white' : 'text-slate-950'}`}>Contact Information</h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-amber-500/15 text-amber-500 font-bold shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`font-black text-xs uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Present Address</h4>
                    <p className={`font-bold mt-0.5 ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                      House #09, Road #09, PC Culture Housing Society, Shekertek, Adabor, Dhaka, Bangladesh.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-500 font-bold shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`font-black text-xs uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Direct Mobile / WhatsApp</h4>
                    <a href="tel:+8801627217707" className="font-black text-amber-500 hover:underline block mt-0.5">
                      +880 1627-217707
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-500/15 text-blue-500 font-bold shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`font-black text-xs uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Official Email</h4>
                    <a href="mailto:jubayerhossainbd25@gmail.com" className="font-black text-amber-500 hover:underline block mt-0.5">
                      jubayerhossainbd25@gmail.com
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7" ref={formRef}>
            <div className={`p-6 sm:p-8 rounded-2xl border shadow-xl transition-all ${
              darkMode ? 'bg-slate-950/90 border-slate-700' : 'bg-white border-slate-300'
            }`}>
              <h3 className={`text-xl font-black mb-6 ${darkMode ? 'text-white' : 'text-slate-950'}`}>Send a Message</h3>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-black text-emerald-500">Message Sent Successfully!</h4>
                  <p className={`text-xs font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Thank you for reaching out. Jubayer Hossain will get back to your inquiry promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-bold mb-1.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Your Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm font-semibold focus:outline-none focus:border-amber-500 ${
                          darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-950'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-bold mb-1.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm font-semibold focus:outline-none focus:border-amber-500 ${
                          darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-950'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Subject</label>
                    <input 
                      type="text" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Commercial / Logistics Inquiry"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-semibold focus:outline-none focus:border-amber-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-950'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Message *</label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message or job proposal details here..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-semibold focus:outline-none focus:border-amber-500 ${
                        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-950'
                      }`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4.5 h-4.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* References Grid with Guaranteed High Visibility */}
        <div className={`pt-12 border-t ${darkMode ? 'border-slate-800' : 'border-slate-300'}`}>
          <h3 className={`text-xl sm:text-2xl font-black text-center mb-8 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
            Professional <span className="gold-gradient-text">References</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {references.map((ref, idx) => (
              <div 
                key={idx} 
                ref={(el) => (refsRef.current[idx] = el)}
                className={`p-6 sm:p-8 rounded-2xl border shadow-xl transition-all hover:scale-[1.02] ${
                  darkMode ? 'bg-slate-950/95 border-slate-700' : 'bg-white border-slate-300 shadow-md'
                }`}
              >
                <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-slate-700/40">
                  <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-500 font-bold shrink-0 shadow-md">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={`text-lg font-black ${darkMode ? 'text-white' : 'text-slate-950'}`}>{ref.name}</h4>
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-extrabold">{ref.title}</p>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs sm:text-sm font-bold">
                  <p className={`font-black ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>{ref.company}</p>
                  <p className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{ref.address}</p>
                </div>

                <div className={`mt-4 pt-3 border-t text-xs sm:text-sm font-black space-y-1.5 ${
                  darkMode ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <p className="text-amber-600 dark:text-amber-400 flex items-center gap-2">
                    <span>Email:</span>
                    <a href={`mailto:${ref.email}`} className="underline font-bold">{ref.email}</a>
                  </p>
                  <p className={`flex items-center gap-2 ${darkMode ? "text-slate-200" : "text-slate-900"}`}>
                    <span>Mobile:</span>
                    <a href={`tel:${ref.mobile.replace(/[^0-9+]/g, '')}`} className="font-bold">{ref.mobile}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
