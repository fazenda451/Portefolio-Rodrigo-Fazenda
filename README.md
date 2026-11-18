<div align="center">

# 🚀 Rodrigo Fazenda Portfolio

**Modern, high-performance personal portfolio built from scratch.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

<br>

A premium dark-themed portfolio website featuring glassmorphism effects, fluid animations, an interactive particle system, and a custom-built video player designed to showcase real-world projects and technical expertise.

[**🌐 View Live**](https://rodrigofazenda.netlify.app) · [**📬 Contact Me**](mailto:rodrigo.m.fazenda@gmail.com) · [**💼 LinkedIn**](https://www.linkedin.com/in/rodrigo-fazenda-80b7a4349/)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Featured Projects](#-featured-projects)
- [Contact](#-contact)
- [License](#-license)

---

## 💡 About

This portfolio serves as a **living digital résumé**, purpose-built to present my journey and work as a FullStack Developer. Rather than relying on heavy frameworks, the entire site is crafted with vanilla technologies to ensure **instant load times**, **smooth 60fps animations**, and **zero dependency bloat**.

### Design Philosophy

| Principle | Implementation |
|-----------|----------------|
| **Dark Mode First** | Deep-tone palette with neon/vibrant accent highlights for maximum contrast and readability |
| **Glassmorphism** | Frosted-glass cards and overlays with `backdrop-filter` for a premium layered appearance |
| **Motion & Delight** | `IntersectionObserver`-driven scroll animations, typewriter effect, floating particles, and micro-interactions |
| **Mobile First** | Fully responsive across all breakpoints desktop, tablet, and smartphone |
| **Performance** | No build step required; pure HTML/CSS/JS served statically with minimal overhead |

---

## ✨ Features

- **🎨 Premium Dark UI**  Curated color palette with neon accents and smooth gradients
- **🖥️ Responsive Design**  Flawless rendering on all devices and screen sizes
- **✍️ Typewriter Hero**  Animated code-style greeting with rotating role titles
- **🌀 Interactive Particles**  CSS-animated floating particle system in the hero section
- **📂 Project Showcase with Filters**  Filter projects by category: *All*, *FullStack*, *Frontend*, *Backend*
- **🎬 Custom Video Modal Player**  Built entirely from scratch with:
  - Play/Pause, progress scrubbing, and time display
  - Volume control with mute toggle
  - Fullscreen support
  - Touch-friendly controls for mobile
- **📩 Functional Contact Form**  Powered by [Formspree](https://formspree.io/) with AJAX submission (no page reload)
- **🌓 Theme Toggle**  Light/Dark mode switcher
- **⬆️ Back-to-Top Button**  Smooth scroll with animated visibility
- **📥 Downloadable CV**  One-click PDF download directly from the About section

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Structure** | HTML5 (Semantic) |
| **Styling** | CSS3 Custom Properties, Flexbox, Grid + Bootstrap 5.3 (grid system) |
| **Logic** | JavaScript ES6+ (Vanilla) async form handling, video player, filters, IntersectionObserver |
| **Icons** | [Bootstrap Icons](https://icons.getbootstrap.com/) |
| **Typography** | [Google Fonts](https://fonts.google.com/) Inter (UI) + Fira Code (code snippets) |
| **Form Backend** | [Formspree](https://formspree.io/) via Fetch API |

---

## 📁 Project Structure

```
Portefolio/
├── index.html                 # Single-page application (all sections)
├── styles.css                 # Design system: variables, layout, animations
├── script.js                  # Interactive logic: navbar, video player, form, scroll
├── README.md
└── assets/
    ├── IMG/                   # Profile photos, favicons, project posters/covers
    ├── Video/                 # Project demo recordings (.mov, .mkv, .mp4)
    └── Rodrigo Fazenda Pt.pdf # Downloadable CV
```

> **Note:** This is a fully static project no build tools, no `node_modules`, no server-side runtime required.

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- *(Optional)* [VS Code](https://code.visualstudio.com/) with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/fazenda451/Portefolio-Rodrigo-Fazenda.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd Portefolio-Rodrigo-Fazenda
   ```

3. **Open the site:**

   - **Option A** Right-click `index.html` → *Open with Live Server* (recommended for hot-reload)
   - **Option B** Double-click `index.html` to open directly in your browser

That's it no install, no build, no configuration. ✅

---

## 📂 Featured Projects

| Project | Type | Tech Stack | Links |
|---------|------|------------|-------|
| **Bikes By Fazenda** | FullStack | Laravel 11, PHP, MySQL, Tailwind, Stripe | [GitHub](https://github.com/fazenda451) |
| **Sintra Clássicos** | Frontend | HTML5, CSS3, JS, Bootstrap, Decap CMS | [Live](https://sintraclassicos.com) |
| **Visualz Studio** | Frontend (Conceito) | React, TypeScript, Vite, Tailwind, shadcn/ui | [Live](https://visual-studio-conceito.netlify.app) · [GitHub](https://github.com/fazenda451) |
| **Little World Hotel & SPA** | Frontend | HTML5, CSS3, JS, Bootstrap 5 | [Live](https://littleworldhotel.netlify.app) · [GitHub](https://github.com/fazenda451) |
| **Route 68 – Painel** | FullStack | JS ES6+, HTML5, CSS3, Cloudflare Pages, SVG Charts | [Live](https://route68-painel.pages.dev/#inicio) · [GitHub](https://github.com/fazenda451) |
| **Route 68 – Discord Bot** | Backend | Python, discord.py, Discloud, Slash Commands | [GitHub](https://github.com/fazenda451) |
| **Mysa Studio** | Frontend | HTML5, CSS3, JS, CMS Personalizado, Cloudflare Pages | [Live](https://mysah-studio.pages.dev) |
| **WinTune Pro** | Desktop / Automação | Python, CustomTkinter, Supabase, HWID Lock, PyArmor | [GitHub](https://github.com/fazenda451/wintune-pro) |
| **Backup Manager** | Backend | VB.NET, Database, Automation | *Professional Internship – Private* |

---

## 📬 Contact

**Rodrigo Fazenda** FullStack Developer 🇵🇹

| Channel | Link |
|---------|------|
| 📧 Email | [rodrigo.m.fazenda@gmail.com](mailto:rodrigo.m.fazenda@gmail.com) |
| 💼 LinkedIn | [Rodrigo Fazenda](https://www.linkedin.com/in/rodrigo-fazenda-80b7a4349/) |
| 🐙 GitHub | [@fazenda451](https://github.com/fazenda451) |
| 📸 Instagram | [@fazenda.451](https://www.instagram.com/fazenda.451/) |
| 🎮 Discord | `fazenda451` |

> *"Transformo ideias em experiências digitais."*
> I turn ideas into digital experiences.

---

## 📄 License

© 2026 Rodrigo Fazenda. All rights reserved.

This project is provided for **personal and educational use only**. Unauthorized reproduction, distribution, or commercial use of any part of this project is not permitted without prior written consent.
