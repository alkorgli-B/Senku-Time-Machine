import React, { useState, useEffect } from 'react';
import MusicPlayer from './MusicPlayer';
import Gallery from './Gallery';
import Messenger from './Messenger';

const Desktop = () => {
  const [time, setTime] = useState('');
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isMessengerOpen, setIsMessengerOpen] = useState(false);
  const [isStartOpen, setIsStartOpen] = useState(false);

  // تحديث الوقت الحي
  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  // دالة لإغلاق قائمة ابدأ عند النقر خارجها
  const closeStart = () => {
    if (isStartOpen) setIsStartOpen(false);
  };

  return (
    <div 
      className="h-screen w-full relative bg-[#008080] overflow-hidden font-sans select-none"
      onClick={closeStart}
    >
      
      {/* --- Desktop Icons Grid --- */}
      <div className="flex flex-col gap-8 p-6 w-max">
        
        {/* Messenger AGI Icon */}
        <div 
          onDoubleClick={() => setIsMessengerOpen(true)} 
          onTouchEnd={() => setIsMessengerOpen(true)}
          className="flex flex-col items-center w-20 cursor-pointer group"
        >
          <div className="w-12 h-12 bg-green-500 border-2 border-white flex items-center justify-center text-2xl shadow-[4px_4px_0px_#000] group-active:translate-x-[2px] group-active:translate-y-[2px] group-active:shadow-none transition-all">
            💬
          </div>
          <span className="text-[11px] bg-black text-white mt-2 px-1 text-center neon-text">AGI Chat</span>
        </div>

        {/* Music Player Icon */}
        <div 
          onDoubleClick={() => setIsMusicOpen(true)} 
          onTouchEnd={() => setIsMusicOpen(true)}
          className="flex flex-col items-center w-20 cursor-pointer group"
        >
          <div className="w-12 h-12 bg-yellow-500 border-2 border-white flex items-center justify-center text-2xl shadow-[4px_4px_0px_#000] group-active:translate-x-[2px] group-active:translate-y-[2px] group-active:shadow-none transition-all">
            ♪
          </div>
          <span className="text-[11px] bg-black text-white mt-2 px-1 text-center neon-text">Winamp</span>
        </div>

        {/* Memories Gallery Icon */}
        <div 
          onDoubleClick={() => setIsGalleryOpen(true)} 
          onTouchEnd={() => setIsGalleryOpen(true)}
          className="flex flex-col items-center w-20 cursor-pointer group"
        >
          <div className="w-12 h-12 bg-blue-500 border-2 border-white flex items-center justify-center text-2xl shadow-[4px_4px_0px_#000] group-active:translate-x-[2px] group-active:translate-y-[2px] group-active:shadow-none transition-all">
            🖼️
          </div>
          <span className="text-[11px] bg-black text-white mt-2 px-1 text-center neon-text">Memories</span>
        </div>

      </div>

      {/* --- Windows Layer --- */}
      <Messenger isOpen={isMessengerOpen} onClose={() => setIsMessengerOpen(false)} />
      <MusicPlayer isOpen={isMusicOpen} onClose={() => setIsMusicOpen(false)} />
      <Gallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />

      {/* --- Start Menu Popup --- */}
      {isStartOpen && (
        <div className="absolute bottom-10 left-0 w-56 bg-retro-gray border-2 border-white shadow-2xl z-[60] border-t-white border-l-white border-b-gray-800 border-r-gray-800">
           <div className="bg-blue-800 p-2 text-white font-bold -rotate-90 absolute left-[-44px] bottom-20 w-40 text-center text-sm tracking-widest">
             SENKU AGI
           </div>
           <div className="ml-9">
              <div className="p-3 hover:bg-blue-700 hover:text-white cursor-pointer text-sm border-b border-gray-400 flex items-center gap-2">
                🚀 Programs
              </div>
              <div className="p-3 hover:bg-blue-700 hover:text-white cursor-pointer text-sm border-b border-gray-400 flex items-center gap-2">
                ⚙️ Settings
              </div>
              <div className="p-3 hover:bg-blue-700 hover:text-white cursor-pointer text-sm flex items-center gap-2">
                🔒 Shut Down
              </div>
           </div>
        </div>
      )}

      {/* --- Taskbar --- */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-retro-gray border-t-2 border-white flex items-center justify-between px-1 z-50">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsStartOpen(!isStartOpen);
          }}
          className={`flex items-center gap-1 px-2 h-7 border-2 font-bold text-sm ${
            isStartOpen ? 'border-inset border-gray-800 bg-gray-400' : 'border-outset border-white bg-retro-gray'
          }`}
        >
          <span className="bg-blue-600 text-white px-1 text-[10px] rounded-sm">田</span>
          Start
        </button>
        
        <div className="flex items-center gap-2 border-2 border-gray-500 px-3 h-7 shadow-inner bg-retro-gray font-mono text-xs font-bold text-black">
           {time}
        </div>
      </div>

    </div>
  );
};

export default Desktop;
