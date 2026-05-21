## Why

Engenheiros de software fullstack precisam de uma plataforma que vá além do currículo tradicional para demonstrar visualmente suas habilidades de front-end (UX/UI, animações, fluidez) e arquitetura back-end. Este portfólio "Aesthetic Edition" serve como um cartão de visitas técnico de alta performance que demonstra autoridade técnica, atraindo tech recruiters e engenheiros parceiros.

## What Changes

- Implementação de um Hero 3D (com fallback de carregamento assíncrono) usando Spline/Three.js e animações GSAP.
- Definição de um Strict Dark Theme design system para toda a aplicação.
- Criação de exibições interativas de Stack Tecnológica e "Philosophy Section".
- Implementação de um Vertical Timeline destacando formação e carreira.
- Criação de um Project Grid interativo com descrições técnicas, links do GitHub e Live Demo.
- Integração de um Footer de Conversão com links do LinkedIn/GitHub e contato direto (sem download de currículo PDF).
- Otimização de Performance e SEO visando score > 90 no Google Lighthouse, usando Next.js, preparado para deploy flexível (VPS, Edge networks, etc).

## Capabilities

### New Capabilities
- `hero-3d`: Renderização 3D na seção inicial e orquestração de animações com GSAP.
- `aesthetic-theme`: Sistema de design focado exclusivamente em Dark Mode moderno.
- `tech-stack`: Apresentação da proficiência técnica e linguagens dominadas.
- `career-timeline`: Exibição de milestones de carreira de forma interativa.
- `project-showcase`: Grid detalhado de portfólio de projetos técnicos.
- `conversion-footer`: CTA de contato e redes sociais otimizados.

### Modified Capabilities

## Impact

- **Frontend Architecture**: Criação da estrutura de rotas (Next.js App Router), layouts globais e componentes base.
- **Dependencies**: Introdução de bibliotecas pesadas de animação e 3D (Three.js/Spline, GSAP) que exigirão carregamento lazy e otimização.
- **Deployment**: Configuração flexível de pipeline para suportar ambientes variados (VPS, provedores Edge, etc), mantendo o foco em otimização de entrega e performance.
