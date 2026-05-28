import { Info, BookOpen, HelpCircle } from 'lucide-react';

export default function StudyPanel({ selectedLine }) {
  if (!selectedLine) return null;

  return (
    <div className="w-1/2 bg-white border-l border-stone-200 shadow-2xl overflow-y-auto">
      <div className="bg-amber-50 p-6 border-b border-amber-100">
        <h3 className="font-bold text-amber-900 text-lg">Deep Study</h3>
        <p className="text-amber-800 text-sm">Verse Analysis</p>
      </div>

      <div className="p-6 space-y-8">
        <div>
          <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
            <Info className="w-4 h-4" /> Translation
          </h4>
          <p className="text-stone-600 leading-relaxed italic">{selectedLine.translation}</p>
        </div>

        {/* Detailed HTML Explanation */}
        <div>
          <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Explanation</h4>
          {/* This is where the HTML is rendered safely */}
          <div
            className="text-stone-600 leading-relaxed prose prose-sm prose-emerald max-w-none"
            dangerouslySetInnerHTML={{ __html: selectedLine.explanation }}
          />
        </div>

        <div>
          <h4 className="font-semibold text-emerald-900 mb-2">Key Vocabulary</h4>
          <div className="flex gap-2 flex-wrap">
            {selectedLine.keywords.map((kw, i) => (
              <span
                key={i}
                className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-emerald-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-4 h-4" /> Comprehension Questions
          </h4>
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
  );
}
