interface ReviewsCardProps {
  quote: string;
  author: string;
  role: string;
  handle: string;
  avatar: string;
}

export default function ReviewsCard({ quote, author, role, handle, avatar }: ReviewsCardProps) {
  return (
    <div className="w-full inline-block break-inside-avoid mb-8 relative group">
      
      {/* CARD BODY */}
      <div className="relative rounded-2xl bg-white p-8 shadow-lg shadow-slate-200/50 border border-slate-100 transition-all duration-300 ease-in-out transform group-hover:-translate-y-2 group-hover:translate-x-1 group-hover:scale-[1.02]">
        
        {/* Quote Icon (Top Left) */}
        <svg className="absolute -top-3 left-6 w-8 h-8 text-blue-100 transform -scale-x-100" viewBox="0 0 24 24" fill="currentColor">
           <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
        </svg>

        {/* Quote Content */}
        <blockquote className="relative z-10 text-slate-600 leading-relaxed font-sans text-lg">
          "{quote}"
        </blockquote>

        {/* Corner Decoration (Bottom Left) */}
        <div className="absolute -bottom-3 left-8 text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.736 4 21.276 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z" />
            </svg>
        </div>
      </div>

      {/* AUTHOR INFO */}
      <div className="flex items-center gap-4 px-4 pt-4">
        <img 
          src={avatar} 
          alt={author} 
          className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm"
        />
        
        <div className="flex-1 overflow-hidden">
          <div className="font-bold text-[var(--color-navy-900)] text-sm">
            {author}
          </div>
          
          <div className="relative h-5 w-full">
            <div className="absolute top-0 left-0 w-full transition-all duration-300 ease-out group-hover:translate-x-8 group-hover:opacity-0 text-xs text-slate-400 font-sans truncate">
              {role}
            </div>
            <div className="absolute top-0 left-0 w-full transition-all duration-300 ease-out -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 text-xs text-[#5865F2] font-bold font-sans">
              {handle}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}