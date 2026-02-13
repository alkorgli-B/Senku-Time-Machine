import React, { useState } from 'react';

const Desktop = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // تحديث الوقت كل ثانية
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="h-screen w-full relative bg-[#008080] p-4"> {/* لون خلفية ويندوز الشهير */}
      
      {/* Desktop Icons */}
      <div className="grid grid-cols-1 gap-8 w-20 text-center text-white">
        <div className="cursor-pointer group">
          <div className="w-12 h-12 bg-blue-500 mx-auto mb-1 border-2 border-white group-active:border-dotted"></div>
          <span className="text-xs bg-black px-1">My Computer</span>
        </div>
        
        <div className="cursor-pointer group">
          <div className="w-12 h-12 bg-yellow-500 mx-auto mb-1 border-2 border-white group-active:border-dotted"></div>
          <span className="text-xs bg-black px-1">Spacetoon_Hits</span>
        </div>
      </div>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-[#c0c0c0] border-t-2 border-white flex items-center justify-between px-2">
        <button className="bg-[#c0c0c0] px-4 h-7 border-b-2 border-r-2 border-black border-t-2 border-l-2 font-bold flex items-center gap-2">
           Start
        </button>
        
        <div className="border-inset bg-[#c0c0c0] px-3 h-7 border-2 border-gray-500 flex items-center text-sm font-bold">
          {time}
        </div>
      </div>

      {/* Snow Effect Overlay */}
      <div className="snow-container">
        {/* سيتم إضافة كود الثلج التفاعلي هنا في الملف القادم */}
      </div>
    </div>
  );
};

export default Desktop;
