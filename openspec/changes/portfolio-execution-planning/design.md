## Context

Engenheiros de software precisam de um portfólio que não seja apenas um documento, mas uma prova de suas habilidades. O objetivo é construir uma Landing Page que funcione como um "cartão de visitas técnico", apresentando um design estritamente Dark Mode, com integrações 3D e animações fluidas para impressionar recrutadores e colegas.

## Goals / Non-Goals

**Goals:**
- Alcançar >90 de score no Google Lighthouse (Performance, Acessibilidade, Melhores Práticas e SEO).
- Entregar uma experiência de usuário rica através de componentes 3D e animações complexas.
- Criar uma base de código (Next.js) modular e limpa para expansão futura.

**Non-Goals:**
- Desenvolver um painel de administração CMS nesta primeira versão.
- Implementar suporte a internacionalização (i18n).
- Adicionar um seletor de temas (Light/Dark mode).

## Decisions

- **Framework**: Next.js App Router. Escolhido para aproveitar Server Components, otimização automática de imagens e facilidade de deploy na Vercel (Edge Network).
- **Styling**: Tailwind CSS combinado com CSS Vanilla. Isso permite um desenvolvimento rápido do "Strict Dark Mode" usando design tokens definidos globalmente e integração fácil com GSAP.
- **Animações**: GSAP (GreenSock) com ScrollTrigger. Fornece controle fino sobre timelines complexas e animações baseadas em scroll, superior ao Framer Motion para este caso de uso específico de alta performance.
- **3D Engine**: @splinetool/react-spline (Spline). Permite a importação rápida de cenas 3D interativas exportadas diretamente do Spline. Alternativa (Three.js/React Three Fiber) foi descartada temporariamente para focar na rapidez de entrega do 3D, mas permanece como fallback se a performance for insuficiente.

## Risks / Trade-offs

- **[Risk] Performance do Canvas 3D (Spline) impactando o Lighthouse score.**
  - *Mitigation*: O componente 3D será carregado de forma assíncrona (`next/dynamic` com `ssr: false`). Um placeholder/fallback leve será exibido enquanto o bundle 3D e os assets são baixados.
- **[Risk] Vazamento de memória ou quebra de layout por animações GSAP no React.**
  - *Mitigation*: Utilização estrita do `gsap.context()` e do novo hook `@gsap/react` para garantir que as animações sejam revertidas adequadamente no unmount dos componentes.
- **[Risk] Falta de dados dinâmicos (Sem CMS).**
  - *Mitigation*: A arquitetura utilizará mock files (JSON/TS) padronizados que poderão ser facilmente substituídos por fetches de API (como Sanity ou Supabase) no futuro.

## Migration Plan

N/A - Novo Projeto. Deploy automatizado configurado via GitHub -> Vercel.
