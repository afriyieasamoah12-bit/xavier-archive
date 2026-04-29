import React, { useState } from 'react';

const XavierVault = () => {
  const [activeCourse, setActiveCourse] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  
  const [quota, setQuota] = useState(100000);
  const [avgSale, setAvgSale] = useState(5000);
  const [closeRate, setCloseRate] = useState(20);

  const courses = {
    mktg302: {
      title: "MKTG 302: Marketing Research",
      modules: ["Qualitative Laddering", "Causal Research", "Sampling Errors"],
      redsProject: {
        focus: "Cincinnati Reds Data Interpretation",
        details: "Focus on Descriptive Statistics and Cross-Tabulation to identify fan behavior patterns.",
        keyTerms: ["Frequency Distribution", "Data Cleaning", "Outlier Identification"]
      },
      flashcards: [
        { q: "What is Cross-Tabulation?", a: "Analyzing the relationship between two variables (e.g., Age vs. Ticket Type)." },
        { q: "What is an Outlier in Reds data?", a: "Data points that are significantly different from the rest." }
      ]
    },
    sales: {
      title: "Sales Management",
      modules: ["Territory Management", "Sports Sales", "Persuasive Questioning"],
      flashcards: [
        { q: "What is the 450 Sales Question approach?", a: "Leading prospects to their own conclusions." },
        { q: "What is Sales Quota?", a: "A performance goal assigned to a marketing unit or salesperson." }
      ]
    }
  };

  const neededLeads = Math.round((quota / avgSale) / (closeRate / 100));

  return (
    <div className="min-h-screen bg-[#f0f4ff] font-sans text-slate-900">
      <nav className="p-8 bg-gradient-to-r from-[#9333ea] to-[#60a5fa] text-white shadow-xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="font-black text-3xl tracking-tighter cursor-pointer" onClick={() => setActiveCourse('home')}>XAVIER ARCHIVE</h1>
          <input 
            type="text" 
            placeholder="Search lectures..." 
            className="p-3 rounded-full w-full max-w-md text-slate-900 outline-none shadow-inner"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </nav>

      <main className="p-10 max-w-6xl mx-auto">
        {activeCourse === 'home' ? (
          <div className="grid md:grid-cols-2 gap-8">
            <div onClick={() => setActiveCourse('mktg302')} className="bg-white p-10 rounded-3xl shadow-lg border-b-8 border-[#60a5fa] cursor-pointer hover:scale-105 transition-transform">
              <h3 className="text-2xl font-black text-[#9333ea]">MKTG 302: REDS DATA</h3>
              <p className="mt-2 text-slate-500">Market Research & Interpretation</p>
            </div>
            <div onClick={() => setActiveCourse('sales')} className="bg-white p-10 rounded-3xl shadow-lg border-b-8 border-[#9333ea] cursor-pointer hover:scale-105 transition-transform">
              <h3 className="text-2xl font-black text-[#60a5fa]">SALES CALCULATOR</h3>
              <p className="mt-2 text-slate-500">Management & Quota Planning</p>
            </div>
          </div>
        ) : (
          <div className="animate-in slide-in-from-right-4 duration-500">
            <button onClick={() => setActiveCourse('home')} className="mb-6 text-[#9333ea] font-bold">← Dashboard</button>
            
            {activeCourse === 'mktg302' && (
              <div>
                <h2 className="text-5xl font-black text-[#9333ea] mb-6">Marketing Research</h2>
                <div className="bg-[#f5f3ff] p-8 rounded-3xl border-2 border-[#ddd6fe] mb-8">
                  <h3 className="text-[#7c3aed] font-black uppercase mb-4">{courses.mktg302.redsProject.focus}</h3>
                  <p className="text-slate-700 mb-4 font-medium">{courses.mktg302.redsProject.details}</p>
                  <div className="flex gap-2">
                    {courses.mktg302.redsProject.keyTerms.map(term => (
                      <span key={term} className="bg-[#ede9fe] text-[#7c3aed] text-xs font-bold px-3 py-1 rounded-full">{term}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeCourse === 'sales' && (
              <div className="bg-gradient-to-br from-[#9333ea] to-[#60a5fa] text-white p-10 rounded-3xl shadow-2xl mb-10">
                <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Sales Funnel Calculator</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <label className="block text-xs font-bold text-blue-100 mb-2">QUOTA GOAL ($)</label>
                    <input type="number" value={quota} onChange={(e) => setQuota(e.target.value)} className="w-full p-2 rounded bg-white/20 text-white outline-none border border-white/30" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-blue-100 mb-2">AVG SALE SIZE ($)</label>
                    <input type="number" value={avgSale} onChange={(e) => setAvgSale(e.target.value)} className="w-full p-2 rounded bg-white/20 text-white outline-none border border-white/30" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-blue-100 mb-2">CLOSE RATE (%)</label>
                    <input type="number" value={closeRate} onChange={(e) => setCloseRate(e.target.value)} className="w-full p-2 rounded bg-white/20 text-white outline-none border border-white/30" />
                  </div>
                </div>
                <div className="mt-10 p-6 bg-white text-[#9333ea] rounded-2xl text-center">
                  <p className="text-sm font-bold opacity-70">LEADS REQUIRED TO HIT GOAL</p>
                  <p className="text-6xl font-black">{neededLeads}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default XavierVault;
