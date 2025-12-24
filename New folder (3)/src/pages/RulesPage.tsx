import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { rulesData } from '../data/RulesData';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-cream font-pixelify text-navy flex flex-col">
      <Navbar />
      
      {/* HEADER SECTION */}
      <div className="pt-40 pb-16 px-6 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 right-10 w-64 h-64 bg-orange-100 rounded-full blur-[80px] opacity-60"></div>
            <div className="absolute top-40 left-10 w-72 h-72 bg-blue-100 rounded-full blur-[80px] opacity-60"></div>
         </div>

         <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <ShieldCheck className="w-5 h-5 text-[var(--color-gold-500)]" />
                <span className="text-sm font-bold text-slate-500 tracking-widest uppercase font-sans">Server Guidelines</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-navy-900)] mb-6">
                Rules & <span className="text-[var(--color-gold-500)]">Regulations</span>
            </h1>
            <p className="text-lg text-slate-500 font-sans max-w-2xl mx-auto leading-relaxed">
                To ensure a fair and enjoyable experience for everyone, please read and follow the rules below. Violations may result in a kick, mute, or ban!
            </p>
         </div>
      </div>

      {/* RULES GRID SECTION */}
      <div className="flex-1 max-w-7xl mx-auto px-6 md:px-8 pb-32 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {rulesData.map((section, index) => {
                const Icon = section.icon;
                return (
                    <div key={index} className="group relative break-inside-avoid">
                        {/* Offset Shadow Effect */}
                        <div className={`absolute top-0 left-0 w-full h-full rounded-2xl bg-white border-2 border-[var(--color-navy-900)] shadow-[6px_6px_0px_0px_var(--color-navy-900)] transition-all duration-300 group-hover:shadow-[10px_10px_0px_0px_var(--color-gold-500)] group-hover:-translate-y-1`}>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8 h-full flex flex-col">
                            {/* Header Card */}
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-[var(--color-navy-900)] mb-1">
                                        {section.category}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-sans italic">
                                        {section.description}
                                    </p>
                                </div>
                                <div className={`p-3 rounded-xl ${section.bg} ${section.color}`}>
                                    <Icon size={28} />
                                </div>
                            </div>

                            {/* Rules List */}
                            <ul className="space-y-4 font-sans text-slate-600 leading-relaxed">
                                {section.rules.map((rule, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <ChevronRight className="w-5 h-5 text-[var(--color-gold-500)] shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base font-medium">{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            })}

        </div>
      </div>

      <Footer />
    </div>
  );
}