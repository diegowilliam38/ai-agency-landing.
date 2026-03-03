# ADR-002: Posicionamento Estratégico AI-First (Nicho Triplo)

**Date:** 2026-03-02
**Status:** Accepted

## Context

A agência "Innovate e Solve IA" estava correndo o risco de entrar no saturado mercado genérico de "venda de chatbots para redes sociais". A comunicação precisava ser elevada para "Infraestrutura Limitless" (Squads, Web Apps e LLMOps) de modo a fechar tickets altos e atrair empresas que compreendem o real impacto da Inteligência Artificial.
Além disso, foi constatada a força mercadológica global de atuar focado em setores regulados onde as ferramentas genéricas falham miseravelmente: **Jurídico, Empresarial/B2B e Educacional**.

## Decision

Fica estabelecido o pivô de posicionamento na Landing Page e no material comercial de "Agência de Automação" para "Provedor de Infraestrutura: **AI-First OS**".

O design da UI, o copywriting e a representação arquitetônica (Cards da seção Ecossistema) foram refeitos para demonstrar e expor como funciona o esqueleto (Data Pipelines, Analytics, e Integração RAG Seguro) e não mais a "casca externa" conversacional per se.

## Alternatives Considered

- *Continuar como Agência Genérica ("Fazemos automação de Whatsapp")*: Traria clientes de baixo valor, alta taxa de cancelamento e nenhum alinhamento real com o poder dos Multi-Agents em LangGraph que a base do AIOS permite. Rejeitado por não escalar faturamento Enterprise.

## Consequences

- O conteúdo da landing page agora lida com jargão levemente mais técnico (Chunking, RAG Privado, Pipelines, LGPD, CVM), atraindo tomadores de decisão C-level, diretores corporativos e CEO's.
- Serão necessários estudos ou exemplos de RAG com anonimização (caso surjam Leads Jurídicos).
- Maior atrito inicial para leads básicos, mas qualificação drástica para contratos Enterprise.

## Rule for Future Projects

Toda e qualquer nova aplicação web desenvolvida no ecossistema subjacente a este projeto comercial DEVE incorporar e documentar suas defesas de privacidade (LGPD) inerentes aos nichos Edu e LegalTech desde o *Day 1*.
