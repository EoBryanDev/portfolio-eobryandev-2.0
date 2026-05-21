'use client';

import { useCallback, useEffect, useRef } from 'react';

interface IParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  homeX: number;
  homeY: number;
  size: number;
  opacity: number;
  phase: number;
}

const PARTICLE_COUNT = 550;
const REPULSION_RADIUS = 360;
const REPULSION_STRENGTH = 0.9;
const SPRING_STRENGTH = 0.006;
const DAMPING = 0.9;
const DRIFT_AMPLITUDE = 20;
const DRIFT_SPEED = 0.8;

let particles: IParticle[] = [];

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const sizeRef = useRef({ width: 0, height: 0 });
  const dprRef = useRef(1);

  const initParticles = useCallback((width: number, height: number) => {
    const next: IParticle[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;

      next.push({
        x,
        y,
        vx: 0,
        vy: 0,
        homeX: x,
        homeY: y,
        size: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.6 + 0.15,
        phase: Math.random() * Math.PI * 2,
      });
    }

    particles = next;
    sizeRef.current = { width, height };
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    dprRef.current = dpr;

    const width = parent.clientWidth;
    const height = parent.clientHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    initParticles(width, height);
  }, [initParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    handleResize();

    let animationId = 0;

    function tick() {
      if (!canvas || !ctx) return;

      const dpr = dprRef.current;
      const mouse = mouseRef.current;
      const time = Date.now() / 1000;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const driftX = Math.sin(time * DRIFT_SPEED + p.phase) * DRIFT_AMPLITUDE;
        const driftY =
          Math.cos(time * DRIFT_SPEED * 0.7 + p.phase * 1.3) * DRIFT_AMPLITUDE;
        const targetX = p.homeX + driftX;
        const targetY = p.homeY + driftY;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let vx = p.vx;
        let vy = p.vy;

        if (dist < REPULSION_RADIUS && dist > 0) {
          const force =
            ((REPULSION_RADIUS - dist) / REPULSION_RADIUS) * REPULSION_STRENGTH;
          const normalizedX = dx / dist;
          const normalizedY = dy / dist;
          vx -= normalizedX * force;
          vy -= normalizedY * force;
        }

        const springDx = targetX - p.x;
        const springDy = targetY - p.y;
        vx += springDx * SPRING_STRENGTH;
        vy += springDy * SPRING_STRENGTH;

        vx *= DAMPING;
        vy *= DAMPING;

        const x = p.x + vx;
        const y = p.y + vy;

        particles[i] = { ...p, x, y, vx, vy };

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(49, 140, 231, ${p.opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(tick);
    }

    tick();

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const onResize = () => {
      handleResize();
    };

    window.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, [handleResize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      tabIndex={-1}
      aria-hidden="true"
    />
  );
}
