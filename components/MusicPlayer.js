import React, { useState } from 'react';
import { Play, Pause, SkipForward, Volume2, X } from 'lucide-react';

const MusicPlayer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-20 left-10 w-72 retro-border shadow-2xl z-40">
      {/* Window Header */}
      <div className="bg-blue-900 text-white p-1 flex justify-between items-center text-sm font-bold">
        <div className="flex items-center gap-1">
          <span className="ml-1">Winamp - Spacetoon_Hits.mp3</span>
        </div>
        <button onClick={onClose} className="bg-gray-300 text-black px-1 border-b-2 border-r-2 border-white">
          <X size={14} />
        </button>
      </div>

      {/* Visualizer Area (Neon style) */}
      <div className="bg-black h-24 m-1 border-2 border-gray-600 flex items-center justify-around px-2">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="w-2 bg-neon-green animate-pulse" 
            style={{ height: `${Math.random() * 80 + 20}%` }}
          ></div>
        ))}
      </div>

      {/* Controls */}
      <div className="p-2 bg-retro-gray flex flex-col gap-2">
        <div className="flex justify-center gap-4 bg-black/10 p-2 border-inset border-2 border-gray-400">
          <button className="hover:bg-gray-400 p-1"><Play size={20} fill="black" /></button>
          <button className="hover:bg-gray-400 p-1"><Pause size={20} fill="black" /></button>
          <button className="hover:bg-gray-400 p-1"><SkipForward size={20} fill="black" /></button>
        </div>
        
        <div className="flex items-center gap-2 text-[10px] font-bold">
          <Volume2 size={12} />
          <div className="w-full bg-gray-400 h-2 border-2 border-gray-600 relative">
            <div className="absolute top-0 left-0 h-full bg-neon-blue w-2/3"></div>
          </div>
        </div>
      </div>

      {/* Song Info */}
      <div className="bg-black text-[#39ff14] text-[10px] p-1 font-mono overflow-hidden whitespace-nowrap">
        NOW PLAYING: HAZIM AL-RAAD - REMI - DIGIMON...
      </div>
    </div>
  );
};

export default MusicPlayer;
