# 🎨 Documento de Design Visual - Portfolio Aesthetic

Este documento define a identidade visual, o design system e a estrutura de interface do portfólio. Ele serve como a "fonte da verdade" para que a IA mantenha a consistência estética em todos os componentes.

## 1. Visão Geral Estética
*   **Conceito:** Minimalismo High-End / Cyber-Aesthetic.
*   **Vibe:** Interface limpa, transições fluidas (cinematográficas) e interatividade 3D orgânica.
*   **Referência Principal:** Dark mode com acentos em Azul Francia e tipografia impactante.

---

## 2. Design Tokens (Fundação)

### 2.1 Paleta de Cores
| Papel                 | Hex       | Aplicação                                         |
| :-------------------- | :-------- | :------------------------------------------------ |
| **Fundo Escuro**      | `#121212` | Background principal da página                    |
| **Fundo Claro (Alt)** | `#E5E5E5` | Seções específicas ou containers claros           |
| **Texto Primário**    | `#FFFFFF` | Títulos e textos sobre fundo escuro               |
| **Texto Secundário**  | `#1A1A1A` | Textos sobre o fundo claro (#E5E5E5)              |
| **Destaque (Accent)** | `#318CE7` | Azul Francia: Botões, ícones, hover e detalhes 3D |

### 2.2 Tipografia
*   **Títulos (Hero/H1/H2):** Montserrat, Poppins ou Inter.
    *   *Estilo:* **Bold / Extra Bold**.
    *   *Uso:* Impacto visual imediato.
*   **Corpo de Texto:** Inter, Roboto ou Open Sans.
    *   *Estilo:* Regular / Medium.
    *   *Uso:* Leitura técnica e descrições.

### 2.3 Sistema de Espaçamento (Base 8pt)
A IA deve seguir múltiplos de 8 para manter o ritmo visual:
*   `space-1`: 4px | `space-2`: 8px | `space-4`: 16px | `space-8`: 32px | `space-16`: 64px | `space-24`: 96px.

---

## 3. Especificações das Seções (Layout)

### 3.1 Hero Section (Front-Facing)
*   **Visual:** Personagem/Desenvolvedor de frente (centralizado).
*   **Tipografia:** Título em Extra Bold usando a paleta de cores definida.

### 3.2 Sticky Transition (Seção 2)
*   **Mecânica:** Scroll travado (pin) via GSAP.
*   **Conteúdo:** Ciclo de 4 palavras-chave (H2).
*   **Background:** Sistema de "bolinhas" (partículas) interativas que reagem à posição do mouse (repulsão/atração).
*   **Transição:** Enquanto o usuário faz scroll, a palavra atual sai e a próxima entra. Ao final das 4 palavras, o scroll é liberado para a Seção 3.

### 3.3 Timeline de História (Vertical)
*   **Visual:** Uma linha vertical centralizada.
*   **Milestones:** Cards ou textos intercalados (Esquerda -> Direita -> Esquerda).
*   **Animação:** A linha "desce" conforme o scroll acontece, revelando os marcos.

### 3.4 Habilidades (Minimalist Expandable)
*   **Visual:** Cards limpos (estilo glassmorphism ou bordas finas).
*   **Interação:** Ao clicar/expandir, revela sub-categorias:
    1.  **Fullstack**
    2.  **DevOps**
    3.  **Softskills**
*   **Referência:** [Pinterest - Minimalist Skills](https://br.pinterest.com/pin/991988255437040610/)

### 3.5 Project Grid & Footer
*   **Grid:** Layout de colunas para projetos com hover em Azul Francia.
*   **Footer:** Minimalista, fundo `#121212`, links sociais e contato direto.

---

## 4. Componentes e Micro-interações

### 4.1 Glassmorphism (Cartões/Modais)
```css
{
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
```

### 4.2 Botões e Interação

*   **Efeito Magnético:** Botões principais e ícones sociais devem ter efeito de atração magnética ao cursor (GSAP).
*   **Hover Accent:** Mudança suave para `#318CE7` com um leve brilho (box-shadow glow) externo.

## 5. Diretrizes de Assets e Performance

*   **Ícones:** Usar exclusivamente a biblioteca Lucide React (Stroke Width: 1.5px).
*   **Modelos 3D / Partículas:** Otimizar via Draco compression. Usar instanciamento para as "bolinhas" do fundo para manter 60 FPS.
*   **Imagens:** Priorizar formato .webp ou .avif com lazy loading.

## 6. Instruções para IA (Prompt Context)

    **Atenção IA:** Ao gerar código para este projeto:
    1.  **Cores:** Utilize rigorosamente as cores #121212 para fundo e #318CE7 para destaques.
    2.  **Animações:** Todas as animações de scroll devem ser gerenciadas pelo GSAP ScrollTrigger conforme o ANIMATION_GUIDE.md.
    3.  **Tipografia:** Mantenha a tipografia Bold nos títulos e Regular no corpo.
    4.  **Espaçamento:** Siga a escala de espaçamento de 8pt para paddings e margins (ex: p-4, m-8, gap-2).