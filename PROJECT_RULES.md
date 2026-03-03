# Regras Globais do Projeto (ai-agency-landing)

Este documento herda as diretivas obrigatórias presentes no arquivo `GEMINI.md` do ambiente primário do *Antigravity AIOS*, focando na aplicação dessas regras dentro do escopo desta vitrine institucional/Landing Page.

## 1. Compliance e Posicionamento de Domínio (Nicho)

O foco absoluto de comunicação deste projeto deve sempre visar três pilares fundamentais de governança descritos nos ADRs globais (Zero Trust, LGPD e Privacidade).

1. **Nicho Jurídico**: Qualquer menção ao desenvolvimento de sistemas IA para escritórios ou tribunais nesta página DEVE estar ladeado pelas garantias de **Sigilo Total, Chunking Semântico direcionado e Infraestrutura Zero Trust**. As referências de vazamentos de dados públicos em LLMs abertos são o antagonista.
2. **Nicho Educacional**: É obrigatório frisar a **anonimização dos perfis de estudantes**, conforme determina a LGPD, como o grande diferencial competitivo da infraestrutura da Innovate e Solve IA frente a concorrentes genéricos.
3. **Imóveis/B2B**: O pitch de venda é guiado por performance orientada a dados, substituindo a ideia de "bots simplórios" por **Data Pipelines e Analytics** com previsibilidade de receita e proteção comercial.

## 2. Parâmetros de UI / UX "Premium Tech"

O projeto exige "Visual Excellence", sem exceções. O visual "Premium" é sustentado por:

- **Tema Central**: Fundo predominante em escala de pretos absolutos (e.g., `#000000`, `#050505`) com paletas acentuadas frias e tecnológicas, especificamente **Azul (Blue 500)** e secundariamente Violeta/Verde Neon, aplicados por gradients sutis.
- **Glassmorphism**: Aplicação de cartões com bordas translúcidas (`border border-white/10`) e fundos difusos para dar a sensação de camadas e modernidade estrutural.
- **Tipografia**: Uso estrito da Google Font `Inter` em pesos semibold/bold para headlines (transmitindo autoridade de engenharia) e regular hiper-legível para o body text (cor `gray-400`).
- **Animações (Micro-animations)**: O scroll e os "hovers" em cartões da landing page (*Framer Motion*) devem indicar "vivacidade e infraestrutura moderna ativa". Todo elemento interativo deve gerar feedback visual instantâneo para o usuário.

## 3. Código e Performance (SSR First)

- Todo o site primário (seção "Vitrine" orgânica) deve privilegiar conteúdos que sejam pré-renderizados pelo Edge (Next.js App Router).
- Ícones importam apenas os SVGs individuais usados (ex `lucide-react`).
- Nenhuma "Magic String" no código fonte. Padrões modulares e limpos (DRY / SOLID).

## 4. Segurança / Zero Trust (Regra de Ouro)

Como este repositório pode futuramente expandir para conter chaves de integração do n8n / banco vetorial de demonstração:

- Variáveis de ambiente secretas são **PROIBIDAS** como strings base. Usar `.env.local` e checar `process.env`.
- Todo formulário de captação de chaves ou integração futura com LangGraph deverá ter seus conectores baseados em `Bearer` validados e mascaramento de logs estrito.
