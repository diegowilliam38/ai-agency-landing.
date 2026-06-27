# Spec 002: Implementação WebGL (React Three Fiber) e Seções Técnicas

## Metadata
- **ID:** 002
- **Title:** Migração para WebGL (Mira 3D) e Adição de Seções de Arquitetura
- **Status:** Done
- **Owner:** @architect / @dev

## Architectural Decisions
1. **Engine 3D:** `@react-three/fiber` e `@react-three/drei` para a abstração do `three.js`. Motivo: Permite integração declarativa com o ecossistema React.
2. **Performance:** Uso de `frustumCulled={false}` para as partículas do componente Capa3D garantindo que o scroll não gere clips agressivos na tela.
3. **Componentização:** A topologia de cada slide deve ser isolada em seu próprio componente (ex: `Juridico3D.tsx`) encapsulado em um `<Canvas>` independente com classe `absolute inset-0 z-0 pointer-events-none`.
4. **Isolamento SSR:** Todos os componentes do Three.js exigem `use client` no topo.

## File Changes / Technical Plan
- `package.json`: Instalar dependências `three`, `@react-three/fiber`, `@react-three/drei`.
- `src/src/components/Capa3D.tsx`: Componente com esfera pontilhada matemática (3000 partículas).
- `src/src/components/Juridico3D.tsx`: Mesh Vault. Proteção Zero Trust RAG.
- `src/src/components/B2B3D.tsx`: Tornado/Funil feito de `Points` para simulação de High-Velocity Data.
- `src/src/components/Edu3D.tsx`: Rede estática com `Line` conectando instâncias randômicas (simulando neurônios/sinapses).
- `src/src/app/page.tsx`:
  - Remover dependência e hooks do D3.
  - Injetar os `<Canvas>` 3D.
  - Criar slide 8: `Engineering Stack & Topologia` detalhando (Data Ingestion, Vector Store, Orchestration, Application).
  - Criar slide 9: `Governança & Observabilidade` detalhando Prompt Injection e Tracing.
