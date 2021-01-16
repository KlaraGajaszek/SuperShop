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
    const card = screen.getByTestId('1');
    userEvent.click(card);
    expect(history.location.pathname).toBe('/products/1');
  });

  it('rendered products description does not the same as a in DB', () => {
    render(<BoxProduct data={data} />);
    const renderedProductsDescription = screen
      .getAllByTestId('contentId')
      .map((product) => product.textContent);

    const fakeProductsDescription = data.map((c) => c.description);

    expect(renderedProductsDescription).not.toEqual(fakeProductsDescription);
  });

  // it('render only 100 first chart as a product description and ...', () => {
  //   render(<BoxProduct data={data} />);
  //   const product = screen.getByTestId('1');

  //   const productContent = within(product).getByTestId('contentDescriptionId');

  //   console.log(productContent.children);
  // });

  it('all  tags label render', () => {
    render(<BoxProduct data={data} />);
    const product = screen.getByTestId('1');
    const productLabelsTags = within(product).getAllByTestId('tag');
    expect(productLabelsTags.length).toEqual(data[0].tags.length);
  });
});
