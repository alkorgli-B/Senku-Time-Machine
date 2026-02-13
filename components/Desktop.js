import React, { useState, useEffect } from 'react';
import MusicPlayer from './MusicPlayer';
import Gallery from './Gallery';

const Desktop = () => {
  const [time, setTime] = useState('');
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isStartOpen, setIsStartOpen] = useState(false);

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-full relative bg-[#008080] overflow-hidden font-sans">
      
      {/* Desktop Icons */}
      <div className="flex flex-col gap-6 p-6 w-max">
        <div onDoubleClick={() => setIsMusicOpen(true)} onTouchEnd={() => setIsMusicOpen(true)} className="flex flex-col items-center w-20 cursor-pointer group">
          <div className="w-12 h-12 bg-yellow-500 border-2 border-white flex items-center justify-center text-white font-bold shadow-[4px_4px_0px_rgba(0,0,0,1)] group-active:translate-x-[2px] group-active:translate-y-[2px] group-active:shadow-none">♪</div>
          <span className="text-[11px] bg-black text-white mt-2 px-1 text-center neon-text">Music Player</span>
        </div>

        <div onDoubleClick={() => setIsGalleryOpen(true)} onTouchEnd={() => setIsGalleryOpen(true)} className="flex flex-col items-center w-20 cursor-pointer group">
          <div className="w-12 h-12 bg-blue-500 border-2 border-white flex items-center justify-center text-white font-bold shadow-[4px_4px_0px_rgba(0,0,0,1)] group-active:translate-x-[2px] group-active:translate-y-[2px] group-active:shadow-none">🖼️</div>
          <span className="text-[11px] bg-black text-white mt-2 px-1 text-center neon-text">Memories</span>
        </div>
      </div>

      {/* Windows */}
      <MusicPlayer isOpen={isMusicOpen} onClose={() => setIsMusicOpen(false)} />
      <Gallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />

      {/* Start Menu Popup */}
      {isStartOpen && (
        <div className="absolute bottom-10 left-0 w-48 bg-retro-gray border-2 border-white shadow-2xl z-[60] border-t-white border-l-white border-b-gray-800 border-r-gray-800">
           <div className="bg-blue-800 p-2 text-white font-bold -rotate-90 absolute left-[-35px] bottom-16 w-32 text-center text-xs">SENKU 2026</div>
           <div className="ml-8">
              <div className="p-2 hover:bg-blue-700 hover:text-white cursor-pointer text-sm border-b border-gray-400">Programs</div>
              <div className="p-2 hover:bg-blue-700 hover:text-white cursor-pointer text-sm border-b border-gray-400">Settings</div>
              <div className="p-2 hover:bg-blue-700 hover:text-white cursor-pointer text-sm">Shut Down...</div>
           </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-retro-gray border-t-2 border-white flex items-center justify-between px-1 z-50">
        <button 
          onClick={() => setIsStartOpen(!isStartOpen)}
          className={`flex items-center gap-1 px-2 h-7 border-2 font-bold text-sm ${isStartOpen ? 'border-inset border-gray-800 bg-gray-400' : 'border-outset border-white bg-retro-gray'}`}
        >
          <span className="bg-blue-600 text-white px-1 text-[10px]">田</span> Start
        </button>
        
        <div className="flex items-center gap-2 border-2 border-gray-500 px-2 h-7 shadow-inner bg-retro-gray">
           <span className="text-xs font-bold">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
