
export default function MainView({ currentChapter, setSelectedLine }) {
  return (
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
            <p className="text-right mb-2 text-stone-500">{line.id}</p>
            <p className="text-2xl font-serif text-right text-stone-800" dir="rtl">{line.arabic}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
