import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: "E-commerce de Motos",
    description: "Uma plataforma de e-commerce completa com sistema de pagamento, carrinho e painel de administração.",
    image: "bikesbyfazenda.png",
    category: "desenvolvimento",
    tech: ["Laravel", "PHP", "MySQL"],
    githubLink: "https://github.com/fazenda451/Bikes-By-Fazenda---Website",
    liveLink: "#"
  },
  
];

// Filter categories
const categories = ["todos", "desenvolvimento", "design", "aplicativo"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("todos");
  
  const filteredProjects = activeCategory === "todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-purple-500 mb-4">Meus Projetos</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Trabalhos Recentes
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos projetos mais recentes que desenvolvi. 
            Cada projeto é único e representa uma solução para um problema específico.
          </p>
        </div>
        
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 p-1">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                  activeCategory === category 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-white text-muted-foreground hover:bg-purple-100'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
              <div className={`h-60 ${project.image} flex items-center justify-center text-purple-500 text-4xl font-bold`}>
                {project.title.substring(0, 2)}
              </div>
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded mr-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a 
                    href={project.githubLink} 
                    className="flex items-center text-sm font-medium text-purple-500 hover:text-purple-700"
                  >
                    <Github size={16} className="mr-1" />
                    Código
                  </a>
                  <a 
                    href={project.liveLink} 
                    className="flex items-center text-sm font-medium text-purple-500 hover:text-purple-700"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Ver Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block border border-purple-500 text-purple-500 py-3 px-6 rounded-lg font-medium hover:bg-purple-50 transition-colors"
          >
            Ver Todos os Projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
