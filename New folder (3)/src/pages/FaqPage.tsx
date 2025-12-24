import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { faqData } from '../data/FaqData';
import { HelpCircle } from 'lucide-react';

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-cream font-pixelify text-navy flex flex-col">
      <Navbar />
      
      {/* HEADER SECTION */}
      <div className="pt-40 pb-16 px-6 relative overflow-hidden">
         {/* Decoration */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 right-1/4 w-64 h-64 bg-green-100 rounded-full blur-[80px] opacity-60"></div>
            <div className="absolute top-40 left-1/4 w-72 h-72 bg-blue-100 rounded-full blur-[80px] opacity-60"></div>
         </div>

         <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <HelpCircle className="w-5 h-5 text-[var(--color-gold-500)]" />
                <span className="text-sm font-bold text-slate-500 tracking-widest uppercase font-sans">Common Questions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-navy-900)] mb-6">
                Frequently Asked <span className="text-[var(--color-gold-500)]">Questions</span>
            </h1>
            <p className="text-lg text-slate-500 font-sans max-w-2xl mx-auto leading-relaxed">
                Got confused? Don't worry, we've compiled the most common questions from our community to help you out.
            </p>
         </div>
      </div>

      {/* CHAT / FAQ SECTION */}
      <div className="flex-1 max-w-5xl mx-auto px-4 md:px-8 pb-32 w-full">
        <div className="flex flex-col gap-12">
            
            {faqData.map((chat) => (
                <div key={chat.id} className="flex flex-col gap-6">
                    
                    {/* --- LEFT: QUESTION (PLAYER) --- */}
                    <div className="flex items-end gap-4 md:gap-6 self-start max-w-[90%] md:max-w-[80%]">
                        
                        {/* Avatar Player */}
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl border-2 border-[var(--color-navy-900)] bg-gray-200 overflow-hidden shadow-md">
                                <img 
                                    src={`https://minotar.net/helm/${chat.asker}/100.png`} 
                                    alt={chat.asker}
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="text-center mt-1 text-xs font-bold text-slate-400 font-sans">{chat.asker}</div>
                        </div>

                        {/* Bubble Card Question */}
                        <div className="relative group">
                            {/* Shadow Offset */}
                            <div className="absolute top-0 left-0 w-full h-full rounded-2xl rounded-bl-none bg-[var(--color-navy-900)] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                            
                            {/* Card Body */}
                            <div className="relative z-10 bg-white border-2 border-[var(--color-navy-900)] p-5 md:p-6 rounded-2xl rounded-bl-none">
                                <p className="text-[var(--color-navy-900)] font-bold text-lg mb-1 font-sans">
                                    "{chat.question}"
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* --- RIGHT: ANSWER (STAFF) --- */}
                    <div className="flex flex-row-reverse items-end gap-4 md:gap-6 self-end max-w-[90%] md:max-w-[80%] text-right">
                        
                        {/* Avatar Staff */}
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl border-2 border-[var(--color-gold-500)] bg-orange-50 overflow-hidden shadow-md">
                                <img 
                                    src={`https://minotar.net/helm/${chat.responder}/100.png`} 
                                    alt={chat.responder}
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="text-center mt-1 text-xs font-bold text-orange-500 font-sans">{chat.responder}</div>
                        </div>

                        {/* Bubble Card Answer */}
                        <div className="relative group text-left">
                            {/* Shadow Offset (Gold) */}
                            <div className="absolute top-0 left-0 w-full h-full rounded-2xl rounded-br-none bg-[var(--color-gold-500)] transition-transform duration-300 group-hover:translate-x-[-4px] group-hover:translate-y-1"></div>
                            
                            {/* Card Body */}
                            <div className="relative z-10 bg-[#FFFBF0] border-2 border-[var(--color-gold-500)] p-5 md:p-6 rounded-2xl rounded-br-none">
                                <p className="text-slate-600 font-medium font-sans leading-relaxed">
                                    {chat.answer}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            ))}

        </div>
      </div>

      <Footer />
    </div>
  );
}