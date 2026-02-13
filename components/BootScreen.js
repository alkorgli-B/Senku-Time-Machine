import React, { useState, useEffect } from 'react';

const BootScreen = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [showLogo, setShowLogo] = useState(false);

  const bootMessages = [
    "> BIOS Version 2.0.26 - SENKU AGI",
    "> Checking Memory... 640KB OK",
    "> Initializing Neural Networks...",
    "> Loading Legacy Drivers (1995-2005)...",
    "> Connection to Vercel Edge established.",
    "> System.Ready: True",
    "> Welcome back, User."
  ];

  useEffect(() => {
    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < bootMessages.length) {
        setLogs(prev => [...prev, bootMessages[currentLog]]);
        currentLog++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowLogo(true), 500);
        setTimeout(() => onComplete(), 3500); // يختفي بعد 3 ثواني من ظهور اللوجو
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col p-10 font-mono text-sm">
      {!showLogo ? (
        <div className="text-neon-green leading-relaxed">
          {logs.map((log, i) => (
            <div key={i} className="mb-1">{log}</div>
          ))}
          <div className="animate-pulse">_</div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center animate-in fade-in duration-1000">
          <div className="w-24 h-24 border-4 border-neon-blue flex items-center justify-center text-4xl mb-4 shadow-[0_0_20px_#00f3ff]">
            <span className="text-white font-bold italic">S</span>
          </div>
          <h1 className="text-neon-blue text-2xl font-bold tracking-[0.2em] neon-text">SENKU AGI</h1>
          <div className="w-48 h-1 bg-gray-800 mt-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-neon-green animate-[loading_2s_infinite]"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default BootScreen;
