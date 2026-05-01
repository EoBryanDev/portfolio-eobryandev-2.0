# PRD — Portfólio Moderno Fullstack (Aesthetic Edition)

## 1. Visão Geral

| Campo                 | Descrição                                                              |
| --------------------- | ---------------------------------------------------------------------- |
| **Produto**           | Portfolio Web de Alta Performance                                      |
| **Tipo**              | Web App Responsivo (Next.js)                                           |
| **Proposta de valor** | Demonstrar autoridade técnica e refinamento visual via animações e 3D. |
| **Modelo de negócio** | Branding Pessoal / Networking                                          |
| **Meio de pagamento** | N/A                                                                    |
| **Versão**            | 1.0                                                                    |
| **Data**              | Outubro 2023                                                           |

## 2. Problema

Engenheiros de software fullstack precisam de uma plataforma que vá além do currículo tradicional, capaz de demonstrar visualmente suas habilidades de front-end (UX/UI, animações, fluidez) e organização de back-end/arquitetura em um único lugar, servindo como cartão de visitas técnico para o mercado.

## 3. Personas

| Persona            | Descrição                                          | Necessidade principal                                           |
| ------------------ | -------------------------------------------------- | --------------------------------------------------------------- |
| **Tech Recruiter** | Caçadores de talentos em busca de desenvolvedores. | Validar stack tecnológica e acessar o LinkedIn rapidamente.     |
| **Coworker/Peer**  | Outros desenvolvedores e engenheiros de software.  | Analisar a qualidade do código, performance e capricho técnico. |

## 4. Funcionalidades

### 4.1 Experiência Visual (Hero & Core)

| Funcionalidade | Descrição                                                                        | Prioridade |
| -------------- | -------------------------------------------------------------------------------- | ---------- |
| Hero 3D        | Seção inicial com elemento 3D (Spline/Three.js) e animações de entrada via GSAP. | Alta       |
| Dark Theme     | Interface exclusivamente em Dark Mode com design aesthetic e moderno.            | Alta       |
| Smooth Scroll  | Navegação fluida entre as seções da landing page.                                | Média      |

### 4.2 Conteúdo e Trajetória

| Funcionalidade     | Descrição                                                                                      | Prioridade |
| ------------------ | ---------------------------------------------------------------------------------------------- | ---------- |
| Tech Stack Display | Exibição moderna das linguagens e ferramentas de domínio.                                      | Alta       |
| Philosophy Section | Espaço para mensagem pessoal e crenças sobre desenvolvimento.                                  | Baixa      |
| Vertical Timeline  | Linha do tempo interativa destacando marcos da carreira e formação.                            | Média      |
| Project Grid       | Vitrine de projetos em formato de grid, com descrição, tecnologias e links (GitHub/Live Demo). | Alta       |

### 4.3 Conversão e Rodapé

| Funcionalidade | Descrição                                          | Prioridade |
| -------------- | -------------------------------------------------- | ---------- |
| Footer Social  | Links para LinkedIn e GitHub.                      | Alta       |
| Contact CTA    | Botão ou área de contato direto (E-mail/WhatsApp). | Média      |

## 5. Jornadas do Usuário

### Jornada 1 — Validação Rápida (Recruiter)

1. O usuário acessa o site e visualiza a Hero.
2. Faz scroll até a seção de "Proeficiências" para validar a Stack.
3. Desce até o rodapé e clica no ícone do **LinkedIn**.

### Jornada 2 — Avaliação Técnica (Peer)

1. O usuário acessa e observa a fluidez das animações GSAP e o carregamento do 3D.
2. Analisa o **Grid de Projetos**, observando os desafios técnicos descritos.
3. Clica no link do **GitHub** para revisar a arquitetura do código.

## 6. Regras de Negócio

| #    | Regra                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------------------------ |
| RN01 | **No Resume PDF:** Não deve haver download de currículo, apenas redirecionamento para LinkedIn.              |
| RN02 | **Single Theme:** O site deve ser estritamente Dark Mode, sem seletor de tema na v1.                         |
| RN03 | **Optimization 3D:** O sistema deve carregar uma imagem/vídeo placeholder antes de inicializar o canvas 3D.  |
| RN04 | **Architecture:** O código deve seguir padrões que permitam expansão (Clean Code) sem gerar lock-in técnico. |

## 7. Métricas de Sucesso

| Métrica            | Descrição                                                             |
| ------------------ | --------------------------------------------------------------------- |
| Performance Score  | Manter > 90 no Google Lighthouse (Performance, SEO e Acessibilidade). |
| Session Duration   | Tempo médio de permanência na página (indica engajamento visual).     |
| Click-through Rate | Quantidade de cliques nos links externos (LinkedIn/GitHub).           |

## 8. Fora de Escopo (v1)

- Painel administrativo (CMS) para gestão de projetos.
- Suporte a múltiplos idiomas (i18n).
- Troca de temas (Light/Dark mode).
- Seção de Blog ou Artigos.

## 9. Requisitos Não-Funcionais

| Requisito           | Descrição                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| **Performance**     | Carregamento assíncrono de assets pesados e uso de caching do Next.js para arquivos estáticos.      |
| **Responsividade**  | Adaptação total para dispositivos móveis, simplificando animações se necessário.                    |
| **Escalabilidade**  | Estrutura de pastas e componentes que permitam futura implementação de CMS ou novas seções.         |
| **Disponibilidade** | Deploy em infraestrutura de borda (Edge) via Vercel ou similar para garantir baixa latência global. |
