import React from 'react';
import 'jest-styled-components';

import { screen, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import FormButton from '../FormButton';

//content jest propsem czy można to jakoś inaczej  przetestować
describe('Content', () => {
  it('render without crash', () => {
    render(<FormButton content="test" />);
    const formWrapper = screen.getByTestId('buttonID');
    expect(formWrapper).toBeInTheDocument();
  });

  it('all styles should be render', () => {
    const formButton = renderer
      .create(<FormButton bgcolor="red" radius="5" margin="5" width="20" />)
      .toJSON();
    expect(formButton).toMatchSnapshot();
  });

  it('function pass as btnFunction is called when user click on the button', () => {
    const mockCallback = jest.fn();
    render(<FormButton btnFunction={mockCallback} />);

    userEvent.click(screen.getByTestId('buttonID'));
    expect(mockCallback).toHaveBeenCalled();
  });
});
