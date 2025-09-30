import '@testing-library/jest-dom';

// Mock Firebase globally
global.console = {
  ...console,
  // Suppress console.log during tests
  log: () => {},
  warn: () => {},
  error: () => {},
};