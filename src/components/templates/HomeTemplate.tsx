"use client"

import HeroHeading from "../molecules/HeroHeading";
import Paragraph from "../atoms/Paragraph";
import ButtonGroup from "../molecules/ButtonGroup";
import StatsBar from "../organisms/StatsBar";
import ServiceAccordion from "../organisms/ServiceAccordion";
import Navbar from "../navbar";
import { useRef } from "react";

type HomeTemplateProps = {
  heroData: {
    firstLine: string
    secondLine: string
    highlightWord: string
  }
  description: string
  ctaButtons: {
    label: string
    href: string
    variant: 'primary' | 'secondary'
  }[]
  stats: {
    value: string
    label: string
  }[]
  serviceData: {
    title: string
    content: string
  }[]
}

export default function HomeTemplate({
  heroData,
  description,
  ctaButtons,
  stats,
  serviceData
}: HomeTemplateProps) {
  const servicesRef = useRef<HTMLParagraphElement>(null);
  const chatBoxRef = useRef<{ openChat: () => void }>(null);
  const openChatBox = () => {
    chatBoxRef.current?.openChat();
  };

  return (
    <>
    <Navbar/>

    <div className="mt-20 flex flex-col items-center justify-center text-center h-screen">
      <HeroHeading       
        firstLine={heroData.firstLine}
        secondLine={heroData.secondLine}
        highlightWord={heroData.highlightWord}
      />
      
      <Paragraph size="lg" className="max-w-2xl" ref={servicesRef}>
        {description}
      </Paragraph>
      
      <ButtonGroup buttons={ctaButtons} />
      
      <StatsBar stats={stats} />
      
      <div className="flex justify-between">
        <ServiceAccordion 
          services={serviceData}
          onChatbotClick={openChatBox}
        />
      </div>
    </div>
    
    </>
  );
} 