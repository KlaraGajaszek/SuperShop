import React from 'react';
import { screen, render } from '@testing-library/react';
import { Formik } from 'formik';

import InputDefault from '../Input';

describe('Input', () => {
  it('render without crash', () => {
    const name = screen.querySelector('input[name="name"]');
    const { getByLabelText, getByTestId } = render(<Formik></Formik>);
  });
});
