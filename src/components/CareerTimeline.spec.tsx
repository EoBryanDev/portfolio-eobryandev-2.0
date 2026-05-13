import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CareerTimeline } from './CareerTimeline';

describe('CareerTimeline', () => {
  it('renders section title and introductory text', () => {
    // Arrange
    render(<CareerTimeline />);

    // Act & Assert
    expect(screen.getByText(/Career Timeline & Education/i)).toBeDefined();
  });

  it('renders all career and education milestone titles', () => {
    // Arrange
    render(<CareerTimeline />);

    // Act & Assert
    expect(screen.getByText('Senior Frontend Engineer')).toBeDefined();
    expect(screen.getByText('Fullstack Software Engineer')).toBeDefined();
    expect(screen.getByText('B.S. in Computer Science')).toBeDefined();
  });

  it('renders organization names and time periods correctly', () => {
    // Arrange
    render(<CareerTimeline />);

    // Act & Assert
    expect(screen.getByText('Tech Innovations Inc.')).toBeDefined();
    expect(screen.getByText('University of São Paulo (USP)')).toBeDefined();
    expect(screen.getByText('2024 - Present')).toBeDefined();
  });
});
