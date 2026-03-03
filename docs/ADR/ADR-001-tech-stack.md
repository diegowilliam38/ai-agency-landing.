# ADR-001: Tech Stack Selection

**Date:** 2026-03-02
**Status:** Accepted

## Context

We are starting a new project (`ai-agency-landing`) to build a premium landing page to showcase AI agents, web apps, and AI infrastructure services. The site needs to be highly engaging, modern, and inspire an ecosystem/movement aesthetic (similar to Academia Lendária). SEO and API capabilities are critical for an AI agency.

## Decision

We will use **Next.js (App Router) + Tailwind CSS + TypeScript** for the application.

- **Next.js**: Provides Server-Side Rendering (SSR) for immediate perceived performance, excellent SEO for terms like "automação IA", and built-in API Routes to securely connect with LLM providers (OpenAI, Anthropic).
- **Tailwind CSS**: Chosen to quickly iterate on the requested dark mode and premium tech aesthetic, aligning with the Next.js default ecosystem.
- **TypeScript**: Ensures type safety and scalability as the platform grows into a larger ecosystem portal.

## Alternatives Considered

- **Vite + Vanilla CSS**: Excluded because it lacks built-in SSR (without additional configuration like Vite SSR/Remix) and API routes in the same project, which are necessary for SEO and AI integrations.

## Consequences

- Fast page loads and optimal SEO for agency discovery.
- Immediate capability to integrate AI models securely via backend routes.
- Tailwind will require disciplined utility class management to maintain the premium glassmorphism and animation aesthetics without bloating the markup.

## Rule for Future Projects

Use Next.js for landing pages out of the AIOS workspace that explicitly require SEO, high perceived performance, and integrated full-stack (API) AI capabilities.
