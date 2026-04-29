import React, { useState } from 'react';

const XavierVault = () => {
  const [activeCourse, setActiveCourse] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [quizIndex, setQuizIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('Waiting for query...');

  // DATABASE: This is where we index your words and link them to lectures
  const lectureDatabase = [
    { word: "Cross-Tabulation", lecture: "13 - MKTG 302 (Reds Data)", def: "Analyzing two variables together." },
    { word: "Sales Quota", lecture: "Sales Management Ch. 1", def: "Performance goals for sales units." },
    { word: "Laddering", lecture: "5 - MKTG 302 (Probing)", def: "Finding deep consumer values." },
    { word: "Secondary Data", lecture: "3 - MKTG 302", def: "Data previously gathered for other purposes." },
    { word: "Causal Research", lecture: "9 - MKTG 302", def: "Determining cause-and-effect relationships." },
    { word: "Integrative Negotiation", lecture: "Week 3 MGMT 312", def: "Win-win negotiation strategy." },
    { word: "Sampling Error", lecture: "12 - MKTG 302", def: "Difference between sample result and population truth." }
  ];

  const filteredSearch = lectureDatabase.filter(item => 
    item.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAiAsk = () => {
    const found = lectureDatabase.find(item => aiQuery.toLowerCase().includes(item.word.toLowerCase()));
    setAiResponse(found ? `According to ${found.lecture}: ${found.def}` : "Searching my local archive... Try asking about Quotas, Reds Data, or Sampling.");
  };

  const smokeGlass = { background: 'rgba(10, 10, 15, 0.9)', backdropFilter: 'blur(40px)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 0 40px rgba(0,0,0,1)' };

  return (
    <div style={{ backgroundColor: '#020204', minHeight: '100vh', color: '#f1f5f9', fontFamily: 'sans-serif' }}>
      <nav style={{ background: 'linear-gradient(to bottom, #1e1b4b, #000000)' }} className="p-10 border-b border-white/5">
        <h1 className="text-4xl font-black italic tracking-tighter text-center" onClick={() => setActiveCourse('home')}>XAVIER INTELLIGENCE</h1>
        <div className="flex justify-center gap-8 mt-6 text-[10px] font-bold uppercase tracking-widest text-purple-400">
          <span className="cursor-pointer hover:text-white" onClick={() => setActiveCourse('lectures')}>Full Vault</span>
          <span className="cursor-pointer hover:text-white" onClick={() => setActiveCourse('quizlet')}>AI Quizlet</span>
          <span className="cursor-pointer hover:text-white" onClick={() => setActiveCourse('ai')}>Ask AI</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-10">
        {activeCourse === 'home' ? (
          <div className="space-y-10">
            <div style={smokeGlass} className="p-10 border-l-8 border-purple-600">
              <h2 className="text-2xl font-black mb-4 tracking-tight">GLOBAL WORD LOOKUP</h2>
              <input 
                type="text" 
                placeholder="Search words from all slides..." 
                className="w-full p-4 bg-white/5 rounded-2xl border border-white/10 outline-none focus:border-purple-500"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchTerm && filteredSearch.map((item, i) => (
                  <div key={i} className="p-4 bg-purple-900/10 rounded-xl border border-purple-500/20">
                    <p className="font-bold text-purple-300">{item.word}</p>
                    <p className="text-[10px] text-slate-500 uppercase mt-1">Found in: {item.lecture}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div onClick={() => setActiveCourse('quizlet')} style={smokeGlass} className="p-10 cursor-pointer border-t-8 border-blue-600">
                <h3 className="text-xl font-bold">AI Flashcards</h3>
                <p className="text-slate-500 text-xs mt-2 italic">Master the materials through active recall.</p>
              </div>
              <div onClick={() => setActiveCourse('ai')} style={smokeGlass} className="p-10 cursor-pointer border-t-8 border-emerald-600">
                <h3 className="text-xl font-bold">Ask the Vault</h3>
                <p className="text-slate-500 text-xs mt-2 italic">Direct AI queries to your lecture database.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActiveCourse('home')} className="mb-10 text-xs font-black tracking-widest text-slate-500">← SHUTDOWN ACCESS</button>
            
            {activeCourse === 'quizlet' && (
              <div style={smokeGlass} className="max-w-2xl mx-auto p-12 text-center border-t-2 border-blue-500">
                <h2 className="text-3xl font-black mb-10 italic">STUDY MODE</h2>
                <div onClick={() => setShowAnswer(!showAnswer)} className="h-80 flex items-center justify-center p-10 bg-black/50 rounded-[40px] border border-white/10 cursor-pointer hover:bg-white/5 transition-all">
                  <p className="text-3xl font-bold tracking-tight">{showAnswer ? lectureDatabase[quizIndex].def : lectureDatabase[quizIndex].word}</p>
                </div>
                <div className="flex justify-between mt-10">
                  <button onClick={() => {setQuizIndex((quizIndex - 1 + lectureDatabase.length) % lectureDatabase.length); setShowAnswer(false)}} className="w-14 h-14 bg-white/5 rounded-full">‹</button>
                  <p className="mt-4 text-xs font-bold text-slate-600">{quizIndex + 1} / {lectureDatabase.length}</p>
                  <button onClick={() => {setQuizIndex((quizIndex + 1) % lectureDatabase.length); setShowAnswer(false)}} className="w-14 h-14 bg-blue-600 rounded-full text-white">›</button>
                </div>
              </div>
            )}

            {activeCourse === 'ai' && (
              <div style={smokeGlass} className="p-12 border-t-2 border-emerald-500">
                <h2 className="text-3xl font-black mb-6">AI LECTURE ASSISTANT</h2>
                <div className="bg-black/50 p-6 rounded-2xl mb-6 text-emerald-400 font-mono text-sm leading-relaxed">
                  {aiResponse}
                </div>
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    placeholder="Ask a question about your files..." 
                    className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/10 outline-none"
                    value={aiQuery}
                    onChange={(e) => setAiQuery(e.target.value)}
                  />
                  <button onClick={handleAiAsk} className="px-8 bg-emerald-600 rounded-2xl font-black">ASK</button>
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
