
import React from 'react';
import {images} from "@/assets";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <header className="relative pt-40 pb-24 overflow-hidden islamic-pattern hero-gradient">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/30 text-primary rounded-full text-sm font-bold tracking-wide uppercase">
            <span className="material-icons-outlined text-sm">stars</span>
            Ramadan 2024
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
            Find Free <br/>
            <span className="relative inline-block px-4 py-1 text-primary italic">
              Iftar
              <span className="absolute inset-0 bg-primary/10 -skew-x-12 rounded-lg -z-10"></span>
            </span> 
            Nearby
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            A community-driven platform to share and find free Takjil at mosques during the blessed month of Ramadan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onGetStarted}
              className="bg-primary hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-xl shadow-primary/20"
            >
              Open App
              <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">explore</span>
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
            <img 
              alt="Majestic Blue Mosque at twilight" 
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 hover:scale-105" 
              src={images.mosqueImage}
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-xl">Masjid Nurul Iman</h3>
                  <p className="text-white/80 text-sm">Lantai 7, Mall Blok M Square, Jakarta Selatan</p>
                </div>
                <button 
                  onClick={() => window.open('https://maps.app.goo.gl/dnCVC1x628yZWjLP6', '_blank')}
                  className="bg-white p-2 rounded-full shadow-lg hover:bg-slate-50 transition-colors"
                >
                    <span className="material-icons-outlined text-primary">location_on</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
