import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the footer with social links', () => {
    // Arrange
    render(<Footer />);

    // Act & Assert
    expect(screen.getByLabelText(/GitHub/i)).toBeDefined();
    expect(screen.getByLabelText(/LinkedIn/i)).toBeDefined();
    expect(screen.getByText(/Todos os direitos reservados/i)).toBeDefined();
  });

  it('does not contain a resume download link', () => {
    // Arrange
    render(<Footer />);

    // Act & Assert
    const resumeLink = screen.queryByText(/Download Resume/i);
    expect(resumeLink).toBeNull();
  });
});
