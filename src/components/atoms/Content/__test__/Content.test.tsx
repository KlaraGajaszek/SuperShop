import React from 'react';
import { screen, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';

import renderer from 'react-test-renderer';

import Content from '../Content';

describe('Content', () => {
  it('render without crash', () => {
    render(<Content data-testid="contentId" />);
    const content = screen.getByTestId('contentId');
    expect(content).toBeInTheDocument();
  });

  it('render header text inside element', () => {
    render(<Content name={'Test'} />);

    const titleHeader = screen.getByText('Test');

    expect(titleHeader).toBeInTheDocument();

    const headerContent = within(titleHeader).queryByText('Test');
    expect(headerContent).toBeInTheDocument();
  });

  it('render description', () => {
    render(<Content description={'TestDescription'} />);

    const titleDescription = screen.getByText('TestDescription');

    expect(titleDescription).toBeInTheDocument();

    const descriptionContent = within(titleDescription).queryByText(
      'TestDescription'
    );
    expect(descriptionContent).toBeInTheDocument();
  });
});
