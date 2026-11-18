# Graph Report - Portefolio  (2026-11-18)

## Corpus Check
- Corpus is ~4,351 words - fits in a single context window. You may not need a graph.

## Summary
- 33 nodes · 34 edges · 6 communities (5 shown, 1 thin omitted)
- Extraction: 62% EXTRACTED · 38% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.86)
- Token cost: 1,200 input · 2,400 output

## Community Hubs (Navigation)
- Projects Showcase & Media
- Client-Side Interactive Runtime
- Developer Profile & Credentials
- Frontend Client Websites
- Hero Experience & Documentation
- Brand Identity Assets

## God Nodes (most connected - your core abstractions)
1. `Projects Showcase & Filter System` - 9 edges
2. `Project: Visualz Studio (React + Vite + shadcn)` - 4 edges
3. `handleScroll()` - 3 edges
4. `Hero Section (Interactive Typewriter & Particle System)` - 3 edges
5. `About Section (Bio, CV Download & Experience Badge)` - 3 edges
6. `Project: Bikes By Fazenda (Laravel E-Commerce)` - 3 edges
7. `Project: Sintra Clássicos (Car Community & Decap CMS)` - 3 edges
8. `Project: Route 68 – Painel de Controlo (ERP & Stock)` - 3 edges
9. `typewrite()` - 2 edges
10. `updateActiveNav()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `About Section (Bio, CV Download & Experience Badge)` --references--> `Rodrigo Fazenda Profile Photograph`  [EXTRACTED]
  index.html → assets/IMG/me.jpg
- `About Section (Bio, CV Download & Experience Badge)` --references--> `Rodrigo Fazenda Curriculum Vitae (PDF)`  [EXTRACTED]
  index.html → assets/Rodrigo Fazenda Pt.pdf
- `Project: Bikes By Fazenda (Laravel E-Commerce)` --references--> `Bikes By Fazenda Showcase Poster`  [EXTRACTED]
  index.html → assets/IMG/Bikesbyfazenda.png
- `Project: Sintra Clássicos (Car Community & Decap CMS)` --references--> `Sintra Clássicos Showcase Poster`  [EXTRACTED]
  index.html → assets/IMG/SintraClassicos.png
- `Project: Visualz Studio (React + Vite + shadcn)` --references--> `Visualz Studio Showcase Poster`  [EXTRACTED]
  index.html → assets/IMG/VisualzStudio.png

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **FullStack Web Applications Portfolio** — index_project_bikesbyfazenda, index_project_sintraclassicos, index_project_visualzstudio, index_project_littleworldhotel, index_project_admindashboard [INFERRED 0.95]
- **Interactive Video Demonstration System** — index_video_modal, script_toggleplay, script_closemodal, script_formattime [INFERRED 0.95]

## Communities (6 total, 1 thin omitted)

### Community 0 - "Projects Showcase & Media"
Cohesion: 0.24
Nodes (10): Admin Dashboard Showcase Poster, Bikes By Fazenda Showcase Poster, Little World Hotel & SPA Showcase Poster, Project: Route 68 – Painel de Controlo (ERP & Stock), Project: Backup Manager (VB.NET & Automation), Project: Bikes By Fazenda (Laravel E-Commerce), Project: Little World Hotel & SPA (High Performance Booking), Project: Route 68 – Discord Schedule & Attendance Bot (+2 more)

### Community 1 - "Client-Side Interactive Runtime"
Cohesion: 0.25
Nodes (3): Contact Form & Social Links (Formspree Integration), handleScroll(), updateActiveNav()

### Community 2 - "Developer Profile & Credentials"
Cohesion: 0.40
Nodes (5): Sintra Clássicos Showcase Poster, Visualz Studio Showcase Poster, Project: Mysa Studio (Beauty & Nails Studio Website), Project: Sintra Clássicos (Car Community & Decap CMS), Project: Visualz Studio (React + Vite + shadcn)

### Community 3 - "Frontend Client Websites"
Cohesion: 0.50
Nodes (4): Rodrigo Fazenda Profile Photograph, Rodrigo Fazenda Curriculum Vitae (PDF), About Section (Bio, CV Download & Experience Badge), Skills Section (Frontend, Backend & Developer Tools)

### Community 4 - "Hero Experience & Documentation"
Cohesion: 0.50
Nodes (3): Hero Section (Interactive Typewriter & Particle System), Portfolio Documentation & Architecture, typewrite()

## Knowledge Gaps
- **12 isolated node(s):** `Portfolio Documentation & Architecture`, `Skills Section (Frontend, Backend & Developer Tools)`, `Contact Form & Social Links (Formspree Integration)`, `Custom Video Modal Player Component`, `Rodrigo Fazenda Curriculum Vitae (PDF)` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 18 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Projects Showcase & Filter System` connect `Projects Showcase & Media` to `Developer Profile & Credentials`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Project: Visualz Studio (React + Vite + shadcn)` (e.g. with `Project: Mysa Studio (Beauty & Nails Studio Website)` and `Project: Sintra Clássicos (Car Community & Decap CMS)`) actually correct?**
  _`Project: Visualz Studio (React + Vite + shadcn)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Portfolio Documentation & Architecture`, `Skills Section (Frontend, Backend & Developer Tools)`, `Contact Form & Social Links (Formspree Integration)` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `typewrite()` connect `Hero Experience & Documentation` to `Client-Side Interactive Runtime`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `handleScroll()` (e.g. with `Contact Form & Social Links (Formspree Integration)` and `script.js`) actually correct?**
  _`handleScroll()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Hero Section (Interactive Typewriter & Particle System)` (e.g. with `typewrite()` and `Design Philosophy (Clean, Typographic, Responsive)`) actually correct?**
  _`Hero Section (Interactive Typewriter & Particle System)` has 2 INFERRED edges - model-reasoned connections that need verification._