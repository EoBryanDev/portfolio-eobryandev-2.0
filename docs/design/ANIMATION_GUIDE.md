# 🕹️ Guia de Animações e Interações

## 1. Sistema de Partículas (Bolinhas Interativas)
*   **Tecnologia:** Three.js ou Canvas puro.
*   **Comportamento:** Bolinhas flutuantes que reagem ao `mousemove`. Ao aproximar o mouse, as bolinhas devem se afastar (repulsão) ou criar uma conexão visual efêmera.
*   **Vibe:** Orgânica e fluida.

## 2. GSAP Sticky Section (Seção 2)
*   **Gatilho:** `ScrollTrigger`.
*   **Comportamento:** 
    1.  A seção "trava" (pin) na tela quando o topo atinge o viewport.
    2.  Conforme o usuário continua o scroll, o H2 atual desaparece (fade-out/scale-down) e o próximo H2 aparece (fade-in/scale-up).
    3.  Repetir para 4 palavras diferentes.
    4.  Após a 4ª palavra, a seção destrava e o scroll prossegue para a Timeline.

## 3. Timeline Vertical (Reveal)
*   **Animação:** Conforme o scroll desce, a linha vertical cresce e os marcos (milestones) aparecem com um efeito de `stagger` (atraso) lateral.
*   **Efeito:** `opacity: 0` e `x: -50` (esquerda) ou `x: 50` (direita) para `opacity: 1` e `x: 0`.

## 4. Cards de Habilidades (Expand/Collapse)
*   **Interação:** Ao clicar ou passar o mouse (hover), o card se expande suavemente usando `gsap.to()` para revelar o conteúdo interno (DevOps, Softskills, etc).
*   **Estilo:** Usar `overflow: hidden` e animar a altura/largura de forma elástica.

## 5. Smooth Scroll
*   **Implementação:** Utilizar **Lenis Scroll** ou **GSAP ScrollSmoother** para garantir que a experiência de navegação seja "premium" e cinematográfica.