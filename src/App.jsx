import React, { useState } from 'react';

const XavierVault = () => {
  const [activeCourse, setActiveCourse] = useState('home');
  
  // Style Objects for "Guaranteed" Modern Look
  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
  };

  const gradientHeader = {
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #3b82f6 100%)',
    boxShadow: '0 10px 30px -10px rgba(79, 70, 229, 0.5)'
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Animated Glowing Header */}
      <nav style={gradientHeader} className="p-10 text-white text-center">
        <h1 style={{ letterSpacing: '-2px', fontWeight: '900' }} className="text-4xl italic">
          XAVIER ARCHIVE
        </h1>
        <p className="mt-2 opacity-80 font-medium">Digital Vault & Lecture Repository</p>
      </nav>

      <main className="max-w-5xl mx-auto p-8">
        {activeCourse === 'home' ? (
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* MKTG Card */}
            <div 
              onClick={() => setActiveCourse('mktg')}
              style={glassStyle} 
              className="p-10 cursor-pointer hover:scale-105 transition-all group"
            >
              <div className="h-2 w-20 bg-blue-500 mb-4 rounded-full"></div>
              <h3 className="text-2xl font-black text-slate-800">MKTG 302</h3>
              <p className="text-slate-500 font-medium mt-2">Reds Research & Data Analytics</p>
              <div className="mt-6 text-blue-600 font-bold group-hover:translate-x-2 transition-transform">Open Vault →</div>
            </div>

            {/* Sales Card */}
            <div 
              onClick={() => setActiveCourse('sales')}
              style={glassStyle} 
              className="p-10 cursor-pointer hover:scale-105 transition-all group"
            >
              <div className="h-2 w-20 bg-purple-500 mb-4 rounded-full"></div>
              <h3 className="text-2xl font-black text-slate-800">SALES MGMT</h3>
              <p className="text-slate-500 font-medium mt-2">Management & Funnel Strategy</p>
              <div className="mt-6 text-purple-600 font-bold group-hover:translate-x-2 transition-transform">Open Vault →</div>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <button 
              onClick={() => setActiveCourse('home')}
              className="mb-8 px-6 py-2 bg-slate-200 rounded-full font-bold text-slate-600 hover:bg-slate-300 transition-colors"
            >
              ← Back to Dashboard
            </button>
            
            <div style={glassStyle} className="p-12">
              <h2 className="text-4xl font-black mb-4">
                {activeCourse === 'mktg' ? 'Marketing Research' : 'Sales Management'}
              </h2>
              <div className="h-1 w-full bg-slate-100 mb-8"></div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="font-bold text-blue-800 uppercase tracking-widest text-sm">Lecture Repository Active</p>
                <p className="text-slate-600 mt-1">Accessing encrypted coursework for Spring 2026...</p>
              </div>

              {/* DOWNLOAD BUTTONS (This links to your PowerPoints!) */}
              <div className="mt-10 grid gap-4">
                <button className="p-4 border-2 border-slate-100 rounded-xl text-left hover:bg-slate-50 transition-colors flex justify-between items-center">
                  <span className="font-bold">Latest Lecture PPTX</span>
                  <span className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-500">READY</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default XavierVault;
