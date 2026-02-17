
import React, { useState } from 'react';

interface Location {
  id: string;
  name: string;
  address: string;
  meals: string;
  distance: string;
  verified: boolean;
  image: string;
}

const MOCK_LOCATIONS: Location[] = [
  {
    id: '1',
    name: 'The Grand Mosque',
    address: 'Downtown, Jakarta',
    meals: '200+ meals daily',
    distance: '0.8 km',
    verified: true,
    image: 'https://images.unsplash.com/photo-1542668595-fa9394e5b686?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '2',
    name: 'Al-Azhar Mosque',
    address: 'Kebayoran Baru, Jakarta',
    meals: '150+ meals daily',
    distance: '2.3 km',
    verified: true,
    image: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '3',
    name: 'Masjid Istiqlal',
    address: 'Central Jakarta',
    meals: '500+ meals daily',
    distance: '3.1 km',
    verified: true,
    image: 'https://images.unsplash.com/photo-1584551270911-60ad6720211e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '4',
    name: 'Baitul Ihsan',
    address: 'Menteng, Jakarta',
    meals: '100+ meals daily',
    distance: '1.2 km',
    verified: false,
    image: 'https://images.unsplash.com/photo-1512100356956-c12872638f5f?auto=format&fit=crop&q=80&w=600'
  }
];

const FindIftarView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filterVerified, setFilterVerified] = useState(false);

  const filteredLocations = MOCK_LOCATIONS.filter(loc => {
    const matchesSearch = loc.name.toLowerCase().includes(search.toLowerCase()) || 
                          loc.address.toLowerCase().includes(search.toLowerCase());
    const matchesVerified = filterVerified ? loc.verified : true;
    return matchesSearch && matchesVerified;
  });

  return (
    <div className="pt-28 pb-20 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 space-y-4">
          <h1 className="text-4xl font-extrabold text-secondary dark:text-white">Find Iftar Nearby</h1>
          <p className="text-slate-600 dark:text-slate-400">Showing mosques and locations providing free Takjil in your area.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-grow">
            <span className="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              type="text" 
              placeholder="Search by mosque name or location..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-lg shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <button 
            onClick={() => setFilterVerified(!filterVerified)}
            className={`flex items-center gap-2 px-6 py-4 rounded-2xl border transition-all font-bold ${filterVerified ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50'}`}
          >
            <span className="material-icons-outlined">{filterVerified ? 'verified' : 'verified_user'}</span>
            Verified Only
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLocations.map(location => (
            <div key={location.id} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img src={location.image} alt={location.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1 shadow-md">
                    <span className="material-icons-outlined text-sm text-primary">near_me</span>
                    {location.distance}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-secondary dark:text-white flex items-center gap-2">
                      {location.name}
                      {location.verified && <span className="material-icons-outlined text-primary text-lg">verified</span>}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{location.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-primary bg-emerald-50 dark:bg-emerald-950/30 px-4 py-2 rounded-xl text-sm font-bold">
                    <span className="material-icons-outlined text-lg">restaurant_menu</span>
                    {location.meals}
                </div>

                <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3 rounded-xl transition-all hover:bg-primary dark:hover:bg-primary dark:hover:text-white flex items-center justify-center gap-2">
                   Get Directions
                   <span className="material-icons-outlined text-sm">directions</span>
                </button>
              </div>
            </div>
          ))}

          {filteredLocations.length === 0 && (
            <div className="col-span-full py-20 text-center space-y-4 bg-white dark:bg-slate-900 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800">
               <div className="bg-slate-100 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                 <span className="material-icons-outlined text-4xl text-slate-400">sentiment_dissatisfied</span>
               </div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white">No locations found</h3>
               <p className="text-slate-500 max-w-sm mx-auto">Try adjusting your search or filters to find more Iftar locations.</p>
               <button 
                  onClick={() => {setSearch(''); setFilterVerified(false);}}
                  className="text-primary font-bold hover:underline"
                >
                  Clear all filters
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindIftarView;
