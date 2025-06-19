'use client'
import { useState } from "react";
import AccordionItem from "../molecules/AccordionItem";
import Image from "next/image";
import sparkySvg from "../../../public/sparky.svg";

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
        className="mt-6 p-3 flex items-center justify-between rounded-lg bg-[#FFB74C] hover:bg-[#FFD699] transition-colors cursor-pointer shadow-md"
        onClick={onChatbotClick}
      >
        <div className="flex items-center gap-2">
          <Image src={sparkySvg} alt="Sparky the Chatbot" width={30} height={30} />
          <span className="font-medium">Chat with Sparky to learn more about our services</span>
        </div>
        <span className="text-xl font-bold">→</span>
      </div>
    </div>
  )
} 