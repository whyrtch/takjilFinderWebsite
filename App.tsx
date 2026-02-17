
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FindIftarView from './components/FindIftarView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'find'>('home');

  // Simple scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onNavigate={(view) => setCurrentView(view)} 
        currentView={currentView}
      />
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero onGetStarted={() => setCurrentView('find')} />
            <Impact />
            <CTA onGetStarted={() => setCurrentView('find')} />
          </>
        ) : (
          <FindIftarView />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
