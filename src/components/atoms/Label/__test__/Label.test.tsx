import React from 'react';
import 'jest-styled-components';

import { screen, render, within, getByTestId } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { FaUserAlt } from 'react-icons/fa';

import Label from '../Label';

describe('Label', () => {
  it('render without crash', () => {
    render(<Label />);
    const label = screen.getByTestId('labelID');
    expect(label).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const label = renderer
      .create(<Label label="title" icon={FaUserAlt} />)
      .toJSON();
    expect(label).toMatchSnapshot();
  });

  it('allows to pass styles as props', () => {
    render(<Label color="red" />);

    const labelTitle = screen.getByTestId('labelTitleID');
    expect(labelTitle).toHaveStyleRule('color', 'red');
  });
});
