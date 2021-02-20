import React from 'react';
import { screen, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';

import renderer from 'react-test-renderer';

import { FileUpload } from '../FileUpload';

describe('Content', () => {
  it('render without crash', () => {
    render(<FileUpload data-testid="fileUpload" />);
    // const content = screen.getByTestId('contentId');
    // expect(content).toBeInTheDocument();
  });

  // it('render header text inside element', () => {
  //   render(<Content name={'Test'} />);

  //   const titleHeader = screen.getByText('Test');

  //   expect(titleHeader).toBeInTheDocument();

  //   const headerContent = within(titleHeader).queryByText('Test');
  //   expect(headerContent).toBeInTheDocument();
  // });
});
