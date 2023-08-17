import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { MyPage } from '..';

describe('<MyPage />', () => {
  it('renders and matches the snapshot', () => {
    const { asFragment } = render(<MyPage />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain the title MyPage', () => {
    render(<MyPage />);

    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
