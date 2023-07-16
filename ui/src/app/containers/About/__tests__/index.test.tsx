import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { About } from '..';

describe('<About />', () => {
  it('renders and matches the snapshot', () => {
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain the title about', () => {
    render(<About />);

    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
