import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';
// eslint-disable-next-line import/no-unresolved
import '@testing-library/jest-dom/extend-expect';


//extends vitests expect method with methods from react-testing-library
expect.extend(matchers);

//runs a cleanup after each test clearning the dom
afterEach(() => {
  cleanup();
});
