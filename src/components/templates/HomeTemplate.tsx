"use client"

import HeroHeading from "../molecules/HeroHeading";
import Paragraph from "../atoms/Paragraph";
import ButtonGroup from "../molecules/ButtonGroup";
import StatsBar from "../organisms/StatsBar";
import ServiceAccordion from "../organisms/ServiceAccordion";
import Navbar from "../navbar";
import FeatureShowcase from "../organisms/FeatureShowcase";
import HowItWorks from "../organisms/HowItWorks";
import { useRef } from "react";
import ChatBox from "../molecules/ChatBox";
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
  featureData: {
    title: string
    features: {
      icon: string
      title: string
      description: string
    }[]
  }
  howItWorksData: {
    title: string
    subtitle: string
    steps: {
      number: number
      title: string
      description: string
    }[]
  }
}

export default function HomeTemplate({
  heroData,
  description,
  ctaButtons,
  stats,
  serviceData,
  featureData,
  howItWorksData
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

      
      
      <div className="flex justify-around">
        <ServiceAccordion 
          services={serviceData}
          onChatbotClick={openChatBox}
        />
        <ChatBox/>
      </div>

      <FeatureShowcase
        title={featureData.title}
        features={featureData.features}
      />

      <div className="my-16">
        <HowItWorks 
          title={howItWorksData.title}
          subtitle={howItWorksData.subtitle}
          steps={howItWorksData.steps}
        />
      </div>
    </div>
    
    </>
  );
} 