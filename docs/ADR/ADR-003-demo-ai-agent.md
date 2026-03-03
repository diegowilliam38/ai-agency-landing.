# ADR-003: Implementação de Agente Demo (SDR Interativo) na Landing Page

**Date:** 2026-03-02
**Status:** Accepted

## Context

Ao oferecer serviços de "AI-First OS" e infraestrutura avançada (LLMOps) para mercados Enterprise e B2B, a landing page precisa provar tecnicamente o valor prometido. O simples uso de *copywriting* persuasivo não é suficiente para tangibilizar o produto final ("Squads Autônomos"). O prospect precisa interagir com a tecnologia no momento de maior interesse.

## Decision

Foi decidida a implementação de um **Agente IA Demo (Lead Qualificador / SDR)** diretamente na Landing Page. Esta interface funcionará como um widget de chat (flutuante) que interage com o usuário simulando o comportamento de um agente inteligente desenhado para B2B.

O agente simulará o fluxo:

1. Saudação + Contexto B2B.
2. Pergunta de qualificação de dor/nicho.
3. Direcionamento estratégico para fechamento no WhatsApp do Especialista (Tech Lead).

## Alternatives Considered

- *Apenas link de WhatsApp normal*: Mantém a conversão manual e gera trabalho repetitivo de triagem. Falha em demonstrar a capacidade de qualificação por IA em tempo real. (Rejeitado)
- *Formulário de Contato Tradicional*: Não transmite a imagem de "Agência de AI-First". Traz muita fricção ao usuário. (Rejeitado)

## Consequences

- O site ganha um forte elemento interativo de "prova viva" da capacidade técnica.
- A UI necessitará de um componente de Chat animado criado em Tailwind/Framer Motion.
- Num segundo momento (Back-end / LangGraph), esta interface visual será conectada a uma API Route do Next.js hospedando um agente LangChain/LangGraph que registrará e qualificará o lead de fato.

## Rule for Future Projects

Todo projeto de prospecção de agentes (seja interno ou de clientes da agência) deve adotar o princípio "Show, don't tell". Oferecer a interação com um mock/agente reduzido antes da venda aumenta drasticamente a taxa de fechamento em tickets elevados.
