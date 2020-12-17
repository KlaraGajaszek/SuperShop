import { render, screen } from '@testing-library/react';
import React from 'react';

import ButtonWithIcon from './ButtonWithIcon';

describe('Button', () => {
  it('renders correctly', () => {
    render(<ButtonWithIcon>RenerTest</ButtonWithIcon>);
    const button = screen.queryByText('RenerTest');
    expect(button).toBeInTheDocument();
  });
});
