<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-WebGL-white?style=for-the-badge&logo=three.js&logoColor=black" alt="Three.js" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/LangChain-AI-green?style=for-the-badge&logo=chainlink" alt="LangChain" />
</div>

<h1 align="center">Innovate e Solve IA — Enterprise AI Agency</h1>

<p align="center">
  <strong>Infraestrutura LLMOps, Squads Autônomos e Data Pipelines para o Mercado B2B Corporativo.</strong>
</p>

---

## 🌌 Visão Geral

Este repositório contém o código-fonte da landing page / portfólio oficial da **Innovate e Solve IA**. Desenvolvida com **Next.js 15+** e renderização de alto desempenho em **WebGL (React Three Fiber)**, a plataforma atua como vitrine técnica das nossas capacidades de engenharia de software e inteligência artificial.

Nós não criamos "chatbots comuns". Projetamos **Topologias de Dados e Arquiteturas Zero Trust** para setores altamente regulados.

🌍 **Live Demo:** [https://ai-agency-landing-steel.vercel.app/](https://ai-agency-landing-steel.vercel.app/)

---

## 🏗️ Engineering Stack & Topologia

A arquitetura da nossa landing page reflete a própria arquitetura que implementamos para nossos clientes empresariais:

### 1. Engine Gráfica (Mira 3D)
Componentes matemáticos renderizados diretamente na GPU para evitar bloqueio da thread principal de Javascript:
- **Zero Trust Vault:** Mesh 3D representando isolamento de dados no nicho Jurídico.
- **High-Velocity Funnel:** Sistema de partículas 3D (`Points`) simulando streams de dados em massa para o nicho B2B.
- **Neural Synapse:** Grafos 3D assíncronos representando orquestração multi-agentes para EdTechs.

### 2. Infraestrutura Core
- **Framework:** Next.js 15 (App Router) + Server-Side Rendering (SSR)
- **Styling:** TailwindCSS v4 com tokens de Design System customizados (Glassmorphism, Glow effects)
- **Animações:** Framer Motion + `@react-three/drei`

### 3. AI & Data Stack (Integrações Corporativas)
- **Data Ingestion:** Python, Apache Airflow
- **Vector Stores:** Pinecone, Milvus
- **Orquestração:** LangChain, LangGraph
- **Observabilidade:** LangSmith para LLM Tracing e prevenção contra Prompt Injection.

---

## 🚀 Como Rodar Localmente

O projeto está modularizado dentro da pasta `src/`. Siga os passos abaixo para iniciar o ambiente de desenvolvimento:

```bash
# 1. Clone o repositório
git clone https://github.com/diegowilliam38/ai-agency-landing.git

# 2. Acesse a pasta da aplicação web
cd ai-agency-landing/src

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no seu navegador. O Next.js e o WebGL farão o hot-reload automático de qualquer alteração nos shaders ou componentes React.

---

## 📂 Estrutura de Diretórios

```text
ai-agency-landing/
├── src/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx          # Ponto de entrada (Landing Page)
│   │   │   ├── layout.tsx        # Layout global e Fontes (Inter)
│   │   │   └── globals.css       # Design Tokens (Mira Theme)
│   │   └── components/
│   │       ├── Capa3D.tsx        # Esfera de partículas WebGL
│   │       ├── Juridico3D.tsx    # Shield Vault WebGL
│   │       ├── B2B3D.tsx         # Data Funnel WebGL
│   │       ├── Edu3D.tsx         # Neural Network WebGL
│   │       └── ChatWidget.tsx    # Mock do SDR Autônomo
├── PRD.md                        # Product Requirements Document
├── ARCHITECTURE.md               # Documento de Decisão Arquitetural
└── .agent/                       # Memória institucional e Specs (SDD)
```

---

## 🛡️ Governança e Qualidade (LLMOps)

Como pesquisadores de **Frameworks de Governança Corporativa**, aplicamos práticas estritas no nosso ciclo de desenvolvimento:
- Rigoroso controle de **Spec-Driven Development (SDD)**. Nenhuma feature é empurrada para `main` sem uma `.agent/stories/[id]-spec.md` validada.
- Validação contínua do Pipeline de RAG (Testes Automatizados).
- Auditoria e sanitização de dependências contra ataques de Supply Chain.

---

<div align="center">
  <p>Construído por <strong>Diego William</strong> — Tech Lead & AI Engineer.</p>
  <p>
    <a href="https://www.linkedin.com/in/diegowilliam-tech/">LinkedIn</a>
    ·
    <a href="https://wa.me/5598988646888">Contato</a>
  </p>
</div>
