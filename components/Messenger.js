import React, { useState } from 'react';
import { X, Send, Smile } from 'lucide-react';

const Messenger = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Senku_AGI', text: 'Welcome to the future... or the past? How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { id: Date.now(), sender: 'You', text: input }]);
    setInput('');
    
    // محاكاة رد الذكاء الاصطناعي
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: 'Senku_AGI', 
        text: "Analyzing your request through my 1995 neural core... Process complete." 
      }]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 retro-border shadow-2xl z-50 bg-[#f1f1f1]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0054e3] to-[#27c4ff] text-white p-1 flex justify-between items-center text-xs font-bold">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full border border-white"></div>
          <span>Senku Messenger (Online)</span>
        </div>
        <button onClick={onClose} className="bg-[#e04343] hover:bg-red-600 px-2 border border-white text-white">X</button>
      </div>

      {/* Chat Area */}
      <div className="h-64 bg-white m-2 border-inset border-2 border-gray-400 overflow-y-auto p-2">
        {messages.map(msg => (
          <div key={msg.id} className="mb-2 text-xs">
            <span className={`font-bold ${msg.sender === 'You' ? 'text-blue-700' : 'text-orange-600'}`}>
              {msg.sender}:
            </span>
            <span className="ml-1 text-black font-sans">{msg.text}</span>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="p-2 flex flex-col gap-2">
        <div className="flex gap-1">
           <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border-2 border-gray-400 p-1 text-xs outline-none focus:border-blue-500" 
            placeholder="Write a message..."
           />
           <button type="submit" className="retro-border bg-gray-200 px-2 hover:bg-gray-300">
             <Send size={14} className="text-blue-800" />
           </button>
        </div>
        <div className="flex justify-between items-center opacity-70">
           <Smile size={16} className="text-yellow-600" />
           <span className="text-[10px] font-bold text-gray-500">AGI Engine Active</span>
        </div>
      </form>
    </div>
  );
};

export default Messenger;
