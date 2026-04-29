import React, { useState } from 'react';

const XavierVault = () => {
  const [activeCourse, setActiveCourse] = useState('home');
  const [quizIndex, setQuizIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const flashcards = [
    { q: "What is Cross-Tabulation?", a: "Analyzing the relationship between two variables (e.g., Fan Age vs. Ticket Type)." },
    { q: "What is a Sales Quota?", a: "A performance goal assigned to a marketing unit or salesperson." },
    { q: "What is 'Laddering'?", a: "A probing technique to find the root values of a consumer." }
  ];

  const files = [
    { name: "13 - MKTG 302 - Reds Data Analysis", path: "13 - MKTG 302 - (Reds) Prepping, Analyzing, and Interpreting Data.pptx", type: "PPTX" },
    { name: "Sales Management Ch. 1", path: "Sales Management Ch. 1 - F25.pptx", type: "PPTX" },
    { name: "Sales Management Ch. 10", path: "Sales Management Ch. 10 - F25.pptx", type: "PPTX" },
    { name: "Elevator Pitch (College Students)", path: "1_Elevator Pitch (College Students) 9-2025.pdf", type: "PDF" },
    { name: "Negotiation - Integrative & Persuasion", path: "Week_3_Materials___Integrative_Negotiation_and_Persuasion_export.zip", type: "ZIP" },
    { name: "MKTG 302 - Sampling & Errors", path: "11 - MKTG 302 - Sampling.pptx", type: "PPTX" }
  ];

  const smokeGlass = {
    background: 'rgba(15, 15, 20, 0.85)',
    backdropFilter: 'blur(40px)',
    borderRadius: '30px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 1)'
  };

  return (
    <div style={{ backgroundColor: '#020203', minHeight: '100vh', color: '#f1f5f9', fontFamily: 'sans-serif' }}>
      <nav style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #000000 100%)' }} className="p-12 text-center border-b border-white/10 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
        <h1 className="text-5xl font-black italic tracking-tighter text-white" onClick={() => setActiveCourse('home')}>XAVIER MAIN FRAME</h1>
        <p className="text-blue-400 text-xs font-bold mt-4 uppercase tracking-[0.3em]">Full Systematic Archive v2.0</p>
      </nav>

      <main className="max-w-6xl mx-auto p-10">
        {activeCourse === 'home' ? (
          <div className="grid md:grid-cols-3 gap-8 mt-10">
             <div onClick={() => setActiveCourse('lectures')} style={smokeGlass} className="p-10 cursor-pointer hover:border-blue-500 transition-all border-b-4 border-blue-600 group">
                <div className="text-4xl mb-4">📂</div>
                <h2 className="text-2xl font-black mb-2">ALL FILES</h2>
                <p className="text-slate-500 text-sm italic">Accessing {files.length} cataloged assets...</p>
             </div>
             <div onClick={() => setActiveCourse('games')} style={smokeGlass} className="p-10 cursor-pointer hover:border-purple-500 transition-all border-b-4 border-purple-600 group">
                <div className="text-4xl mb-4">🎮</div>
                <h2 className="text-2xl font-black mb-2">GAMES</h2>
                <p className="text-slate-500 text-sm italic">Interactive Quizlet & ABC Lab.</p>
             </div>
             <div onClick={() => setActiveCourse('realworld')} style={smokeGlass} className="p-10 cursor-pointer hover:border-emerald-500 transition-all border-b-4 border-emerald-600 group">
                <div className="text-4xl mb-4">🌐</div>
                <h2 className="text-2xl font-black mb-2">REAL WORLD</h2>
                <p className="text-slate-500 text-sm italic">Case Studies & Examples.</p>
             </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
            <button onClick={() => setActiveCourse('home')} className="mb-10 px-8 py-2 bg-white/10 rounded-full text-[10px] font-black hover:bg-white/20 tracking-widest border border-white/5">BACK TO HUB</button>
            
            {activeCourse === 'lectures' && (
              <div style={smokeGlass} className="p-12">
                <h2 className="text-4xl font-black mb-10 text-white tracking-tighter">CANVAS DIRECTORY</h2>
                <div className="grid gap-4 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                  {files.map((file, idx) => (
                    <a 
                      key={idx} 
                      href={file.path} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex justify-between items-center p-6 bg-white/[0.03] rounded-2xl border border-white/5 hover:bg-blue-600/10 hover:border-blue-500/50 transition-all"
                    >
                      <div>
                        <p className="font-bold text-slate-200">{file.name}</p>
                        <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-tighter">{file.path}</p>
                      </div>
                      <span className="bg-blue-900/40 text-blue-400 px-4 py-1 rounded text-[10px] font-black">{file.type}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {activeCourse === 'games' && (
              <div className="grid md:grid-cols-2 gap-10">
                <div style={smokeGlass} className="p-10 text-center border-t-2 border-purple-500">
                  <h3 className="text-xl font-black mb-6 text-purple-400 uppercase italic">Interactive Quizlet</h3>
                  <div onClick={() => setShowAnswer(!showAnswer)} className="h-64 flex items-center justify-center p-8 bg-black/40 rounded-3xl border border-white/10 cursor-pointer shadow-inner">
                    <p className="text-2xl font-bold italic tracking-tight">{showAnswer ? flashcards[quizIndex].a : flashcards[quizIndex].q}</p>
                  </div>
                  <div className="flex justify-center gap-4 mt-8">
                    <button onClick={() => {setQuizIndex((quizIndex - 1 + flashcards.length) % flashcards.length); setShowAnswer(false)}} className="w-12 h-12 bg-white/10 rounded-full font-black">‹</button>
                    <button onClick={() => {setQuizIndex((quizIndex + 1) % flashcards.length); setShowAnswer(false)}} className="w-12 h-12 bg-purple-600 rounded-full font-black text-white">›</button>
                  </div>
                </div>
                <div style={smokeGlass} className="p-10 text-center border-t-2 border-emerald-500">
                  <h3 className="text-xl font-black mb-6 text-emerald-400 uppercase italic">ABC Learning Lab</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(l => (
                      <div key={l} className="aspect-square flex items-center justify-center bg-white/5 rounded-xl text-2xl font-black hover:bg-emerald-500 hover:text-black transition-all cursor-pointer">{l}</div>
                    ))}
                  </div>
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
