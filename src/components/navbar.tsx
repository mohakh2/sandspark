'use client'

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Button from "./atoms/Button";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Handle scroll event for better mobile UX
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`sticky top-0 z-50 bg-[var(--background)] shadow-md transition-all duration-300 ${scrollPosition > 10 ? 'py-2' : 'py-4'}`}>
      <div className="container flex justify-between items-center mx-auto px-4">
        <Link href="/">
          <Image src={logo} alt="logo" width={180} height={180} className="w-auto sm:w-[180px] md:w-[220px] lg:w-[250px]" />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-2 lg:gap-4">
          <Button variant="navbar" href="#home" className="hover:text-[var(--text-secondary)]">Home</Button>
          <Button variant="navbar" href="#services" className="hover:text-[var(--text-secondary)]">Services</Button>
          <Button variant="navbar" href="#process" className="hover:text-[var(--text-secondary)]">Process</Button>
          <Button variant="navbar" href="#about" className="hover:text-[var(--text-secondary)]">About</Button>
          <Button variant="navbar" href="#contact" className="hover:text-[var(--text-secondary)]">Contact</Button>
        </div>
        
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black mb-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--background)] py-4 px-4 shadow-lg absolute top-full left-0 right-0">
          <div className="flex flex-col gap-2">
            <Button 
              variant="navbar" 
              href="#home" 
              className="hover:text-[var(--text-secondary)] py-3 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Button>
            <Button 
              variant="navbar" 
              href="#services" 
              className="hover:text-[var(--text-secondary)] py-3 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Button>
            <Button 
              variant="navbar" 
              href="#process" 
              className="hover:text-[var(--text-secondary)] py-3 border-b" 
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </Button>
            <Button 
              variant="navbar" 
              href="#about" 
              className="hover:text-[var(--text-secondary)] py-3 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Button>
            <Button 
              variant="navbar" 
              href="#contact" 
              className="hover:text-[var(--text-secondary)] py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}