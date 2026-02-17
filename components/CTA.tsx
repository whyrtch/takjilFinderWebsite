
import React from 'react';

interface CTAProps {
  onGetStarted: () => void;
}

const CTA: React.FC<CTAProps> = ({ onGetStarted }) => {
  return (
    <section className="py-24 bg-emerald-50/50 dark:bg-emerald-950/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8">Ready to find your next Iftar?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Join thousands of community members sharing and finding Takjil locations across the country today.
          </p>
          
          <button 
            onClick={() => window.open('https://takjil-finder-app.vercel.app/', '_blank')}
            className="bg-secondary dark:bg-primary text-white hover:bg-black dark:hover:bg-emerald-600 px-12 py-5 rounded-full font-bold text-xl transition-all inline-flex items-center gap-4 group shadow-xl shadow-secondary/10"
          >
            Get Started Now
            <span className="material-icons-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
