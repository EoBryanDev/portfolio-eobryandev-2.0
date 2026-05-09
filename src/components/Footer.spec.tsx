import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the footer with contact CTA and social links', () => {
    // Arrange
    render(<Footer />);

    // Act & Assert
    expect(screen.getByText(/Let's build something/i)).toBeDefined();
    expect(screen.getByText(/Get in touch/i)).toBeDefined();
    expect(screen.getByLabelText(/GitHub/i)).toBeDefined();
    expect(screen.getByLabelText(/LinkedIn/i)).toBeDefined();
  });

  it('does not contain a resume download link', () => {
    // Arrange
    render(<Footer />);

    // Act & Assert
    const resumeLink = screen.queryByText(/Download Resume/i);
    expect(resumeLink).toBeNull();
  });
});
