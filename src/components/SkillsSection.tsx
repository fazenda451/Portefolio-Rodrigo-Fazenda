
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

// Skills data
const technicalSkills = [
  { name: "HTML & CSS", percentage: 80 },
  { name: "PHP", percentage: 80 },
  { name: "Laravel", percentage: 80 },
  { name: "MySQL", percentage: 80 },
  { name: "JavaScript", percentage: 65 },
  { name: "React", percentage: 50 },
  { name: "Node.js", percentage: 80 },
  { name: "UI/UX Design", percentage: 80 },
  { name: "Responsive Design", percentage: 80 },
  { name: "Git", percentage: 70 },
  { name: "AWS", percentage: 60 },
];

const softSkills = [
  "Trabalho em equipa",
  "Gestão de projetos",
  "Resolução de problemas",
  "Adaptabilidade",
  "Pensamento crítico",
  "Criatividade"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-purple-500 mb-4">Minhas Competências</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Competências & Ferramentas
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ao longo dos anos, desenvolvi uma vasta gama de competências técnicas e interpessoais
            que me permitem entregar projetos de alta qualidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold mb-8 pb-2 border-b">Competências Técnicas</h4>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-purple-500">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2 bg-purple-100" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold mb-8 pb-2 border-b">Competências Interpessoais</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-purple-500 h-5 w-5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default SkillsSection;
