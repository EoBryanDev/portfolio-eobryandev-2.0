import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProjectShowcase } from './ProjectShowcase';

describe('ProjectShowcase', () => {
  it('renders section title and complete archive link', () => {
    // Arrange
    render(<ProjectShowcase />);

    // Act & Assert
    expect(screen.getByText(/Featured Engineering Projects/i)).toBeDefined();
    expect(screen.getByText(/View Complete Archive/i)).toBeDefined();
  });

  it('renders mock project titles and descriptions', () => {
    // Arrange
    render(<ProjectShowcase />);

    // Act & Assert
    expect(screen.getByText('Synit Core Platform')).toBeDefined();
    expect(screen.getByText('CyberAesthetic Portfolio Engine')).toBeDefined();
    expect(screen.getByText('PL/SQL Distributed Synchronizer')).toBeDefined();
  });

  it('renders project technology tags correctly', () => {
    // Arrange
    render(<ProjectShowcase />);

    // Act & Assert
    expect(screen.getByText('Drizzle ORM')).toBeDefined();
    expect(screen.getByText('Cloudflare R2')).toBeDefined();
    expect(screen.getByText('Spline 3D')).toBeDefined();
  });
});
