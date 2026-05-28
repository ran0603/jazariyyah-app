import React, { useState } from 'react';
import { BookOpen, ChevronRight, HelpCircle, Book, LayoutDashboard, Info } from 'lucide-react';

import { manzumahData } from './data';


export default function App() {
  const [selectedLine, setSelectedLine] = useState(null);
  const [activeChapter, setActiveChapter] = useState(manzumahData[0].chapter);

  const currentChapter = manzumahData.find(c => c.chapter === activeChapter);

  return (
    <div className="flex h-screen bg-stone-50 text-stone-900 font-sans overflow-hidden">
      {/* Left Sidebar - Navigation */}
      <div className="w-64 bg-emerald-900 text-emerald-50 p-6 flex flex-col shadow-xl">
        <h1 className="text-xl font-bold mb-8 flex items-center gap-2 text-amber-300">
          <Book className="w-6 h-6" /> Al-Jazariyyah
        </h1>
        <div className="space-y-4">
          {manzumahData.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveChapter(item.chapter)}
              className={`w-full text-left p-3 rounded-lg transition-colors flex items-center justify-between ${activeChapter === item.chapter ? 'bg-emerald-800' : 'hover:bg-emerald-950'}`}
            >
              {item.chapter}
              <ChevronRight className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Center - Master View */}
      <div className="flex-1 overflow-y-auto p-12">
        <h2 className="text-3xl font-bold mb-2 text-emerald-900">{currentChapter.title}</h2>
        <p className="text-stone-500 mb-8 italic">Select a line below to study in depth</p>

        <div className="space-y-6">
          {currentChapter.lines.map((line) => (
            <div
              key={line.id}
              onClick={() => setSelectedLine(line)}
              className="cursor-pointer bg-white p-6 rounded-2xl shadow-sm border border-stone-200 hover:border-amber-400 transition-all transform hover:-translate-y-1"
            >
              <p className="text-2xl font-serif text-right text-stone-800" dir="rtl">{line.arabic}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Study Details */}
      {selectedLine && (
        <div className="w-[450px] bg-white border-l border-stone-200 shadow-2xl overflow-y-auto">
          <div className="bg-amber-50 p-6 border-b border-amber-100">
            <h3 className="font-bold text-amber-900 text-lg">Deep Study</h3>
            <p className="text-amber-800 text-sm">Verse Analysis</p>
          </div>

          <div className="p-6 space-y-8">
            <div>
              <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2"><Info className="w-4 h-4" /> Translation</h4>
              <p className="text-stone-600 leading-relaxed italic">{selectedLine.translation}</p>
            </div>

            <div>
              <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Explanation</h4>
              <p className="text-stone-600 leading-relaxed">{selectedLine.explanation}</p>
            </div>

            <div>
              <h4 className="font-semibold text-emerald-900 mb-2">Key Vocabulary</h4>
              <div className="flex gap-2 flex-wrap">
                {selectedLine.keywords.map((kw, i) => (
                  <span key={i} className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">{kw}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-emerald-900 mb-4 flex items-center gap-2"><HelpCircle className="w-4 h-4" /> Comprehension Questions</h4>
              <ul className="space-y-2">
                {selectedLine.questions.map((q, i) => (
                  <li key={i} className="text-stone-700 text-sm flex items-start gap-2">
                    <span className="text-amber-600 font-bold">{i + 1}.</span> {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}