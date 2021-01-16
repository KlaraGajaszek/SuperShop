import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { IoMdAddCircle } from 'react-icons/io';

import ButtonWithIcon from '../ButtonWithIcon';

describe('ButtonWithIcon', () => {
  it('render without crash', () => {
    render(<ButtonWithIcon />);
  });

  it('not called function when disabled is true', () => {
    const mockCallback = jest.fn();

    render(
      <ButtonWithIcon disable={true} onClick={mockCallback}>
        ContentTest
      </ButtonWithIcon>
    );

    const button = screen.queryByTestId('buttonId');
    userEvent.click(button);
    expect(button).toHaveAttribute('disabled');
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('called function atfer click', () => {
    const mockCallback = jest.fn();
    render(<ButtonWithIcon onClick={mockCallback}>ContentTest</ButtonWithIcon>);

    const button = screen.getByTestId('buttonId');
    userEvent.click(button);
    expect(mockCallback).toHaveBeenCalled();
  });

  it('allows to pass styles as props', () => {
    const button = renderer
      .create(<ButtonWithIcon margin="4" color="red" height="10" width="10" />)
      .toJSON();
    expect(button).toHaveStyleRule('border', 'none');
    expect(button).toHaveStyleRule('outline', 'none');
    expect(button).toHaveStyleRule('margin', '4');
    expect(button).toHaveStyleRule('background-color', 'transparent');
  });

  it('render icon in button', () => {
    render(<ButtonWithIcon as={IoMdAddCircle} />);
    const buttonIcon = screen.getByTestId('buttonIcon');
    expect(buttonIcon).toBeInTheDocument();
  });
});
