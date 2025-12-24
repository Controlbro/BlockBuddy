import ServerCard from '../components/ServerCard';
import Button from '../components/ui/Button';
import survivalImage from '../assets/servers/survival.webp';
import skyblockImage from '../assets/servers/skyblock.webp';
import donutImage from '../assets/servers/donut.webp';
import creativeImage from '../assets/servers/creative.webp';
import { Boxes, Cloud, Cpu, ShieldCheck } from 'lucide-react';

const servers = [
  {
    name: "Minecraft Hosting",
    description: "Instant setup for Paper, Purpur, or Forge with modpack installers, backups, and easy file access.",
    image: survivalImage,
    icon: <Boxes className="w-6 h-6 text-[var(--color-gold-500)]" />,
    startingAt: "$1/GB",
    availability: "AVAILABLE",
    tags: ["Modpacks", "Backups", "Instant Deploy"]
  },
  {
    name: "VPS Hosting",
    description: "Flexible virtual servers with full root access, NVMe SSDs, and scalable resources.",
    image: skyblockImage,
    icon: <Cloud className="w-6 h-6 text-[var(--color-gold-500)]" />,
    startingAt: "$1.50/GB",
    availability: "AVAILABLE",
    tags: ["Root Access", "Linux Distros", "Snapshots"]
  },
  {
    name: "DDoS Protection",
    description: "Always-on mitigation with smart routing to keep your communities online during attacks.",
    image: donutImage,
    icon: <ShieldCheck className="w-6 h-6 text-[var(--color-gold-500)]" />,
    startingAt: "Included",
    availability: "GUARANTEED",
    tags: ["Layer 4/7", "Auto Mitigation", "Global Network"]
  },
  {
    name: "Dedicated Nodes",
    description: "High-frequency CPUs and isolated resources for demanding networks and multi-server fleets.",
    image: creativeImage,
    icon: <Cpu className="w-6 h-6 text-[var(--color-gold-500)]" />,
    startingAt: "Custom",
    availability: "LIMITED",
    tags: ["Ryzen", "NVMe RAID", "Private VLAN"]
  }
];

export default function Servers() {
  return (
    <section id="plans" className="py-24 bg-cream relative overflow-hidden">
      
      {/* Background Accents (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-orange-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-50/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/50 text-orange-700 text-xs font-bold uppercase tracking-widest mb-4 border border-orange-200/50">
            BlockBuddy Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-navy-900)] mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold-500)] to-orange-600">Hosting</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Transparent pricing, modern hardware, and support that actually responds. Pick the stack that fits your community.
          </p>
        </div>

        {/* Server Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
          {servers.map((server, index) => (
            <ServerCard 
              key={index}
              {...server}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
             <Button variant="outlined" size="lg" className="border-slate-300 hover:border-[var(--color-gold-500)] hover:text-[var(--color-gold-500)] hover:bg-cream">
                Compare All Plans
             </Button>
        </div>

      </div>
    </section>
  );
}
