
import React from 'react';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden">
              {/* Replace with your image */}
              <div className="absolute inset-0 flex items-center justify-center text-blue-500 text-6xl font-bold">
                SN
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-2xl font-medium text-blue-500 mb-4">Sobre Mim</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Transformando ideias em experiências digitais incríveis
            </h3>
            
            <p className="text-muted-foreground mb-8">
              Com mais de 5 anos de experiência em desenvolvimento web e design, 
              eu ajudo empresas a construírem presença online impactante através de 
              websites modernos e intuitivos. Minha abordagem combina código limpo, 
              design centrado no usuário e as melhores práticas de SEO para criar 
              projetos que não apenas parecem excelentes, mas também performam excepcionalmente.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-500">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Experiência</h4>
                  <p className="text-muted-foreground">5+ anos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Localização</h4>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-500">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Certificações</h4>
                  <p className="text-muted-foreground">10+ certificados</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-500">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Educação</h4>
                  <p className="text-muted-foreground">Ciência da Computação</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="button-gradient py-3 px-6 rounded-lg text-white font-medium text-center">
                Ver Projetos
              </a>
              <a href="#contact" className="border border-blue-500 text-blue-500 py-3 px-6 rounded-lg font-medium text-center hover:bg-blue-50 transition-colors">
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
