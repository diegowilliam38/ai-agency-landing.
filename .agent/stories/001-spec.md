# Especificação Técnica 001 - Adaptação e Renderização Mira

**Autor:** @architect / @dev
**Data:** 2026-06-27

## Arquitetura de Conversão (Next.js -> Mira)
Esta especificação define como a landing page Next.js será convertida em uma apresentação Mira, de acordo com as regras estabelecidas de SDD.

### 1. Ingestão e Contextualização (Mira Extract/Planner)
- **Fonte de Origem:** `src/app/page.tsx` (ou estrutura equivalente do Next.js), além do `PRD.md` do projeto.
- **Mapeamento de Seções:**
  - Hero Section -> Slide de Capa.
  - Seções de Valor (Jurídico, Educacional, B2B) -> Slides de Conteúdo (Cards com Glassmorphism).
  - Seção de Segurança (Zero Trust) -> Slide de Destaque Técnico.
  
### 2. Estilização e Tokens de Design
O Mira usa temas em CSS variables (`mira-templates/themes/mira-dark`). A apresentação será injetada com os seguintes overrides:
- Fundo: Preto (`#000000`) em vez de tons de cinza do tema padrão.
- Cores de Acento: `Blue 500` e destaques em Neon (Violeta/Verde).
- Tipografia: Importar `Inter` via Google Fonts no head da apresentação e sobrescrever `--mira-font-family`.
- Efeitos: Glassmorphism usando fundos rgba escuros e `backdrop-filter: blur()`.

### 3. Coreografia de Animações D3.js (Mira Animator)
- **Regra Zero:** Elementos estáticos são proibidos.
- Todo texto ou card terá um estado inicial (ex: opacidade 0, translação Y) e, ao entrar, continuará com animações sutis de flutuação/pulso simulando infraestrutura "ativa".

### 4. Output e Entrega
- O destino será `C:\Users\Diego William\OneDrive\Área de Trabalho\AIOS-WORKSPACE\_CORE_SKILLS\mira-animator\decks\ai-agency-landing`.
- Arquivos gerados: `index.html`, estrutura D3 vinculada, e folha de estilos personalizada.
