# Architecture (Topologia Atual)

## Visão Geral do Sistema

O projeto `ai-agency-landing` é construído sobre ferramentas de ponta para ecossistemas Full-Stack escaláveis. A decisão foi focar em Server-Side Rendering (SSR) e Static Site Generation (SSG) para otimização extrema de SEO e performance máxima.

## Stack Tecnológico Principal

- **Framework**: `Next.js 15+` (App Router). Escolhido pela excelente capacidade de roteamento nativo, SSR para SEO e facilidade de integração futura de rotas de API (ex: `app/api/...`) com backends Serverless.
- **Linguagem**: `TypeScript`. Fundamental para a tipagem estática e detecção de erros em tempo de desenvolvimento na camada de UI.
- **Estilização**: `Tailwind CSS v4`. Implementado via variáveis CSS dentro de `@theme` no `globals.css` para aplicar o padrão de design "premium glassmorphic dark-mode" da agência.
- **Animações e Ícones**:
  - `Framer Motion`: Para animações de entrada fluidas, *hover effects* pesados e *reveal animations* sob rolagem, maximizando o engajamento visual do usuário.
  - `Lucide React`: Biblioteca de ícones escolhida por ser moderna, em formato SVG limpo e infinitamente escalável.
- **Utilitários de UI**: `clsx` + `tailwind-merge` (`cn()` util) para a composição robusta de classes condicionais de Tailwind em componentes customizáveis.

## Topologia de Diretórios

```text
PROJECT ROOT
├── .agent/              # Diretório AIOS
│   └── stories/         # Histórias de Usuário / Roadmap
├── docs/                # Documentação AIOS Squad
│   └── ADR/             # Architecture Decision Records persistentes
├── src/
│   └── src/             # Next.js source code
│       ├── app/         # App Router Core
│       │   ├── layout.tsx # RootLayout com provedor de Fontes (Inter) e Metadata SEO
│       │   ├── page.tsx   # Index Landing Page de Alta Conversão
│       │   └── globals.css # Setup do Tailwind v4
│       └── components/  # Interface UI Components
│           └── ChatWidget.tsx # Agente Demo (SDR Flutuante)
│       └── lib/
│           └── utils.ts # Utilitários (ex: função `cn`)
├── PRD.md               # Requisitos do Produto
├── PROJECT_RULES.md     # Regras globais de negócio do projeto
├── ARCHITECTURE.md      # Este documento
└── project-status.yaml  # Memória persistente e estado do workflow
```

## Pontos de Futura Evolução (Integração de Backend)

A topologia atual é essencialmente frontend (Landing Page Static/Client). Como estamos utilizando Next.js, as próximas integrações com a pilha LLMOps (como envio de contatos ou dashboards autenticados para clientes B2B) ocorrerão via **API Routes do Next**, que servirão como BFF (Backend-for-Frontend) conectando a interface ao orquestrador LangGraph ou instâncias do n8n / Supabase na nuvem.
