import React, { useState } from 'react';

const XavierVault = () => {
  const [activeCourse, setActiveCourse] = useState('home');
  const [quizIndex, setQuizIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [chatLog, setChatLog] = useState([{ role: 'bot', text: 'Xavier AI Online. Ask me anything about MKTG 302 or Sales Management.' }]);

  // DATABASE: Paste your 400 words here. I've pre-loaded key Xavier terms.
  const database = [
    { term: "Cross-Tabulation", def: "Analyzing relationships between two variables (e.g. Reds fans age vs spend).", source: "Lecture 13" },
    { term: "Sales Quota", def: "A performance goal assigned to a marketing unit.", source: "Sales Ch 1" },
    { term: "Laddering", def: "A probing technique to find root consumer values.", source: "Lecture 5" },
    { term: "Causal Research", def: "Determining cause-and-effect relationships.", source: "Lecture 9" },
    { term: "Sampling Error", def: "Difference between sample result and population truth.", source: "Lecture 12" },
    { term: "Integrative Negotiation", def: "Win-win negotiation strategy focusing on shared interests.", source: "MGMT 312" },
    { term: "Distributive Negotiation", def: "Win-lose negotiation (fixed pie).", source: "MGMT 312" },
    { term: "Outlier", def: "Data points significantly different from the rest of the set.", source: "Lecture 13" },
    { term: "Frequency Distribution", def: "A mathematical function showing how many times an event occurs.", source: "Lecture 13" },
    { term: "Persuasive Questioning", def: "Leading prospects to their own conclusions using 450 questions.", source: "Sales PDF" }
  ];

  const handleAsk = () => {
    if (!aiQuery) return;
    const userMsg = { role: 'user', text: aiQuery };
    const found = database.find(item => aiQuery.toLowerCase().includes(item.term.toLowerCase()));
    const botMsg = { 
      role: 'bot', 
      text: found ? `According to ${found.source}: ${found.def}` : "I don't have that specific word indexed yet, but I can help you with Quotas, Negotiation, or Reds Data. Try adding that word to the database!"
    };
    setChatLog([...chatLog, userMsg, botMsg]);
    setAiQuery('');
  };

  const glass = { background: 'rgba(10,10,12,0.85)', backdropFilter: 'blur(30px)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.08)' };

  return (
    <div style={{ backgroundColor: '#050508', minHeight: '100vh', color: '#f1f5f9', fontFamily: 'sans-serif' }}>
      <nav className="p-10 border-b border-white/5 bg-gradient-to-b from-[#1e1b4b] to-black text-center">
        <h1 className="text-4xl font-black italic tracking-tighter" onClick={() => setActiveCourse('home')}>XAVIER INTELLIGENCE</h1>
        <div className="flex justify-center gap-6 mt-4 text-[10px] font-bold uppercase tracking-[.3em] text-purple-400">
          <span className="cursor-pointer" onClick={() => setActiveCourse('quiz')}>Flashcards</span>
          <span className="cursor-pointer" onClick={() => setActiveCourse('ai')}>AI Tutor</span>
          <span className="cursor-pointer" onClick={() => setActiveCourse('vault')}>Lectures</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8">
        {activeCourse === 'home' ? (
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div onClick={() => setActiveCourse('quiz')} style={glass} className="p-12 cursor-pointer border-t-8 border-purple-600 hover:scale-105 transition-all">
              <h2 className="text-3xl font-black">LEARN MODE</h2>
              <p className="text-slate-500 mt-2 italic">Active recall with {database.length} study sets.</p>
            </div>
            <div onClick={() => setActiveCourse('ai')} style={smokeGlass} className="p-12 cursor-pointer border-t-8 border-blue-600 hover:scale-105 transition-all">
              <h2 className="text-3xl font-black">AI ASSISTANT</h2>
              <p className="text-slate-500 mt-2 italic">Ask the Vault anything.</p>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-500">
            <button onClick={() => setActiveCourse('home')} className="mb-8 opacity-50 hover:opacity-100 text-xs font-black tracking-widest">← SHUTDOWN</button>
            
            {activeCourse === 'quiz' && (
              <div style={glass} className="max-w-2xl mx-auto p-12 text-center">
                <div onClick={() => setShowAnswer(!showAnswer)} className="h-80 flex items-center justify-center p-12 bg-black/40 rounded-[40px] border border-white/10 cursor-pointer shadow-2xl">
                  <p className="text-3xl font-bold tracking-tight">{showAnswer ? database[quizIndex].def : database[quizIndex].term}</p>
                </div>
                <div className="flex justify-between items-center mt-12">
                  <button onClick={() => {setQuizIndex((quizIndex - 1 + database.length) % database.length); setShowAnswer(false)}} className="w-16 h-16 bg-white/5 rounded-full text-2xl font-black">‹</button>
                  <p className="font-mono text-purple-500">{quizIndex + 1} / {database.length}</p>
                  <button onClick={() => {setQuizIndex((quizIndex + 1) % database.length); setShowAnswer(false)}} className="w-16 h-16 bg-purple-600 rounded-full text-2xl font-black">›</button>
                </div>
              </div>
            )}

            {activeCourse === 'ai' && (
              <div style={glass} className="p-10">
                <div className="h-[400px] overflow-y-auto mb-6 p-6 bg-black/50 rounded-2xl space-y-4">
                  {chatLog.map((m, i) => (
                    <div key={i} className={`p-4 rounded-2xl max-w-[80%] ${m.role === 'user' ? 'bg-blue-600 ml-auto' : 'bg-white/10 mr-auto text-emerald-400'}`}>
                      {m.text}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    value={aiQuery} 
                    onChange={(e) => setAiQuery(e.target.value)} 
                    placeholder="Ask about negotiation, quotas, or reds data..." 
                    className="flex-1 p-4 bg-white/5 rounded-2xl outline-none border border-white/10"
                    onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                  />
                  <button onClick={handleAsk} className="px-10 bg-blue-600 rounded-2xl font-black">ASK</button>
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
