import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import { voteData } from '../data/VoteData';
import { Heart, Gift } from 'lucide-react';

export default function VotePage() {
  return (
    <div className="min-h-screen bg-cream font-pixelify text-navy flex flex-col">
      <Navbar />
      
      {/* HEADER SECTION */}
      <div className="pt-40 pb-16 px-6 relative overflow-hidden">
         {/* Decoration */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-red-100 rounded-full blur-[80px] opacity-60"></div>
            <div className="absolute top-40 right-1/4 w-64 h-64 bg-orange-100 rounded-full blur-[80px] opacity-60"></div>
         </div>

         <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                <span className="text-sm font-bold text-slate-500 tracking-widest uppercase font-sans">Support The Server</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-navy-900)] mb-6">
                Vote for <span className="text-[var(--color-gold-500)]">Moonveil</span>
            </h1>
            <p className="text-lg text-slate-500 font-sans max-w-2xl mx-auto leading-relaxed">
                Voting helps us grow and gain more players! As a thank you, you will receive rewards in-game for every vote.
            </p>
         </div>
      </div>

      {/* VOTE GRID SECTION */}
      <div className="flex-1 max-w-7xl mx-auto px-6 md:px-8 pb-32 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {voteData.map((site) => (
                <div key={site.id} className="group relative break-inside-avoid">
                    
                    {/* Offset Shadow Effect */}
                    <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-white border-2 border-[var(--color-navy-900)] shadow-[6px_6px_0px_0px_var(--color-navy-900)] transition-all duration-300 group-hover:shadow-[10px_10px_0px_0px_var(--color-gold-500)] group-hover:-translate-y-1">
                    </div>

                    {/* Content Card */}
                    <div className="relative z-10 h-full flex flex-col rounded-2xl overflow-hidden bg-white">
                        
                        {/* Banner Image Container */}
                        <div className="h-40 w-full bg-slate-100 relative overflow-hidden border-b-2 border-[var(--color-navy-900)]">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            
                            <img 
                                src={site.image} 
                                alt={site.name} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            
                            {/* Number Badge */}
                            <div className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center bg-[var(--color-navy-900)] text-white font-bold rounded-lg shadow-md text-sm border-2 border-white">
                                #{site.id}
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 flex flex-col flex-1 text-center">
                            <h3 className="text-2xl font-bold text-[var(--color-navy-900)] mb-2">
                                {site.name}
                            </h3>
                            
                            {/* Reward Info */}
                            <div className="flex items-center justify-center gap-2 mb-6 text-sm font-sans font-medium text-slate-500 bg-slate-50 py-2 px-3 rounded-lg border border-slate-100">
                                <Gift className="w-4 h-4 text-[var(--color-gold-500)]" />
                                <span>{site.reward}</span>
                            </div>

                            {/* Vote Button (Using Custom Component) */}
                            <div className="mt-auto">
                                <Button 
                                    href={site.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="primary"
                                    size="md"
                                    className="w-full"
                                >
                                    VOTE NOW
                                </Button>
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