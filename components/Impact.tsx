
import React from 'react';

const Impact: React.FC = () => {
  return (
    <section className="py-24 bg-emerald-50/50 dark:bg-emerald-950/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Community Impact</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary dark:text-white">Spreading Blessings Together</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] text-center shadow-sm border border-slate-100 dark:border-slate-800 transition-transform hover:scale-[1.02]">
            <div className="text-6xl font-black text-secondary dark:text-white mb-2">500+</div>
            <div className="text-primary font-bold uppercase tracking-wider">Mosques Joined</div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] text-center shadow-sm border border-slate-100 dark:border-slate-800 transition-transform hover:scale-[1.02]">
            <div className="text-6xl font-black text-secondary dark:text-white mb-2">12k+</div>
            <div className="text-primary font-bold uppercase tracking-wider">Active Users</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
