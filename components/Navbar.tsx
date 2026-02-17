
import React from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'find') => void;
  currentView: 'home' | 'find';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <div className="bg-primary p-2 rounded-lg text-white">
            <span className="material-icons-outlined block">mosque</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-secondary dark:text-white">TakjilFinder</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => window.open('https://takjil-finder-app.vercel.app/', '_blank')}
            className={`font-medium transition-colors ${currentView === 'find' ? 'text-primary' : 'hover:text-primary'}`}
          >
            Find Iftar
          </button>
          <a href="#" className="font-medium hover:text-primary transition-colors">About</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.open('https://takjil-finder-app.vercel.app/', '_blank')}
            className="bg-primary hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 active:scale-95"
          >
            Open App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
