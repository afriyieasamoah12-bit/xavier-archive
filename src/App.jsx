import React, { useState } from 'react';

const XavierVault = () => {
  const [activeCourse, setActiveCourse] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [quota, setQuota] = useState(100000);
  const [avgSale, setAvgSale] = useState(5000);
  const [closeRate, setCloseRate] = useState(20);

  // Style Objects for Luxurious Dark Mode
  const smokeGlassStyle = {
    background: 'rgba(20, 20, 22, 0.6)', // Deep smoke
    backdropFilter: 'blur(20px)', // Heavy blur for premium depth
    borderRadius: '30px', // Softer luxury corners
    border: '1px solid rgba(255, 255, 255, 0.04)', // Almost invisible border
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)', // Deep luxurious shadow
    transition: 'all 0.4s ease'
  };

  const darkGradientHeader = {
    background: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 60%, #1e3a8a 100%)', // Midnight tones
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    textShadow: '0 0 15px rgba(168, 85, 247, 0.5)' // Neon glow for text
  };

  const neonPurpleGlow = { boxShadow: '0 0 15px 2px rgba(168, 85, 247, 0.4)' };
  const neonBlueGlow = { boxShadow: '0 0 15px 2px rgba(59, 130, 246, 0.4)' };

  const neededLeads = Math.round((quota / avgSale) / (closeRate / 100));

  return (
    <div style={{ backgroundColor: '#0a0a0c', minHeight: '100vh', fontFamily: 'sans-serif', color: '#e2e8f0' }}>
      
      {/* Luxury Midnight Header */}
      <nav style={darkGradientHeader} className="p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center"></div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 style={{ letterSpacing: '-2px', fontWeight: '900' }} className="text-4xl font-black italic cursor-pointer text-white" onClick={() => setActiveCourse('home')}>
            XAVIER VAULT
          </h1>
          <input 
            type="text" 
            placeholder="Search encrypted data..." 
            className="p-4 rounded-full w-full max-w-md bg-white/5 text-slate-100 outline-none border border-white/10 placeholder:text-slate-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-10 mt-10">
        {activeCourse === 'home' ? (
          <div className="grid md:grid-cols-2 gap-10">
            {/* MKTG Card - Futuristic Blue */}
            <div 
              onClick={() => setActiveCourse('mktg')}
              style={smokeGlassStyle} 
              className="p-12 cursor-pointer hover:scale-105 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div style={neonBlueGlow} className="h-2 w-24 bg-blue-500 mb-6 rounded-full relative z-10"></div>
              <h3 className="text-3xl font-black text-white relative z-10 tracking-tight">MKTG 302</h3>
              <p className="text-slate-400 font-medium mt-3 relative z-10 text-lg">Reds Data Analytics & Quantitative Research</p>
              <div className="mt-8 text-blue-400 font-bold group-hover:translate-x-2 transition-transform relative z-10 flex items-center gap-2">Access Mainframe <span className="text-xl">›</span></div>
            </div>

            {/* Sales Card - Futuristic Purple */}
            <div 
              onClick={() => setActiveCourse('sales')}
              style={smokeGlassStyle} 
              className="p-12 cursor-pointer hover:scale-105 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div style={neonPurpleGlow} className="h-2 w-24 bg-purple-500 mb-6 rounded-full relative z-10"></div>
              <h3 className="text-3xl font-black text-white relative z-10 tracking-tight">SALES MGMT</h3>
              <p className="text-slate-400 font-medium mt-3 relative z-10 text-lg">Funnel Optimization & Funnel Calculator</p>
              <div className="mt-8 text-purple-400 font-bold group-hover:translate-x-2 transition-transform relative z-10 flex items-center gap-2">Access Mainframe <span className="text-xl">›</span></div>
            </div>
          </div>
        ) : (
          // Sub-pages with integrated logic (Search & Calculator)
          <div className="mt-6 animate-in slide-in-from-right duration-500">
            <button 
              onClick={() => setActiveCourse('home')}
              className="mb-10 px-8 py-3 bg-slate-900 border border-slate-800 rounded-full font-bold text-slate-300 hover:bg-slate-800 transition-colors"
            >
              ← Back to Dashboard
            </button>
            
            <div style={smokeGlassStyle} className="p-14">
              <h2 className="text-5xl font-black mb-10 tracking-tighter text-white">
                {activeCourse === 'mktg' ? 'Marketing Research' : 'Sales Management'}
              </h2>
              
              {activeCourse === 'mktg' && (
                <div className="bg-blue-950/40 border-2 border-blue-900 p-8 rounded-3xl">
                  <h3 className="text-blue-300 font-black uppercase mb-4 tracking-wider text-sm">Cincinnati Reds Data Analysis</h3>
                  <p className="text-slate-200 mb-6 font-medium text-lg leading-relaxed">Leverage Descriptive Statistics and Cross-Tabulation to identify fan behavior and ticket purchasing patterns for the 2026 season.</p>
                  <div className="flex gap-3">
                    {["Frequency Distribution", "Data Cleaning", "Outlier Identification"].map(term => (
                      <span key={term} className="bg-blue-900 text-blue-200 text-xs font-bold px-4 py-2 rounded-full">{term}</span>
                    ))}
                  </div>
                </div>
              )}

              {activeCourse === 'sales' && (
                <div className="bg-gradient-to-br from-[#1e1b4b] to-[#4c1d95]/40 text-white p-12 rounded-3xl shadow-2xl mb-12">
                  <h2 className="text-3xl font-black mb-10 uppercase tracking-tight">Sales Funnel Calculator</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <label className="block text-xs font-bold text-purple-200 mb-3 tracking-wide">QUOTA GOAL ($)</label>
                      <input type="number" value={quota} onChange={(e) => setQuota(e.target.value)} className="w-full p-4 rounded-xl bg-white/5 text-white outline-none border border-white/10 focus:border-purple-400" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-purple-200 mb-3 tracking-wide">AVG SALE SIZE ($)</label>
                      <input type="number" value={avgSale} onChange={(e) => setAvgSale(e.target.value)} className="w-full p-4 rounded-xl bg-white/5 text-white outline-none border border-white/10 focus:border-purple-400" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-purple-200 mb-3 tracking-wide">CLOSE RATE (%)</label>
                      <input type="number" value={closeRate} onChange={(e) => setCloseRate(e.target.value)} className="w-full p-4 rounded-xl bg-white/5 text-white outline-none border border-white/10 focus:border-purple-400" />
                    </div>
                  </div>
                  <div className="mt-12 p-8 bg-black/50 border border-purple-900 text-purple-300 rounded-3xl text-center">
                    <p className="text-sm font-bold opacity-70 tracking-wider">LEADS REQUIRED TO HIT GOAL</p>
                    <p style={{ textShadow: '0 0 20px #a855f7' }} className="text-7xl font-black text-white mt-2">{neededLeads}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default XavierVault;
