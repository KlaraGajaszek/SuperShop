import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik, Form, Field } from 'formik';

import InputDefault from '../Input';
import { debug } from 'console';

const wrapper = ({ children }) => (
  <Formik
    initialValues={{
      name: '',
      description: '',
      image: '',
      tags: [''],
      price: '',
    }}
  >
    <Form>{children}</Form>
  </Formik>
);

describe('Input', () => {
  it('render without crash', () => {
    render(<InputDefault name="description" />, { wrapper });
  });

  it('userEvent.type calls onChange when <input> with no type', () => {
    const onChange = jest.fn();
    render(<InputDefault name="description" onChange={onChange} />, {
      wrapper,
    });

    const input = screen.getByTestId('fieldID');
    expect(input).toBeInTheDocument();
    userEvent.type(input, 'test');
    expect(onChange).toHaveBeenCalledWith('test');
  });
});
