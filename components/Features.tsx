
import React from 'react';

const Features: React.FC = () => {
  const featureList = [
    {
      icon: 'location_on',
      title: 'Find Locations',
      description: 'Locate mosques providing free food near you using real-time GPS and interactive mapping technology.'
    },
    {
      icon: 'add_circle_outline',
      title: 'Contribute',
      description: 'Help the community by adding new locations and sharing daily menu details from your local mosques.'
    },
    {
      icon: 'verified_user',
      title: 'Verified by Admin',
      description: 'Rest easy with trusted data verified by our dedicated community moderators for accuracy and freshness.'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Key Features</h2>
          <p className="text-slate-600 dark:text-slate-400">Everything you need to find and share blessings in one place.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureList.map((feature, idx) => (
            <div 
              key={idx}
              className="group p-8 bg-background-light dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/40 text-primary rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <span className="material-icons-outlined text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
