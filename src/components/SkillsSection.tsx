
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

// Skills data
const technicalSkills = [
  { name: "HTML & CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "React", percentage: 85 },
  { name: "Node.js", percentage: 80 },
  { name: "UI/UX Design", percentage: 85 },
  { name: "Responsive Design", percentage: 90 },
];

const softSkills = [
  "Comunicação efetiva",
  "Trabalho em equipe",
  "Gerenciamento de projetos",
  "Resolução de problemas",
  "Adaptabilidade",
  "Atenção aos detalhes",
  "Pensamento crítico",
  "Criatividade"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-blue-500 mb-4">Minhas Habilidades</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Competências & Ferramentas
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ao longo dos anos, desenvolvi uma ampla gama de habilidades técnicas e interpessoais
            que me permitem entregar projetos de alta qualidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold mb-8 pb-2 border-b">Habilidades Técnicas</h4>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-500">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold mb-8 pb-2 border-b">Habilidades Interpessoais</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-blue-500 h-5 w-5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h4 className="text-xl font-bold mb-8 pb-2 border-b">Ferramentas & Tecnologias</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Replace these divs with actual logos of technologies you use */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold">
                  T{index + 1}
                </div>
                <span className="mt-2 text-sm text-center">Tecnologia {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
