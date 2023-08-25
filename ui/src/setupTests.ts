import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';

// This extenders Vitests expect method with the methods from react-testing library
expect.extend(matchers);

// Runs a quick cleanup after each test
afterEach(() => {
  cleanup();
});
