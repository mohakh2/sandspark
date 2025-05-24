'use client'

import { useState, forwardRef, useImperativeHandle } from 'react'
import Image from 'next/image'

const ChatBox = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  
  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const openChat = () => {
    setIsOpen(true)
  }

  useImperativeHandle(ref, () => ({
    openChat
  }))

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button 
          onClick={toggleChat}
          className="bg-[#FFB74C] text-white p-4 rounded-full shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      ) : (
        <div className="rounded-2xl shadow-xl overflow-hidden w-80 flex flex-col" style={{ borderRadius: '20px' }}>
          {/* Chat Header */}
          <div className="bg-[#FFB74C] px-4 py-3 flex justify-between items-center">
            <button onClick={toggleChat} className="flex items-center justify-center w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={toggleChat} className="flex items-center justify-center w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Chat Body */}
          <div className="bg-[#FFD699] p-4 flex-grow h-80 overflow-y-auto">
            <div className="bg-white rounded-lg p-3 mb-4 max-w-[80%] mr-auto shadow-sm">
              <p className="text-sm">
                Hey there! I'm Sparky, the chatbot built by SandSpark Digital. Ask me anything about what we do!
              </p>
            </div>
          </div>
          
          {/* Chat Input */}
          <div className="bg-[#FFD699] p-4 border-t border-gray-100">
            <div className="flex items-center">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-grow p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFB74C]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
})

ChatBox.displayName = 'ChatBox'

export default ChatBox 