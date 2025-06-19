'use client'

import sparky from '../../../public/sparky.svg'
import Image from 'next/image'

export default function ChatBox() {
  return (
    <div className="w-[450px] h-[450px] ml-5 mb-2 bg-[#FFB74C] rounded-4xl flex flex-col shadow-lg">
      <div className="w-full bg-[#FFD699] rounded-t-4xl h-5/6 p-6 flex flex-col justify-end">
        
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image src={sparky} alt="chatbot" width={40} height={40} />
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-700 text-left">Hey there! I'm Sparky, the chatbot built by Sandspark Digital. Ask me anything about what we do!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-b-4xl h-1/6 p-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="w-full h-12 pl-4 pr-4 rounded-full border-2 border-gray-200 focus:border-[#FFB74C] focus:outline-none transition-colors"
          />
        </div>
      </div>
    </div>
  );
}