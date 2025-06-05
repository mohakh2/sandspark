'use client'
import { useState } from "react";
import AccordionItem from "../molecules/AccordionItem";

type ServiceData = {
  title: string
  content: string
}

type ServiceAccordionProps = {
  services: ServiceData[]
  defaultOpen?: number | null
  onChatbotClick?: () => void
}

export default function ServiceAccordion({ 
  services,
  defaultOpen = 1,
  onChatbotClick 
}: ServiceAccordionProps) {
  const [selected, setSelected] = useState<number | null>(defaultOpen)

  const toggle = (index: number) => {
    setSelected(selected === index ? null : index)
  }

  return (
    <div className="text-black font-sans p-6 max-w-xl mx-auto rounded-md" id="test">
      {services.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={selected === index}
          onClick={() => toggle(index)}
        />
      ))}
      <div 
        className="border-t-2 border-black mt-4 pt-4 flex items-center justify-between text-sm cursor-pointer"
        onClick={onChatbotClick}
      >
        <span>Use our Chatbot to find out more about SandSpark!</span>
        <span className="text-xl">→</span>
      </div>
    </div>
  )
} 