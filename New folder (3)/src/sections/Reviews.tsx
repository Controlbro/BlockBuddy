import { useState } from 'react';
import ReviewsCard from '../components/ReviewsCard';
import XIcon from '../components/icons/X';
import Button from '../components/ui/Button';

const reviews = [
  {
    quote: "Moonveil has completely changed my survival experience. The economy is perfectly balanced, and the community is super chill.",
    author: "AlexSteve_99",
    role: "Survival Expert",
    handle: "@alexsteve",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "Finally a server that doesn't feel pay-to-win. The custom enchants add so much depth to the PVP!",
    author: "PvP_Master",
    role: "Clan Leader",
    handle: "@pvpmaster",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "The builds on this server are insane! I love the creative plots and the weekly contests. Staff is very helpful too.",
    author: "BuilderBob",
    role: "Architect",
    handle: "@bob_builds",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "I've been playing Skyblock here for 3 months straight. The automation mechanics are addictive.",
    author: "RedstonePro",
    role: "Redstone Engineer",
    handle: "@redstone_wiz",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "Best SMP experience in 2024. Period.",
    author: "DiamondHunter",
    role: "Veteran Player",
    handle: "@dhunter",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "The layout and UI of the server store is clean, and receiving items is instant. Great infrastructure.",
    author: "TechSavvy",
    role: "Server Admin",
    handle: "@tech_minecraft",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  }
];

export default function Reviews() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="reviews" className="py-24 bg-cream relative font-pixelify">
      
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="w-12 h-12 text-[#0F172A] mb-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <XIcon />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy-900)]">
                Community <span className="text-[var(--color-gold-500)]">Feedback</span>
            </h2>
            <div className="h-1 w-24 bg-blue-200 mt-4 rounded-full"></div>
        </div>

        {/* TWEETS GRID (Masonry Layout) */}
        <div className={`relative overflow-hidden transition-all duration-700 ease-in-out ${showMore ? 'max-h-[2000px]' : 'max-h-[600px]'}`}>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 pb-8">
                {reviews.map((review, index) => (
                    <ReviewsCard 
                        key={index}
                        {...review}
                    />
                ))}
            </div>

            {!showMore && (
                <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-cream via-cream/80 to-transparent z-20 flex items-end justify-center pb-8">
                </div>
            )}
        </div>

        {/* SHOW MORE BUTTON */}
        <div className="flex justify-center mt-8 relative z-30">
            <Button 
                onClick={() => setShowMore(!showMore)}
                variant="primary"
                size="md"
            >
                {showMore ? 'Show Less' : 'Show More Reviews'}
            </Button>
        </div>

      </div>
    </section>
  );
}