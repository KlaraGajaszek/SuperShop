import React from 'react';
import 'jest-styled-components';

import { screen, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import ProductImg from '../ProductImg';

// jak zamokować src
describe('ProductImg', () => {
  it('render without crash', () => {
    render(<ProductImg />);
  });

  it('render with src', () => {
    render(<ProductImg src={'./test'} />);
    const tag = screen.getByTestId('imageID');
    expect(tag).toBeInTheDocument();
  });
});
