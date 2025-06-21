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
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Footer from "../organisms/Footer";

// Extend Window interface to include our custom property
declare global {
  interface Window {
    openChatBox?: () => void;
  }
}

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
  
  const openChatBox = () => {
    if (typeof window !== 'undefined' && window.openChatBox) {
      window.openChatBox();
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="container mx-auto min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center text-center pt-16 pb-8 px-4">
        <HeroHeading 
          firstLine={heroData.firstLine}
          secondLine={heroData.secondLine}
          highlightWord={heroData.highlightWord}
        />
        
        <Paragraph size="lg" className="max-w-2xl mt-6 sm:mt-8" ref={servicesRef}>
          {description}
        </Paragraph>
        
        <ButtonGroup buttons={ctaButtons} />
      </section>
      
      {/* Stats Section */}
      <StatsBar stats={stats} />
      
      {/* Services Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <ServiceAccordion 
            services={serviceData}
            onChatbotClick={openChatBox}
          />
        </div>
      </section>
      
      {/* Features Section */}
      <FeatureShowcase
        title={featureData.title}
        features={featureData.features}
      />
      
      {/* How it works Section */}
      <HowItWorks 
        title={howItWorksData.title}
        subtitle={howItWorksData.subtitle}
        steps={howItWorksData.steps}
      />

      {/* Contact Us Button */}
      <div className="flex flex-col items-center justify-center">
        <Heading size="md" className="text-center mb-6 sm:mb-12">Let’s Build Something Smart Together.</Heading>
        <Button variant="contact" href="/Contact-us">Work with us</Button>
      </div>
      
      {/* Footer Section */}
      <Footer />
      
      <ChatBox />
    </>
  );
} 