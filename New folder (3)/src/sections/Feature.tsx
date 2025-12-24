import { Gauge, HardDrive, ShieldCheck, Wrench } from 'lucide-react';
import feature1 from '../assets/feature/1.webp';
import feature2 from '../assets/feature/2.webp';
import feature3 from '../assets/feature/3.webp';
import feature4 from '../assets/feature/4.webp';

const features = [
  {
    icon: Gauge,
    title: 'High-Performance Hardware',
    description: 'Ryzen-powered CPUs and NVMe SSDs deliver low latency and fast chunk loading for every player.',
    image: feature1,
    color: "text-green-600",
    gradient: "from-green-200 to-green-100"
  },
  {
    icon: ShieldCheck,
    title: 'Always-On DDoS Defense',
    description: 'Layer 4/7 mitigation keeps your worlds and services online, even during massive attacks.',
    image: feature2,
    color: "text-blue-600",
    gradient: "from-blue-200 to-blue-100"
  },
  {
    icon: Wrench,
    title: 'One-Click Modpacks',
    description: 'Install popular modpacks and server jars in seconds with simple controls and automatic updates.',
    image: feature3,
    color: "text-purple-600",
    gradient: "from-purple-200 to-purple-100"
  },
  {
    icon: HardDrive,
    title: 'Automated Backups',
    description: 'Nightly snapshots and instant restores protect your worlds, configs, and databases.',
    image: feature4,
    color: "text-orange-600",
    gradient: "from-orange-200 to-orange-100"
  },
];

export default function Feature() {
  return (
    <section id="features" className="py-24 bg-cream relative overflow-hidden font-pixelify">
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-24">
          <div className="font-medium text-slate-500 mb-2 font-sans tracking-wide">
             Introducing some
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy-900)]">
             Why <span className="font-black">BlockBuddy</span>?
          </h2>
        </div>

        {/* FEATURES LIST */}
        <div className="flex flex-col gap-24 md:gap-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 !== 0; 
            
            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center gap-12 md:gap-20 lg:gap-32`}
              >
                {/* --- 1. THE IMAGE CARD --- */}
                <div className={`relative h-64 md:h-72 w-full max-w-[23rem] shrink-0 overflow-hidden rounded-3xl bg-gradient-to-tl ${feature.gradient} shadow-xl shadow-black/5`}>
                    
                    {/* Inner Image Container */}
                    <div className="absolute left-5 top-5 w-[30rem] overflow-hidden rounded-lg shadow-xl bg-white">
                        <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* --- 2. TEXT CONTENT --- */}
                <div className="text-left w-full max-w-[23rem] md:max-w-none">
                    <div className="relative inline-block mb-4">
                        <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                             <Icon size={28} className={`md:w-8 md:h-8 ${feature.color}`} />
                        </div>
                        <div className="absolute -bottom-4 left-4 -z-10 h-7 w-7 rounded-full bg-black/20 blur-md"></div>
                    </div>

                    {/* Title */}
                    <div className="pt-4 text-2xl md:text-3xl font-bold text-[var(--color-navy-900)]">
                        {feature.title}
                    </div>

                    {/* Description */}
                    <div className="pt-3 font-medium text-slate-500 font-sans text-base md:text-lg leading-relaxed">
                        {feature.description}
                    </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
