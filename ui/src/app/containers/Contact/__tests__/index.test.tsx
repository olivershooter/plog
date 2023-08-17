import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Contact } from '..';

describe('<Contact />', () => {
  it('renders and matches the snapshot', () => {
    const { asFragment } = render(<Contact />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain the title contact', () => {
    render(<Contact />);

    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
