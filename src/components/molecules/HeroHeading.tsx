'use client'

import Image from "next/image";
import spark from "../../../public/spark.svg";
import Heading from "../atoms/Heading";
import { useEffect, useState } from "react";

type HeroHeadingProps = {
  firstLine: string
  secondLine: string
  highlightWord: string
}

export default function HeroHeading({
  firstLine,
  secondLine,
  highlightWord,
}: HeroHeadingProps) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Responsive spark image size
  const getSparkSize = () => {
    if (windowWidth < 640) return 100; // small screens
    if (windowWidth < 1024) return 150; // medium screens
    return 225; // large screens
  };

  // Responsive spark position
  const getSparkPosition = () => {
    if (windowWidth < 640) return '-top-12 -right-10';
    if (windowWidth < 1024) return '-top-16 -right-16';
    return '-top-25 -right-30';
  };

  return (
    <Heading size="xl" className="text-center px-4">
      {firstLine} <br />
      {secondLine} <span className="text-[var(--text-secondary)] relative inline-block">
        <Image 
          className={`absolute ${getSparkPosition()} z-[-1]`} 
          src={spark} 
          alt="spark" 
          width={getSparkSize()} 
          height={getSparkSize()} 
          priority
        />
        {highlightWord}
      </span>
    </Heading>
  )
} 