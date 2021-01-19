import React from 'react';
import { screen, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import BoxProduct from '../BoxProduct';
import data from '../../../../utils/data';

describe('BoxProduct', () => {
  it('change url after click the button', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <BoxProduct data={data} />
      </Router>
    );
    const card = screen.getByTestId('product1');
    userEvent.click(card);
    expect(history.location.pathname).toBe('/products/1');
  });

  it('render only 100 first chart as a product description and ...', () => {
    render(<BoxProduct data={data} />);
    const product = screen.getByTestId('product1');

    const productContent = within(product).getByTestId('contentDescriptionId');
    expect(productContent.textContent.length).toEqual(103);
  });

  it('all  tags label render', () => {
    render(<BoxProduct data={data} />);
    const product = screen.getByTestId('product1');
    const productLabelsTags = within(product).getAllByTestId('tag');
    expect(productLabelsTags.length).toEqual(data[0].tags.length);
  });

  it('all products are render', () => {
    render(<BoxProduct data={data} />);

    const allProducts = screen.getAllByTestId('product', {
      exact: false,
    });
    expect(allProducts.length).toEqual(data.length);
  });
});
