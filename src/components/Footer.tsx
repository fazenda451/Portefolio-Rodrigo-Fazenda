
import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold text-blue-500">
              Portfólio
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Transformando ideias em experiências digitais incríveis para ajudar 
              empresas a alcançarem seus objetivos.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} - Todos os direitos reservados
            </p>
            <p className="text-muted-foreground text-sm mt-1 flex items-center">
              Feito com <Heart size={14} className="mx-1 text-red-500" /> no Brasil
            </p>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
            <a href="#home" className="text-muted-foreground hover:text-blue-500 transition-colors">Início</a>
            <a href="#about" className="text-muted-foreground hover:text-blue-500 transition-colors">Sobre</a>
            <a href="#projects" className="text-muted-foreground hover:text-blue-500 transition-colors">Projetos</a>
            <a href="#skills" className="text-muted-foreground hover:text-blue-500 transition-colors">Habilidades</a>
            <a href="#contact" className="text-muted-foreground hover:text-blue-500 transition-colors">Contato</a>
          </nav>
          
          <div className="text-sm text-muted-foreground">
            <a href="#" className="hover:text-blue-500 transition-colors">Política de Privacidade</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-blue-500 transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
