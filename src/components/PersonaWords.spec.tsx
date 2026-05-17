import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { PersonaWords } from './PersonaWords';

// Mock GSAP to prevent errors during tests
vi.mock('gsap', () => {
  return {
    default: {
      registerPlugin: vi.fn(),
      context: vi.fn(() => ({
        revert: vi.fn(),
        add: vi.fn(),
      })),
      timeline: vi.fn(() => ({
        to: vi.fn().mockReturnThis(),
      })),
      utils: {
        toArray: vi.fn((selector) => {
          return document.querySelectorAll(selector);
        }),
      },
    },
  };
});

vi.mock('@gsap/react', () => {
  return {
    useGSAP: (_callback: unknown) => {
      // Just execute the callback safely if needed, or do nothing.
      // Doing nothing is safest for render tests.
    },
  };
});

describe('PersonaWords Component', () => {
  it('renders without crashing', () => {
    render(<PersonaWords />);

    // Check if a word exists
    expect(screen.getByText('life long learner')).toBeInTheDocument();
  });

  it('renders all the persona words', () => {
    render(<PersonaWords />);

    // Just checking for a few words
    expect(screen.getByText('life long learner')).toBeInTheDocument();
    expect(screen.getByText('pluviophile')).toBeInTheDocument();
    expect(screen.getByText('tech lover')).toBeInTheDocument();
    expect(screen.getByText('optimist')).toBeInTheDocument();
  });
});
