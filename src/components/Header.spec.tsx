import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('renders the header with navigation links', () => {
    // Arrange
    render(<Header />);

    // Act & Assert
    expect(screen.getByText(/EoBryanDev/i)).toBeDefined();
    expect(screen.getByText(/Stack/i)).toBeDefined();
    expect(screen.getByText(/Timeline/i)).toBeDefined();
    expect(screen.getByText(/Projects/i)).toBeDefined();
    expect(screen.getByText(/Contact/i)).toBeDefined();
  });
});
