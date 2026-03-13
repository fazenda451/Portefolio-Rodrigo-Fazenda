# Portefólio - Rodrigo Fazenda 🚀

Um portefólio pessoal moderno e dinâmico, desenhado de raiz para demonstrar o meu trabalho e percurso enquanto **FullStack Developer**. O website adota uma estética premium baseada em tendências modernas de web design, tais como o modo escuro (*Dark Mode*), efeitos de vidro (*Glassmorphism*), e animações fluidas, oferecendo uma experiência de utilizador imersiva.

---

## 💻 Sobre o Projeto

Este portefólio funciona como um currículo digital vivo. Contém secções dedicadas a uma pequena apresentação profissional ("Sobre Mim"), competências técnicas ("Skills"), demonstração de projetos ("Projetos") com capacidade de visualização de vídeos estilo pop-up, e uma área de contacto em tempo real.

O projeto foi construído primariamente com tecnologias frontend "Vanilla" em prol do desempenho rápido sem necessidade de longos carregamentos via frameworks pesadas.

## ✨ Principais Funcionalidades

- **Design Premium e Responsivo:** Otimizado para funcionar na perfeição quer em Desktop, Tablet ou Smartphones (Design *Mobile First* adaptado).
- **Tema Dark Moderno:** Paleta de tons escuros acompanhada por detalhes e contornos de luz néon/vibrante, proporcionando alto contraste e visibilidade ao código/projetos.
- **Animações Fluidas:** Utilização do `IntersectionObserver` para carregar secções com animação de forma suave enquanto o utilizador dá *scroll*.
- **Lista Dinâmica de Projetos com Filtros:** Visualização simples entre "Todos", "FullStack" e "Frontend".
- **Reprodutor de Vídeo Nativo (Modal):** Em vez de ligar a fontes externas pesadas ou usar vídeos com *autoplay*, os projetos abrem vídeos de formato `.mp4`/`.webm`/`.mov` num reprodutor modal elegante construído de raiz e com funções customizadas (como *play/pause*, progresso, controlo tátil de ecrã e gestão avançada de volume).
- **Formulário de Contacto Funcional:** Implementado sob o [Formspree](https://formspree.io/), ligando e encaminhando as mensagens sem ser via base de dados dedicada, enviando todas as ocorrências diretamente para o correio eletrónico com verificação `AJAX` que evita o recarregamento.
- **Efeito de Partículas Interativo (Hero Section):** Partículas animadas através da API de animações do CSS a flutuar no cabeçalho do site.

---

## 🛠️ Tecnologias Utilizadas

- **Estruturação:** `HTML5` semântico
- **Estilização e Layout:** `CSS3` Customizado (Grid, Flexbox, Variáveis nativas) + Base Estrutural de `Bootstrap 5.3` (primariamente para as grelhas).
- **Animações e Interatividade:** `JavaScript` (ES6 Vanilla) - (Lógica assíncrona para Formulário, Componentes do Vídeo, Filtros, IntersectionObserver).
- **Ícones e Tipografia:** `Bootstrap Icons` e Fontes do `Google Fonts` (Inter e Fira Code para a secção do snippet).
- **Envio de e-mails:** [Formspree](https://formspree.io/) com Fetch API.

---

## 📁 Estrutura de Ficheiros

O projeto foca-se na simplicidade dos ficheiros da Web tradicional:

```text
├── index.html            <- Estrutura integral de todo o HTML (Single Page Application view)
├── styles.css            <- Variáveis de cor, design do layout, estilos globais e animações customizadas
├── script.js             <- Controlos lógicos (Scroll Interativo/Navbar, Video modal player, Formulário HTTP)
└── assets
    ├── IMG/              <- Todas as fotografias do utilizador, Favicons e Capas (Posters) dos Projetos
    ├── Video/            <- Vídeos pequenos (.mov, .mkv, .mp4) relativos às demos dos desenvolvimentos
    └── CV.pdf            <- Recurso pronto a descarregar
```

---

## 🚀 Como Visualizar ou Correr o Portefólio

Sendo um projeto que não exige linguagens de lado de servidor em desenvolvimento (não requer Node modules pesados ou um ambiente PHP), podes correr localmente de forma muito rápida.

**Passos:**

1. Fazer clone/download do repositório:
```bash
git clone https://github.com/fazenda451/Portefolio-Rodrigo-Fazenda.git
```
2. Abrir a pasta do projeto.
3. Usar a extensão **Live Server** (do VSCode) e correr com o _Right-click_ em `index.html` > _Open with Live Server_. Em alternativa, clicar simplesmente em e abrir manualmente o ficheiro `index.html` no teu Browser preferido.

---

## 📩 Ligações do Desenvolvedor

**Rodrigo Fazenda - FullStack Developer**
- **Email:** rodrigo.m.fazenda@gmail.com
- **LinkedIn:** [Rodrigo Fazenda](https://www.linkedin.com/in/rodrigo-fazenda-80b7a4349/)
- **GitHub:** [fazenda451](https://github.com/fazenda451)
- **Localização:** Portugal

> *"Transformo ideias em experiências digitais."*

---
© 2026 Rodrigo Fazenda. Todos os direitos reservados.
