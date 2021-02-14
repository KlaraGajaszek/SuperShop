import React from 'react';
import axios from 'axios';
import { FormPage } from '../FormPage';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('axios');
axios.mockResolvedValue();

describe('check that reques is good', () => {
  it("it's submit succesfully", () => {
    render(<FormPage />);

    // const name = screen.getByName('name');
    // const description = screen.getByPlaceholderText('description');
    // const tags = screen.getByPlaceholderText('tags[0]');
    // const price = screen.getByPlaceholderText('price');

    // userEvent.type(name, 'test1');
    // userEvent.type(description, 'test2');
    // userEvent.type(tags, 'test1');
    // userEvent.type(price, 'test4');

    // const button = screen.getByTestId('buttonID');

    // expect(button).toBeInTheDocument();
    // userEvent.click(button);
    // expect(button).toHaveBeenCalled();
  });
});
