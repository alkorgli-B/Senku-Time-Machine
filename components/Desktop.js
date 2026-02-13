import React, { useState } from 'react';
import MusicPlayer from './MusicPlayer';

const Desktop = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isMusicOpen, setIsMusicOpen] = useState(false);

  // تحديث الوقت
  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-full relative bg-[#008080] overflow-hidden">
      
      {/* Icons */}
      <div className="grid grid-cols-1 gap-8 w-24 p-4 text-center">
        <div 
          onDoubleClick={() => setIsMusicOpen(true)}
          onTouchEnd={() => setIsMusicOpen(true)} // للجوال
          className="cursor-pointer group flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-yellow-500 border-2 border-white flex items-center justify-center text-white font-bold shadow-lg">
            ♪
          </div>
          <span className="text-xs bg-black text-white mt-1 px-1">Music_Player</span>
        </div>
      </div>

      {/* Render Music Window */}
      <MusicPlayer isOpen={isMusicOpen} onClose={() => setIsMusicOpen(false)} />

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-[#c0c0c0] border-t-2 border-white flex items-center justify-between px-2 z-50">
        <button className="bg-[#c0c0c0] px-4 h-7 border-b-2 border-r-2 border-black border-t-2 border-l-2 font-bold active:border-none">
          Start
        </button>
        <div className="border-2 border-gray-500 bg-[#c0c0c0] px-3 h-7 flex items-center text-sm font-bold shadow-inner">
          {time}
        </div>
      </div>
    </div>
  );
};

export default Desktop;
