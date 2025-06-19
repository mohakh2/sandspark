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
    <div className="text-black font-sans p-4 sm:p-6 w-full sm:w-auto max-w-full sm:max-w-xl mx-auto rounded-md" id="services">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Our Services</h2>
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