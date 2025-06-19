'use client'

import sparky from '../../../public/sparky.svg'
import Image from 'next/image'
import { useState } from 'react'

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => {
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  if (typeof window !== "undefined") {
    window.openChatBox = openChat;
  }

  if (!isOpen) {
    return (
      <div 
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#FFB74C] flex items-center justify-center shadow-lg cursor-pointer z-50 hover:scale-110 transition-transform"
        onClick={openChat}
      >
        <Image src={sparky} alt="chatbot" width={30} height={30} />
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[90vw] h-[70vh] sm:w-[450px] sm:h-[450px] bg-[#FFB74C] rounded-lg sm:rounded-4xl flex flex-col shadow-lg z-50">
      <div className="w-full bg-[#FFD699] rounded-t-lg sm:rounded-t-4xl h-5/6 p-4 sm:p-6 flex flex-col justify-end relative">
        <button 
          className="absolute top-3 right-3 text-lg font-bold text-gray-600 hover:text-gray-900"
          onClick={closeChat}
        >
          &times;
        </button>
        
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <Image src={sparky} alt="chatbot" width={30} height={30} className="mt-1" />
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-700 text-left">Hey there! I'm Sparky, the chatbot built by Sandspark Digital. Ask me anything about what we do!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-b-lg sm:rounded-b-4xl h-1/6 p-3 sm:p-4">
        <div className="relative h-full flex items-center">
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="w-full h-10 sm:h-12 pl-4 pr-10 rounded-full border-2 border-gray-200 focus:border-[#FFB74C] focus:outline-none transition-colors"
          />
          <button className="absolute right-2 sm:right-3 w-8 h-8 flex items-center justify-center bg-[#FFB74C] text-white rounded-full">
            →
          </button>
        </div>
      </div>
    </div>
  );
}