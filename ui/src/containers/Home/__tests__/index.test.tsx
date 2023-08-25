import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Home from '..';

describe('<Home />', () => {
  it('renders and matches the snapshot', () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain the title Home', () => {
    render(<Home />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
