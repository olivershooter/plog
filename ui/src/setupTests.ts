import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// This extenders Vitests expect method with the methods from react-testing library
expect.extend(matchers);

// Runs a quick cleanup after each test
afterEach(() => {
  cleanup();
});
