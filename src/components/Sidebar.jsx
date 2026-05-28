import { Book, ChevronRight } from 'lucide-react';

export default function Sidebar({ manzumahData, activeChapter, setActiveChapter }) {
  return (
    <div className="w-64 bg-emerald-900 text-emerald-50 p-6 flex flex-col shadow-xl">
      <h1 className="text-xl font-bold mb-8 flex items-center gap-2 text-amber-300">
        <Book className="w-6 h-6" /> Al-Jazariyyah
      </h1>
      <div className="space-y-4">
        {manzumahData.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveChapter(item.chapter)}
            className={`w-full text-left p-3 rounded-lg transition-colors flex items-center justify-between ${
              activeChapter === item.chapter ? 'bg-emerald-800' : 'hover:bg-emerald-950'
            }`}
          >
            {item.chapter}
            <ChevronRight className="w-4 h-4" />
          </button>
        ))}
      </div>
    </div>
  );
}
