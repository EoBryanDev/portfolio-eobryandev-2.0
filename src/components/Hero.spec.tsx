import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Hero } from './Hero';

// Mock GSAP and @gsap/react
vi.mock('gsap', () => {
  const gsap = {
    timeline: () => ({
      fromTo: vi.fn().mockReturnThis(),
    }),
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

// Mock next/dynamic
vi.mock('next/dynamic', () => ({
  default: () => {
    const MockSpline = () => (
      <div data-testid="spline-mock">Spline Component</div>
    );
    return MockSpline;
  },
}));

describe('Hero', () => {
  it('renders the headline and description', () => {
    render(<Hero />);

    expect(screen.getByText(/EoBryan/i)).toBeDefined();
    expect(
      screen.getByText(/I build high-performance web applications/i),
    ).toBeDefined();
  });

  it('renders the call-to-action buttons', () => {
    render(<Hero />);

    expect(screen.getByText(/View Projects/i)).toBeDefined();
    expect(screen.getByText(/Contact Me/i)).toBeDefined();
  });

  it('renders the Spline component mock', () => {
    render(<Hero />);

    expect(screen.getByTestId('spline-mock')).toBeDefined();
  });
});
