import { ArrowRight, Users } from 'lucide-react';
import { ReactNode } from 'react';

interface ServerCardProps {
  name: string;
  description: string;
  image: string;
  icon: ReactNode;
  players: number;
  status: 'online' | 'maintenance';
  tags: string[];
}

export default function ServerCard({ name, description, image, players, status, tags }: ServerCardProps) {
  return (
    <div className="group relative flex flex-col gap-6">
      <div className="relative w-full transition-all duration-700 ease-out transform md:[transform:perspective(1500px)_rotateY(-12deg)_rotateX(6deg)_translateZ(0)] group-hover:[transform:perspective(1500px)_rotateY(0deg)_rotateX(0deg)_translateZ(0)] will-change-transform z-10 hover:z-20">
        <div 
          className="overflow-hidden rounded-xl bg-white border-2 border-[var(--server-card-border)] shadow-[8px_8px_0px_0px_var(--server-card-shadow)] group-hover:shadow-[12px_12px_0px_0px_var(--server-card-shadow)] transition-all duration-300"
        >
          
          {/* Window Header (MacOS Style) */}
          <div className="flex h-8 w-full items-center gap-2 bg-[#1E293B] px-4 border-b-2 border-[var(--server-card-border)]">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] border border-black/20"></div> {/* Red */}
              <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] border border-black/20"></div> {/* Yellow */}
              <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F] border border-black/20"></div> {/* Green */}
            </div>
            <div className="flex-1 text-center text-[10px] font-mono text-white/40 tracking-wider">
              {name.toLowerCase().replace(/\s+/g, '-')}.moonveil.net
            </div>
          </div>

          {/* Server Image */}
          <div className="relative aspect-video w-full overflow-hidden bg-gray-900 group-hover:brightness-110 transition-all duration-500">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
             <img 
               src={image} 
               alt={name} 
               className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             
             {/* Overlay Status inside Image */}
             <div className="absolute bottom-3 left-4 z-20 flex items-center gap-3">
                <div className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${status === 'online' ? 'bg-green-500/20 text-green-400 border-green-500/50' : 'bg-red-500/20 text-red-400 border-red-500/50'}`}>
                  {status.toUpperCase()}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-white shadow-black drop-shadow-md">
                  <Users size={12} className="text-[#F59E0B]" />
                  <span>{players.toLocaleString()} Online</span>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* TEXT CONTENT (English) */}
      <div className="flex flex-col px-1">
        <div className="flex items-start justify-between">
           <div>
             <h3 className="text-2xl font-bold text-[var(--color-navy-900)] group-hover:text-[var(--color-gold-500)] transition-colors">
               {name}
             </h3>
             <div className="flex flex-wrap gap-2 mt-3">
               {tags.map((tag) => (
                 <span key={tag} className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded border border-slate-300">
                   #{tag.toUpperCase()}
                 </span>
               ))}
             </div>
           </div>
           
           {/* Play Button Icon */}
           <button className="h-10 w-10 rounded-full bg-[var(--color-gold-500)] text-white shadow-lg flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <ArrowRight size={20} />
           </button>
        </div>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-2 font-medium">
          {description}
        </p>
      </div>

    </div>
  );
}