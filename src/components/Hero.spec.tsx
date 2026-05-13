import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Hero } from './Hero';

// Mock GSAP and @gsap/react
vi.mock('gsap', () => {
  const gsap = {
    timeline: () => ({
      fromTo: vi.fn().mockReturnThis(),
      to: vi.fn().mockReturnThis(),
    }),
    fromTo: vi.fn(),
    to: vi.fn(),
  };
  return { default: gsap };
});

vi.mock('@gsap/react', () => ({
  useGSAP: (callback: () => void) => {
    // We execute the callback synchronously to cover the animation initialization
    // without actually animating anything in tests.
    callback();
  },
}));

describe('Hero', () => {
  it('renders the marquee headline', () => {
    render(<Hero />);

    const elements = screen.getAllByText(/MAURICIO BRYAN DE ANDRADE VIANA/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  it('renders the location badge and image placeholder', () => {
    render(<Hero />);

    expect(screen.getByText('Interior de São Paulo, Brasil.')).toBeDefined();
    expect(screen.getByText('Image Placeholder')).toBeDefined();
  });
});
