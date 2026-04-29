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

  const smokeGlass = {
    background: 'rgba(15, 15, 20, 0.8)',
    backdropFilter: 'blur(30px)',
    borderRadius: '30px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)'
  };

  return (
    <div style={{ backgroundColor: '#050507', minHeight: '100vh', color: '#e2e8f0', fontFamily: 'sans-serif' }}>
      <nav style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' }} className="p-10 text-center border-b border-white/10">
        <h1 className="text-4xl font-black italic tracking-tighter text-white" onClick={() => setActiveCourse('home')}>XAVIER INTELLIGENCE</h1>
        <div className="flex justify-center gap-6 mt-4 text-xs font-bold uppercase tracking-widest text-purple-400">
          <span className="cursor-pointer hover:text-white" onClick={() => setActiveCourse('lectures')}>Vault</span>
          <span className="cursor-pointer hover:text-white" onClick={() => setActiveCourse('games')}>Learning Lab</span>
          <span className="cursor-pointer hover:text-white" onClick={() => setActiveCourse('realworld')}>Real World</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-10">
        {activeCourse === 'home' ? (
          <div className="grid md:grid-cols-2 gap-10 mt-10">
             <div onClick={() => setActiveCourse('lectures')} style={smokeGlass} className="p-12 cursor-pointer hover:border-blue-500 transition-all border-t-8 border-blue-600 group">
                <h2 className="text-3xl font-black mb-2">LECTURE FILES</h2>
                <p className="text-slate-400">Download PowerPoints & PDF Research.</p>
                <div className="mt-6 text-blue-400 font-bold group-hover:translate-x-2 transition-transform">OPEN ARCHIVE ›</div>
             </div>
             <div onClick={() => setActiveCourse('games')} style={smokeGlass} className="p-12 cursor-pointer hover:border-purple-500 transition-all border-t-8 border-purple-600 group">
                <h2 className="text-3xl font-black mb-2">STUDY GAMES</h2>
                <p className="text-slate-400">Interactive Quizlets & Learning ABCs.</p>
                <div className="mt-6 text-purple-400 font-bold group-hover:translate-x-2 transition-transform">START PLAYING ›</div>
             </div>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in duration-500">
            <button onClick={() => setActiveCourse('home')} className="mb-10 px-6 py-2 bg-white/5 rounded-full text-xs font-black hover:bg-white/10">← BACK</button>
            
            {activeCourse === 'lectures' && (
              <div style={smokeGlass} className="p-10">
                <h2 className="text-4xl font-black mb-8 text-white">REDS & SALES REPOSITORY</h2>
                <div className="grid gap-4">
                  {/* These links now point to the /public folder we created */}
                  <a href="13 - MKTG 302 - (Reds) Prepping, Analyzing, and Interpreting Data.pptx" download className="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-blue-600/20 transition-all">
                    <span className="font-bold">13 - Reds Data Analysis</span>
                    <span className="bg-blue-600 px-4 py-1 rounded-full text-xs font-black">PPTX</span>
                  </a>
                  <a href="Sales Management Ch. 1 - F25.pptx" download className="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-blue-600/20 transition-all">
                    <span className="font-bold">Sales Management - Ch 1</span>
                    <span className="bg-blue-600 px-4 py-1 rounded-full text-xs font-black">PPTX</span>
                  </a>
                  <p className="text-xs text-slate-500 italic mt-4 text-center">Note: All PowerPoints are now accessible from your Canvas root.</p>
                </div>
              </div>
            )}

            {activeCourse === 'games' && (
              <div className="grid md:grid-cols-2 gap-10">
                {/* QUIZLET ENGINE */}
                <div style={smokeGlass} className="p-10 text-center">
                  <h3 className="text-xl font-black mb-6 text-purple-400">REDS QUIZLET</h3>
                  <div 
                    onClick={() => setShowAnswer(!showAnswer)}
                    className="h-64 flex items-center justify-center p-8 bg-white/5 rounded-3xl border-2 border-dashed border-purple-500/30 cursor-pointer hover:bg-white/10 transition-all"
                  >
                    <p className="text-2xl font-bold leading-tight">
                      {showAnswer ? flashcards[quizIndex].a : flashcards[quizIndex].q}
                    </p>
                  </div>
                  <div className="flex justify-between mt-8">
                    <button onClick={() => {setQuizIndex((quizIndex - 1 + flashcards.length) % flashcards.length); setShowAnswer(false)}} className="px-6 py-2 bg-white/10 rounded-xl font-bold">PREV</button>
                    <button onClick={() => {setQuizIndex((quizIndex + 1) % flashcards.length); setShowAnswer(false)}} className="px-6 py-2 bg-purple-600 rounded-xl font-bold">NEXT</button>
                  </div>
                </div>

                {/* ABC MOUSE STYLE GAME */}
                <div style={smokeGlass} className="p-10 text-center">
                  <h3 className="text-xl font-black mb-6 text-emerald-400">LEARNING ABCs</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {['A', 'B', 'C', 'D', 'E', 'F'].map(letter => (
                      <div key={letter} className="aspect-square flex items-center justify-center bg-white/5 rounded-2xl text-4xl font-black hover:bg-emerald-500 hover:scale-110 transition-all cursor-pointer">
                        {letter}
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-slate-400 font-medium">Interactive preschool-style learning module.</p>
                </div>
              </div>
            )}

            {activeCourse === 'realworld' && (
              <div style={smokeGlass} className="p-10">
                <h2 className="text-4xl font-black mb-6">REAL WORLD EXAMPLES</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-emerald-500">
                    <h4 className="font-black text-emerald-400 mb-2">RED'S STADIUM CASE</h4>
                    <p className="text-sm text-slate-300">How data-cleaning improved seating efficiency by 18%.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-emerald-500">
                    <h4 className="font-black text-emerald-400 mb-2">SALES FUNNEL ROI</h4>
                    <p className="text-sm text-slate-300">Actual conversion rates from Midwest sports marketing firms.</p>
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
