import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CareerTimeline } from './CareerTimeline';

describe('CareerTimeline', () => {
  it('renders section title and introductory text', () => {
    // Arrange
    render(<CareerTimeline />);

    // Act & Assert
    expect(
      screen.getByText(/Trajetória Profissional & Educação/i),
    ).toBeDefined();
  });

  it('renders all career and education milestone titles', () => {
    // Arrange
    render(<CareerTimeline />);

    // Act & Assert
    expect(screen.getByText('Fullstack Developer')).toBeDefined();
    expect(
      screen.getByText('Bacharelado em Engenharia de Software'),
    ).toBeDefined();
    expect(
      screen.getByText('Técnico em Desenvolvimento Web Full Stack'),
    ).toBeDefined();
  });

  it('renders organization names and time periods correctly', () => {
    // Arrange
    render(<CareerTimeline />);

    // Act & Assert
    expect(screen.getByText('Senior Sistemas (Senior Mega)')).toBeDefined();
    expect(
      screen.getByText(
        'Centro Universitário Nossa Senhora do Patrocínio (CEUNSP)',
      ),
    ).toBeDefined();
    expect(screen.getByText('Dez 2022 - Atualmente')).toBeDefined();
  });
});
