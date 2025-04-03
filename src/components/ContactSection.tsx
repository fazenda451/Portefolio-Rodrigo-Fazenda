
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-blue-500 mb-4">Contato</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos Conversar!
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente ou quer discutir uma oportunidade? 
            Ficarei feliz em conversar e ver como posso ajudar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 border-none shadow-lg lg:col-span-1">
            <h4 className="text-xl font-bold mb-6">Informações de Contato</h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Telefone</h5>
                  <p className="text-muted-foreground">(11) 9xxxx-xxxx</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Email</h5>
                  <p className="text-muted-foreground">seuemail@exemplo.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Localização</h5>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-500 rounded-lg text-white">
              <h5 className="text-lg font-semibold mb-3">Horário de Trabalho</h5>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>10:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 border-none shadow-lg lg:col-span-2">
            <h4 className="text-xl font-bold mb-6">Envie uma Mensagem</h4>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome" 
                    className="w-full" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Seu email" 
                    className="w-full" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="Seu telefone" 
                    className="w-full" 
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Assunto
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Assunto da mensagem" 
                    className="w-full" 
                    required 
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Sua mensagem" 
                  className="w-full min-h-[150px]" 
                  required 
                />
              </div>
              
              <Button type="submit" className="button-gradient" size="lg">
                <Send size={18} className="mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
