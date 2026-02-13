import React from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

const Gallery = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const memories = [
    { id: 1, title: 'Old Console', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300' },
    { id: 2, title: 'VHS Tapes', img: 'https://images.unsplash.com/photo-1591453453301-133989111c1d?w=300' },
    { id: 3, title: 'Cassette Player', img: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=300' }
  ];

  return (
    <div className="absolute top-10 right-10 w-80 retro-border shadow-2xl z-40 bg-retro-gray">
      <div className="bg-blue-900 text-white p-1 flex justify-between items-center text-sm font-bold">
        <div className="flex items-center gap-1">
          <ImageIcon size={14} />
          <span>Gallery - 90s_Memories</span>
        </div>
        <button onClick={onClose} className="bg-gray-300 text-black px-1 border-b-2 border-r-2 border-white"><X size={14} /></button>
      </div>

      <div className="p-2 grid grid-cols-2 gap-2 h-64 overflow-y-auto bg-white border-inset border-2 border-gray-400">
        {memories.map(item => (
          <div key={item.id} className="border border-gray-300 p-1 hover:bg-blue-100 cursor-pointer">
            <img src={item.img} alt={item.title} className="w-full h-20 object-cover border border-black" />
            <p className="text-[10px] text-center font-bold mt-1 text-black">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="p-1 text-[10px] text-gray-600 font-bold">3 Object(s) found.</div>
    </div>
  );
};

export default Gallery;
