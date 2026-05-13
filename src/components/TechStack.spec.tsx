import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TechStack } from './TechStack';

describe('TechStack', () => {
  it('renders technical stack categories', () => {
    // Arrange
    render(<TechStack />);

    // Act & Assert
    expect(screen.getByText(/Fullstack/i)).toBeDefined();
    expect(screen.getByText(/DevOps/i)).toBeDefined();
    expect(screen.getByText(/Softskills/i)).toBeDefined();
  });

  it('renders skills for the default expanded category', () => {
    // Arrange
    render(<TechStack />);

    // Act & Assert
    expect(screen.getByText('React / Next.js')).toBeDefined();
    expect(screen.getByText('TypeScript')).toBeDefined();
  });

  it('toggles category expansion on click', () => {
    // Arrange
    render(<TechStack />);

    // Verify Fullstack skills are visible initially
    expect(screen.getByText('React / Next.js')).toBeDefined();

    // Act - Click Fullstack button to collapse
    const fullstackButton = screen.getByRole('button', { name: /Fullstack/i });
    fireEvent.click(fullstackButton);

    // Assert - Fullstack skills are hidden
    expect(screen.queryByText('React / Next.js')).toBeNull();

    // Act - Click DevOps button to expand
    const devopsButton = screen.getByRole('button', { name: /DevOps/i });
    fireEvent.click(devopsButton);

    // Assert - DevOps skills are now visible
    expect(screen.getByText('Linux / Bash Scripting')).toBeDefined();
  });
});
