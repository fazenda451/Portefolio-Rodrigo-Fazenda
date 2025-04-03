
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <p className="text-purple-500 font-medium mb-4">Olá, eu sou</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Rodrigo Fazenda</span>
              <span className="inline-block animate-wave ml-4">👋</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">Back-End Developer & Full Stack Developer</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Eu crio experiências digitais que combinam design e funcionalidade
              para ajudar empresas a alcançarem os seus objetivos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="button-gradient" size="lg">
                Ver Projetos
              </Button>
              <Button variant="outline" size="lg">
                Fale Comigo
              </Button>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://github.com/fazenda451" className="text-muted-foreground hover:text-purple-500 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rodrigo-fazenda-80b7a4349/" className="text-muted-foreground hover:text-purple-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="instagram.com/fazenda.451" className="text-muted-foreground hover:text-purple-500 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-purple-100 overflow-hidden">
              <img src="/Eu.jpg" alt="Rodrigo Fazenda" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center text-purple-500 text-6xl font-bold">
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Deslize para baixo</span>
            <ArrowDown className="text-purple-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
