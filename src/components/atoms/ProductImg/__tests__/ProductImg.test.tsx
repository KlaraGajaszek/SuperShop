import React from 'react';

import { render, screen } from '@testing-library/react';

import ProductImg from '../ProductImg';

describe('ProductImg', () => {
  it('renders without crash', () => {
    render(<ProductImg data-testid="productImg" />);

    const img = screen.getByTestId('productImg');
    expect(img).toBeInTheDocument();
    expect(img).toMatchSnapshot();
  });

  //how I can test that good image is rendering with src

  it('render image with src prop', () => {
    render(
      <ProductImg
        data-testid="productImg"
        src="https://picsum.photos/1000/30h0"
      />
    );
    const img = screen.getByTestId('productImg');
    expect(img).toBeInTheDocument();
  });
});
