import { useState } from 'react';
import ReviewsCard from '../components/ReviewsCard';
import XIcon from '../components/icons/X';
import Button from '../components/ui/Button';

const reviews = [
  {
    quote: "BlockBuddy cut our load times in half. Moving our modded server over was painless.",
    author: "Alex Rivera",
    role: "Community Owner",
    handle: "@alexrivera",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "We launched a new SMP in under 10 minutes. The panel is clear and the pricing is fair.",
    author: "Priya Das",
    role: "Minecraft Admin",
    handle: "@priyadas",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "Their DDoS protection is the real deal. We stayed online during a 20-minute attack.",
    author: "Morgan Lee",
    role: "Network Lead",
    handle: "@morganlee",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "The VPS performance is excellent for our bot services and web dashboards.",
    author: "Jordan Kim",
    role: "DevOps Engineer",
    handle: "@jordankim",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "Support gets back within minutes. You can tell they actually care.",
    author: "Samira Hall",
    role: "Server Moderator",
    handle: "@samirahall",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "BlockBuddy is the first host that scales smoothly when we add more players.",
    author: "Taylor Brooks",
    role: "Event Organizer",
    handle: "@taylorbrooks",
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
                Customer <span className="text-[var(--color-gold-500)]">Reviews</span>
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
