import React from 'react';
import 'jest-styled-components';

import { screen, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import ProductImg from '../ProductImg';

describe('ProductImg', () => {
  it('render without crash', () => {
    render(<ProductImg />);
  });

  it('check if src render correct', () => {
    const src = 'https://picsum.photos/1000/300';
    const imageProduct = renderer
      .create(<ProductImg imageSrc={src} />)
      .toJSON();
    expect(imageProduct).toMatchSnapshot();
  });
});
