import { useState } from 'react';
import { manzumahData } from './data';
import Sidebar from './components/Sidebar';
import MainView from './components/MainView';
import StudyPanel from './components/StudyPanel';

export default function App() {
  const [selectedLine, setSelectedLine] = useState(null);
  const [activeChapter, setActiveChapter] = useState(manzumahData[0].chapter);

  const currentChapter = manzumahData.find(c => c.chapter === activeChapter);

  return (
    <div className="flex h-screen bg-stone-50 text-stone-900 font-sans overflow-hidden">
      <Sidebar
        manzumahData={manzumahData}
        activeChapter={activeChapter}
        setActiveChapter={setActiveChapter}
      />
      <MainView
        currentChapter={currentChapter}
        setSelectedLine={setSelectedLine}
      />
      <StudyPanel selectedLine={selectedLine} />
    </div>
  );
}