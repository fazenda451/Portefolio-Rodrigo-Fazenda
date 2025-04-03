
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-blue-500">
          Portfólio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-foreground hover:text-blue-500 transition-colors">Início</a>
          <a href="#about" className="text-foreground hover:text-blue-500 transition-colors">Sobre</a>
          <a href="#projects" className="text-foreground hover:text-blue-500 transition-colors">Projetos</a>
          <a href="#skills" className="text-foreground hover:text-blue-500 transition-colors">Habilidades</a>
          <a href="#contact" className="text-foreground hover:text-blue-500 transition-colors">Contato</a>
        </nav>
        
        <Button className="hidden md:block button-gradient">
          Download CV
        </Button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <nav className="flex flex-col space-y-4 p-6">
            <a href="#home" className="text-foreground hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#about" className="text-foreground hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#projects" className="text-foreground hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Projetos</a>
            <a href="#skills" className="text-foreground hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Habilidades</a>
            <a href="#contact" className="text-foreground hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</a>
            <Button className="w-full button-gradient">
              Download CV
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
