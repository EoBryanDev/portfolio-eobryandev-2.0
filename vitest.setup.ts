import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';

vi.mock('next/link', () => ({
  default: ({ children, ...rest }: { children: React.ReactNode }) => {
    return React.createElement('a', rest, children);
  },
}));
