import React from 'react';
import 'jest-styled-components';

import { screen, render, within } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Label from '../Label';

describe('Label', () => {
  it('render without crash', () => {
    render(<Label />);
    const label = screen.getByTestId('labelID');
    expect(label).toBeInTheDocument();
  });

  it('render child components', () => {
    render(<Label />);

    const label = screen.getByTestId('labelID');
    const labelIcon = screen.getByTestId('labelIconID');
    const labelTitle = screen.getByTestId('labelTitleID');

    expect(label).toContainElement(labelIcon);
    expect(label).toContainElement(labelTitle);
  });

  it('render label text', () => {
    render(<Label label="test" />);

    const label = screen.getByTestId('labelID');
    const labelTitle = screen.getByTestId('labelTitleID');
    expect(labelTitle).toBeInTheDocument();

    const Labelcontent = within(labelTitle).queryByText('test');
    expect(Labelcontent).toBeInTheDocument();
  });
  // jak testować ikonki
  it('render label text', () => {
    render(<Label icon="iconTest" />);

    const labelIcon = screen.getByTestId('labelIconID');
    expect(labelIcon).toBeInTheDocument();

    const Labelcontent = within(labelIcon).queryByText('iconTest');
    expect(Labelcontent).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const label = renderer.create(<Label label="title" />).toJSON();
    expect(label).toMatchSnapshot();
  });
});
